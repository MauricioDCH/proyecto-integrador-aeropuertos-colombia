import { motion } from 'framer-motion';

/**
 * Tarjeta de texto breve con ícono.
 * Se usa para problema, fuentes, hallazgos y conclusiones compactas.
 */
export function InfoCard({ title, icon, children, tone = 'blue' }) {
  return (
    <motion.article className={`infoCard ${tone}`} whileHover={{ y: -4 }}>
      <div className="infoIcon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </motion.article>
  );
}
