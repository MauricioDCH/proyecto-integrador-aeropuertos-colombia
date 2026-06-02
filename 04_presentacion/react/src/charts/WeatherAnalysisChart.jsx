import { useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { COLORS } from '../constants';

const classColors = {
  bajo: '#3A7DCD',
  medio: '#58C563',
  alto: '#E35D64',
};

/**
 * Miniboxplot en SVG puro. Se usa porque un boxplot real no existe de forma nativa en Recharts.
 */
function MiniBoxplot({ metric }) {
  const values = metric.classes.flatMap((row) => [row.min, row.max]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const scale = (value) => 68 + ((value - min) / span) * 220;

  return (
    <svg viewBox="0 0 340 120" className="miniBoxplot">
      <text x="170" y="18" textAnchor="middle" className="miniBoxTitle">{metric.label}</text>
      {metric.classes.map((row, index) => {
        const y = 42 + index * 27;
        return (
          <g key={row.class}>
            <text x="12" y={y + 5} className="boxClass">{row.class}</text>
            <line x1={scale(row.min)} x2={scale(row.max)} y1={y} y2={y} className="boxWhisker" />
            <rect x={scale(row.q1)} y={y - 9} width={Math.max(4, scale(row.q3) - scale(row.q1))} height="18" fill={classColors[row.class]} opacity="0.85" />
            <line x1={scale(row.median)} x2={scale(row.median)} y1={y - 10} y2={y + 10} stroke="#fff" strokeWidth="3" />
            <circle cx={scale(row.mean)} cy={y} r="5" fill="#fff" stroke="#081F3D" strokeWidth="1.5" />
          </g>
        );
      })}
    </svg>
  );
}

/**
 * Diapositiva de clima: miniboxplots + correlaciones. La lista de correlaciones es filtrable por tipo.
 */
export function WeatherAnalysisChart({ boxplots, correlations }) {
  const [filter, setFilter] = useState('todos');
  const rows = useMemo(() => {
    const filtered = filter === 'todos' ? correlations : correlations.filter((row) => row.group === filter);
    return filtered.slice(0, 18);
  }, [correlations, filter]);

  return (
    <div className="weatherLayout">
      <div className="boxplotGrid">
        {boxplots.map((metric) => (
          <div className="miniBoxCard" key={metric.id}>
            <MiniBoxplot metric={metric} />
          </div>
        ))}
      </div>

      <div className="corrCard">
        <div className="chartHeader compact">
          <div>
            <h3>Correlación con target numérico</h3>
            <p>Rojo: positiva · Azul: negativa</p>
          </div>
          <div className="chartActions">
            {['todos', 'operacional', 'meteorologico', 'demanda'].map((item) => (
              <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={520}>
          <BarChart data={rows} layout="vertical" margin={{ top: 10, right: 40, bottom: 18, left: 190 }}>
            <CartesianGrid stroke="#D9E4F2" horizontal={false} />
            <XAxis type="number" domain={[-1, 1]} tick={{ fill: COLORS.muted, fontWeight: 800 }} />
            <YAxis dataKey="feature" type="category" width={184} tick={{ fill: COLORS.navy, fontWeight: 800, fontSize: 11 }} />
            <Tooltip formatter={(value) => [value, 'correlación']} />
            <Bar dataKey="corr" radius={[0, 8, 8, 0]} fill="#E93655" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
