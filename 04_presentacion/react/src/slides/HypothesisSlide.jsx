import { CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { SlideShell } from '../components/SlideShell';
import { HypothesisChart } from '../charts/HypothesisChart';

/** Evidencia visual de la hipótesis meteorológica. */
export function HypothesisSlide({ data, number, total }) {
  return (
    <SlideShell number={number} total={total} citations={['D1', 'M2']}>
      <SectionTitle icon={<CheckCircle2 />} eyebrow="Hipótesis" title="Meteorología adversa sostenida" />
      <div className="hypothesisLayout">
        <HypothesisChart data={data.hypothesis} />
        <aside className="hypothesisNotes">
          <h3>Lo que muestran los datos</h3>
          {data.hypothesis.insights.map((item) => (
            <p key={item}>› {item}</p>
          ))}
        </aside>
      </div>
      <blockquote>{data.hypothesis.statement}</blockquote>
    </SlideShell>
  );
}
