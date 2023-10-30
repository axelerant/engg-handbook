---
title: Configuration management
weight: 4
---

# Configuration Management

Configuration as Code is one of the basic requirements in Drupal. We must be aware of what to include and what to exclude in the configurations.

## Configuration per instance

The `production` should not have `views_ui` and `field_ui` modules installed. The `development` instance should have that installed. We consider using [`config_split`](https://www.drupal.org/project/config_split) in this situation.

## Ignoring configurations

There is a configuration that we want to ignore whenever we are exporting configurations from our setup. Use [`config_ignore`](https://www.drupal.org/project/config_ignore).

## Managing Secret Keys

Storing secret/API keys in the codebase (configuration files) or databases may expose them to unauthorized access, potentially leading to data breaches or misuse of the API services.

We connect to the production server via ssh and manage to store secrets in environment variables or in files, which are not part of the codebase or database and can be easily managed and updated. Storing secrets in files may include following certain conventions regarding the location and naming of these files on different hosting platforms.

Drupal also provides a module named [Key](https://www.drupal.org/project/key) for managing sensitive keys, which allows site administrators to define how and where keys are stored, providing a high level of security and meeting regulatory or compliance requirements.
