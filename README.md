# Kvitt

App sem heldur utan um kvittanir og ábyrgðir. Hópverkefni í Module 4.

**Tækni:** React + TypeScript (Vite), React Router, Supabase, Claude API (vision) og okkar eigin MCP server (`/mcp-server`).

## Byrja

```bash
npm install
cp .env.example .env   # fylla út gildin seinna (áfangi 4)
npm run dev
```

Opnið slóðina sem birtist (venjulega http://localhost:5173). Best er að skoða appið í síma-stærð (DevTools → Toggle device toolbar).

## Skipanir

| Skipun | Hvað hún gerir |
| --- | --- |
| `npm run dev` | Keyrir appið |
| `npm run build` | Athugar TypeScript og byggir |
| `npm run lint` | Keyrir ESLint |
| `npm run format` | Lagar uppsetningu kóða með Prettier |

## Möppuskipulag

```
src/
  components/   Endurnýtanlegir components (úr „Kvitt · Viðmótseiningar“)
  pages/        Einn skjár = ein skrá (úr Hi fi í Figma)
  data/         Gervigögn þar til Supabase er tengt
  lib/          Hjálparföll (t.d. sníða krónur og dagsetningar)
  styles/       Design tokens og almennt CSS
  types/        Gagnalíkan (deilt með MCP servernum)
mcp-server/     kvitt-mcp (áfangi 7)
```

## Skjáir og slóðir

| Skjár | Slóð |
| --- | --- |
| Heim | `/` |
| Skanna kvittun | `/skanna` |
| Yfirfara og vista | `/skanna/yfirfara` |
| Mínar kvittanir (Skoða safn) | `/kvittanir` |
| Skoða kvittun | `/kvittanir/:id` |
| Kvittun · Pappírsforskoðun | `/kvittanir/:id/kvittun` |
| Skoða flokk | `/flokkar/:id` |
| Áminningar | `/aminningar` |
| Mínar upplýsingar | `/eg` |

## Vinnulag í hópnum

- Hver vinnur á sinni grein: `git checkout -b feature/heiti`
- Sameinað í `main` með pull request
- `.env` fer **aldrei** á GitHub
