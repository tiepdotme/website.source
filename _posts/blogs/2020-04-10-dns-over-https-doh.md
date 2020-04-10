---
layout: blog
title: 'DNS over HTTPS'
date: 2020-04-10 05:10:00 +0530
tag: ['doh', 'privacy', 'security']
permalink: /blogs/dns-over-https-doh
meta: dns-over-https-doh.png
author: niksmac
excerpt: 'DNS over HTTPS (DoH) is a protocol for performing remote Domain Name System (DNS) resolution via the HTTPS protocol.'
subtitle: 'DoH encrypts DNS queries, which are disguised as regular HTTPS traffic hence the DNS-over-HTTPS name.'
---

DNS over HTTPS ([DoH](https://en.wikipedia.org/wiki/DNS_over_HTTPS)) is a protocol for performing remote Domain Name System (DNS) resolution via the HTTPS protocol. Goal of the method is to increase user privacy and security by preventing eavesdropping and manipulation of DNS data by man-in-the-middle attacks by using the HTTPS protocol to encrypt the data between the DoH client and the DoH-based DNS resolver.

Encryption by itself does not protect privacy, encryption is simply a method to obfuscate the data.

## What is DNS: the Domain Name System

The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.

## How can DNS be exploited?

A resolver will tell each DNS server what domain you are looking for. This request sometimes includes your full IP address. Or if not your full IP address, increasingly often the request includes most of your IP address, which can easily be combined with other information to figure out your identity.

## How to fix this with Trusted Recursive Resolver (TRR) and DNS over HTTPS (DoH)?

There are three threats here:

-   You could end up using an untrustworthy resolver that tracks your requests, or tampers with responses from DNS servers.
-   On-path routers can track or tamper in the same way.
-   DNS servers can track your DNS requests.

## What are the Pros and Cons of DoH?

### Pros

-   It prevents man-in-the-middle attacks – since DNS queries are traditionally sent in plain-text, DoH can reduce the risk of man in the middle attacks where someone can see what DNS queries you are running between you and your - recursive server because it encrypts your queries.
-   The encryption with DoH can protect sensitive information that DNS hijacking methodologies employ and obfuscate data that could be sniffed by third-party observers and ISPs.
-   Because DoH centralizes DNS traffic to a few DoH enable servers, load time performance is typically improved.

### Cons

-   It overrides any sort of DNS filtering your network is doing to provide insight into security and your network info
-   It provides a different experience from web browsing and to the rest of your computer and network. You might have some DNS packets going to one recursive server and then some going through your network settings, so you may have a different experience from browser to the rest of your network.
-   It weakens cyber-security. By encrypting DNS queries, companies using DNS monitoring for cybersecurity measures will lose visibility into data such as query type, response and originating IP that are used to determine bad actors.

### Browser support

Firefox and Chrome are still in the experimental phases of testing encrypted DNS, so most of your connections likely won't take advantage of it for now anyway, and there are still ways to opt out of using it at all. But as with the push to get websites to adopt HTTPS encryption, encrypted DNS will likely move forward now if Chrome and Firefox find that the change doesn’t have too much of an impact on speed or reliability for users.

![DNS over HTTPS (DoH)](/assets/img/dns-over-https-doh.png){: .ui .image .fluid}

**Continue reading**

-   https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/
-   https://www.cloudflare.com/learning/dns/what-is-dns/
-   https://www.toptal.com/web/encrypted-safe-with-esni-doh-dot
-   https://www.zdnet.com/article/dns-over-https-will-eventually-roll-out-in-all-major-browsers-despite-isp-opposition/
