import { CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { SlideShell } from '../components/SlideShell';

/** Conclusiones de negocio, modelado y limitaciones. */
export function ConclusionsSlide({ number, total }) {
  const conclusions = [
    ['El historial operacional domina', 'Operaciones_total y sus medias móviles son las variables más importantes. El clima aporta señal complementaria pero real.', '#00A878'],
    ['Limitación principal', '48 de 139 estaciones tienen cobertura METAR suficiente. Aeropuertos sin historial meteorológico dependen más de variables operacionales.', '#087CBF'],
    ['No hay confusión extrema', 'El modelo nunca confunde bajo con alto. Los errores ocurren entre clases adyacentes.', '#005BE7'],
    ['LightGBM supera los baselines', 'El baseline de persistencia temporal ronda 60%; el modelo final lo supera ampliamente.', '#062B60'],
    ['Hipótesis', 'Un score meteorológico adverso sostenido durante tres meses incrementa la probabilidad de permanecer en nivel bajo hasta 74%.', '#041E3D'],
  ];

  return (
    <SlideShell number={number} total={total} citations={['D1', 'M2']}>
      <SectionTitle icon={<CheckCircle2 />} eyebrow="Cierre analítico" title="Conclusiones" />
      <div className="conclusionList">
        {conclusions.map(([title, text, color]) => (
          <article key={title} className="conclusion" style={{ borderLeftColor: color }}>
            <h3>✓ {title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </SlideShell>
  );
}
