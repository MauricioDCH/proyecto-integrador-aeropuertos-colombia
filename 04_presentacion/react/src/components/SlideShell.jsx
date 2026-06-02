import { motion } from 'framer-motion';

/**
 * Contenedor visual de una diapositiva.
 * Centraliza animación, footer institucional y espacio de citaciones.
 */
export function SlideShell({ children, number, total, citations = [], className = '' }) {
  return (
    <motion.section
      className={`slide ${className}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.26, ease: 'easeOut' }}
    >
      {children}

      {citations.length > 0 && (
        <div className="citations">
          <span>Fuentes:</span>
          {citations.map((citation) => (
            <b key={citation}>[{citation}]</b>
          ))}
        </div>
      )}

      <footer className="slideFooter">
        <div className="motto">
          <span>Inspira</span>
          <span>Crea</span>
          <span>Transforma</span>
        </div>
        <div>
          UNIVERSIDAD EAFIT&nbsp;&nbsp;|&nbsp;&nbsp;2026&nbsp;&nbsp;&nbsp;{number}/{total}
        </div>
      </footer>
    </motion.section>
  );
}
