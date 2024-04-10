---
title: Our Reference Baseline
weight: 1
bookCollapseSection: true
description: This is our reference baseline of technologies and techniques we use on a project.
---

# Our Reference Baseline

This is our reference baseline of technologies and techniques we use on any project. At this time, this baseline is standardized for our support projects but will eventually also apply to our managed projects.

## Git Workflow and Health

The exact [Git workflow]({{< relref "git-workflow" >}}) necessarily changes from one project to another. That said, it is possible and we must aim for certain elements of consistency based on our (industry) collective experience. Many of these are defined so because they are obvious to the developer community in general.

* Define a standard name for the trunk. Either `main` or `master` are commonly expected names.
* The default branch on GitHub must be set to the trunk.
* Regularly remove merged branches. It's a good idea to remove it immediately after a PR is merged.
* Avoid long-lived branches (except the trunk). Any exceptions must be [documented](#documentation).
* Close stale PRs and remove the branches. Old code is highly unlikely to be useful for any purpose.
* Remove unused files from the repository.

Read more details [here]({{< relref "git-workflow" >}}).

## Local Development with DDEV

[DDEV](https://ddev.readthedocs.io/en/stable/) is our tool of choice for setting up local development environments across projects. You need Docker to run it and you can [provide the Docker engine](https://ddev.readthedocs.io/en/stable/users/install/docker-installation/) using the official Docker Desktop, Colima, or Orbstack. Follow the [installation instructions](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) to set up DDEV on your machine.

It is very likely that the project you're working on already has DDEV configured. In such cases, you simply have to clone the project and run `ddev start` in the project directory. Follow [these instructions](https://ddev.readthedocs.io/en/stable/users/project/) if the project does not have DDEV configured.

{{< details "Configure DDEV on a project" >}}
Once DDEV is installed, follow these steps:

1. Clone the project, if not already done.
2. Run `ddev config`. This will ask a series of questions to set up the project. Make sure you use the project name (normalized by removing non-alphanumeric characters) as the site name.
3. Add DDEV addons as relevant. For example, we almost always add the [ddev-redis](https://github.com/ddev/ddev-redis) addon.
4. Adjust the `.ddev/config.yaml` file to set the correct PHP version, database images, etc. As a rule, try to match the versions to something as close to production as possible. This is not always exactly possible as DDEV will only maintain commonly supported versions. For example, DDEV does not support MariaDB 11.0 because it is not LTS. In this case, use MariaDB 10.11.
5. Run `ddev start` to spin up the local environment and verify if everything is working correctly.
6. Commit the files in the `.ddev` directory and other generated files such as `settings.ddev.php` and create a PR.

{{< /details >}}

## Documentation

WIP
