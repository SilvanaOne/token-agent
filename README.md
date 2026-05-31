# Fungible Token agent

## Tests

### Run local tests

```sh
npm run local
```

### Run tests on Lightnet

```sh
zk lightnet start
zk lightnet explorer
npm run lightnet
```

### Run tests on Devnet

Using local worker

```sh
npm run devnet:local
```

Using zkCloudWorker

```sh
npm run devnet:zkcloudworker
```

### Run tests on Zeko

Using local worker

```sh
npm run zeko:local
```

Using zkCloudWorker

```sh
npm run zeko:zkcloudworker
```

Faucet: https://zeko.io/faucet

Explorer: https://zekoscan.io/devnet/home

To run tests using zkCloudWorker, you need to configure API key in env.json as shown in the env.example.json
