import { Plane } from 'lucide-react';
import { KpiCard } from '../components/KpiCard';
import { SlideShell } from '../components/SlideShell';

/** Portada con nombre del proyecto, integrantes y KPIs principales. */
export function ProjectSlide({ data, number, total }) {
  return (
    <SlideShell number={number} total={total} citations={['D1']} className="coverSlide">
      <div className="coverSplit">
        <section className="coverDark">
          <h1>{data.summary.project}</h1>
          <p>¿Puede una máquina anticipar si un aeropuerto operará bajo, medio o alto el mes que viene?</p>
        </section>

        <section className="coverLight">
          <span className="pill">Proyecto Integrador — Maestría en ciencia de datos y analítica</span>
          <p className="authors">
            {data.summary.team.join(' · ')}
            <br />
            Universidad EAFIT · Medellín, Colombia
          </p>
          <div className="coverKpis">
            {data.summary.kpis.map((item, index) => (
              <KpiCard key={item.label} value={item.value} label={item.label} tone={['blue', 'green', 'orange', 'purple'][index]} />
            ))}
          </div>
          <div className="coverPlane"><Plane size={120} /></div>
        </section>
      </div>
    </SlideShell>
  );
}
