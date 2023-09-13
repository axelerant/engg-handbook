---
title: Coding Principles and Standards
weight: 4
description: At Axelerant, we write code not only to solve a specific problem but also to provide a reusable solution that can be used in a community level. We have principles that can guide us to the desired code standards.
---

# Coding Principles and Standards

At Axelerant, we write code not only to solve a specific problem but also to provide a reusable solution that can be used in a community level. We have principles that can guide us to the desired code standards.

## Coding Principles

- We use the correct layer of abstraction.

- We write clean, simple code and explain our purpose with comments.

- We contribute back everything we can, because it supports us, our clients and the community.

- We manage patches in a standard way so that we can know if code/contrib has been changed, how and why. Every change should be contributed back, and the patch name should include the drupal.org issue NID.

- We write secure code.

- We write code that anticipates change, so that we can implement (most) changes in an easy and Agile way.

- We write API layer that doesn't assume a particular UI, so that the API could be used in multiple (and unpredictable) situations (For example, used in these UIs: Web site, drush, rest, SMS).

- We remove dead code, because it's dead (and because it's confusing to leave it).

- We treat one as a special case of many, so that the logic is in one place and we don't have to maintain it in two places.

- When writing getter functions, consider handling the logic in the many only. A `get_one` can call the `get_many`.

- We use doxygen commenting standards on the top of functions.

- We include implementation notes and end-user documentation in our tickets.

## Coding Standards

- We follow established best practices so we can easily work with each others code, and contribute back.

- We don't hard code

- We stand behind the YAGNI (You ain't gonna need it) philosophy and avoid "gold plating"

  - When writing code, our code should solve ONLY and EXACTLY the use case that we are trying to support. In many instances we have a desired to make things MORE FLEXIBLE for the FUTURE but that is code we will have to support without knowing whether any of those use cases will ever come up. Another big reason for wanting to be FLEXIBLE is that refactoring is hard, and it feels easier to have flexibility at front, but that is why we write automated tests, so refactoring will not be as painful.

### Drupal-specific Coding Standards

We follow [Drupal Coding Standards](https://www.drupal.org/docs/develop/standards) which includes PHP, CSS, JavaScript, Twig, YAML, and more.

- Also [Writing Secure Code in Drupal](https://www.drupal.org/docs/administering-a-drupal-site/security-in-drupal/writing-secure-code-for-drupal)

- We ensure [Code Quality with DCQ](https://www.drupal.org/project/dcq) which includes the Coder module to ensure code meets Drupal standards.

- We use namespaces so that we avoid namespace collisions.

  - All module functions (even little helper functions) should have the module prefix
  - Database tables should have the module prefix.
  - Variables should have the module prefix.
  - Custom code, when possible, should be developed as a standalone library that a module can include and integrate with Drupal. This should mean using class namespaces and best OOP practices, and at that point we can use an alternative more flexible autoloading approach, like the one provided by composer.

- We always try to use Drupal functions where they exist. This helps with upgrades (among other things).

  - Use `drupal_get_path();` to create a path to a file in your module directory.
  - Use `path_to_theme();` to create a path to a file in the current theme directory.

- We use the theme system! When theming, don't hack module code when it is possible to use a theme function instead.
  -The corollary: when coding modules keep all markup in theme functions!

- We use render arrays and theme functions, so we can separate logic and presentation.

- We try to keep modules that could be useful on another site completely generic from the start (a good technique is to develop in a fresh Drupal install rather then the actual site), and theme the site specific stuff in your site theme.

- We use contrib modules (or write new ones!)

  - The Most Important Decision In Developing A Drupal Site: Contributed Vs. Custom Development: When writing code, we try to think about abstracting functionality where appropriate. This helps make it easier for us to contribute back to the larger community and also lets us recycle our work on different projects. Keep an eye to the horizon!

- We put any site text longer than a line or two in a settings field (or, at the least, a variable).

- For shorter strings make sure all text is run through the `t()` function, and then use `locale.module` to 'translate' it if changes are needed. Locale module is also useful for keeping contrib modules (image, location etc) as 'pristine' as possible, which makes upgrading easier.

- We use `variable_get()` for text or settings that may change, so that these can be easily changed without needing to push a release.
