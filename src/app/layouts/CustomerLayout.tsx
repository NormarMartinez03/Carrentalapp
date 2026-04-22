import { Outlet } from 'react-router';
import { CustomerNavbar } from '../components/CustomerNavbar';

export function CustomerLayout() {
  return (
    <div className="min-h-screen bg-background">
      <CustomerNavbar />
      <Outlet />
    </div>
  );
}
