/** 34490 → "34.490 kr." */
export function kronur(upphaed: number): string {
  const tala = Math.round(upphaed)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${tala} kr.`;
}

/** "2026-08-11" → "11.08.2026" */
export function dagsetning(iso: string | null | undefined): string {
  if (!iso) return '–';
  const [ar, manudur, dagur] = iso.split('-');
  return `${dagur}.${manudur}.${ar}`;
}
