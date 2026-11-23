import { Link } from 'react-router';
import Icon from './Icon';

export default function Header() {
  return (
    <header className="app-header">
      <Link to="/" className="app-logo">
        Kvitt
      </Link>
      <Link to="/aminningar" className="icon-button" aria-label="Áminningar">
        <Icon name="bjalla" size={18} />
      </Link>
    </header>
  );
}
