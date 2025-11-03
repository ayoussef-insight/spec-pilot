# Plan: Scaffold React Vite Sample

## Objectives
- Scaffold a React application powered by the latest Vite under `samples/` following project specs.
- Introduce a reusable styling/theming scaffold while keeping other template defaults intact.

## Tasks
1. **Prepare workspace**
   - Confirm `samples/` directory exists or create it.
   - Choose a descriptive sample project folder name.
2. **Generate Vite React template**
   - Run `npm create vite@latest <project-name> -- --template react` inside `samples/`.
   - Accept defaults and ensure latest versions are installed.
3. **Install dependencies**
   - `cd` into the new sample project.
   - Run `npm install` to fetch dependencies locally.
4. **Add reusable styling/theming setup**
   - Implement a centralised styling entry point (e.g. global CSS variables or theme provider) without pulling extra dependencies.
   - Ensure theme tokens are easy to consume by future components.
5. **Update README**
   - Modify scaffolded README to reflect project name and concise instructions for `npm install`, `npm run dev`, `npm run build`, and `npm run preview`.
6. **Verify scripts and structure**
   - Ensure `package.json` has expected scripts and dependencies referencing current React/Vite.
7. **Document completion**
   - Note any important observations or deviations.

## Resources & Notes
- Use the specs in `.tasks/scaffold-react-vite-sample/specifications.md` as the source of truth.
- Prefer npm (not yarn/pnpm) to align with requirements.
- Keep customisations minimal: naming, README updates, and the reusable styling/theming layer.