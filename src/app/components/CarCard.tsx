import { Car } from '../types';
import { Users, Briefcase, Cog } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onSelect: (car: Car) => void;
}

export function CarCard({ car, onSelect }: CarCardProps) {
  return (
    <div
      className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onSelect(car)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
        {car.featured && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
            Featured
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2">
          <h3>{car.name}</h3>
          <p className="text-muted-foreground text-sm">{car.category}</p>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{car.seats}</span>
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            <span>{car.bags}</span>
          </div>
          <div className="flex items-center gap-1">
            <Cog className="w-4 h-4" />
            <span>{car.transmission}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div>
            <span className="text-2xl">${car.price}</span>
            <span className="text-muted-foreground text-sm">/day</span>
          </div>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
