# DOCUMENTO MAESTRO DE CONTINUIDAD DEL PROYECTO
# JUSTICIA EN EQUIDAD / CONCILIACIÓN EN EQUIDAD
**Ministerio de Justicia y del Derecho • República de Colombia**

---

> [!IMPORTANT]
> **DOCUMENTO MAESTRO DE CONSULTA OBLIGATORIA**
> Cualquier agente de inteligencia artificial, desarrollador o asistente técnico que intervenga en este repositorio **DEBE LEER ÍNTEGRAMENTE ESTE DOCUMENTO ANTES DE REALIZAR CUALQUIER ACCIÓN O MODIFICACIÓN**.
> Este archivo consolida los hallazgos de las auditorías técnicas (Auditoría 1, Auditoría 2 y Auditoría 3 de Trazabilidad y Fuente de Verdad) y fija las reglas absolutas para garantizar la continuidad del proyecto sin pérdida de información, desconfiguraciones ni regresiones.

---

## 1. IDENTIDAD DEL PROYECTO

- **Nombre oficial:** JUSTICIA EN EQUIDAD / CONCILIACIÓN EN EQUIDAD
- **Entidad rectora:** Ministerio de Justicia y del Derecho de la República de Colombia
- **Dependencia técnica:** Dirección de Métodos Alternativos de Solución de Conflictos (MASC) • Programa Nacional de Justicia en Equidad (PNJE).
- **Objetivo del proyecto:** Prototipo digital e interactivo de alta fidelidad, diseñado como un portal institucional, pedagógico y ciudadano sobre la Justicia en Equidad y la Conciliación en Equidad en Colombia. Brinda orientación a la ciudadanía para la resolución pacífica de controversias cotidianas mediante el diálogo, guía la gestión de las entidades territoriales (Alcaldías y Gobernaciones) para implementar sus Programas Locales de Justicia en Equidad (PLJE) bajo el Decreto 42 de 2026, acompaña el ejercicio comunitario y registro de los conciliadores en equidad, y visibiliza la red de Puntos de Atención (PACE).

---

## 2. FUENTE DE VERDAD

La **única fuente de verdad** de la aplicación es el código fuente modular contenido en el directorio:

```
src/
```

junto con los archivos de configuración, desarrollo y empaquetado ubicados en la raíz:
- [`index.html`](file:///j:/Proyectos/Pagina_web/index.html): Plantilla base HTML de Vite (568 bytes, contiene `#root` y carga `/src/main.tsx`).
- [`package.json`](file:///j:/Proyectos/Pagina_web/package.json): Definición de dependencias y scripts de ejecución.
- [`package-lock.json`](file:///j:/Proyectos/Pagina_web/package-lock.json): Árbol de dependencias bloqueadas de npm.
- [`vite.config.ts`](file:///j:/Proyectos/Pagina_web/vite.config.ts): Configuración del empaquetador Vite, Tailwind v4 y plugin singlefile.
- [`tsconfig.json`](file:///j:/Proyectos/Pagina_web/tsconfig.json): Configuración de compilación TypeScript.
- [`sync_distributions.ts`](file:///j:/Proyectos/Pagina_web/sync_distributions.ts): Script de distribución de paquetes offline.

### Estructura detallada de la Fuente de Verdad (`src/`):

1. **[`src/main.tsx`](file:///j:/Proyectos/Pagina_web/src/main.tsx):** Punto de entrada y montaje de React 19 en el DOM.
2. **[`src/App.tsx`](file:///j:/Proyectos/Pagina_web/src/App.tsx):** Orquestador central de la aplicación, switch condicional de navegación y layout global.
3. **[`src/index.css`](file:///j:/Proyectos/Pagina_web/src/index.css):** Estilos globales con directiva Tailwind v4 (`@import "tailwindcss";`) y reglas de impresión `@media print` para exportación en papel.
4. **[`src/vite-env.d.ts`](file:///j:/Proyectos/Pagina_web/src/vite-env.d.ts):** Declaraciones de entorno de Vite.
5. **[`src/context/ThemeContext.tsx`](file:///j:/Proyectos/Pagina_web/src/context/ThemeContext.tsx):** Administrador de estado global (navegación por pestaña activa `activeTab`, perfil de usuario, alto contraste accesible, escala tipográfica dinámica y término de búsqueda).
6. **[`src/types/index.ts`](file:///j:/Proyectos/Pagina_web/src/types/index.ts):** Definiciones de tipos e interfaces TypeScript que gobiernan la integridad de los datos institucionales.
7. **[`src/views/`](file:///j:/Proyectos/Pagina_web/src/views):** Las 10 vistas modulares activas del portal.
8. **[`src/components/`](file:///j:/Proyectos/Pagina_web/src/components):** Los 8 componentes interactivos y visuales reutilizables.
9. **[`src/data/`](file:///j:/Proyectos/Pagina_web/src/data):** Los 5 módulos de datos estructurados normativos e institucionales.
10. **[`src/assets/images/`](file:///j:/Proyectos/Pagina_web/src/assets/images):** Las 14 fotografías institucionales en alta definición (10 activas en importaciones de vistas y 4 de reserva histórica).

> [!CAUTION]
> **LOS ARCHIVOS HTML GIGANTES (~18.7 MB) Y ARCHIVOS ZIP SON ARTEFACTOS DERIVADOS DE DISTRIBUCIÓN.**
> Bajo ninguna circunstancia deben editarse directamente ni considerarse la fuente primaria del código. Cualquier modificación funcional, textual, visual o estructural debe realizarse exclusivamente dentro de `src/`.

---

## 3. ARQUITECTURA ACTUAL

El aplicativo está construido sobre una arquitectura **Single Page Application (SPA)** reactiva con React 19 y Tailwind CSS v4, gestionada por pestañas (`activeTab`) a través de `ThemeContext` sin dependencia de enrutadores basados en servidor (`react-router`), lo que garantiza su funcionamiento sin fallas bajo protocolo local `file://`.

### A. Las 10 Vistas Activas
Todas las vistas están actualmente activas y conmutadas en [`src/App.tsx`](file:///j:/Proyectos/Pagina_web/src/App.tsx):

1. **`HomeView.tsx` (`home`):** Página principal con hero institucional, garantías de gratuidad y voluntariedad (Ley 2220), acceso personalizado por 4 perfiles, 3 pilares territoriales fotográficos, narrativa visual de 4 momentos del diálogo, desglose de actores y novedades del Decreto 42 de 2026.
2. **`ConozcaView.tsx` (`conozca`):** Módulo pedagógico "¿Qué es la Conciliación en Equidad?", tabla comparativa "SÍ hace / NO hace" del conciliador, acordeón de los 7 principios rectores y contenido en 4 capas de profundidad.
3. **`RutaCiudadanaView.tsx` (`ruta-ciudadana`):** Pasos secuenciales para resolver una controversia cotidiana, orientador interactivo de 3 preguntas (`CitizenConflictWizard`), preparación previa y desglose de los 5 momentos de la audiencia.
4. **`ConciliadoresView.tsx` (`conciliadores`):** Portal para operadores comunitarios en 4 estados (aspirante, nombrado, activo, inactivo), trámite de inscripción bianual obligatoria y estímulos de vivienda de interés social y educación superior (Decreto 42).
5. **`PljeView.tsx` (`plje`):** Guía técnica y gerencial para Alcaldías y Gobernaciones, 4 escenarios territoriales de partida, plazos legales (21 de enero de 2027 y 2034) y checklist interactivo en 10 etapas con impresión.
6. **`PaceView.tsx` (`pace`):** 8 condiciones mínimas obligatorias de calidad para los Puntos de Atención de la Conciliación en Equidad (privacidad acústica, accesibilidad) y directorio territorial interactivo con filtros.
7. **`SistemaView.tsx` (`sistema`):** Mapa interactivo de 7 nodos institucionales articulados (SNC, MinJusticia, PNJE, PLJE, PACE, Conciliadores, Academia) con insumos, roles y productos.
8. **`RecursosView.tsx` (`recursos`):** Centro de documentación oficial filtrable por tipo y público, con visualizador modal de minutas de decreto, actas de acuerdo y modelos reglamentarios.
9. **`FaqView.tsx` (`faq`):** Banco integral de 38 preguntas frecuentes clasificadas en 8 categorías, con buscador predictivo en tiempo real y valoración de utilidad.
10. **`GlosarioView.tsx` (`glosario`):** Glosario interactivo A-Z en lenguaje claro y tabla pedagógica de términos a evitar vs. expresiones recomendadas.

### B. Los 8 Componentes Activos
Todos los componentes de [`src/components/`](file:///j:/Proyectos/Pagina_web/src/components) están en uso activo:

1. **`Header.tsx`:** Cabecera institucional oficial con barra superior GOV.CO en `#004899`, selector de accesibilidad (tamaño de fuente y alto contraste), buscador dinámico, barra de perfiles y navegación responsive con menú hamburguesa.
2. **`Footer.tsx`:** Pie de página oficial de 4 columnas con canales de atención, teléfonos, sede de MinJusticia en Bogotá (Calle 53 No. 13-27) y enlaces normativos.
3. **`CitizenConflictWizard.tsx`:** Orientador interactivo de conflictos en 3 preguntas con algoritmo de derivación a 4 posibles resultados pedagógicos y de urgencia.
4. **`PljeInteractiveChecklist.tsx`:** Herramienta gerencial interactiva de 39 tareas en 10 etapas para formular el PLJE, cálculo automático de avance porcentual e impresión optimizada.
5. **`TerritorialMap.tsx`:** Directorio territorial interactivo con filtros por 33 entidades territoriales, tipo de espacio, accesibilidad física, conmutador tarjetas/tabla y modal de detalle.
6. **`LayeredContent.tsx`:** Módulo de divulgación pedagógica progresiva en 4 capas (Esencial, Ampliada, Técnica, Legal).
7. **`GovCoLogo.tsx`:** Logotipo SVG oficial del portal GOV.CO con los tres acentos de la bandera colombiana.
8. **`MinJusticiaLogo.tsx`:** Logotipo SVG oficial del Ministerio de Justicia y del Derecho con barra tricolor reglamentaria en variantes color y negativo.

### C. Los 5 Módulos de Datos Institucionales
Todos los archivos de [`src/data/`](file:///j:/Proyectos/Pagina_web/src/data) alimentan directamente a las vistas y componentes:

1. **`faqs.ts`:** 38 preguntas frecuentes fundamentadas jurídicamente.
2. **`glossary.ts`:** 22+ términos pedagógicos y sustituciones comunicativas de lenguaje claro.
3. **`pljeSteps.ts`:** 10 pasos con tareas obligatorias y marcos legales para administraciones locales.
4. **`resources.ts`:** 12 recursos documentales oficiales con fichas técnicas y modelos.
5. **`territoryPace.ts`:** Directorio de puntos PACE y catálogo de departamentos de Colombia.

---

## 4. FUNDAMENTO NORMATIVO

El proyecto posee una rigurosa fundamentación jurídica que debe preservarse intacta:

1. **Constitución Política de Colombia (Artículo 116):** Faculta a los particulares para administrar justicia transitoriamente como conciliadores en equidad.
2. **Ley 2220 de 2022 (Estatuto Nacional de Conciliación):**
   - Principios de gratuidad estricta (prohibición de cobro de honorarios o dádivas, arts. 8 y 9).
   - Naturaleza autocompositiva y voluntaria (arts. 3, 4 y 5).
   - Asuntos conciliables y no conciliables (art. 7).
   - Nombramiento judicial e inscripción (art. 28).
   - Desarrollo de audiencias, Actas con mérito ejecutivo y efecto de cosa juzgada (arts. 50, 61, 64, 65 y 66).
3. **Decreto 42 de 2026:**
   - Obligatoriedad y sostenibilidad del Programa Local de Justicia en Equidad (PLJE) en todos los municipios y distritos.
   - **Plazos perentorios de estricta conservación textual:** Plazo perentorio de 1 año (hasta el **21 de enero de 2027**) para municipios con conciliadores ya nombrados y activos; y plazo gradual hasta el año **2034** para municipios sin nombramientos previos.
   - Inscripción bianual obligatoria (cada 2 años) de los conciliadores ante el PLJE.
   - Estándares de calidad para Puntos de Atención (PACE).
   - Estímulos prioritarios en subsidios de vivienda de interés social y programas de educación superior.
   - Judicatura de 7 meses para egresados de Derecho en los PLJE.

> [!WARNING]
> **REGLA SOBRE CONTENIDO JURÍDICO:**
> El contenido normativo existente debe conservarse estrictamente. **NO debe ser resumido, sustituido, reinterpretado ni alterado en sus plazos, artículos o principios** sin una solicitud expresa, documentada y justificada.

---

## 5. DISEÑO Y EXPERIENCIA

El proyecto es un micrositio institucional moderno, pedagógico y ciudadano que proyecta alta credibilidad estatal y cercanía comunitaria.

Cualquier intervención debe preservar:
- **Identidad institucional:** Uso de la paleta oficial GOV.CO (`#004899`, `#003875`, `#FCD116`, `#CE1126`) y estilos sobrios y legibles.
- **Lenguaje claro:** Explicaciones comprensibles para cualquier ciudadano, evitando tecnicismos procesales innecesarios.
- **Navegación por perfiles:** Acceso segmentado para Ciudadanía, Alcaldías/Gobernaciones, Conciliadores y Academia/Aliados.
- **Accesibilidad universal:** Conmutadores funcionales de escala tipográfica (`A`, `A+`, `A++`), modo de alto contraste y alternativa de visualización en tabla accesible en el directorio PACE.
- **Responsive design:** Adaptación fluida en dispositivos móviles, tabletas y computadores de escritorio mediante breakpoints de Tailwind.
- **Jerarquía visual y componentes interactivos:** Wizards, calculadoras de porcentaje, acordeones y modales.
- **Recursos fotográficos:** Fotografías en alta resolución con respeto por el contexto comunitario y rural colombiano.
- **Estructura de navegación existente:** Mantener las 10 pestañas y el flujo de navegación sin recargas del navegador.

---

## 6. REGLAS ABSOLUTAS DE CONTINUIDAD

Todo agente de IA o desarrollador debe obedecer estrictamente las siguientes reglas:

1. **NO eliminar contenido** salvo solicitud expresa y justificada.
2. **NO resumir contenido** institucional o normativo salvo solicitud expresa.
3. **NO reescribir contenido normativo**, plazos o citas de leyes y decretos salvo solicitud expresa.
4. **NO cambiar la arquitectura** modular (React 19 + TypeScript + Tailwind v4) sin autorización.
5. **NO alterar el diseño visual** fuera del alcance específico de la solicitud.
6. **NO sustituir recursos fotográficos** ni logotipos sin autorización previa.
7. **NO eliminar recursos existentes** en `src/data/`, `src/components/` o `src/views/`.
8. **NO convertir una solicitud puntual en un rediseño general** de la plataforma.
9. **NO modificar otras vistas o módulos** para resolver una solicitud localizada en un componente específico.
10. **NO realizar tareas de limpieza técnica** mientras se trabaje en una modificación funcional o visual, salvo autorización expresa.
11. **NO modificar artefactos derivados** (archivos `.html` monocompilados o `.zip`) como si fueran la fuente de verdad.
12. **Antes de modificar cualquier archivo**, identificar con exactitud qué archivos específicos están involucrados.
13. **Después de cada modificación**, verificar exhaustivamente que no se hayan producido cambios imprevistos o no solicitados en otras áreas del portal.

---

## 7. DISTRIBUCIÓN OFFLINE

La auditoría técnica determinó el estado exacto de las distribuciones sin conexión:

1. **Paquete ZIP Íntegro y Válido:**
   - Ubicación: [`public/JUSTICIA_EN_EQUIDAD_OFFLINE_2026.zip`](file:///j:/Proyectos/Pagina_web/public/JUSTICIA_EN_EQUIDAD_OFFLINE_2026.zip) y [`JUSTICIA_EN_EQUIDAD_OFFLINE/JUSTICIA_EN_EQUIDAD_OFFLINE_2026.zip`](file:///j:/Proyectos/Pagina_web/JUSTICIA_EN_EQUIDAD_OFFLINE/JUSTICIA_EN_EQUIDAD_OFFLINE_2026.zip) (ambos idénticos, SHA-256: `45C4397F02E69119283F83983C6E297BB452F8323ADC31766D75EEDEAB007308`, tamaño: 20.26 MB).
   - **Hallazgo:** Este ZIP contiene una versión offline de **14 MB (`14,034,664 bytes`) 100% íntegra, limpia, sintácticamente perfecta y completamente funcional**, que incluye las 10 vistas, los 8 componentes, las 5 bases de datos y las 10 imágenes activas codificadas en Base64.
2. **Archivos HTML derivados sueltos en disco (~18.7 MB):**
   - Existen múltiples copias monocompiladas en la raíz (`00_ABRIR...`, `00_INICIAR...`, `ABRIR...`), en `public/` y en `JUSTICIA_EN_EQUIDAD_OFFLINE/`.
   - **Hallazgo:** La auditoría confirmó que son artefactos derivados generados por scripts anteriores que presentan redundancia y cortes sintácticos.

> [!IMPORTANT]
> **REGLA DE CONSERVACIÓN:**
> **NO eliminar ninguno de estos artefactos derivados ni el ZIP durante la continuidad del proyecto sin autorización humana expresa.**

---

## 8. PROBLEMA DETECTADO EN `sync_distributions.ts`

La Auditoría 3 descubrió la causa técnica de por qué los archivos HTML sueltos pesaban 18.7 MB y tenían anomalías en su cierre:

- **Mecanismo:** En [`sync_distributions.ts`](file:///j:/Proyectos/Pagina_web/sync_distributions.ts#L34), la instrucción:
  ```ts
  fullHtmlContent = fullHtmlContent.replace('</body>', `${combinedScripts}\n</body>`);
  ```
  utiliza el método `String.prototype.replace(searchValue, replaceString)` nativo de JavaScript.
- **Falla:** Cuando el código minificado de React/Vite contiene símbolos `$` (como `$'`, `$&` o `$$`, habituales en minificación), JavaScript los interpreta como patrones especiales de reemplazo (duplicación de fragmentos precedentes o siguientes), provocando que el string crezca de 14 MB a 18.7 MB y se corrompa el cierre `</script></body></html>`.
- **Solución técnica identificada:** Reemplazar el segundo argumento por una función de retorno (`replace('</body>', () => `${combinedScripts}\n</body>`)`), lo que inmuniza el proceso frente a caracteres especiales y produce bundles limpios de 14 MB idénticos al del ZIP.

> [!CAUTION]
> **ESTADO DE LA CORRECCIÓN:**
> La corrección es técnicamente conocida, pero **NO DEBE EJECUTARSE TODAVÍA**.
> **NO debe modificarse `sync_distributions.ts` ni ejecutarse `npm run build` hasta recibir autorización humana expresa en la fase correspondiente.**

---

## 9. ESTADO ACTUAL DEL PROYECTO

Al momento del cierre de la Auditoría 3:
- La aplicación modular en React 19 + TypeScript + Tailwind CSS v4 está **completamente presente, operativa y limpia** en `src/`.
- Las **10 vistas** están presentes y activas.
- Los **8 componentes** interactivos y de navegación están presentes y activos.
- Los **5 módulos de datos institucionales** están presentes y activos.
- Las **10 imágenes activas** en alta definición están presentes en `src/assets/images/`.
- El **ZIP Offline íntegro** (14 MB interno) está presente en `public/` y `JUSTICIA_EN_EQUIDAD_OFFLINE/`.
- No se deben considerar los HTML gigantes de 18.7 MB como fuente de verdad.
- **NO se ha realizado ni autorizado todavía ningún saneamiento, eliminación de archivos ni modificación de código.**

---

## 10. BITÁCORA DE CAMBIOS

### Auditoría 1 — Estado Inicial y Estructura
- **Estado:** COMPLETADA — SOLO LECTURA.
- **Resultado:** Identificación del origen del proyecto en Google AI Studio, inventario preliminar de carpetas, dependencias y confirmación de funcionamiento local sin alteraciones.
- **Acciones realizadas:** Ninguna modificación sobre archivos existentes.

### Auditoría 2 — Inspección Funcional y Normativa
- **Estado:** COMPLETADA — SOLO LECTURA.
- **Resultado:** Verificación detallada de las 10 vistas, los 8 componentes, el marco jurídico (Ley 2220 de 2022 y Decreto 42 de 2026), diseño accesible y responsividad.
- **Acciones realizadas:** Ninguna modificación sobre archivos existentes.

### Auditoría 3 — Trazabilidad y Fuente de Verdad
- **Estado:** COMPLETADA — SOLO LECTURA.
- **Resultado:** Confirmación rigurosa de que `src/` es la única fuente de verdad; verificación de que los 6 HTMLs de 18.7 MB son artefactos derivados duplicados; confirmación de que el ZIP `JUSTICIA_EN_EQUIDAD_OFFLINE_2026.zip` contiene la versión compilada de 14 MB sana, íntegra y funcional; e identificación del problema de tokens `$` en `sync_distributions.ts`.
- **Acciones realizadas:** Ninguna modificación sobre archivos del proyecto. Ningún build ejecutado. Ningún archivo eliminado.

---

## 11. PENDIENTES TÉCNICOS

> [!NOTE]
> Los siguientes puntos corresponden a elementos identificados para fases futuras.
> **SON EXCLUSIVAMENTE PENDIENTES Y NO DEBEN EJECUTARSE AUTOMÁTICAMENTE.**

1. **Corrección controlada de `sync_distributions.ts`:** Aplicar el reemplazo seguro mediante función para generar bundles sanos de 14 MB.
2. **Definición de la distribución Offline canónica:** Acordar con el usuario si se mantendrá un único HTML autónomo en la raíz o en una subcarpeta dedicada (`distribuciones/offline/`).
3. **Política y limpieza de duplicados:** Evaluar la depuración segura de los HTMLs y ZIPs redundantes en disco una vez estabilizado el pipeline.
4. **Validación de las 4 imágenes de reserva:** Confirmar con el usuario si las 4 fotografías no importadas en `src/assets/images/` se conservan como banco de imágenes o se archivan.
5. **Destino de la versión histórica Vanilla JS:** Decidir el momento de archivar o retirar los archivos estáticos históricos en `JUSTICIA_EN_EQUIDAD_OFFLINE/js/app.js` y `css/styles.css`.

---

## 12. PROTOCOLO PARA FUTUROS AGENTES DE IA

Cualquier agente de inteligencia artificial que reciba una instrucción de modificación o desarrollo sobre este repositorio debe acatar rigurosamente el siguiente protocolo:

### ANTES DE CUALQUIER MODIFICACIÓN:
1. **Leer este archivo íntegro:** [`00_CONTINUIDAD_PROYECTO_JUSTICIA_EN_EQUIDAD.md`](file:///j:/Proyectos/Pagina_web/00_CONTINUIDAD_PROYECTO_JUSTICIA_EN_EQUIDAD.md).
2. **Inspeccionar el código relevante:** Utilizar herramientas de lectura exclusivamente sobre los archivos afectados dentro de `src/`.
3. **Identificar exactamente los archivos afectados:** Delimitar el alcance mínimo necesario sin intervenir archivos ajenos a la solicitud.
4. **Explicar qué se modificará:** Detallar al usuario el plan de acción puntual antes de realizar cambios de impacto.
5. **NO modificar archivos fuera del alcance solicitado:** Mantener intactas las demás vistas, componentes, estilos y datos institucionales.

### DURANTE Y DESPUÉS DE LA MODIFICACIÓN:
6. **Ejecutar la modificación puntual:** Editar únicamente lo solicitado preservando el estilo de código, comentarios existentes y rigor normativo.
7. **Verificar que la funcionalidad solicitada opera:** Validar que no existan errores de sintaxis, renderizado o TypeScript.
8. **Verificar que no se eliminaron contenidos ni funcionalidades no solicitadas:** Confirmar que las 10 vistas, navegación, perfiles y componentes continúen íntegros.
9. **Actualizar la Bitácora de Cambios:** Registrar en la sección 10 de este documento la fecha, descripción de la modificación y archivos intervenidos.
