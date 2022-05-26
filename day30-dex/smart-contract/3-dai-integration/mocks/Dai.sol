// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;

import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol';


contract Dai is ERC20 {
  constructor() ERC20('Dai', 'Dai Stablecoin') {}
}
