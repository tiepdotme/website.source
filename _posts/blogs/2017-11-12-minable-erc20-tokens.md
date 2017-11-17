---
title: "How to create mineable ERC20 tokens on Ethereum Solidity"
layout: blog
date: '2017-11-12 05:30:00'
tag: ["Mineable Token", "Solidity", "ERC20", "ERC20 tokens", "ICO"]
permalink: "/blogs/how-to-create-mineable-erc20-tokens"
author: niksmac
meta: minable-erc20-tokens.png
subtitle: "The concept of mineable token is entirely different from mintable tokens."
---

**What is a mineable token?**
Mining if the process of creating new tokens(achieving consensus on some data), similar to minting in fiat currency, however unlike fiat here in cryptocurrency we have mathematically provable methods.

Some major consensus algorithms are and not limited to,

1. [Proof of Work](https://en.wikipedia.org/wiki/Proof-of-work_system)
2. [Proof of Stake](https://en.wikipedia.org/wiki/Proof-of-stake)
3. [Proof of Authority](https://github.com/paritytech/parity/wiki/Proof-of-Authority-Chains)
4. [Proof of Activity](https://bitcoin.stackexchange.com/questions/4737/what-is-the-key-difference-between-the-proof-of-activity-proposal-and-proof-of-s)
5. [PBFT](https://en.wikipedia.org/wiki/Byzantine_fault_tolerance)

## Difference between mineable and minted tokens   
**Mineable** tokens are tokens which can be created or minted based some activity. This so called activity can be anything, i.e, It can be as crazy as taking a picture of your cat and add it to the transaction data, depending upon the insanity level of the token programmer/team.
**Mintable** tokens are also a way of creating tokens where you dont have to wait for some activity, you as the contract creator can create a token whenever you want.

## Most common approaches
There are 2 major approaches when we do a mineable token

### 1. Block Rewards

There are some ways to tie your coin supply to a mathematical formula. One of the simplest ways would be to make it a "merged mining" with ether, meaning that anyone who finds a block on ethereum would also get a reward from your coin, given that anyone calls the reward function on that block. You can do it using the special keyword `coinbase` that refers to the miner who finds the block.

```
function issueBlockReward() {
    balanceOf[block.coinbase] += 5;
}
```

### 2. Proof of Work (PoW)

It's also possible to add a mathematical formula, so that anyone who can do math can win a reward. On this next example you have to calculate the cubic root of the current challenge gets a point and the right to set the next challenge:

```
uint currentChallenge = 1; // Can you figure out the cubic root of this number?

function rewardMathGeniuses(uint answerToCurrentReward, uint nextChallenge) {
    require(answerToCurrentReward**3 == currentChallenge); // If answer is wrong do not continue
    balanceOf[msg.sender] += 1; // Reward the player
    currentChallenge = nextChallenge; // Set the next challenge
}

```

While calculating cubic roots can be hard for someone to do on their heads, they are very easy with a calculator, so this game could be easily broken by a computer. Also since the last winner can choose the next challenge, they could pick something they know and therefore would not be a very fair game to other players. There are tasks that are easy for humans but hard for computers but they are usually very hard to code in simple scripts like these. Instead a fairer system should be one that is very hard for a computer to do, but isn't very hard for a computer to verify. A great candidate would be to create a hash challenge where the challenger has to generate hashes from multiple numbers until they find one that is lower than a given difficulty.


But if you like Hashing as a form of random issuance of coins, you can still create your own ethereum based currency that has a proof of work issuance:

```
bytes32 public currentChallenge; // The coin starts with a challenge
uint public timeOfLastProof; // Variable to keep track of when rewards were given
uint public difficulty = 10**32; // Difficulty starts reasonably low

function proofOfWork(uint nonce){
    bytes8 n = bytes8(sha3(nonce, currentChallenge)); // Generate a random hash based on input
    require(n >= bytes8(difficulty)); // Check if it's under the difficulty

    uint timeSinceLastProof = (now - timeOfLastProof); // Calculate time since last reward was given
    require(timeSinceLastProof >=  5 seconds); // Rewards cannot be given too quickly
    balanceOf[msg.sender] += timeSinceLastProof / 60 seconds;  // The reward to the winner grows by the minute

    difficulty = difficulty * 10 minutes / timeSinceLastProof + 1;  // Adjusts the difficulty

    timeOfLastProof = now; // Reset the counter
    currentChallenge = sha3(nonce, currentChallenge, block.blockhash(block.number - 1));  // Save a hash that will be used as the next proof
}
```

This process of trying to find the number that will give you a reward is what is called mining: if difficulty rises it can be very hard to find a lucky number, but it will always be easy to verify that you found one.


**Further reading**
1. [Mining and Consensus](http://chimera.labs.oreilly.com/books/1234000001802/ch08.html)
2. [Create your own Cryptocurrency](https://ethereum.org/token#proof-of-work)

{% include cta-blog.html %}
