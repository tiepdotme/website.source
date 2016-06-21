---
layout: blog
title:  "Compile and Deploy Solidity Contract"
subtitle: "How to Compile and Deploy Solidity Contract in Ethereum console (geth)"
date:   2016-06-17 11:19:48 +0530
meta: deploy-smart-contract.png
author: niksmac
tag: ["Blockchain", "Smart Contract"]
permalink: /blogs/compile-deploy-solidity-contract-ethereum-console-geth-part-1

---

Contracts live on the blockchain in an Ethereum-specific binary format (Ethereum Virtual Machine (=EVM) bytecode). This tutorial explains how to deploy the byte code to Ethereum Blockchain


For the frontier release, geth supports solidity compilation through system call to solc, the command line solidity compiler by Christian R. and Lefteris K.


## Step 1. Install Solidity Compiler Solc

**Easy way**
Its very easy to install solc using npm the package manager for NodeJS the command is `npm install solc`

**Easier way Browser-Solidity**
If you just want to try Solidity for small contracts, you can try browser-solidity which does not need any installation. If you want to use it without connection to the Internet, you can also just save the page locally or clone http://github.com/chriseth/browser-solidity.

**Building from Source**
Assuming you are using Ubuntu 14.04

```
sudo apt-add-repository ppa:george-edison55/cmake-3.x
sudo apt-get -y update
sudo apt-get -y install language-pack-en-base
sudo dpkg-reconfigure locales
sudo apt-get -y install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo add-apt-repository -y ppa:ethereum/ethereum-dev
sudo apt-get -y update
sudo apt-get -y upgrade
```

And pull the solidity source code

```
git clone --recursive https://github.com/ethereum/webthree-umbrella.git
cd webthree-umbrella
./webthree-helpers/scripts/ethupdate.sh --no-push --simple-pull --project solidity # update Solidity repo
./webthree-helpers/scripts/ethbuild.sh --no-git --project solidity --all --cores 4 -DEVMJIT=0
```

## Step 2. Verify Solidity Compiler

To ensure solc is installed and ready to use, you can verify it by running `eth.getCompilers()` in geth console
If you have it installed, it should output something like this:

```
['Solidity' ]
```


## Bonus. Compile a simple contract

Let us take this simple contract source:

```
source = "contract test { function multiply(uint a) returns(uint d) { return a * 7; } }"
```
This contract offers a unary method: called with a positive integer a, it returns a * 7.
You are ready to compile solidity code in the geth JS console using   `eth.compile.solidity`


```
> contract = eth.compile.solidity(source).test
{
  code: '605280600c6000396000f3006000357c010000000000000000000000000000000000000000000000000000000090048063c6888fa114602e57005b60376004356041565b8060005260206000f35b6000600782029050604d565b91905056',
  info: {
    language: 'Solidity',
    languageVersion: '0',
    compilerVersion: '0.9.13',
    abiDefinition: [{
      constant: false,
      inputs: [{
        name: 'a',
        type: 'uint256'
      } ],
      name: 'multiply',
      outputs: [{
        name: 'd',
        type: 'uint256'
      } ],
      type: 'function'
    } ],
    userDoc: {
      methods: {
      }
    },
    developerDoc: {
      methods: {
      }
    },
    source: 'contract test { function multiply(uint a) returns(uint d) { return a * 7; } }'
  }
}
```

Now you have a deploy-able contract in your console with which you can deploy it to Ethereum Blockchain

### Part 2/2 Deploy the contract to blockchain.


*Source*

 1. [Frequently Asked Questions](http://solidity.readthedocs.org/en/latest/frequently-asked-questions.html#basic-questions)
 2. [Compiling a contract](https://ethereum.gitbooks.io/frontier-guide/content/compiling_contract.html)
