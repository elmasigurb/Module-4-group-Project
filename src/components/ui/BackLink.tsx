import { Link } from 'react-router';
import Icon from './Icon';

interface BackLinkProps {
  to: string;
  /** Screen title shown next to the arrow */
  title: string;
}

export default function BackLink({ to, title }: BackLinkProps) {
  return (
    <Link to={to} className="back-link">
      <Icon name="back" size={16} />
      <h1 className="back-link__title">{title}</h1>
    </Link>
  );
}
