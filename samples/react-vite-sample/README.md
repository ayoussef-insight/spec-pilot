# React Vite Sample

A minimal React application scaffolded with the latest Vite template, demonstrating current best-practice project structure with reusable styling and theming.

## Features

- ⚡️ **Vite 7** - Lightning-fast development with HMR
- ⚛️ **React 19** - Latest React version
- 🎨 **Reusable Theming** - Centralised CSS custom properties for consistent styling
- 📦 **ESLint** - Pre-configured linting rules

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

Create an optimised production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Theming

The project uses a centralised theming system with CSS custom properties defined in `src/styles/theme.css`. This provides:

- Consistent colour palette with automatic light/dark mode support
- Reusable typography tokens
- Standardised spacing and sizing values
- Easy customisation across the entire application

To customise the theme, modify the CSS variables in `src/styles/theme.css`.

## Project Structure

```
src/
├── styles/
│   └── theme.css      # Centralised theme tokens
├── index.css          # Global styles using theme variables
├── App.jsx            # Main application component
└── main.jsx           # Application entry point
```

## Official Plugins

This template uses [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) with Babel for Fast Refresh.

For more information, see the [Vite documentation](https://vite.dev/).

