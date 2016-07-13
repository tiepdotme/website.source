---
layout: blog
title:  "Introduction to IPFS"
subtitle: "Content-addressable, peer-to-peer hypermedia distribution protocol."
date:   2016-07-05 00:12:49 +0530
meta: ipfs-cover.png
author: niksmac
permalink: /blogs/ipfs-introduction
tag: ["IPFS", "Decentralization"]
---

IPFS is a peer-to-peer distributed file system that seeks to connect all computing devices with the same system of files. In some ways, IPFS is similar to the [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web), but IPFS could be seen as a single BitTorrent swarm, exchanging objects within one Git repository. In other words, IPFS provides a high-throughput, content-addressed block storage model, with content-addressed hyperlinks.


## What is IPFS? From their README:

> IPFS is a distributed file system that seeks to connect all computing devices with the same system of files. In some ways, this is similar to the original aims of the Web, but IPFS is actually more similar to a single bittorrent swarm exchanging git objects. IPFS could become a new major subsystem of the internet. If built right, it could complement or replace HTTP. It could complement or replace even more. It sounds crazy. It is crazy.


**HTTP is inefficient and expensive**
HTTP downloads a file from a single computer at a time, instead of getting pieces from multiple computers simultaneously. With video delivery, a P2P approach could save 60% in bandwidth costs.

**The web's centralization limits opportunity**
The Internet has been one of the great equalizers in human history and a real accelerator of innovation. But the increasing consolidation of control is a threat to that.

**Our apps are addicted to the backbone**
Developing world. Offline. Natural disasters. Intermittent connections. All trivial compared to interplanetary networking. The networks we're using are so 20th Century. We can do better.

## How IPFS works
 1. Each file and all of the blocks within it are given a unique fingerprint called a cryptographic hash.
 2. IPFS removes duplications across the network and tracks version history for every file.
 3. Each network node stores only content it is interested in, and some indexing information that helps figure out who is storing what.
 4. When looking up files, you're asking the network to find nodes storing the content behind a unique hash.

[IPFS Whitepaper](https://github.com/ipfs/papers/raw/master/ipfs-cap2pfs/ipfs-p2p-file-system.pdf)


<div class="ui embed" data-source="youtube" data-id="8CMxDNuuAiQ"></div>
