---
title: Continuous integration
weight: 2
description: Continuous Integration (and its cousin, Continuous Deployment) are essential parts of a developer's cycle today. We use it everyday without realizing it and we ignore it at our own peril.
---

# Continuous Integration

Continuous Integration (and its cousin, Continuous Deployment) are essential parts of a developer's cycle today. We use it everyday without realizing it and we ignore it at our own peril. CI is a common cause of frustration in teams and it is usually due to one of two reasons: not understanding the errors and misconfigured workflow.

Like most errors we see when dealing with computers, errors reported by CI are nonsensical at first glance. However, it is no longer acceptable to ignore CI within teams (or indeed, even working individually). Understanding CI is now a core skill of a developer, not a good-to-have.

## GitHub Actions

GitHub Actions tout themselves as an automation platform, not just CI/CD. In our projects, these are mostly used for CI/CD tasks. It is useful to know how you could run other forms of automation to manage a project on GitHub but we won't focus on that here.

## Other platforms

It is possible that you may be on a project where the customer has picked a different CI platform. Common ones we have seen are CircleCI, Gitlab CI, and Jenkins. While these tools have different semantics and capabilities, the core principle is the same: with every commit or at other events, it would initiate one or more workflows that perform some action. Most commonly, these work in response to a commit or a pull request and run linting, unit, and functional tests on the overall codebase.
