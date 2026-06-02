import { ArrowRight, Database, MapPinned, CloudSun } from 'lucide-react';
import { InfoCard } from '../components/InfoCard';
import { SectionTitle } from '../components/SectionTitle';
import { SlideShell } from '../components/SlideShell';

/** Muestra arquitectura por capas y decisiones técnicas. */
export function PipelineSlide({ number, total }) {
  const layers = [
    ['BRONZE', 'Raw', '#D67D34'],
    ['SILVER', 'Limpieza', '#A7A9AC'],
    ['GOLD', 'Modelo', '#FFD126'],
  ];

  return (
    <SlideShell number={number} total={total} citations={['D1', 'M1']}>
      <SectionTitle icon={<Database />} eyebrow="Pipeline batch · PySpark en Databricks · 3 capas" title="Proceso de ingesta de datos" />
      <div className="pipelineFlow">
        {layers.map((layer, index) => (
          <div className="pipeGroup" key={layer[0]}>
            <div className="pipeBox" style={{ background: layer[2] }}>
              <b>{layer[0]}</b>
              <span>{layer[1]}</span>
            </div>
            {index < layers.length - 1 && <ArrowRight className="pipeArrow" />}
          </div>
        ))}
      </div>

      <div className="threeCols compactCards">
        <InfoCard title="OurAirports" icon={<MapPinned />}>146 aeropuertos · códigos ICAO/IATA · coordenadas.</InfoCard>
        <InfoCard title="IEM METAR" icon={<CloudSun />} tone="green">139 estaciones meteorológicas consultadas · histórico 2020–2025.</InfoCard>
        <InfoCard title="datos.gov.co" icon={<Database />} tone="orange">455.787 filas de tráfico OD · 550.724 filas de operaciones.</InfoCard>
      </div>

      <div className="technicalBox">
        <b>Decisiones técnicas clave</b>
        <p>› Solo aeropuertos SK con ICAO válido → 66 usables</p>
        <p>› IEM: mínimo 500 observaciones/aeropuerto → 48 con cobertura útil</p>
        <p>› Unidad de análisis: icao_code + fecha_mes → granularidad mensual</p>
        <p>› Separación temporal: train 2020-01→2023-08 · validación · test</p>
      </div>
    </SlideShell>
  );
}
