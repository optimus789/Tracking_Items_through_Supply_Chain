const HDWalletProvider = require('truffle-hdwallet-provider');
const infura = "https://rinkeby.infura.io/v3/761967bf80924c9080889392b242373d";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      websockets: true,
      network_id: "*" 
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, infura),
        network_id: 4,
        gas: 4500000,
        gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};