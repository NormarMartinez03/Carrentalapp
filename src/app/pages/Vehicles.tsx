import { useState } from 'react';
import { Car, Plus, Search, Filter } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { rdFleet } from '../data/rdFleet';
import { formatDOP, formatUSD } from '../utils/currency';

const mockVehicles = rdFleet.map((car, index) => ({
  id: car.id,
  name: car.name,
  category: car.category,
  status: car.available ? 'Disponible' : index % 2 ? 'Rentado' : 'Mantenimiento',
  plate: `RD-${100 + index}`,
  priceUSD: car.priceUSD,
  priceDOP: car.priceDOP,
  location: car.location,
}));

export function Vehicles() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('Todos');

  const filteredVehicles = mockVehicles.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.plate.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'Todos' || vehicle.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Disponible': return 'bg-green-500/10 text-green-500';
      case 'Rentado': return 'bg-blue-500/10 text-blue-500';
      case 'Mantenimiento': return 'bg-orange-500/10 text-orange-500';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1>Gestión de Vehículos</h1>
          <p className="text-muted-foreground">Flota activa en República Dominicana</p>
        </div>
        {user?.role === 'admin' && (
          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            <Plus className="w-5 h-5" />
            Agregar Vehículo
          </button>
        )}
      </div>

      <div className="bg-card border border-border rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input type="text" placeholder="Buscar por nombre o placa..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring appearance-none">
              <option>Todos</option>
              <option>Disponible</option>
              <option>Rentado</option>
              <option>Mantenimiento</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-4">Vehículo</th>
                <th className="text-left p-4">Categoría</th>
                <th className="text-left p-4">Placa</th>
                <th className="text-left p-4">Sucursal</th>
                <th className="text-left p-4">Precio/Día</th>
                <th className="text-left p-4">Estado</th>
              </tr>
            </thead>
            <tbody>
              {filteredVehicles.map((vehicle) => (
                <tr key={vehicle.id} className="border-t border-border hover:bg-muted/50">
                  <td className="p-4"><div className="flex items-center gap-3"><div className="p-2 bg-primary/10 rounded-lg"><Car className="w-5 h-5 text-primary" /></div><span>{vehicle.name}</span></div></td>
                  <td className="p-4 text-muted-foreground">{vehicle.category}</td>
                  <td className="p-4">{vehicle.plate}</td>
                  <td className="p-4">{vehicle.location}</td>
                  <td className="p-4 text-sm">{formatUSD(vehicle.priceUSD)}<div className="text-muted-foreground">{formatDOP(vehicle.priceDOP)}</div></td>
                  <td className="p-4"><span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(vehicle.status)}`}>{vehicle.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
