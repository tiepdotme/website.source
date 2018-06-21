---
title: "How to setup PIVX masternode on Ubuntu"
layout: blog
date: '2018-06-21 05:30:00'
tag: ["Masternode", "PIVX"]
permalink: "/blogs/setup-pivx-masternode-ubuntu"
author: niksmac
meta: pivx-masternode-ubuntu.png
subtitle: "A masternode is a server on a decentralized network which are used for direct/private/instant transactions."
---

A masternode is a server on a decentralized network. It can be uses to complete unique functions which ordinary nodes can’t. It can be used for features like direct send/instant transactions or private transactions.

Because of their increased capabilities, masternodes typically require a sizable investment in order to run. But this is where incentivization comes into play, as masternode operators are rewarded by earning portions of block rewards in whatever given cryptocurrency they’re facilitating.


Masternodes are nodes running the same wallet software on the same blockchain to provide extra services to the network.  These services include:
 - Anonymization increased privacy of transactions
 - Instant transactions
 - A decentralized governance
 - A decentralized budgeting system
 - Immutable proposal and voting systems.

This particular guide will walk you through the process of setting up a [PIVX](https://pivxmasternode.org/what-is-a-masternode/) masternode in Ubuntu, either in a cloud server or your home computer.


**Basic requirements to run pivx masternode**

- 10,000 PIV [How do I obtain PIV?](https://pivx.org/knowledge-base/how-do-i-obtain-piv/)
- A main computer (Your everyday computer) – This will run the control wallet, hold your collateral 10,000 PIV and can be turned on and off without affecting the masternode.
- Masternode Server (VPS – The computer that will be on 24/7)
- A unique IP address for your VPS / Remote wallet

## Set up Control wallet
### 1. Generate Masternode private key

`masternode genkey` will create a private key for you

### 2. Generate address
`getaccountaddress NAME_OF_MASTERNODE` will create an address for you.

### 3. Fund the control wallet
Send 10,000 PIV to the address you generated in step 2 _**Be absolutely 100% sure that this is copied correctly. We cannot help you, if you send 10,000 PIV to an incorrect address.**_

### 4. Confirm sent
`masternode outputs` will give you proof of transaction of sending 10,000 PIV

### 5. Assign the wallet
Go to PIVX data directory `%Appdata%/PIVX` on Windows and `~` on Linux. Find `masternode.conf` and add the following line to it

```
<Name of Masternode(Use the name you entered earlier for simplicity)> <Unique IP address>:51472 <The result of Step 1> <Result of Step 4> <The number after the long line in Step 4>
```
Substitute it with your own values and without the “<>”s

## Install the wallet in Ubuntu

### 6. Install wallet on Masternode Ubuntu
Install the latest version of the PIVX wallet onto your masternode. The lastest version can be found here: https://github.com/PIVX-Project/PIVX/releases

Latest as of Jun, 21 2018 [Download PIVX Wallet v3.1.0.2](https://github.com/PIVX-Project/PIVX/releases/download/v3.1.0.2/pivx-3.1.0.2-x86_64-linux-gnu.tar.gz)

Execute the following commands one by one.

```
cd ~
wget https://github.com/PIVX-Project/PIVX/releases/download/v3.1.0.2/pivx-3.1.0.2-x86_64-linux-gnu.tar.gz
tar -zxvf pivx-3.1.0.2-x86_64-linux-gnu.tar.gz
cd ~/pivx-3.1.0/bin
./pivxd
CTRL+C
```

```
cd ~/.pivx
vim pivx.conf
```

then press `i` to go into insert mode and make the config look like this:

>  rpcuser=long random username
rpcpassword=longer random password
rpcallowip=127.0.0.1
server=1
daemon=1
logtimestamps=1
maxconnections=256
masternode=1
externalip=your unique public ip address
masternodeprivkey=Result of Step 1

Press `esc` and `:wq`

## Start your masternode

```
cd ~/pivx-3.1.0/bin
./pivxd
```

From the Control wallet debug console
`startmasternode alias false <mymnalias>`

The following should appear:

> “overall” : “Successfully started 1 masternodes, failed to start 0, total 1”,
“detail” : [
{
“alias” : “<mymnalias>”,
“result” : “successful”,
“error” : “”
}

### 7. Start the masternode
`./pivx-cli startmasternode local false` A message “masternode successfully started” should appear

### 8. check status
`./pivx-cli masternode status` You should see something like:

> {
“txhash” : “334545645643534534324238908f36ff4456454dfffff51311”,
“outputidx” : 0,
“netaddr” : “45.11.111.111:51472”,
“addr” : “D6fujc45645645445645R7TiCwexx1LA1”,
“status” : 4,
“message” : “Masternode successfully started”
}

**Congratulations! You have successfully created your masternode!**

Now the masternode setup is complete, you are safe to remove “enablezeromint=0” from the `pivx.conf` file of the control wallet.


{% include cta-blog.html %}
