---
title: Project Configuration
weight: 1
description: Every project at Axelerant should include Claude Code configuration committed to the repository so the entire team works with shared context, permissions, and tooling.
---

# Project-Level AI Configuration

Claude Code reads configuration from the project directory. When this configuration is committed to the repository, every team member starts with the same context, permissions, and tool integrations. This is no different from how we treat DDEV configuration or linting rules — it's part of the project, not a personal preference.

See the [official documentation on memory and project configuration](https://docs.anthropic.com/en/docs/claude-code/memory) for how these files work.

## What every project should have

### CLAUDE.md

A project-level `.claude/CLAUDE.md` (or `CLAUDE.md` at the repo root) gives Claude context about the project: the stack, architecture patterns, conventions, and common pitfalls.

Our recommendation: keep this file under 200 lines. It loads on every session, so anything in it costs tokens on every interaction. Reference [skills]({{< relref "skills-and-workflows" >}}) for detailed workflows instead of inlining everything here.

Good things to include:

- The stack and key architectural decisions
- Conventions that aren't obvious from the code (naming patterns, file organization)
- Common mistakes to avoid on this specific project
- Commands to run for building, testing, and linting

Things to leave out:

- General programming knowledge (Claude already knows this)
- Content that duplicates what's in the code or README
- Long architecture diagrams or troubleshooting guides (put these in rules or skills)

### Settings and permissions

`.claude/settings.json` stores project-level permissions. Without this, every new session starts from scratch on what commands Claude is allowed to run. Define the permissions once and commit them.

### MCP server configuration

`.claude/.mcp.json` defines which [MCP servers](https://modelcontextprotocol.io/) are available in the project. Common ones we use:

- **Atlassian** — for reading Jira tickets and Confluence pages directly from Claude
- **Playwright** — for browser automation and visual testing
- **Figma** — for design-to-code workflows on decoupled projects

Only configure the MCP servers the project actually uses. Each connected server adds tool definitions to the context window. Run `/mcp` in Claude Code to see what's active and disable anything idle.

### Ignore file

`.claudeignore` excludes directories and files from Claude's indexing. Always exclude `node_modules`, `vendor`, large SQL dumps, and other files that would waste context. This follows the same pattern as `.gitignore`.

### Scoped rules

`.claude/rules/*.md` files contain instructions that activate only when touching specific paths. For example, a rule that only applies when editing files under `src/api/` or a Drupal-specific rule for custom modules. This keeps the main CLAUDE.md lean while still providing targeted guidance.

## Commit these files

All of the above should be committed to the repository. When a new team member clones the project, they get the full AI configuration without any manual setup.

## Global configuration

Engineers may also maintain a global `~/.claude/CLAUDE.md` that applies across all projects. This is personal — it might include your preferred model settings, general coding style preferences, or workflow habits. The [official docs on configuration hierarchy](https://docs.anthropic.com/en/docs/claude-code/settings) cover how global and project settings interact.
