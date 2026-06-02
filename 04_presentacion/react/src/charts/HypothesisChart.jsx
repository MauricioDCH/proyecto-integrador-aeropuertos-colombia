import { Bar, BarChart, CartesianGrid, LabelList, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { COLORS } from '../constants';

/**
 * Gráfica de hipótesis. La línea roja se etiqueta fuera del área conflictiva.
 */
export function HypothesisChart({ data }) {
  return (
    <div className="hypothesisChartCard">
      <div className="baselineLegend">
        <span /> Línea roja punteada = Baseline aleatorio ({data.baseline}%)
      </div>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data.bars} margin={{ top: 40, right: 48, bottom: 42, left: 24 }}>
          <CartesianGrid stroke="#D9E4F2" />
          <XAxis dataKey="label" tick={{ fill: COLORS.navy, fontWeight: 850 }} tickLine={false} interval={0} />
          <YAxis domain={[0, 90]} tickFormatter={(value) => `${value}%`} tick={{ fill: COLORS.muted, fontWeight: 800 }} axisLine={false} tickLine={false} label={{ value: 'Permanecer en nivel bajo', angle: -90, position: 'insideLeft', fill: COLORS.muted, fontWeight: 900 }} />
          <Tooltip formatter={(value) => [`${value}%`, 'Probabilidad']} />
          <ReferenceLine y={data.baseline} stroke="#D90429" strokeWidth={3} strokeDasharray="8 8" />
          <Bar dataKey="value" fill={COLORS.blue} radius={[12, 12, 0, 0]} barSize={135}>
            <LabelList dataKey="value" position="top" formatter={(value) => `${value}%`} fill={COLORS.blue} fontSize={30} fontWeight={950} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
