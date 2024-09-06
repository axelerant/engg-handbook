---
title: Git Workflow and Health
weight: 2
description: We must aim for certain elements of consistency based on our (industry) collective experience. Many of these are defined so because they are obvious to the developer community in general.
---

# Git Workflow and Health

The exact Git workflow necessarily changes from one project to another. That said, it is possible and we must aim for certain elements of consistency based on our (industry) collective experience. Many of these are defined so because they are obvious to the developer community in general.

* Define a standard name for the trunk. Either `main` or `master` are commonly expected names.
* The default branch on GitHub must be set to the trunk.
* Regularly remove merged branches. It's a good idea to remove it immediately after a PR is merged.
* Avoid long-lived branches (except the trunk). Any exceptions must be [documented]({{< relref "baseline" >}}#documentation).
* Close stale PRs and remove the branches. Old code is highly unlikely to be useful for any purpose.
* Remove unused files from the repository.

## Concerns and Questions

There may be some concerns in implementing the above. This section will attempt to address them.

### Deleting merged branches

The branches can be deleted immediately and [automatically](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches) once they are merged. This helps in making the list of actual WIP branches more readable both in UI and in CLI.

[Git branches](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) are simply labels and deleting a branch results in no information loss except the name of the branch itself (which is often written in commit messages and pull requests anyway). Further, GitHub lets us restore a deleted branch with a click of a button. Consequently, there is no reason to keep a branch once it's merged.

### Protecting the default branch on GitHub

[GitHub provides a variety of protection mechanism](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) for different branches. It especially recommends that the main branch (often called `main` or `master`) is protected from accidental pushes.

We recommend that the default branch is always protected. At a minimum, a PR should be required before merging to the main branch. You can also enforce conditions such as the PR must have approvals and requiring reviews from code owners. More rules can be found in the [documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

### Number of branches

It is recommended to have minimal number of branches as highlighted above. However below can be some scenarios based on which you can decide what works for your project.

#### Scenario 1 (1 branch)

This is the most ideal scenario where we have only 1 branch which is either `main` or `master`. Any other branches are temporary feature branches which would be deleted after the PR is closed. In case of any feature that needs to be reverted, raising a revert PR against the merged one would work.The `main` branch is linked to the Development environment where the next code for Production is pushed and QA is done followed by bug fixes.

This method is effective for projects with few or no feature changes post User Acceptance Testing (UAT).However, we should withhold merging any tickets into the `main` or `master` branch if they are not planned current release. Instead, these tickets should remain on a feature branch until the appropriate tag is created for the planned deployment continuously rebased against `main` or `master`.

After the QA is approved, we deploy the changes to Stage as mentioned in [deployments]({{< relref "baseline" >}}#deployment-prod) for UAT and regression testing.

#### Scenario 2 (2 branches)

In this case there are two branches one being either `main` or `master` and another being `develop`. Any other branches are temporary feature branches which would be deleted after the PR is closed. While the purpose of `main` or `master` remains the same (i.e.) containing the production ready code, the `develop` branch acts as the placeholder for QA to test the features before sending to UAT.

This method is effective for projects where there are last minute changes in features for the current release due to business reasons. The intention here is to avoid pushing features to `main` or `master` and then having to revert them entirely as it becomes complex when there are many and takes additional time and re-testing.

In worst case scenario of the features being pushed to `main` or `master` and moved to next release, it's advisable to switch to an older tag (as of last Production deployment) and create a new tag that includes only the approved tickets rather than reverting each feature. This reduces the time required for reverts.

In this scenario the `develop` branch is linked to the development environment and Stage is linked to `main` or `master` with new tag for Production after UAT approval.
