---
title: Contributing to the Handbook
weight: 2
description: This handbook is not set in stone. We make mistakes, learn better methods, and update our practices. Our handbook should reflect that. This cannot happen without your help.
---

# Contributing to the Handbook

This handbook is not set in stone. We make mistakes, learn better methods, and update our practices. Our handbook should reflect that. This cannot happen without your help.

## How to decide where to place content

It is probably easier to define what content DOES NOT fit in the Axelerant Engineering Handbook. This is a list of categories or traits in content that make it unfit for the handbook. It is important to note that some amount of judicial application must be made in following these rules. To understand how to apply judgment, read the sections on the target audience and the intent of the handbook.

- Project-specific details.

- Operational routines and activities such as details of time logs, leave policies, project-specific communication, norms, etc.

- Technologies that are used on very few projects and not likely to be used often.
  Techniques and practices which are specific to just one customer and are not likely to be generalizable.

- Any details, technical or otherwise, that are easily found elsewhere. That is to say, that even for technical topics, the handbook is just meant to provide brief descriptions, references, and links to detailed documentation elsewhere.

- Any details of software engineering practices that are executed by the management. While there is a strong role of management in delivering software, that is not the intent of the engineering handbook.

### Flowchart

We currently have the below handbooks at Axelerant.

1. **Axelerant Handbook** applicable to everyone at Axelerant.

2. **Engineering Handbook** applicable to engineers at Axelerant.

3. **Delivery Handbook** (residing in the Delivery section of Axelerant Handbook) applicable to one or more Program(s) and projects and talks about how we deliver at Axelerant.

4. **Engagement Handbook** specific to the project.

```mermaid
flowchart TD
    Content(Content is)
    AxlHB(Axelerant Handbook)
    EngHB(Engineering Handbook)
    DelHB(Delivery Handbook)
    EggHB(Engagement Handbook)

    P1[engineering related]
    P2[delivery related]
    P3[non-delivery<br /><em>e.g., sales, marketing, etc.</em>]

    P1a{Do you think<br /> other projects would<br /> have a similar need?}
    P2a{Do you think<br /> other projects would<br /> have a similar need?}

    Content --> P1
    Content --> P2
    Content --> P3

    P1 -- Yes --> P1a
    P1a -- Yes --> EngHB
    P1a -- No --> EggHB

    P2 -- Yes --> P2a
    P2a -- Yes --> DelHB
    P2a -- No --> EggHB

    P3 -- <em>possibly</em> --> AxlHB
```

{{< details "Textual description of the flowchart above" >}}
Ask the following questions to yourself whenever you find that you are unsure whether the content you have needs to go into which handbook.

1. Is the content applicable for engineers alone (check the Engineering Handbook for what kind of content we already have)?

   - If the answer to the above question is yes, do you think that other projects would have a similar use case for engineers in the future?

     i. If the answer to the above is no, your Engagement Handbook would be the place where the content needs to go.

     ii. If yes, this content might need to go into the Engineering Handbook. Raise a PR against the Engineering Handbook and inform the Platform Team.

2. Is the content applicable to everyone in a project and related to how we deliver things?

   - If the answer to the above question is yes, do you think that other projects would have a similar use case in the future?

     i. If the answer to the above is no, your Engagement Handbook would be the place where the content needs to go.

     ii. If yes, this content might need to go into the Delivery Handbook. Discuss with the WSM team, they can guide you further.

3. Is the content applicable for everyone in a project however not related to delivery but involves other departments like Sales, Marketing, etc…?
   - If the answer to the above question is yes, this might be a potential candidate for Axelerant Handbook. Kindly check with the respective department head who can guide you further.

{{< /details >}}

### Need for judicial application

It is important to reiterate that the decision will involve discrete judgment and possibly, discussion. Use the above points and the flowchart as a reference, but in the end, apply your judgment. We are flexible in changing our stance wherever it makes sense. Create an issue, open a PR, or just send a message on Slack to talk about your content and where it can go in the engineering handbook.
