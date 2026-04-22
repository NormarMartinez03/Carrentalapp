import { UserPlus, Mail, Phone, TrendingUp } from 'lucide-react';

const mockAgents = [
  { id: '1', name: 'Agent User', email: 'agent@rentcar.com', phone: '+34 612 111 222', bookings: 8, revenue: 2340, status: 'Activo' },
  { id: '2', name: 'Laura Fernández', email: 'laura@rentcar.com', phone: '+34 623 333 444', bookings: 12, revenue: 3850, status: 'Activo' },
  { id: '3', name: 'Miguel Torres', email: 'miguel@rentcar.com', phone: '+34 634 555 666', bookings: 15, revenue: 4200, status: 'Activo' },
  { id: '4', name: 'Sofia Ruiz', email: 'sofia@rentcar.com', phone: '+34 645 777 888', bookings: 6, revenue: 1890, status: 'Activo' },
];

export function Agents() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1>Agentes</h1>
          <p className="text-muted-foreground">Gestiona el equipo de agentes</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
          <UserPlus className="w-5 h-5" />
          Nuevo Agente
        </button>
      </div>

      <div className="grid gap-4">
        {mockAgents.map((agent) => (
          <div key={agent.id} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3>{agent.name}</h3>
                <p className="text-sm text-muted-foreground">{agent.bookings} reservas gestionadas</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-500">
                {agent.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm">{agent.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Teléfono</p>
                  <p className="text-sm">{agent.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Comisiones</p>
                  <p className="text-sm">${agent.revenue}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-border">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:opacity-90">
                Ver Detalles
              </button>
              <button className="px-4 py-2 border border-border rounded-lg text-sm hover:bg-muted">
                Editar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
