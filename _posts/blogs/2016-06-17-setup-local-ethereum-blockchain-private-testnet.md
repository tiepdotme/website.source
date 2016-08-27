---
layout: blog
title:  "How to setup a local test Ethereum Blockchain"
subtitle: "How to Setup a Local Test Ethereum Blockchain aka Private Testnet"
date:   2016-06-13 11:19:48 +0530
meta: Ethereum-homestead-background-27.jpg
author: niksmac
permalink: /blogs/setup-local-ethereum-blockchain-private-testnet
tag: ["Private Blockchain", "Blockchain", "Ethereum", "Testnet"]

---


Setting up a private chain is useful for testing purposes or simply for playing around with, I couldn’t find a good tutorial on it so I thought I would write my own. In this tutorial we are working on Ubuntu 14.04 LTS and Go Implementation of Ethereum go-ethereum or simply geth

**Prerequisites**

* [geth](https://github.com/ethereum/go-ethereum/wiki)
* [ubuntu 14.04](http://releases.ubuntu.com/14.04/)


## The Fist Block - Genesis Block

The Genesis block is the start block of the Blockchain - the first block, block 0, the only block that does not point to a predecessor block. It’s the entry point into the Blockchain database. The Genesis data defines initial parameters of the database and defines a cryptographically valid entry block. You might think thats a flaw in the system being able to decide the starting conditions of the chain, but the consensus algorithm will ensure that no other node will agree with your version of the blockchain unless they have the same genesis block (and some other crucial parameters, discussed later).

### How to Create Genesis Block

Great, so how do we make one of these genesis blocks? Well its fairly simple the following JSON is all you really need:


```
{
  "nonce": "0x0000000000000042",
    "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "difficulty": "0x4000",
    "alloc": {},
    "coinbase": "0x0000000000000000000000000000000000000000",
    "timestamp": "0x00",
    "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "extraData": "Custem Ethereum Genesis Block",
    "gasLimit": "0xffffffff"
}
```

Save the JSON into a file lets call it genesis.json and save in your home directory.

```
$ geth --genesis <genesis json file path> --datadir <some path to an empty folder> --networkid 123 --nodiscover --maxpeers 0 console
```

**This command does a few things:**

It utilises the genesis block json to seed the blockchain It uses the datadir to store all state necessary to maintain the newly created blockchain and other data (declared to prevent you clobbering your main net data, wouldn’t want to overwrite all those blocks you spent time downloading!) Use a network id other than ‘1’ to ensure we can’t talk to nodes from the main network – “connections between nodes are valid only if peers have identical protocol version and network id” Disable peer discovery Disable network by setting maxpeers to 0 Starts geth in console mode so you can interact with your new blockchain / node
Note the difficulty is set very low in the above genesis block, this allowed my local machine to mine blocks in 100’s of milliseconds, that will make it very easy for you to gain ether.

## Pre-seeding accounts with allocation - Local ETH

In the geth console enter

```
personal.newAccount("mypassword"); 0xcc8C048426978c5877212281b8a75F1B4E71a862
```

The last command above generated a new account with address ‘0xcc8C048426978c5877212281b8a75F1B4E71a862’
Once you’ve generated your account, quit geth with ctrl-c and remove every folder except keystore/ from your datadir:

```
$ cd <your datadir>
$ rm -rf `ls | grep -v keystore`
```

update your genesis block json, adding the following to the alloc key:

```
"alloc": {
  "<your account address e.g. 0xcc8C048426978c5877212281b8a75F1B4E71a862>": {
    "balance": "10000000000000000000"
  }
}
```

Now re-run the geth command using the newly updated genesis json file and the same datadir, when you check your account balance you will find you now have 10 ether:


**Verify 10 ether:**

```
$ primary = eth.accounts[0];
'0xcc8C048426978c5877212281b8a75F1B4E71a862'
$ balance = web3.fromWei(eth.getBalance(primary), "ether");
'10'
```

## Using the local Blockchain

Once the local Blockchain is ready, it can be employed using the classic Ethereum client applications.

As long as you have the main geth process handling the local Blockchain, running under the same user ID, a simple geth attach works. (Note: I didn’t verify this in the code or the documentation on UNIX IPC. I found this out by testing).
When starting to use the local test network from different workstations, it is indispensable to specify the –networkid 1100. The usage of the Ethereum discovery protocol should be fine on LANs without additional “hops”, but it is also possible to explicitly specify the peer-to-peer “bootstrap” node via –bootnodes and to deactivate the node discovery mode with –nodiscover.
Mine the local Blockchain

When working with the local Blockchain, we need the run a Miner in order to have our transactions executed and included in the Blockchain. At the same time, we get some free test-ether that we can play with. Note that it makes no sense to keep the miner running when the test network is not used, and it makes no sense neither to use other resources than the CPU for mining. With a Difficulty configured as low as in our custom Genesis block, the miner will find a valid block during each operation.

```
geth --mine -rpccorsdomain "*" --ipcapi "admin,eth,miner" --rpcapi "eth,web3" --networkid 1100 -maxpeers 5 --minerthreads 1
```
