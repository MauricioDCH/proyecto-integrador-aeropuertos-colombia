import { BarChart3 } from 'lucide-react';
import { Callout } from '../components/Callout';
import { SectionTitle } from '../components/SectionTitle';
import { SlideShell } from '../components/SlideShell';
import { TopAirportsChart } from '../charts/TopAirportsChart';

/** EDA de concentración aeroportuaria con gráfica interactiva. */
export function EdaTopSlide({ data, number, total }) {
  return (
    <SlideShell number={number} total={total} citations={['D1', 'D2']}>
      <SectionTitle icon={<BarChart3 />} eyebrow="Análisis exploratorio" title="¿Quiénes mueven el cielo colombiano?" />
      <div className="edaTopLayout">
        <TopAirportsChart data={data.topAirports} />
        <aside className="insightPanel">
          <h3>💡 Hallazgos clave</h3>
          <p>› SKBO concentra cerca del 29% de las operaciones acumuladas.</p>
          <p>› Los primeros aeropuertos explican gran parte del tráfico nacional.</p>
          <p>› La concentración obliga al modelo a aprender patrones por escala.</p>
        </aside>
      </div>
      <Callout>La actividad aérea colombiana no es homogénea: los hubs y aeropuertos regionales tienen dinámicas operativas distintas.</Callout>
    </SlideShell>
  );
}
