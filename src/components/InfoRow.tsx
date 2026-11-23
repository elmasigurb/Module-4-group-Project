interface InfoRowProps {
  label: string;
  value: string;
  mono?: boolean;
}

/** Lína í upplýsingaspjaldi: merki til vinstri, gildi til hægri */
export default function InfoRow({ label, value, mono = true }: InfoRowProps) {
  return (
    <div className="info-row">
      <span className="info-row__label">{label}</span>
      <span className={mono ? 'mono' : ''}>{value}</span>
    </div>
  );
}
