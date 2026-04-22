import { Car } from '../types';
import { X, Users, Briefcase, Cog, Fuel, Check, MapPin } from 'lucide-react';
import { formatDOP, formatUSD } from '../utils/currency';

interface CarDetailsModalProps {
  car: Car;
  onClose: () => void;
  onBook: (car: Car) => void;
}

export function CarDetailsModal({ car, onClose, onBook }: CarDetailsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-80 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h2>{car.name}</h2>
            <p className="text-muted-foreground">{car.category} · {car.location}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Pasajeros</div>
                <div>{car.seats}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Briefcase className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Equipaje</div>
                <div>{car.bags}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Cog className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Transmisión</div>
                <div>{car.transmission}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Fuel className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Combustible</div>
                <div>{car.fuelType}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Sucursal</div>
                <div>{car.location}</div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3">Incluye</h3>
            <div className="grid grid-cols-2 gap-3">
              {car.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-border">
            <div>
              <div className="text-muted-foreground text-sm">Tarifa por día</div>
              <div className="text-2xl">{formatUSD(car.priceUSD)}</div>
              <div className="text-muted-foreground">{formatDOP(car.priceDOP)}</div>
            </div>
            <button
              onClick={() => onBook(car)}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              disabled={!car.available}
            >
              {car.available ? 'Reservar ahora' : 'No disponible'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
