import { ethers } from "hardhat";
import Web3 from "web3";
async function main() {
var web3 = new Web3(Web3.givenProvider || "https://eth-mainnet.g.alchemy.com/v2/xypdsCZYrlk6oNi93UmpUzKE9kmxHy2n");
let contractAddresses = ["0x39Bb259F66E1C59d5ABEF88375979b4D20D98022", "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0", "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39", "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE", "0x0aBCFbfA8e3Fda8B7FBA18721Caf7d5cf55cF5f5"];
let c;  
for(c=0; c<contractAddresses.length; c++){
    let index;
    for (index = 0; index < 3; index++){
    const result = await web3.eth.getStorageAt(contractAddresses[c], index)
    console.log(`hex at slot ${index} is ${result}`);
}
}

//Hex conversion to various data type; decimal, string and address.
//  const checking = web3.eth.abi.decodeParameter("address", result);
// const string = web3.utils.toAscii(result));
// const decimal = web3.utils.toDecimal(result)
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



