# Notebooks Databricks / PySpark

Esta carpeta contiene los notebooks del proyecto preparados para ejecución en Databricks y procesamiento distribuido con PySpark.

Aunque los nombres de los notebooks pueden coincidir con los de la carpeta `local/`, esta versión corresponde al entorno Databricks, por lo que puede incluir rutas, configuraciones y supuestos propios de ejecución en la plataforma.

## Contenido

| Archivo                                                            | Descripción                                                                                                                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `notebook_ingesta_aeropuertos_colombia_iem_datosgov_PYSPARK.ipynb` | Notebook de ingesta y procesamiento inicial de fuentes abiertas relacionadas con aeropuertos, operaciones, tráfico origen-destino y datos meteorológicos IEM/METAR. |
| `ingenieria_de_caracteristicas_aeropuertos_colombia_PYSPARK.ipynb` | Notebook de construcción de variables e ingeniería de características usando PySpark. Incluye transformación de datos a nivel aeropuerto-mes.                       |
| `eda_aeropuertos_colombia.ipynb`                                   | Notebook de análisis exploratorio adaptado al entorno de Databricks.                                                                                                |
| `01_modelado_baselines_y_clasicos.ipynb`                           | Notebook de modelado, entrenamiento y evaluación de modelos base y modelos clásicos.                                                                                |

## Entorno de ejecución

Estos notebooks están pensados para ejecutarse en Databricks, especialmente en escenarios donde se usan rutas del entorno cloud, procesamiento distribuido o almacenamiento gestionado por la plataforma.

## Nota importante

Los notebooks de esta carpeta pueden no ejecutarse directamente en local sin modificar rutas de entrada, rutas de salida o configuraciones del entorno.

Para ejecución local, usar la carpeta:

```text
01_notebooks/local/
```
