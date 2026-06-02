import { ExternalLink } from 'lucide-react';
import { SlideShell } from '../components/SlideShell';

/** Diapositiva final con imagen/maqueta de la landing y enlace al dashboard real. */
export function DashboardSlide({ number, total }) {
  const url = 'https://aeropuertos-pi.streamlit.app/';

  return (
    <SlideShell number={number} total={total} citations={['D1']} className="dashboardFinal">
      <div className="dashboardFinalGrid">
        <section>
          <span className="pill light">Dashboard interactivo</span>
          <h1>Los datos tienen<br />la respuesta.</h1>
          <p className="closingLead">Cada mes, más de 80.000 operaciones despegan y aterrizan en Colombia. Detrás de cada vuelo hay personas, decisiones y recursos.</p>
          <p className="closingCopy">Ahora los invitamos a explorar el dashboard, donde la información operacional, meteorológica y territorial se presenta de forma interactiva.</p>
          <a className="dashboardButton" href={url} target="_blank" rel="noreferrer"><ExternalLink size={22} /> Abrir dashboard interactivo</a>
        </section>

        <a className="dashboardShot" href={url} target="_blank" rel="noreferrer" aria-label="Abrir dashboard interactivo">
          <img src="/assets/dashboard_landing.svg" alt="Landing page del dashboard AeroDatos Colombia" />
          <div><ExternalLink size={22} /> Abrir dashboard</div>
        </a>
      </div>
    </SlideShell>
  );
}
