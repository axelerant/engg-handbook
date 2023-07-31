---
title: Branching and Merging
weight: 4
description: Git branching and merging are essential concepts for managing any software. By using branches, we can isolate different features or bug fixes, and merge them back into the main branch as soon as they are ready.
---

# Branching and Merging

Git branching and merging are essential concepts for managing any software. By using branches, we can isolate different features or bug fixes, and merge them back into the main branch as soon as they are ready.

## Branching for multiple features

One of the most common uses for git branches is to manage multiple features. When we are working on a large project, it is often helpful to create a separate branch for each feature. This allows us to work on the feature independently without affecting each other. With regard to branch names, we may need to follow a specific nomenclature for branches or be project specific.

To create a branch for a new feature, you can use the following command:

```bash
git branch my-new-feature
```

This will create a new branch named `my-new-feature`. You can then switch to the new branch by using the following command:

```bash
git checkout my-new-feature
```

Once you are on the new branch, you can start working on implementing the feature. When you are finished, you can push your changes and raise PR.

## Resolving merge conflicts

When you merge two branches, it is possible that there will be conflicts. This happens when the two branches make changes to the same file in the same proximity. In this case, Git may not be able to merge the branches automatically. You will need to resolve the conflicts manually.

To resolve a merge conflict, you will need to open the file that has the conflict. You will then see two versions of the change, one from each branch. You will need to manually select the change that you want to keep. In case, one is not sure what changes to keep or what to remove, based on file commit history, reach out to the team member who last worked on that file and discuss and finalize the change.

Once you have resolved the conflicts, you can save the file and commit the changes. Git will then merge the branches.

## Merging Conflict on composer.lock

Merging composer.lock is a common issue because it is a file that contains a list of all of the dependencies that are required by your project, as well as the specific versions of those dependencies. When we merge two branches, it is possible that the two branches have different versions of the dependencies. This can cause conflicts when we try to merge the composer.lock files.

Generally, this conflict happens when people add/remove/update packages in different branches.

The best way to handle this is to push the changes to composer.json and lock files as frequently as possible. Only one branch should deal with updates, and it should be merged quickly. And if there are other features that require a new module, they should add that module in a separate branch and merge it as soon as possible. This ensures that the composer.lock file rarely changes in individual branches.

The vital thing is the version and other metadata listed in the composer.lock file. It will only get changed if someone runs the relevant composer commands. Running commands like `composer update` creates a composer.lock merge conflict when there are conflicting changes to the dependencies between two branches at the time of merging. This is because composer update updates the composer.lock file with the latest versions of the dependencies. If there are conflicting changes to the dependencies between two branches, then the composer.lock file will contain both sets of changes.

To resolve a merge conflict in the composer.lock file:

- [Reapply the changes from the other branch](https://getcomposer.org/doc/articles/resolving-merge-conflicts.md). Choose the branch that has the most changes and accept the composer.json and composer.lock files from that branch.
- Get rid of the Git confusion (the HEAD, ==, and << characters, and everything else on those lines), pick one of the two content-hash values (it doesn’t matter which), and run this command: `$ composer update --lock`. Composer will automatically regenerate the proper content hash. For more details, read [Resolving Composer.lock Git Merge Conflicts](https://mikemadison.net/blog/2020/8/18/resolving-composerlock-git-merge-conflicts).
