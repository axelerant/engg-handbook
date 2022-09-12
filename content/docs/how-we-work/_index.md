---
weight: 3
bookCollapseSection: true
---

# How we work at Axelerant

While many development principles are universal, each individual develops their own style of programming and that might be somewhat different from another persons. We work in a team and sometimes these styles conflict with one another. To avoid losing precious energy and time in discussing this for each team we build, we are documenting some of the ways of working here.

There's another perspective. Everyone has a different experience and they may not be aware of all the pitfalls of a specific practice; things that might be obvious to more seasoned developers. Since we forget to talk about things that are obvious to us, this guide is meant to document out method so that it is clear to all.

## Are these perfect?

No. These methods are not perfect but these are ours. We understand the tradeoffs involved and have decided this to be the most appropriate method based on these factors.

1. The current technology landscape.
1. The tools and platforms we use.
1. Our knowledge about these technologies and platforms.

We welcome improvements to these processes and methods provided there is enough support. We also recognize that not all teams are the same and the most appropriate method may be different for such teams. Wherever possible, we try to document that within our context.

Again, if you find anything lacking in any of these pages, feel free to raise a pull request.

## [Git repository setup]({{< relref "git.md" >}})

Version control is a staple part of the development cycle and it is important we (the entire team) understand it properly.

## Continuous Integration

Continuous Integration (and its cousin, Continuous Deployment) are essential parts of a developer's cycle today. We use it everyday without realizing it and we ignore it at our own peril.

## Security

An application relies on database credentials to connect to the database. There can be API keys using which the application communicates with the third-party service. They must not be kept in the repository. There should not even be a Git commit referring to those credentials. They can be misused if a malicious user gets hold of them.

Use the environment variables or vaults for storing and retrieving them.

## Automated Testing

Nobody likes repetitive tasks. Human beings are usually bad at reliably performing repetitive tasks. If you want to build, deploy, and generally jump to more exciting tasks soon, write automated tests.

## Documentation

Documentation is highly underrated. It is probably the most underutilized, yet the most important factor of success. Think about any product or technology. The only thing that dictated its success long-term was its ease-of-use, and documentation is highly critical to achieve that.

## Knowledge sharing

As an engineer, we solve problems daily. It can be technical or non-technical. The solution can be from a reference or something you figured out. By sharing how you have solved the problem, you will be helping others who have the same problem. It can be in the form of a session or a blog.

## Local tools

Your choice of tools you use to write code or work with issues will determine how happy and productive, or frustrated and inefficient you are. This is why we build configuration for local tools within the project repository so that the entire team is working with the same tools and in the same environment.

### IDE's, shell, other utilities

We share and publish our preferred IDE's and configuration but are able to give an option to use your preferred IDE, shell, tools, and other utilities in most cases. We recommend a powerful enough macOS system configured for command line usage and PHPStorm for IDE but many teams use alternatives efficiently.

### Development environments

Development environments are trickier to maintain as per individual preferences and that is why the team usually opts for a single development environment (configured in the project repository). Our choice of development environments are Lando and DDEV and we have tooling to improve some of our processes for both.

## Feature-branching and multiple environments

Highly related to version control, the method of branching determines how quickly you are able to begin working on a new feature and close it.

### Trunk workflow

Trunk workflow in git has been found to make software development cycles highly efficient. The modern tooling in the DevOps world now expects trunk workflow and using any other method guarantees an uphill climb with those tools.

### Gitflow

Gitflow is still popular for software where teams have to maintain multiple versions at the same time. It has been traditionally used with many of the platforms we work(ed) with and it is still important to understand and determine when it should be used.

## Pull Requests and Reviewing code

We always benefit from another pair of eyes looking over our work. Pull requests and reviewing code provide a mechanism to do that. Let's talk about how to do it well.
