# Predicción del nivel mensual de operaciones aeroportuarias en Colombia

Repositorio del proyecto integrador orientado a analizar, preparar, visualizar y modelar información mensual de aeropuertos colombianos mediante datos abiertos, meteorología aeronáutica y modelos de Machine Learning.

El objetivo general del proyecto es clasificar el nivel esperado de operaciones aeroportuarias del siguiente mes en tres categorías: **bajo**, **medio** y **alto**, usando como unidad de análisis el par **aeropuerto-mes**.

---

## Integrantes

* Mauricio David Correa Hernández
* Alejandro Suarez Montoya
* Sara Maria Cardona Villada
* Veronica Zapata Vargas

---

## Cursos asociados

* Almacenamiento y Procesamiento de Grandes Datos
* Aprendizaje Automático
* Visualización de Datos

---

## Institución

Universidad EAFIT
Medellín, Colombia
Junio de 2026

---

## Estructura del repositorio

```text
proyecto-integrador-aeropuertos-colombia
├── 01_notebooks
│   ├── databricks
│   │   ├── 01_modelado_baselines_y_clasicos.ipynb
│   │   ├── eda_aeropuertos_colombia.ipynb
│   │   ├── ingenieria_de_caracteristicas_aeropuertos_colombia_PYSPARK.ipynb
│   │   ├── notebook_ingesta_aeropuertos_colombia_iem_datosgov_PYSPARK.ipynb
│   │   └── README.md
│   └── local
│       ├── 01_modelado_baselines_y_clasicos.ipynb
│       ├── data_proyecto_aeropuertos
│       ├── eda_aeropuertos_colombia.ipynb
│       ├── ingenieria_de_caracteristicas_aeropuertos_colombia_PYSPARK.ipynb
│       ├── notebook_ingesta_aeropuertos_colombia_iem_datosgov_PYSPARK.ipynb
│       └── README.md
├── 02_informe
│   └── Entrega_final_PI_Aeropuertos.pdf
├── 03_dashboard
│   └── aerodatos_colombia
│       ├── app.py
│       ├── data
│       ├── README.md
│       ├── requirements.txt
│       └── src
├── 04_presentacion
│   └── react
│       ├── index.html
│       ├── package.json
│       ├── package-lock.json
│       ├── public
│       ├── README.md
│       └── src
├── 05_entregables
│   ├── enlace_dashboard.txt
│   ├── enlace_presentacion.txt
│   └── README.md
├── .gitignore
├── README.md
└── requirements.txt

```

---

## Descripción de carpetas

| Carpeta                    | Descripción                                                                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `01_notebooks/databricks/` | Contiene notebooks preparados para ejecución en Databricks y procesamiento distribuido con PySpark.                                     |
| `01_notebooks/local/`      | Contiene notebooks preparados para ejecución local. Incluye la carpeta `data_proyecto_aeropuertos/` con los datos generados localmente. |
| `02_informe/`              | Contiene el informe final del proyecto en formato PDF.                                                                                  |
| `03_dashboard/aerodatos_colombia/`            | Contiene el código fuente del dashboard interactivo desarrollado en Streamlit.                                                          |
| `04_presentacion/react/`         | Contiene el código fuente de la presentación interactiva desarrollada en React.                                                         |
| `05_entregables/`          | Contiene enlaces y accesos rápidos a los entregables finales, como el dashboard y la presentación desplegada.                           |

---

## Descripción general del proyecto

El proyecto integra diferentes fuentes de datos relacionadas con la actividad aeroportuaria en Colombia. A partir de estas fuentes, se construyó un dataset mensual por aeropuerto que permite estudiar patrones operacionales, demanda de pasajeros, carga, conectividad y condiciones meteorológicas.

La unidad de análisis es:

```text
aeropuerto-mes
```

Cada registro representa el comportamiento mensual de un aeropuerto identificado mediante código ICAO.

El dataset final fue utilizado para:

* análisis exploratorio de datos;
* preparación y limpieza de datos;
* ingeniería de características;
* construcción de variables temporales;
* entrenamiento de modelos de Machine Learning;
* evaluación de modelos;
* visualización interactiva mediante dashboard;
* comunicación de resultados mediante presentación interactiva.

---

## Fuentes de datos

El proyecto integra información proveniente de fuentes abiertas y datos procesados por el equipo, incluyendo:

* información maestra de aeropuertos;
* operaciones aéreas acumuladas;
* tráfico origen-destino;
* observaciones meteorológicas METAR/ASOS;
* dataset final construido a nivel aeropuerto-mes.

Fuentes principales utilizadas:

| Fuente                                                  | Uso dentro del proyecto                                                                   |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| OurAirports                                             | Información maestra de aeropuertos, coordenadas, códigos ICAO/IATA y atributos generales. |
| Datos Abiertos Colombia — Operaciones aéreas acumuladas | Información histórica de operaciones aéreas por aeropuerto.                               |
| Datos Abiertos Colombia — Tráfico origen-destino        | Información de pasajeros, carga, rutas, orígenes y destinos.                              |
| Iowa Environmental Mesonet / ASOS-METAR                 | Variables meteorológicas históricas asociadas a aeropuertos y estaciones.                 |
| Dataset construido por el equipo                        | Consolidación final de datos a nivel aeropuerto-mes.                                      |

---

## Notebooks

Los notebooks se separan en dos entornos porque las rutas y condiciones de ejecución son diferentes.

### Notebooks Databricks

Ubicación:

```text
01_notebooks/databricks/
```

Estos notebooks están orientados a ejecución en Databricks y pueden incluir rutas específicas del entorno cloud, procesamiento con PySpark o acceso a almacenamiento gestionado por la plataforma.

Contenido esperado:

```text
01_notebooks/databricks/
├── notebook_ingesta_aeropuertos_colombia_iem_datosgov_PYSPARK.ipynb
├── ingenieria_de_caracteristicas_aeropuertos_colombia_PYSPARK.ipynb
├── eda_aeropuertos_colombia.ipynb
├── 01_modelado_baselines_y_clasicos.ipynb
└── README.md
```

Estos notebooks pueden usar rutas propias de Databricks, por lo que no necesariamente funcionan directamente en local sin modificar rutas o configuración del entorno.

### Notebooks locales

Ubicación:

```text
01_notebooks/local/
```

Estos notebooks están orientados a ejecución local. En esta carpeta también se incluye:

```text
01_notebooks/local/data_proyecto_aeropuertos/
```

Esta carpeta contiene los datos generados localmente y utilizados por los notebooks de análisis exploratorio, modelado y visualización.

Contenido esperado:

```text
01_notebooks/local/
├── data_proyecto_aeropuertos/
├── notebook_ingesta_aeropuertos_colombia_iem_datosgov_PYSPARK.ipynb
├── ingenieria_de_caracteristicas_aeropuertos_colombia_PYSPARK.ipynb
├── eda_aeropuertos_colombia.ipynb
├── 01_modelado_baselines_y_clasicos.ipynb
└── README.md
```

La carpeta `data_proyecto_aeropuertos/` se mantiene junto a los notebooks locales para conservar rutas simples y consistentes durante la ejecución local.

---

## Datos generados localmente

Los datos generados localmente se encuentran en:

```text
01_notebooks/local/data_proyecto_aeropuertos/
```

Esta carpeta puede incluir:

* dataset final de modelado;
* archivos intermedios generados localmente;
* métricas de modelos;
* importancia de variables;
* matrices de confusión;
* archivos JSON o CSV usados en dashboard y presentación;
* archivos de resumen del proyecto.

Esta organización se eligió para mantener los datos junto a los notebooks locales y evitar cambios innecesarios en rutas.

---

## Requerimientos

El proyecto tiene tres grupos principales de dependencias:

| Componente          | Archivo de dependencias         | Uso                                       |
| ------------------- | ------------------------------- | ----------------------------------------- |
| Notebooks locales   | `requirements.txt`              | EDA, modelado y visualización local.      |
| Dashboard Streamlit | `03_dashboard/aerodatos_colombia/requirements.txt` | Ejecución del dashboard interactivo.      |
| Presentación React  | `04_presentacion/react/package.json`  | Ejecución de la presentación interactiva. |

---

## Requerimientos para notebooks locales

Instalar desde la raíz del repositorio:

```bash
pip install -r requirements.txt
```

Archivo esperado:

```text
requirements.txt
```

Dependencias principales:

```text
pandas
numpy
scikit-learn
lightgbm
xgboost
optuna
matplotlib
seaborn
plotly
openpyxl
pyarrow
jupyter
notebook
ipykernel
requests
tqdm
```

---

## Dashboard interactivo

El dashboard se encuentra en:

```text
03_dashboard/aerodatos_colombia/
```

El dashboard fue desarrollado con Streamlit y permite explorar visualmente información de aeropuertos colombianos mediante:

* mapa interactivo;
* filtros por periodo, región y tipo de aeropuerto;
* vistas de operaciones, pasajeros, carga, conectividad y clima;
* selección de aeropuerto mediante clic;
* indicadores resumidos;
* evolución temporal por aeropuerto o vista nacional.

### Ejecutar dashboard localmente

Desde la raíz del repositorio:

```bash
cd 03_dashboard/aerodatos_colombia/
pip install -r requirements.txt
streamlit run app.py
```

### Requerimientos del dashboard

Archivo esperado:

```text
03_dashboard/aerodatos_colombia/requirements.txt
```

Dependencias principales:

```text
streamlit
pandas
numpy
folium
streamlit-folium
plotly
branca
```

### Despliegue

El dashboard también puede ejecutarse en plataformas compatibles con Streamlit, como Streamlit Community Cloud.

En caso de despliegue, se recomienda verificar que:

* el archivo `requirements.txt` esté dentro de `03_dashboard/aerodatos_colombia/`;
* el archivo `app.py` esté en la raíz de `03_dashboard/aerodatos_colombia/`;
* las rutas sean relativas;
* los datos necesarios estén incluidos dentro de la carpeta del dashboard o sean accesibles desde el entorno de despliegue.

---

## Presentación interactiva

La presentación se encuentra en:

```text
04_presentacion/react/
```

Fue desarrollada en React como apoyo visual e interactivo para la exposición final del proyecto.

La presentación incluye:

* nombre del proyecto;
* integrantes;
* problema a resolver;
* fuentes de datos;
* proceso de ingesta y preparación;
* análisis exploratorio de datos;
* ingeniería de características;
* desarrollo y comparación de modelos;
* resultados del modelo final;
* conclusiones;
* referencias.

### Ejecutar presentación localmente

Desde la raíz del repositorio:

```bash
cd 04_presentacion/react/
npm install
npm run dev
```

### Requerimientos de la presentación

Archivo esperado:

```text
04_presentacion/react/package.json
```

Dependencias principales:

```text
react
react-dom
vite
lucide-react
framer-motion
recharts
```

### Construir versión de producción

```bash
npm run build
```

### Visualizar versión construida

```bash
npm run preview
```

---

## Informe final

El informe final en PDF se encuentra en:

```text
02_informe/
```

Este documento contiene:

* introducción;
* marco teórico;
* desarrollo metodológico;
* análisis exploratorio;
* preparación de datos;
* ingeniería de características;
* modelado;
* evaluación;
* visualización y comunicación de datos;
* conclusiones;
* referencias.

---

## Entregables

La carpeta:

```text
05_entregables/
```

incluye archivos de acceso rápido a los productos finales, como:

* enlace al dashboard interactivo;
* enlace a la presentación interactiva;
* notas de entrega.

Contenido esperado:

```text
05_entregables/
├── enlace_dashboard.txt
├── enlace_presentacion.txt
└── README.md
```

---

## Reproducibilidad

Para revisar o reproducir el proyecto se recomienda seguir este orden:

1. Revisar el informe final en `02_informe/`.
2. Revisar los notebooks en `01_notebooks/`.
3. Ejecutar los notebooks locales desde `01_notebooks/local/`.
4. Revisar o ejecutar el dashboard desde `03_dashboard/aerodatos_colombia/`.
5. Revisar o ejecutar la presentación desde `04_presentacion/react/`.
6. Consultar enlaces de entrega en `05_entregables/`.

Los notebooks locales y los notebooks de Databricks se mantienen separados para evitar conflictos de rutas y facilitar la revisión del proyecto en ambos entornos.

---

## Ejecución rápida

### 1. Instalar dependencias generales

```bash
pip install -r requirements.txt
```

### 2. Ejecutar dashboard

```bash
cd 03_dashboard/aerodatos_colombia
pip install -r requirements.txt
streamlit run app.py
```

### 3. Ejecutar presentación React

```bash
cd 04_presentacion/react/
npm install
npm run dev
```

---

## Limpieza recomendada antes de subir a GitHub

Antes de subir el repositorio se recomienda eliminar archivos temporales:

```bash
find . -type d -name "__pycache__" -exec rm -rf {} +
find . -type d -name ".ipynb_checkpoints" -exec rm -rf {} +
find . -type f -name "*.pyc" -delete
```

También se recomienda verificar que no se suban:

* `node_modules/`;
* `dist/`;
* `__pycache__/`;
* `.ipynb_checkpoints/`;
* archivos temporales;
* credenciales;
* tokens;
* secretos de Streamlit.

---

## Nota sobre rutas

Los notebooks locales conservan los datos en:

```text
01_notebooks/local/data_proyecto_aeropuertos/
```

Esta decisión permite mantener consistencia con las rutas usadas durante el desarrollo local.

Los notebooks de Databricks se ubican por separado porque pueden depender de rutas y configuraciones propias de esa plataforma.

---

## Estado final del proyecto

Este repositorio contiene los elementos principales de la entrega final:

* notebooks de trabajo;
* datos generados localmente;
* informe final;
* dashboard interactivo;
* presentación interactiva;
* enlaces de entrega;
* archivos de requerimientos;
* documentación del repositorio.

---
