---
layout: blog
title: Common useful JavaScript snippets for geth
subtitle: "JavaScript snippets for go-ethereum console."
date: 2016-07-15 11:19:48 +0530
author: niksmac
meta: ethereum-geth-javascript-snippets.png
permalink: /blogs/useful-ethereum-geth-javascript-snippets
tag: ["Blockchain", "Ethereum", "geth", "go-ethereum"]
---

This is a collection of common useful scripts that are handy when you do any kind of developemt on the Ethereum Virtual Machine aka EVM.

This collection of scripts are availabe in github
[niksmac/ethereum-scripts](https://github.com/niksmac/ethereum-scripts)

## 1. Print Block Details
This function is uswful when you want to print the details of a block in the `console`

```
function printBlock(block) {
	console.log("Block number     : " + block.number + "\n"
			+ " hash            : " + block.hash + "\n"
			+ " parentHash      : " + block.parentHash + "\n"
			+ " nonce           : " + block.nonce + "\n"
			+ " sha3Uncles      : " + block.sha3Uncles + "\n"
			+ " logsBloom       : " + block.logsBloom + "\n"
			+ " transactionsRoot: " + block.transactionsRoot + "\n"
			+ " stateRoot       : " + block.stateRoot + "\n"
			+ " miner           : " + block.miner + "\n"
			+ " difficulty      : " + block.difficulty + "\n"
			+ " totalDifficulty : " + block.totalDifficulty + "\n"
			+ " extraData       : " + block.extraData + "\n"
			+ " size            : " + block.size + "\n"
			+ " gasLimit        : " + block.gasLimit + "\n"
			+ " gasUsed         : " + block.gasUsed + "\n"
			+ " timestamp       : " + block.timestamp + "\n"
			+ " transactions    : " + block.transactions + "\n"
			+ " uncles          : " + block.uncles);
	if (block.transactions != null) {
		console.log("--- transactions ---");
		block.transactions.forEach( function(e) {
				printTransaction(e);
				})
	}
}
```

## 2. Check all Balances
Can be used to cheak balances of all accounts inside your keystore; ie, you own both the keys.

```
function checkAllBalances() {
	var i =0;
	eth.accounts.forEach( function(e){
			console.log("  eth.accounts["+i+"]: " +  e + " \tbalance: " +    web3.fromWei(eth.getBalance(e), "ether") + " ether");
			i++;
			})
};
```

## 3. Get Account Balances And Including TheDAO Tokens

```
function padTokens(s, n) {
	var o = s.toPrecision(n);
	while (o.length < n) {
		o = " " + o;
	}
	return o;
}

function padEthers(s) {
	var o = s.toFixed(18);
	while (o.length < 27) {
		o = " " + o;
	}
	return o;
}

function checkAllBalances() {
	var theDAOABI = [ { "type": "function", "outputs": [ { "type": "uint256", "name": "", "value": "5e+22" } ], "name": "minTokensToCreate", "inputs": [], "constant": true }, { "type": "function", "outputs": [ { "type": "uint256", "name": "", "value": "2.668900014413644230605979e+24" } ], "name": "totalSupply", "inputs": [], "constant": true }, { "type": "function", "outputs": [ { "type": "uint256", "name": "", "value": "1464426000" } ], "name": "closingTime", "inputs": [], "constant": true }, { "type": "function", "outputs": [], "name": "refund", "inputs": [], "constant": false }, { "type": "function", "outputs": [ { "type": "address", "name": "", "value": "0xda4a4626d3e16e094de3225a751aab7128e96526" } ], "name": "curator", "inputs": [], "constant": true }, { "type": "function", "outputs": [ { "type": "uint256", "name": "balance", "value": "0" } ], "name": "balanceOf", "inputs": [ { "type": "address", "name": "_owner" } ], "constant": true }, { "type": "function", "outputs": [ { "type": "uint256", "name": "_numberOfProposals", "value": "0" } ], "name": "numberOfProposals", "inputs": [], "constant": true }, { "type": "function", "outputs": [ { "type": "address", "name": "", "value": "0x807640a13483f8ac783c557fcdf27be11ea4ac7a" } ], "name": "extraBalance", "inputs": [], "constant": true }, { "type": "function", "outputs": [ { "type": "bool", "name": "", "value": true } ], "name": "isFueled", "inputs": [], "constant": true }, { "type": "function", "outputs": [ { "type": "bool", "name": "success" } ], "name": "createTokenProxy", "inputs": [ { "type": "address", "name": "_tokenHolder" } ], "constant": false }, { "type": "function", "outputs": [ { "type": "uint256", "name": "_voteID" } ], "name": "vote", "inputs": [ { "type": "uint256", "name": "_proposalID" }, { "type": "bool", "name": "_supportsProposal" } ], "constant": false }, { "type": "event", "name": "FuelingToDate", "inputs": [ { "type": "uint256", "name": "value", "indexed": false } ], "anonymous": false }, { "type": "event", "name": "ProposalAdded", "inputs": [ { "type": "uint256", "name": "proposalID", "indexed": true }, { "type": "address", "name": "recipient", "indexed": false }, { "type": "uint256", "name": "amount", "indexed": false }, { "type": "bool", "name": "newCurator", "indexed": false }, { "type": "string", "name": "description", "indexed": false } ], "anonymous": false }, { "type": "event", "name": "ProposalTallied", "inputs": [ { "type": "uint256", "name": "proposalID", "indexed": true }, { "type": "bool", "name": "result", "indexed": false }, { "type": "uint256", "name": "quorum", "indexed": false } ], "anonymous": false } ];
	var theDAOAddress = "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413";
	var theDAO = eth.contract(theDAOABI).at(theDAOAddress);
	var theDAOTotal = 0;
	var ethersTotal = 0;

	console.log("  #     Account                                        TheDAO                      ethers");
	console.log("------- ------------------------------------------ ---------- ---------------------------");
	var i =0;
	eth.accounts.forEach( function(e){
			var tokens = theDAO.balanceOf(e) / parseFloat(1e16);
			theDAOTotal += parseFloat(tokens);
			var ethers = web3.fromWei(eth.getBalance(e), "ether");
			ethersTotal += parseFloat(ethers);
			console.log("  " + i + "\t" + e + " " + padTokens(tokens, 10) + " " + padEthers(ethers));
			i++;
			})
	console.log("------- ------------------------------------------ ---------- ---------------------------");
	console.log("  " + i + "                                               " + padTokens(theDAOTotal, 10) + " " + padEthers(ethersTotal));
};
```

## 4. Find all tokens
Useful when you want all custom tokens in your blockchain, you ever traded acheieved etc.

```
var tokenInterface = [{"type": "function","name": "name","constant": true,"inputs": [],"outputs": [{"name": "","type": "string"}]},{"type": "function","name": "decimals","constant": true,"inputs": [],"outputs": [{"name": "","type": "uint8"}]},{"type": "function","name": "balanceOf","constant": true,"inputs": [{"name": "","type": "address"}],"outputs": [{"name": "","type": "uint256"}]},{"type": "function","name": "symbol","constant": true,"inputs": [],"outputs": [{"name": "","type": "string"}]},{"type": "function","name": "transfer","constant": false,"inputs": [{"name": "_to","type": "address"},{"name": "_value","type": "uint256"}],"outputs": []},{"type": "constructor","inputs": [{"name": "_supply","type": "uint256"},{"name": "_name","type": "string"},{"name": "_decimals","type": "uint8"},{"name": "_symbol","type": "string"}]},{"name": "Transfer","type": "event","anonymous": false,"inputs": [{"indexed": true,"name": "from","type": "address"},{"indexed": true,"name": "to","type": "address"},{"indexed": false,"name": "value","type": "uint256"}]}];
TokenContract = web3.eth.contract(tokenInterface);

var lowestBlock = 474147; //November 3, 2015 - last time the ABI above was changed
var highestBlock = eth.getBlock("latest").number;
//var lowestBlock = 483325; //smaller test case with just one coin (MistCoin)
//var highestBlock = 484731; //smaller test case with just one coin (MistCoin)
for (var x=lowestBlock; x < highestBlock; x++) {
	var transactions = eth.getBlock(x).transactions;
	for (var y=0; y < transactions.length; y++) {
		//    if (x % 100 == 0) { console.log("."); }
		var contractAddr = eth.getTransactionReceipt(transactions[y]).contractAddress;
		if (contractAddr != null) {
			var tokenInstance = TokenContract.at(contractAddr);
			var symbol = "";
			var decimals = "";
			var name = "";
			try {
				symbol = tokenInstance.symbol();
			} catch(err) {
			}
			try {
				decimals = tokenInstance.decimals();
			} catch(err) {
				//don't do anything here, just catch the error so program doesn't die
			}
			try {
				name = tokenInstance.name();
			} catch(err) {
				//don't do anything here, just catch the error so program doesn't die
			}
			if (symbol != null && symbol != "" && name != null && name != "") {
				console.log("-----------");
				console.log("Contract Address: " + contractAddr);
				console.log("Name: " + name);
				console.log("Symbol: " + symbol);
				console.log("Decimals: " + decimals);
				console.log("-----------");
			}
			//       console.log(contractAddr);  //testing
		}
	}
	//  console.log(eth.getBlock(x).transactions);  //testing
}
```

## 5. Find all non-zero transactions in a Block
Find Non-Zero Transaction Count In A Range Of Blocks

```
function checkTransactionCount(startBlockNumber, endBlockNumber) {
	console.log("Searching for non-zero transaction counts between blocks "  + startBlockNumber + " and " + endBlockNumber);
	for (var i = startBlockNumber; i <= endBlockNumber; i++) {
		var block = eth.getBlock(i);
		if (block != null) {
			if (block.transactions != null && block.transactions.length != 0) {
				console.log("Block #" + i + " has " + block.transactions.length + " transactions")
			}
		}
	}
}
```

## 6. Get mined blocks
Get all the blocks mined by a specific address.

```
function getMinedBlocks(miner, startBlockNumber, endBlockNumber) {
	if (endBlockNumber == null) {
		endBlockNumber = eth.blockNumber;
		console.log("Using endBlockNumber: " + endBlockNumber);
	}
	if (startBlockNumber == null) {
		startBlockNumber = endBlockNumber - 10000;
		console.log("Using startBlockNumber: " + startBlockNumber);
	}
	console.log("Searching for miner \"" + miner + "\" within blocks "  + startBlockNumber + " and " + endBlockNumber + "\"");

	for (var i = startBlockNumber; i <= endBlockNumber; i++) {
		if (i % 1000 == 0) {
			console.log("Searching block " + i);
		}
		var block = eth.getBlock(i);
		if (block != null) {
			if (block.miner == miner || miner == "*") {
				console.log("Found block " + block.number);
				printBlock(block);
			}
			if (block.uncles != null) {
				for (var j = 0; j < 2; j++) {
					var uncle = eth.getUncle(i, j);
					if (uncle != null) {
						if (uncle.miner == miner || miner == "*") {
							console.log("Found uncle " + block.number + " uncle " + j);
							printUncle(block, j, uncle);
						}
					}
				}
			}
		}
	}
}
```


