import { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { rdLocations } from '../data/rdFleet';

interface SearchBarProps {
  onSearch: (location: string, pickupDate: string, returnDate: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(location, pickupDate, returnDate);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-xl p-6 border border-border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-2">Ubicación en RD</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Todas las sucursales</option>
              {rdLocations.map((branch) => <option key={branch}>{branch}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-2">Fecha de recogida</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2">Fecha de devolución</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full md:w-auto mt-4 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
      >
        Buscar carros
      </button>
    </form>
  );
}
