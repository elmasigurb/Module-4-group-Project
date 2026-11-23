import { Link } from 'react-router';
import Icon, { type IconName } from './Icon';

interface CategoryTileProps {
  to: string;
  label: string;
  icon?: IconName;
}

export default function CategoryTile({ to, label, icon = 'folder' }: CategoryTileProps) {
  return (
    <Link to={to} className="category-tile">
      <span className="category-tile__label">{label}</span>
      <Icon name={icon} size={16} />
    </Link>
  );
}
