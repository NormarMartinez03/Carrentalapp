const kpis = [
  { name: 'Ocupación promedio', value: '76%', note: 'Últimos 30 días' },
  { name: 'Cancelaciones', value: '4.8%', note: 'Meta < 6%' },
  { name: 'Satisfacción', value: '4.7/5', note: 'Google + encuestas' },
  { name: 'Tiempo de entrega', value: '18 min', note: 'Promedio nacional' },
];

export function Reports() {
  return (
    <div>
      <div className="mb-8">
        <h1>Reportes operativos</h1>
        <p className="text-muted-foreground">Seguimiento consolidado de la operación en República Dominicana.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {kpis.map((kpi) => (
          <div key={kpi.name} className="bg-card border border-border rounded-lg p-5">
            <p className="text-sm text-muted-foreground">{kpi.name}</p>
            <p className="text-3xl mt-2">{kpi.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{kpi.note}</p>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="mb-3">Resumen semanal por sucursal</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex justify-between"><span>Santo Domingo</span><span>112 reservas · 82% ocupación</span></li>
          <li className="flex justify-between"><span>Santiago</span><span>67 reservas · 74% ocupación</span></li>
          <li className="flex justify-between"><span>Punta Cana</span><span>96 reservas · 88% ocupación</span></li>
          <li className="flex justify-between"><span>La Romana</span><span>34 reservas · 65% ocupación</span></li>
        </ul>
      </div>
    </div>
  );
}
