import { Link, NavLink } from 'react-router';
import Icon, { type IconName } from './Icon';

interface NavItem {
  to: string;
  /** Visible UI text (Icelandic) */
  label: string;
  icon: IconName;
  end?: boolean;
  isScan?: boolean;
}

const items: NavItem[] = [
  { to: '/', label: 'Heim', icon: 'home', end: true },
  { to: '/receipts', label: 'Kvittanir', icon: 'receipt' },
  { to: '/scan', label: 'Skanna kvittun', icon: 'camera', isScan: true },
  { to: '/reminders', label: 'Áminningar', icon: 'bell' },
  { to: '/profile', label: 'Ég', icon: 'user' },
];

/**
 * Main navigation.
 * Mobile: fixed bar at the bottom of the screen.
 * Desktop (≥ 900px): sidebar on the left with labels. Layout is handled in components.css.
 */
export default function Navigation() {
  return (
    <nav className="nav" aria-label="Aðalvalmynd">
      <Link to="/" className="app-logo nav__logo">
        Kvitt
      </Link>
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            ['nav__item', item.isScan ? 'nav__item--scan' : '', isActive ? 'is-active' : '']
              .join(' ')
              .trim()
          }
        >
          <Icon name={item.icon} size={item.isScan ? 22 : 18} />
          <span className="nav__label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
