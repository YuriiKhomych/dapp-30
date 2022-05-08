pragma solidity >=0.4.25 <0.7.0;

contract Deed {
  address public lawyer;
  address payable public beneficiary;
  uint public earliest;

  constructor(
    address _lawyer, 
    address payable _beneficiary, 
    uint fromNow) 
    payable 
    public {
    lawyer = _lawyer;
    beneficiary = _beneficiary; 
    earliest = now + fromNow;
  }

  function withdraw() public {
    require(msg.sender == lawyer, 'lawyer only');
    require(now >= earliest, 'too early');
    beneficiary.transfer(address(this).balance);
  }
}
