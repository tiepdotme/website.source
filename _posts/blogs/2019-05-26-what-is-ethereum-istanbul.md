---
title: 'Changes to watch in Ethereum istanbul'
layout: blog
date: '2019-05-26 05:30:00'
tag: ['Ethereum Istanbul', 'Ethereum', 'Fork', 'HardFork']
permalink: '/blogs/what-is-ethereum-istanbul-upgrade'
author: niksmac
meta: ethereum-istanbul-upgrade.jpg
subtitle: 'Ethereum Istanbul - October 2019 Planned Ethereum Network Upgrade'
excerpt: 'Ethereum Istanbul - October 2019 Planned Ethereum Network Upgrade which is expected to adapt  few EIPs'
---

## Istanbul October 2019 Planned Ethereum Network Upgrade

The deadline for EIP proposals for Istanbul was May 17th. All of these EIPs intend to prepare for inclusion in Istanbul, but Core Dev acceptance, implementation, testing, audits, and other work needs to be done to prepare them.

## Proposed EIPs

<ul><li><a href="https://eips.ethereum.org/EIPS/eip-615" >EIP-615</a>: Subroutines and Static Jumps for the EVM</li> <li><a href="https://eips.ethereum.org/EIPS/eip-1057" >EIP-1057</a>: ProgPoW, a Programmatic Proof-of-Work (contingent on positive audit results) - @IfDefElse</li> <li><a href="https://eips.ethereum.org/EIPS/eip-1108" >EIP-1108</a>: Reduce alt_bn128 precompile gas costs - @zac-williamson</li> <li><a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1283.md" >EIP-1283</a>: Net gas metering for SSTORE without dirty maps @sorpass</li> <li><a href="https://eips.ethereum.org/EIPS/eip-1344" >EIP-1344</a>: Add ChainID opcode - @fubuloubu</li> <li><a href="https://eips.ethereum.org/EIPS/eip-1352" >EIP-1352</a>: Specify restricted address range for precompiles/system contracts</li> <li><a href="https://eips.ethereum.org/EIPS/eip-1380" >EIP 1380</a>: Reduced gas cost for call to self - @axic @jacqueswww</li> <li><a href="https://eips.ethereum.org/EIPS/eip-1559" >EIP 1559</a>: Fee market change for ETH 1.0 chain</li> <li><a href="https://eips.ethereum.org/EIPS/eip-1965" >EIP-1965</a>: Method to check if a chainID is valid at a specific block Number</li> <li><a href="https://eips.ethereum.org/EIPS/eip-1702" >EIP-1702</a>: Generalized account versioning scheme - @sorpaas</li> <li><a href="https://eips.ethereum.org/EIPS/eip-1706" >EIP-1706</a>: Disable SSTORE with gasleft lower than call stipend</li> <li><a href="https://eips.ethereum.org/EIPS/eip-1803" >EIP 1803</a>: Rename opcodes for clarity - @axic</li> <li><a href="https://eips.ethereum.org/EIPS/eip-1829" >EIP 1829</a>: Precompile for Elliptic Curve Linear Combinations @remco</li> <li><a href="https://github.com/ethereum/EIPs/blob/dcc573e74adc0e6dd25821ddaabf862e8f85e107/EIPS/eip-1884.md" >EIP 1884</a>: Reprice Opcodes + optional new opcode, @holiman - <a href="https://ethereum-magicians.org/t/opcode-repricing/3024" >Discuss</a></li> <li><a href="https://eips.ethereum.org/EIPS/eip-1930" >EIP 1930</a>: CALLs with strict gas semantic. Revert if not enough gas available</li> <li><a href="https://eips.ethereum.org/EIPS/eip-2028" >EIP 2028</a>: Calldata gas cost reduction</li></ul>

## Notable discussions

> I proposed EIP-1344 for Istanbul because I think it’s the most straightforward and flexible proposal for managing chain ID-based domain separation in the application layer. I don’t believe EIP-1965 has to be Accepted to be proposed for Istanbul, so that should not be an issue in proposing it.
> [fubuloubu](https://ethereum-magicians.org/t/hardfork-meta-eip-1679-istanbul-discussion/3207/3)

**Source:**

-   https://en.ethereum.wiki/roadmap/istanbul
-   https://ethereum-magicians.org/t/hardfork-meta-eip-1679-istanbul-discussion/3207
