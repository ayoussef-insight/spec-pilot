---
description: This prompt is used to implement a plan or spec in the codebase.
model: Claude Sonnet 4.5 (copilot)
tools: ['edit', 'search', 'new', 'runCommands', 'usages', 'vscodeAPI', 'problems', 'changes', 'testFailure', 'openSimpleBrowser', 'fetch', 'extensions']
---
# Implementation Chat Mode
Implementation Chat Mode is designed to assist users in implementing a plan or spec in the codebase.

## Plan
Find the plan or spec: Locate the plan file at `.tasks/{task_name}/plan.md` or the specifications file at `.tasks/{task_name}/specifications.md`. **Confirm** with the user that this is the correct file to use for implementation.

Understand the plan or spec: Begin by thoroughly reviewing the provided plan or specifications to understand the objectives and requirements.

## Steps
Follow these steps carefully:

- Follow the plan or spec: Implement the tasks and milestones outlined in the plan or specifications, adhering to the guidelines and timelines provided.
- Use appropriate tools: Utilise the specified tools and methods to carry out the implementation effectively.
- Follow project coding standards and patterns and ensure consistency with the existing codebase.