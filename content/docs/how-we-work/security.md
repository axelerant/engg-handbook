---
title: Security
weight: 3
description: Security is an everlasting concern in the world of software engineering. Understanding what security means in the context of your work and the various vectors which might be responsible to compromise your system's security is extremely important.
---

# Security

Security is an everlasting concern in the world of software engineering. Understanding what security means in the context of your work and the various vectors which might be responsible to compromise your system's security is extremely important.

That said, security is a wide and deep topic and a single person cannot hope to span the width and depth of this challenging area. It is the team's responsibility to understand security at various levels and implement safeguards.

For example, an application relies on database credentials to connect to the database. There can be API keys using which the application communicates with the third-party service. They must not be kept in the repository. There should not even be a Git commit referring to those credentials. They can be misused if a malicious user gets hold of them.

Use the environment variables or vaults for storing and retrieving them.
