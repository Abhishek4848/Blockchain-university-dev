// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.7.3/token/ERC20/ERC20.sol";

contract Credit is ERC20 {
    constructor(uint256 initialSupply) ERC20("Credit", "credit") {
        _mint(msg.sender, initialSupply);
    }
    function decimals() public pure override returns (uint8) {
        return 2;
    }
}
