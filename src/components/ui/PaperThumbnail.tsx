/**
 * Small drawing of a paper receipt (Figma "Kvitt / Paper thumbnail").
 * Used as a placeholder until we show the real receipt image from Supabase Storage.
 */
export default function PaperThumbnail() {
  return (
    <div className="paper-thumb" aria-hidden="true">
      {Array.from({ length: 6 }, (_, i) => (
        <span key={i} className="paper-thumb__line" />
      ))}
    </div>
  );
}
