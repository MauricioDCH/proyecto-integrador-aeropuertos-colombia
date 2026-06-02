import { Sparkles } from 'lucide-react';

/**
 * Bloque resaltado para ideas clave de lectura ejecutiva.
 */
export function Callout({ children }) {
  return (
    <div className="callout">
      <Sparkles size={20} />
      <span>{children}</span>
    </div>
  );
}
