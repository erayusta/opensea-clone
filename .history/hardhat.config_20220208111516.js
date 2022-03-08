require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = "17c7025b01174bba9c92a61441fbd751";
const projectId = "70cf4ad1e00945d08eee9bef06e67f75";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account  of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat:{
      chainId: 1337
    },
    mumbai: {
      url: "https://polygon-mainnet.infura.io/v3/123abc123abc123abc123abc123abcde",
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/70cf4ad1e00945d08eee9bef06e67f75`,
      accounts: [privateKey]
    },
  },
  solidity: "0.8.4",
};
