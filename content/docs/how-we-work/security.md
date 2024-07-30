---
title: Security
weight: 3
description: Security is an everlasting concern in software engineering. Understanding security in the context of our work and recognizing various vectors that might compromise our system’s security is crucial. Security is a broad and deep topic, and it’s a team’s responsibility to implement safeguards at various levels.
---

# Security

Security is an everlasting concern in software engineering. Understanding security in the context of our work and recognizing various vectors that might compromise our system’s security is crucial. Security is a broad and deep topic, and it’s a team’s responsibility to implement safeguards at various levels.

## Credentials Management

Applications rely on database credentials and API keys to communicate with third-party services. These must not be kept in the repository or committed in Git history as they can be misused if exposed. Use environment variables or a vault for storing and retrieving them.

## Server and Website Security

We ensure server and site security through several practices. Sanitized databases are used to protect data privacy and security by removing sensitive information. Additionally, we routinely scrub unneeded data from development environments, ensuring only necessary data is securely stored.

To enhance security, we establish separate accounts for each user on production and implement two-factor authentication wherever feasible. Test accounts on production are avoided or removed promptly after testing.

## Coding Standards and Best Practices

Developers follow technology-specific coding standards and best practices, writing secure code as per community guidelines. Custom code is minimized, favoring community-maintained modules and stable versions of third-party libraries. Alpha, beta, dev, and RC versions are generally avoided unless necessary. Regular updates are crucial when using dev releases to maintain security.

When selecting a contributed module, we consider the number of maintainers, issue queue activity, and the number of downloads. Multiple active maintainers ensure prompt issue resolution and a high download count indicates reliability. Check the last release date to ensure compatibility with the latest software version.

## Privileged Access

Access to documents, sites, and dashboards is restricted to authorized personnel. Enhanced privileges require two-factor authentication, and access is adjusted appropriately upon separation from Axelerant.

## Continuous Monitoring

We use tools to support continuous monitoring for performance, efficiency, and security throughout the project lifecycle. Continuous monitoring helps in maintaining proper operation and identifying potential security issues early.
