---
title: "{{ replace .Name "-" " " | title }}"
date: "{{ time.Now.Format "2006-01-02" }}"
decision: "Decision summary goes here."
status: "proposed"
categories:
  - Category1
---

# {{ replace .Name "-" " " | title }}

## Context

Provide the context and background for the decision here.

## Decision

Detail the decision made, including any alternatives considered and reasons for the decision.

## Consequences

- **Positive:**
  - List positive consequences here.
- **Negative:**
  - List negative consequences here.

## Status

- **Proposed**
