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

## [CDN](/docs/common-areas/cdn)
CDN helps cache content at the network edge, which improves website performance. Many websites struggle to have their performance needs met by traditional hosting services, which is why they opt for CDNs.

By utilizing caching to reduce hosting bandwidth, helping to prevent interruptions in service, and improving security, CDNs are a popular choice to relieve some of the major pain points that come with traditional web hosting.

## Compressed CSS/JS
Compressed CSS/JS refers to the technique of reducing the size and optimizing the performance of CSS/JavaScript files. A website can load more quickly, use less bandwidth, and put less strain on the server by compressing its CSS and JS. 
By minimizing the size of your CSS/JS files and the amount of HTTP requests, compressed CSS/JS helps make a website faster and more effective. Additionally, compressed JS can make the CSS/JS code more challenging for others to interpret and edit, which can be helpful for defending your intellectual property. It is advised to preserve a copy of your original CSS/JS files for development since compressed CSS/JS might also make debugging more difficult.


## [Reverse proxy](/docs/common-areas/reverseproxy)
A reverse proxy is a server that sits in front of web servers and forwards client requests to those servers. A reverse proxy can help increase the security, performance, and reliability of web services by performing tasks such as load balancing, caching, compression, encryption, and firewall protection. 

### Varnish

## CPU intensive tasks in background

### Queue

### Cron jobs

## Scaling a Drupal site

### Horizontally scaling the web-server

### Replicating the database

## [Web Application Performance](/docs/common-areas/performance-improvement)

Performance and its improvement is a complicated and nuanced topic. For a web application, there are many aspects of performance because web is a complex system. The performance of a web application involves issues concerning physical proximity, network, application delivery, runtime on the server and the client, and varying design styles of the application itself.

Performance improvement shouldn't be the last step of building a website. It is an ongoing process and it should be measured and improved at almost every milestone of development.
