---
layout: blog
title: "How to set up private ethereum blockchain using ethcore/parity"
date: 2017-03-10 05:10:00 +0530
tag: ["Parity", "Private Blockchain", "Permissioned Blockchain", "Blockchain"]
permalink: /blogs/setup-parity-private-blockchains
meta: parity-private-chain.png
author: niksmac
subtitle: "an Ethereum client, written for correctness-verifiability, modularisation, low-footprint and high-performance."
---

Hope you know what a private blockchain and why do we need one, if not; please take a look at [Private Permissioned Blockchain](https://lightrains.com/blogs/what-private-permissioned-blockchain). After you're done with the reading, lets proceed with setting up Parity.

**Parity:** is an Ethereum client, written from the ground-up for correctness-verifiability, modularisation, low-footprint and high-performance.

## Step 1: Install Parity
One-line Binary Installer: This method is way faster than building, though you won't get the cutting edge features and it only works on Ubuntu and Mac with Homebrew installed.

To use the script just run:

> bash <(curl https://raw.githubusercontent.com/ethcore/scripts/master/install-deps.sh -L)

This will install and configure the Parity client for you.

## Step 2: Development set up.
From parity 1.5 and above, it offers a pre-configured development flag to help you get started with ease. Of course you can change the parameters as required.

Parity provides an dev engine, which can be used for dapp development and demos.

> parity --chain dev

### Features of `parity --chain dev`

1. Transactions will get sealed at most every 2 seconds
2. The address created with an empty phrase contains a lot of tokens that can be used to send transactions

## Customizing the development chain

The default configuration should work fine in most cases, however it can be customized. The following example spec can be passed to --chain option where accounts contains a custom account with lots of Ether.

```
{
    "name": "DevelopmentChain",
    "engine": {
        "instantSeal": { "params": {} }
    },
    "params": {
        "accountStartNonce": "0x0",
        "maximumExtraDataSize": "0x20",
        "minGasLimit": "0x1388",
        "networkID" : "0x11"
    },
    "genesis": {
        "seal": {
            "generic": "0x0"
        },
        "difficulty": "0x20000",
        "author": "0x0000000000000000000000000000000000000000",
        "timestamp": "0x00",
        "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "extraData": "0x",
        "gasLimit": "0x5B8D80"
    },
    "accounts": {
        "0000000000000000000000000000000000000001": { "balance": "1", "builtin": { "name": "ecrecover", "pricing": { "linear": { "base": 3000, "word": 0 } } } },
        "0000000000000000000000000000000000000002": { "balance": "1", "builtin": { "name": "sha256", "pricing": { "linear": { "base": 60, "word": 12 } } } },
        "0000000000000000000000000000000000000003": { "balance": "1", "builtin": { "name": "ripemd160", "pricing": { "linear": { "base": 600, "word": 120 } } } },
        "0000000000000000000000000000000000000004": { "balance": "1", "builtin": { "name": "identity", "pricing": { "linear": { "base": 15, "word": 3 } } } },
        "0x00a329c0648769a73afac7f9381e08fb43dbea72": { "balance": "1606938044258990275541962092341162602522202993782792835301376" }
    }
}
```
