---
title: Skills and Workflows
weight: 2
description: We encode our delivery processes into reusable Claude Code skills so that project knowledge accumulates over time instead of starting from scratch every session.
---

# Skills and Automated Workflows

The difference between using Claude Code conversationally and using it effectively is skills. A skill is a structured instruction set that tells Claude exactly how to approach a specific type of work on a project. Instead of explaining your project's conventions every session, you encode them once and invoke them by name.

For how skills work technically, see the [official skills documentation](https://docs.anthropic.com/en/docs/claude-code/skills).

## Our approach: skills as institutional knowledge

We treat skills as the place where project-specific knowledge lives. A good skill encodes:

- **Project conventions** — the architecture patterns, naming rules, and file organization that are specific to this project
- **Past mistakes** — things that went wrong and what the skill should do differently
- **Quality gates** — verification steps that must pass before the skill considers its work done

Skills load on demand, not on every message. This makes them a better place for detailed workflows than CLAUDE.md, which loads every time.

## Iteration logs

The most impactful practice we've found is maintaining iteration logs inside skills. After every use of a skill, record what went well, what broke, and what to do differently next time. The skill evolves with every use — Claude doesn't repeat mistakes because the fix is encoded in the skill itself.

Teams on our PRM project saw Figma-to-code workflows improve significantly over successive iterations: each round of learnings reduced redundant API calls, improved component reuse, and eliminated repeated errors.

## Examples from our projects

### Drupal SDLC Plugin

The [Drupal SDLC Plugin](https://axelerant.atlassian.net/wiki/spaces/AH/pages/5886083085) is a Claude Code plugin built for Drupal projects at Axelerant. It ships with 11 skills covering the full development lifecycle:

- `/work-on-jira-ticket` — reads a Jira ticket, generates a spec, builds, validates, tests, and raises a PR
- `/spec-writer` — converts a ticket or description into a structured spec with acceptance criteria and test mapping
- `/config-builder` — generates Drupal config YAML from natural language
- `/validate` — runs the complete quality gate: PHP lint, GrumPHP, config round-trip, visual screenshots, tests
- `/pr-reviewer` — reviews a PR diff for security, AC coverage, and risk

The plugin also includes hooks that block writes to protected files and run PHP syntax checks on every edit. See the [full documentation on Confluence](https://axelerant.atlassian.net/wiki/spaces/AH/pages/5886083085) for setup and usage.

### Project-specific skill catalogs

Several teams have built skill catalogs tailored to their projects:

- **PRM (Next.js + Magento)** — 10 skills covering Figma-to-UI, API integration, unit and e2e test generation, ticket-to-PR automation, and Jira task creation
- **CDM teams** — skills for Pattern Lab scaffolding, Drupal integration, implementation details generation, and structured code review

These catalogs are shared in **#wg-ai-native-engineering** on Slack. If you build skills that could benefit other teams, share them there.

## Building your own skills

Start with the tasks your team repeats most often. A good first skill is usually one that:

- Follows a consistent sequence of steps every time
- Requires project-specific knowledge that Claude wouldn't know on its own
- Has clear verification criteria (tests pass, lint is clean, config is valid)

The [official documentation](https://docs.anthropic.com/en/docs/claude-code/skills) covers the technical format. What matters more is the content: be specific about your project's patterns, include the mistakes you've learned from, and define what "done" looks like.
