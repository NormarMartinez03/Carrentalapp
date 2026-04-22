const locations = [
  { city: 'Santo Domingo', address: 'Av. Winston Churchill 1200', stock: 21, phone: '+1 809-555-0101' },
  { city: 'Santiago', address: 'Av. 27 de Febrero 54', stock: 13, phone: '+1 809-555-0114' },
  { city: 'Punta Cana', address: 'Terminal B, Aeropuerto PUJ', stock: 18, phone: '+1 809-555-0119' },
  { city: 'La Romana', address: 'Carretera La Romana - Higuey km 2', stock: 8, phone: '+1 809-555-0132' },
];

export function Locations() {
  return (
    <div>
      <div className="mb-8">
        <h1>Ubicaciones</h1>
        <p className="text-muted-foreground">Sucursales activas y disponibilidad actual de flota en RD.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {locations.map((location) => (
          <div key={location.city} className="bg-card border border-border rounded-lg p-6">
            <h3>{location.city}</h3>
            <p className="text-sm text-muted-foreground mt-1">{location.address}</p>
            <p className="mt-4 text-sm">Flota disponible: <strong>{location.stock} vehículos</strong></p>
            <p className="text-sm text-muted-foreground">Tel: {location.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
