import { SlidersHorizontal } from 'lucide-react';
import { Callout } from '../components/Callout';
import { SectionTitle } from '../components/SectionTitle';
import { SlideShell } from '../components/SlideShell';
import { TargetDistributionChart } from '../charts/TargetDistributionChart';

/** Explica construcción del target ordinal y balance de clases. */
export function TargetSlide({ data, number, total }) {
  return (
    <SlideShell number={number} total={total} citations={['D1']}>
      <SectionTitle icon={<SlidersHorizontal />} eyebrow="Variable objetivo" title="El semáforo de operaciones" />
      <div className="targetSlideGrid">
        <TargetDistributionChart data={data.targetDistribution} />
        <aside className="targetDefinition">
          <h3>¿Cómo se define el target?</h3>
          <p>El nivel de operación se clasifica en tres clases usando percentiles calculados por tipo de aeropuerto.</p>
          <p>Esto permite que un aeropuerto pequeño pueda ser “alto” aunque tenga menos vuelos que uno grande.</p>
        </aside>
      </div>
      <div className="trafficGrid">
        <div className="traffic bajo"><b>BAJO</b><span>≤ P33 de su tipo</span></div>
        <div className="traffic medio"><b>MEDIO</b><span>P33–P66</span></div>
        <div className="traffic alto"><b>ALTO</b><span>≥ P66</span></div>
      </div>
      <Callout>Balance de clases: Bajo 32.9% · Medio 33.1% · Alto 34.0%.</Callout>
    </SlideShell>
  );
}
