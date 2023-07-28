---
title: Working with Large Files
weight: 6
description: Working with media files, such as images and videos, in Git can be challenging due to the large file sizes. Git was originally designed to handle code or config files that are mostly text and usually small, so it can struggle with large binary files. Storing media files in Git can also cause the repository size to grow quickly, which can slow down cloning and pushing changes.
---

# Working with Large Files

Working with media files, such as images and videos, in Git can be challenging due to the large file sizes. Git was originally designed to handle code or config files that are mostly text and usually small, so it can struggle with large binary files. Storing media files in Git can also cause the repository size to grow quickly, which can slow down cloning and pushing changes. To work efficiently with media files in Git, developers can use [Git LFS (Large File Storage)](https://git-lfs.com/#:~:text=or%20newer.-,Getting%20Started,-Download%20and%20install), a Git extension that can handle large file sizes by storing the file contents outside the Git repository. This allows developers to manage media files in Git while keeping the repository size small and reducing the risk of slowing down the repository. It's important to properly configure Git LFS to ensure that media files are properly tracked and maintained in the repository.
