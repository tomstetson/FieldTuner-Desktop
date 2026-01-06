# FieldTuner Web

<div align="center">

**A modern web-based configuration editor for Battlefield 6**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

</div>

## Overview

FieldTuner Web is a browser-based companion to the FieldTuner desktop application. It provides a sleek, tactical command center interface for editing Battlefield 6 configuration files without installing any software.

### Features

- **150+ Settings** - Complete BF6 settings database with descriptions and ranges
- **5 Pro Presets** - Esports Pro, Competitive, Balanced, Quality, Ultra Quality
- **Real-time Search** - Quickly find settings by name or category
- **Change Tracking** - Visual diff showing original vs modified values
- **Drag & Drop** - Easy config file loading
- **Instant Export** - One-click download with timestamped filenames

### Tactical Command Center UI

The interface features a military-tech inspired design:
- Corner-cut cards and angular shapes
- Orbitron display font with Rajdhani body text
- Electric orange primary with cyan accents
- Scan-line effects and status indicators

## Quick Start

### Run Locally

```bash
cd fieldtuner-web
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
```

The `dist/` folder can be deployed to any static hosting service.

## Usage

1. **Upload** your `PROFSAVE_profile` config file (drag & drop or click to browse)
2. **Browse** settings by category or search for specific options
3. **Modify** values using sliders, toggles, and dropdowns
4. **Apply Presets** for quick optimization profiles
5. **Review** changes in the Changes tab
6. **Download** your modified config file

### Config File Location

| Platform | Path |
|----------|------|
| Steam | `Documents\Battlefield 6\settings\PROFSAVE_profile` |
| EA App | `Documents\Battlefield 6\settings\PROFSAVE_profile` |

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite 7** - Build tool
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons

## Project Structure

```
fieldtuner-web/
├── src/
│   ├── components/     # React components
│   ├── lib/           # Utilities and data
│   │   ├── configParser.ts
│   │   ├── presets.ts
│   │   └── settingsDatabase.ts
│   ├── types/         # TypeScript types
│   ├── App.tsx        # Main application
│   └── index.css      # Tactical design system
├── public/            # Static assets
└── package.json
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests |
| `npm run lint` | Run ESLint |

## License

MIT License - See [LICENSE](../LICENSE) for details.
