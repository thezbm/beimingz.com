---
title: Computer Networks
description: Computer networks notes.
---

# Computer Networks

I'm taking Computer Networks again as it's part of the degree requirement for me. Gonna put some new things about networks I didn't know at all or well enough here.

## DNS

The DNS record for IPv6 is `AAAA` because an IPv6 address is four times the size of an IPv4 address, for which we use the `A` record. Makes a lot of sense. I didn't know this.

## Anycast

Anycast is a network routing technique where multiple servers share a single IP address, and network traffic is automatically sent to the closest or most efficient node (relying on BGP).

Root DNS servers, major public DNS providers, and companies like Cloudflare all
use Anycast to route queries or web requests to the nearest available node. This
reduces latency, improves throughput, and masks failures: when a node goes down,
traffic is automatically rerouted to the next closest one.
