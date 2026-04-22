import { useAuth } from '../contexts/AuthContext';
import { Car, Calendar, Users, DollarSign, TrendingUp, AlertCircle } from 'lucide-react';

export function Dashboard() {
  const { user } = useAuth();

  const adminStats = [
    { label: 'Vehículos Totales', value: '48', icon: Car, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Reservas Activas', value: '23', icon: Calendar, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: 'Clientes', value: '156', icon: Users, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { label: 'Ingresos del Mes', value: '$45,230', icon: DollarSign, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  ];

  const agentStats = [
    { label: 'Mis Reservas', value: '8', icon: Calendar, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: 'Clientes Atendidos', value: '24', icon: Users, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { label: 'Vehículos Disponibles', value: '15', icon: Car, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Comisiones', value: '$2,340', icon: TrendingUp, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  ];

  const stats = user?.role === 'admin' ? adminStats : agentStats;

  const recentActivity = user?.role === 'admin'
    ? [
        { id: 1, type: 'Nueva Reserva', description: 'BMW X5 - Juan Pérez', time: 'Hace 5 min' },
        { id: 2, type: 'Vehículo Devuelto', description: 'Mercedes-Benz S-Class', time: 'Hace 1 hora' },
        { id: 3, type: 'Nuevo Cliente', description: 'María García registrada', time: 'Hace 2 horas' },
        { id: 4, type: 'Mantenimiento', description: 'Ferrari F8 - Servicio programado', time: 'Hace 3 horas' },
      ]
    : [
        { id: 1, type: 'Reserva Confirmada', description: 'BMW X5 - Juan Pérez', time: 'Hace 5 min' },
        { id: 2, type: 'Cliente Contactado', description: 'Seguimiento a María García', time: 'Hace 1 hora' },
        { id: 3, type: 'Contrato Firmado', description: 'Toyota Camry - Carlos López', time: 'Hace 2 horas' },
        { id: 4, type: 'Entrega Programada', description: 'Mercedes-Benz AMG mañana 10:00', time: 'Hace 3 horas' },
      ];

  return (
    <div>
      <div className="mb-8">
        <h1>Bienvenido, {user?.name}</h1>
        <p className="text-muted-foreground">Panel de control - {user?.role === 'admin' ? 'Administrador' : 'Agente'}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <h3 className="text-2xl mb-1">{stat.value}</h3>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="mb-4">Actividad Reciente</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">{activity.type}</p>
                  <p className="text-xs text-muted-foreground">{activity.description}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="mb-4">Vehículos en Mantenimiento</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="text-sm">Ferrari F8 Tributo</p>
                <p className="text-xs text-muted-foreground">Servicio programado</p>
              </div>
              <span className="text-xs bg-orange-500/10 text-orange-500 px-2 py-1 rounded">En proceso</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="text-sm">Porsche 911</p>
                <p className="text-xs text-muted-foreground">Cambio de aceite</p>
              </div>
              <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded">Completado</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="text-sm">BMW X5</p>
                <p className="text-xs text-muted-foreground">Revisión 10,000 km</p>
              </div>
              <span className="text-xs bg-blue-500/10 text-blue-500 px-2 py-1 rounded">Programado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
