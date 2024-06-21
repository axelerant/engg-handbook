---
title: Task Estimation
weight: 14
description: In our Agile projects, estimates define the work size needed to meet acceptance criteria or project milestones. We use story points, not hours, to estimate effort, considering complexity, work volume, and risk. This emphasizes that story points are a measure of relative effort, not actual time. Using story points helps us improve estimation accuracy and project delivery.
---

# Task Estimation

In our Agile projects, estimates define the work size needed to meet acceptance criteria or project milestones. We use story points, not hours, to estimate effort, considering complexity, work volume, and risk. This emphasizes that story points are a measure of relative effort, not actual time. Using story points helps us improve estimation accuracy and project delivery.

While estimating software engineering tasks can be challenging due to various factors, best practices can significantly enhance accuracy.

## Effective Task Estimation Strategies

- **Break Down the Task into Smaller Sub-Tasks**: Breaking down tasks into smaller sub-tasks is essential for understanding their complexity and estimating effort accurately. It helps identify dependencies and allows for individual testing of components. Smaller sub-tasks make it easier to manage the overall project and ensure each part is thoroughly considered and planned.
- **Use Historical Data**: we leverage historical data from similar tasks for insights into timeframes and potential challenges. However, ensure the data aligns with current requirements for accuracy. Validating this data against the new task's specifics helps refine estimates.
- **Team Involvement**: Involving team members in the estimation process is crucial for gaining diverse perspectives and identifying potential roadblocks. Team collaboration ensures that various aspects of the task are considered, leading to more accurate estimates. Engaging the team also fosters a sense of ownership and accountability, contributing to better project outcomes.
- **Grooming and Estimation Details**: we ensure thorough grooming of tasks with necessary details added to Jira fields. Technical architects (TA) provide guidance if needed on the approach. For the cases where we have to split up the hours, add more details, estimate hours are high, etc, we use the [Master Estimation template](https://docs.google.com/spreadsheets/d/1wXAFXsSbiQfaMSCMGr-7GvWHYh2O9fc5mhUOQgJsos8/edit?gid=683107236#gid=683107236). We also use templates such as the [CDM ticket estimation template](https://docs.google.com/spreadsheets/d/1NExM6FlLe0kWwhFNPp4RBi8E1D7iixRQHPVriP22B1Y/edit?gid=0#gid=0) only for ticket-level estimation. These templates enabled us to systematically document estimates and facilitate iterative reviews, ensuring accuracy and transparency in estimating efforts. We provide the implementation details to help the client understand where the hours will be utilized.

## Our Estimation Process

Our company emphasizes estimation throughout the development lifecycle.

Teams discuss tasks and assign story points based on complexity and effort at the Sprint planning meetings.

We can also use techniques like Planning Poker. In Planning Poker, the team votes on the effort required (in story points) for a task. Through discussion and explanation of extreme estimates, the team aims for a consensus, revealing hidden complexities and improving estimates over time.

## Verifying Estimates and QA Collaboration

In our company, verifying estimates involves thoroughly reviewing the ticket to ensure the estimate aligns with the listed work and design components. We validate the Definition of Done and check if all acceptance criteria are met. It's essential to confirm there are no discrepancies or additional tasks not mentioned in the description. For reopened tickets, we reassess the remaining work, understand why it was reopened, and ensure any dependencies or impacts on completed work are addressed. This process helps maintain accuracy and clarity in our estimations.

We also closely collaborate with QA throughout the estimation process. This includes engaging QA in defining acceptance criteria for each ticket and collaborating on estimates to ensure they consider testing efforts.

## Approval

When estimates are approved, we log the total approved hours in the 'Original estimate' field and the remaining hours in the 'Remaining hours' field. The assignee is initially responsible for grooming and estimation, followed by reviews from the TA, QA, or other team members. If there are sub-tasks, estimate those specifically. We always charge the client the actual or highest hours, whichever is lower. If any changes affect estimates, inform the PM and team immediately with updated estimates and reasons.
