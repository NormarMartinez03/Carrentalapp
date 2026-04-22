import { useMemo, useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { CarCard } from '../../components/CarCard';
import { CarDetailsModal } from '../../components/CarDetailsModal';
import { FilterSidebar } from '../../components/FilterSidebar';
import { Car } from '../../types';
import { rdFleet } from '../../data/rdFleet';

export function Browse() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [priceRange, setPriceRange] = useState<[number, number]>([30, 250]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const categories = Array.from(new Set(rdFleet.map(car => car.category)));

  const filteredCars = useMemo(() => {
    return rdFleet.filter(car => {
      const categoryMatch = selectedCategory === 'Todas' || car.category === selectedCategory;
      const priceMatch = car.priceUSD >= priceRange[0] && car.priceUSD <= priceRange[1];
      const locationMatch = !selectedLocation || car.location === selectedLocation;
      return categoryMatch && priceMatch && locationMatch && car.available;
    });
  }, [selectedCategory, priceRange, selectedLocation]);

  const handleSearch = (location: string) => {
    setSelectedLocation(location);
  };

  const handleBook = () => {
    setBookingConfirmed(true);
    setSelectedCar(null);
    setTimeout(() => setBookingConfirmed(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary/10 to-accent/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="mb-2">Renta vehículos disponibles en República Dominicana</h1>
            <p className="text-muted-foreground">Precios por día en USD y DOP con retiro en las principales ciudades del país.</p>
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
              <h2>{filteredCars.length} vehículos disponibles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} onSelect={setSelectedCar} />
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No hay unidades disponibles con esos filtros por el momento.</p>
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
          ¡Reserva creada! Te confirmaremos por WhatsApp en breve.
        </div>
      )}
    </div>
  );
}
