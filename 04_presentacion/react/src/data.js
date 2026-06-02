// Importaciones directas de JSON. Vite permite importar JSON como módulos.
// Esto hace que la presentación no dependa de fetch en tiempo de exposición.
import summary from './data/summary.json';
import sources from './data/sources.json';
import topAirports from './data/top_airports.json';
import covidSeries from './data/covid_series.json';
import covidEvents from './data/covid_events.json';
import targetDistribution from './data/target_distribution.json';
import imputation from './data/imputation.json';
import weatherBoxplots from './data/weather_boxplots.json';
import correlations from './data/correlations.json';
import featureEngineering from './data/feature_engineering.json';
import modelMetrics from './data/model_metrics.json';
import confusionMatrix from './data/confusion_matrix.json';
import featureImportance from './data/feature_importance.json';
import hypothesis from './data/hypothesis.json';
import references from './data/references.json';

export const data = {
  summary,
  sources,
  topAirports,
  covidSeries,
  covidEvents,
  targetDistribution,
  imputation,
  weatherBoxplots,
  correlations,
  featureEngineering,
  modelMetrics,
  confusionMatrix,
  featureImportance,
  hypothesis,
  references,
};
