---
title: APM (Application Performance Monitoring)
weight: 3
description: APM or Application Performance Monitoring can be defined as a process or a practice of monitoring & tracking the performance of a software application using tools that capture data about application performance. The performance of a Drupal application can be monitored using various tools such as NewRelic, Elastic APM, Sentry etc..
---

# APM (Application Performance Monitoring)

APM or Application Performance Monitoring can be defined as a process or a practice of monitoring & tracking the performance of a software application using tools that capture data about application performance. The performance of a Drupal application can be monitored using various tools such as NewRelic, Elastic APM, Sentry etc..

## Performance monitoring tools

For a web application, the APM tools can be used to monitor the following:

- Uptime: Tracking and monitoring the web application's uptime and sending and alert if the application is down.
- CPU usage: Keeps a check on the CPU usage of a web application that can be affected by the query processing & other operations of the application.
- Transaction Monitoring: Keeping a check on the processes like - search functionality, user registration, content editing etc..
- Page load speed: Simply recording and keeping a track of the page load speed.
- Real time user monitoring: Keeping a track of the active user on the site and the operations being performed on the website.

There are a good number of tools available for integration for measuring the application performance. Some of them (that are widely used) are discussed below -

### New Relic

[New Relic](https://newrelic.com/) is Saas based Application performance monitoring tool that uses a standardized Apdex (application performance index) score to set and rate application performance across the environment in a unified manner. Some of the key features include the following -

- End-to-end user monitoring through browser support
- External services performance monitoring
- Synthetic monitoring
- Key business transaction monitoring
- Alerts and notifications
- Availability and error monitoring
- Native integration with third-party tools such as Slack and PagerDuty
- Key business transaction monitoring

### Sentry

[Sentry](https://sentry.io/about/) is an open source application performance monitoring and error tracking tool. Sentry helps developers diagnose, fix, and optimize the performance of their code. It supports more than 30 coding languages by providing an SDK for integration, more information [here](https://docs.sentry.io/).

### Elastic APM

[Elastic APM](https://www.elastic.co/observability/application-performance-monitoring) is an application performance monitoring system built on Elastic stack. It monitors software services and applications in real time, by collecting detailed performance information on response time for incoming requests, database queries, calls to caches, external HTTP requests, and more.
