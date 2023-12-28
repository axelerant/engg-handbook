---
title: Observability
weight: 1
description: In the dynamic landscape of web application development, we view observability as a crucial matter, providing insights into system behavior. Observability helps us better understand the workings of a system by surfacing application data using various tools. The three pillars of observability—logs, metrics, and traces—play a pivotal role in enhancing system understanding and troubleshooting.
---

# Observability

In the dynamic landscape of web application development, we view observability as a crucial matter, providing insights into system behavior. Observability helps us better understand the workings of a system by surfacing application data using various tools. The three pillars of observability—logs, metrics, and traces—play a pivotal role in enhancing system understanding and troubleshooting.

Logs are time-stamped records of discrete events that have occurred within a system. They provide a wealth of information, including error messages, system status updates, transaction records, and more. They are particularly useful for debugging during development and understanding system behavior.

## Logging

Logging in web applications refers to keeping a log of all the operational events such as content creation, deletion, cron run, error reporting, etc. The log messages are recorded and kept in either a log file (text format), in the database, or sent to an external service.

Different programming languages or CMSs may use different process to log messages or events on a website but the underlying concept of logging remains the same. If done effectively, it can prove useful in debugging issues on a website. For effective logging, it is important to understand -

- What data should be logged?
- When to log?
- Where to log?
- For how long the logged data should be preserved?

We establish clear logging and observability standards for the entire team to follow. It is much better to utilize automated tools, such as log analyzers and dashboards, to enhance visibility and decrease manual effort.

### How to log the messages effectively?

As mentioned above, logging can be used to keep a record of the events or operations performed on a website. These messages or events can be logged at various levels, for example:

- Application-level logging is the practice of logging events, messages, and data within an application itself.

- Server-level logging: logging all the server-related events where the website is hosted. For example, browsing through the Apache server logs to debug web server-related issues.

The default messages logged in both cases above hold a lot of information about the operation performed or the event that occurred. It consists of:

- Date of the message logged
- User
- Severity
- Type
- The actual message, that may hold the complete backtrace of the action performed.

This is what makes the logged message useful for future reference.

## Metrics

The second pillar, metrics, are numerical representations of data measured over intervals of time. Metrics are about counting and aggregating information, providing a high-level overview of the system. They can help track the health of applications and infrastructure, alerting us to any deviations from the norm.

## Traces

Finally, traces provide a detailed view of function calls and other requests during the execution of a single transaction. A trace represents an actual execution and can be examined to understand the flow of the program in a single service and even across multiple services. It is also helpful to find performance bottlenecks in a system.

It is the synergy of these three pillars that forms the foundation of observability. By collecting and analyzing data from these sources, we can gain a deep understanding of our systems and make informed decisions about how to optimize performance.

We use New Relic as our primary observability tool, leveraging its comprehensive metrics for performance monitoring. Additionally, we use Sentry as a secondary tool, focusing on error tracking and detailed logging to ensure efficient debugging. This combination allows us to maintain a robust observability framework for our web development projects.

## APM (Application Performance Monitoring)

APM or Application Performance Monitoring can be defined as a process or a practice of monitoring & tracking the performance of a software application using tools that capture data about application performance. The performance of a Drupal application can be monitored using various tools such as NewRelic, Elastic APM, Sentry etc..

### Performance monitoring tools

For a web application, the APM tools can be used to monitor the following:

- Uptime: Tracking and monitoring the web application's uptime and sending and alert if the application is down.
- CPU usage: Keeps a check on the CPU usage of a web application that can be affected by the query processing & other operations of the application.
- Transaction Monitoring: Keeping a check on the processes like - search functionality, user registration, content editing etc..
- Page load speed: Simply recording and keeping a track of the page load speed.
- Real time user monitoring: Keeping a track of the active user on the site and the operations being performed on the website.

There are a good number of tools available for integration for measuring the application performance. Some of them (that are widely used) are discussed below -

### New Relic

[New Relic](https://newrelic.com/) is Saas based Application performance monitoring tool that uses a standardized Apdex (application performance index) score to set and rate application performance across the environment in a unified manner. Some of the key features include the following:

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
