---
title: Rebasing
weight: 8
description: Git rebase is a command that integrates changes from one branch onto another. It can also be used to rewrite history by altering, removing, or combining commits.
---

# Rebasing

[Git rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase) is a command that integrates changes from one branch onto another. We can use Git Rebase to rewrite history by altering, removing, or combining commits.

Git rebase can help maintain a linear and clean project history. This makes it easier to navigate and understand the changes made in the project. It also allows for a fast-forward merge of feature branches into the main branch.

Git rebase can be used in standard or interactive mode.

- Standard mode automatically applies the commits in the current branch to the specified base.

- Interactive mode lets us modify each commit before applying it to the new base.

We can also use the `--onto` option to change the base of a branch that is not based on the main branch.

Git rebase can cause merge conflicts if the base branch has diverged too much from the current branch. It can also overwrite or lose commits if you force push the rebased branch to a remote repository that is shared by other users. You can use `git reflog` to recover lost commits or undo a rebase.
