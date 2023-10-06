---
title: Security
weight: 3
description: Security is an everlasting concern in the world of software engineering. Understanding what security means in the context of our work and the various vectors that might be responsible for compromising our system's security is extremely important.
---

# Security

Security is an everlasting concern in the world of software engineering. Understanding what security means in the context of our work and the various vectors that might be responsible for compromising our system's security is extremely important.

That said, security is a wide and deep topic, and a single person cannot hope to span the width and depth of this challenging area. It is the team's responsibility to understand security at various levels and implement safeguards.

For example, an application relies on database credentials to connect to the database. There can be API keys with which the application communicates with the third-party service. They must not be kept in the repository. There should not even be a Git commit referring to those credentials. They can be misused if a malicious user gets hold of them. Use environment variables or a vault for storing and retrieving them.

## Server and Website Security

In particular, we practice server and site security by:

- Using only sanitized databases, sanitizing a database involves removing or modifying sensitive information to protect the privacy and security of the data.

- Restricted access files should only be installed at locations within the project-defined security validation boundaries.

- Scrubbing unneeded data from our development environments, which involves the time-to-time removal of any data that is no longer necessary for the project and ensuring that the remaining data is properly secured

These practices could ensure that our personal information is not at risk of unauthorized access, security vulnerabilities, or potential breaches of sensitive information.

As developers, we follow technology specific coding standards and best practices and write secure code as per the respective community’s guidelines.

We minimize custom code, always preferring to use community maintained modules. And in general, we use stable versions of third-party libraries, including modules maintained by the community. It is important to note that alpha, beta, dev, and rc versions are not considered stable releases. And in our experience, in many cases, it is preferable to run a dev release over alpha or beta releases, where there have been a significant number of bug fixes and the security profile is identical. When using a dev release, it is important to continuously keep updating it as well so that we don't add a DEV release and forget about it.

When we select a contributed module, we consider the number of maintainers, the issue queue updates and activity of maintainers, and the number of downloads. A module with multiple active maintainers will ensure prompt issue resolution, while a high download count indicates popularity. Also, check when the last release was made to ensure that the code is up-to-date and compatible with the latest software version.

### Privileged Access

We ensure that access to documents, sites, and/or dashboards is limited to those that should have access; this includes our Google Workspace.

We ensure that users with enhanced privileges (to sites and/or servers) must use 2FA for authentication/authorization are appropriately adjusted upon separation from Axelerant.

### Continuous Monitoring

While we work on a project, we use tools to support continuous monitoring for performance and efficiency and to ensure proper operation and security.
