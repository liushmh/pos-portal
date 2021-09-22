const RootChainManager = artifacts.require('RootChainManager')

const ERC20Predicate = artifacts.require('ERC20OldPredicate')

const utils = require('./utils')
const config = require('./config')

module.exports = async(deployer) => {
  const contractAddresses = utils.getContractAddresses()

  const RootChainManagerInstance = await RootChainManager.at(contractAddresses.ethereum.RootChainManagerProxy)

  const ERC20PredicateInstance = await ERC20Predicate.at(contractAddresses.ethereum.ERC20PredicateProxy)

  console.log('Setting StateSender')
  await RootChainManagerInstance.setStateSender(contractAddresses.ethereum.DummyStateSender)

  console.log('Setting ChildChainManager')
  await RootChainManagerInstance.setChildChainManagerAddress(contractAddresses.child.ChildChainManagerProxy)

  console.log('Granting manager role on ERC20Predicate')
  const MANAGER_ROLE = await ERC20PredicateInstance.MANAGER_ROLE()
  await ERC20PredicateInstance.grantRole(MANAGER_ROLE, RootChainManagerInstance.address)

  // console.log('Registering ERC20Predicate')
  const ERC20Type = await ERC20PredicateInstance.TOKEN_TYPE()
  await RootChainManagerInstance.registerPredicate(ERC20Type, ERC20PredicateInstance.address)

  console.log('Mapping NBAI ERC20')
  await RootChainManagerInstance.mapToken(contractAddresses.ethereum.NBAIERC20, contractAddresses.child.NBAIERC20, ERC20Type)

}
