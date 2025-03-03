# zkCloudWorker Custom Token Launchpad worker

## Tests

### Run local tests

```sh
yarn local
```

### Run tests on Lightnet

```sh
zk lightnet start
zk lightnet explorer
yarn lightnet
```

### Run tests on Devnet

Using local worker

```sh
yarn devnet.local
```

Using zkCloudWorker

```sh
yarn devnet.zkcloudworker
```

### Run tests on Zeko

Using local worker

```sh
yarn zeko.local
```

Using zkCloudWorker

```sh
yarn zeko.zkcloudworker
```

Faucet: https://zeko.io/faucet

Explorer: https://zekoscan.io/devnet/home

To run tests using zkCloudWorker, you need to configure API key in env.json as shown in the env.example.json

## Logs

### Devnet with local worker

```sh
% yarn devnet.local
[9:14:45 PM] RSS memory initializing blockchain: 361 MB
[9:14:45 PM] non-local chain: devnet
[9:14:46 PM] contract address: B62qp9RWiQXi15M8j8bSN3csVZ93zeuwJHiMSRmRgWjvx5VGc315qmv
[9:14:46 PM] admin: B62qmKggMTU6TyrEXdCGEakBbsc3EBeypXTWQmpqRA3y88xepXeQm3a
[9:14:46 PM] admin balance: 299
[9:14:47 PM] user1 balance: 299
[9:14:47 PM] user2 balance: 299
[9:14:47 PM] user3 balance: 299
[9:14:48 PM] user4 balance: 299
[9:14:48 PM] wallet balance: 57.9
[9:14:50 PM] Deploying contract...
[9:14:50 PM] starting token launcher version 0.2.7 on chain devnet
[9:14:50 PM] Contract B62qp9RWiQXi15M8j8bSN3csVZ93zeuwJHiMSRmRgWjvx5VGc315qmv
[9:14:50 PM] Admin Contract B62qk3w2iq6a8jrqeR52D5hezt315tjbi1Qzvp9kJk5Q8AkgEZaXL5Y
[9:14:53 PM] compiled FungibleTokenAdmin: 2.946s
[9:14:59 PM] compiled FungibleToken: 6.804s
[9:14:59 PM] compiled: 9.751s
[9:14:59 PM] Preparing tx...
[9:14:59 PM] Admin (sender) B62qmKggMTU6TyrEXdCGEakBbsc3EBeypXTWQmpqRA3y88xepXeQm3a
[9:15:00 PM] Sender balance: 299
[9:15:09 PM] proved tx: 2.187ms
[9:15:09 PM] prepared tx: 9.638s
[9:15:11 PM] deploy token TEST tx sent: hash: 5JuECtQbnx3JWqpFvnMeyz9oeisYNb2yLf1dce3KRdmd6ioJHGkx status: pending
[9:18:38 PM] deploy token TEST tx included into block: hash: 5JuECtQbnx3JWqpFvnMeyz9oeisYNb2yLf1dce3KRdmd6ioJHGkx status: included
[9:18:38 PM] answer: {
  success: true,
  jobId: '1729016090101.cZBQb1143wM5QGCGwXy0aZgBKNlG6vYW',
  result: undefined,
  error: undefined
}
[9:18:38 PM] deploy jobId: 1729016090101.cZBQb1143wM5QGCGwXy0aZgBKNlG6vYW
[9:18:38 PM] waitForJobResult result: {
  "success": true,
  "tx": "{\"feePayer\":{\"bod
[9:18:38 PM] deploy hash: 5JuECtQbnx3JWqpFvnMeyz9oeisYNb2yLf1dce3KRdmd6ioJHGkx
[9:18:38 PM] waiting for deploy tx to be included...
[9:18:39 PM] deploy tx included
[9:18:39 PM] RSS memory deployed: 1373 MB, changed by 1012 MB
[9:18:39 PM] deployed: 3:51.827 (m:ss.mmm)
[9:18:56 PM] Minting tokens...
[9:18:56 PM] starting token launcher version 0.2.7 on chain devnet
[9:18:56 PM] Contract B62qp9RWiQXi15M8j8bSN3csVZ93zeuwJHiMSRmRgWjvx5VGc315qmv
[9:18:56 PM] Admin Contract B62qk3w2iq6a8jrqeR52D5hezt315tjbi1Qzvp9kJk5Q8AkgEZaXL5Y
[9:18:56 PM] compiled: 0.003ms
[9:18:56 PM] Preparing tx...
[9:18:56 PM] Admin (sender) B62qmKggMTU6TyrEXdCGEakBbsc3EBeypXTWQmpqRA3y88xepXeQm3a
[9:18:59 PM] Sender balance: 294.8
[9:19:17 PM] proved tx: 2.477ms
[9:19:17 PM] prepared tx: 20.459s
[9:19:18 PM] mint 1000 TEST tx sent: hash: 5JuYvhFQSmNRGRCqBzSvY2YnBDJhKUioYaPaFDcaKmHbTmeN2byn status: pending
[9:21:22 PM] mint 1000 TEST tx included into block: hash: 5JuYvhFQSmNRGRCqBzSvY2YnBDJhKUioYaPaFDcaKmHbTmeN2byn status: included
[9:21:22 PM] answer: {
  success: true,
  jobId: '1729016336578.AUYDvLRuptE3gQ82Ow4eYAHYwHjeAAun',
  result: undefined,
  error: undefined
}
[9:21:22 PM] mint jobId: 1729016336578.AUYDvLRuptE3gQ82Ow4eYAHYwHjeAAun
[9:21:22 PM] waitForJobResult result: {
  "success": true,
  "tx": "{\"feePayer\":{\"bod
[9:21:22 PM] mint hash: 5JuYvhFQSmNRGRCqBzSvY2YnBDJhKUioYaPaFDcaKmHbTmeN2byn
[9:21:26 PM] Minting tokens...
[9:21:26 PM] starting token launcher version 0.2.7 on chain devnet
[9:21:26 PM] Contract B62qp9RWiQXi15M8j8bSN3csVZ93zeuwJHiMSRmRgWjvx5VGc315qmv
[9:21:26 PM] Admin Contract B62qk3w2iq6a8jrqeR52D5hezt315tjbi1Qzvp9kJk5Q8AkgEZaXL5Y
[9:21:26 PM] compiled: 0.009ms
[9:21:26 PM] Preparing tx...
[9:21:26 PM] Admin (sender) B62qmKggMTU6TyrEXdCGEakBbsc3EBeypXTWQmpqRA3y88xepXeQm3a
[9:21:28 PM] Sender balance: 293.5
[9:21:44 PM] proved tx: 5.282ms
[9:21:44 PM] prepared tx: 17.930s
[9:21:44 PM] mint 1000 TEST tx sent: hash: 5JupjBzC5f8y48AHJxH2WDP2wDtyvG9YYXf366PFQmY3MYh9PVs1 status: pending
[9:27:39 PM] mint 1000 TEST tx included into block: hash: 5JupjBzC5f8y48AHJxH2WDP2wDtyvG9YYXf366PFQmY3MYh9PVs1 status: included
[9:27:39 PM] answer: {
  success: true,
  jobId: '1729016486352.EMdnwdTStsXf6LtNKMWz9OWLh2U4R6bD',
  result: undefined,
  error: undefined
}
[9:27:39 PM] mint jobId: 1729016486352.EMdnwdTStsXf6LtNKMWz9OWLh2U4R6bD
[9:27:39 PM] waitForJobResult result: {
  "success": true,
  "tx": "{\"feePayer\":{\"bod
[9:27:39 PM] mint hash: 5JupjBzC5f8y48AHJxH2WDP2wDtyvG9YYXf366PFQmY3MYh9PVs1
[9:27:39 PM] Waiting for mint tx to be included... 5JuYvhFQSmNRGRCqBzSvY2YnBDJhKUioYaPaFDcaKmHbTmeN2byn
[9:27:40 PM] mint tx included 5JuYvhFQSmNRGRCqBzSvY2YnBDJhKUioYaPaFDcaKmHbTmeN2byn
[9:27:40 PM] Waiting for mint tx to be included... 5JupjBzC5f8y48AHJxH2WDP2wDtyvG9YYXf366PFQmY3MYh9PVs1
[9:27:41 PM] mint tx included 5JupjBzC5f8y48AHJxH2WDP2wDtyvG9YYXf366PFQmY3MYh9PVs1
[9:27:41 PM] RSS memory minted: 1618 MB, changed by 245 MB
[9:27:41 PM] minted: 8:51.352 (m:ss.mmm)
[9:27:55 PM] Transferring tokens...
[9:27:55 PM] starting token launcher version 0.2.7 on chain devnet
[9:27:55 PM] Contract B62qp9RWiQXi15M8j8bSN3csVZ93zeuwJHiMSRmRgWjvx5VGc315qmv
[9:27:55 PM] compiled: 0.003ms
[9:27:55 PM] Preparing tx...
[9:27:55 PM] Sender: B62qmWwo7jjmUp6yEWw1e1zYV5D2mGX6auumiqfn3ZkkoJbTgvwifKs
[9:27:58 PM] Sender balance: 299
[9:28:04 PM] proved tx: 1.724ms
[9:28:04 PM] prepared tx: 8.601s
[9:28:05 PM] transfer 10 TEST tx sent: hash: 5Jtvq4mtgeT6cgtF27kbHjHn6bys1tJ3RqJxUy82DguzjVBj1MtF status: pending
[9:30:32 PM] transfer 10 TEST tx included into block: hash: 5Jtvq4mtgeT6cgtF27kbHjHn6bys1tJ3RqJxUy82DguzjVBj1MtF status: included
[9:30:32 PM] answer: {
  success: true,
  jobId: '1729016875961.4n6OAwf7whyxVxBEylgjRwRRrt46S8Fb',
  result: undefined,
  error: undefined
}
[9:30:32 PM] transfer jobId: 1729016875961.4n6OAwf7whyxVxBEylgjRwRRrt46S8Fb
[9:30:32 PM] waitForJobResult result: {
  "success": true,
  "tx": "{\"feePayer\":{\"bod
[9:30:32 PM] transfer hash: 5Jtvq4mtgeT6cgtF27kbHjHn6bys1tJ3RqJxUy82DguzjVBj1MtF
[9:30:35 PM] Transferring tokens...
[9:30:35 PM] starting token launcher version 0.2.7 on chain devnet
[9:30:35 PM] Contract B62qp9RWiQXi15M8j8bSN3csVZ93zeuwJHiMSRmRgWjvx5VGc315qmv
[9:30:35 PM] compiled: 0.007ms
[9:30:35 PM] Preparing tx...
[9:30:35 PM] Sender: B62qrnnYQfFt9tPRp44fsWHds8LF7ojJKhknYZKNYU3X4xVCdSnnRJc
[9:30:37 PM] Sender balance: 299
[9:30:43 PM] proved tx: 5.14ms
[9:30:43 PM] prepared tx: 7.641s
[9:30:43 PM] transfer 10 TEST tx sent: hash: 5JvAGBsUTDX2EdeMAfex23KcoHifsS86XerpoezGFK2Bg998SkPH status: pending
[9:33:31 PM] transfer 10 TEST tx included into block: hash: 5JvAGBsUTDX2EdeMAfex23KcoHifsS86XerpoezGFK2Bg998SkPH status: included
[9:33:31 PM] answer: {
  success: true,
  jobId: '1729017035795.Yff2aAZ0UIL1kk3PEmh15LJvR4X98ZW7',
  result: undefined,
  error: undefined
}
[9:33:31 PM] transfer jobId: 1729017035795.Yff2aAZ0UIL1kk3PEmh15LJvR4X98ZW7
[9:33:31 PM] waitForJobResult result: {
  "success": true,
  "tx": "{\"feePayer\":{\"bod
[9:33:31 PM] transfer hash: 5JvAGBsUTDX2EdeMAfex23KcoHifsS86XerpoezGFK2Bg998SkPH
[9:33:31 PM] Waiting for transfer tx to be included... 5Jtvq4mtgeT6cgtF27kbHjHn6bys1tJ3RqJxUy82DguzjVBj1MtF
[9:33:32 PM] transfer tx included 5Jtvq4mtgeT6cgtF27kbHjHn6bys1tJ3RqJxUy82DguzjVBj1MtF
[9:33:32 PM] Waiting for transfer tx to be included... 5JvAGBsUTDX2EdeMAfex23KcoHifsS86XerpoezGFK2Bg998SkPH
[9:33:33 PM] transfer tx included 5JvAGBsUTDX2EdeMAfex23KcoHifsS86XerpoezGFK2Bg998SkPH
[9:33:33 PM] RSS memory transferred: 1653 MB, changed by 35 MB
[9:33:33 PM] transferred: 5:42.634 (m:ss.mmm)
 PASS  tests/worker.test.ts
  Token Launchpad Worker
    ✓ should initialize blockchain (3010 ms)
    ✓ should deploy contract (241808 ms)
    ✓ should mint tokens (541357 ms)
    ✓ should transfer tokens (352630 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1139.81 s
Ran all test suites matching /worker.test/i.
```

### Devnet with zkCloudWorker

```sh
% yarn devnet.zkcloudworker
[9:47:08 PM] RSS memory initializing blockchain: 361 MB
[9:47:08 PM] non-local chain: devnet
[9:47:09 PM] contract address: B62qj1EU8WVYcy6oWCpQcL5dAoGdmpBexwQAg5LsMgtUZPjDNvAFhbw
[9:47:09 PM] admin: B62qmKggMTU6TyrEXdCGEakBbsc3EBeypXTWQmpqRA3y88xepXeQm3a
[9:47:10 PM] admin balance: 292.2
[9:47:10 PM] user1 balance: 297.7
[9:47:10 PM] user2 balance: 297.7
[9:47:10 PM] user3 balance: 299
[9:47:11 PM] user4 balance: 299
[9:47:11 PM] wallet balance: 59.3
[9:47:14 PM] Deploying contract...
[9:47:15 PM] answer: {
  success: true,
  jobId: 'zkCWbhe3ytOUYn0vDCbHlmoYsPndXrLhnFtVdDX2ShXn0T3U',
  result: undefined,
  error: undefined
}
[9:47:15 PM] deploy jobId: zkCWbhe3ytOUYn0vDCbHlmoYsPndXrLhnFtVdDX2ShXn0T3U
[9:47:26 PM] 2024-10-15T18:47:16.821Z	INFO	worker {
  command: 'execute',
  id: 'B62qqhvKVk2KEia7awrhNM1nPLUEXDM8WiPut7xXKrNDYDae1JU5GzN',
  jobId: 'zkCWbhe3ytOUYn0vDCbHlmoYsPndXrLhnFtVdDX2ShXn0T3U',
  developer: 'DFST',
  repo: 'token-launchpad',
  args: '{"sender":"B62qmKggMTU6TyrEXdCGEakBbsc3EBeypXTWQmpqRA3y88xepXeQm3a"}',
  chain: 'devnet'
}

[9:47:26 PM] 2024-10-15T18:47:17.357Z	INFO	zkCloudWorker Execute start: {
  command: 'execute',
  developer: 'DFST',
  repo: 'token-launchpad',
  id: 'B62qqhvKVk2KEia7awrhNM1nPLUEXDM8WiPut7xXKrNDYDae1JU5GzN',
  jobId: 'zkCWbhe3ytOUYn0vDCbHlmoYsPndXrLhnFtVdDX2ShXn0T3U',
  job: {
    metadata: 'deploy token TEST',
    logStreams: [],
    task: 'deploy',
    args: '{"sender":"B62qmKggMTU6TyrEXdCGEakBbsc3EBeypXTWQmpqRA3y88xepXeQm3a"}',
    timeCreated: 1729018035004,
    jobId: 'zkCWbhe3ytOUYn0vDCbHlmoYsPndXrLhnFtVdDX2ShXn0T3U',
    repo: 'token-launchpad',
    filename: 'DFST/execute.1729018034855.json',
    developer: 'DFST',
    chain: 'devnet',
    txNumber: 1,
    jobStatus: 'created',
    id: 'B62qqhvKVk2KEia7awrhNM1nPLUEXDM8WiPut7xXKrNDYDae1JU5GzN'
  }
}

[9:47:26 PM] 2024-10-15T18:47:17.416Z	INFO	execute: number of transactions: 1

[9:47:26 PM] 2024-10-15T18:47:17.416Z	INFO	RSS memory start: 99 MB

[9:47:26 PM] 2024-10-15T18:47:17.440Z	INFO	worker DFST/token-launchpad used already 68 times

[9:47:26 PM] 2024-10-15T18:47:17.441Z	INFO	Running worker { developer: 'DFST', repo: 'token-launchpad', version: '0.2.7' }

[9:47:37 PM] 2024-10-15T18:47:19.463Z	INFO	starting token launcher version 0.2.7 on chain devnet

[9:47:37 PM] 2024-10-15T18:47:20.713Z	INFO	Contract B62qj1EU8WVYcy6oWCpQcL5dAoGdmpBexwQAg5LsMgtUZPjDNvAFhbw

[9:47:37 PM] 2024-10-15T18:47:20.714Z	INFO	Admin Contract B62qibLZckRWj9PyVdinNLi3NDoog8oiURSNe9uwWjheHhQqTzz2bLH

[9:47:37 PM] 2024-10-15T18:47:25.234Z	INFO	compiled FungibleTokenAdmin: 4.517s

[9:47:47 PM] 2024-10-15T18:47:34.822Z	INFO	compiled FungibleToken: 9.588s

[9:47:47 PM] 2024-10-15T18:47:34.822Z	INFO	compiled: 14.106s

[9:47:47 PM] 2024-10-15T18:47:34.822Z	INFO	Preparing tx...

[9:47:47 PM] 2024-10-15T18:47:34.889Z	INFO	Admin (sender) B62qmKggMTU6TyrEXdCGEakBbsc3EBeypXTWQmpqRA3y88xepXeQm3a

[9:47:47 PM] 2024-10-15T18:47:36.217Z	INFO	Sender balance: 292.2

[9:48:19 PM] 2024-10-15T18:48:06.623Z	INFO	proved tx: 3.48ms

[9:48:19 PM] 2024-10-15T18:48:06.623Z	INFO	prepared tx: 31.801s

[9:48:19 PM] 2024-10-15T18:48:08.215Z	INFO	deploy token TEST tx sent: hash: 5JuQ6DWuugH8aYb9aTsoYz9nkGQGSqCutT1YvrZ1z8hAW3xhfb9S status: pending

[9:48:19 PM] 2024-10-15T18:48:08.216Z	INFO	RSS memory finished: 1405 MB, changed by 1306 MB

[9:48:19 PM] 2024-10-15T18:48:08.217Z	INFO	zkCloudWorker Execute Sync: 50.800s

[9:48:19 PM] 2024-10-15T18:48:08.282Z	INFO	Lambda call: charge id: edbb1298-19bc-4acb-ba6f-27e76d2e38f5

[9:48:19 PM] 2024-10-15T18:48:08.344Z	INFO	Success: S3File: put

[9:48:19 PM] 2024-10-15T18:48:09.367Z	INFO	zkCloudWorker Execute: 52.010s

[9:48:19 PM] REPORT RequestId: Duration: 52576.13 ms	Billed Duration: 52577 ms	Memory Size: 10240 MB	Max Memory Used: 1696 MB	Init Duration: 1056.38 ms

[9:48:19 PM] waitForJobResult result: {
  "success": true,
  "tx": "{\"feePayer\":{\"bod
[9:48:19 PM] deploy hash: 5JuQ6DWuugH8aYb9aTsoYz9nkGQGSqCutT1YvrZ1z8hAW3xhfb9S
[9:48:19 PM] waiting for deploy tx to be included...
[9:51:15 PM] deploy tx included
[9:51:15 PM] RSS memory deployed: 484 MB, changed by 123 MB
[9:51:15 PM] deployed: 4:03.908 (m:ss.mmm)
[9:51:31 PM] Minting tokens...
[9:51:32 PM] answer: {
  success: true,
  jobId: 'zkCWvW0vOKOKfZ0i10tTQxODhIUiMRoKIatIxXWpuK2ZnbLo',
  result: undefined,
  error: undefined
}
[9:51:32 PM] mint jobId: zkCWvW0vOKOKfZ0i10tTQxODhIUiMRoKIatIxXWpuK2ZnbLo
[9:51:43 PM] 2024-10-15T18:51:32.026Z	INFO	worker {
  command: 'execute',
  id: 'B62qqhvKVk2KEia7awrhNM1nPLUEXDM8WiPut7xXKrNDYDae1JU5GzN',
  jobId: 'zkCWvW0vOKOKfZ0i10tTQxODhIUiMRoKIatIxXWpuK2ZnbLo',
  developer: 'DFST',
  repo: 'token-launchpad',
  args: '{"sender":"B62qmKggMTU6TyrEXdCGEakBbsc3EBeypXTWQmpqRA3y88xepXeQm3a"}',
  chain: 'devnet'
}

[9:51:43 PM] 2024-10-15T18:51:32.389Z	INFO	zkCloudWorker Execute start: {
  command: 'execute',
  developer: 'DFST',
  repo: 'token-launchpad',
  id: 'B62qqhvKVk2KEia7awrhNM1nPLUEXDM8WiPut7xXKrNDYDae1JU5GzN',
  jobId: 'zkCWvW0vOKOKfZ0i10tTQxODhIUiMRoKIatIxXWpuK2ZnbLo',
  job: {
    metadata: 'mint token TEST',
    logStreams: [],
    task: 'mint',
    args: '{"sender":"B62qmKggMTU6TyrEXdCGEakBbsc3EBeypXTWQmpqRA3y88xepXeQm3a"}',
    timeCreated: 1729018291718,
    jobId: 'zkCWvW0vOKOKfZ0i10tTQxODhIUiMRoKIatIxXWpuK2ZnbLo',
    repo: 'token-launchpad',
    filename: 'DFST/execute.1729018291630.json',
    developer: 'DFST',
    chain: 'devnet',
    txNumber: 1,
    jobStatus: 'created',
    id: 'B62qqhvKVk2KEia7awrhNM1nPLUEXDM8WiPut7xXKrNDYDae1JU5GzN'
  }
}

[9:51:43 PM] 2024-10-15T18:51:32.435Z	INFO	execute: number of transactions: 1

[9:51:43 PM] 2024-10-15T18:51:32.435Z	INFO	RSS memory start: 845 MB, changed by -560 MB

[9:51:43 PM] 2024-10-15T18:51:32.459Z	INFO	worker DFST/token-launchpad used already 69 times

[9:51:43 PM] 2024-10-15T18:51:32.459Z	INFO	Running worker { developer: 'DFST', repo: 'token-launchpad', version: '0.2.7' }

[9:51:43 PM] 2024-10-15T18:51:32.459Z	INFO	starting token launcher version 0.2.7 on chain devnet

[9:51:43 PM] 2024-10-15T18:51:32.467Z	INFO	Contract B62qj1EU8WVYcy6oWCpQcL5dAoGdmpBexwQAg5LsMgtUZPjDNvAFhbw

[9:51:43 PM] 2024-10-15T18:51:32.467Z	INFO	Admin Contract B62qibLZckRWj9PyVdinNLi3NDoog8oiURSNe9uwWjheHhQqTzz2bLH

[9:51:43 PM] 2024-10-15T18:51:32.472Z	INFO	compiled: 0.02ms

[9:51:43 PM] 2024-10-15T18:51:32.472Z	INFO	Preparing tx...

[9:51:43 PM] 2024-10-15T18:51:32.533Z	INFO	Admin (sender) B62qmKggMTU6TyrEXdCGEakBbsc3EBeypXTWQmpqRA3y88xepXeQm3a

[9:51:43 PM] 2024-10-15T18:51:34.099Z	INFO	Sender balance: 288

[9:52:24 PM] 2024-10-15T18:52:15.281Z	INFO	proved tx: 7.751ms

[9:52:24 PM] 2024-10-15T18:52:15.281Z	INFO	prepared tx: 42.809s

[9:52:24 PM] 2024-10-15T18:52:15.777Z	INFO	mint 1000 TEST tx sent: hash: 5Jub9yftbPjJWbvy8MYgf1jmTci8QUSpNbmeb9rzMi3P6KrFYb6j status: pending

[9:52:24 PM] 2024-10-15T18:52:15.779Z	INFO	RSS memory finished: 1131 MB, changed by 286 MB

[9:52:24 PM] 2024-10-15T18:52:15.779Z	INFO	zkCloudWorker Execute Sync: 43.344s

[9:52:24 PM] 2024-10-15T18:52:15.827Z	INFO	Lambda call: charge id: 045d2014-bfaa-468f-b53c-676b2141e2e5

[9:52:24 PM] 2024-10-15T18:52:15.891Z	INFO	Success: S3File: put

[9:52:24 PM] 2024-10-15T18:52:16.618Z	INFO	zkCloudWorker Execute: 44.229s

[9:52:24 PM] REPORT RequestId: Duration: 44603.87 ms	Billed Duration: 44604 ms	Memory Size: 10240 MB	Max Memory Used: 1696 MB

[9:52:24 PM] waitForJobResult result: {
  "success": true,
  "tx": "{\"feePayer\":{\"bod
[9:52:24 PM] mint hash: 5Jub9yftbPjJWbvy8MYgf1jmTci8QUSpNbmeb9rzMi3P6KrFYb6j
[9:52:28 PM] Minting tokens...
[9:52:29 PM] answer: {
  success: true,
  jobId: 'zkCWbEjVaVJRcUeltiJtkyp22AwTLTJHjJkhEbwbbjJlUHuV',
  result: undefined,
  error: undefined
}
[9:52:29 PM] mint jobId: zkCWbEjVaVJRcUeltiJtkyp22AwTLTJHjJkhEbwbbjJlUHuV
[9:52:40 PM] 2024-10-15T18:52:29.265Z	INFO	worker {
  command: 'execute',
  id: 'B62qqhvKVk2KEia7awrhNM1nPLUEXDM8WiPut7xXKrNDYDae1JU5GzN',
  jobId: 'zkCWbEjVaVJRcUeltiJtkyp22AwTLTJHjJkhEbwbbjJlUHuV',
  developer: 'DFST',
  repo: 'token-launchpad',
  args: '{"sender":"B62qmKggMTU6TyrEXdCGEakBbsc3EBeypXTWQmpqRA3y88xepXeQm3a"}',
  chain: 'devnet'
}

[9:52:40 PM] 2024-10-15T18:52:30.030Z	INFO	zkCloudWorker Execute start: {
  command: 'execute',
  developer: 'DFST',
  repo: 'token-launchpad',
  id: 'B62qqhvKVk2KEia7awrhNM1nPLUEXDM8WiPut7xXKrNDYDae1JU5GzN',
  jobId: 'zkCWbEjVaVJRcUeltiJtkyp22AwTLTJHjJkhEbwbbjJlUHuV',
  job: {
    metadata: 'mint token TEST',
    logStreams: [],
    task: 'mint',
    args: '{"sender":"B62qmKggMTU6TyrEXdCGEakBbsc3EBeypXTWQmpqRA3y88xepXeQm3a"}',
    timeCreated: 1729018349078,
    jobId: 'zkCWbEjVaVJRcUeltiJtkyp22AwTLTJHjJkhEbwbbjJlUHuV',
    repo: 'token-launchpad',
    filename: 'DFST/execute.1729018349007.json',
    developer: 'DFST',
    chain: 'devnet',
    txNumber: 1,
    jobStatus: 'created',
    id: 'B62qqhvKVk2KEia7awrhNM1nPLUEXDM8WiPut7xXKrNDYDae1JU5GzN'
  }
}

[9:52:40 PM] 2024-10-15T18:52:30.076Z	INFO	execute: number of transactions: 1

[9:52:40 PM] 2024-10-15T18:52:30.077Z	INFO	RSS memory start: 1131 MB, changed by 0 MB

[9:52:40 PM] 2024-10-15T18:52:30.106Z	INFO	worker DFST/token-launchpad used already 70 times

[9:52:40 PM] 2024-10-15T18:52:30.106Z	INFO	Running worker { developer: 'DFST', repo: 'token-launchpad', version: '0.2.7' }

[9:52:40 PM] 2024-10-15T18:52:30.107Z	INFO	starting token launcher version 0.2.7 on chain devnet

[9:52:40 PM] 2024-10-15T18:52:30.115Z	INFO	Contract B62qj1EU8WVYcy6oWCpQcL5dAoGdmpBexwQAg5LsMgtUZPjDNvAFhbw

[9:52:40 PM] 2024-10-15T18:52:30.115Z	INFO	Admin Contract B62qibLZckRWj9PyVdinNLi3NDoog8oiURSNe9uwWjheHhQqTzz2bLH

[9:52:40 PM] 2024-10-15T18:52:30.118Z	INFO	compiled: 0.008ms

[9:52:40 PM] 2024-10-15T18:52:30.119Z	INFO	Preparing tx...

[9:52:40 PM] 2024-10-15T18:52:30.160Z	INFO	Admin (sender) B62qmKggMTU6TyrEXdCGEakBbsc3EBeypXTWQmpqRA3y88xepXeQm3a

[9:52:40 PM] 2024-10-15T18:52:31.494Z	INFO	Sender balance: 288

[9:53:22 PM] 2024-10-15T18:53:09.553Z	INFO	proved tx: 3.302ms

[9:53:22 PM] 2024-10-15T18:53:09.553Z	INFO	prepared tx: 39.434s

[9:53:22 PM] 2024-10-15T18:53:10.115Z	INFO	mint 1000 TEST tx sent: hash: 5JvFSC4sTQTWcR5nt2xdnfBLYMjHZNA2eCA6edhUR35QRZwTAnq4 status: pending

[9:53:22 PM] 2024-10-15T18:53:10.117Z	INFO	RSS memory finished: 1282 MB, changed by 151 MB

[9:53:22 PM] 2024-10-15T18:53:10.117Z	INFO	zkCloudWorker Execute Sync: 40.040s

[9:53:22 PM] 2024-10-15T18:53:10.152Z	INFO	Lambda call: charge id: cde81bd9-1cac-4ccd-a0bd-1138c5bba53c

[9:53:22 PM] 2024-10-15T18:53:10.232Z	INFO	Success: S3File: put

[9:53:22 PM] 2024-10-15T18:53:10.939Z	INFO	zkCloudWorker Execute: 40.910s

[9:53:22 PM] REPORT RequestId: Duration: 41681.91 ms	Billed Duration: 41682 ms	Memory Size: 10240 MB	Max Memory Used: 1696 MB

[9:53:22 PM] waitForJobResult result: {
  "success": true,
  "tx": "{\"feePayer\":{\"bod
[9:53:22 PM] mint hash: 5JvFSC4sTQTWcR5nt2xdnfBLYMjHZNA2eCA6edhUR35QRZwTAnq4
[9:53:22 PM] Waiting for mint tx to be included... 5Jub9yftbPjJWbvy8MYgf1jmTci8QUSpNbmeb9rzMi3P6KrFYb6j
[9:57:27 PM] mint tx included 5Jub9yftbPjJWbvy8MYgf1jmTci8QUSpNbmeb9rzMi3P6KrFYb6j
[9:57:27 PM] Waiting for mint tx to be included... 5JvFSC4sTQTWcR5nt2xdnfBLYMjHZNA2eCA6edhUR35QRZwTAnq4
[9:57:28 PM] mint tx included 5JvFSC4sTQTWcR5nt2xdnfBLYMjHZNA2eCA6edhUR35QRZwTAnq4
[9:57:28 PM] RSS memory minted: 239 MB, changed by -245 MB
[9:57:28 PM] minted: 6:02.530 (m:ss.mmm)
[9:57:44 PM] Transferring tokens...
[9:57:46 PM] answer: {
  success: true,
  jobId: 'zkCWrnhaw2CECJTjopRivBEaOIgNzYlSQfMkIBNvsNRIoEjs',
  result: undefined,
  error: undefined
}
[9:57:46 PM] transfer jobId: zkCWrnhaw2CECJTjopRivBEaOIgNzYlSQfMkIBNvsNRIoEjs
[9:57:56 PM] 2024-10-15T18:57:45.579Z	INFO	worker {
  command: 'execute',
  id: 'B62qqhvKVk2KEia7awrhNM1nPLUEXDM8WiPut7xXKrNDYDae1JU5GzN',
  jobId: 'zkCWrnhaw2CECJTjopRivBEaOIgNzYlSQfMkIBNvsNRIoEjs',
  developer: 'DFST',
  repo: 'token-launchpad',
  args: '{"sender":"B62qmWwo7jjmUp6yEWw1e1zYV5D2mGX6auumiqfn3ZkkoJbTgvwifKs"}',
  chain: 'devnet'
}

[9:57:56 PM] 2024-10-15T18:57:46.046Z	INFO	zkCloudWorker Execute start: {
  command: 'execute',
  developer: 'DFST',
  repo: 'token-launchpad',
  id: 'B62qqhvKVk2KEia7awrhNM1nPLUEXDM8WiPut7xXKrNDYDae1JU5GzN',
  jobId: 'zkCWrnhaw2CECJTjopRivBEaOIgNzYlSQfMkIBNvsNRIoEjs',
  job: {
    metadata: 'transfer token TEST',
    logStreams: [],
    task: 'transfer',
    args: '{"sender":"B62qmWwo7jjmUp6yEWw1e1zYV5D2mGX6auumiqfn3ZkkoJbTgvwifKs"}',
    timeCreated: 1729018665237,
    jobId: 'zkCWrnhaw2CECJTjopRivBEaOIgNzYlSQfMkIBNvsNRIoEjs',
    repo: 'token-launchpad',
    filename: 'DFST/execute.1729018665181.json',
    developer: 'DFST',
    chain: 'devnet',
    txNumber: 1,
    jobStatus: 'created',
    id: 'B62qqhvKVk2KEia7awrhNM1nPLUEXDM8WiPut7xXKrNDYDae1JU5GzN'
  }
}

[9:57:56 PM] 2024-10-15T18:57:46.091Z	INFO	execute: number of transactions: 1

[9:57:56 PM] 2024-10-15T18:57:46.091Z	INFO	RSS memory start: 1005 MB, changed by -277 MB

[9:57:56 PM] 2024-10-15T18:57:46.115Z	INFO	worker DFST/token-launchpad used already 71 times

[9:57:56 PM] 2024-10-15T18:57:46.115Z	INFO	Running worker { developer: 'DFST', repo: 'token-launchpad', version: '0.2.7' }

[9:57:56 PM] 2024-10-15T18:57:46.115Z	INFO	starting token launcher version 0.2.7 on chain devnet

[9:57:56 PM] 2024-10-15T18:57:46.123Z	INFO	Contract B62qj1EU8WVYcy6oWCpQcL5dAoGdmpBexwQAg5LsMgtUZPjDNvAFhbw

[9:57:56 PM] 2024-10-15T18:57:46.129Z	INFO	compiled: 0.009ms

[9:57:56 PM] 2024-10-15T18:57:46.129Z	INFO	Preparing tx...

[9:57:56 PM] 2024-10-15T18:57:46.168Z	INFO	Sender: B62qmWwo7jjmUp6yEWw1e1zYV5D2mGX6auumiqfn3ZkkoJbTgvwifKs

[9:57:56 PM] 2024-10-15T18:57:48.156Z	INFO	Sender balance: 297.7

[9:58:17 PM] 2024-10-15T18:58:05.823Z	INFO	proved tx: 4.416ms

[9:58:17 PM] 2024-10-15T18:58:05.823Z	INFO	prepared tx: 19.694s

[9:58:17 PM] 2024-10-15T18:58:06.449Z	INFO	transfer 10 TEST tx sent: hash: 5JuPD6SYoLcg8WoWv2MFXrfMWh4ib4DWS6dyRBQfv8MKuzV8ViaE status: pending

[9:58:17 PM] 2024-10-15T18:58:06.450Z	INFO	RSS memory finished: 1110 MB, changed by 105 MB

[9:58:17 PM] 2024-10-15T18:58:06.450Z	INFO	zkCloudWorker Execute Sync: 20.359s

[9:58:17 PM] 2024-10-15T18:58:06.507Z	INFO	Lambda call: charge id: 86b0b088-4317-4f17-be7c-fd6593f1640c

[9:58:17 PM] 2024-10-15T18:58:06.579Z	INFO	Success: S3File: put

[9:58:17 PM] 2024-10-15T18:58:07.278Z	INFO	zkCloudWorker Execute: 21.232s

[9:58:17 PM] REPORT RequestId: Duration: 21707.97 ms	Billed Duration: 21708 ms	Memory Size: 10240 MB	Max Memory Used: 1696 MB

[9:58:17 PM] waitForJobResult result: {
  "success": true,
  "tx": "{\"feePayer\":{\"bod
[9:58:17 PM] transfer hash: 5JuPD6SYoLcg8WoWv2MFXrfMWh4ib4DWS6dyRBQfv8MKuzV8ViaE
[9:58:21 PM] Transferring tokens...
[9:58:22 PM] answer: {
  success: true,
  jobId: 'zkCW0WLZvfGBOt0hklvAcDbg2XShxfSsJuzZldmO2stU1BO1',
  result: undefined,
  error: undefined
}
[9:58:22 PM] transfer jobId: zkCW0WLZvfGBOt0hklvAcDbg2XShxfSsJuzZldmO2stU1BO1
[9:58:32 PM] 2024-10-15T18:58:21.603Z	INFO	worker {
  command: 'execute',
  id: 'B62qqhvKVk2KEia7awrhNM1nPLUEXDM8WiPut7xXKrNDYDae1JU5GzN',
  jobId: 'zkCW0WLZvfGBOt0hklvAcDbg2XShxfSsJuzZldmO2stU1BO1',
  developer: 'DFST',
  repo: 'token-launchpad',
  args: '{"sender":"B62qrnnYQfFt9tPRp44fsWHds8LF7ojJKhknYZKNYU3X4xVCdSnnRJc"}',
  chain: 'devnet'
}

[9:58:32 PM] 2024-10-15T18:58:21.863Z	INFO	zkCloudWorker Execute start: {
  command: 'execute',
  developer: 'DFST',
  repo: 'token-launchpad',
  id: 'B62qqhvKVk2KEia7awrhNM1nPLUEXDM8WiPut7xXKrNDYDae1JU5GzN',
  jobId: 'zkCW0WLZvfGBOt0hklvAcDbg2XShxfSsJuzZldmO2stU1BO1',
  job: {
    metadata: 'transfer token TEST',
    logStreams: [],
    task: 'transfer',
    args: '{"sender":"B62qrnnYQfFt9tPRp44fsWHds8LF7ojJKhknYZKNYU3X4xVCdSnnRJc"}',
    timeCreated: 1729018701432,
    jobId: 'zkCW0WLZvfGBOt0hklvAcDbg2XShxfSsJuzZldmO2stU1BO1',
    repo: 'token-launchpad',
    filename: 'DFST/execute.1729018701353.json',
    developer: 'DFST',
    chain: 'devnet',
    txNumber: 1,
    jobStatus: 'created',
    id: 'B62qqhvKVk2KEia7awrhNM1nPLUEXDM8WiPut7xXKrNDYDae1JU5GzN'
  }
}

[9:58:32 PM] 2024-10-15T18:58:21.909Z	INFO	execute: number of transactions: 1

[9:58:32 PM] 2024-10-15T18:58:21.909Z	INFO	RSS memory start: 1110 MB, changed by 0 MB

[9:58:32 PM] 2024-10-15T18:58:21.931Z	INFO	worker DFST/token-launchpad used already 72 times

[9:58:32 PM] 2024-10-15T18:58:21.931Z	INFO	Running worker { developer: 'DFST', repo: 'token-launchpad', version: '0.2.7' }

[9:58:32 PM] 2024-10-15T18:58:21.931Z	INFO	starting token launcher version 0.2.7 on chain devnet

[9:58:32 PM] 2024-10-15T18:58:21.942Z	INFO	Contract B62qj1EU8WVYcy6oWCpQcL5dAoGdmpBexwQAg5LsMgtUZPjDNvAFhbw

[9:58:32 PM] 2024-10-15T18:58:21.947Z	INFO	compiled: 0.01ms

[9:58:32 PM] 2024-10-15T18:58:21.956Z	INFO	Preparing tx...

[9:58:32 PM] 2024-10-15T18:58:21.984Z	INFO	Sender: B62qrnnYQfFt9tPRp44fsWHds8LF7ojJKhknYZKNYU3X4xVCdSnnRJc

[9:58:32 PM] 2024-10-15T18:58:23.565Z	INFO	Sender balance: 297.7

[9:58:54 PM] 2024-10-15T18:58:40.041Z	INFO	proved tx: 5.611ms

[9:58:54 PM] 2024-10-15T18:58:40.042Z	INFO	prepared tx: 18.086s

[9:58:54 PM] 2024-10-15T18:58:40.410Z	INFO	transfer 10 TEST tx sent: hash: 5JvEG6EJvdmKdCtAUVVs7oyYr7vgJDP8aCp3tuaVoY52dh8taXNZ status: pending

[9:58:54 PM] 2024-10-15T18:58:40.412Z	INFO	RSS memory finished: 1122 MB, changed by 12 MB

[9:58:54 PM] 2024-10-15T18:58:40.412Z	INFO	zkCloudWorker Execute Sync: 18.503s

[9:58:54 PM] 2024-10-15T18:58:40.456Z	INFO	Lambda call: charge id: 675d5c43-068d-4266-a0f4-0a135a112ba2

[9:58:54 PM] 2024-10-15T18:58:40.527Z	INFO	Success: S3File: put

[9:58:54 PM] 2024-10-15T18:58:41.222Z	INFO	zkCloudWorker Execute: 19.359s

[9:58:54 PM] REPORT RequestId: Duration: 19626.18 ms	Billed Duration: 19627 ms	Memory Size: 10240 MB	Max Memory Used: 1696 MB

[9:58:54 PM] waitForJobResult result: {
  "success": true,
  "tx": "{\"feePayer\":{\"bod
[9:58:54 PM] transfer hash: 5JvEG6EJvdmKdCtAUVVs7oyYr7vgJDP8aCp3tuaVoY52dh8taXNZ
[9:58:54 PM] Waiting for transfer tx to be included... 5JuPD6SYoLcg8WoWv2MFXrfMWh4ib4DWS6dyRBQfv8MKuzV8ViaE
[10:00:23 PM] transfer tx included 5JuPD6SYoLcg8WoWv2MFXrfMWh4ib4DWS6dyRBQfv8MKuzV8ViaE
[10:00:23 PM] Waiting for transfer tx to be included... 5JvEG6EJvdmKdCtAUVVs7oyYr7vgJDP8aCp3tuaVoY52dh8taXNZ
[10:00:24 PM] transfer tx included 5JvEG6EJvdmKdCtAUVVs7oyYr7vgJDP8aCp3tuaVoY52dh8taXNZ
[10:00:24 PM] RSS memory transferred: 320 MB, changed by 81 MB
[10:00:24 PM] transferred: 2:46.576 (m:ss.mmm)
 PASS  tests/worker.test.ts
  Token Launchpad Worker
    ✓ should initialize blockchain (3022 ms)
    ✓ should deploy contract (253930 ms)
    ✓ should mint tokens (372537 ms)
    ✓ should transfer tokens (176581 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        807.217 s, estimated 1140 s
Ran all test suites matching /worker.test/i.
```
