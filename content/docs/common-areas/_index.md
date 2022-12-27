---
title: Common Areas of concern with web projects
weight: 5
bookCollapseSection: true
---

# Common Areas of concern with web projects

This guide covers common areas of concern with web projects and our approach to solve those problems.

## [Logging](/docs/common-areas/logging)

Logging in the web projects is a mechanism of keeping a log of all the site related operational events such as content creation, deletion, cron run, error reporting etc. The log messages are recorded and kept in either a log file (in simply a text format) or stored directly into a dedeicated table in the database.

Drupal core ships with the [Database logging module](https://www.drupal.org/docs/8/core/modules/dblog/overview) that maintains the log & provides an effective interface to browse through the logged messages. In addition to that, it also provides an API called [Logging API](https://www.drupal.org/docs/8/api/logging-api/overview) that can be used to log custom messages of different types.

## [Caching](/docs/common-areas/caching)

Cache is a data storage layer that stores subset of data which helps in making future requests of fetching & serving the data faster. Caching is one of the major concern areas in the web projects. If not handled efficiently it can lead to some of the following issues -

- Outdated content being displayed on the site for a long time.
- Content not being cached at all and resultant the web page load speed is slow.

Most systems have multiple layers of caching, each of which would be suitable to specific scenarios. For example, Drupal websites typically read a lot of data from databases and API's, both of which can be cached independently.
Moreover, Drupal itself is written using PHP which is an interpreted language and there is a cache for the code itself. Even CPU's employ a layer of caching which is not in scope of this handbook.

## [APM](/docs/common-areas/apm)

APM or Application Performance Monitoring can be defined as a process or a practice of monitoring & tracking the performance of a software application using tools that capture data about application performance. The performance of a Drupal application can be monitored using various tools such as NewRelic, Elastic APM, Sentry etc..

## Backups

## CDN

### Compressed CSS/JS

## Reverse proxy

### Varnish

## CPU intensive tasks in background

### Queue

### Cron jobs

## Scaling a Drupal site

### Horizontally scaling the web-server

### Replicating the database

## [Dealing with performance of a web application](/docs/common-areas/performance-improvement)

This section talks about the ways to deal with the performance of a web application. It is important to understand that 'dealing with performance' shouldn't be the last step of building a website, instead its an ongoing process. The performance of the website should be measured & improved at almost every step of development & deployment. Whether the user who has visited the website will come back to the website or not, depends upon the following factors -

- Appearance of the website. (the look & feel)
- The user experience. (user interaction with the website)
- Performance of the website. (ex. page load speed, time taken by the website to fetch & display some content, generate the page with the listing of the content based upon certain filters, etc.)

The factors are not limited to the ones mentioned above but these are some of the major concern areas when it comes website development. Let's first understand the ways that could be used to measure the performance of the application and then we will focus on the ways to improve it.

### Ways to measure the performance of the application
### Debug performance issues
### Frontend vs Backend performance
