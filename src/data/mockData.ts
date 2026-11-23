import type { Category, Receipt, Reminder, User } from '../types';

/**
 * Mock data used until Supabase is connected (phase 4).
 * Note: category names are shown in the UI, so they stay in Icelandic.
 */

export const categories: Category[] = [
  { id: 'renovation', name: 'Framkvæmdir' },
  { id: 'garden', name: 'Garðurinn' },
  { id: 'vacation', name: 'Frí' },
];

export const receipts: Receipt[] = [
  {
    id: '1',
    product: 'Borvél',
    store: 'BYKO',
    purchaseDate: '2026-08-11',
    amount: 34490,
    categoryId: 'renovation',
    returnDeadline: '2026-09-11',
    warrantyUntil: '2027-08-11',
    imageUrl: null,
  },
  {
    id: '2',
    product: 'Lampi',
    store: 'IKEA',
    purchaseDate: '2026-07-25',
    amount: 15990,
    categoryId: null,
    returnDeadline: '2026-11-25',
    warrantyUntil: null,
    imageUrl: null,
  },
];

export const reminders: Reminder[] = [
  { id: 'r1', receiptId: '2', date: '2026-11-18', type: 'return' },
  { id: 'r2', receiptId: '1', date: '2027-08-04', type: 'warranty' },
];

export const currentUser: User = {
  id: 'u1',
  name: '',
  email: '',
};

export function findReceipt(id: string | undefined) {
  return receipts.find((r) => r.id === id);
}

export function findCategory(id: string | null | undefined) {
  return categories.find((c) => c.id === id);
}

/** Case-insensitive search on product and store */
export function matchesQuery(receipt: Receipt, query: string) {
  const q = query.trim().toLowerCase();
  return !q || receipt.product.toLowerCase().includes(q) || receipt.store.toLowerCase().includes(q);
}
