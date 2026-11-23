/**
 * Gagnalíkan Kvitt. Sömu týpur verða notaðar í Supabase töflum og MCP servernum.
 * Dagsetningar eru geymdar sem ISO strengir (YYYY-MM-DD).
 */

export interface Flokkur {
  id: string;
  nafn: string;
}

export interface Kvittun {
  id: string;
  vara: string;
  verslun: string;
  kaupdagur: string;
  /** Upphæð í krónum */
  upphaed: number;
  flokkurId: string | null;
  skilafrestur: string | null;
  abyrgdTil: string | null;
  /** Slóð á mynd/PDF af kvittuninni í Supabase Storage */
  myndUrl: string | null;
  athugasemd?: string;
}

export type AminningTegund = 'skilafrestur' | 'abyrgd';

export interface Aminning {
  id: string;
  kvittunId: string;
  /** Dagurinn sem á að minna á */
  dagsetning: string;
  tegund: AminningTegund;
}

export interface Notandi {
  id: string;
  nafn: string;
  netfang: string;
}

/** Það sem Claude API skilar eftir að hafa lesið mynd af kvittun */
export interface SkonnudKvittun {
  verslun: string | null;
  vara: string | null;
  kaupdagur: string | null;
  upphaed: number | null;
  skilafrestur: string | null;
  abyrgdTil: string | null;
}
