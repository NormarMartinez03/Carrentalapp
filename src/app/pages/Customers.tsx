import { useState } from 'react';
import { Search, UserPlus, Phone, Mail } from 'lucide-react';

const mockCustomers = [
  { id: '1', name: 'Juan Pérez', email: 'juan@example.com', phone: '+34 612 345 678', bookings: 5, status: 'Activo' },
  { id: '2', name: 'María García', email: 'maria@example.com', phone: '+34 623 456 789', bookings: 3, status: 'Activo' },
  { id: '3', name: 'Carlos López', email: 'carlos@example.com', phone: '+34 634 567 890', bookings: 8, status: 'VIP' },
  { id: '4', name: 'Ana Martínez', email: 'ana@example.com', phone: '+34 645 678 901', bookings: 1, status: 'Nuevo' },
  { id: '5', name: 'Pedro Sánchez', email: 'pedro@example.com', phone: '+34 656 789 012', bookings: 12, status: 'VIP' },
];

export function Customers() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = mockCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'VIP': return 'bg-purple-500/10 text-purple-500';
      case 'Activo': return 'bg-green-500/10 text-green-500';
      case 'Nuevo': return 'bg-blue-500/10 text-blue-500';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1>Clientes</h1>
          <p className="text-muted-foreground">Gestiona tu base de clientes</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
          <UserPlus className="w-5 h-5" />
          Nuevo Cliente
        </button>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar clientes por nombre o email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredCustomers.map((customer) => (
          <div key={customer.id} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3>{customer.name}</h3>
                <p className="text-sm text-muted-foreground">{customer.bookings} reservas realizadas</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(customer.status)}`}>
                {customer.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm">{customer.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Teléfono</p>
                  <p className="text-sm">{customer.phone}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-4 pt-4 border-t border-border">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:opacity-90">
                Ver Perfil
              </button>
              <button className="px-4 py-2 border border-border rounded-lg text-sm hover:bg-muted">
                Historial
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
