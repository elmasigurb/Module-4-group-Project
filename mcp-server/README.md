# kvitt-mcp

Okkar eigin MCP server fyrir Kvitt (áfangi 7). Hann gerir Claude kleift að leita í og vinna með kvittanir notandans.

**Staða:** ekki byrjað. Byggt eftir að appið getur vistað kvittanir í Supabase.

## Fyrirhuguð tools

| Tool | Hvað það gerir |
| --- | --- |
| `leita_kvittana` | Leitar eftir verslun, vöru, dagsetningu eða flokki |
| `saekja_kvittun` | Sækir allar upplýsingar um eina kvittun |
| `abyrgdir_ad_renna_ut` | Kvittanir þar sem ábyrgð rennur út innan X daga |
| `yfirlit_eftir_flokkum` | Leggur saman útgjöld í hverjum flokki |
| `baeta_vid_aminningu` | Býr til áminningu fyrir kvittun |

## Tækni

TypeScript, `@modelcontextprotocol/sdk`, stdio transport, zod. Tengist sama Supabase gagnagrunni og appið og notar týpurnar í `src/types`.
