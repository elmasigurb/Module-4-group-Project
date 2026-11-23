# kvitt-mcp

Our own MCP server for Kvitt (phase 7). It lets Claude search and work with the user's receipts.

**Status:** not started. Built after the app can save receipts to Supabase.

## Planned tools

| Tool | What it does |
| --- | --- |
| `search_receipts` | Search by store, product, date or category |
| `get_receipt` | Get all details for one receipt |
| `get_expiring_warranties` | Receipts whose warranty expires within X days |
| `get_spending_by_category` | Total spending per category |
| `create_reminder` | Create a reminder for a receipt |

## Tech

TypeScript, `@modelcontextprotocol/sdk`, stdio transport, zod. Connects to the same Supabase database as the app and reuses the types in `src/types`.
