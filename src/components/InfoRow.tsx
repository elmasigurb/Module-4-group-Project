interface InfoRowProps {
  label: string;
  value: string;
  mono?: boolean;
}

/** A row in an info card: label on the left, value on the right */
export default function InfoRow({ label, value, mono = true }: InfoRowProps) {
  return (
    <div className="info-row">
      <span className="info-row__label">{label}</span>
      <span className={mono ? 'mono' : ''}>{value}</span>
    </div>
  );
}
