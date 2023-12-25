---
title: Coding
weight: 5
---

# Coding

At Axelerant, we [prefer using community modules]({{< relref "../../principles/proudly-invented-elsewhere" >}}). But sadly, that doesn't always meet the requirements.

## Double check

We need to make sure the module doesn't have a setting that will meet the requirement. They are sometimes hidden and not mentioned in the README.

## Hybrid approach

Can the work be reduced by using a community module? It is effective because the module will do the heavy lifting. It reduces the scope of tests as well.

The client wants to add "Like" buttons below the snippet of every content. It will send a notification to a third-party mobile application. `flag` module will do the most work. We only need to write the glue code for the notification.

## Reusability

If we have written a generic implementation, others in the project can use it very usefully. Bonus: We can easily contribute it to the community. It can be in the form of a path or a new module.

## Contribution first

We have a strong enthusiasm for [open source contributions]({{< relref "../open-source-contribution/" >}}), particularly in Drupal coding. We proactively solve module issues and contribute generic solutions to [drupal.org](http://drupal.org/), embodying the spirit of collaboration and shared knowledge. [Learn more]({{< relref "../open-source-contribution//drupal-contribution/" >}}).

## Security

While writing code in Drupal, it is mandatory to keep our code secure and apply the best practices.

- [Writing secure code for Drupal](https://www.drupal.org/docs/administering-a-drupal-site/security-in-drupal/writing-secure-code-for-drupal)

## Drupal-specific Coding Standards

- We follow [Drupal Coding Standards](https://www.drupal.org/docs/develop/standards), which include PHP, CSS, JavaScript, Twig, YAML, and more.

- We use tools like the [Drupal Quality Checker](https://github.com/axelerant/drupal-quality-checker) to ensure that our code meets Drupal standards.

- We use namespaces so that we avoid namespace collisions.

- We always try to use Drupal functions where they exist. This helps with upgrades, among other things.

- We use a theme system. When theming, don’t hack module code when it is possible to use a theme function instead.

  - The corollary: when coding modules, keep all markup in theme functions.

- We use render arrays and theme functions, so we can separate logic and presentation.
  We try to keep modules that could be useful on another site completely generic from the start (a good technique is to develop on a fresh Drupal install rather than the actual site) and theme the site-specific stuff in your site theme.

- We use contrib modules (or write new ones!)

  - The Most Important Decision in Developing a Drupal Site: Contributed vs. custom development: When writing code, we try to think about abstracting functionality where appropriate. This makes it easier for us to contribute back to the larger community and also lets us recycle our work on different projects. Keep an eye on the horizon!

- We put any site text longer than a line or two in a settings field (or, at the very least, a variable).
