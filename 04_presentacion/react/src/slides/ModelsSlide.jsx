import { BrainCircuit } from 'lucide-react';
import { Callout } from '../components/Callout';
import { SectionTitle } from '../components/SectionTitle';
import { SlideShell } from '../components/SlideShell';

/** Tabla comparativa de modelos. */
export function ModelsSlide({ data, number, total }) {
  return (
    <SlideShell number={number} total={total} citations={['D1', 'M2', 'M3']}>
      <SectionTitle icon={<BrainCircuit />} eyebrow="Desarrollo de modelos" title="Modelado · Comparación de algoritmos" />
      <table className="modelTable">
        <thead>
          <tr><th>Modelo</th><th>Macro F1</th><th>Accuracy</th><th>Balanced Acc</th></tr>
        </thead>
        <tbody>
          {data.modelMetrics.map((row) => (
            <tr key={row.model} className={row.final ? 'final' : ''}>
              <td>{row.final ? '✦ ' : ''}{row.model}</td>
              <td>{row.macroF1 == null ? '—' : row.macroF1.toFixed(3)}</td>
              <td>{row.accuracy == null ? '—' : row.accuracy.toFixed(3)}</td>
              <td>{row.balancedAccuracy == null ? '—' : row.balancedAccuracy.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Callout>Validación temporal estricta: la selección se hizo sin mezclar meses pasados y futuros.</Callout>
    </SlideShell>
  );
}
