---
title: Coding
weight: 5
---

# Coding

At Axelerant, we prefer using community modules. But sadly, that doesn't always meet the requirements.

## Double check

We need to make sure the module doesn't have a setting that will meet the requirement. They are sometimes hidden and not mentioned in the README.

## Hybrid approach

Can the work be reduced by using a community module? It is effective because the module will do the heavy lifting. It reduces the scope of tests as well.

The client wants to add "Like" buttons below the snippet of every content. It will send a notification to a third-party mobile application. `flag` module will do the most work. We only need to write the glue code for the notification.

## Reusability

If we have written a generic implementation, others in the project can use it very usefully. Bonus: We can easily contribute it to the community. It can be in the form of a path or a new module.

## Contribution first

We have a strong enthusiasm for [open source contributions]({{< relref "../open-source-contribution/" >}}), particularly in coding. Whenever we encounter a problem within a module, our first instinct is to find a solution and submit a patch to address it. Similarly, if we come across someone seeking assistance in the drupal.org issue queue and we happen to know the answer, we gladly provide a comment to help them out. Additionally, when we develop a generic solution that can solve a common problem, we will submit it as a module. We believe in the power of collaboration and the impact of shared knowledge.

## Security

While writing code in Drupal, it is mandatory to keep our code secure and apply the best practices.

- [Writing secure code for Drupal](https://www.drupal.org/docs/administering-a-drupal-site/security-in-drupal/writing-secure-code-for-drupal)

## Coding Standards

We apply the Drupal coding standards when coding in Drupal projects. We always make sure that these standards are up-to-date and version-independent.

- [Drupal coding standards and best practices](https://www.drupal.org/docs/develop/standards)
