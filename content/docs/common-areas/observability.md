---
title: Observability
weight: 1
description: In our web application development, observability is crucial for gaining insights into system behavior. It involves using various tools to surface application data through logs, metrics, and traces, which are the three pillars of observability. By collecting and analyzing data from these sources, we can understand our systems better and optimize performance.
---

# Observability

In our web application development, observability is crucial for gaining insights into system behavior. It involves using various tools to surface application data through logs, metrics, and traces, which are the three pillars of observability. By collecting and analyzing data from these sources, we can understand our systems better and optimize performance.

We use New Relic for comprehensive performance monitoring and Sentry for error tracking and detailed logging, creating a robust observability framework for our projects.

## Logging

Logs are time-stamped records of discrete events within a system, providing valuable information for debugging and understanding system behavior. Effective logging involves understanding:

- What data should be logged?
- When to log?
- Where to log?
- How long to preserve logged data?

Automated tools like log analyzers and dashboards enhance visibility and reduce manual effort.

### Effective Logging

Logs can be categorized into:

- Application-level logging: Logging events, messages, and data within the application.
- Server-level logging: Logging server-related events.
Logged messages typically include:

- Date of the message
- User
- Severity
- Type
- The actual message, including a complete backtrace of the action performed

For details on logging and Sentry setup refer to [our reference baseline]({{< relref "../how-we-work/baseline/logging-details.md" >}}).

## Metrics

Metrics are numerical representations of data measured over time, providing a high-level overview of the system's health. They help track application and infrastructure health, alerting us to deviations from the norm.

## Traces

Traces provide a detailed view of function calls and requests during a single transaction, helping understand the program flow and identify performance bottlenecks.

## APM (Application Performance Monitoring)

APM involves monitoring and tracking software application performance using tools like New Relic, Elastic APM, and Sentry.
Performance Monitoring Tools
APM tools can monitor:

- Uptime: Tracking application uptime and alerting if the application is down.
- CPU usage: Monitoring CPU usage affected by query processing and other operations.
- Transaction Monitoring: Monitoring processes like search functionality, user registration, content editing.
- Page load speed: Recording and tracking page load speed.
- Real-time user monitoring: Tracking active users and their operations on the website.

### New Relic

[New Relic](https://newrelic.com/) is a SaaS-based APM tool that uses Apdex scores to rate application performance. Key features include:

- End-to-end user monitoring
- External services performance monitoring
- Synthetic monitoring
- Key business transaction monitoring
- Alerts and notifications
- Availability and error monitoring
- Native integration with third-party tools like Slack and PagerDuty

### Sentry

[Sentry](https://sentry.io/about/) is an open-source APM and error tracking tool supporting over 30 coding languages with an SDK for integration.

For details on creating a project on Sentry and the details to set up the integration with other tools,  refer to [our reference baseline]({{< relref "../how-we-work/baseline/logging-details.md" >}}).

### Elastic APM

[Elastic](https://www.elastic.co/observability/application-performance-monitoring) monitors software services and applications in real-time, collecting detailed performance information on response times, database queries, cache calls, external HTTP requests, and more.
