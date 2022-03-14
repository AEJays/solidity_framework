// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import 'solidity_lib/Permission/Permission.sol'; //权限库
import "hardhat/console.sol";  //日志

contract testSol is Permission{
    constructor(address owner){
        setOwner(owner);
    }
}