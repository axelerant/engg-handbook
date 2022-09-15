---
title: Security
weight: 3
---

# Security

An application relies on database credentials to connect to the database. There can be API keys using which the application communicates with the third-party service. They must not be kept in the repository. There should not even be a Git commit referring to those credentials. They can be misused if a malicious user gets hold of them.

Use the environment variables or vaults for storing and retrieving them.
