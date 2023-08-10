---
title: Pull Request (PR)
weight: 3
description: A GitHub PR, or pull request, is a way to propose changes to the codebase. Once the changes are reviewed, they can be merged to the "main" branch. This process helps to ensure that changes are reviewed by someone else, which reduces the chances of any errors.
---

# Pull Request (PR)

A GitHub PR, or pull request, is a way to propose changes to the codebase. Once the changes are reviewed, they can be merged to the "main" branch. This process helps to ensure that changes are reviewed by someone else, which reduces the chances of any errors.

We can [create and submit a pull request](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project#:~:text=Creating%20a%20Pull%20Request) to the repository owner and manage the entire process of review, approval, and merging of changes. The process involves creating a fork of the repository, cloning the fork to a local computer, making desired changes to the code, and committing these changes. A PR can be submitted once these changes are pushed. By submitting a PR, users allow the repository owner to evaluate the proposed changes prior to incorporating them into the codebase.

## PR failures/debugging/troubleshoot

Github makes some checks against our PR to see if it is ready to be merged. Failing these checks is considered a failing of PR, or simply PR failed.

- The changes we have made conflict with other changes in the codebase. This happens when our feature branch is behind the latest code; either we have created our feature branch without pulling the latest code or merging one of several pending PRs has caused some conflicts with our PR.

- Git works with Continuous Integration (CI) tools to automatically run tests, build, and deploy code changes. CI systems work by connecting to Git repositories, monitoring for changes, and automatically triggering build and test jobs when new changes are detected. The CI system then checks out the code from the Git repository and starts running the build or test job. If the job fails, the CI system detects the error and alerts the team, which can then troubleshoot and fix the issue.

## PR Reviews and Comments

Once a Pull Request has been submitted, it will need to be reviewed by a team member. The reviewer will check the changes for correctness, and they may also provide feedback on the changes. If the reviewer approves the changes, the PR can be merged into the main codebase.

When a PR is reviewed, the reviewer may leave comments on the PR. These comments can be used to provide feedback on the changes or to ask questions. We promptly respond, discuss and understand the shared PR comment(s), and rework if applicable.
