---
layout: blog
title: Blockchain for Insurance Industry
date: 2016-08-12 05:10:00 +0530
tag: ["Blockchain", "Whitepaper"]
permalink: /blogs/blockchain-for-insurance-industry
meta: blockchain-for-insurance.png
author: niksmac
subtitle: Insurance industry can be trust-less on blockchain.
---

Insurance companies have been traditionally slow to drive adoption in  technologies. These innovation strategies and initiatives are aimed at retaining customers and optimizing pricing and tradability of services.
Insurers who have trust at the heart have begun to appreciate with technologies such as blockchain because they believe that a “trustless” system (which pushes identity management, ownership and management of data and processes to the customer) may provide genuine long-term strategic benefits.

> **Whats is meant by trust-less:**
The greatest advantage of blockchains is its decentralized protocol which is often referred as “Trust to the trust-less world”. Because every part of the system is continually checking and approving the work of the others. Therefore, if any piece of information will be changed on one machine, it won’t be approved by the others as all of them hold the same record.

In the banking industry, several blockchain use conditions are being integrated, which range from customer-facing repayment technology to switch and trading services.While the insurance industry (in conditions of technology adoption) lags behind banking, it is nevertheless uniquely positioned to reap the benefits of blockchain technology. Blockchain can address the competitive challenges many incumbents face, including poor customer engagement, limited growth in mature markets, and the trends of digitization. In the next, we format the most appealing insurance-related use circumstances in three categories: enabling progress, increasing efficiency, and lowering cost by automating key techniques.

## Potential use cases

1. Validate authenticity, ownership, and provenance of goods as well as authenticity of documents (e.g., medical reports)
2. Check for police theft reports/claims history as well as a person’s verified identity and detect patterns of fraudulent behavior related to a specific identity
3. Prove date and time of policy issuance or purchase of a product/asset
4. Confirm subsequent ownership and location changes.

## How CAN we keep the files on the Blockchain
Assume that we want to keep the data of applicants on the blockchain, well there are multiple ways of doing it,

1. On the Blockchain as `meta` information
2. Save the file somewhere else and keep the hash on the blockchain

**1. On the Blockchain as `meta` information**   

Even though it is technically possible to do so, there are some limitations on the Blockchain itself like, file size and amount payable for the network to write the files onto the Blockchain. Because of these reasons we would look into either [Private Permissioned Blockchain](/blogs/what-private-permissioned-blockchain)_ or the _Save the file somewhere else and keep the hash on the blockchain_ method.

**2. Save the Hash only**

Here we will hash the file using a well known nearly "un-hackable" algorithm to create the hash of the file. The hash is created in such a way that any computer running the same function on the same file will return only same result.

Assume we have word `blockchain` when we hash it using `sha256` function we will get `ef7797e13d3a75526946a3bcf00daec9fc9c9c4d51ddc7cc5df888f74dd434d1` which will be same for all computers around the world. Hence there is some sort of consensus ([Common knowledge (logic)](https://en.wikipedia.org/wiki/Common_knowledge_(logic))) which keeps the system trust-less

![Blockchain for Insurance Industry](/assets/img/blog/blockchain-for-insurance-workflow.png){: .ui .image .fluid}
<small>
If you are interested in the technicality of hashing the data in blockchain [here](http://blog.ezyang.com/2011/06/the-cryptography-of-bitcoin/ "The Cryptography of Bitcoin") is a nice read and [here](https://en.bitcoin.it/wiki/Block_hashing_algorithm "Block hashing algorithm")
</small>

So we have solved the issue of file size getting stored on the blockchain, by saving the hash of the file.

## How do we verify the authenticity of the data?
Blockchain handles this with `Keyless signature` to verify electronic data. Each request is returned a keyless signature which allows a third party to verify the transaction properties (time, identity, integrity) of the data using the blockchain as a reference. The keyless signature enables the individual properties and attributes of each transaction (including claims) to be verified without reliance on trusted parties and manual intervention.

### Opportunities for insurers

#### 1. Decentralized infrastructure
It will create need for new regulation and controls. It will Potentially reduces transparency and controls for governments and regulators based on the existing model.

#### 2. Fraud and security
It will eliminate paperwork at a certain extend. Interaction between suppliers, entities, systems and services are transparent and verifiable at any point of time in the data life cycle (even in the past)

#### 3. Legal and regulatory compliance
De-facto ensures compliance with any international data protection laws and regulations (but, market regulation and levels of trust needed to scale the technology still to be determined)

## Conclusion
We now have looked at how blockchain has been implemented in insurance agencies, how it will change the way they transact business down the road and the implications for getting three billion people online that do not actually have access to financial services.
