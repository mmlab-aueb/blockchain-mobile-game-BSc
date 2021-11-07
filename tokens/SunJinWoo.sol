// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.6;

import "./ERC721.sol";

contract SunJinWoo is ERC721{
    
    
    address public owner;
    
    constructor() ERC721("SunJinWoo", "SJW") {}

    
    function createItem(address _to) public{
        owner = _to;
        _safeMint(_to,1); // Assigns the Token to the Ethereum Address that is specified
    }
    
}