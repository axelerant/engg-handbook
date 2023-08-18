---
title: Recovering Lost Commits
weight: 10
description: Git is a powerful version control system that allows us to track changes to our code over time. However, even with Git, it is possible to accidentally delete commits or make other mistakes that can lead to data loss. Git possesses features that can help recover lost commits.
---

# Recovering Lost Commits

Git is a powerful version control system that allows us to track changes to our code over time. However, even with Git, it is possible to accidentally delete commits or make other mistakes that can lead to data loss. Git possesses features that can help recover lost commits.

If we accidentally delete a commit, we can use the `reflog` to find the SHA-1 hash of the commit and then use the `git reset` command to restore it. The `reflog` is a history of all the commits that have been made to our project, including those that have been deleted. [Read more](https://git-scm.com/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery)
