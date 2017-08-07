---
title: "Service discovery tools for microservices."
layout: blog
date: '2017-08-07 05:30:00'
tag: ["Microservices", "Service discovery"]
permalink: "/blogs/service-discovery-tools-microsrvice"
author: niksmac
meta: service-discovery-tools-microsrvice.png
subtitle: "Service discovery is how applications and (micro)services locate each other on a network."
excerpt: "Service discovery is how services locate each other on a network and its main objective is to help services find and talk to one another."
---

## Service discovery tools for microservices

No application is an island. They constantly communicate with other applications (services) -- or, more precisely, instances of applications. [Microservice](https://en.wikipedia.org/wiki/Microservices) architectures amplify the volume and frequency of these communications.

Service discovery is how applications and (micro)services locate each other on a network. Service discovery implementations include both:

 1. a central server (or servers) that maintain a global view of addresses and
 2. clients that connect to the central server to update and retrieve addresses.

## Service discovery tools

The main objective of service discovery tools is to help services find and talk to one another. In order to perform their duty they need to know where each service is. The concept is not new and many tools existed long before [Docker](http://docker.com) was born. However, containers brought the need for such tools to a completely new level.

## Why do we need a service discovery mechanism?

- **Get and set dynamic configuration across a distributed system**:
  - This is perhaps the most pressing problem that we need to solve.
  - An SCM tool like [Puppet/Anisble](http://probably.co.uk/puppet-vs-chef-vs-ansible.html) are great for managing static configurations but
    they are too heavy for dynamic changes.
- **Service registration:**
  - We need to be able to spin up a track and have services make themselves visible
    via DNS.
  - This would be useful primarily outside of production where we would want to regularly
    spin up and destroy tracks.
  - That said, we don't have a highly-distributed and elastic architecture so we could get
    by without this for a while.
- **Service discovery:**
  - Services must be able to determine which host to talk to for a particular service.
  - This may not be as important for production if we have a loadbalancer. In fact, a
    loadbalancer would be more transparent to our existing apps as they work at the IP level.
  - That said, we don't have a highly-distributed and elastic architecture so we could get
    by without this for a while.


##  Comparison

### 1. [etcd](https://coreos.com/etcd)

- Pros:
  - Service discovery involves listing the keys under a directory and then waiting for
    changes on the directory. Since the API is HTTP based, the client application keeps a
    long-polling connection open with the Etcd cluster.
  - Has been around for longer than Consul. 150% more github watches/stars.
  - 3 times as many contributors (i.e. more eyes) and forks on github.
- Cons:
  - There are claims that the Raft implementation used by Etcd (go-raft) is not quite right (unverified).
  - Immature, but by the time its use is under consideration in production, it should
    have reached 1.0.
  - Serving DNS records from Etcd may require a separate service/process (verify):
    - http://probablyfine.co.uk/2014/03/02/serving-dns-records-from-etcd/
    - SkyDNS is essentially DNS on top of Etcd

### 2. [consul](https://www.consul.io)

- Pros:
  - Has more high-level features like service monitoring.
  - There is another project out of Hashicorp that will read/set environment variable
    for processes from [Consul](https://github.com/hashicorp/envconsul).
  - Better documentation.
    - I had an easier time installing and configuring this over Etcd, not that Etcd was
      particularly hard. Docs make all the difference.
    - Stuff like this makes me want to shed a tear. I commend the KIDS at Hashicorp.
  - You can make DSN queries directly against Consul agent! Nice! No need for SkyDNS or Helix
  - We can add arbitrary checks! Nice, if we are into that sort of thing.
  - Understands the notion of a datacenter. Each cluster is confined to datacenter but the
    cluster is able to communicate with other datacenters/clusters.
    - At Skybox, we might use this feature to separate docker tracks, even if they live on same host.
  - It has a rudimentary [web UI](http://demo.consul.io/ui/)
- Cons:
  - There are claims that Consul's implementation of Raft is better (unverified).
  - Immature. Even younger than Etcd (though there are no reason to believe that there are problems with it).


## Conclusions
Service discovery is arguably the first piece of infrastructure you should adopt when moving to microservices. When choosing your service discovery architecture, make sure you consider the following key areas:

 - What is the best strategy for deploying service discovery clients?
 - What types of resources and services will you ultimately want to address in your service discovery system?
 - What languages and platforms need to be supported?

Regardless of your choice, the implementation of an automated, real-time service discovery solution will pay significant dividends for your microservices architecture. In a future article, we’ll explore the various benefits of using a real-time service discovery solution.
