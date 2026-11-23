import { NavLink } from 'react-router';
import Icon, { type IconName } from './Icon';

interface NavItem {
  to: string;
  label: string;
  icon: IconName;
  end?: boolean;
}

const items: NavItem[] = [
  { to: '/', label: 'Heim', icon: 'heim', end: true },
  { to: '/kvittanir', label: 'Kvittanir', icon: 'kvittun' },
  { to: '/skanna', label: 'Skanna', icon: 'myndavel' },
  { to: '/aminningar', label: 'Áminningar', icon: 'bjalla' },
  { to: '/eg', label: 'Ég', icon: 'notandi' },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Aðalvalmynd">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            [
              'bottom-nav__item',
              item.icon === 'myndavel' ? 'bottom-nav__item--scan' : '',
              isActive ? 'is-active' : '',
            ].join(' ')
          }
        >
          <Icon name={item.icon} size={item.icon === 'myndavel' ? 22 : 18} />
          <span className={item.icon === 'myndavel' ? 'sr-only' : ''}>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
