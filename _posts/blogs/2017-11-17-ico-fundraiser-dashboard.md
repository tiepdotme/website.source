---
title: "Engineering ICO fundraiser platform"
layout: blog
date: '2017-11-17 05:30:00'
tag: ["Fundraiser Platform", "Solidity", "ERC20", "ERC20 tokens", "ICO", "ICO Platform"]
permalink: "/blogs/engineering-ico-fundraiser-platform"
author: niksmac
meta: engineering-ico-fundraiser-platform.png
subtitle: "Allow anyone in the world to participate. Leverage blockchain technology for a frictionless, global sale."
---

We engineered this easy to use [investor dashboard](/work/ico-fundraiser-dashboard) to let you publicly sell your tokens in a safe and easy way, assisting both in the pre-sale and sale phases.

## Highlights
- Allow anyone in the world to participate. Leverage blockchain technology for a frictionless, global sale.
- Designed and built with the highest security standards used in OpenZeppelin.
- Seamlessly accept ETH, BTC or other major blockchain assets, sent from any type of wallet.

## Features
- KYC registration (Optional)
- Wallet Creation (Optional)
- Accepts ETH, BTC or other major blockchain assets
- Detailed Analytics
- Multilingual Support
- Pre-sale options
- Private investment Management
- ERC20 standard tokens (Exchange compatible)

## Technology Stack
Considering many facts from performance to security we spend a lot of time choosing the right technology and securing the bits and pieces of the entire application. Also we spend quite a lot of time in making this easy to deploy and get up and running in less than a few minutes with your specification and requirements. Sounds good, right? Cool, lets walk trough the steps.

### 1. Application
We use the latest stable version of Node.js for the application with [Express 4](http://expressjs.com){:target="_blank"} as the framework. Express is well known for its [performance](https://expressjs.com/en/advanced/best-practice-performance.html){:target="_blank"} and wide range of [security](https://expressjs.com/en/advanced/best-practice-security.html){:target="_blank"} features comes with it. Many more available as plugins. We also made sure that most of the known issues are patched and available for auditing.

### 2. Database
We have chosen the most comfortable database to use with this platform which is [Mongodb](http://mongodb.github.io){:target="_blank"}. Mongodb is famous for its scalability and performance. You never know when are you going to hit your hardware limit, using a NOSQL databse like Mongodb makes it easy for you to scale horizontally in no time.

### 3. Security
Security best practices for Express applications in production include:

- Don’t use deprecated or vulnerable versions of Express
- Use TLS
- Use Helmet
- Use cookies securely
- Ensure your dependencies are secure
- Avoid other known vulnerabilities
- Additional considerations

 Transport Layer Security (TLS) to secure the connection and the data. This technology encrypts data before it is sent from the client to the server, thus preventing some common (and easy) hacks. Although Ajax and POST requests might not be visibly obvious and seem `hidden` in browsers, their network traffic is vulnerable to packet sniffing and man-in-the-middle attacks.


### 4. Payment processor
We have multiple methods for accepting the incoming investments, we accept BTC and ETH through independent channels and all the well known crypto assets through [ShapeShift](https://shapeshift.io){:target="_blank"} including your other favourite ERC20 Token (transferrable and supported in ShapeShift)

### 5. Solidity Contract
Our platform as it is supports an ERC20 token based on [OpenZeppelin/zeppelin-solidity](https://github.com/OpenZeppelin/zeppelin-solidity){:target="_blank"} which is so far the state of the art in the industry.

- Token contract is available in [lightrainstech/erc20token](https://github.com/lightrainstech/erc20token)
- Standard crowdsale contract is available in [lightrainstech/crowdsale](https://github.com/lightrainstech/crowdsale)

## Platform audit report


- Read our blog about [Solidity Smart contract Security best practices](/blogs/smart-contract-best-practices-solidity)
- Follow [Kanban Board](https://github.com/orgs/lightrainstech/projects/1)
- [Blockchain Consulting & Development](/consulting/blockchain-consulting)


## Get a demo
Please fill this [Google Form](https://goo.gl/forms/oBy5KIK5A6DSGZD83){:target="_blank"} and we will get back to you.
