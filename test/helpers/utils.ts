import { CanonicalBlockchain } from "@silvana-one/api";

let chain: CanonicalBlockchain = "mina:local" as CanonicalBlockchain;

export function processArguments(): {
  chain: CanonicalBlockchain;
  compile: boolean;
  deploy: boolean;
  transfer: boolean;
  mint: boolean;
  buy: boolean;
  sell: boolean;
  withdrawBid: boolean;
  withdrawOffer: boolean;
  advancedAdmin: boolean;
  bondingCurve: boolean;
  whitelistOffer: boolean;
  whitelistBid: boolean;
  updateAdminWhitelist: boolean;
  updateOfferWhitelist: boolean;
  updateBidWhitelist: boolean;
  useLocalCloudWorker: boolean;
  useRandomTokenAddress: boolean;
} {
  const chainName = process.env.CHAIN;
  if (
    chainName !== "mina:local" &&
    chainName !== "mina:devnet" &&
    chainName !== "mina:lightnet" &&
    chainName !== "mina:mainnet" &&
    chainName !== "zeko:testnet"
  )
    throw new Error("Invalid chain name");
  chain = chainName as CanonicalBlockchain;

  return {
    chain,
    compile: process.env.COMPILE === "false" ? false : true,
    deploy: process.env.DEPLOY !== "false",
    transfer: process.env.TRANSFER !== "false",
    mint: process.env.MINT !== "false",
    buy: process.env.BUY !== "false",
    sell: process.env.SELL !== "false",
    withdrawBid: process.env.WITHDRAW_BID !== "false",
    withdrawOffer: process.env.WITHDRAW_OFFER !== "false",
    useLocalCloudWorker: process.env.CLOUD !== "zkcloudworker" ? true : false,
    useRandomTokenAddress: process.env.RANDOM !== "false",
    advancedAdmin: process.env.ADVANCED_ADMIN === "true",
    whitelistBid: process.env.WHITELIST_BID == "true",
    whitelistOffer: process.env.WHITELIST_OFFER === "true",
    updateBidWhitelist: process.env.UPDATE_WHITELIST_BID === "true",
    updateAdminWhitelist: process.env.UPDATE_WHITELIST_ADMIN === "true",
    updateOfferWhitelist: process.env.UPDATE_WHITELIST_OFFER === "true",
    bondingCurve: process.env.BONDING_CURVE === "true",
  };
}
