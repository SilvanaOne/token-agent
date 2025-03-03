import {
  sleep,
  transactionParams,
  parseTransactionPayloads,
} from "@silvana-one/mina-utils";
import { zkCloudWorker, Cloud, TransactionMetadata } from "@silvana-one/prover";
import {
  TokenTransaction,
  TokenTransactionParams,
  LaunchTokenStandardAdminParams,
  LaunchTokenAdvancedAdminParams,
  JobResult,
} from "@silvana-one/api";
import {
  FungibleToken,
  AdvancedFungibleToken,
  BondingCurveFungibleToken,
} from "@silvana-one/token";
import {
  contractList,
  tokenVerificationKeys,
  buildTokenLaunchTransaction,
  buildTokenTransaction,
  LAUNCH_FEE,
  TRANSACTION_FEE,
  AdminType,
} from "@silvana-one/abi";
import { VerificationKey, Cache, Transaction } from "o1js";
const WALLET = process.env.WALLET;

interface TinyTransactionParams {
  chain: string;
  contractAddress: string;
  serializedTransaction: string;
  sender: string;
  value: number;
  sendTransaction: boolean;
}
export class TokenLauncherWorker extends zkCloudWorker {
  static verificationKeys: {
    [key: string]: VerificationKey;
  } = {};

  readonly cache: Cache;

  constructor(cloud: Cloud) {
    super(cloud);
    this.cache = Cache.FileSystem(this.cloud.cache);
  }

  private async compile(params: {
    compileAdmin?: boolean;
    adminType?: AdminType;
    verificationKeyHashes: string[];
  }): Promise<void> {
    console.log("Compile", params);
    const {
      compileAdmin = false,
      adminType = "standard",
      verificationKeyHashes,
    } = params;
    try {
      console.time("compiled");
      const vk =
        tokenVerificationKeys[
          this.cloud.chain === "mainnet" ? "mainnet" : "devnet"
        ].vk;
      for (const hash of verificationKeyHashes) {
        const [key, item] =
          Object.entries(vk).find(([_, item]) => item.hash === hash) || [];
        if (!key) throw new Error(`Key not found for hash ${hash}`);
        if (!item) throw new Error(`Verification key for ${hash} not found`);
        console.log("Compiling", item.type, key);
        switch (item.type) {
          case "token":
            if (adminType === "advanced" && compileAdmin) {
              if (!TokenLauncherWorker.verificationKeys.AdvancedFungibleToken) {
                console.time("compiled AdvancedFungibleToken");
                TokenLauncherWorker.verificationKeys.AdvancedFungibleToken = (
                  await AdvancedFungibleToken.compile({
                    cache: this.cache,
                  })
                ).verificationKey;
                console.timeEnd("compiled AdvancedFungibleToken");
              }
              if (
                TokenLauncherWorker.verificationKeys.AdvancedFungibleToken?.hash.toJSON() !==
                hash
              )
                throw new Error(
                  `Verification key for ${key} ${adminType} (${hash}) does not match`
                );
            } else if (adminType === "bondingCurve" && compileAdmin) {
              if (
                !TokenLauncherWorker.verificationKeys.BondingCurveFungibleToken
              ) {
                console.time("compiled BondingCurveFungibleToken");
                TokenLauncherWorker.verificationKeys.BondingCurveFungibleToken =
                  (
                    await BondingCurveFungibleToken.compile({
                      cache: this.cache,
                    })
                  ).verificationKey;
                console.timeEnd("compiled BondingCurveFungibleToken");
              }
              if (
                TokenLauncherWorker.verificationKeys.BondingCurveFungibleToken?.hash.toJSON() !==
                hash
              )
                throw new Error(
                  `Verification key for ${key} ${adminType} (${hash}) does not match`
                );
            } else {
              if (!TokenLauncherWorker.verificationKeys.FungibleToken) {
                console.time("compiled FungibleToken");
                TokenLauncherWorker.verificationKeys.FungibleToken = (
                  await FungibleToken.compile({
                    cache: this.cache,
                  })
                ).verificationKey;
                console.timeEnd("compiled FungibleToken");
              }
              if (
                TokenLauncherWorker.verificationKeys.FungibleToken?.hash.toJSON() !==
                hash
              )
                throw new Error(
                  `Verification key for ${key} ${adminType} (${hash}) does not match`
                );
            }
            break;

          case "admin":
          case "user":
            if (item.type === "admin" && !compileAdmin) break;
            const contract = contractList[key];
            if (!contract) throw new Error(`Contract ${key} not found`);
            if (!TokenLauncherWorker.verificationKeys[key]) {
              console.time(`compiled ${key}`);
              TokenLauncherWorker.verificationKeys[key] = (
                await contract.compile({
                  cache: this.cache,
                })
              ).verificationKey;
              console.timeEnd(`compiled ${key}`);
            }
            if (
              TokenLauncherWorker.verificationKeys[key].hash.toJSON() !== hash
            )
              throw new Error(
                `Verification key for ${key} (${hash}) does not match`
              );
            break;

          case "upgrade":
            throw new Error(`Upgrade key ${key} (${hash}) not supported`);
        }
      }

      console.timeEnd("compiled");
    } catch (error) {
      console.error("Error in compile, restarting container", error);
      // Restarting the container, see https://github.com/o1-labs/o1js/issues/1651
      await this.cloud.forceWorkerRestart();
      throw error;
    }
  }

  public async create(transaction: string): Promise<string | undefined> {
    throw new Error("Method not implemented.");
  }

  public async merge(
    proof1: string,
    proof2: string
  ): Promise<string | undefined> {
    throw new Error("Method not implemented.");
  }

  public async execute(transactions: string[]): Promise<string | undefined> {
    if (transactions.length === 0) throw new Error("transactions is empty");
    if (this.cloud.task !== "prove") throw new Error("Invalid task");
    const proofs: string[] = [];
    for (const transaction of transactions) {
      const tx = JSON.parse(transaction) as TokenTransaction;
      if (!tx.request) throw new Error("tx.request is undefined");
      switch (tx.request?.txType) {
        case "token:launch":
          proofs.push(await this.launch(tx));
          break;

        case "token:transfer":
        case "token:mint":
        case "token:burn":
        case "token:redeem":
        case "token:offer:create":
        case "token:bid:create":
        case "token:offer:buy":
        case "token:bid:sell":
        case "token:bid:withdraw":
        case "token:offer:withdraw":
        case "token:bid:whitelist":
        case "token:offer:whitelist":
        case "token:admin:whitelist":
          proofs.push(await this.transaction(tx));
          break;

        default:
          throw new Error(`Unknown txType: ${tx.request?.txType}`);
      }
    }
    const result = JSON.stringify({ proofs }, null, 2);
    console.log("Proofs size", result.length);
    if (result.length > 350_000)
      console.error("Proofs size is too large:", result.length);
    return result;
  }

  private stringifyJobResult(result: JobResult): string {
    /*
        export interface JobResult {
          success: boolean;
          error?: string;
          tx?: string;
          hash?: string;
          jobStatus?: string;
        }
    */
    const strippedResult = {
      ...result,
      tx: result.hash ? undefined : result.tx,
    };
    return JSON.stringify(strippedResult, null, 2);
  }

  private async launch(args: TokenTransaction): Promise<string> {
    if (
      !args.request ||
      !("adminContractAddress" in args.request) ||
      args.request.adminContractAddress === undefined ||
      args.sender === undefined ||
      args.transaction === undefined ||
      args.signedData === undefined ||
      args.request.tokenAddress === undefined ||
      args.request.uri === undefined ||
      args.request.symbol === undefined
    ) {
      throw new Error("One or more required args are undefined");
    }
    const sendTransaction = args.sendTransaction ?? true;
    if (WALLET === undefined) throw new Error("WALLET is undefined");

    // const contractAddress = PublicKey.fromBase58(args.tokenAddress);
    // console.log("Contract", contractAddress.toBase58());
    // const adminContractAddress = PublicKey.fromBase58(
    //   args.adminContractAddress
    // );
    // console.log("Admin Contract", adminContractAddress.toBase58());
    // const developerAddress = args.developerAddress
    //   ? PublicKey.fromBase58(args.developerAddress)
    //   : undefined;
    // const developerFee = args.developerFee
    //   ? UInt64.from(args.developerFee)
    //   : undefined;

    console.time("prepared tx");
    // const signedJson = JSON.parse(args.signedData);

    const { fee, sender, nonce, memo } = transactionParams(args);
    console.log("Admin (sender)", sender.toBase58());
    if (sender.toBase58() != args.sender) throw new Error("Invalid sender");

    // const {
    //   tx: txNew,
    //   isAdvanced,
    //   verificationKeyHashes,
    // } = await buildTokenDeployTransaction({
    //   adminType: args.adminType,
    //   chain: this.cloud.chain,
    //   fee,
    //   sender,
    //   nonce,
    //   memo,
    //   tokenAddress: contractAddress,
    //   adminContractAddress,
    //   adminAddress: sender,
    //   uri: args.uri,
    //   symbol: args.symbol,
    //   whitelist: args.whitelist,
    //   decimals: UInt8.from(9),
    //   provingKey: PublicKey.fromBase58(WALLET),
    //   provingFee: UInt64.from(LAUNCH_FEE),
    //   developerAddress,
    //   developerFee,
    // });
    const {
      tx: txNew,
      adminType,
      verificationKeyHashes,
    } = await buildTokenLaunchTransaction({
      chain: this.cloud.chain,
      args: args.request,
      provingKey: WALLET,
      provingFee: LAUNCH_FEE,
    });
    const tx = parseTransactionPayloads({ payloads: args, txNew });

    if (tx === undefined) throw new Error("tx is undefined");
    await this.compile({
      compileAdmin: true,
      adminType,
      verificationKeyHashes,
    });

    console.time("proved tx");
    const txProved = await tx.prove();
    const txJSON = txProved.toJSON();
    console.timeEnd("proved tx");
    console.timeEnd("prepared tx");

    try {
      if (!sendTransaction) {
        return this.stringifyJobResult({
          success: true,
          tx: txJSON,
        });
      }
      return await this.sendTokenTransaction({
        tx: txProved,
        txJSON,
        memo,
        metadata: {
          admin: sender.toBase58(),
          tokenAddress: args.request.tokenAddress,
          adminType,
          adminContractAddress: args.request.adminContractAddress,
          symbol: args.symbol,
          uri: args.request.uri,
          txType: "launch",
        } as any,
      });
    } catch (error) {
      console.error("Error sending transaction", error);
      return this.stringifyJobResult({
        success: false,
        tx: txJSON,
        error: String(error),
      });
    }
  }

  private async transaction(args: TokenTransaction): Promise<string> {
    const { txType } = args.request;
    const {
      minaSignerPayload,
      walletPayload,
      proverPayload,
      signedData,
      transaction,
      ...logArgs
    } = args;
    console.log("transaction:", logArgs);

    if (txType === undefined || args.request.tokenAddress === undefined) {
      throw new Error("One or more required args are undefined");
    }
    const sendTransaction = args.sendTransaction ?? true;
    if (WALLET === undefined) throw new Error("WALLET is undefined");

    console.time("prepared tx");

    const { fee, sender, nonce, memo } = transactionParams(args);

    if (txType === "token:launch") {
      throw new Error("Launch transaction is not supported");
    }
    const {
      tx: txNew,
      adminType,
      adminContractAddress,
      verificationKeyHashes,
      symbol,
    } = await buildTokenTransaction({
      chain: this.cloud.chain,
      args: args.request as Exclude<
        TokenTransactionParams,
        LaunchTokenStandardAdminParams | LaunchTokenAdvancedAdminParams
      >,
      provingKey: WALLET,
      provingFee: TRANSACTION_FEE,
    });

    const tx = parseTransactionPayloads({ payloads: args, txNew });
    if (tx === undefined) throw new Error("tx is undefined");

    // const compileOffer = (
    //   [
    //     "offer",
    //     "buy",
    //     "withdrawOffer",
    //     "updateOfferWhitelist",
    //   ] satisfies FungibleTokenTransactionType[] as FungibleTokenTransactionType[]
    // ).includes(txType);
    // const compileBid = (
    //   [
    //     "bid",
    //     "sell",
    //     "withdrawBid",
    //     "updateBidWhitelist",
    //   ] satisfies FungibleTokenTransactionType[] as FungibleTokenTransactionType[]
    // ).includes(txType);
    const compileAdmin =
      txType === "token:mint" ||
      txType === "token:redeem" ||
      txType === "token:admin:whitelist";
    await this.compile({
      compileAdmin,
      adminType,
      verificationKeyHashes,
    });

    console.time("proved tx");
    console.log(`Proving ${txType} transaction...`);
    const txProved = await tx.prove();
    console.timeEnd("proved tx");
    const txJSON = txProved.toJSON();
    console.timeEnd("prepared tx");

    try {
      if (!sendTransaction) {
        return this.stringifyJobResult({
          success: true,
          tx: txJSON,
        });
      }
      return await this.sendTokenTransaction({
        tx: txProved,
        txJSON,
        memo,
        metadata: {
          type: txType,
          sender: sender.toBase58(),
          tokenAddress: args.request.tokenAddress,
          adminType,
          adminContractAddress: adminContractAddress.toBase58(),
          symbol,
        } as any,
      });
    } catch (error) {
      console.error("Error sending transaction", error);
      return this.stringifyJobResult({
        success: false,
        tx: txJSON,
        error: String(error),
      });
    }
  }

  private async sendTokenTransaction(params: {
    tx: Transaction<true, true>;
    txJSON: string;
    memo: string;
    metadata: TransactionMetadata;
  }): Promise<string> {
    const { tx, txJSON, memo, metadata } = params;
    let txSent;
    let sent = false;
    const start = Date.now();
    const timeout = 60 * 1000;
    while (!sent) {
      txSent = await tx.safeSend();
      if (txSent.status == "pending") {
        sent = true;
        console.log(
          `${memo} tx sent: hash: ${txSent.hash} status: ${txSent.status}`
        );
      } else if (this.cloud.chain === "zeko" && Date.now() - start < timeout) {
        console.log("Retrying Zeko tx", txSent.status, txSent.errors);
        await sleep(10000);
      } else {
        console.log(
          `${memo} tx NOT sent: hash: ${txSent?.hash} status: ${txSent?.status}`,
          txSent.errors
        );
        // TODO: handle right API handling on tx-result
        this.cloud.publishTransactionMetadata({
          txId: txSent?.hash,
          metadata: {
            ...metadata,
            txStatus: txSent?.status,
            txErrors: txSent?.errors,
            txHash: txSent?.hash,
          } as any,
        });
        return this.stringifyJobResult({
          success: false,
          tx: txJSON,
          hash: txSent.hash,
          status: txSent.status,
          error: String(txSent.errors),
        });
      }
    }
    if (this.cloud.isLocalCloud && txSent?.status === "pending") {
      const txIncluded = await txSent.safeWait();
      console.log(
        `${memo} tx included into block: hash: ${txIncluded.hash} status: ${txIncluded.status}`
      );
      return this.stringifyJobResult({
        success: true,
        tx: txJSON,
        hash: txIncluded.hash,
      });
    }
    if (txSent?.hash)
      this.cloud.publishTransactionMetadata({
        txId: txSent?.hash,
        metadata: {
          ...metadata,
          txStatus: txSent?.status,
          txErrors: txSent?.errors,
          txHash: txSent?.hash,
        } as any,
      });
    return this.stringifyJobResult({
      success:
        txSent?.hash !== undefined && txSent?.status == "pending"
          ? true
          : false,
      tx: txJSON,
      hash: txSent?.hash,
      status: txSent?.status,
      error: String(txSent?.errors ?? ""),
    });
  }
}
