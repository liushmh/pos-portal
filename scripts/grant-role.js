const UpgradableProxy = artifacts.require('UpgradableProxy')
const AccessControl = artifacts.require('AccessControl')

const contractList = [
  // contract address list
  // '',
  // '',
  // ''
]

const newOwner = '0xc4fcaAdCb0b00a9501e56215c37B10fAF9e79c0a' // new owner

const stateSyncRole = '0xb737cb9002cff05f414da9df8b1cdaf43b188015b1b4ac404e2200119cd5b5c8'

module.exports = async(callback) => {
  const accounts = await web3.eth.getAccounts()
    const user = accounts[0]


    // for (const contractAddress of contractList) {
      // try {
      //   const contractInstance = await UpgradableProxy.at(contractAddress)
      //   const proxyOwner = await contractInstance.proxyOwner()
      //   if (user === proxyOwner) {
      //     // change proxy owner to newOwner
      //     await contractInstance.transferProxyOwnership(newOwner)
      //     console.log(`proxy owner of ${contractAddress} changed to ${newOwner}`)
      //   } else {
      //     console.log(`skipping proxy owner change of ${contractAddress} since user is not owner`)
      //   }
      // } catch (e) {
      //   console.log(`Error while changing proxy owner of ${contractAddress}`)
      //   console.error(e)
      // }

      const contractAddress = "0xa1a58c82ba4a0d8e856d8fad76bb72b04fd9736b"

      try {
        const contractInstance = await AccessControl.at(contractAddress)
        await contractInstance.grantRole(stateSyncRole, newOwner)
      } catch (e) {
        console.log(`Error while changing admin of ${contractAddress}`)
        console.error(e)
      }

  callback()
}
