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

const DummyStateSender = artifacts.require('DummyStateSender')


const utils = require('./utils')
const config = require('./config')

module.exports = async(deployer) => {
  await deployer

  console.log('deploying state sender contracts...')

  await deployer.deploy(DummyStateSender)

  const contractAddresses = utils.getContractAddresses()

  const RootChainManagerInstance = await RootChainManager.at(contractAddresses.root.RootChainManagerProxy)

  // -- Dummy version of ERC20
  // await deployer.deploy(DummyERC20, 'Dummy ERC20', 'DERC20')
  // await deployer.deploy(DummyMintableERC20, 'Dummy Mintable ERC20', 'DERC20')
  // // -- ends
  
  // // -- Dummy version of ERC721
  // await deployer.deploy(DummyERC721, 'Dummy ERC721', 'DERC721')
  // await deployer.deploy(DummyMintableERC721, 'Dummy Mintable ERC721', 'DMERC721')
  // // -- ends

  // // -- Dummy version of ERC1155
  // await deployer.deploy(DummyERC1155, 'Dummy ERC1155')
  // await deployer.deploy(DummyMintableERC1155, 'Dummy Mintable ERC1155')
  // -- ends
  
  console.log(`state sender address: ${DummyStateSender.address}`)

  console.log('Setting StateSender')
  await RootChainManagerInstance.setStateSender(DummyStateSender.address) 

}
