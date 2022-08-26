import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";

require("dotenv").config();

const { KOVAN_URL, PRIVATE_KEY, MAINNET_URL, GOERLI_URL } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  paths: {
    sources: "./src",
  },
  networks: {
    hardhat: {
      forking: {
        url: `${MAINNET_URL}`,
      },
    },
    kovan: {
      url: KOVAN_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    goerli: {
      url: GOERLI_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: "FKB5XE7AKK3RAAE1KE1945FYY15MTMDSU2",
  },
};

export default config;