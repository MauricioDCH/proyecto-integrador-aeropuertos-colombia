import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { COLORS } from '../constants';

const targetColors = {
  bajo: '#D90429',
  medio: '#0B7FC3',
  alto: '#00A878',
};

/**
 * Distribución del target: barras de conteo + donut de proporción.
 */
export function TargetDistributionChart({ data }) {
  return (
    <div className="targetCharts">
      <div className="chartCard">
        <h3>Distribución del target</h3>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
            <XAxis dataKey="class" tick={{ fill: COLORS.navy, fontWeight: 900 }} tickLine={false} />
            <YAxis tick={{ fill: COLORS.muted, fontWeight: 800 }} tickLine={false} />
            <Tooltip formatter={(value) => [value.toLocaleString('es-CO'), 'registros']} />
            <Bar dataKey="count" radius={[12, 12, 0, 0]}>
              {data.map((row) => (
                <Cell key={row.class} fill={targetColors[row.class]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chartCard donutCard">
        <h3>Proporción por clase</h3>
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Tooltip formatter={(value, _name, props) => [`${props.payload.share}%`, props.payload.class]} />
            <Pie data={data} dataKey="count" nameKey="class" innerRadius={58} outerRadius={94} paddingAngle={2}>
              {data.map((row) => (
                <Cell key={row.class} fill={targetColors[row.class]} />
              ))}
            </Pie>
            <text x="50%" y="48%" textAnchor="middle" dominantBaseline="middle" className="donutMain">3</text>
            <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" className="donutSub">clases</text>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
