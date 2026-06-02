# Notebooks locales

Esta carpeta contiene los notebooks del proyecto preparados para ejecución local.

Se incluye también la carpeta `data_proyecto_aeropuertos/`, donde se almacenan los archivos generados localmente y utilizados por los notebooks de análisis, modelado y visualización.

## Contenido

| Archivo o carpeta                                                  | Descripción                                                                                                                                                 |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data_proyecto_aeropuertos/`                                       | Carpeta con datos generados localmente para el proyecto. Incluye archivos utilizados por los notebooks locales.                                             |
| `eda_aeropuertos_colombia.ipynb`                                   | Notebook de análisis exploratorio de datos. Permite revisar comportamiento operacional, tráfico, variables meteorológicas y estructura general del dataset. |
| `01_modelado_baselines_y_clasicos.ipynb`                           | Notebook de entrenamiento y evaluación de modelos base y modelos clásicos. Incluye comparación de métricas y selección del modelo final.                    |
| `notebook_ingesta_aeropuertos_colombia_iem_datosgov_PYSPARK.ipynb` | Versión local o de referencia del notebook de ingesta desarrollado originalmente para PySpark/Databricks.                                                   |
| `ingenieria_de_caracteristicas_aeropuertos_colombia_PYSPARK.ipynb` | Versión local o de referencia del notebook de ingeniería de características desarrollado originalmente para PySpark/Databricks.                             |

## Organización de datos

Los datos se mantienen dentro de esta misma carpeta para facilitar la ejecución local y evitar modificar rutas dentro de los notebooks.

Estructura esperada:

```text
01_notebooks/local/
├── data_proyecto_aeropuertos/
├── eda_aeropuertos_colombia.ipynb
├── 01_modelado_baselines_y_clasicos.ipynb
├── notebook_ingesta_aeropuertos_colombia_iem_datosgov_PYSPARK.ipynb
└── ingenieria_de_caracteristicas_aeropuertos_colombia_PYSPARK.ipynb
```

## Entorno de ejecución

Estos notebooks están pensados para ejecutarse desde un entorno local de Python/Jupyter.

Se recomienda abrirlos desde la raíz del repositorio o desde esta carpeta para mantener rutas relativas consistentes.

## Nota importante

La carpeta `local/` conserva los datos junto a los notebooks porque esta fue la forma utilizada para ejecutar y validar el análisis localmente.

Para ejecución en Databricks, usar la carpeta:

```text
01_notebooks/databricks/
```
