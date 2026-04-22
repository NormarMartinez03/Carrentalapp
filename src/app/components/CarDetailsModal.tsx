import { Car } from '../types';
import { X, Users, Briefcase, Cog, Fuel, Check } from 'lucide-react';

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
            <p className="text-muted-foreground">{car.category}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Passengers</div>
                <div>{car.seats} seats</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Briefcase className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Luggage</div>
                <div>{car.bags} bags</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Cog className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Transmission</div>
                <div>{car.transmission}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Fuel className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Fuel Type</div>
                <div>{car.fuelType}</div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3">Features</h3>
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
              <div className="text-muted-foreground text-sm">Total price per day</div>
              <div className="text-3xl">${car.price}</div>
            </div>
            <button
              onClick={() => onBook(car)}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Book This Car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
