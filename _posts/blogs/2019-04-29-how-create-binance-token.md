---
title: 'How to create and issue token on Binance Chain'
layout: blog
date: '2019-04-29 05:30:00'
tag:
    [
        'Binance Token',
        'Token',
        'Binance Chain',
        'Tutorial',
        'Binance DEX',
        'DEX',
    ]
permalink: '/blogs/how-create-binance-token'
author: niksmac
meta: create-binance-token.png
subtitle: 'Binance DEX where users can issue the token and exchange digital assets based on the Binance Chain.'
excerpt: 'Binance DEX where users can issue the token and exchange digital assets based on the Binance Chain.'
---

Binance Chain and Binance DEX are community-driven and created to assist projects that require both fast transactions and improved liquidity in a decentralized manner.

While anyone can issue their tokens on Binance Chain, the listing of trading pairs on Binance DEX involves 4 main steps: Proposal, Deposit, Vote, and List. However for the sake of easy understanding lets break this even further into;

1. Create a wallet
2. Get test BNB
3. Issue the token
4. Create a proposal to list your token
5. List your token

## 1. Create a wallet

You can create an account from the testnet website here [BinanceTestnet](https://testnet.binance.org/create). Enter your strong password and you will need to download the keystore file. **Please backup the mnemonic phrase and save both file and phrase carefully.**

Now you have your keystore file, password and backup mnemonic phrase, you can proceed to next steps.

### 1.1. See if you can unlock.

Go to [binance.org/unlock](https://testnet.binance.org/unlock) to unlock your wallet and you can see your address there.

## 2. Get test BNB

You need test BNBs to create, list and issue your tokens the fee estimations are the following;

1. Issuing 400 BNB
2. Listing Proposal 2000 BNB
3. Listing 800 BNB

i.e. 2400 BNB are required for the issuing/listing.

**Steps to get test BNB**

-   Register in Binance (Live exchange) [Register](https://www.binance.com/register.html)
-   Get BNB from test [faucet](https://www.binance.com/en/dex/testnet/address)

> Each address can only get 200 BNB from the faucet. To get the necessary test BNB, you might get more from your friends or register more addresses, and transfer all BNB into one wallet.

## 3. Create/Issue token

To issue a token you need to have basic unix command line experience. You need to use command line utility called `bnbcli` which you can download from [binance-chain/node-binary](https://github.com/binance-chain/node-binary).

```
$ git clone git@github.com:binance-chain/node-binary.git
$ cd ./cli/testnet/mac or cd ./cli/testnet/linux
$ ./bnbcli
```

In some cases you need to set appropriate permissions to get this utility working you can achieve this by typing `chmod a+x bnbcli` from a MacOS terminal. Use appropriate command based on your OS/Arch.

### 3.1 Import your wallet

You need to import your testnet wallet to the `bnbcli` utility with the following steps

```
$ ./bnbcli keys add key01 --recover
Enter a passphrase for your key:
Repeat the passphrase:
> Enter your recovery seed phrase:
```

You need to enter your wallet password and then the mnemonic phrase to import the wallet locally. After successful import you will get your new wallet under name `key01`

`./bnbcli keys list` to see whether your keys are imported correctly.

You should see something like

```
› ./bnbcli keys list
NAME:	TYPE:	ADDRESS:						    PUBKEY:
key01	local	tbnb15ppky5sxd0h78en***	bnbp1addwnpe***
key02	local	tbnb1rh0zpgfmhye042a***	bnbp1addwnpe***
key03	local	tbnb1gnd743gtq640kqm***	bnbp1addwnpe***
....
```

### 3.2. Issue Token

See all available command line options under [Asset Management](https://docs.binance.org/tokens.html#issue)

```
$ ./bnbcli token issue \
--token-name "Lightrains LIGHT" \
--total-supply 100000000000000000 \
--symbol LIGHT \
--mintable \
--from key01 \
--chain-id=Binance-Chain-Nile \
--node=data-seed-pre-2-s1.binance.org:80 \
--json \
--voting-period 7200

```

> `--voting-period` should be set to 7200, i have tried many values according to Binance doc and this particular value seems to be working all the time.

You will get a responce like

```
Committed at block 1887 (tx hash: A06E5AD582E4E92B324F3B05C5D85634FEB, … Issued LIGHT-123…)
```

Here we issued a token called LIGHT, the total amount is 1 billion. To avoid abusing, the chain will automatically add three random letters as the suffix. The combined name will be unique on the Chain.

## 4. Proposal to list token

You need to create a proposal to let validators vote. You can use the following command to create a listing proposal.

```
$ ./bnbcli gov submit-list-proposal \
--from key01
--deposit 200000000000:BNB \
--base-asset-symbol LIGHT-123 \
--quote-asset-symbol BNB \
--init-price 100000000 \
--title "List LIGHT-123/BNB" \
--description "list LIGHT-123/BNB" \
--expire-time FUTURE_TIME_EPOCH \
--chain-id=Binance-Chain-Nile \
--node=data-seed-pre-2-s1.binance.org:80 \
--json
> Password to sign with 'key01':
```

It will prompt you to enter password, enter it.

In this example, we deposited 2000 BNB for the listing proposal and the initial price is 1 BNB. Please pay attention that according to the official document, the initial price must be 1 BNB or the proposal will be rejected.

On successful proposal you will get a proposal ID, you can get it from the [explorer](https://testnet-explorer.binance.org/) or via `bnbcli` using

```
$ ./bnbcli gov query-proposals \
--chain-id=Binance-Chain-Nil \
--node=data-seed-pre-2-s1.binance.org:80
 1 — list BNB/BTC.B-9CE
 2 — list XRP.B-2A4/BNB
 …
 415 — list LIGHT-123
```

here our proposal id is 415

According to the announcement, auto-voter is switched on. All the qualified proposal should be voted.

## 5. List your token

Once the proposal is passed, you can them list your token. The fee of listing is 800 BNB.

```
$ ./bnbcli dex list -s LIGHT-123 \
--quote-asset-symbol BNB \
--from test \
--init-price 100000000 \
--proposal-id 415 \
--chain-id=Binance-Chain-Nile \
--node=data-seed-pre-2-s1.binance.org:80 \
--json
```

**That’s it. Your token is successfully listed now!**

**Sources**

-   [community.binance.org](https://community.binance.org/t/guidelines-on-how-to-list-your-token-on-binance-dex-dex/1596)

{% include cta-blog.html %}
