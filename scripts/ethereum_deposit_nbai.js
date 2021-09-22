const UpgradableProxy = artifacts.require('UpgradableProxy')

const RootChainManager = artifacts.require('RootChainManager')

const ERC20Predicate = artifacts.require('ERC20OldPredicate')

const Web3EthAbi = require('web3-eth-abi');
// function depositFor(
//   address user,
//   address rootToken,
//   bytes calldata depositData

module.exports = async(callback) => {

      const nbaiTokenAddress = "0xE30F8AfF98a9614a0dE9825d51B8081708ED173a"
      const ethereumManagerAddress = "0x735Bf2c31Db435ED01A080afdb502a2E42db0772"
      const depositReceiver = "0xE41c53Eb9fce0AC9D204d4F361e28a8f28559D54"

      const erc20PredicateAddress = "0x499C907f3F78077c2ff272552733C87F2d27C5da"

      const amount = "120000000000000000000"

      bytesAmount = Web3EthAbi.encodeParameter('uint256',amount)

      // !important: call token approve before following code.

      try {
        const rootChainInstance = await RootChainManager.at(ethereumManagerAddress)
        await rootChainInstance.depositFor(depositReceiver, nbaiTokenAddress, bytesAmount)

        // const ERC20PredicateInstance = await ERC20Predicate.at(erc20PredicateAddress)

        // await ERC20PredicateInstance.lockTokens(depositReceiver, depositReceiver, nbaiTokenAddress, bytesAmount)
      } catch (e) {
        console.log(`Error while deposit NBAI ERC20 of ${ethereumManagerAddress}`)
        console.error(e)
      }

  callback()
}
