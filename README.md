# Fungible Token agent

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
