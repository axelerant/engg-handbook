---
title: Atomic Commits
weight: 3
description: An atomic commit means that commit serves a single purpose. It can be refactoring, new API, verbiage change, etc. If you combine the refactoring and verbiage change in a single commit, then the purpose of atomic commit loses its purpose.
---

# Atomic Commits

An atomic commit means that commit serves a single purpose. It can be refactoring, new API, verbiage change, etc. If you combine the refactoring and verbiage change in a single commit, then the purpose of atomic commit loses its purpose.

## Why is it considered a good practice?

This makes the commits independent of each other, as they serve a single purpose. Independent commits make it easy to revert to a state without conflicts.

For example, you are working on a feature implementation that has the code for:

- Refactor an existing API.

- Feature implementation using the API: the stub

- Feature implementation using the API: the actual implementation

You are done with the first, and you are coding the second item. You found that refactoring was not necessary, and you reverted the first commit. But later, while coding the third item, you found a case where the refactor was necessary. And you reverted that `revert` commit.

The benefit was that you were able to easily change the state of the code. It wouldn't have been possible if you hadn't made an atomic commit for the refactor.
