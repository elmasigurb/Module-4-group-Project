# Kvitt – leiðbeiningar fyrir Claude

Skólaverkefni (Module 4, hópverkefni). Notendurnir eru að læra, svo útskýrðu stuttlega hvað þú gerir og hvers vegna, og segðu skýrt frá þegar þau þurfa að gera eitthvað sjálf (búa til aðgang, setja inn lykla).

## Verkefnið
App sem heldur utan um kvittanir og ábyrgðir. Allur texti í viðmótinu er á íslensku.

## Kröfur
- React + TypeScript (strict), Vite, React Router (`react-router` v7)
- 2 API: **Claude API (vision)** til að lesa kvittanir og **Supabase** (gagnagrunnur, auth, storage)
- 1 MCP server sem við smíðum sjálf: `/mcp-server` (kvitt-mcp)

## Reglur
- API lyklar fara ALDREI í frontend kóðann. Claude API er kallað í gegnum Supabase Edge Function. Leyndarmál fara í `.env` (er í .gitignore) og ný gildi í `.env.example`.
- Týpurnar í `src/types` eru gagnalíkanið. Notið þær í appinu, Supabase og MCP servernum.
- Litir, letur og bil koma úr `src/styles/tokens.css`. Engin harðkóðuð gildi í components.
- Spyrjið áður en þið pushið á GitHub.

## Hönnun
Figma skjalið „Group project 3 Main“, síðan **Hi fi**, og ramminn **Kvitt · Viðmótseiningar** fyrir components. Notið Figma MCP til að lesa hönnunina. Gildin í `tokens.css` eru bráðabirgða og þarf að samstilla við Figma.

## Áfangar
1. ✅ Uppsetning: Vite, routing, möppuskipulag
2. Hönnunarkerfi: samstilla tokens og components við Figma
3. ✅ Skjáir með gervigögnum (`src/data/mockData.ts`), þarf að fínstilla við Figma
4. Supabase: töflur (með Row Level Security), auth, vistun kvittana, myndageymsla
5. Skönnun: Edge Function sem sendir mynd/PDF á Claude API og skilar `SkonnudKvittun` JSON
6. Áminningar fyrir skilafresti og ábyrgðir
7. MCP server (sjá `mcp-server/README.md`), prófa með MCP Inspector og tengja við Claude Desktop
