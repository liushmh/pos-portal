const ChildChainManager = artifacts.require('ChildChainManager')

const utils = require('./utils')
const config = require('./config')

module.exports = async(deployer) => {
  const contractAddresses = utils.getContractAddresses()

  const ChildChainManagerInstance = await ChildChainManager.at(contractAddresses.child.ChildChainManagerProxy)

  // console.log('Granting STATE_SYNCER_ROLE on ChildChainManager')
  const STATE_SYNCER_ROLE = await ChildChainManagerInstance.STATE_SYNCER_ROLE()
  await ChildChainManagerInstance.grantRole(STATE_SYNCER_ROLE, config.stateReceiver)


  console.log('Mapping eth bsc NBAIERC20')
  await ChildChainManagerInstance.mapToken(contractAddresses.ethereum.NBAIERC20, contractAddresses.child.NBAIERC20)

}
