require("@nomiclabs/hardhat-waffle");
let {privateKey} = require('./localKey.json')

require('@openzeppelin/hardhat-upgrades');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  networks:{
    // testnet:{
    //   url:"https://data-seed-prebsc-1-s1.binance.org:8545",
    //   accounts:[
    //     key[1] //1 为管理员
    //   ]
    // },
    localhost:{
      url:"http://127.0.0.1:8545",
      accounts:[
        privateKey[0] //1为管理员
      ]
    }
  },
  solidity: {
    version:"0.8.4",
    settings:{
      optimizer:{
        enabled:true,
        runs:1000
      }
    }
  },
  paths:{
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
