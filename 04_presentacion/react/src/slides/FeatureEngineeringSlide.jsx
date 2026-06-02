import { Factory } from 'lucide-react';
import { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { SlideShell } from '../components/SlideShell';

/**
 * Ingeniería de características interactiva.
 * Al hacer clic en una familia, se despliegan listas limpias y explicadas.
 */
export function FeatureEngineeringSlide({ data, number, total }) {
  const [activeId, setActiveId] = useState(data.featureEngineering[0].id);
  const active = data.featureEngineering.find((item) => item.id === activeId);

  return (
    <SlideShell number={number} total={total} citations={['D1']}>
      <SectionTitle icon={<Factory />} eyebrow="Entendimiento y preparación de datos" title="Ingeniería de características" />
      <div className="featureTabs">
        {data.featureEngineering.map((family) => (
          <button
            key={family.id}
            style={{ '--family-color': family.color }}
            className={family.id === activeId ? 'active' : ''}
            onClick={() => setActiveId(family.id)}
          >
            {family.title}
          </button>
        ))}
      </div>

      <section className="featurePanel" style={{ '--family-color': active.color }}>
        <div className="featurePanelHeader">
          <h3>{active.title}</h3>
          <p>{active.purpose}</p>
        </div>

        <div className="featureLists">
          {Object.entries(active.lists).map(([title, items]) => (
            <article key={title}>
              <h4>{title}</h4>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className="featureFlow">
        <span>Dato crudo</span><b>→</b><span>Agregación mensual</span><b>→</b><span>Ventana temporal</span><b>→</b><span>Variable robusta</span><b>→</b><span>Modelo</span>
      </div>
    </SlideShell>
  );
}
