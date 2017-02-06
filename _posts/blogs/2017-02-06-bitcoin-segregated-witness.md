---
layout: blog
title: "What is Bitcoin Segregated Witness aka segwit"
date: 2017-02-06 05:10:00 +0530
tag: ["Segregated Witness", "Segwit", "Bitcoin", "UTXO", "Principles", "Blockchain"]
permalink: /blogs/bitcoin-segregated-witness-segwit
meta: bitcoin-segregated-witness-segwit.png
author: niksmac
subtitle: "The idea of segwit is that the signatures in a transactions are skipped when calculating the transaction id."
---


Segregated Witness is a solution for the Bitcoin Core. It is spearheaded by Pieter Wuille, Johnson Lau, and Eric Lombrozo [BIP141](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki). The general idea of segwit is that the signatures in a transaction (aka witness data) are skipped when calculating the transaction id.

Segregated Witness is basically an “add-on” that carries signatures and some additional data. Importantly, Segregated Witnesses are completely ignored by old nodes, but recognized by new nodes. Moreover, the data they carry is not hashed along with the other parts of a transaction into the transaction ID.

## Rationale

The transaction size overhead is due to two factors:

- using a 256 bit hash for P2WSH rather than the 160 bit hash for P2SH; and
- encoding via P2SH so that old wallets that don’t support segwit can send funds that can be spent using segwit, allowing the receiver to gain segwit’s benefits.

Without these two factors, the overhead would be negligible at -3 bytes for P2WPKH and +1 bytes for P2WSH.

## Segregated Witness Benefits

The Segregated Witness soft-fork (segwit) includes a wide range of features, many of which are highly technical.

- **Malleability Fixes:** The way the txid is calculated allows anyone to make small modifications to the transaction that will not change its meaning, but will change the txid. This is called third-party malleability. BIP 62 (“dealing with malleability”) attempted to address these issues in a piecemeal manner, but was too complicated to implement as consensus checks and has been withdrawn.
- **Linear scaling of sighash operations:** A major problem with simple approaches to increasing the Bitcoin blocksize is that for certain transactions, signature-hashing scales quadratically rather than linearly. Doubling the size of a transaction increases can double both the number of signature operations, and the amount of data that has to be hashed for each of those signatures to be verified. This has been seen in the wild, where an individual block required 25 seconds to validate, and maliciously designed transactions could take over 3 minutes.
- **Increased security for multisig:** Multisig payments currently use P2SH which is secured by the 160-bit HASH160 algorithm (RIPEMD of SHA256). However, if one of the signers wishes to steal all the funds, they can find a collision between a valid address as part of a multisig script and a script that simply pays them all the funds with only 80-bits (2^80) worth of work, which is already within the realm of possibility for an extremely well-resourced attacker.
- **Reducing UTXO growth:** The Unspent Transaction Output (UTXO) database is maintained by each validating Bitcoin node in order to determine whether new transactions are valid or fraudulent. For efficient operation of the network, this database needs to be very quick to query and modify, and should ideally be able to fit in main memory (RAM), so keeping the database’s size in bytes as small as possible is valuable.
- **Block capacity/size increase:** Since old nodes will only download the witness-stripped block, they only enforce the 1 MB block size limit rule on that data. New nodes, which understand the full block with witness data, are therefore free to replace this limit with a new one, allowing for larger block sizes.

#### Further Reading
1. [Segregated Witness Adoption](https://bitcoincore.org/en/segwit_adoption/)
2. [Segregated Witness Costs and Risks](https://bitcoincore.org/en/2016/10/28/segwit-costs/)

{% include cta-blog.html %}
