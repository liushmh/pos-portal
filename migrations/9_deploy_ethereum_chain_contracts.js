
const RootChainManager = artifacts.require('RootChainManager')
const RootChainManagerProxy = artifacts.require('RootChainManagerProxy')
const DummyStateSender = artifacts.require('DummyStateSender')

const ERC20Predicate = artifacts.require('ERC20OldPredicate')
const ERC20PredicateProxy = artifacts.require('ERC20OldPredicateProxy')

const utils = require('./utils')

module.exports = async(deployer, network, accounts) => {
  await deployer

  console.log('deploying contracts...')
  const rootChainManager = await deployer.deploy(RootChainManager)
  const rootChainManagerProxy = await deployer.deploy(RootChainManagerProxy, '0x0000000000000000000000000000000000000000')
  await rootChainManagerProxy.updateAndCall(RootChainManager.address, rootChainManager.contract.methods.initialize(accounts[0]).encodeABI())

  // -- ERC20 Predicates Deployment, starting
  const erc20Predicate = await deployer.deploy(ERC20Predicate)
  const erc20PredicateProxy = await deployer.deploy(ERC20PredicateProxy, '0x0000000000000000000000000000000000000000')
  await erc20PredicateProxy.updateAndCall(erc20Predicate.address, erc20Predicate.contract.methods.initialize(accounts[0]).encodeABI())


  await deployer.deploy(DummyStateSender)
  
  const contractAddresses = utils.getContractAddresses()

  contractAddresses.ethereum.RootChainManager = rootChainManager.address
  contractAddresses.ethereum.RootChainManagerProxy = rootChainManagerProxy.address

  contractAddresses.ethereum.DummyStateSender = DummyStateSender.address

  contractAddresses.ethereum.ERC20Predicate = ERC20Predicate.address
  contractAddresses.ethereum.ERC20PredicateProxy = ERC20PredicateProxy.address


  utils.writeContractAddresses(contractAddresses)
}
