const UpgradableProxy = artifacts.require('UpgradableProxy')

const bscTokenContract = artifacts.require('DummnyERC20')

const contractList = [
  // contract address list
  // '',
  // '',
  // ''
]

module.exports = async(callback) => {
  const accounts = await web3.eth.getAccounts()
    const user = accounts[0]


      const contractAddress = "0xd5dc6B99ABf998050302A6f635176319f911B2BB"

      const withdrawAmount = 120000000000000000000

      try {
        const tokenInstance = await bscTokenContract.at(contractAddress)
        await tokenInstance.withdraw(withdrawAmount, { from: depositReceiver })
      } catch (e) {
        console.log(`Error while changing admin of ${contractAddress}`)
        console.error(e)
      }

  callback()
}
