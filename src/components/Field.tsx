import type { InputHTMLAttributes } from 'react';

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

/** Input reitur með merki fyrir ofan (sbr. „Yfirfara og vista“ og „Mínar upplýsingar“) */
export default function Field({ label, id, ...props }: FieldProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, '-');
  return (
    <label className="field" htmlFor={fieldId}>
      <span className="field__label">{label}</span>
      <input id={fieldId} className="field__input" {...props} />
    </label>
  );
}
