// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;

interface ICToken {
  function mint(uint _amount) external;
  function redeemUnderlying(uint _amount) external;
  function balanceOfUnderlying(address _owner) external view returns(uint);
}
