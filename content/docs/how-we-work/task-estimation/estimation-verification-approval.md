---
title: Estimation Verification and Approval
weight: 6
description: To ensure project success, it is crucial to verify and approve all estimates. This process includes validating estimates, ensuring they meet acceptance criteria, and obtaining necessary approvals. Proper verification and approval help mitigate risks, manage expectations, and ensure efficient resource allocation for reliable project outcomes.
---

# Estimation Verification and Approval

To ensure project success, it is crucial to verify and approve all estimates. This process includes validating estimates, ensuring they meet acceptance criteria, and obtaining necessary approvals. Proper verification and approval help mitigate risks, manage expectations, and ensure efficient resource allocation for reliable project outcomes.

## Verifying Estimates

### Verifying Estimates and Information in the Ticket

Go through the ticket and validate the estimate along with the work listed in the ticket. Validate the task with the designs and confirm all components/elements are achievable for your task within the given estimate. Ensure the Definition of Done is clearly mentioned in the ticket, often supported by Acceptance Criteria which helps understand the scope of work.

Check for any comments that might differ or present additional tasks not mentioned in the task description or fields. Address the following questions:

- Is some work going on that shall impact what I am about to do?
- Are there any open questions?
- Are the answers given satisfactory and not contradicting any other requirements (Accessibility, performance, UX, etc.)?
- Is the estimate valid based on my understanding of the work?
- Am I clear about the solution and any blockers?

### Verifying Estimates and Information in Reopened Tickets

When tickets are reopened or partially implemented tasks are pending, align around the available estimate to avoid confusion. Check the amount of work needed to achieve the desired goal. Review comments and discussions to understand why the task was pending or reopened, and ensure all information is accurate.

Consider the following:

- Is the pending work unblocked from the dependency that had blocked it initially?
- Any impact of the new work on already completed work? In short, check if any rework is needed.

## Acceptance Criteria

Collaborate with QA to add Acceptance Criteria (AC) in each ticket in the Acceptance Criteria ticket field, along with the snapshot of the estimates grid. Collaborate with QA on the estimates (TA can be consulted only if required for a review) and then assign them for the client’s approval. If the Developer/QA doesn’t have Supp comment access, assign the ticket to the PM.

The ticket status should be set to Customer Approval and assigned to the client with a comment mentioning the client, cc’ing PM, TA, and QA. In the case of a Supp ticket, there is no need to tag TA, QA, or developer.

If AC is changed at any point in time, re-validate the grooming and estimates.

## Approval

Whenever any estimates are approved, add the total approved high hours in the 'Original estimate' field of the ticket, and in the 'Remaining hours' field, add the 'Original estimate' minus the logged hours.

The primary responsibility for grooming and estimation falls on the assignee. It will then be reviewed by the TA, QA, or any other team members on a project-need basis.

Estimate the last level of a ticket ready for execution. If a ticket has any sub-tasks, then estimate those; otherwise, estimate the ticket itself (Check with PM, as based on projects, we either create a sub-task or a Task).
