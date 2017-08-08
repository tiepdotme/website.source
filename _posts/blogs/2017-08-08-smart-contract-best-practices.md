---
title: "Solidity Smart contract Security best practices"
layout: blog
date: '2017-08-07 05:30:00'
tag: ["Smart Contract", "Solidity", "ICO", "Security", "Handbook"]
permalink: "/blogs/smart-contract-best-practices-solidity"
author: niksmac
meta: smart-contract-best-practices-solidity.png
subtitle: "Security of a smart contract is mush important than any other software or piece of code just because of the non-editable nature of it in general."
---

Security of a smart contract is mush important than any other software or piece of code just because of the non-editable nature of it in general.

Still, there are no widely adopted security standards or best practices for projects to follow. There are no tools for developers to easily create, test, verify and audit smart contracts, and do so collaboratively. Entire Ethereum community is grateful for researchers and developers of [OpenZeppelin/zeppelin-solidity](https://github.com/OpenZeppelin/zeppelin-solidity) for the standard and well tested contract sources to relay on.

1. [External Calls](#external-calls)
2. [Handling the funds](#handling-the-funds)
3. [Token standard](#erc20-token-standard)
4. [Integer Division, Overflow and Underflow](#integer-division)
5. [Fallback functions](#use-fallback-functions)
6. [Race Conditions](#race-conditions)

## External Calls
Calls to untrusted contracts can introduce several unexpected risks or errors. External calls may execute malicious code in that contract or any other contract that it depends upon. As such, every external call should be treated as a potential security risk, and removed if possible. Understand how `send()`, `transfer()`, and `call.value()()`. Using `send()` or `transfer()` will prevent reentrancy but it does so at the cost of being incompatible with any contract whose fallback function requires more than 2,300 gas.

## Handling the funds
When developing a crowdsale smart contract, there are several options for handling the collection of funds. Take a look at the common ways in which the funds are getting handled.

**In contract:-** The obvious method, we keep the funds in the contract itself during the crowdsale and transfer the funds to the developer address once the crowdsale is over.

**Forwarding:-** Instead of temporarily storing the funds in the crowdsale contract, we can immediately forward them to a multisig wallet after each individual investment. However it opens a trust issue that the funds can be used to buy the token and corrupt the corwdsale itself.

As a result an evolved mechanism is to keep the funds in a intermediate multisig contract with a time lock such that the _**funds are not movable**_ till the crowdsale ends.

## ERC20 token standard
There were no standard for tokens on etheerum till the [EIP 20](https://github.com/ethereum/EIPs/issues/20). Once that is pulled in now  we have a better standard for the tokens on Ethereum. Using established standards (i.e. the [ERC20 token standard](https://github.com/ethereum/EIPs/issues/20)), newly minted tokens are easily integrated into major wallets and exchanges. A general basic example would be;

```
// https://github.com/ethereum/EIPs/issues/20
contract ERC20 {
    function totalSupply() constant returns (uint totalSupply);
    function balanceOf(address _owner) constant returns (uint balance);
    function transfer(address _to, uint _value) returns (bool success);
    function transferFrom(address _from, address _to, uint _value) returns (bool success);
    function approve(address _spender, uint _value) returns (bool success);
    function allowance(address _owner, address _spender) constant returns (uint remaining);
    event Transfer(address indexed _from, address indexed _to, uint _value);
    event Approval(address indexed _owner, address indexed _spender, uint _value);
}
```

## Integer division
All integer division rounds down to the nearest integer. If you need more precision, consider using a multiplier, or store both the numerator and denominator.

(In the future, Solidity will have a fixed-point type, which will make this easier.)

```
// bad
uint x = 5 / 2; // Result is 2, all integer division rounds DOWN to the nearest integer

// good
uint multiplier = 10;
uint x = (5 * multiplier) / 2;

uint numerator = 5;
uint denominator = 2;
```

**Overflow and Underflow** If a balance reaches the maximum uint value (2^256) it will circle back to zero. This checks for that condition. This may or may not be relevant, depending on the implementation. Think about whether or not the uint value has an opportunity to approach such a large number. Think about how the uint variable changes state, and who has authority to make such changes.


## Use Fallback functions
[Fallback functions](http://solidity.readthedocs.io/en/latest/contracts.html#fallback-function) are called when a contract is sent a message with no arguments (or when no function matches), and only has access to 2,300 gas when called from a .send() or .transfer(). If you wish to be able to receive Ether from a .send() or .transfer(), the most you can do in a fallback function is log an event. Use a proper function if a computation or more gas is required.

## Race Conditions
One of the major dangers of calling external contracts is that they can take over the control flow, and make changes to your data that the calling function wasn't expecting. This class of bug can take many forms, and both of the major bugs that led to the DAO's collapse were bugs of this sort.

## Security Tools

- [Oyente](https://github.com/ethereum/oyente) - Analyze Ethereum code to find common vulnerabilities, based on this [paper](http://www.comp.nus.edu.sg/~loiluu/papers/oyente.pdf).
- [SolCover](https://github.com/JoinColony/solcover) - Code coverage for Solidity testing.
- [Solgraph](https://github.com/raineorshine/solgraph) - Generates a DOT graph that visualizes function control flow of a Solidity contract and highlights potential security vulnerabilities.

**Sources:-**
1. [ConsenSys/smart-contract-best-practices](https://github.com/ConsenSys/smart-contract-best-practices)
2. [Ethereum Smart Contract Security](https://blog.zeppelin.solutions/onward-with-ethereum-smart-contract-security-97a827e47702)
