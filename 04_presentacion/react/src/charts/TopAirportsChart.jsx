import { useMemo, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { COLORS } from '../constants';

/**
 * Tooltip específico para el ranking de aeropuertos.
 * Muestra operación acumulada y participación nacional.
 */
function AirportTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const row = payload[0].payload;

  return (
    <div className="chartTooltip">
      <b>{row.icao} · {row.airport}</b>
      <span>{row.operations.toLocaleString('es-CO')} operaciones acumuladas</span>
      <span>{row.share}% del total nacional</span>
    </div>
  );
}

/**
 * Gráfica horizontal real para top aeropuertos.
 * Se evita dibujar barras con HTML para mantener escala, ejes y tooltip correctos.
 */
export function TopAirportsChart({ data }) {
  const [limit, setLimit] = useState(10);
  const rows = useMemo(() => data.slice(0, limit), [data, limit]);

  return (
    <div className="chartCard topAirportsCard">
      <div className="chartHeader">
        <div>
          <h3>Top aeropuertos por operaciones acumuladas</h3>
          <p>Periodo 2020–2025 · unidad: operaciones acumuladas</p>
        </div>
        <div className="chartActions">
          {[10, 15].map((n) => (
            <button key={n} className={limit === n ? 'active' : ''} onClick={() => setLimit(n)}>
              Top {n}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={520}>
        <BarChart
          data={rows}
          layout="vertical"
          margin={{ top: 16, right: 68, bottom: 30, left: 118 }}
          barCategoryGap={10}
        >
          <CartesianGrid stroke="#D9E4F2" horizontal={false} />
          <XAxis
            type="number"
            tickFormatter={(value) => `${Math.round(value / 1000)}K`}
            tick={{ fill: COLORS.muted, fontWeight: 800 }}
            axisLine={{ stroke: COLORS.line }}
            tickLine={false}
            label={{ value: 'Operaciones acumuladas', position: 'insideBottom', offset: -16, fill: COLORS.muted, fontWeight: 900 }}
          />
          <YAxis
            type="category"
            dataKey="icao"
            width={84}
            tick={{ fill: COLORS.navy, fontWeight: 950, fontSize: 14 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<AirportTooltip />} cursor={{ fill: '#EAF4FF' }} />
          <Bar dataKey="operations" fill={COLORS.blue} radius={[0, 12, 12, 0]}>
            <LabelList dataKey="share" position="right" formatter={(value) => `${value}%`} fill={COLORS.navy} fontWeight={950} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
