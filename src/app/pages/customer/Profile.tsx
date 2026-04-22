import { useAuth } from '../../contexts/AuthContext';
import { User, Mail, Phone, MapPin, CreditCard, Shield } from 'lucide-react';

export function Profile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1>Mi Perfil</h1>
          <p className="text-muted-foreground">Gestiona tu información personal y preferencias</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="mb-6">Información Personal</h3>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Nombre Completo</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={user?.name || ''}
                      className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={user?.email || ''}
                      className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Teléfono</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      placeholder="+1 809 555 1200"
                      className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Dirección</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Av. Abraham Lincoln, Santo Domingo"
                      className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90">
                  Guardar Cambios
                </button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="mb-6">Método de Pago</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded">
                      <CreditCard className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p>•••• •••• •••• 4532</p>
                      <p className="text-xs text-muted-foreground">Vence 12/2027</p>
                    </div>
                  </div>
                  <button className="text-primary text-sm hover:underline">Editar</button>
                </div>
                <button className="w-full border border-border px-4 py-3 rounded-lg hover:bg-muted transition-colors">
                  Agregar Nueva Tarjeta
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="mb-4">Estado de la Cuenta</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Tipo de Cliente</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Regular</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Reservas Totales</span>
                  <span>8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Puntos</span>
                  <span>240</span>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="mb-4">Seguridad</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm">Cambiar Contraseña</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm">Verificación en 2 Pasos</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/20 border border-border rounded-lg p-6">
              <h4 className="mb-2">Actualiza a Premium</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Accede a descuentos exclusivos y beneficios especiales
              </p>
              <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90">
                Más Información
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
