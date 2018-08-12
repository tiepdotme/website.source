---
title: "Stellar Federation Server - Part 1/2"
layout: blog
date: '2018-08-12 05:30:00'
tag: ["Stellar", "Stellar Federation Server", "Principles"]
permalink: "/blogs/stellar-federation-server-part1"
author: niksmac
meta: stellar-federation-server.png
subtitle: "A way for Stellar client software to resolve email-like addresses to a stellar address."
---

The [Stellar federation protocol](https://www.stellar.org/developers/guides/concepts/federation.html) maps Stellar addresses to a unique name spaced string. It’s a way for Stellar client software to resolve email-like addresses such as `name*your_domain.com` into account IDs like: `GCFFPIFOYY7Z...TK6T32V37KEJU`. Stellar addresses provide an easy way for users to send and receive payments by using a syntax that interoperates across different domains and providers. When sending a payment, you contact a federation server first to determine what Stellar account ID to pay. Luckily, the bridge server does this for you.

To explain it simply, a Stellar Federation Server is a database with the following table structure which maps a Stellar address to a string(`friendly_id`).

```
| id | first_name | last_name | friendly_id         |
|----|------------|-----------|---------------------|
| 1  | Tunde      | Adebayo   | tunde_adebayo       |
| 2  | Lightrains | Tech      | lightrains          |
```

Where `Lightrains` Stellar address would be `lightrains*your_domain.com`.

## Stellar Federation Server architecture
![Stellar Federation Server architecture](https://www.stellar.org/developers/guides/anchor/assets/anchor-send-payment-federation.png){: .ui .fluid .image}
*Source: stellar.org*
> Here, your front end app/website will be talking to a intermediate server called `bridge server` which will be talking directly to a federation server. Bridge server is responsible for querying the federation server and get corresponding address and send transaction or operation to a stellar core via stellar Horizon server.

### Current federation workflow

Currently, in order to resolve a federation address, the client needs to do the following:

1. fetch the `stellar.toml` file from `https://<domain>/.well-known/stellar.toml` and read the `FEDERATION_SERVER` entry from it
2. fetch the response from the federation server using secure HTTP `GET` and required parameters
3. proceed with the payment

#### TODO: How to set up Stellar Federation Server - Part 2/2
