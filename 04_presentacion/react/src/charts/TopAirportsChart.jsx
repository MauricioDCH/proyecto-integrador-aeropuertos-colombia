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
 * Diccionario de nombres cortos para mostrar ciudades/aeropuertos
 * sin exponer códigos OACI en la gráfica.
 *
 * La clave sigue siendo el código OACI porque es el identificador técnico
 * más estable en los datos, pero visualmente mostramos una etiqueta más
 * entendible para personas no técnicas.
 */
const AIRPORT_LABELS = {
  SKBO: 'Bogotá · El Dorado',
  SKRG: 'Medellín · J. M. Córdova',
  SKCL: 'Cali · A. Bonilla',
  SKCG: 'Cartagena · R. Núñez',
  SKMD: 'Medellín · Olaya Herrera',
  SKBQ: 'Barranquilla · Cortissoz',
  SKBG: 'Bucaramanga · Palonegro',
  SKQU: 'Mariquita',
  SKSM: 'Santa Marta · Simón Bolívar',
  SKPE: 'Pereira · Matecaña',
  SKSP: 'San Andrés · G. Rojas Pinilla',
  SKCC: 'Cúcuta · Camilo Daza',
  SKMR: 'Montería · Los Garzones',
  SKYP: 'Yopal · El Alcaraván',
  SKNV: 'Neiva · Benito Salas',
};

/**
 * Construye la etiqueta visible del aeropuerto.
 *
 * Prioridad:
 * 1. Si existe una etiqueta manual en AIRPORT_LABELS, se usa.
 * 2. Si el JSON ya trae un campo "label", se usa.
 * 3. Si no, se usa la ciudad o municipio.
 * 4. Como último respaldo, se usa el nombre del aeropuerto.
 */
function getAirportLabel(row) {
  if (AIRPORT_LABELS[row.icao]) {
    return AIRPORT_LABELS[row.icao];
  }

  if (row.label) {
    return row.label;
  }

  if (row.municipality) {
    return row.municipality;
  }

  return row.airport ?? 'Aeropuerto';
}

/**
 * Formatea números grandes con separador de miles en español de Colombia.
 */
function formatNumber(value) {
  return Number(value ?? 0).toLocaleString('es-CO');
}

/**
 * Tooltip específico para el ranking de aeropuertos.
 *
 * No muestra el código OACI porque la solicitud fue cambiar los códigos
 * por ciudades/nombres entendibles.
 */
function AirportTooltip({ active, payload }) {
  if (!active || !payload?.length) {
    return null;
  }

  const row = payload[0].payload;

  return (
    <div className="chartTooltip">
      <b>{row.displayLabel}</b>
      <span>{row.airport}</span>
      <span>{formatNumber(row.operations)} operaciones acumuladas</span>
      <span>{row.share}% del total nacional</span>
    </div>
  );
}

/**
 * Gráfica horizontal real para top aeropuertos.
 *
 * Usa Recharts para conservar:
 * - escala correcta;
 * - eje X;
 * - eje Y;
 * - tooltip;
 * - etiquetas de porcentaje;
 * - cambio interactivo Top 10 / Top 15.
 */
export function TopAirportsChart({ data }) {
  const [limit, setLimit] = useState(10);

  /**
   * Prepara los datos que va a recibir la gráfica.
   *
   * Se agrega "displayLabel" para que el eje Y muestre ciudades/nombres
   * cortos y no códigos OACI.
   */
  const rows = useMemo(() => {
    return data.slice(0, limit).map((row) => ({
      ...row,
      displayLabel: getAirportLabel(row),
      operations: Number(row.operations ?? 0),
      share: Number(row.share ?? 0),
    }));
  }, [data, limit]);

  /**
   * Altura dinámica:
   * - Top 10 necesita menos espacio.
   * - Top 15 necesita más altura para que no se amontonen los nombres.
   */
  const chartHeight = limit === 10 ? 520 : 640;

  return (
    <div className="chartCard topAirportsCard">
      <div className="chartHeader">
        <div>
          <h3>Top aeropuertos por operaciones acumuladas</h3>
          <p>Periodo 2020–2025 · unidad: operaciones acumuladas</p>
        </div>

        <div className="chartActions">
          {[10, 15].map((n) => (
            <button
              key={n}
              className={limit === n ? 'active' : ''}
              onClick={() => setLimit(n)}
              type="button"
            >
              Top {n}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={chartHeight}>
        <BarChart
          data={rows}
          layout="vertical"
          margin={{ top: 16, right: 70, bottom: 34, left: 28 }}
          barCategoryGap={10}
        >
          <CartesianGrid stroke="#D9E4F2" horizontal={false} />

          <XAxis
            type="number"
            tickFormatter={(value) => `${Math.round(value / 1000)}K`}
            tick={{ fill: COLORS.muted, fontWeight: 800 }}
            axisLine={{ stroke: COLORS.line }}
            tickLine={false}
            label={{
              value: 'Operaciones acumuladas',
              position: 'insideBottom',
              offset: -18,
              fill: COLORS.muted,
              fontWeight: 900,
            }}
          />

          <YAxis
            type="category"
            dataKey="displayLabel"
            width={190}
            tick={{
              fill: COLORS.navy,
              fontWeight: 950,
              fontSize: 13,
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            content={<AirportTooltip />}
            cursor={{ fill: '#EAF4FF' }}
          />

          <Bar
            dataKey="operations"
            fill={COLORS.blue}
            radius={[0, 12, 12, 0]}
          >
            <LabelList
              dataKey="share"
              position="right"
              formatter={(value) => `${value}%`}
              fill={COLORS.navy}
              fontWeight={950}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}