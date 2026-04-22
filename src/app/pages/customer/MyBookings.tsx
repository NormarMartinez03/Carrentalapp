import { Calendar, Car, MapPin, Clock, Download } from 'lucide-react';
import { formatDOP, formatUSD } from '../../utils/currency';

const mockBookings = [
  { id: '1', vehicle: 'Hyundai Tucson 2024', image: 'https://images.unsplash.com/photo-1549925862-9903fdd2306d?auto=format&fit=crop&w=400&q=80', startDate: '2026-04-25', endDate: '2026-04-30', location: 'Santo Domingo', status: 'Confirmada', totalUSD: 475, bookingNumber: 'RD-001234' },
  { id: '2', vehicle: 'Kia Picanto', image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=400&q=80', startDate: '2026-05-01', endDate: '2026-05-05', location: 'Santiago', status: 'Pendiente', totalUSD: 168, bookingNumber: 'RD-001235' },
];

export function MyBookings() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmada': return 'bg-green-500/10 text-green-500';
      case 'Pendiente': return 'bg-orange-500/10 text-orange-500';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1>Mis Reservas</h1>
          <p className="text-muted-foreground">Historial de reservas en República Dominicana.</p>
        </div>

        <div className="grid gap-6">
          {mockBookings.map((booking) => (
            <div key={booking.id} className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                <div className="md:col-span-1"><img src={booking.image} alt={booking.vehicle} className="w-full h-40 object-cover rounded-lg" /></div>

                <div className="md:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div><h3>{booking.vehicle}</h3><p className="text-sm text-muted-foreground">Reserva #{booking.bookingNumber}</p></div>
                    <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(booking.status)}`}>{booking.status}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /><div><p className="text-xs text-muted-foreground">Recogida</p><p className="text-sm">{booking.startDate}</p></div></div>
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /><div><p className="text-xs text-muted-foreground">Devolución</p><p className="text-sm">{booking.endDate}</p></div></div>
                    <div className="flex items-center gap-2 col-span-2"><MapPin className="w-4 h-4 text-primary" /><div><p className="text-xs text-muted-foreground">Ubicación</p><p className="text-sm">{booking.location}</p></div></div>
                  </div>
                </div>

                <div className="md:col-span-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Total</p>
                    <p className="text-lg">{formatUSD(booking.totalUSD)}</p>
                    <p className="text-sm text-muted-foreground">{formatDOP(Math.round(booking.totalUSD * 59))}</p>
                  </div>

                  <div className="space-y-2 mt-4">
                    <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm hover:opacity-90">Ver Detalles</button>
                    {booking.status === 'Confirmada' && (
                      <button className="w-full flex items-center justify-center gap-2 border border-border px-4 py-2 rounded-lg text-sm hover:bg-muted"><Download className="w-4 h-4" />Descargar Voucher</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {mockBookings.length === 0 && (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <Car className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3>No tienes reservas</h3>
          </div>
        )}
      </div>
    </div>
  );
}
