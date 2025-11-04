# Plan: Scaffold React Vite Sample

## Objectives
- Scaffold a React TypeScript application powered by the latest Vite under `samples/react-vite-starter` following project specs.
- Introduce a reusable CSS variable-based theming system covering colours, spacing, and typography while keeping other template defaults intact.

## Tasks
1. **Prepare workspace**
   - Confirm `samples/` directory exists or create it.
   - Use project folder name: `react-vite-starter`.
2. **Generate Vite React TypeScript template**
   - Run `npm create vite@latest react-vite-starter -- --template react-ts` inside `samples/`.
   - Accept defaults and ensure latest versions are installed.
3. **Install dependencies**
   - `cd` into the new sample project.
   - Run `npm install` to fetch dependencies locally.
4. **Add reusable CSS variable-based theming setup**
   - Create a global CSS file (e.g., `src/styles/theme.css`) with `:root` custom properties.
   - Define standard theme tokens: colours (primary, secondary, background, text), spacing scale, and typography (font families, sizes, weights).
   - Import the theme CSS file into the main application entry point.
   - Keep default Vite components unchanged - only establish the theming infrastructure.
5. **Update README**
   - Modify scaffolded README to reflect project name (`react-vite-starter`) and concise instructions for `npm install`, `npm run dev`, `npm run build`, and `npm run preview`.
6. **Verify scripts and structure**
   - Ensure `package.json` has expected scripts and dependencies referencing current React/Vite.
   - Confirm TypeScript configuration is present and functional.
7. **Document completion**
   - Note any important observations or deviations.

## Resources & Notes
- Use the specs in `.tasks/scaffold-react-vite-sample/specifications.md` as the source of truth.
- Prefer npm (not yarn/pnpm) to align with requirements.
- Keep customisations minimal: project naming (`react-vite-starter`), README updates, and the CSS variable-based theming layer.
- Template: `react-ts` (TypeScript)
- Theme scope: colours + spacing + typography
- Default components remain unchanged - theming infrastructure only.