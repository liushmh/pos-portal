
const { defaultAbiCoder: abi }  = require('ethers/utils/abi-coder');
const { ethers, utils } = require("ethers");
const {abi: RootChainManagerABI} = require('../artifacts/RootChainManager.json')

const {abi: ChildChainManagerABI} = require('../artifacts/ChildChainManager.json')
const { BigNumber } = require('bignumber.js');
const contractAddresses = require('../contractAddresses.json')

// const logDecoder = require('../test/helpers/log-decoder')

const mockValues = {
    zeroAddress: '0x0000000000000000000000000000000000000000',
    addresses: [
      '0x678AC296Af90001A1bEeC5e4632ED60E64E090aB',
      '0xEDC5f296a70096EB49f55681237437cbd249217A',
      '0x25d7981811EB756F988b264004d42de2b6aB8c9D',
      '0x3D850881A6dcCB4bF762e49508531da68e14706C',
      '0xcfb14dD525b407e6123EE3C88B7aB20963892a66',
      '0xB8D0Cbd4bC841D6fbA36CE0e0ED770aC45A261b2',
      '0x6EF439c004dE0598472D9352Cc04DA65B249BDb4',
      '0x32F303BB2Ca9167e9287CB0f53557D249D3D24BF',
      '0xd7728112027c0d2A67c097BcF5D71adF96C9c858',
      '0x48c856F10d5930DaE3CF338173247aB8DA94d308'
    ],
    bytes32: [
      '0x9bb1e484529be7ac2ab09fe9863eebe554b06bb3153c52d7e43bc0487cfc771a',
      '0xe000fcd82f21f4ec092f882c35aa0b9dcca5bb571af45e432c89a226b408fa4a',
      '0x32742d619e0bda662bd775d9d0375521c634b8dead3049a509978f1640519a76',
      '0xdac07c018b24dfc09012597ee0350a27090f33a68328157be35c255d325a8ebc',
      '0x00000000000000000000000000000000000000000000000003c68af0bb140000'
    ],
    amounts: [
    //   BigNumber.from('100000000000000000'),
    //   BigNumber.from('200000000000000000'),
    //   BigNumber.from('500000000000000000'),
    //   BigNumber.from('1000000000000000000'),
    //   BigNumber.from('2000000000000000000'),
    //   BigNumber.from('5000000000000000000'),
    //   BigNumber.from('10000000000000000000'),
    //   BigNumber.from('20000000000000000000'),
    //   BigNumber.from('50000000000000000000'),
    //   BigNumber.from('200000000000000000000')
    ],
    numbers: [
      0.1,
      2,
      5,
      10,
      20,
      50,
      100,
      200,
      500,
      2000
    ]
  }


const main = async() => {
  
    const provider = new ethers.providers.JsonRpcProvider('https://api.nbai.io');
    const rootChainManagerInstance = new ethers.Contract(contractAddresses.root.RootChainManagerProxy, RootChainManagerABI, provider);

    // 0xE41c53Eb9fce0AC9D204d4F361e28a8f28559D54 address
    const wallet = new ethers.Wallet("a4c1b840fa14fb2845170a05c8ec6c407619aa40353ce9c083bc7a2f0ce2a2e6", provider);

    console.log("start swapping")

    const gasPrice = new BigNumber('10000000000').toNumber()
    const depositForAccount = mockValues.addresses[0]
    const value = new utils.BigNumber('100000000000000000')

    // const depositTx = await rootChainManagerInstance.connect(wallet).depositEtherFor(depositForAccount, {
    //     value,
    //     gasPrice
    //   })

    // console.log(depositTx)

    console.log(utils.id("StateSynced(address,bytes)"))

    //   const logs = logDecoder.decodeLogs(depositTx.receipt.rawLogs)
    //   lockedLog = logs.find(l => l.event === 'LockedEther')

    //   console.log(lockedLog)

    //   const lockedLogAmount = new BN(lockedLog.args.amount.toString())


    // const depositData = abi.encode(['uint256'], ['10'])
    // const syncData = abi.encode(
    //   ['address', 'address', 'bytes'],
    //   [depositReceiver, contracts.root.RootChainManager.address, depositData]
    // )
    // const syncType = await contracts.child.childChainManager.DEPOSIT()
    // syncState = abi.encode(['bytes32', 'bytes'], [syncType, syncData])
    // stateReceiveTx = await contracts.child.childChainManager
    //   .onStateReceive(syncId, syncState, { from: accounts[0] })


    //   const sushiContract = new ethers.Contract(sushiPair, IUniswapV2PairABI, hreProvider);

    //   const token1 = await v2Contract.token1();
    //   let swapToken;
    //   let wethPos = 0;
  
    //   console.log(`token1 is: ${token1}`);
    //   if(token1.toLowerCase() == weth){
    //       wethPos = 1;
    //       swapToken = await v2Contract.token0();
    //   }else{
    //       swapToken = await v2Contract.token1();
    //   }
    //   const otherPos = 1 - wethPos;
      
    //   const v2Reserve = await v2Contract.getReserves();
    //   const sushiReserve = await sushiContract.getReserves();
}


const mainChild = async() => {
  
    const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545');
    const childChainManagerInstance = new ethers.Contract(contractAddresses.child.ChildChainManagerProxy, ChildChainManagerABI, provider);

    const wallet = new ethers.Wallet("cdfb4b98415c033c6f8798305554157be33a415ad4cd344164f2cf4bcb5d8fff", provider);

    console.log("start swapping")

    const depositReceiver = '0xaF52517950E10E686708684aE4B0344C57503DfC'

    const depositData = abi.encode(['uint256'], ['100000000000000000'])
    const syncData = abi.encode(
      ['address', 'address', 'bytes'],
      [depositReceiver, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', depositData]
    )
    const syncType = await childChainManagerInstance.DEPOSIT()
    syncState = abi.encode(['bytes32', 'bytes'], [syncType, syncData])
    // stateReceiveTx = await contracts.child.childChainManager
    //   .onStateReceive(syncId, syncState, { from: accounts[0] })

    const gasPrice = new BigNumber('10000000000').toNumber()
    const depositForAccount = mockValues.addresses[0]
    const value = new utils.BigNumber('100000000000000000')

    // const depositTx = await childChainManagerInstance.connect(wallet).onStateReceive(1,syncState)

    console.log(syncState)
}

mainChild()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
