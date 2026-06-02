import { Fragment } from 'react';
import { COLORS } from '../constants';

/**
 * Matriz de confusión normalizada.
 * La intensidad del azul codifica el porcentaje correcto o confundido por celda.
 */
export function ConfusionMatrix({ data }) {
  const { labels, matrix } = data;

  return (
    <div className="confusionBox">
      <h3>Matriz de confusión normalizada</h3>
      <div className="confusionMatrix" style={{ gridTemplateColumns: `112px repeat(${labels.length}, 1fr)` }}>
        <span />
        {labels.map((label) => <b key={`pred-${label}`}>Pred. {label}</b>)}
        {matrix.map((row, rowIndex) => (
          <Fragment key={`row-${labels[rowIndex]}`}>
            <b key={`real-${labels[rowIndex]}`}>Real {labels[rowIndex]}</b>
            {row.map((value, colIndex) => {
              const intensity = value / 100;
              const background = `rgba(0, 91, 231, ${0.10 + intensity * 0.75})`;
              const color = intensity > 0.55 ? '#FFFFFF' : COLORS.navy;
              return (
                <div key={`${rowIndex}-${colIndex}`} className="confusionCell" style={{ background, color }}>
                  {value.toFixed(1)}%
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
