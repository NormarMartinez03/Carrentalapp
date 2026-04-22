import { useNavigate } from 'react-router';
import { ShieldAlert } from 'lucide-react';

export function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-destructive/10 rounded-full mb-6">
          <ShieldAlert className="w-10 h-10 text-destructive" />
        </div>
        <h1 className="mb-4">Acceso Denegado</h1>
        <p className="text-muted-foreground mb-8">
          No tienes permisos para acceder a esta página
        </p>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90"
        >
          Volver al Dashboard
        </button>
      </div>
    </div>
  );
}
