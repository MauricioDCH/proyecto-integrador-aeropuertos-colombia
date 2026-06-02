import { BookOpen } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { SlideShell } from '../components/SlideShell';

/** Lista final de referencias usadas por la presentación. */
export function ReferencesSlide({ data, number, total }) {
  return (
    <SlideShell number={number} total={total} className="refsSlide">
      <SectionTitle icon={<BookOpen />} eyebrow="Trazabilidad" title="Referencias" />
      <div className="refList">
        {data.references.map((ref) => (
          <p key={ref.id}><b>[{ref.id}] {ref.label}.</b> {ref.text}</p>
        ))}
      </div>
    </SlideShell>
  );
}
