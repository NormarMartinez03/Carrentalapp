import { Link } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { Car, User, LogOut, Calendar } from 'lucide-react';

export function CustomerNavbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/browse" className="flex items-center gap-3">
            <Car className="w-8 h-8 text-primary" />
            <span className="text-xl font-medium">RentCar</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/browse"
              className="text-foreground hover:text-primary transition-colors"
            >
              Explorar
            </Link>
            <Link
              to="/my-bookings"
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Mis Reservas
            </Link>
            <Link
              to="/profile"
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Perfil
            </Link>
            <button
              onClick={logout}
              className="flex items-center gap-2 text-destructive hover:opacity-80 transition-opacity"
            >
              <LogOut className="w-4 h-4" />
              Salir
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
