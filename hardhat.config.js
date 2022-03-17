require("@nomiclabs/hardhat-waffle");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/nlL4WhKw2IBYADAI4KToWQ5cSWjdGk-d",
      accounts: [privateKey]
    },
    mainnet: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/nlL4WhKw2IBYADAI4KToWQ5cSWjdGk-d",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};