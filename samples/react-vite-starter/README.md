# React Vite Starter

A minimal React TypeScript application scaffolded with Vite, featuring a reusable CSS variable-based theming system.

## Features

- ⚡️ Vite for fast development and optimised builds
- ⚛️ React with TypeScript for type-safe development
- 🎨 CSS variable-based theming system with standard tokens (colours, spacing, typography)
- 🔥 Hot Module Replacement (HMR) for instant feedback

## Getting Started

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm

### Installation

Install the project dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Create a production build:

```bash
npm run build
```

The built files will be output to the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Theming

This project includes a CSS variable-based theming system located in `src/styles/theme.css`. The theme defines:

- **Colours**: Primary, secondary, background, text, and border colours with dark mode support
- **Spacing**: A consistent spacing scale from xs to 3xl
- **Typography**: Font families, sizes, weights, and line heights

All theme variables can be used throughout your application by referencing the CSS custom properties (e.g., `var(--color-primary)`).

## Project Structure

```
react-vite-starter/
├── src/
│   ├── styles/
│   │   └── theme.css       # CSS variable-based theme definitions
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## Learn More

- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
