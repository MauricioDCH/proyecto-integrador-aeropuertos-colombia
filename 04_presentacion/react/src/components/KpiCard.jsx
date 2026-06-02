/**
 * Tarjeta KPI reutilizable.
 * El tono controla el color del borde y del valor principal.
 */
export function KpiCard({ value, label, tone = 'blue' }) {
  return (
    <div className={`kpiCard ${tone}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
