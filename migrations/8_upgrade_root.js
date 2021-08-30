const bluebird = require('bluebird')

const Merkle = artifacts.require('Merkle')
const MerklePatriciaProof = artifacts.require('MerklePatriciaProof')
const RLPReader = artifacts.require('RLPReader')
const SafeERC20 = artifacts.require('SafeERC20')
const SafeMath = artifacts.require('SafeMath')

const RootChainManager = artifacts.require('RootChainManager')
const RootChainManagerProxy = artifacts.require('RootChainManagerProxy')
const DummyStateSender = artifacts.require('DummyStateSender')

const ERC20Predicate = artifacts.require('ERC20Predicate')
const ERC20PredicateProxy = artifacts.require('ERC20PredicateProxy')
const MintableERC20Predicate = artifacts.require('MintableERC20Predicate')
const MintableERC20PredicateProxy = artifacts.require('MintableERC20PredicateProxy')

const ERC721Predicate = artifacts.require('ERC721Predicate')
const ERC721PredicateProxy = artifacts.require('ERC721PredicateProxy')
const MintableERC721Predicate = artifacts.require('MintableERC721Predicate')
const MintableERC721PredicateProxy = artifacts.require('MintableERC721PredicateProxy')

const ERC1155Predicate = artifacts.require('ERC1155Predicate')
const ERC1155PredicateProxy = artifacts.require('ERC1155PredicateProxy')
const MintableERC1155Predicate = artifacts.require('MintableERC1155Predicate')
const MintableERC1155PredicateProxy = artifacts.require('MintableERC1155PredicateProxy')

const EtherPredicate = artifacts.require('EtherPredicate')
const EtherPredicateProxy = artifacts.require('EtherPredicateProxy')

const DummyERC20 = artifacts.require('DummyERC20')
const DummyMintableERC20 = artifacts.require('DummyMintableERC20')

const DummyERC721 = artifacts.require('DummyERC721')
const DummyMintableERC721 = artifacts.require('DummyMintableERC721')

const DummyERC1155 = artifacts.require('DummyERC1155')
const DummyMintableERC1155 = artifacts.require('DummyMintableERC1155')

const TestRootTunnel = artifacts.require('TestRootTunnel')
const TestChildTunnel = artifacts.require('TestChildTunnel')

const utils = require('./utils')


module.exports = async(deployer, network, accounts) => {
  await deployer

  console.log('deploying contracts...')
  const rootChainManager = await deployer.deploy(RootChainManager)

  console.log(RootChainManager.address)
}
