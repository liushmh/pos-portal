const RootChainManager = artifacts.require('RootChainManager')

const ERC20Predicate = artifacts.require('ERC20Predicate')
const MintableERC20Predicate = artifacts.require('MintableERC20Predicate')

const ERC721Predicate = artifacts.require('ERC721Predicate')
const MintableERC721Predicate = artifacts.require('MintableERC721Predicate')

const ERC1155Predicate = artifacts.require('ERC1155Predicate')
const MintableERC1155Predicate = artifacts.require('MintableERC1155Predicate')

const EtherPredicate = artifacts.require('EtherPredicate')

const DummyMintableERC20 = artifacts.require('DummyMintableERC20')
const DummyMintableERC721 = artifacts.require('DummyMintableERC721')
const DummyMintableERC1155 = artifacts.require('DummyMintableERC1155')

const utils = require('./utils')
const config = require('./config')

module.exports = async(deployer) => {
  const contractAddresses = utils.getContractAddresses()

  const RootChainManagerInstance = await RootChainManager.at(contractAddresses.root.RootChainManagerProxy)

  const EtherPredicateInstance = await EtherPredicate.at(contractAddresses.root.EtherPredicateProxy)

  console.log('Registering EtherPredicate')
  const EtherType = await EtherPredicateInstance.TOKEN_TYPE()
  // await RootChainManagerInstance.registerPredicate(EtherType, EtherPredicateInstance.address)
 
  // console.log(`Mapping Ether with type: ${RootChainManagerInstance.address}`)
  // await RootChainManagerInstance.mapToken('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', contractAddresses.child.NBAIERC20, EtherType)

  const rootToChildToken = await RootChainManagerInstance.rootToChildToken('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE')
  console.log(`rootToChildToken is: ${rootToChildToken}`)

}
