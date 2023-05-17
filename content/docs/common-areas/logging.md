---
title: Logging
weight: 1
description: Logging in web applications refers to keeping a log of all the operational events such as content creation, deletion, cron run, error reporting, etc. The log messages are recorded and kept in either a log file (text format), in the database, or sent to an external service.
---

# Logging

Logging in web applications refers to keeping a log of all the operational events such as content creation, deletion, cron run, error reporting, etc. The log messages are recorded and kept in either a log file (text format), in the database, or sent to an external service.

Different programming languages or CMSs may use different process to log messages or events on a website but the underlying concept of logging remains the same. If done effectively, it can prove useful in debugging issues on a website. For effective logging, it is important to understand -

- What data should be logged?
- When to log?
- Where to log?
- For how long the logged data should be preserved?

## How does Drupal log messages?

Drupal Core provides a [Logging API](https://www.drupal.org/docs/8/api/logging-api/overview) that can be used by any logging service through a module. The Drupal Core ships two such modules: [DBLog](https://www.drupal.org/docs/8/core/modules/dblog/overview) and [Syslog](https://www.drupal.org/docs/8/core/modules/syslog/overview) and there are a lot more such modules in the contrib space. DBLog is convenient on any site as it logs all messages in the database and this allows it to provide an user interface to see those messages. But this comes with a performance hit and it is generally recommended to disable this in favor of Syslog or other modules in production.

### Logging API

Logging API was introduced in Drupal 8 and it replaces the hook_watchdog() implementation that was widely used in Drupal 7 to log the messages. Following are the two examples for logging messages in Drupal 8 -

- Example 1 (procedural way) -

```php
// Logs a notice
\Drupal::logger('my_module')->notice($message);
// Logs an error
\Drupal::logger('my_module')->error($message);
```

- Example 2 (injecting the whole factory)

```yaml
services:
  myservice_that_needs_to_log_to_multiple_channels:
    class: Drupal\mymodule\MyService
    arguments: ['@logger.factory']
```

Log the messages in your custom Service class as follows -

```php
use Drupal\Core\Logger\LoggerChannelFactoryInterface;

class MyService {
  public function __construct(LoggerChannelFactoryInterface $factory) {
    $this->loggerFactory = $factory;
  }

  public function doStuff($message) {
    // Logs a notice to "my_module" channel.
    $this->loggerFactory->get('my_module')->notice($message);
     // Logs an error to "my_other_module" channel.
    $this->loggerFactory->get('my_other_module')->error($message);
  }
}
```

### How to log the messages effectively?

As mentioned above, logging can be used to keep a record of the events or operations performed on a website. These messages or events can be logged at various levels, example -

- Application level logging - For instance, Drupal logs the messages using the dblog module that ships with drupal core.
- Server level logging - Logging all the server related events where the website is hosted. For example, browsing through the apache server logs to debug web server related issues.

The default messages logged in both the cases above hold a lot of information about the operation performed or the event occured. It consists of:

- Date of the message logged
- User
- Severity
- Type
- The actual message, that may hold the complete backtrace of the action performed.

This is what makes the logged message useful for future references.

## Sentry

[Sentry](https://sentry.io/about/) is an open source application performance monitoring and error tracking tool. Sentry helps developers diagnose, fix, and optimize the performance of their code. It supports more than 30 coding languages by providing an SDK for integration, more information [here](https://docs.sentry.io/).
