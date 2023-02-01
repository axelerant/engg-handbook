---
title: Configuration management
weight: 4
---

# Configuration Management

Configuration as Code is one the basic requirement in Drupal. We must be aware of what to include and what to exclude in the configurations.

## Configuration per instance

The `production` should not have `views_ui` and `field_ui` module installed. The `development` instance should have that installed. Consider using [`config_split`](https://www.drupal.org/project/config_split) in this situation.

## Ignoring configurations

There is a configuration which you want to ignore whenever you are exporting configurations from your setup. Use [`config_ignore`](https://www.drupal.org/project/config_ignore).
