---
layout: blog
title: "Introduction to Tendermint"
date: 2017-01-29 05:10:00 +0530
tag: ["Byzantine Fault Tolerance", "BFT", "Blockchain Consensus", "Tendermint"]
permalink: /blogs/intro-tendermint
meta: intro-tendermint.png
author: niksmac
subtitle: "Tendermint a blockchain consensus engine"
---


## What is Tendermint?
> Tendermint is software for securely and consistently replicating an application on many machines.

To simply put [Tendermint](https://tendermint.com) is a software which can be used to achieve Byzantine fault tolerance (BFT) in any distributed computing platforms. From managing infrastructure to designing a distributed database, we can use Tendermint.

The ability to tolerate machines failing in arbitrary ways, including becoming malicious, is known as Byzantine fault tolerance (BFT). The theory of BFT is decades old, but software implementations have only became popular recently, due largely to the success of “blockchain technology” like Bitcoin and Ethereum. Blockchain technology is just a reformalization of BFT in a more modern setting, with emphasis on peer-to-peer networking and cryptographic authentication. The name derives from the way transactions are batched in blocks, where each block contains a cryptographic hash of the previous one, forming a chain. In practice, the blockchain data structure actually optimizes BFT design. [doc](https://tendermint.com/intro)

Tendermint consists of two chief technical components: a blockchain consensus engine and a generic application interface. The consensus engine, called Tendermint Core, ensures that the same transactions are recorded on every machine in the same order. The application interface, called the [Application BlockChain Interface](https://tendermint.com/intro/abci-overview) (ABCI), enables the transactions to be processed in any programming language.

## How to write applications using Tendermint?
As you can read from the official docs, Tendermint will not handle your keys, encryption or business logic, just the consensus and that's it.

![Tendermint App Architecture](/assets/img/blog/intro-tendermint-app-structure.png)

### ABCI Design
The purpose of ABCI is to provide a clean interface between state transition machines on one computer and the mechanics of their replication across multiple computers. The former we call ‘application logic’ and the latter the ‘consensus engine’. Application logic validates transactions and optionally executes transactions against some persistent state.

**The ABCI design has a few distinct components:**

- message protocol
  - pairs of request and response messages
  - consensus makes requests, application responds
  - defined using protobuf
- server/client
  - consensus engine runs the client
  - application runs the server
  - two implementations:
    - async raw bytes
    - grpc
- blockchain protocol
  - abci is connection oriented
  - Tendermint Core maintains three connections:
    - mempool connection: for checking if transactions should be relayed before they are committed. only uses CheckTx
    - consensus connection: for executing transactions that have been committed. Message sequence is, for every block, BeginBlock, [DeliverTx, ...], EndBlock, Commit
    - query connection: for querying the application state. only uses Query and Info


**Sources**

1. [tendermint.com](https://tendermint.com)
2. [ABCI App](https://tendermint.com/intro/getting-started/first-abci)
3. [Tendermint](https://tendermint.com/intro)

{% include cta-blog.html %}
