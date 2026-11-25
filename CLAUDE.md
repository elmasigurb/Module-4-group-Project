# Kvitt – instructions for Claude

School project (Module 4, group project). The team is learning, so briefly explain what you are doing and why, and say clearly when they need to do something themselves (create an account, add keys). The team usually talks to you in Icelandic, so reply in Icelandic.

## Language rules
- **UI text (everything the user sees in the app): Icelandic.**
- **Everything else: English.** Code, variable/function/file names, comments, commit messages, branch names, PR descriptions, README and other docs.

## The project
An app for keeping track of receipts, return deadlines and warranties.

## Requirements
- React + TypeScript (strict), Vite, React Router (`react-router` v7)
- 2 APIs: **Claude API (vision)** to read receipts, and **Supabase** (database, auth, storage)
- 1 MCP server we build ourselves: `/mcp-server` (kvitt-mcp)
- **Responsive:** must work on mobile and scale to desktop screens

## Rules
- API keys must NEVER be in frontend code. The Claude API is called through a Supabase Edge Function. Secrets go in `.env` (in .gitignore) and new variables are added to `.env.example`.
- `src/types` is the data model. Use it in the app, in Supabase and in the MCP server.
- Colors, fonts and spacing come from `src/styles/tokens.css`. No hard-coded values in components.
- Mobile first. Breakpoints: tablet ≥ 640px, desktop ≥ 900px (sidebar navigation). Every new screen must be checked at both mobile and desktop widths. Use the layout helpers in `global.css` (`.page`, `.page--narrow`, `.split`, `.receipt-list`, `.actions`).
- Components are split into `src/components/ui/` (reusable building blocks, exported from `ui/index.ts`) and `src/components/layout/` (AppLayout, Header, Navigation). Pages import from `../components/ui`.
- **Every new component in `ui/` gets a story** next to it (`ui/MyComponent.stories.tsx`) with `tags: ['autodocs']` and data from `src/data/mockData.ts`. Update the story when the component changes. Check with `npm run storybook` and `npx vitest --project storybook run`.
- Ask before pushing to GitHub.

## Design
Figma file "Group project 3 Main": the **Hi fi** page for screens and the **Kvitt · Viðmótseiningar** frame for components. Use the Figma MCP to read the design (configured in `.mcp.json`; each team member logs in with `/mcp` → figma). The Figma design is mobile only; the desktop layout is our own extension of it. The values in `tokens.css` are temporary and need to be synced with Figma.

## Phases
1. ✅ Setup: Vite, routing, project structure
2. Design system: Storybook component library set up (`npm run storybook`). Still need to sync tokens and components with Figma
3. ✅ Screens with mock data (`src/data/mockData.ts`), responsive. Needs fine-tuning against Figma
4. Supabase: tables (with Row Level Security), auth, saving receipts, image storage
5. Scanning: Edge Function that sends an image/PDF to the Claude API and returns `ScannedReceipt` JSON
6. Reminders for return deadlines and warranties
7. MCP server (see `mcp-server/README.md`), test with MCP Inspector and connect to Claude Desktop
