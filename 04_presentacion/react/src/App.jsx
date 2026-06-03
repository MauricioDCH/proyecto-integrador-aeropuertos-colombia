import { AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { DeckLayout } from './components/DeckLayout';
import { data } from './data';
import { ConclusionsSlide } from './slides/ConclusionsSlide';
import { CovidSlide } from './slides/CovidSlide';
import { DashboardSlide } from './slides/DashboardSlide';
import { DatasetSlide } from './slides/DatasetSlide';
import { EdaTopSlide } from './slides/EdaTopSlide';
import { FeatureEngineeringSlide } from './slides/FeatureEngineeringSlide';
import { HypothesisSlide } from './slides/HypothesisSlide';
import { ModelsSlide } from './slides/ModelsSlide';
import { PipelineSlide } from './slides/PipelineSlide';
import { ArchitectureSlide } from './slides/ArchitectureSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { ProjectSlide } from './slides/ProjectSlide';
import { ReferencesSlide } from './slides/ReferencesSlide';
import { ResultsSlide } from './slides/ResultsSlide';
import { SourcesSlide } from './slides/SourcesSlide';
import { TargetSlide } from './slides/TargetSlide';
import { WeatherSlide } from './slides/WeatherSlide';
import { ImputationSlide } from './slides/ImputationSlide';

/**
 * Aplicación principal.
 * La presentación se maneja como un arreglo de componentes para facilitar orden, navegación y mantenimiento.
 */
export default function App() {
  const slides = useMemo(
    () => [
      ProjectSlide,
      ProblemSlide,
      SourcesSlide,
      PipelineSlide,
      ArchitectureSlide,
      DatasetSlide,
      ImputationSlide,
      EdaTopSlide,
      CovidSlide,
      TargetSlide,
      WeatherSlide,
      FeatureEngineeringSlide,
      ModelsSlide,
      ResultsSlide,
      HypothesisSlide,
      ConclusionsSlide,
      DashboardSlide,
      ReferencesSlide,
    ],
    [],
  );

  const [index, setIndex] = useState(0);
  const CurrentSlide = slides[index];
  const total = slides.length;

  /** Evita navegación fuera de rango. */
  function goTo(nextIndex) {
    setIndex(Math.max(0, Math.min(total - 1, nextIndex)));
  }

  /** Navegación por teclado para exposición. */
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'ArrowRight') goTo(index + 1);
      if (event.key === 'ArrowLeft') goTo(index - 1);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index, total]);

  return (
    <DeckLayout index={index} total={total} onGoTo={goTo}>
      <AnimatePresence mode="wait">
        <CurrentSlide key={index} data={data} number={index + 1} total={total} />
      </AnimatePresence>
    </DeckLayout>
  );
}
