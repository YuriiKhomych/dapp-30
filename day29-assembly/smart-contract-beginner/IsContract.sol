// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;

contract IsContract {
  function isContract(address addr) view external returns(bool) {
    uint256 codeLength;
    
    assembly {codeLength := extcodesize(addr)}
    return codeLength == 0 ? false : true;
  }
}
