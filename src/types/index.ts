/**
 * Kvitt data model. The same types are used by the Supabase tables and the MCP server.
 * Dates are stored as ISO strings (YYYY-MM-DD).
 */

export interface Category {
  id: string;
  name: string;
}

export interface Receipt {
  id: string;
  product: string;
  store: string;
  purchaseDate: string;
  /** Amount in ISK */
  amount: number;
  categoryId: string | null;
  returnDeadline: string | null;
  warrantyUntil: string | null;
  /** URL of the receipt image/PDF in Supabase Storage */
  imageUrl: string | null;
  note?: string;
}

export type ReminderType = 'return' | 'warranty';

export interface Reminder {
  id: string;
  receiptId: string;
  /** The day the user should be reminded */
  date: string;
  type: ReminderType;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

/** What the Claude API returns after reading a photo of a receipt */
export interface ScannedReceipt {
  store: string | null;
  product: string | null;
  purchaseDate: string | null;
  amount: number | null;
  returnDeadline: string | null;
  warrantyUntil: string | null;
}
