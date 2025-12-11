---
description: Provide project context and coding guidelines for JavaScript/TypeScript files.
applyTo: '**/*.ts, **/*.js, **/*.tsx, **/*.jsx, **/*.cshtml'
---
Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.

# JavaScript/TypeScript Instructions

When writing or editing JavaScript or TypeScript code, follow these guidelines to ensure clarity, maintainability, and consistency with best practices:

## General Guidelines
- Always use pnpm as the package manager for managing dependencies.
- Follow the official TypeScript coding conventions as outlined by Microsoft.
- Use meaningful and descriptive names for variables, functions, classes, and modules.
- Keep functions short and focused on a single task or responsibility.
- Use interfaces and types to define data structures and ensure type safety.
- Implement error handling using try-catch blocks and proper error propagation.
- Write JSDoc comments for public functions and classes to provide clear explanations of their purpose and usage.

## React-Specific Guidelines
- Use TypeScript when working with React components to leverage type safety.
- Use functional components and React Hooks for state management and side effects.
- Ensure components are reusable and composable.
- Use PropTypes or TypeScript interfaces to define component props.
- Structure components in a way that promotes separation of concerns and maintainability.
- Use styled-components or CSS modules for component-specific styling.
