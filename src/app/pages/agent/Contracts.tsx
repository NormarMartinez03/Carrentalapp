const contracts = [
  { id: 'CT-4012', customer: 'Luis Mejía', car: 'Hyundai Tucson 2024', start: '2026-04-24', status: 'Listo para firma' },
  { id: 'CT-4013', customer: 'Andrea Feliz', car: 'Kia Picanto', start: '2026-04-25', status: 'Firmado' },
  { id: 'CT-4014', customer: 'Robert Green', car: 'Chevrolet Suburban', start: '2026-04-26', status: 'Pendiente de pago' },
];

export function Contracts() {
  return (
    <div>
      <div className="mb-8">
        <h1>Contratos</h1>
        <p className="text-muted-foreground">Seguimiento de contratos de renta para agentes.</p>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="p-4 text-left">Contrato</th>
              <th className="p-4 text-left">Cliente</th>
              <th className="p-4 text-left">Vehículo</th>
              <th className="p-4 text-left">Inicio</th>
              <th className="p-4 text-left">Estado</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract) => (
              <tr key={contract.id} className="border-t border-border">
                <td className="p-4">{contract.id}</td>
                <td className="p-4">{contract.customer}</td>
                <td className="p-4">{contract.car}</td>
                <td className="p-4">{contract.start}</td>
                <td className="p-4">{contract.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
