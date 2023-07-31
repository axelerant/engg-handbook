---
title: Rolling Back Changes
weight: 7
description: In Git, to undo or reverse the effects of one or more commits or roll back changes, there are different ways depending on the situation and the desired outcome.
---

# Rolling Back Changes

In Git, to undo or reverse the effects of one or more commits or [roll back changes](https://microsoft.github.io/code-with-engineering-playbook/source-control/git-guidance/#rolling-back-changes), there are different ways depending on the situation and the desired outcome. We use commands to restore files or branches to a previous state, remove untracked files, create new commits that undo previous ones, move the current branch pointer to a different commit, or delete files from the working directory and the index. Rolling back changes in Git requires careful consideration of the impact on the project history and collaboration.

One way to roll back changes is to use the `git revert` command. This command will create a new commit that reverses the changes made in the previous commit. For example, if you add a line of code to a file and then decide that you don't want the line, you can use git revert to undo the change.

Another way to roll back changes is to use the `git reset` command. This command will move the HEAD pointer back to a previous commit. This will effectively undo all of the changes that have been made since the specified commit.

It is important to note that rolling back changes in Git will not delete the changes from your history. The changes will still be there, but they will be marked as "unstaged". This means that they will not be included in the next commit that you make.

If you want to completely remove changes from your history, you can use the git reset --hard command. This command will move the HEAD pointer back to the specified commit and will also delete all of the unstaged changes.

It is important to use caution when rolling back changes in Git. If you undo changes that you need, you may have to re-apply them. It is also important to note that rolling back changes will not affect any changes that have been pushed to a remote repository.
