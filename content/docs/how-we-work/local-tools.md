---
title: Local tools
weight: 7
description: Your choice of tools you use to write code or work with issues will determine how happy and productive, or frustrated and inefficient you are. This is why we build configuration for local tools within the project repository so that the entire team is working with the same tools and in the same environment.
---

## Local tools

Your choice of tools you use to write code or work with issues will determine how happy and productive, or frustrated and inefficient you are. This is why we build configuration for local tools within the project repository so that the entire team is working with the same tools and in the same environment.

### IDE's, shell, other utilities

We share and publish our preferred IDE's and configuration but are able to give an option to use your preferred IDE, shell, tools, and other utilities in most cases. We recommend a powerful enough macOS system configured for command line usage and PHPStorm for IDE but many teams use alternatives efficiently.

#### PHPStorm

PHPStorm is perfect for working with core PHP and PHP frameworks such as Drupal, Laravel, WordPress, Zend, Magento, Joomla, Yii, CakePHP, and others, as it provides the best code completion, refactoring, live error prevention, and more. It also works similarily for front-end technologies, such as HTML 5, CSS, Sass, Less, Stylus, CoffeeScript, TypeScript, Emmet, and JavaScript.

#### Visual Studio Code

Visual Studio Code is a free and open-source editor that supports a broad range of programming languages. Visual Studio Code features a rich set of tools that enhance our productivity, such as an integrated terminal, Git integration, and IntelliSense, which provides real-time suggestions and code completion.

#### Extensions/Plugins

Like choosing an IDE that works for you is important, it is also equally important you have the necessary extensions/plugins that works well with your IDE and caters to your development workflow.

##### GitHub

We use GitHub UI to interact with Pull requests (PRs) created by peers like review, merging or closing.

- VS Code - [Manual](https://code.visualstudio.com/docs/sourcecontrol/github) with a quick [demo](https://vscode.github.com/)
- PHP Storm - [Manual](https://www.jetbrains.com/help/phpstorm/github.html)

##### JIRA

We use JIRA for updating the ticket status and progress.

- VS Code - [The JIRA plugin](https://marketplace.visualstudio.com/items?itemName=gioboa.jira-plugin&ssr=false#overview) has better reviews than [Atlassian plugin](https://marketplace.visualstudio.com/items?itemName=Atlassian.atlascode&ssr=false#overview)
- PHP Storm - [The JIRA Integration plugin](https://plugins.jetbrains.com/plugin/11169-jira-integration) and a [demo](https://www.youtube.com/watch?v=uQuqIMtLrB0)

**NOTE:** Though the above extensions support time tracking with JIRA, we use Mavenlink at Axelerant. You might want to use the feature to track the time but still log manually in Mavenlink.

Using extensions to do the above right from the IDE allows for better collaboration, less turn around times for PR reviews and more accurate time logging and ticket updates.

### Development environments

Development environments are trickier to maintain as per individual preferences and that is why the team usually opts for a single development environment (configured in the project repository). Our choice of development environments are [Lando](https://docs.lando.dev/getting-started/installation.html) and [DDEV](https://ddev.readthedocs.io/en/stable/users/install/) and we have tooling to improve some of our processes for both.

- [Lando](https://docs.lando.dev/getting-started/) is an open-source development platform designed to create and manage local development environments for PHP, Node.js, and other web applications. It simplifies the process of creating complex development environments, providing developers with a powerful and flexible toolset to set up and manage their projects with ease. Its major features include automatic configuration, support for multiple languages and frameworks, built-in databases and caching solutions, real-time logs, and scalable infrastructure.

- [DDEV](https://ddev.readthedocs.io/en/stable/) is a local development environment that is based on Docker and has features specifically tailored for Drupal development. DDEV includes a command-line tool that makes it easy to start, stop, and manage our Drupal development environment. DDEV is designed to streamline the development process and create consistent development environments for all team members. Features include simplified local configuration, automatic container creation, port forwarding, and a range of other features that help developers get up and running quickly. DDEV supports a variety of web technologies, including PHP, Javascript, and CMS platforms such as WordPress and Drupal, making it a popular solution for web development teams around the world.
