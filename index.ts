import { initBlockchain } from "@silvana-one/mina-utils";
import { Cloud, zkCloudWorker } from "@silvana-one/prover";
import { initializeBindings } from "o1js";
import { TokenLauncherWorker } from "./src/worker.js";

export async function zkcloudworker(cloud: Cloud): Promise<zkCloudWorker> {
  await initializeBindings();
  await initBlockchain(cloud.chain);
  return new TokenLauncherWorker(cloud);
}
