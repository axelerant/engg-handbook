---
title: Guideline
weight: 2
---

# Review Guidelines

## HTML and Twig

- Indent by 2 spaces at a time. Don’t use tabs or mix tabs and spaces for indentation. Rely on tools like editorconfig.
- All code has to be lowercase. This applies to HTML element names, attributes, attribute values (unless text/CDATA), CSS selectors, properties, and property values (with the exception of strings).
- Remove trailing white spaces. Trailing white spaces are unnecessary and can complicate diffs.
- Explain code as needed, where possible. Use comments to explain code: What does it cover, what purpose does it serve, and why is the respective solution used or preferred?
- (This should be required along with HTML, CSS, Javascript ….)
- Use HTML according to its purpose. Use elements for what they have been created for. For example, use heading elements for headings, p elements for paragraphs, an a element for anchors, etc.
- Using HTML according to its purpose is important for accessibility, reuse, and code efficiency reasons.
- For multimedia, such as images, videos, and animated objects via canvas, make sure to offer alternative access. For images that means the use of meaningful alternative text (alt) and for video and audio transcripts and captions, if available.
- For file size optimization and scannability purposes, consider omitting optional tags. The HTML5 specification defines what tags can be omitted.

## CSS and Sass

- Separate words in class names by hyphens or underscores. Do not concatenate words and abbreviations in selectors by any characters other than hyphens or underscores, in order to improve understanding and scannability.
- Use transform animations instead of width, height, top, and left to optimize rendering.
- Avoid qualifying class names with type selectors. Unless necessary (for example with helper classes), do not use element names in conjunction with classes.
- As CSS supports variables, it must declare root variables where it is required.
- For complex DOM placements to show the difference between desktop and mobile prefer CSS Grid instead of Javascript.
- Try to avoid !important.
- Avoid id attributes. Prefer class attributes for styling and data attributes for scripting.
- Avoid unnecessary ancestor selectors as it affects the rendering performance.
- Use shorthand properties where possible as it helps with code efficiency and readability.
- Do not use units after 0 values unless they are required.

### Declaration order

If declarations are to be consistently ordered, they should be simple to understand among the team. CSS properties order is enforced through a [stylint rule](https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md) package.

### Nesting

- Limit the nesting to 2 levels deep.
- Always place @extend statements on the first lines of a declaration block.
- Where possible, group @include statements at the top of a declaration block, after any @extend statements.
- Using BEM and SMACSS conventions. This will avoid using too many nesting levels and with a single level can write effective CSS code.

## Javascript

- If using jQuery for DOM manipulations, check whether the context is used or not. It is helpful when finding DOM elements.
- Identify use any deprecated methods like use on() instead of bind() / live ()
- Use const over let and avoid var.
- Constant values should be replaced with const variables having meaningful names
- Wrap statements/expressions prone to failing in try/catch blocks
- Avoid using nested if/else statements. Return early instead.
- Each method should focus on a specific task. If not, break it up into smaller, focused methods. It will help in reusability and unit testing.
- Write considering multiple use cases on a page. Use .forEach/.each where necessary.
- Refactor the function in case it accepts more than four parameters. Break it down into smaller functions that are accepted by the parent function.
- Are variable and function names so short that they are not meaningful at a glance? Longer names (be reasonable, of course) are more likely to be meaningful and self-documenting. Furthermore, searching globally for a longer name will return fewer results, which makes code-digging easier.
- Check that all console logs and debuggers are removed.
- How are you listening to events on elements that can be re-rendered? Via jQuery event delegation? That way, you don’t have to set up listeners again every time the element is re-rendered. It is easy to miss the re-add, especially when there are multiple render paths.

## Drupal

- Drupal has a specific set of coding standards that must be followed for the best practices. So these should be found at <https://www.drupal.org/docs/develop/standards/coding-standards>
- Installing the Coder module will help to check through all Drupal coding standards. If we integrate with while git commit developer should be able to notice any missed things as it provides suggestions.
- Look for unrelated code reversions in merge requests. That is, if you see code changes that aren't related to what the developer is trying to do, there's something wrong. In most cases, this means the developer's branch is out-of-date with the main development branch. He or she should fetch and merge that branch from the origin repository, fix any conflicts, and then add it to the merge request.
- Look for debugging code that wasn't removed such as dd(), drupal_debug(), dsm(), kpr(), and other output functions.
- Look for Git conflict symbols such as "<<<", ">>>" and "===". These usually indicate a botched conflict resolution.
