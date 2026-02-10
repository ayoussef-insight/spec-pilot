---
description: Provide project context and coding guidelines for Python files.
applyTo: '**/*.py, **/*.pyi, **/pyproject.toml'
---
Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.

## Project Information
- Python Version: 3.13
- Package Manager: uv 0.6.x
- Type Checker: mypy 1.15+
- Linter: ruff 0.9+
- Test Framework: pytest 8.3+

# Python Instructions

When writing or editing Python code, follow these guidelines to maintain clarity, reliability, and consistency across the codebase:

## General Guidelines
- Follow PEP 8 style conventions and use .flake8 to enforce style compliance.
- Use uv for package management and pyproject.toml for dependency specification.
- Use type hints for all public functions, methods, and module-level variables to support static analysis.
- Prefer descriptive names for modules, functions, classes, variables, and constants; keep naming consistent with their purpose.
- Handle errors explicitly with targeted exceptions; avoid bare `except` clauses and include helpful error messages.
- Use f-strings for string formatting unless interpolation requires `str.format` or templates.

## Documentation and Comments
- Provide module and function docstrings that outline purpose, parameters, return values, and exceptional behaviour.
- Keep inline comments brief and purposeful, focusing on intent or non-obvious decisions rather than obvious code behaviour.

## Testing and Tooling
- Write unit tests alongside new features or bug fixes using `pytest`; structure tests to mirror the package layout.
- Prefer dependency injection or fixtures to isolate external services during tests.
- Ensure code is compatible with static type checkers (e.g. `mypy`) and linters configured in the project.

