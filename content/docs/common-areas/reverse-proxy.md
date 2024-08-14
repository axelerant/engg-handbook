---
title: Reverse Proxy
weight: 7
description: A reverse proxy is a type of server that sits between client devices and web servers, forwarding client requests to those servers and serving the resulting responses back to the clients. Essentially, a reverse proxy is a tool that allows you to direct requests from one server to another server or multiple servers.
---

# Reverse Proxy

A reverse proxy is a type of server that sits between client devices and web servers, forwarding client requests to those servers and serving the resulting responses back to the clients. Essentially, a reverse proxy is a tool that allows you to direct requests from one server to another server or multiple servers.

Here are some features of reverse proxy:

- **Load Balancing:** Distributes requests across multiple servers, optimizing resource use and managing traffic.
- **Caching:** Stores static content to reduce server load and improve response times.
- **Security:** Acts as a barrier to filter out malicious traffic and protect servers.
- **SSL/TLS Termination:** Decrypts secure connections to offload work from web servers and enhance security.
- **URL Rewriting:** Maps incoming requests to different server resources.

**Challenges:**

- **Configuration Complexity:** Requires server and networking knowledge.
- **Performance Overhead:** Adds latency and overhead.
- **SSL/TLS Management:** Managing certificates can be complex.
- **Traffic Handling:** May become a bottleneck if not properly configured.
- **Application Compatibility:** Some applications may not work well with reverse proxies.
- **Logging & Monitoring:** Adds complexity to log collection and analysis.

## Varnish

Varnish is a web application accelerator that functions as a reverse proxy, enhancing web content delivery by caching:

- **Caching:** Stores and serves frequently accessed content from cache, reducing the load on web servers. If the content is not cached, Varnish requests it from the server and then caches it.
- **Load Balancing:** Distributes incoming requests across multiple servers.
- **SSL/TLS Termination:** Manages secure connections by decrypting SSL/TLS traffic.

For details on integrating Varnish as a reverse proxy with Drupal, refer to [our reference baseline]({{< relref "../how-we-work/baseline/_index.md#reverse-proxy" >}}).

**Things to Consider:**

- **Learning Curve:** Varnish has a steep learning curve due to its complex configuration options and in-depth knowledge of HTTP and caching required.
- **Dynamic Content Limitations:** Frequent updates to dynamic content can lead to stale caches, causing inconsistencies between cached and live content. This can be mitigated by setting appropriate cache expiration times and using features like cache invalidation or purging.
- **Complex Configuration:** Requires detailed configuration to optimize performance, often needing manual adjustments.
- **Limited SSL Support:** Varnish does not handle SSL/TLS encryption natively; a separate SSL termination proxy is needed, adding complexity to the setup.

For more details, visit [Varnish’s official documentation](https://varnish-cache.org/docs/).
