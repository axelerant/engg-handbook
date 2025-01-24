---
title: "Adopt semantic versioning for releases"
date: "2022-04-13"
decision: "We will adopt semantic versioning for naming our releases"
status: "accepted"
categories:
  - "Release Management"
---

# Adopt semantic versioning for releases

## Context

The version name we give for our releases plays a major role in providing clarity on what we deliver. It is used in multiple places like:

- JIRA Releases
- Tagging on GIT once the code is ready for deployment
- Release notes sent to clients
- In all our internal and external communications about our releases

Having this consistent that conveys the same meaning is important to avoid any confusion for all stakeholders as its referred across various systems.

## Decision

We will name all our releases as per [Semantic Versioning](https://semver.org) across all systems and platforms.

## Consequences

- **Positive:**
  - It is a well known and widely adopted versioning system for software releases including the Drupal community.
  - Easier to understand and clearly calls out as per major, minor or patch releases.

- **Negative:**
  - Readability might be challenging in some cases like a patch release for minor version.

## Alternatives Considered

We considered an alternative were we have a indicator (e.g. prefix like `feature`) to start with that denotes whether the release is a Continuous Development/Feature release or Maintenance release. However since we also combine both feature development and maintenance fixes as one release we would need one version label that conveys both.

## Status

- **Accepted**
