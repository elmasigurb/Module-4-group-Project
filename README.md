# Kvitt

An app for keeping track of receipts, return deadlines and warranties. Module 4 group project.

The app UI is in Icelandic. Code, comments, commits and docs are in English.

**Tech:** React + TypeScript (Vite), React Router, Supabase, Claude API (vision) and our own MCP server (`/mcp-server`).

## Getting started

```bash
npm install
cp .env.example .env   # fill in the values later (phase 4)
npm run dev
```

Open the URL that appears (usually http://localhost:5173).

The app is responsive:

- **Mobile** (< 640px): single column with a bottom navigation bar, matching the Figma design
- **Tablet** (≥ 640px): wider grids, buttons side by side
- **Desktop** (≥ 900px): sidebar navigation and multi-column layouts

Use DevTools → Toggle device toolbar to test the different sizes.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Project structure

```
src/
  components/   Reusable components (from "Kvitt · Viðmótseiningar" in Figma)
  pages/        One file per screen (from the "Hi fi" page in Figma)
  data/         Mock data until Supabase is connected
  lib/          Helpers (e.g. formatting ISK amounts and dates)
  styles/       Design tokens and global CSS
  types/        Data model (shared with the MCP server)
mcp-server/     kvitt-mcp (phase 7)
```

## Screens and routes

| Screen (Figma name) | Component | Route |
| --- | --- | --- |
| Heim | `Home` | `/` |
| Skanna kvittun | `ScanReceipt` | `/scan` |
| Yfirfara og vista | `ReviewReceipt` | `/scan/review` |
| Skoða safn / Mínar kvittanir | `Receipts` | `/receipts` |
| Skoða kvittun | `ReceiptDetail` | `/receipts/:id` |
| Kvittun · Pappírsforskoðun | `ReceiptPaperView` | `/receipts/:id/paper` |
| Skoða flokk | `CategoryDetail` | `/categories/:id` |
| Áminningar | `Reminders` | `/reminders` |
| Mínar upplýsingar | `Profile` | `/profile` |

## Team workflow

- Everyone works on their own branch: `git checkout -b feature/name`
- Merge into `main` through pull requests
- Commit messages in English
- `.env` is **never** committed
