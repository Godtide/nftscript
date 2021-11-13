const {
    // txChecker
  mint,
  transfer,
  // getTransferlogs,
  // mintlogs
} = require("./input/config.js");

// const { NftConnector } = require("Nftconnector");
const console = require("console");
const parseArgs = require("minimist")


const startNftScript = async () => {
  console.log('##################');
  console.log('# - Mint your OLtac NFT collection');
  console.log('##################');

  console.log();
  console.log('start creating NFTs.');
  // console.log(txChecker.oltac);


  const argv = parseArgs(process.argv.slice(2))

  const cmd = argv._[0]

  if (process.env.DEBUG) {
    console.log("argv", argv)
    console.log("cmd", cmd)
  }

  switch (cmd) {
    case "mint":
      const foldername = argv._[1]
      await mint(foldername)
      break
    case "transfer":
      const filename = argv._[1]
      const fromAddr = argv._[2]
      const toAddr = argv._[3]
      await transfer(filename, fromAddr, toAddr)
      break
    // case "mintlogs":
    //   const myAddr = argv._[1]
    //   await mintlogs(myAddr)
    //   break
      // case "getTransferlogs":
      //   const fromAddr = argv._[1]
      //   const toAddr = argv._[2]
      //   await getTransferlogs( fromAddr, toAddr)
      //   break
    default:
      console.log("unrecognized command", cmd)
  }
};

startNftScript();