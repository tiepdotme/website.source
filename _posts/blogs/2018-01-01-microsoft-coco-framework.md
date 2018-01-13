---
title: "Microsoft Coco Framework - Things you need to know"
layout: blog
date: '2018-01-01 05:30:00'
tag: ["Enterprise Blockchain", "Microsoft Coco Framework", "Coco Framework", "Scalable Blockchain"]
permalink: "/blogs/microsoft-coco-framework"
author: niksmac
meta: microsoft-ethereum-coco-framework.png
subtitle: "The Coco Framework enables high-scale, confidential blockchain networks that meet all key enterprise requirements."
---
## What is Coco Framework

Coco Framework is an open-source system that enables **high-scale**, confidential blockchain networks that meet all key enterprise requirements—providing a means to accelerate production **enterprise adoption of blockchain** technology.

Coco achieves this by designing specifically for **confidential consortiums**, where nodes and actors are explicitly declared and controlled. Based on these requirements, Coco presents an alternative approach to ledger construction, giving enterprises the scalability, distributed governance and enhanced confidentiality they need without sacrificing the inherent security and immutability they expect.

## What can coco do?

Leveraging the power of existing blockchain protocols, trusted execution environments (TEEs) such as Intel SGX and Windows Virtual Secure Mode (VSM), distributed systems and cryptography, Coco enables enterprise-ready blockchain networks that deliver:

* Throughput and latency approaching database speeds.
* Richer, more flexible, business-specific confidentiality models.
* Network policy management through distributed governance.
* Support for non-deterministic transactions.

### Coco system overview

Coco is a foundation for all blockchain protocols. It provides base components like persistent ledger, node to node and application to node secure communications etc. to other blockchain protocols.

Coco system consists of validating nodes termed as VNs. Each VN runs Coco framework and particular blockchain protocol. Every VN can verify the identity of other VN hence they are trusted. As per Coco framework white paper, VN can be further divided into logical components and can be categories into host or enclave.

## Trusted Execution environment aka TEE

A [TEE](https://en.wikipedia.org/wiki/Trusted_execution_environment) is a way of running code that operates in data that protects the process from disclosure and tampering from outside. The Trusted Execution Environment (TEE) is a secure area of the main processor. It guarantees code and data loaded inside to be protected with respect to confidentiality and integrity. The TEE as an isolated execution environment provides security features such as isolated execution, integrity of Trusted Applications along with confidentiality of their assets

- **Hardware based TEE** Intel sgx is an example the chip enables to create an enclave which has a security boundary around it, which protects the code and data by encrypting it.

_To be continued..._   

**More information**

* [Announcing the Coco Framework](https://azure.microsoft.com/en-in/blog/announcing-microsoft-s-coco-framework-for-enterprise-blockchain-networks/)
* [Technical Whitepaper](http://aka.ms/cocopaper)
