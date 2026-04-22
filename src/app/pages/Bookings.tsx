import { useState } from 'react';
import { Calendar, User, Car, Clock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const mockBookings = [
  { id: '1', customer: 'Juan Pérez', vehicle: 'BMW X5', startDate: '2026-04-25', endDate: '2026-04-30', status: 'Confirmada', total: 900 },
  { id: '2', customer: 'María García', vehicle: 'Mercedes-Benz S-Class', startDate: '2026-04-23', endDate: '2026-04-28', status: 'En Curso', total: 1750 },
  { id: '3', customer: 'Carlos López', vehicle: 'Toyota Camry', startDate: '2026-05-01', endDate: '2026-05-05', status: 'Confirmada', total: 340 },
  { id: '4', customer: 'Ana Martínez', vehicle: 'Ferrari F8 Tributo', startDate: '2026-04-26', endDate: '2026-04-27', status: 'Pendiente', total: 450 },
];

export function Bookings() {
  const { user } = useAuth();
  const [filter, setFilter] = useState('Todas');

  const filteredBookings = filter === 'Todas'
    ? mockBookings
    : mockBookings.filter(b => b.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmada': return 'bg-green-500/10 text-green-500';
      case 'En Curso': return 'bg-blue-500/10 text-blue-500';
      case 'Pendiente': return 'bg-orange-500/10 text-orange-500';
      case 'Completada': return 'bg-gray-500/10 text-gray-500';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1>{user?.role === 'admin' ? 'Todas las Reservas' : 'Mis Reservas'}</h1>
        <p className="text-muted-foreground">Gestiona las reservas de vehículos</p>
      </div>

      <div className="flex gap-3 mb-6">
        {['Todas', 'Confirmada', 'En Curso', 'Pendiente'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === status
                ? 'bg-primary text-primary-foreground'
                : 'bg-card border border-border hover:bg-muted'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {filteredBookings.map((booking) => (
          <div key={booking.id} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{booking.customer}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Car className="w-4 h-4 text-muted-foreground" />
                  <span>{booking.vehicle}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(booking.status)}`}>
                {booking.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Inicio</p>
                  <p className="text-sm">{booking.startDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Fin</p>
                  <p className="text-sm">{booking.endDate}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total</p>
                <p className="text-lg">${booking.total}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-border">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:opacity-90">
                Ver Detalles
              </button>
              {user?.role === 'admin' && (
                <>
                  <button className="px-4 py-2 border border-border rounded-lg text-sm hover:bg-muted">
                    Editar
                  </button>
                  <button className="px-4 py-2 border border-destructive text-destructive rounded-lg text-sm hover:bg-destructive/10">
                    Cancelar
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
