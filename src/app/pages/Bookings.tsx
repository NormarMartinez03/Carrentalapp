import { useState } from 'react';
import { Calendar, User, Car, Clock, MapPin } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { formatDOP, formatUSD } from '../utils/currency';

const mockBookings = [
  { id: '1', customer: 'Juan Pérez', vehicle: 'Hyundai Tucson 2024', location: 'Santo Domingo', startDate: '2026-04-25', endDate: '2026-04-30', status: 'Confirmada', totalUSD: 475 },
  { id: '2', customer: 'María García', vehicle: 'Chevrolet Suburban', location: 'Punta Cana', startDate: '2026-04-23', endDate: '2026-04-28', status: 'En Curso', totalUSD: 900 },
  { id: '3', customer: 'Carlos López', vehicle: 'Kia Picanto', location: 'Santiago', startDate: '2026-05-01', endDate: '2026-05-05', status: 'Confirmada', totalUSD: 168 },
  { id: '4', customer: 'Ana Martínez', vehicle: 'Toyota Corolla Cross', location: 'La Romana', startDate: '2026-04-26', endDate: '2026-04-27', status: 'Pendiente', totalUSD: 88 },
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
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1>{user?.role === 'admin' ? 'Todas las Reservas' : 'Mis Reservas'}</h1>
        <p className="text-muted-foreground">Reservas activas por sucursal en República Dominicana</p>
      </div>

      <div className="flex gap-3 mb-6">
        {['Todas', 'Confirmada', 'En Curso', 'Pendiente'].map((status) => (
          <button key={status} onClick={() => setFilter(status)} className={`px-4 py-2 rounded-lg transition-colors ${filter === status ? 'bg-primary text-primary-foreground' : 'bg-card border border-border hover:bg-muted'}`}>
            {status}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {filteredBookings.map((booking) => (
          <div key={booking.id} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2"><User className="w-4 h-4 text-muted-foreground" /><span className="text-sm">{booking.customer}</span></div>
                <div className="flex items-center gap-2 mb-2"><Car className="w-4 h-4 text-muted-foreground" /><span>{booking.vehicle}</span></div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-muted-foreground" /><span className="text-sm">{booking.location}</span></div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(booking.status)}`}>{booking.status}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /><div><p className="text-xs text-muted-foreground">Inicio</p><p className="text-sm">{booking.startDate}</p></div></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /><div><p className="text-xs text-muted-foreground">Fin</p><p className="text-sm">{booking.endDate}</p></div></div>
              <div><p className="text-xs text-muted-foreground">Total</p><p className="text-base">{formatUSD(booking.totalUSD)} · {formatDOP(Math.round(booking.totalUSD * 59))}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
