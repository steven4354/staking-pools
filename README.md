# Staking Pools

Contracts for creating incentivized staking pools. 

## Deployment

### deploy locally
start up a local blockchain in one terminal screen
```
npx hardhat node
```

run,
```
npx hardhat run scripts/deploy.js --network localhost
```

### deploy to binance smart chain testnet

change .env.sample to .env, and fill in the BSC_TESTNET_MNEMOMIC with a wallet that has some testnet bnb. you can use https://testnet.binance.org/faucet-smart

then run,

```
npx hardhat run scripts/deploy.js --network testnetBsc
```

## Resources

https://github.com/alchemix-finance/alchemix-protocol