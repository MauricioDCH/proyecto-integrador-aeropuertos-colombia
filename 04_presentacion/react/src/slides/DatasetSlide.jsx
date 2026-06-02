import { Layers3 } from 'lucide-react';
import { KpiCard } from '../components/KpiCard';
import { SectionTitle } from '../components/SectionTitle';
import { SlideShell } from '../components/SlideShell';

/** Presenta tamaño del dataset y familias de variables. */
export function DatasetSlide({ data, number, total }) {
  return (
    <SlideShell number={number} total={total} citations={['D1']}>
      <SectionTitle icon={<Layers3 />} eyebrow="Conjunto analítico final" title="El dataset resultante" />
      <div className="kpiGrid four">
        <KpiCard value="3254" label="registros aeropuerto-mes" />
        <KpiCard value="46" label="aeropuertos con datos completos" tone="green" />
        <KpiCard value="72" label="meses 2020-01 a 2025-12" tone="orange" />
        <KpiCard value="38" label="variables predictoras finales" tone="purple" />
      </div>

      <h3 className="subheading">Tipos de variables incluidas en el modelo</h3>
      <div className="variableFamilies">
        {data.featureEngineering.map((family) => (
          <article key={family.id} style={{ borderColor: family.color }}>
            <h3 style={{ color: family.color }}>{family.title}</h3>
            <p>{family.purpose}</p>
          </article>
        ))}
      </div>
    </SlideShell>
  );
}
