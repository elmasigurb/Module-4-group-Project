import type { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router';

type Variant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  /** Ef `to` er gefið verður takkinn að hlekk */
  to?: string;
}

export default function Button({ variant = 'primary', to, className = '', ...props }: ButtonProps) {
  const classes = `btn btn--${variant} ${className}`.trim();
  if (to) {
    return (
      <Link to={to} className={classes}>
        {props.children}
      </Link>
    );
  }
  return <button type="button" className={classes} {...props} />;
}
