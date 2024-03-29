---
title: Git Workflow
weight: 4
description: Git Workflow is a set of practices and procedures used with the Git version control system to manage software development. It involves creating branches, committing changes, merging, and pushing changes back to a central repository. It is essential for collaborative software development and ensures effective management of project changes.
---

# Git Workflow

Git Workflow is a set of practices and procedures used with the Git version control system to manage software development. It involves creating branches, committing changes, merging, and pushing changes back to a central repository. It is essential for collaborative software development and ensures effective management of project changes.

## Feature-branching and multiple environments

The method of branching determines how quickly you are able to begin working on a new feature and complete it. In a GitOps workflow (such as the one we commonly work with when using platform.sh), the branching mechanism also defines what environments are available.

## Trunk-based Development workflow

[Trunk workflow](https://trunkbaseddevelopment.com/) in git has been found to make software development cycles highly efficient. The modern tooling in the DevOps world now expects trunk workflow and using any other method results in an uphill climb with those tools.

There is a single long lived branch called `main` (previously `master`) where releases for production may be tagged. All changes, bugfixes, and hotfixes happen in branches forked from this master branch and SHOULD be merged back here once the feature development is complete and tested. Following the principles of continuous deployment, the master branch SHOULD be in a deployable state at any point of time. To ensure this:

- All development and testing MUST be complete in the feature branches itself before being merged to `main`.
- Long-running feature branches SHOULD be avoided. Break a large features into smaller tasks and regularly merge that into the main branch. This way, a large feature is incrementally added to the system and this reduces the chances of the overall system failing when the feature is finally enabled.
- In case a long-running feature cannot be broken, the `main` branch SHOULD be merged into the feature branch regularly. This is to ensure that there are no conflicts with other features that may have got into master since the feature branch was forked.

## Gitflow

[Gitflow](https://nvie.com/posts/a-successful-git-branching-model/) is still popular for software where teams have to maintain multiple versions at the same time. It has been traditionally used with many of the platforms we work(ed) with and it is still important to understand and determine when it should be used.
