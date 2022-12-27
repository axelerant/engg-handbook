---
title: Common Areas of concern with web projects
weight: 5
bookCollapseSection: true
---

# Common Areas of concern with web projects

This guide covers common areas of concern with web projects and our approach to solve those problems.

## [Logging](/docs/common-areas/logging)

Logging in web applications refers to keeping a log of all the operational events such as content creation, deletion, cron run, error reporting, etc. In the case of Drupal, the log messages are recorded and kept in either a log file (text format), in the database, or sent to an external service. Different applications have their own conventions about logging but general principles remain the same. Also, in most applications, there is always some support for logging in the [syslog](https://en.wikipedia.org/wiki/Syslog) format (text files).

## [Caching](/docs/common-areas/caching)

Caching refers to storing data or information in a convenient (and fast) location so that future requests for that data are faster. It can be used for storing results of expensive calculations or even data returned from complex queries or web services. There are a variety of cache stores that serve different needs but generally all are fast, some are distributed, and most support a variety of data models.

Caching is one of the major concern areas in any web project. If not handled efficiently it can lead to some of the following issues:

- Outdated content being displayed on the site for a long time.
- Content not being cached at all resulting in worse performance.

Most systems have multiple layers of caching, each of which would be suitable to specific scenarios. For example, Drupal websites typically read a lot of data from databases and API's, both of which can be cached independently. Moreover, Drupal itself is written using PHP which is an interpreted language and there is a cache for the code itself. Even CPU's employ a layer of caching which is not in scope of this handbook.

## [APM](/docs/common-areas/apm)

APM or Application Performance Monitoring can be defined as a process or a practice of monitoring and tracking the performance of a software application using specific tools. The performance of a Drupal application can be monitored using various tools such as NewRelic, Elastic APM, Sentry etc..

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

This section talks about the ways to deal with the performance of a web application. It is important to understand that 'dealing with performance' shouldn't be the last step of building a website, instead its an ongoing process. The performance of the website should be measured & improved at almost every step of development. The user visiting the website will come back to the website or not, depends upon the following factors -

- Appearance of the website. (the look & feel)
- The user experience. (user interaction with the website, it could be using a registration form or any other form that involves some user interation)
- Performance of the website. (ex. page load speed, time taken by the website to fetch & display the content, generate the page with the listing of the content based upon certain filters, etc..)

The factors are not limited to the ones mentioned above but these are some of the major concern areas when it comes to dealing with the performance of a website. Let's first understand the ways that could be used to measure the performance of the application and then we will focus on the ways to improve it.

### Ways to measure the performance of the application
### Debug performance issues
