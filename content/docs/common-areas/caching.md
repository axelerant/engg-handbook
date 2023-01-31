---
title: Caching
weight: 2
description: Caching refers to storing data or information in a convenient (and fast) location so that future requests for that data are faster. It can be used for storing results of expensive calculations or even data returned from complex queries or web services. There are a variety of cache stores that serve different needs but generally all are fast, some are distributed, and most support a variety of data models.
---

# Cache

Caching refers to storing data or information in a convenient (and fast) location so that future requests for that data are faster. It can be used for storing results of expensive calculations or even data returned from complex queries or web services. There are a variety of cache stores that serve different needs but generally all are fast, some are distributed, and most support a variety of data models.

Most systems have multiple layers of caching, each of which would be suitable to specific scenarios. For example, Drupal websites typically read a lot of data from databases and API's, both of which can be cached independently. Moreover, Drupal itself is written using PHP which is an interpreted language and there is a cache for the code itself. Even CPU's employ a layer of caching which is not in scope of this handbook.

Drupal core ships with 2 modules that can be used to implement caching:

- Internal page cache: This module is enabled by default and it caches the web pages for anonymous users.
- Internal dynamic page cache: Drupal recommends this module for websites of all sizes. This module caches pages excluding the personalized parts and is useful for all users (anonynous or authenticated).

## Cache Invalidation

Cache invalidation in simple words is the process of making room for the new content to be cached when the content that is cached reaches its expiration time or is forcefully evicted.

Cache invalidation depends upon the following factors:

1. Time: The cached content is automatically invalidated when it reaches its expiration time. Drupal Cache API can be used to manually alter or set the desired expiration time.
2. Context: The invalidation can also be handled based upon certain conditions apart from the expiration time. For ex. you might want to invalidate the cache based upon the type of user visiting the site.
3. Dependencies: Cache invalidation may also depend upon number of other factors such as - changes made to the existing content of a specific type, curation of a listing block that lists the content tagged with a specific category and many more.

## Cache API in Drupal

Drupal with the help of CACHE API provides a way to manually store or cache data based upon the following factors - time, context and dependencies. These factors are called the cacheability metadata. The API consists of the following properties:

1. Cache max-age: This property can be used to set the duration for which the content should be cached.
2. Cache contexts: For dependencies on the request context.
3. Cache tags: Tags can used to manage the dependencies on data managed by Drupal, i.e. type of content, category, user role etc.

### Cache Bins

In Drupal, the cache storage is separated into bins. These bins are used to store cached data of different types. Some of the common cache bins are as follows:

1. bootstrap: Data needed from the beginning to the end of most requests, that has a very strict limit on variations and is invalidated rarely.
2. render: Contains cached HTML strings like cached pages and blocks, can grow to large size.
3. data: Contains data that can vary by path or similar context.
4. discovery: Contains cached discovery data for things such as plugins, views_data, or YAML discovered data such as library info.

In addition to the above mentioned cache bins created & used by drupal, you can create your own cache bin by defining the cache bin in modulename.services.yml file.

Read more about cache bins from [here](https://api.drupal.org/api/drupal/core!core.api.php/group/cache/8.2.x)

## Cache Systems

By default, Drupal stores the cache data in the database. Again, this may be convenient but results in poor performance. This is why Drupal is usually configured to store the cached data in external stores such as Memcache and Redis.

Configuring Memcache or Redis can be categorised under Database Caching. These can be used to cache database data, API calls or page rendering chunks in RAM to increase the application performance.

### Memcache

[Memcache](https://memcached.org/) is a free and open-source high-performance memory caching system. Memcache can be configured on drupal website with the help of the [memcache contributed module](https://www.drupal.org/project/memcache). The module in addition to the integration provides a comprehensive administrative overview of Drupal's interaction with Memcached and stats.

### Redis

Similar to memcache, [redis](https://redis.io/docs/about/) is another open source (BSD licensed), in-memory data structure store used as a database, cache, message broker, and streaming engine. Redis can be configured on a drupal website with the help of the [redis contributed module](https://www.drupal.org/project/redis). Both tools can be used to implement or add another layer of caching on a website to improve the performance but the selection between the two may depend upon the requirement and the features that they ship with.

### Web Server Caching

Also known as web proxy caching. It is a type of caching that stores copies of frequently accessed Web objects (such as documents, images, and articles) so that they may be accessed without hitting the application server. Varnish is a popular reverse proxy used with Drupal. Alternatively, this could also be implemented with a CDN so that the data is close to users.
