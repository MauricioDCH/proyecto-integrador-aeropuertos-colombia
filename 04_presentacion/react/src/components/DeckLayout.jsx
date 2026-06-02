import { ChevronLeft, ChevronRight, MousePointerClick, Plane } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

/**
 * Layout general de la presentación: barra lateral, navegación superior y área de slide.
 */
export function DeckLayout({ index, total, onGoTo, children }) {
  const progress = ((index + 1) / total) * 100;

  return (
    <div className="deck">
      <aside className="rail">
        <div className="brand">
          <Plane />
          <strong>AeroDatos</strong>
        </div>

        {NAV_ITEMS.map(([id, label], itemIndex) => (
          <button
            key={id}
            type="button"
            className={itemIndex === index ? 'active' : ''}
            onClick={() => onGoTo(itemIndex)}
          >
            <span>{String(itemIndex + 1).padStart(2, '0')}</span>
            {label}
          </button>
        ))}
      </aside>

      <main className="stage">
        <div className="topbar">
          <button type="button" onClick={() => onGoTo(index - 1)} disabled={index === 0}>
            <ChevronLeft />
          </button>
          <div className="progressBar">
            <i style={{ width: `${progress}%` }} />
          </div>
          <button type="button" onClick={() => onGoTo(index + 1)} disabled={index === total - 1}>
            <ChevronRight />
          </button>
          <div className="hint">
            <MousePointerClick size={16} /> Usa flechas o haz clic
          </div>
        </div>

        {children}
      </main>
    </div>
  );
}
