---
title: Setting up Git
weight: 1
description: Setting up Git is essential to keeping track of changes made to our files, collaborating with others, and maintaining our version control. We use the 'git config' command to set Git configuration values on a global or local project level.
---

# Setting up Git

Setting up Git is essential to keeping track of changes made to our files, collaborating with others, and maintaining our version control. We use the [`git config`](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config) command to set Git configuration values on a global or local project level. The configuration levels correspond to `.gitconfig` text files. To set the global commit name and email address, we use the commands

`git config --global user.name 'Your Name'`

`git config --global user.email 'youremail@yourdomain.com'`

Git uses this information to specify who made changes to the repository. When we commit changes to the repository, Git records name and email address data in the commit log. It also helps other developers to contact the person if they have any questions or suggestions.

To set up an SSH key for GitHub, you need to generate a key pair, add the private key to the SSH agent, and add the public key to your GitHub account settings. You can use the commands “ssh-keygen” and “ssh-add”, to perform these steps.
