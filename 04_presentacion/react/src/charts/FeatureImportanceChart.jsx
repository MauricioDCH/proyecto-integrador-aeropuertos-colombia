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

/** Tooltip técnico para importancia de variables. */
function FeatureTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const row = payload[0].payload;
  return (
    <div className="chartTooltip">
      <b>#{row.rank} · {row.feature}</b>
      <span>Importancia: {row.importance}</span>
    </div>
  );
}

/**
 * Gráfica técnica de importancia de variables.
 * Usa Recharts para ejes y escala real, no barras HTML manuales.
 */
export function FeatureImportanceChart({ data, limit = 20 }) {
  const rows = data.slice(0, limit);

  return (
    <div className="featureImportanceCard">
      <h3>Top {limit} variables más importantes</h3>
      <p>Modelo final: LightGBM · unidad: importancia relativa del modelo</p>
      <ResponsiveContainer width="100%" height={540}>
        <BarChart data={rows} layout="vertical" margin={{ top: 20, right: 72, bottom: 36, left: 220 }}>
          <CartesianGrid stroke="#E2E8F0" horizontal={false} />
          <XAxis type="number" tick={{ fill: COLORS.muted, fontWeight: 800 }} axisLine={{ stroke: COLORS.line }} tickLine={false} label={{ value: 'Importancia', position: 'insideBottom', offset: -18, fill: COLORS.muted, fontWeight: 900 }} />
          <YAxis type="category" dataKey="feature" width={215} tick={{ fill: COLORS.navy, fontSize: 12, fontWeight: 800 }} axisLine={false} tickLine={false} />
          <Tooltip content={<FeatureTooltip />} cursor={{ fill: '#EAF4FF' }} />
          <Bar dataKey="importance" fill="#087CBF" radius={[0, 8, 8, 0]}>
            <LabelList dataKey="importance" position="right" fill={COLORS.navy} fontSize={12} fontWeight={850} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
