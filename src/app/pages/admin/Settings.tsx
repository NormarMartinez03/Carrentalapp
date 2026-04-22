export function Settings() {
  return (
    <div>
      <div className="mb-8">
        <h1>Configuración</h1>
        <p className="text-muted-foreground">Parámetros base del sistema para operar en República Dominicana.</p>
      </div>

      <div className="space-y-4">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="mb-3">Moneda y facturación</h3>
          <p className="text-sm text-muted-foreground">Moneda principal: USD. Conversión visible al cliente en DOP (referencia: 1 USD = 59 DOP).</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="mb-3">Política de combustible</h3>
          <p className="text-sm text-muted-foreground">Entrega lleno/lleno con tolerancia de 1/8 de tanque para cierres rápidos.</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="mb-3">Canales de soporte</h3>
          <p className="text-sm text-muted-foreground">WhatsApp, teléfono y correo habilitados 7:00 AM - 10:00 PM.</p>
        </div>
      </div>
    </div>
  );
}
