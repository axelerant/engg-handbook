---
title: Caching
weight: 2
description: Caching refers to storing data or information in a fast, convenient location, speeding up future requests. It can store results from expensive calculations, complex queries, or web services. Different cache stores serve varying needs, but all are generally fast, with some being distributed and supporting diverse data models.
---

# Cache

Caching refers to storing data or information in a fast, convenient location, speeding up future requests. It can store results from expensive calculations, complex queries, or web services. Different cache stores serve varying needs, but all are generally fast, with some being distributed and supporting diverse data models.

Most systems have multiple caching layers suitable for specific scenarios. For instance, Drupal websites read a lot of data from databases and APIs, both of which can be independently cached. Additionally, Drupal is built using PHP, an interpreted language, and even the code has a cache layer. While CPU caching isn't within this handbook's scope, it’s important to note its role in overall performance.

Drupal core includes two key caching modules:

- [Internal Page Cache](https://www.drupal.org/docs/administering-a-drupal-site/internal-page-cache), enabled by default, which caches web pages for anonymous users
- [Internal Dynamic Page Cache](https://www.drupal.org/docs/8/core/modules/dynamic-page-cache/overview), recommended for all websites, which caches pages while excluding personalized content, benefiting both anonymous and authenticated users.

## Cache Invalidation

Cache invalidation in simple words is the process of making room for the new content to be cached when the content that is cached reaches its expiration time or is forcefully evicted.

Cache invalidation depends upon the following factors:

- **Time**: Cache content is automatically invalidated when it expires. Drupal's Cache API allows manual adjustment of expiration times.
- **Context**: Invalidation can also occur based on conditions apart from expiration time such as user type.
- **Dependencies**: Cache invalidation can be triggered by changes to content types, specific categories, or the curation of listing blocks, among other factors.

## Cache API in Drupal

Drupal's [Cache API](https://api.drupal.org/api/drupal/core%21core.api.php/group/cache/) manages data storage based on factors like time, context, and dependencies, known as Cacheability Metadata. Key properties include:

- **Cache Max-Age**: Sets content caching duration.
- **Cache Contexts**: Manages dependencies based on request context.
- **Cache Tags**: Handles dependencies on Drupal-managed data like content types or categories.

### Cache Bins

In Drupal, cache storage is organized into bins, each storing different data types. Common bins include **bootstrap**, **render**, **data**, and **discovery**.

Custom cache bins can be created by defining them in the `modulename.services.yml` file.

Read more about [cache bins](https://api.drupal.org/api/drupal/core%21core.api.php/group/cache/).

## Cache Systems

Drupal's default cache storage is in the database, which is convenient but can hinder performance. To boost application performance, Drupal is typically configured to use external cache stores like **Memcache** or **Redis**. These tools can cache database data, API calls, or page rendering chunks in RAM, enhancing overall efficiency.

### Memcache

[Memcache](https://memcached.org/) is a free, open-source, high-performance memory caching system. It can be integrated into a Drupal website using the [Memcache module](https://www.drupal.org/project/memcache), which also offers an administrative overview of Drupal's interaction with Memcached and provides performance stats.

### Redis

[Redis](https://redis.io/docs/about/) is a versatile, open-source (BSD licensed) in-memory data structure store used as a database, cache, message broker, and streaming engine. It can be configured on a Drupal website with the [Redis module](https://www.drupal.org/project/redis).

Both Memcache and Redis can enhance website performance by adding another layer of caching, with the choice between them depending on specific requirements and available features.

Check [here]({{< relref "../how-we-work/baseline/_index.md#application-cache" >}}) to see how we set up Redis and Memcached in Drupal.

### Web Server Caching

Web server caching, or web proxy caching, stores copies of frequently accessed web objects to avoid hitting the application server. [Varnish is a popular reverse proxy]({{< relref "reverse-proxy.md" >}}) used with Drupal. Alternatively, this could also be implemented with a [CDN]({{< relref "cdn.md" >}}) so that the data is close to users.
