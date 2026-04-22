import { NavLink } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import {
  LayoutDashboard,
  Car,
  Users,
  FileText,
  Settings,
  Calendar,
  BarChart3,
  DollarSign,
  MapPin,
  UserCircle,
  LogOut
} from 'lucide-react';

export function Sidebar() {
  const { user, logout } = useAuth();

  const adminMenuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/vehicles', icon: Car, label: 'Vehículos' },
    { path: '/bookings', icon: Calendar, label: 'Reservas' },
    { path: '/customers', icon: Users, label: 'Clientes' },
    { path: '/agents', icon: UserCircle, label: 'Agentes' },
    { path: '/reports', icon: BarChart3, label: 'Reportes' },
    { path: '/revenue', icon: DollarSign, label: 'Ingresos' },
    { path: '/locations', icon: MapPin, label: 'Ubicaciones' },
    { path: '/settings', icon: Settings, label: 'Configuración' },
  ];

  const agentMenuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/vehicles', icon: Car, label: 'Vehículos' },
    { path: '/bookings', icon: Calendar, label: 'Mis Reservas' },
    { path: '/customers', icon: Users, label: 'Clientes' },
    { path: '/contracts', icon: FileText, label: 'Contratos' },
    { path: '/profile', icon: UserCircle, label: 'Mi Perfil' },
  ];

  const menuItems = user?.role === 'admin' ? adminMenuItems : agentMenuItems;

  return (
    <aside className="w-64 bg-card border-r border-border h-screen flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <Car className="w-8 h-8 text-primary" />
          <div>
            <h2 className="text-lg">RentCar Pro</h2>
            <p className="text-xs text-muted-foreground capitalize">{user?.role}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-border">
        <div className="mb-3 px-4">
          <p className="text-sm">{user?.name}</p>
          <p className="text-xs text-muted-foreground">{user?.email}</p>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}
