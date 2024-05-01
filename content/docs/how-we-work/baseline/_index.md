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

{{< details "A brief checklist to check the git workflow health" >}}

* Define a standard name for the trunk. Either `main` or `master` are commonly expected names.
* The default branch on GitHub must be set to the trunk.
* Regularly remove merged branches. It's a good idea to remove it immediately after a PR is merged.
* Avoid long-lived branches (except the trunk). Any exceptions must be [documented](#documentation).
* Close stale PRs and remove the branches. Old code is highly unlikely to be useful for any purpose.
* Remove unused files from the repository.
* Changes are only merged through a pull request.
* Pull Requests contain complete details of the change or points to Jira issues that describes the same.

{{< /details >}}

Read more details [here]({{< relref "git-workflow" >}}).

## Documentation

Documentation is one of the most underrated activities a developer can take up. We remind and encourage the team to keep the documentation current by applying process gates. This may look like a check applied when reviewing a PR, when approving a task, or before marking a task as "done".

Keep in mind the audience for the documentation when writing. The audience could be you, 2 weeks later. It could be another developer on the team learning the system or being onboarded to the project. Keep the documentation readable and get to the point quickly.

Technical documentation _must_ be located in the project repository where it is easy for the developer to refer to it without leaving the IDE. Integration with the IDP allows us to render and read the documentation using a browser. Because the documentation is written in plain text files, markdown is the optimal format for this which is both easy to learn and easy to read.

## Code Hosting

To keep things simple, we will always host our projects on [one of our GitHub organizations](https://docs.google.com/document/d/1ncl1a7watXYVekTaPxcEVoaSwoQR091plT19iZDNqKo/edit#heading=h.cte02p7r6r89) that are a part of our [GitHub Enterprise account](https://github.com/axelerant). We get benefits such as advanced access control and 50,000 action minutes per month. Exceptions are possible but we will try to avoid them as much as possible.

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

## Application Cache

With CMSes like Drupal, we always use an application cache like [Redis](https://redis.io/) or [Memcached](https://memcached.org/). With Drupal's built-in dynamic caching abilities, there is no reason to not use an external cache. Given the size of our typical project, the slight increase in complexity is worth it.

We default to Redis unless there is a good reason to use Memcached. Often the reason is that the hosting provider may only support Memcached. Given the [recent Redis announcement](https://redis.io/blog/redis-adopts-dual-source-available-licensing/), we may change this recommendation based on the hosting landscape and performance considerations.

{{< details "Configure Redis on a project" >}}
Once DDEV is configured for a project, follow these steps:

1. Run `ddev get ddev/ddev-redis` (for Redis 7, run use `ddev/ddev-redis-7`).
2. Run `ddev restart`.
3. These add-ons will typically add a `settings.ddev.redis.php`. Verify it exists.
4. Update `settings.php` to configure Redis for the hosting provider. You can copy the settings from `setting.ddev.redis.php` and update the values to use the hosting provider's mechanism to set Redis.
5. Commit the files in the `.ddev` directory and the settings files mentioned above. Push the changes.

{{< /details >}}

## Database

The default database we pick is [MariaDB](https://mariadb.org/). Like with the application cache, we may switch to [MySQL](https://www.mysql.com/) depending on the hosting provider. In all cases, we try to match the versions on the production instance as closely as possible.

As of this writing, the LTS version for [MariaDB](https://endoflife.date/mariadb) is 10.11 and for [MySQL](https://endoflife.date/mysql) is 8.0. Try to pick this version for both local development and production unless there is a specific need. Both Drupal 10 and 11 can use these versions.

{{< details "Configure database version for local development" >}}
Once DDEV is configured, use one of these commands to set the database version:

* For MariaDB 10.11, run `ddev config --database=mariadb:10.11`.
* For MySQL 8.1, run `ddev config --database=mysql:8.0`.
* Change the version numbers if required.

{{< /details >}}

On some hosts, you also have to set the transaction isolation level. Follow the [instructions here](https://www.drupal.org/docs/getting-started/system-requirements/setting-the-mysql-transaction-isolation-level).

## File Storage for user content

Drupal supports public and private file schemes to store user-uploaded content. The public file scheme is the default mechanism and is suitable unless there is a specific requirement. Both of these schemes are stored in the local filesystem (e.g., public files are saved in `sites/default/files`). Hosts that support Drupal provide a mechanism to make these locations writable.

In the future, we will provide infrastructure support to keep these files on an object store such as S3 by default. For now, use modules like [`stage_file_proxy`](https://www.drupal.org/project/stage_file_proxy) to access these files in development environments.
