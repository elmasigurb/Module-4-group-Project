import { Link } from 'react-router';
import Icon, { type IconName } from './Icon';

interface CategoryTileProps {
  to: string;
  label: string;
  icon?: IconName;
}

/** Folder-shaped link to a category or section (Figma "Kvitt / Folder tab") */
export default function CategoryTile({ to, label, icon = 'folder-open' }: CategoryTileProps) {
  return (
    <Link to={to} className="category-tile">
      <span className="category-tile__label">{label}</span>
      <Icon name={icon} size={18} />
    </Link>
  );
}
