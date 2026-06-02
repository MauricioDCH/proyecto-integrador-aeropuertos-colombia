import { Database, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { SlideShell } from '../components/SlideShell';

/** Fuentes de datos con panel interactivo por hover/clic. */
export function SourcesSlide({ data, number, total }) {
  const [active, setActive] = useState(data.sources[0]);

  return (
    <SlideShell number={number} total={total} citations={['D2', 'D3', 'D4', 'D5']}>
      <SectionTitle icon={<Database />} eyebrow="Fuentes abiertas integradas" title="Problema a resolver y fuentes de datos" />

      <div className="sourceLayout">
        <div className="sourceList">
          {data.sources.map((source) => (
            <button key={source.id} className={source.id === active.id ? 'active' : ''} onMouseEnter={() => setActive(source)} onClick={() => setActive(source)}>
              <strong>{source.name}</strong>
              <span>{source.type}</span>
              <small>{source.layer}</small>
            </button>
          ))}
        </div>

        <aside className="sourceDetail">
          <span>{active.id}</span>
          <h3>{active.name}</h3>
          <p>{active.use}</p>
          <a href={active.url} target="_blank" rel="noreferrer">
            <ExternalLink size={18} /> Abrir fuente
          </a>
        </aside>
      </div>
    </SlideShell>
  );
}
