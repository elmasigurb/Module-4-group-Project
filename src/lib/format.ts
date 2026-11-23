/** 34490 → "34.490 kr." (Icelandic format) */
export function formatISK(amount: number): string {
  const digits = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${digits} kr.`;
}

/** "2026-08-11" → "11.08.2026" (Icelandic format) */
export function formatDate(iso: string | null | undefined): string {
  if (!iso) return '–';
  const [year, month, day] = iso.split('-');
  return `${day}.${month}.${year}`;
}
