import { useState } from 'react';
import { Maximize2, Network, X } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { SlideShell } from '../components/SlideShell';

/**
 * Diapositiva de arquitectura de referencia.
 *
 * La imagen se muestra dentro de la diapositiva y puede ampliarse
 * en un modal de pantalla completa para verla con mayor detalle.
 */
export function ArchitectureSlide({ number, total }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const imagePath = '/assets/arquitectura_databricks_aeropuertos.png';

  return (
    <SlideShell number={number} total={total} citations={['D1', 'D2', 'M1']}>
      <SectionTitle
        icon={<Network />}
        eyebrow="Arquitectura de datos"
        title="Arquitectura de referencia con Databricks"
      />

      <div className="architectureSlideGrid">
        <button
          className="architectureImageCard architectureImageButton"
          type="button"
          onClick={() => setIsExpanded(true)}
          aria-label="Ampliar arquitectura de referencia"
        >
          <img
            src={imagePath}
            alt="Arquitectura de referencia para almacenamiento de grandes datos con Databricks"
          />

          <div className="architectureExpandHint">
            <Maximize2 size={18} />
            <span>Haz clic para ampliar</span>
          </div>
        </button>

        <div className="architectureInsight">
          <h3>Idea central</h3>

          <p>
            La arquitectura organiza el proyecto como un flujo batch basado en
            Databricks y PySpark, desde fuentes abiertas hasta consumo analítico.
          </p>

          <ul>
            <li>Fuentes abiertas integradas.</li>
            <li>Capas bronze, silver y gold.</li>
            <li>Unidad de análisis aeropuerto-mes.</li>
            <li>Salida hacia modelos, dashboard e informe.</li>
          </ul>
        </div>
      </div>

      {isExpanded && (
        <div
          className="architectureModal"
          role="dialog"
          aria-modal="true"
          aria-label="Arquitectura ampliada"
        >
          <div className="architectureModalTopbar">
            <strong>Arquitectura de referencia con Databricks</strong>

            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              aria-label="Cerrar imagen ampliada"
            >
              <X size={22} />
              Cerrar
            </button>
          </div>

          <div className="architectureModalContent">
            <img
              src={imagePath}
              alt="Arquitectura de referencia ampliada para almacenamiento de grandes datos con Databricks"
            />
          </div>
        </div>
      )}
    </SlideShell>
  );
}