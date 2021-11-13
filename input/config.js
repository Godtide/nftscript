
const fs = require("fs");
const dir = __dirname;

const hre = require("hardhat");




 async function deploy(){
const ONFT = await hre.ethers.getContractFactory("ONFT");
let ONFTContract = await ONFT.deploy();
// this.oltac = await ONFT.deploy();

  await ONFTContract.deployed();
console.log("tokenAddress:", ONFTContract.address);

return ONFTContract
}

// const oltac=  new ethers.Contract( "0x5FbDB2315678afecb367f032d93F642f64180aa3" ,"ONFT" );

// const oltac=  new ethers.Contract( ONFTContract.address ,"ONFT" );





// get the name without last 4 characters -> slice .png from the name
 const cleanName = (_str) => {
  let name = _str.slice(0, -4);
  return name;
};

// reads the filenames of a given folder and returns it with its name and path
 const getElements = async (_path
  ) => {
  return fs
    .readdirSync(_path)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i) => {
      return {
        name: cleanName(i), 
        path: `${_path}/${i}`
      };
    });
};


async function mint(_id) {
 let data =  getElements(`${dir}/${_id}`);
 
   (await data).map((imagefile) => {
    //  await
    _mint(imagefile.name)
   })
  }

 

 async function  _mint(name){
   this.oltac = await deploy();
  const NftId = await oltac.tokenCounter();

  console.log("NftId", NftId)


 const result = await this.oltac.create(name)
   // wait until the transaction is mined
 await result.wait();
 const NftUrl = await this.oltac.imageURI();
  console.log("tokenUrl", NftUrl)
}



async function _send(name, from, to){
  this.oltac = await this.deploy();

const result = await this.oltac.create(name);
 // wait until the transaction is mined
 await result.wait();

const NftId = await this.oltac.tokenCounter();

// const owner = await this.oltac.ownerOf(NftId);

 const send =  await  this.oltac.transferFrom(from, to, NftId);
 await send.wait();


const newOwner = await this.oltac.ownerOf(NftId);

 console.log("newOwner:", newOwner);

}

async function transfer(_id, from, to) {
  let data =  this.getElements(`${dir}/${_id}`);
  
    (await data).map((imagefile) => {
     return {
      id: this.counter+1,
      obj: this._send(imagefile.name, from, to)
     }
    })
   }



async function getTransferlogs(myAddress, otherAddress){
    oltac = await deploy();
    const logs =  await oltac.filters.Transfer(null, [ myAddress, otherAddress ])
    console.log("Log:", logs)
}

async function  mintlogs (myAddress){
  oltac = await deploy();
  const logs =  await oltac.filters.create(null, myAddress)
    console.log(JSON.stringify(logs))
}

// txChecker = new NftConnector();


  // module.exports = {
  //   txChecker
  // }
module.exports = {
  mint,
  transfer
};
