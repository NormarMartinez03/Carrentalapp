import { useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { CarCard } from '../../components/CarCard';
import { CarDetailsModal } from '../../components/CarDetailsModal';
import { FilterSidebar } from '../../components/FilterSidebar';
import { Car } from '../../types';

const mockCars: Car[] = [
  {
    id: '1',
    name: 'Ferrari F8 Tributo',
    category: 'Luxury',
    price: 450,
    image: 'https://images.unsplash.com/photo-1687993320698-456243eb9a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzc2ODE3NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    seats: 2,
    bags: 1,
    transmission: 'Auto',
    fuelType: 'Gasoline',
    features: ['GPS Navigation', 'Bluetooth', 'Backup Camera', 'Sport Mode', 'Premium Sound'],
    featured: true,
  },
  {
    id: '2',
    name: 'Mercedes-Benz S-Class',
    category: 'Luxury',
    price: 350,
    image: 'https://images.unsplash.com/photo-1760976396211-5546ce83a400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzc2ODE3NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    seats: 5,
    bags: 3,
    transmission: 'Auto',
    fuelType: 'Hybrid',
    features: ['GPS Navigation', 'Bluetooth', 'Backup Camera', 'Leather Seats', 'Sunroof'],
  },
  {
    id: '3',
    name: 'Mini Cooper',
    category: 'Economy',
    price: 65,
    image: 'https://images.unsplash.com/photo-1774979160630-a21a5b6f9553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzc2ODE3NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    seats: 4,
    bags: 2,
    transmission: 'Manual',
    fuelType: 'Gasoline',
    features: ['GPS Navigation', 'Bluetooth', 'Air Conditioning', 'USB Ports'],
  },
  {
    id: '4',
    name: 'BMW X5',
    category: 'SUV',
    price: 180,
    image: 'https://images.unsplash.com/photo-1775714362517-df61b089e232?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzc2ODE3NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    seats: 7,
    bags: 4,
    transmission: 'Auto',
    fuelType: 'Diesel',
    features: ['GPS Navigation', 'Bluetooth', 'Backup Camera', '4WD', 'Roof Rack'],
    featured: true,
  },
  {
    id: '5',
    name: 'Mercedes-Benz AMG',
    category: 'Luxury',
    price: 400,
    image: 'https://images.unsplash.com/photo-1768360612035-8bf84c9fbc0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzc2ODE3NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    seats: 5,
    bags: 3,
    transmission: 'Auto',
    fuelType: 'Gasoline',
    features: ['GPS Navigation', 'Bluetooth', 'Backup Camera', 'Sport Mode', 'Premium Sound', 'Heated Seats'],
  },
  {
    id: '6',
    name: 'Toyota Camry',
    category: 'Sedan',
    price: 85,
    image: 'https://images.unsplash.com/photo-1687992659809-db04dbcaee2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzc2ODE3NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    seats: 5,
    bags: 3,
    transmission: 'Auto',
    fuelType: 'Hybrid',
    features: ['GPS Navigation', 'Bluetooth', 'Backup Camera', 'Air Conditioning'],
  },
  {
    id: '7',
    name: 'Honda CR-V',
    category: 'SUV',
    price: 120,
    image: 'https://images.unsplash.com/photo-1687992659743-69a6a730ea5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxsdXh1cnklMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzc2ODE3NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    seats: 5,
    bags: 4,
    transmission: 'Auto',
    fuelType: 'Gasoline',
    features: ['GPS Navigation', 'Bluetooth', 'Backup Camera', 'Apple CarPlay'],
  },
  {
    id: '8',
    name: 'Porsche 911',
    category: 'Sports',
    price: 500,
    image: 'https://images.unsplash.com/photo-1687992659678-bb3f521ab573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzc2ODE3NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    seats: 2,
    bags: 1,
    transmission: 'Auto',
    fuelType: 'Gasoline',
    features: ['GPS Navigation', 'Bluetooth', 'Sport Mode', 'Premium Sound', 'Performance Package'],
    featured: true,
  },
];

export function Browse() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const categories = Array.from(new Set(mockCars.map(car => car.category)));

  const filteredCars = mockCars.filter(car => {
    const categoryMatch = selectedCategory === 'All' || car.category === selectedCategory;
    const priceMatch = car.price >= priceRange[0] && car.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  const handleSearch = (location: string, pickupDate: string, returnDate: string) => {
    console.log('Search:', { location, pickupDate, returnDate });
  };

  const handleBook = (car: Car) => {
    setBookingConfirmed(true);
    setSelectedCar(null);
    setTimeout(() => setBookingConfirmed(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary/10 to-accent/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="mb-2">Encuentra tu Vehículo Perfecto</h1>
            <p className="text-muted-foreground">Elige entre nuestra amplia selección de vehículos premium</p>
          </div>
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside>
            <FilterSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
            />
          </aside>

          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2>{filteredCars.length} Vehículos Disponibles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} onSelect={setSelectedCar} />
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No hay vehículos que coincidan con tus filtros. Intenta ajustar tu búsqueda.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {selectedCar && (
        <CarDetailsModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
          onBook={handleBook}
        />
      )}

      {bookingConfirmed && (
        <div className="fixed bottom-6 right-6 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-xl z-50">
          ¡Reserva confirmada! Te contactaremos pronto.
        </div>
      )}
    </div>
  );
}
