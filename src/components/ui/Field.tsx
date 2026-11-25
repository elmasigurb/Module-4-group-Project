import { useId, type InputHTMLAttributes } from 'react';

interface FieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  /** `compact` is the smaller field used on the profile screen (Figma "Field / Compact") */
  size?: 'default' | 'compact';
  /** Monospace value, for dates and amounts (Figma "Field / … mono") */
  mono?: boolean;
}

/** Text input with a label above it (used on the review and profile screens) */
export default function Field({ label, id, size = 'default', mono = false, ...props }: FieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const classes = ['field', size === 'compact' && 'field--compact', mono && 'field--mono']
    .filter(Boolean)
    .join(' ');
  return (
    <label className={classes} htmlFor={fieldId}>
      <span className="field__label">{label}</span>
      <input id={fieldId} className="field__input" {...props} />
    </label>
  );
}
