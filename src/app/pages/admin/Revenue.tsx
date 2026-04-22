import { formatDOP, formatUSD } from '../../utils/currency';

const revenueData = [
  { branch: 'Santo Domingo', usd: 28400 },
  { branch: 'Santiago', usd: 17650 },
  { branch: 'Punta Cana', usd: 31900 },
  { branch: 'La Romana', usd: 9250 },
];

export function Revenue() {
  const totalUsd = revenueData.reduce((acc, item) => acc + item.usd, 0);
  const totalDop = Math.round(totalUsd * 59);

  return (
    <div>
      <div className="mb-8">
        <h1>Ingresos</h1>
        <p className="text-muted-foreground">Vista mensual en dólares estadounidenses y pesos dominicanos.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-muted-foreground text-sm">Total del mes (USD)</p>
          <h2>{formatUSD(totalUsd)}</h2>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-muted-foreground text-sm">Total del mes (DOP)</p>
          <h2>{formatDOP(totalDop)}</h2>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="p-4 text-left">Sucursal</th>
              <th className="p-4 text-left">Ingreso USD</th>
              <th className="p-4 text-left">Ingreso DOP</th>
            </tr>
          </thead>
          <tbody>
            {revenueData.map((item) => (
              <tr key={item.branch} className="border-t border-border">
                <td className="p-4">{item.branch}</td>
                <td className="p-4">{formatUSD(item.usd)}</td>
                <td className="p-4">{formatDOP(Math.round(item.usd * 59))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
