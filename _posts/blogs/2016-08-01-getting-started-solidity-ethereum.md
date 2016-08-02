---
layout: blog
title: Getting started with Solidity.
date: 2016-08-01 09:10:00 +0530
tag: ["Ethereum", "Solidity", "EVM"]
permalink: /blogs/ethereum-solidity-getting-started
meta: ethereum-solidity.png
author: niksmac
subtitle: "Solidity is designed to compile to code for the Ethereum Virtual Machine."
---

Solidity is a high-level language whose syntax is similar to that of JavaScript and it is designed to compile to code for the Ethereum Virtual Machine. As you will see, it is possible to create contracts for voting, crowdfunding, blind auctions, multi-signature wallets and more.

Solidity is the programming language that we use to create Etherem based Smart Contracts.

I have covered the steps to install Solidity in my previous blog [Compile and Deploy Solidity
Contract](/blogs/compile-deploy-solidity-contract-ethereum-console-geth-part-1)

## Data Types

### Booleans
 * `bool`: The possible values are constants true and false.

### Operators:

 * ! (logical negation)
 * && (logical conjunction, “and”)
 * || (logical disjunction, “or”)
 * == (equality)
 * != (inequality)

### Integers

int / uint: Signed and unsigned integers of various sizes. Keywords uint8 to uint256 in steps of 8 (unsigned of 8 up to 256 bits) and int8 to int256. uint and int are aliases for uint256 and int256, respectively.

### Address
address: Holds a 20 byte value (size of an Ethereum address). Address types also have members and serve as base for all contracts.

## Next we will look into Expressions and Control Structures


**Source**

 1. [Official Docs](http://solidity.readthedocs.io/en/latest/)
 2. [Types](http://solidity.readthedocs.io/en/latest/types.html)
