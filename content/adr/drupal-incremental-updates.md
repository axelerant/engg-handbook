---
title: "Incremental updates to Drupal"
date: "2024-02-29"
decision: "We will perform incremental updates to fix deprecated code in our custom modules, replacing deprecated contributed modules with latest versions or an alternative rather than one shot upgrade from one Drupal major version to another"
status: "accepted"
categories:
  - Drupal
---

# Drupal 9

## Context

Currently, we focus on doing major security updates to contributed modules and core as part of maintenance. However, this becomes a challenge when the end of life (EOL) arrives for our current Drupal major version as it results in one large estimation for fixing deprecated custom code, replacing contributed modules, and finally upgrading the core. This causes a huge one-time cost for the clients making it challenging to get budget approvals It also is not in the spirit of smaller incremental development and hence impacts the stability of the application resulting in more efforts in each phase including QA and UAT.

## Decision

We will perform incremental updates to our site to fix deprecated code as part of our monthly maintenance/support hours rather than doing them together like we used to do before Drupal 9. This decision is due to the following reasons:

- **Alignment with Drupal community:** After Drupal 9 the community also [shifted](<https://www.drupal.org/about/core/policies/core-change-policies/continuous-upgrades-between-major-versions>) towards this incremental deprecation of API rather than one large change from one major version to another. We need to leverage this flexibility and the change in approach as [explained in detail](https://www.hojtsy.hu/blog/2019-nov-11/dramatic-shift-how-drupal-upgrade-now-done-drupal-8-drupal-9).
- **Avoiding one big bang upgrade:** Doing the changes necessary to upgrade to next major Drupal version in one shot causes a lot of changes done in custom modules, many contributed modules updated at same time and pushed to Production all at once. This makes the site unstable and also impacts the clients trust on Drupal and Axelerant.

## Consequences

- **Positive:**
  - The application becomes ready for the next major version incrementally and hence the efforts are split across the year.
  - This also reduces the re-work or issues since the deprecations are fixed in smaller chunks.
  - The site is more stable and is tested continually on Production with next major version code.
  - We can identify those contributed modules were there is less support for the next major version and contribute/make it compatible instead of waiting.
- **Negative:**
  - There might be some issues since we are early adopters of the next major version. However these are not expected to be Critical or High priority as the community tests the code before releasing.
  - We might not be able to update all the contributed modules due to inputs needed from the maintainer of the module or any dependency on the community.
  - There might be some compatibility issues between modules that interact with each other and might need to be upgraded together. This might need additional decision making on when to do it.

## Status

- **Accepted**
