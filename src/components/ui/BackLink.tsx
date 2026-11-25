import { Link } from 'react-router';
import Icon from './Icon';

interface BackLinkProps {
  to: string;
  /** Screen title shown next to the arrow */
  title: string;
}

/** Back arrow (44 × 44 touch target) followed by the screen title */
export default function BackLink({ to, title }: BackLinkProps) {
  return (
    <Link to={to} className="back-link">
      <span className="back-link__arrow">
        <Icon name="back" size={22} />
      </span>
      <h1 className="back-link__title">{title}</h1>
    </Link>
  );
}
