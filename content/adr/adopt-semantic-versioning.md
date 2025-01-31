---
title: "Adopt semantic versioning for releases"
date: "2022-04-13"
decision: "We will adopt semantic versioning for naming our releases"
status: "proposed"
categories:
  - "Processes"
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

We will name all our releases as per [Semantic Versioning](https://semver.org) across all systems and platforms. We consider below as potentially breaking changes and hence a major one.

- API changes that break compatibility like removing/renaming endpoints, change in function signatures or alternating response structures.
- Removal of deprecated methods
- Changes in database schema
- Anything that causes incompatibility with previous versions
- Major dependency upgrades
- Authentication and security changes
- Specific to Drupal,
  - Any major contributed module/theme upgrade used in the site.
  - Any major changes done in our custom theme like upgrading the underlying libraries in theme to next major version, enhancing the responsiveness of the site.
  - Any major changes in backend side like multiple changes to content type fields, addition of new content type that is used in multiple areas of the site and hence forth.

## Consequences

- **Positive:**
  - It is a well known and widely adopted versioning system for software releases including the Drupal community.
  - Easier to understand and clearly calls out as per major, minor or patch releases.
  - Predictability and transparency in business clearly signaling breaking changes with major version bumps allows teams to anticipate and plan for updates without unexpected surprises.
  
- **Negative:**
  - Determining what constitutes a major, minor, or patch change can be subjective, leading to inconsistencies in versioning.
  - Strict adherence to SemVer can introduce process overhead, especially in fast-moving projects where breaking changes might be minor or rare.
  - Teams may hesitate to introduce necessary but breaking changes because it requires a major version bump, leading to stagnation or accumulating technical debt.

## Alternatives Considered

- We considered an alternative were we have a indicator (e.g. prefix like `feature`) to start with that denotes whether the release is a Continuous Development/Feature release or Maintenance release. However since we also combine both feature development and maintenance fixes as one release we would need one version label that conveys both.

- Another alternative can be using date as version indicator. e.g. v20250124 in vYYYYDDMM format with subsequent same day releases hyphenated as v20250124-2. Though this method is ideal for tagging in code it is difficult to verbally communicate the version number with clients during discussions as its a date.

## Status

- **Proposed**
