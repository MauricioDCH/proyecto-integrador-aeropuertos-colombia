import { LineChart } from 'lucide-react';
import { Callout } from '../components/Callout';
import { SectionTitle } from '../components/SectionTitle';
import { SlideShell } from '../components/SlideShell';
import { CovidInteractiveChart } from '../charts/CovidInteractiveChart';

/** Diapositiva temporal interactiva: COVID, recuperación y nuevos máximos. */
export function CovidSlide({ data, number, total }) {
  return (
    <SlideShell number={number} total={total} citations={['D1', 'D2']}>
      <SectionTitle icon={<LineChart />} eyebrow="EDA temporal" title="El tiempo y el COVID-19" />
      <CovidInteractiveChart series={data.covidSeries} events={data.covidEvents} />
      <Callout>La serie evidencia el choque de 2020, la recuperación posterior y un nuevo techo operativo hacia 2024–2025.</Callout>
    </SlideShell>
  );
}
