---
title: Task Breakdown
weight: 2
description: Task breakdown is crucial for accurate estimation, whether we use hours, story points, or any other technique. Breaking down tasks into smaller pieces improves the accuracy of our estimates and minimizes errors.
---

# Task Breakdown

Task breakdown is crucial for accurate estimation, whether we use hours, story points, or any other technique. Breaking down tasks into smaller pieces improves the accuracy of our estimates and minimizes errors.

## Why should we break down tasks?

Breaking tasks into smaller, easily digestible chunks helps us plan our work better. It helps identify dependencies and ensures no aspect of our task is overlooked. Additionally, it facilitates the testing of individual parts, leading to more accurate estimates and better monitoring.

Breaking down tasks also helps identify sub-tasks that can be done in parallel, enabling the Project Manager (PM) or Technical Architect (TA) to assign these to other developers, speeding up the achievement of the end goal.

## Breaking down solutions

Breaking down problems allows for a step-wise approach to solutions, making it easier to get help if we encounter issues. If we have a well-defined task breakdown, we can isolate problems and seek assistance for specific issues. Discussing with the TA may reveal missed scenarios or requirements, which can be addressed separately without hindering the progress of existing work.

Breaking down tasks and solutions makes it easy to isolate blockers and problem areas. It also allows team members to pick up incomplete tasks in emergencies, sharing clear progress and pending work. Creating a Work-in-Progress (WIP) Pull Request (PR) enables easier review and tracking of work done.

### Example Scenario

(Note the important questions that have come up while breaking down the task which might not be directly captured in the ticket)

**Task**: Create a listing page with an AJAX filter

**Subtasks**: (Breaking down the task, you can create JIRA subtasks or document the same under implementation details and ask relevant questions)

- Create a view

  - **Question**: Do we need any no-results text?

  - **Question**: How many items to show? 16?

  - **Question**: Does the number of items to be configurable by the admin?

  - **Question**: If yes, Ok if configuration exists in the code and can be updated via config, or do we need a UI?

- Create Filters using a Better-exposed filter module

  - **Question**: In mobile, we need a filter screen, for which we need to write some JS to adjust markup accordingly, is there a separate task for the same or we are to do it in the same task

  - **Question**: Where do we show the selected filters, is there a remove filters link or reset filters link?

  - **Question**: Are the filters working in an AND scenario or OR scenario

  - **Question**: Is Theming of the page part of this task?

- Theme the listing area

  - Theming the grid for different breakpoints.

- Theme the Filters

  - Theming a filter screen for showing all filters in a separate modal on mobile.

  - **Question**: Will BE work on the different markup or JS needed to achieve a different filter screen on mobile? Is there any FE needed or we will have to only theme the mobile filter screen

  - **Question**: Will the markup changes be done via JS or via TWIG or via module hooks (Form API)

**Solution**: (Breaking down the solution, you can create JIRA subtasks or document the same under implementation details)

- **BE**:

  - Create a view

    - View page/block

    - View configs

  - Install and configure the BEF module

    - While doing this you find that one of the fields you want to have as a filter is not available in the CT.

    - This is a good example of where the PM/TA might decide that either we should increase the estimate to do this as part of this task, or create a separate ticket and integrate that field later in the filters.

  - Export the configs for the view and filters block

  - Write `hook_update`

  - Test `hook_update`

- **FE**:

  - Style the listing grid area

  - Style the filters

  - Write the JS and markup changes for the mobile filter screen, if not done via BE.

  - Style the filter screen on mobile.
