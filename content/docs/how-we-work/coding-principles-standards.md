---
title: Coding Principles and Standards
weight: 4
description: When working on our projects, we prefer to use libraries. We adhere to our principle, proudly invented elsewhere, implying that we value and utilize community libraries. However, the thrill of our work often lies in the unique requirements that call for custom solutions beyond these libraries.
---

# Coding Principles and Standards

When working on our projects, we prefer to use libraries. We adhere to our principle, [proudly invented elsewhere]({{< relref "../principles/proudly-invented-elsewhere" >}}), implying that we value and utilize community libraries. However, the thrill of our work often lies in the unique requirements that call for custom solutions beyond these libraries.

At Axelerant, we write code not only to solve a specific problem but also to provide a reusable solution that can be used at a community level. We have principles that can guide us to the desired code standards.

## Coding Principles

- We use the correct layer of abstraction.

- We write clean, simple code and explain our purpose with comments.

- We contribute everything we can because it supports us, our clients, and the community.

- We manage patches in a standard way so that we can know if code/contrib has been changed and how and why. Every change should be contributed back.

- We write secure code. We are cautious about security and adhere to industry best practices. This enables us to ensure that our code is free of vulnerabilities and protected from being exploited by attackers.

- We write code that anticipates change so that we can implement most changes in an easy and agile way.

- We write an API layer that doesn’t assume a particular UI, so that the API could be used in multiple (and unpredictable) platforms.

- We remove dead code because it’s dead (and because it’s confusing to leave it).

- We treat one as a special case of many, so that the logic is in one place and we don’t have to maintain it in two places.

- We use [doxygen commenting standards](https://www.doxygen.nl/manual/docblocks.html) inside our code.

- We include implementation notes and end-user documentation in our tickets.

## Coding Standards

In our projects, we strictly adhere to the established coding standards. These standards serve as our guide to ensuring the consistency, readability, and maintainability of our code. We make it a point to keep these standards current and relevant, independent of any specific version. This approach allows us to adapt to changes and improvements in programming practices, ensuring that our code remains robust and efficient across different versions.

- We follow established team practices, so we can easily work with each other’s code and contribute back.

- We don’t hardcode; we use configuration files, environment variables, or passing data through function parameters.

- We stand behind the YAGNI (You Aren’t Gonna Need It) philosophy and avoid “gold plating”.

  - When writing code, our code should solve ONLY and EXACTLY the use case that we are trying to support. In many instances, we have a desire to make things MORE FLEXIBLE in the FUTURE but that is code we will have to support without knowing whether any of those use cases will ever come up. Another big reason for wanting to be FLEXIBLE is that refactoring is hard, and it feels easier to have flexibility at the front, but that is why we write automated tests, so refactoring will not be as painful.

## Pair Programming

Pair programming is a software development technique where two developers work together. Sometimes it is proven helpful to debug code collectively by connecting on calls, sometimes [rubber-ducking]({{< relref "../common-areas/debugging/#rubber-ducking" >}}) tactics are clearly achieved through this approach. Pair programming generally helps in improving code quality, including productivity and communication skills.
