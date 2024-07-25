---
title: Task Breakdown
weight: 2
description: Task breakdown is crucial for accurate estimation, whether we use hours, story points, or any other technique. Breaking down tasks into smaller pieces improves the accuracy of our estimates and minimizes errors.
---

# Task Breakdown

Task breakdown is essential for accurate estimation, improving estimate accuracy, and minimizing errors by breaking tasks into smaller pieces.

## Why should we break down tasks?

Breaking tasks into smaller chunks helps plan work better, identify dependencies, and ensure thorough coverage. It facilitates testing individual parts, leading to more accurate estimates and better monitoring. It also identifies sub-tasks that can be done in parallel, speeding up the project.

## Breaking down solutions

A step-wise approach makes it easier to isolate and address issues. Discussing with the TL can reveal missed scenarios or requirements. This method helps isolate blockers and allows team members to pick up incomplete tasks in emergencies, with clear progress and pending work. Creating a Work-in-Progress (WIP) Pull Request (PR) enables easier review and tracking.

### Example Scenario

(Note the important questions that have come up while breaking down the task which might not be directly captured in the ticket)

**Task**: Create a listing page with an AJAX filter

**Subtasks**: (Breaking down the task, you can create JIRA subtasks or document the same under implementation details and ask relevant questions)

- Create a view

  - Do we need no-results text?
  - How many items to show? 16?
  - Should the number of items be configurable by the admin?
  - If yes, is a code configuration sufficient, or is a UI needed?

- Create Filters using a Better-exposed filter module

  - For mobile, do we need a separate filter screen task?
  - Where to show selected filters? Include remove/reset filters link?
  - Are filters working in an AND or OR scenario?

- Is theming of the page part of this task?

- Theme the listing area
  - Theme the grid for different breakpoints.
- Theme the Filters.
  - Theme a filter screen for mobile.
  - Will BE work on different markup/JS for mobile filter screen? Any FE needed?
  - Will markup changes be done via JS, TWIG, or module hooks (Form API)?

**Solution**: (Breaking down the solution, you can create JIRA subtasks or document the same under implementation details)

- **BE**:

  - Create a view

    - View page/block

    - View configs

  - Install and configure the BEF module

    - While doing this you find that one of the fields you want to have as a filter is not available in the CT.

    - This is a good example of where the PM/TL might decide that either we should increase the estimate to do this as part of this task, or create a separate ticket and integrate that field later in the filters.

  - Export the configs for the view and filters block

  - Write `hook_update`

  - Test `hook_update`

- **FE**:

  - Style the listing grid area

  - Style the filters

  - Write the JS and markup changes for the mobile filter screen, if not done via BE.

  - Style the filter screen on mobile.
