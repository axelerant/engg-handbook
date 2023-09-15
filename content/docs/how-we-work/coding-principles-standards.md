---
title: Coding Principles and Standards
weight: 4
description: At Axelerant, we write code not only to solve a specific problem but also to provide a reusable solution that can be used at a community level. We have principles that can guide us to the desired code standards.
---

# Coding Principles and Standards

At Axelerant, we write code not only to solve a specific problem but also to provide a reusable solution that can be used at a community level. We have principles that can guide us to the desired code standards.

## Coding Principles

- We use the correct layer of abstraction.

- We write clean, simple code and explain our purpose with comments.

- We contribute back everything we can because it supports us, our clients, and the community.

- We manage patches in a standard way so that we can know if code/contrib has been changed and how and why. Every change should be contributed back, and the patch name should include the drupal.org issue NID.

- We write secure code.

- We write code that anticipates change, so that we can implement (most) changes in an easy and Agile way.

- We write an API layer that doesn't assume a particular UI, so that the API could be used in multiple (and unpredictable) situations (For example, used in these UIs: Web site, Drush, REST, SMS).

- We remove dead code because it's dead (and because it's confusing to leave it).

- We treat one as a special case of many, so that the logic is in one place and we don't have to maintain it in two places.

- We use Doxygen commenting standards on the top of functions.

- We include implementation notes and end-user documentation in our tickets.

## Coding Standards

- We follow established team practices so we can easily work with each other's code and contribute back.

- We don't hardcode.

- We stand behind the YAGNI (You Aren't Gonna Need It) philosophy and avoid "gold plating".

  - When writing code, our code should solve ONLY and EXACTLY the use case that we are trying to support. In many instances, we have a desire to make things MORE FLEXIBLE in the FUTURE but that is code we will have to support without knowing whether any of those use cases will ever come up. Another big reason for wanting to be FLEXIBLE is that refactoring is hard, and it feels easier to have flexibility at the front, but that is why we write automated tests, so refactoring will not be as painful.

### Drupal-specific Coding Standards

- We follow [Drupal Coding Standards](https://www.drupal.org/docs/develop/standards) which includes PHP, CSS, JavaScript, Twig, YAML, and more.

- [Writing Secure Code in Drupal](https://www.drupal.org/docs/administering-a-drupal-site/security-in-drupal/writing-secure-code-for-drupal)

- We ensure [Code Quality with DCQ](https://www.drupal.org/project/dcq) which includes the Coder module to ensure code meets Drupal standards.

- We use namespaces so that we avoid namespace collisions.

- We always try to use Drupal functions where they exist. This helps with upgrades, among other things.

- We use a theme system. When theming, don't hack module code when it is possible to use a theme function instead.
  -The corollary: when coding modules, keep all markup in theme functions.

- We use render arrays and theme functions, so we can separate logic and presentation.

- We try to keep modules that could be useful on another site completely generic from the start (a good technique is to develop on a fresh Drupal install rather than the actual site) and theme the site-specific stuff in your site theme.

- We use contrib modules (or write new ones!)

  - The Most Important Decision In Developing A Drupal Site: Contributed vs. custom development: When writing code, we try to think about abstracting functionality where appropriate. This makes it easier for us to contribute back to the larger community and also lets us recycle our work on different projects. Keep an eye on the horizon!

- We put any site text longer than a line or two in a settings field (or, at the very least, a variable).
