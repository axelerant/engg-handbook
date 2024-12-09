---
title: "Regularly Update Modules and Remove Deprecated APIs"
date: "2024-02-29"
decision: "We will perform incremental updates to fix deprecated code in our custom modules, replacing deprecated contributed modules with latest versions or an alternative rather than one shot upgrade from one Drupal major version to another"
status: "accepted"
categories:
  - Drupal
---

# A Continuous Approach to Module Updates and Deprecated API Handling in Drupal

## Context

Currently, our maintenance approach focuses solely on applying major security updates to contributed modules and Drupal core. While this ensures basic security compliance, it creates significant challenges when a Drupal major version reaches its end of life (EOL). At that point, we face a large, time-consuming process that includes:

- Fixing deprecated custom code.
- Replacing incompatible contributed modules.
- Upgrading the Drupal core.

This results in a substantial one-time cost, making it difficult for clients to secure budget approvals. Additionally, this approach contradicts the principle of smaller, incremental updates. The resulting instability increases the effort required in every phase, from development to QA and UAT, leading to delays and inefficiencies.

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
  - We highlight this as part of our [CDM packages](https://www.axelerant.com/drupal-continuous-development-and-maintenance) as well setting up a cadence and expectations with client.
- **Negative:**
  - There might be some issues since we are early adopters of the next major version. However these are not expected to be Critical or High priority as the community tests the code before releasing.
  - We might not be able to update all the contributed modules due to inputs needed from the maintainer of the module or any dependency on the community.
  - There might be some compatibility issues between modules that interact with each other and might need to be upgraded together. This might need additional decision making on when to do it.

## Alternatives Considered

Below alternatives were considered however incremental updates were decided due to long term benefits even though it might have a initial learning curve.

- **Continue with Monolithic Upgrades:**
  - **Pros:** Familiar processes, longer gaps between updates.
  - **Cons:** High technical debt, major disruptions during upgrades, resource-intensive.
- **Adopt Incremental Updates:**
  - **Pros:** Streamlined maintenance, enhanced stability, easier technical debt management.
  - **Cons:** Requires a mindset shift, possible initial learning curve for teams.
- **Hybrid Approach (Selective Incremental Upgrades):**
  - **Pros:** Flexibility in focusing updates on high-priority areas.
  - **Cons:** May create inconsistency across the codebase, complicating future upgrades.

## Status

- **Accepted**
