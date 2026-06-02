/**
 * Encabezado estándar de diapositivas: ícono, categoría y título.
 */
export function SectionTitle({ icon, eyebrow, title }) {
  return (
    <div className="sectionTitle">
      <div className="sectionIcon">{icon}</div>
      <div>
        <p>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
