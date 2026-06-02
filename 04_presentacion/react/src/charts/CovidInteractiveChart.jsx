import { useMemo, useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { COLORS } from '../constants';

/** Formatea número entero con separador colombiano. */
function fmt(value) {
  return Number(value).toLocaleString('es-CO');
}

/** Tooltip de la serie COVID: muestra mes y operaciones. */
function CovidTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const row = payload[0].payload;
  return (
    <div className="chartTooltip">
      <b>{row.month}</b>
      <span>{fmt(row.operations)} operaciones</span>
      <small>{row.note}</small>
    </div>
  );
}

/**
 * Gráfica temporal interactiva: hover, selección por punto y botones de eventos.
 */
export function CovidInteractiveChart({ series, events }) {
  const defaultEvent = events.find((event) => event.id === 'minimo_covid') ?? events[0];
  const [selectedMonth, setSelectedMonth] = useState(defaultEvent.month);

  const selectedPoint = useMemo(
    () => series.find((row) => row.month === selectedMonth) ?? series[0],
    [series, selectedMonth],
  );

  const selectedEvent = useMemo(
    () => events.find((event) => event.month === selectedMonth),
    [events, selectedMonth],
  );

  return (
    <div className="covidInteractive">
      <div className="eventChips">
        {events.map((event) => (
          <button
            key={event.id}
            style={{ '--event-color': event.color }}
            className={event.month === selectedMonth ? 'active' : ''}
            onClick={() => setSelectedMonth(event.month)}
          >
            {event.title}
          </button>
        ))}
      </div>

      <div className="covidGrid">
        <div className="chartCard">
          <h3>Evolución mensual — operaciones totales</h3>
          <ResponsiveContainer width="100%" height={470}>
            <AreaChart data={series} margin={{ top: 24, right: 30, bottom: 34, left: 10 }} onClick={(state) => state?.activePayload?.[0] && setSelectedMonth(state.activePayload[0].payload.month)}>
              <defs>
                <linearGradient id="opsFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS.blue} stopOpacity={0.28} />
                  <stop offset="95%" stopColor={COLORS.blue} stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#D9E4F2" />
              <ReferenceArea x1="2020-03" x2="2020-12" fill={COLORS.red} fillOpacity={0.13} />
              <XAxis dataKey="month" interval={11} tick={{ fill: COLORS.muted, fontWeight: 800 }} tickLine={false} axisLine={{ stroke: COLORS.line }} label={{ value: 'Mes', position: 'insideBottom', offset: -18, fill: COLORS.muted, fontWeight: 900 }} />
              <YAxis tickFormatter={(value) => `${Math.round(value / 1000)}K`} tick={{ fill: COLORS.muted, fontWeight: 800 }} tickLine={false} axisLine={{ stroke: COLORS.line }} label={{ value: 'Operaciones totales', angle: -90, position: 'insideLeft', fill: COLORS.muted, fontWeight: 900 }} />
              <Tooltip content={<CovidTooltip />} />
              <Area type="monotone" dataKey="operations" stroke={COLORS.blue} strokeWidth={5} fill="url(#opsFill)" activeDot={{ r: 8, fill: COLORS.orange }} />
              <ReferenceLine x={selectedMonth} stroke={selectedEvent?.color ?? COLORS.blue} strokeWidth={3} strokeDasharray="6 6" />
              <ReferenceDot x={selectedMonth} y={selectedPoint.operations} r={8} fill={selectedEvent?.color ?? COLORS.blue} stroke="#fff" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <aside className="eventDetail" style={{ '--event-color': selectedEvent?.color ?? COLORS.blue }}>
          <span>Evento seleccionado</span>
          <h3>{selectedEvent?.title ?? selectedPoint.event ?? 'Mes seleccionado'}</h3>
          <strong>{selectedPoint.month}</strong>
          <b>{fmt(selectedPoint.operations)} operaciones</b>
          <p>{selectedEvent?.description ?? selectedPoint.note}</p>
          <small>Franja roja: choque operacional COVID-19 2020.</small>
        </aside>
      </div>
    </div>
  );
}
