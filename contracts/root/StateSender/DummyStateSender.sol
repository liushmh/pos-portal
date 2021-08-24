pragma solidity 0.6.6;

import {IStateSender} from "../StateSender/IStateSender.sol";

/**
* @notice Dummy State Sender contract to simulate plasma state sender while testing
*/
contract DummyStateSender is IStateSender {
    /**
     * @notice Event emitted when when syncState is called
     * @dev Heimdall bridge listens to this event and sends the data to receiver contract on child chain
     * @param contractAddress the contract receiving data on child chain
     * @param data bytes data to be sent
     */
    event StateSynced(
        // uint256 indexed id,
        address indexed contractAddress,
        bytes data
    );

    /**
     * @notice called to send data to child chain
     * @dev sender and receiver contracts need to be registered in case of actual state sender contract
     * @param receiver the contract receiving data on child chain
     * @param data bytes data to be sent
     */
    function syncState(address receiver, bytes calldata data) external override {
        emit StateSynced(receiver, data);
    }
}
