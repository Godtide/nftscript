# Welcome to NftScript 

-This is a simple proof of concept cmd script to Mint and transfer NFT's on-chain, feel free to contribute to this repo with new ideas.



### Add Image
Add your .png files to `./input/nft`)


# Project Setup
- install `node.js` on your local system (https://nodejs.org/en/)
- clone the repository to your local system `https://github.com/Godtide/nftscript.git`
- run `npm i` to install dependencies
-



## RUN a node

<!-- Open terminal, after inspecting .env files and asserting correctness of configuration -->
```
npx hardhat node --fork https://api.avax.network/ext/bc/C/rpc

```

## Compile and test solidity file  

<!-- Open the second terminal -->

```
- npx hardhat compile
```
```
- npx hardhat test
```






# How to use
## mint an Nft

```
node index.js mint nft
```

<!-- mint: cmd, 
 nft: the file path/location
Ensure, you have more than one .png file at the location -->


## Transfer Nft
<!-- in progress -->
```
node index.js transfer nft  0x06a8e8f19682749fd01807943168020f52e0da58 0x5f98Bf2254BF20F70f1ca7722abBa28359591de
```
<!--
transfer : cmd
nft: .png files location
fromAddr : 0x06a8e8f19682749fd01807943168020f52e0da58
toAddr: 0x5f98Bf2254BF20F70f1ca7722abBa28359591de  -->



# Development suggestions

-The transfer cmd is currently in-progress, check the config.js file to make a useful PR.

- There's a better way to do the transfer without recreating/redeploying [Readmore](https://dev.to/hideckies/ethers-js-cheat-sheet-1h5)


Best...
[Tide](https://github.com/Godtide)
