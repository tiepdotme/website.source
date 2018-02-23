---
title: "Lightning Network - What and Why"
layout: blog
date: '2018-02-23 05:30:00'
tag: ["Lightning Network", "Blockchain Lightning Network", "Bitcoin Scaling",  "Bitcoin"]
permalink: "/blogs/lightning-networks-what-and-why"
author: sruthi
meta: lightning-networks-what-and-why.png
subtitle: "Lightning network introduced to resolve scaling problem by allowing more transactions per second."
---

The problem with bitcoin blockchain network is scalability. The block size in a blockchain is limited to `1MB`, every block is created in every `10 Min` and only `7 transaction per second`. Lightning network introduced to resolve this problem, there by allowing more transaction at a time.

Lightning network(LN) can be defined as decentralised network or payment channel for instant payment which is based on block chain's smart contract functionality. More specifically Lightning Network is an `off-chain protocol` for bitcoin `micro payments`.

LN is a bidirectional payment channel which allows transaction between two parties without needing broadcast each and every transaction.

## How Lightning Network works

### Bidirectional payment channel

* A multi-signature wallet/ address is opened by both parties and a small amount is deposited by them from their personal address. This transaction is called funding transaction/opening transaction since it for fund and open a bidirectional channel.
* One `on­-chain` transaction is made to deposit the funds. Before this transaction is made, a refund transaction is created, which returns the original deposit to both parties. After the transaction is broadcast on­-chain, the `payment channel` is open and ready for transfers.

> Initially this funding is taken as input for the transaction.

* Let Alice and Bob are the two parties who opened the payment channel with funding of 10 BTC (5 BTC each). Additionally, Alice and Bob both create a secret (a string of numbers), and exchange the hash. Suppose Alice want to send 1 BTC to Bob then, Alice now immediately creates a subsequent transaction from the opening transaction called commitment transaction. With the commitment transaction, Alice sends four bitcoins to herself, and six bitcoins to a second multi-sig address. This address can be unlocked by Bob only `after 1000 blocks` and unlocked by Alice only if she knows the pre-image of the hash given by Bob. Alice signs the commitment transaction and give to Bob.
* Bob also creates the commitment transaction which is mirrored one of Alice. In this commitment transaction Bob sends 6 BTC to himself and 4 BTC to a second multi-sig address. This address is unlocked by Alice only after 1000 blocks and unlocked by Bob if he knows pre-image of hash given by Alice. Bob signs the transaction and gives to Alice.

> At this stage either Bob or Alice can sign half-valid transaction and publish on blockchain. But who ever publishing will have to wait 1000 blocks to unlock the multi-sig address.This is the key trick of a payment channel: neither sign and broadcast their half of the transaction at all.

* Suppose after some times Bob want to send 1BTC back to Alice. Bob repeats the same steps above mentioned but except that they require new secret keys.
At this stage both Alice and Bob can exchange previous secret that used in first setup .
* At this point, again, both Alice and Bob could sign and broadcast the new “half valid” commitment transaction they just got.

> Bob cannot safely sign and broadcast the older commitment transaction any more, because Alice now knows Bob's first secret. If Bob were to sign and broadcast that commitment transaction, he would immediately send four bitcoins to Alice... and he would have to wait 1000 blocks to claim his own six bitcoins. That's a problem, because now that Alice knows his secret, she could and claim the other six bitcoins as well!. The same way Alice cannot broadcast the older commitment transaction.


### Paying to third party

- When Alice want to pay carol and don't want to open a new channel with carol since opening a new channel need funding. Consider that both Alice and carol has a payment channel with Bob, then Alice can pay carol via Bob.
- Alice wants to ensure that she only pays Bob one bitcoin, if he also pays Carol one bitcoin. Because Alice cannot trust either Bob or Carol.
- Carol generates a random string and send the hash to Alice.
- Alice tells Bob that she will pay 1 BTC if Bob gives the pre-image of the hash within a particular time t.
- Then Bob tells Carol that He will pay 1 BTC if Carol gives the pre-image of the hash(which only Carol has) within a time t-n
- Bob turns to Carol, and gives Carol one bitcoin in return for the value.
- Then, Bob turns back to Alice with the value. Alice knows Bob must have gotten the value from Carol in exchange for a bitcoin, and therefore concludes Carol got her bitcoin. So Alice can confidently give Bob a bitcoin.

> if Bob gives a bitcoin to Carol, he must be guaranteed to get a bitcoin back from Alice.Bob has to trust Carol to really give him the value after he sent her a bitcoin.That's where [Hash Time-Locked Contracts](https://en.bitcoin.it/wiki/Hashed_Timelock_Contracts) (HTLCs) come in.

- Instead of sending Bob a bitcoin, Alice sends a bitcoin to a new multi-sig address that can be unlocked by Bob only if he provides his signature and pre-image of the hash. And if Bob doesn’t provide the value in time, after a specified time, Alice get her bitcoin back. Not only Alice and Bob, but also Bob and Carol established an HTLC.

> if Bob gives a bitcoin to Carol, he must be guaranteed to get a bitcoin back from Alice.Bob has to trust Carol to really give him the value after he sent her a bitcoin.That's where Hash Time-Locked Contracts (HTLCs) come in.
