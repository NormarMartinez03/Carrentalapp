import { Calendar, Car, MapPin, Clock, Download } from 'lucide-react';

const mockBookings = [
  {
    id: '1',
    vehicle: 'BMW X5',
    image: 'https://images.unsplash.com/photo-1775714362517-df61b089e232?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzc2ODE3NzM4fDA&ixlib=rb-4.1.0&q=80&w=400',
    startDate: '2026-04-25',
    endDate: '2026-04-30',
    location: 'Madrid Centro',
    status: 'Confirmada',
    total: 900,
    bookingNumber: 'RC-001234',
  },
  {
    id: '2',
    vehicle: 'Toyota Camry',
    image: 'https://images.unsplash.com/photo-1687992659809-db04dbcaee2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzc2ODE3NzM4fDA&ixlib=rb-4.1.0&q=80&w=400',
    startDate: '2026-05-01',
    endDate: '2026-05-05',
    location: 'Barcelona Aeropuerto',
    status: 'Pendiente',
    total: 340,
    bookingNumber: 'RC-001235',
  },
  {
    id: '3',
    vehicle: 'Mercedes-Benz S-Class',
    image: 'https://images.unsplash.com/photo-1760976396211-5546ce83a400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzc2ODE3NzM4fDA&ixlib=rb-4.1.0&q=80&w=400',
    startDate: '2026-03-15',
    endDate: '2026-03-20',
    location: 'Valencia Centro',
    status: 'Completada',
    total: 1750,
    bookingNumber: 'RC-001150',
  },
];

export function MyBookings() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmada': return 'bg-green-500/10 text-green-500';
      case 'Pendiente': return 'bg-orange-500/10 text-orange-500';
      case 'Completada': return 'bg-blue-500/10 text-blue-500';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1>Mis Reservas</h1>
          <p className="text-muted-foreground">Gestiona y visualiza tus reservas de vehículos</p>
        </div>

        <div className="grid gap-6">
          {mockBookings.map((booking) => (
            <div key={booking.id} className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                <div className="md:col-span-1">
                  <img
                    src={booking.image}
                    alt={booking.vehicle}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>

                <div className="md:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3>{booking.vehicle}</h3>
                      <p className="text-sm text-muted-foreground">Reserva #{booking.bookingNumber}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Recogida</p>
                        <p className="text-sm">{booking.startDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Devolución</p>
                        <p className="text-sm">{booking.endDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Ubicación</p>
                        <p className="text-sm">{booking.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Total</p>
                    <p className="text-2xl">${booking.total}</p>
                  </div>

                  <div className="space-y-2 mt-4">
                    <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm hover:opacity-90">
                      Ver Detalles
                    </button>
                    {booking.status === 'Confirmada' && (
                      <button className="w-full flex items-center justify-center gap-2 border border-border px-4 py-2 rounded-lg text-sm hover:bg-muted">
                        <Download className="w-4 h-4" />
                        Descargar Voucher
                      </button>
                    )}
                    {booking.status === 'Pendiente' && (
                      <button className="w-full border border-destructive text-destructive px-4 py-2 rounded-lg text-sm hover:bg-destructive/10">
                        Cancelar Reserva
                      </button>
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
            <p className="text-muted-foreground mb-6">Explora nuestro catálogo y reserva tu primer vehículo</p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90">
              Explorar Vehículos
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
