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

add to hardhat.config.ts a the mnemomic for a wallet with some testnet bnb

```
accounts: {
        mnemonic:
          "",
      },
```

then run,

```
npx hardhat run scripts/deploy.js --network testnetBsc
```

## Resources

https://github.com/alchemix-finance/alchemix-protocol