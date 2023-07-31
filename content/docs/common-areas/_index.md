---
title: Common Areas of concern with web projects
weight: 5
bookCollapseSection: true
---

# Common Areas of concern with web projects

This guide covers common areas of concern with web projects and our approach to solve those problems.

## [Logging]({{< relref "/docs/common-areas/logging" >}})

Logging in web applications refers to keeping a log of all the operational events such as content creation, deletion, cron run, error reporting, etc. In the case of Drupal, the log messages are recorded and kept in either a log file (text format), in the database, or sent to an external service. Different applications have their own conventions about logging but general principles remain the same. Also, in most applications, there is always some support for logging in the [syslog](https://en.wikipedia.org/wiki/Syslog) format (text files).

## [Caching]({{< relref "/docs/common-areas/caching" >}})

Caching refers to storing data or information in a convenient (and fast) location so that future requests for that data are faster. It can be used for storing results of expensive calculations or even data returned from complex queries or web services. There are a variety of cache stores that serve different needs but generally all are fast, some are distributed, and most support a variety of data models.

Caching is one of the major concern areas in any web project. If not handled efficiently it can lead to some of the following issues:

- Outdated content being displayed on the site for a long time.
- Content not being cached at all resulting in worse performance.

Most systems have multiple layers of caching, each of which would be suitable to specific scenarios. For example, Drupal websites typically read a lot of data from databases and API's, both of which can be cached independently. Moreover, Drupal itself is written using PHP which is an interpreted language and there is a cache for the code itself. Even CPU's employ a layer of caching which is not in scope of this handbook.

## [Debugging]({{< relref "/docs/common-areas/debugging" >}})

Debugging is an important component of any software development activity and not just web development. Perhaps
debugging existing code is where developers spent most of their time.

## [APM]({{< relref "/docs/common-areas/apm" >}})

APM or Application Performance Monitoring can be defined as a process or a practice of monitoring and tracking the performance of a software application using specific tools. The performance of a Drupal application can be monitored using various tools such as NewRelic, Elastic APM, Sentry etc..

## [Backups]({{< relref "/docs/common-areas/backups" >}})

The saying - "Always have a backup plan" stands true and is an integral part of web application management too. Although a lot of measures can be taken to avoid the downtime of a website, it is hard to predict the situation. We should be well prepared for anything. Hence, having a backup plan, or in other words, taking regular backups of your website can help you manage the downtime situation effectively.

## [CDN]({{< relref "/docs/common-areas/cdn" >}})

A content delivery network, or Content Distribution Network (CDN), is a group of globally dispersed servers that accelerates the delivery of web content by bringing it closer to the user. CDNs have the benefits of high performance in loading content, minimizing bandwidth costs, and reaching content globally. CDN caches content on proxy servers that are located near where the user is, reducing latency.

### [Compressed CSS/JS]({{< relref "/docs/common-areas/performance-improvement#compressed-cssjs" >}})

Compressed CSS/JS refers to the technique of reducing the size and optimizing the performance of CSS/JavaScript files.

## [Reverse proxy]({{< relref "/docs/common-areas/reverse-proxy" >}})

A reverse proxy is a type of server that sits between client devices and web servers, forwarding client requests to those servers and serving the resulting responses back to the clients. Essentially, a reverse proxy is a tool that allows you to direct requests from one domain to another domain or to multiple domains.

### Varnish

## CPU intensive tasks in background

In web development, CPU-intensive tasks refer to operations that require a significant amount of processing power or time to complete. These tasks can include activities such as processing large files, running complex algorithms, or performing data-intensive calculations. To improve performance and user experience, these tasks are often managed using techniques such as background processing, asynchronous execution, or queueing.

### [Queue]({{< relref "/docs/common-areas/queue" >}})

A queue is a data structure that can be used to manage CPU-intensive background tasks. A queue operates on the principle of first-in-first-out (FIFO), meaning that the first task added to the queue will be the first one to be processed. This can help ensure that tasks are completed in the order in which they were received.

### [Cron jobs]({{< relref "/docs/common-areas/cron-jobs" >}})

Cron jobs are a way to schedule and automate tasks on a web server. They are used to run scripts or commands at specific times or intervals. For example, they can be used to schedule backups of websites or databases, send email newsletters, or update website content.

## Scaling a Drupal site

When we are working on a Drupal project, one of the things we need to consider is scalability. Scalability is a critical aspect of any web application, and Drupal, a robust and flexible content management system (CMS), is no exception. As websites built with Drupal grow in size and complexity, it becomes essential to implement effective scaling strategies to maintain optimal performance and accommodate increasing user demands.

## [Web Application Performance]({{< relref "/docs/common-areas/performance-improvement" >}})

Performance and its improvement is a complicated and nuanced topic. For a web application, there are many aspects of performance because web is a complex system. The performance of a web application involves issues concerning physical proximity, network, application delivery, runtime on the server and the client, and varying design styles of the application itself.

Performance improvement shouldn't be the last step of building a website. It is an ongoing process and it should be measured and improved at almost every milestone of development.
