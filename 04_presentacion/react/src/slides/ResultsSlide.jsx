import { Trophy } from 'lucide-react';
import { KpiCard } from '../components/KpiCard';
import { SectionTitle } from '../components/SectionTitle';
import { SlideShell } from '../components/SlideShell';
import { ConfusionMatrix } from '../charts/ConfusionMatrix';
import { FeatureImportanceChart } from '../charts/FeatureImportanceChart';

/** Resultados finales: matriz de confusión, variables importantes y KPIs. */
export function ResultsSlide({ data, number, total }) {
  const metrics = data.confusionMatrix.metrics;

  return (
    <SlideShell number={number} total={total} citations={['D1', 'M2', 'M3']}>
      <SectionTitle icon={<Trophy />} eyebrow="LightGBM final" title="Análisis de resultados" />
      <div className="resultsLayout">
        <ConfusionMatrix data={data.confusionMatrix} />
        <FeatureImportanceChart data={data.featureImportance} limit={20} />
      </div>
      <div className="kpiGrid four compactKpis">
        <KpiCard value={`${metrics.accuracy}%`} label="Accuracy en test" />
        <KpiCard value={`${metrics.balancedAccuracy}%`} label="Balanced accuracy" tone="green" />
        <KpiCard value={`${metrics.macroF1}%`} label="Macro F1" tone="orange" />
        <KpiCard value={`${metrics.extremeConfusion}%`} label="Confusión bajo↔alto" tone="purple" />
      </div>
    </SlideShell>
  );
}
