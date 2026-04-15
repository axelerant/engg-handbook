---
title: Development Practices
weight: 3
description: Our expectations for how engineers use AI in their daily work — what to do, what to avoid, and how to stay effective.
---

# How We Use AI in Development

AI tools are powerful but they require discipline. These are our expectations for how engineers at Axelerant work with AI.

## Human in the loop

AI augments your capability. It does not replace your judgment. Always review AI-generated code — it's rare not to find something to fix or improve.

Be aware of cognitive biases that come with AI assistance:

- **Automation bias** — over-relying on AI suggestions because they look confident
- **Anchoring** — difficulty thinking beyond the AI's initial suggestion
- **Framing effect** — accepting the AI's phrasing or approach at face value
- **Sunk cost fallacy** — reluctance to discard AI-generated code you've already invested time reviewing

If a solution from the AI isn't quickly helping or you feel you're losing control, revert the changes and try a different approach. Sometimes writing the code yourself is faster.

## Session discipline

- **Use `/clear` between tasks.** Stale conversation history wastes tokens and can confuse context.
- **Separate implementation from review.** If you ask Claude to build a feature and then review it in the same session, it will also review all the failed attempts and exploratory work. Instead, do a `git diff` and review in a separate session for objectivity.
- **Use Plan Mode for complex work.** For multi-file changes or architectural decisions, use Shift+Tab to enter Plan Mode before implementation. This prevents expensive rework.
- **Use `/effort` for simple tasks.** Deep reasoning on a single-file change wastes tokens. Lower the thinking budget when the task is straightforward.

## Model selection

Claude Code supports multiple models. Pick the right one for the task:

| Task | Model |
| ------ | ------- |
| Complex architecture, root cause analysis | Opus |
| Everyday tasks, most ticket work | Sonnet |
| Simple lookups, single-file operations | Haiku |

## Token efficiency

Every token costs money and context space. A few habits that help:

- Keep [CLAUDE.md under 200 lines]({{< relref "project-setup" >}}) — it loads on every session
- Disconnect unused MCP servers (`/mcp` to manage)
- Use [skills]({{< relref "skills-and-workflows" >}}) for repeated workflows — they load only when called
- Reference files by path instead of pasting content into the chat
- Use sub-agents for large tasks: Claude can spawn parallel agents instead of doing everything in one context window

## Data protection

These rules are non-negotiable:

- **Use only company-approved tools and subscriptions.** No free or personal accounts for work.
- **Never share client code, proprietary data, or credentials** with any AI tool.
- **Sanitize sensitive data** before sharing context, even with providers that claim data won't be used for training. If you need to query sensitive logic, reformulate it to be generic and anonymized.
- **Be transparent with clients** about AI usage. Acknowledge their concerns and follow any client-specific policies.

## Workflow integration

AI works best when it's connected to the systems we already use:

- **Jira** — always read the ticket (including comments) before starting work. Use the Atlassian MCP connector when available to pull ticket context directly.
- **Slack** — reference relevant Slack threads for decision context when discussing implementation approaches.
- **Git** — work on feature branches. Never push directly to `main` or `master`. Use separate sessions for PR creation and review.
- **Sentry** — check Sentry for error context before debugging production issues.

## Open source contributions

When contributing to open source projects, be especially thoughtful about AI-generated code. See our [open source contribution guidelines]({{< relref "../open-source-contribution" >}}) for more on responsible use of automated tools in community contributions.

## Sharing what you learn

We improve our AI practices through shared experience. When you discover something that works well — a skill that saves time, a workflow pattern, a model selection insight — share it in **#wg-ai-native-engineering** on Slack. These learnings feed back into our project configurations, shared skills, and this handbook.
