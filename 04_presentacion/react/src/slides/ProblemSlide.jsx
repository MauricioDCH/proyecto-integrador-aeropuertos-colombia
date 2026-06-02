import { AlertTriangle, BrainCircuit, Gauge, MapPinned } from 'lucide-react';
import { Callout } from '../components/Callout';
import { InfoCard } from '../components/InfoCard';
import { SectionTitle } from '../components/SectionTitle';
import { SlideShell } from '../components/SlideShell';

/** Explica problema, costo y oportunidad analítica. */
export function ProblemSlide({ number, total }) {
  return (
    <SlideShell number={number} total={total} citations={['D1']}>
      <SectionTitle icon={<AlertTriangle />} eyebrow="Contextualización" title="El problema" />
      <div className="threeCols tallCards">
        <InfoCard title="El reto" icon={<MapPinned />}>
          Colombia tiene más de 100 aeródromos activos. El volumen de operaciones varía mes a mes por temporadas, clima y demanda.
        </InfoCard>
        <InfoCard title="El costo" icon={<Gauge />} tone="green">
          Sin anticipación, aerolíneas y operadores asignan personal, equipos y slots sin información predictiva.
        </InfoCard>
        <InfoCard title="La oportunidad" icon={<BrainCircuit />} tone="orange">
          Los datos históricos de operaciones y variables meteorológicas contienen señal útil para clasificar el siguiente mes.
        </InfoCard>
      </div>
      <Callout>La pregunta no es solo cuántos vuelos hubo: es cómo convertir historia operacional y clima en una decisión anticipada.</Callout>
    </SlideShell>
  );
}
