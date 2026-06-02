import { CloudSun } from 'lucide-react';
import { Callout } from '../components/Callout';
import { SectionTitle } from '../components/SectionTitle';
import { SlideShell } from '../components/SlideShell';
import { WeatherAnalysisChart } from '../charts/WeatherAnalysisChart';

/** EDA climático con boxplots y correlación filtrable. */
export function WeatherSlide({ data, number, total }) {
  return (
    <SlideShell number={number} total={total} citations={['D1', 'D5']}>
      <SectionTitle icon={<CloudSun />} eyebrow="EDA meteorológico" title="¿Importa el clima?" />
      <WeatherAnalysisChart boxplots={data.weatherBoxplots} correlations={data.correlations} />
      <Callout>Las variables operacionales dominan, pero el clima aporta señal complementaria: visibilidad, IFR y temperatura separan parcialmente las clases.</Callout>
    </SlideShell>
  );
}
