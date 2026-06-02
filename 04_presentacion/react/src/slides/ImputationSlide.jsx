import { DatabaseZap } from 'lucide-react';
import { KpiCard } from '../components/KpiCard';
import { SectionTitle } from '../components/SectionTitle';
import { SlideShell } from '../components/SlideShell';

/**
 * Diapositiva resumida de imputación.
 *
 * La idea es explicar la estrategia sin saturar la exposición:
 * qué se hizo, cuántos datos se conservaron y qué controles evitaron leakage.
 */
export function ImputationSlide({ data, number, total }) {
  const { imputation } = data;

  return (
    <SlideShell number={number} total={total} citations={['P1', 'D1', 'M1']}>
      <SectionTitle
        icon={<DatabaseZap />}
        eyebrow="Preparación de datos"
        title="Imputación y tratamiento de faltantes"
      />

      <div className="imputationCleanGrid">
        <section className="imputationCleanMain">
          <h3>¿Qué se hizo con los datos faltantes?</h3>
          <p>
            Se aplicó una estrategia conservadora para mantener cobertura analítica
            sin introducir información futura ni reducir excesivamente el dataset.
          </p>

          <div className="imputationFlow">
            <article>
              <span>01</span>
              <h4>Diagnóstico</h4>
              <p>Cobertura por aeropuerto-mes y familia de variables.</p>
            </article>

            <article>
              <span>02</span>
              <h4>Imputación METAR</h4>
              <p>Mediana mensual del propio aeropuerto cuando existía historial suficiente.</p>
            </article>

            <article>
              <span>03</span>
              <h4>Exclusión controlada</h4>
              <p>Registros sin target o sin información mínima fueron retirados.</p>
            </article>
          </div>
        </section>

        <aside className="imputationCleanSide">
          <KpiCard value="3300" label="registros iniciales" />
          <KpiCard value="3254" label="registros para modelado" tone="green" />
          <KpiCard value="46" label="aeropuertos con datos" tone="orange" />
        </aside>
      </div>

      <div className="imputationPrinciples">
        <article>
          <strong>Imputación meteorológica</strong>
          <span>Mediana mensual del mismo aeropuerto.</span>
        </article>

        <article>
          <strong>Consistencia temporal</strong>
          <span>No se usó información futura para completar meses pasados.</span>
        </article>

        <article>
          <strong>Control de leakage</strong>
          <span>El target futuro no se utilizó como predictor.</span>
        </article>
      </div>

      <div className="insightBox">
        La imputación permitió conservar cobertura sin introducir información futura.
      </div>
    </SlideShell>
  );
}