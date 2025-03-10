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

GitHub provides a variety of protection mechanism for different branches.

Below are our recommended branch protection settings.

* trunk - main/master:
  * [Require pull request reviews before merging](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging)
  * [Require status checks before merging](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-status-checks-before-merging)
  * [Restrict who can push to matching branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#restrict-who-can-push-to-matching-branches) which is usually restricted to Admin so they can push from CLI if needed in some cases.
  * [Require conversation resolution before merging](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-conversation-resolution-before-merging). This rule is optional and can highlight for the person merging (usually the reviewer themselves) to ensure all the comments mentioned by reviewer are at least responded if not resolved.

* other short-lived branches: A [wildcard](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule#about-branch-protection-rules) can be used to detect all short-lived branches provided they follow a naming convention. For example `feature*` or `release*`can denote all feature and release branches.
  * [Require pull request reviews before merging](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging)
  * [Require status checks before merging](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-status-checks-before-merging)

### Number of branches

It is recommended to have minimal number of branches as highlighted above. Below is the recommended workflow.

* We have only 1 long lived branch (usually `main`) which is the trunk

* Any other branches (and corresponding environments) are short lived feature branches (and environments) that is deleted after merged with 'main'

* The 'main' branch is linked to Development environment where integration happens followed by QA, bug fixes

* Once QA is approved we deploy the changes to Stage as mentioned in [deployments]({{< relref "baseline" >}}#deployment-prod) for UAT and regression testing followed by Production deployment

There might be cases where you might need an additional long lived branch. Below is an example.

* There is additional branch `develop` where QA happens instead of in `main`
  * The major reason for doing this is when the team is working on a feature however that might be decided to be pushed in next release due to business reasons and to avoid reverting multiple features on `main` and re-testing.
  * Please note that this approach comes with the risks like having the `develop` branch outdated or diverged from the `main` branch due to its long lived nature, additional efforts due to cognitive overload on which branch the feature needs to be pushed and the QA having to test on two branches initially `develop` and then `main`.
