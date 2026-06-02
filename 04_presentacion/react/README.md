# AeroDatos Colombia · Presentación React interactiva

Presentación de apoyo para el Proyecto Integrador: **clasificación del nivel de operación aérea mensual por aeropuerto en Colombia**.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Luego abre la URL local que entrega Vite.

## Estructura

```text
public/data/        JSON y CSV usados por las diapositivas
public/assets/      Imagen/maqueta de la landing del dashboard
src/components/     Componentes base reutilizables
src/charts/         Gráficas interactivas con Recharts
src/slides/         Diapositivas de la presentación
src/styles.css      Estilos globales
```

## Notas

- Las diapositivas usan datos internos en JSON para evitar depender de internet durante la exposición.
- Las citaciones visibles se muestran como `[D1]`, `[D2]`, etc., y se desarrollan en la diapositiva final de referencias.
- El código está separado por componentes y comentado para facilitar mantenimiento.
