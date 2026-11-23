import { Outlet } from 'react-router';
import Header from './Header';
import Navigation from './Navigation';

export default function AppLayout() {
  return (
    <div className="app-shell">
      <Navigation />
      <div className="app-content">
        <Header />
        <main className="app-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
