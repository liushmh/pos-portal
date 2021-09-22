require('babel-register')
require('babel-polyfill')

/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('@truffle/hdwallet-provider')
var PrivateKeyProvider = require("truffle-privatekey-provider");

//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

const MNEMONIC = process.env.MNEMONIC || 'cram cabbage powder pink replace success expand stumble earth night topple frog'
const API_KEY = process.env.API_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || 'BNWCP8MK6E1N1GDZH93I31FC3IT3Y2B836'

const OWNER_PK = process.env.OWNER_PK || 'a4c1b840fa14fb2845170a05c8ec6c407619aa40353ce9c083bc7a2f0ce2a2e6'

module.exports = {

  plugins: [
    'truffle-plugin-verify'
  ],
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    development: {
      host: 'localhost',
      port: 9545,
      network_id: '*', // match any network
      skipDryRun: true,
      gas: 7000000
    },
    root: {
      host: 'localhost',
      port: 9545,
      network_id: '*', // match any network
      skipDryRun: true,
      gas: 7000000,
      gasPrice: '0'
    },
    child: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // match any network
      skipDryRun: true,
      gas: 7000000,
      gasPrice: '0'
    },
    goerli:{
      provider: () =>
      new PrivateKeyProvider(
        OWNER_PK,
        `https://goerli.infura.io/v3/a30f13ea65fe406a86783fa912982906`
      ),
    network_id: 5,
    skipDryRun: true
    },
    NBAI: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://api.nbai.io`
        ),
      network_id: '*',
      gas: 7000000,
      gasPrice: 10000000000, // 10 gwei
      skipDryRun: true
    },
    BSCMain: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://bsc-dataseed.binance.org`
        ),
      network_id: 56,
      skipDryRun: true
    },
    BSCTest: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://data-seed-prebsc-1-s1.binance.org:8545`
        ),
      network_id: 97,
      skipDryRun: true
    },
    mumbaiRoot: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://goerli.infura.io/v3/${API_KEY}`
        ),
      network_id: 5,
      gas: 7000000,
      gasPrice: 10000000000, // 10 gwei
      skipDryRun: true
    },
    mumbaiChild: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          'https://rpc-mumbai.matic.today'
        ),
      network_id: 80001,
      gas: 7000000,
      gasPrice: 10000000000, // 10 gwei
      skipDryRun: true
    },
    mainnetRoot: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://mainnet.infura.io/v3/${API_KEY}`
        ),
      network_id: 1,
      gas: 7000000,
      gasPrice: 10000000000, // 10 gwei
      skipDryRun: true
    },
    mainnetChild: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          'https://rpc-mainnet.matic.network'
        ),
      network_id: 137,
      gas: 7000000,
      gasPrice: 10000000000, // 10 gwei
      skipDryRun: true
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions: {
      currency: 'USD',
      gasPrice: 21,
      outputFile: '/dev/null',
      showTimeSpent: true
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.6.6', // Fetch exact version from solc-bin (default: truffle's version)
      docker: true, // Use "0.5.1" you've installed locally with docker (default: false)
      parser: 'solcjs',
      settings: { // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: 'istanbul'
      }
    }
  },

  verify: {
    preamble: 'Matic PoS Portal'
  },

  api_keys: {
    etherscan: ETHERSCAN_API_KEY
  }
}
