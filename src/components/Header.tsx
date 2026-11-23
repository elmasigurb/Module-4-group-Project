import { Link } from 'react-router';
import Icon from './Icon';

/** Top bar on mobile. On desktop the logo moves to the sidebar (see Navigation). */
export default function Header() {
  return (
    <header className="app-header">
      <Link to="/" className="app-logo app-header__logo">
        Kvitt
      </Link>
      <Link to="/reminders" className="icon-button" aria-label="Áminningar">
        <Icon name="bell" size={18} />
      </Link>
    </header>
  );
}
