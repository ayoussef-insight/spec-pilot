---
description: This file contains instructions for using C# effectively.
applyTo: '**/*.cs, **/*.csproj, **/*.sln, **/*.razor, **/*.cshtml'
---
When writing or editing C# code, follow these guidelines to ensure clarity, maintainability, and consistency with best practices:

## Project Information
- Target Framework: .NET 10
- Language Version: C# 14
- SDK Version: 10.x

## General Guidelines
- Follow the official C# coding conventions as outlined by Microsoft.
- Use meaningful and descriptive names for variables, methods, classes, and namespaces.
- Keep methods short and focused on a single task or responsibility.
- Use properties instead of public fields for data encapsulation.
- Implement error handling using try-catch blocks where appropriate.
- Write XML documentation comments for public methods and classes to provide clear explanations of their purpose and usage

## Formatting
- Use consistent indentation (typically 4 spaces per indentation level).
- Place opening braces on the same line as the declaration.
- Use blank lines to separate logical sections of code for better readability.

## Language Features
- Utilise LINQ for data manipulation and querying collections.
- Prefer async/await for asynchronous programming to improve responsiveness.
- Use pattern matching and switch expressions for cleaner and more readable code.
- Leverage nullable reference types to enhance code safety and reduce null reference exceptions.

## Testing
- Write unit tests for critical components and business logic.
- Use mocking frameworks to isolate dependencies in tests.
- Follow the Arrange-Act-Assert pattern in test methods for clarity.    
- Ensure tests are independent and can be run in any order.

