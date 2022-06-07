require("@nomiclabs/hardhat-waffle");
// Import and configure dotenv
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: "0.8.1",
  networks: {
    rinkeby: {
      // This value will be replaced on runtime
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
