# PAQUETE MAESTRO DE MIGRACIÓN Y TRANSFERENCIA TÉCNICA
# PROYECTO: JUSTICIA EN EQUIDAD / CONCILIACIÓN EN EQUIDAD
**Ministerio de Justicia y del Derecho • República de Colombia**

---

> [!IMPORTANT]
> **DOCUMENTO MAESTRO DE MIGRACIÓN Y CONTINUIDAD TÉCNICA**
> Este documento ha sido diseñado específicamente para permitir la transferencia completa e inmediata del proyecto **JUSTICIA EN EQUIDAD / CONCILIACIÓN EN EQUIDAD** a cualquier nuevo entorno de desarrollo, IDE avanzado o agente de Inteligencia Artificial, sin pérdida de contexto técnico, arquitectónico ni normativo.
> **LEER OBLIGATORIAMENTE ANTES DE PLANIFICAR O EJECUTAR CUALQUIER INTERVENCIÓN.**

---

# 1. IDENTIDAD DEL PROYECTO

- **Nombre oficial:** JUSTICIA EN EQUIDAD / CONCILIACIÓN EN EQUIDAD (Portal Institucional de la Conciliación en Equidad).
- **Entidad rectora:** República de Colombia • Ministerio de Justicia y del Derecho.
- **Dependencia a cargo:** Dirección de Métodos Alternativos de Solución de Conflictos (MASC) • Programa Nacional de Justicia en Equidad (PNJE).
- **Propósito general:** Prototipo digital de alta fidelidad, interactivo, autónomo y accesible, concebido como herramienta integral de orientación ciudadana, gestión gerencial territorial y pedagogía institucional sobre los Métodos Alternativos de Solución de Conflictos en equidad.
- **Público objetivo:**
  1. *Ciudadanía en general:* Personas que enfrentan conflictos cotidianos vecinales, deudas, arrendamientos o desavenencias familiares y requieren orientación ágil y gratuita sin abogados.
  2. *Entidades Territoriales (Alcaldías y Gobernaciones):* Alcaldes, secretarios de gobierno y equipos técnicos responsables de formular, financiar e implementar los Programas Locales de Justicia en Equidad (PLJE) bajo el Decreto 42 de 2026.
  3. *Conciliadores y Conciliadoras en Equidad:* Líderes y lideresas comunitarias nombrados judicialmente, activos o en proceso de reactivación/inscripción ante el PLJE.
  4. *Sector Académico y Consultorios Jurídicos:* Universidades y egresados de Derecho vinculables mediante judicatura de 7 meses.
- **Objetivo de comunicación:** Desmitificar la justicia comunitaria, transmitir sobriedad estatal y legitimidad pública, y posicionar la Conciliación en Equidad como una figura autocompositiva, gratuita, digna y con plenos efectos jurídicos.
- **Objetivo pedagógico:** Traducir conceptos procesales complejos al lenguaje claro (A-Z), erradicando expresiones judiciales agresivas o erróneas mediante herramientas comparativas y guías paso a paso.
- **Objetivo funcional:** Ofrecer herramientas interactivas operativas en tiempo real (asistente de triage de conflictos en 3 pasos, checklist gerencial para alcaldías con cálculo porcentual e impresión limpia, y directorio territorial PACE con filtros avanzados).

---

# 2. FUENTE DE VERDAD

La **única fuente de verdad** del proyecto es el código fuente modular escrito en React 19 y TypeScript ubicado exclusivamente en:

```
J:\Proyectos\Pagina_web\src\
```

junto con los archivos de configuración y la plantilla de desarrollo en la raíz:
- [`index.html`](file:///j:/Proyectos/Pagina_web/index.html) (raíz): Plantilla HTML oficial de Vite (568 bytes) que contiene `<div id="root"></div>` y enlaza a `/src/main.tsx`.
- [`package.json`](file:///j:/Proyectos/Pagina_web/package.json): Definición de dependencias, scripts de desarrollo y distribución.
- [`package-lock.json`](file:///j:/Proyectos/Pagina_web/package-lock.json): Árbol de dependencias bloqueadas de npm.
- [`vite.config.ts`](file:///j:/Proyectos/Pagina_web/vite.config.ts): Configuración del bundler Vite, Tailwind v4 y plugin singlefile.
- [`tsconfig.json`](file:///j:/Proyectos/Pagina_web/tsconfig.json): Configuración de tipos y compilación de TypeScript.
- [`sync_distributions.ts`](file:///j:/Proyectos/Pagina_web/sync_distributions.ts): Script de post-procesamiento para distribuciones offline.

### Desglose analítico de archivos por rol:

| Clasificación | Ubicación / Archivos | Rol en el Proyecto |
|---|---|---|
| **Código Fuente Real** | `src/main.tsx`, `src/App.tsx`, `src/index.css`, `src/vite-env.d.ts`, `src/context/ThemeContext.tsx`, `src/types/index.ts` | **Fuente de verdad:** Define la lógica, el estado y los estilos base. |
| **Componentes Activos** | `src/components/` (8 archivos `.tsx`) | **Fuente de verdad:** Módulos visuales e interactivos reutilizables. |
| **Vistas Activas** | `src/views/` (10 archivos `.tsx`) | **Fuente de verdad:** Las 10 páginas conceptuales del SPA. |
| **Bases de Datos** | `src/data/` (5 archivos `.ts`) | **Fuente de verdad:** Preguntas frecuentes, glosario, pasos PLJE, recursos y sedes PACE. |
| **Recursos Visuales Activos** | `src/assets/images/` (10 archivos `.jpg` importados) | **Fuente de verdad:** Fotografías oficiales de alta definición integradas a la interfaz. |
| **Recursos de Reserva** | `src/assets/images/` (4 archivos `.jpg` no importados) | **Reserva técnica:** Imágenes disponibles no enlazadas actualmente en el código. |
| **Configuración Operativa** | `package.json`, `package-lock.json`, `vite.config.ts`, `tsconfig.json`, `index.html` (raíz) | **Fuente de verdad:** Orquestación técnica del entorno de desarrollo y compilación. |
| **Artefactos Generados** | `00_ABRIR_PROTOTIPO_COMPLETO_OFFLINE.html`, `00_INICIAR_PROTOTIPO_AQUI.html`, `ABRIR_PROTOTIPO_OFFLINE.html`, `public/prototipo_conciliacion_equidad_minjusticia.html`, `JUSTICIA_EN_EQUIDAD_OFFLINE/*.html`, `*.zip` | **Artefactos de distribución:** Archivos derivados resultantes de compilaciones previas. **NO son fuente de verdad.** |
| **Históricos o Residuales** | `JUSTICIA_EN_EQUIDAD_OFFLINE/js/app.js`, `JUSTICIA_EN_EQUIDAD_OFFLINE/css/styles.css`, `JUSTICIA_EN_EQUIDAD_OFFLINE/assets/`, `build_offline.mjs`, `bun.lock`, `.env.example`, `metadata.json` | **Archivos históricos:** Código preliminar (Vanilla JS) y plantillas de Google AI Studio. |

> [!CAUTION]
> **ARCHIVOS QUE NO DEBEN UTILIZARSE COMO FUENTE DE VERDAD:**
> - Ningún archivo `.html` monocompilado gigante de ~18.7 MB (en la raíz, en `public/` o en `JUSTICIA_EN_EQUIDAD_OFFLINE/`).
> - Ningún archivo comprimido `.zip`.
> - Los archivos `app.js` y `styles.css` dentro de `JUSTICIA_EN_EQUIDAD_OFFLINE/`.
> **Cualquier edición directa sobre estos artefactos será sobrescrita en la próxima compilación o generará desincronizaciones graves.**

---

# 3. ARQUITECTURA ACTUAL

- **Framework principal:** React 19 (`react` ^19.0.1, `react-dom` ^19.0.1).
- **Lenguaje:** TypeScript 5.8 (`typescript` ~5.8.2) en modo estricto.
- **Empaquetador y Dev Server:** Vite 6 (`vite` ^6.2.3, `@vitejs/plugin-react` ^5.0.4).
- **Motor de estilos:** Tailwind CSS v4 (`tailwindcss` ^4.1.14, `@tailwindcss/vite` ^4.1.14), utilizando la sintaxis moderna basada en `@import "tailwindcss";` en `src/index.css`.
- **Librería de iconografía:** `lucide-react` (^0.546.0).
- **Empaquetado monocompilado (Single-File):** `vite-plugin-singlefile` (^2.3.3) combinado con `jszip` (^3.10.1) y ejecución TypeScript vía `tsx` (^4.21.0).

### Jerarquía de Renderizado y Flujo de Control:
1. **Punto de Entrada:** [`index.html`](file:///j:/Proyectos/Pagina_web/index.html) -> Carga [`src/main.tsx`](file:///j:/Proyectos/Pagina_web/src/main.tsx).
2. **Raíz React:** [`src/main.tsx`](file:///j:/Proyectos/Pagina_web/src/main.tsx) monta `<App />` dentro del elemento `#root`.
3. **Proveedor de Estado Global:** [`src/App.tsx`](file:///j:/Proyectos/Pagina_web/src/App.tsx) envuelve la aplicación en `<ThemeProvider>`.
4. **Layout Central (`MainContent`):**
   - Aplica dinámicamente clases de estilo de tema (`theme-institucional`, `theme-comunitaria`, `theme-editorial`).
   - Aplica clases de accesibilidad: modo alto contraste (`contrast-125 saturate-150`) y tamaño de texto (`text-[15px]`, `text-[17px]`, `text-[19px]`).
   - Renderiza de forma persistente [`src/components/Header.tsx`](file:///j:/Proyectos/Pagina_web/src/components/Header.tsx).
   - Conmuta condicionalmente la vista activa dentro del contenedor principal `<main className="flex-1">` evaluando la propiedad `activeTab` del contexto:
     ```tsx
     {activeTab === 'home' && <HomeView />}
     {activeTab === 'conozca' && <ConozcaView />}
     {activeTab === 'ruta-ciudadana' && <RutaCiudadanaView />}
     {activeTab === 'conciliadores' && <ConciliadoresView />}
     {activeTab === 'plje' && <PljeView />}
     {activeTab === 'pace' && <PaceView />}
     {activeTab === 'sistema' && <SistemaView />}
     {activeTab === 'recursos' && <RecursosView />}
     {activeTab === 'faq' && <FaqView />}
     {activeTab === 'glosario' && <GlosarioView />}
     ```
   - Renderiza de forma persistente [`src/components/Footer.tsx`](file:///j:/Proyectos/Pagina_web/src/components/Footer.tsx).
5. **Navegación:** SPA pura por pestañas en memoria (`ThemeContext`). No se utiliza `react-router` ni manipulación del historial (`pushState`), garantizando apertura y navegación impecable bajo protocolo `file://`. Cada cambio de pestaña ejecuta automáticamente un desplazamiento suave hacia la cabecera (`window.scrollTo({ top: 0, behavior: 'smooth' })`).

---

# 4. MAPA COMPLETO DE VISTAS (10 VISTAS ACTIVAS)

### 1. `HomeView`
- **Ruta:** [`src/views/HomeView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/HomeView.tsx) (39,561 bytes).
- **Propósito:** Portal de entrada institucional, posicionamiento del servicio y direccionamiento según perfiles.
- **Contenido:** Hero con llamado prioritario a resolver controversias; garantías fundamentales de la Ley 2220 de 2022 (Gratuito, Voluntario, Efecto Legal); navegación por 4 perfiles; vitrina de 3 pilares territoriales; narrativa visual ilustrada en 4 etapas; desglose de actores clave; módulo destacado de novedades del Decreto 42 de 2026; muestra de 8 preguntas frecuentes con acceso directo al banco completo.
- **Componentes:** Interactúa con enlaces contextuales al contexto global.
- **Datos:** Preguntas destacadas de `faqs.ts`.
- **Imágenes:** `rural_dialogo_willys` (hero), `pace_casa_justicia_clean` (pilar 1), `conciliadores_san_javier_clean` (pilar 2), `alcaldia_plje_territorio` (pilar 3).
- **Interacciones:** Botones de perfil con conmutación automática de pestaña, acordes de novedades, accesos directos al wizard y al checklist.

### 2. `ConozcaView`
- **Ruta:** [`src/views/ConozcaView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/ConozcaView.tsx) (18,495 bytes).
- **Propósito:** Pedagogía conceptual sobre la figura de la Conciliación en Equidad.
- **Contenido:** Banner fotográfico; módulo de divulgación en 4 capas (`LayeredContent`); tabla comparativa "SÍ hace / NO hace" del conciliador (6 criterios en verde vs. 6 límites legales en rojo); acordeón interactivo de los 7 principios rectores (Autocomposición, Acceso a la justicia, Gratuidad, Confidencialidad, Informalidad, Imparcialidad, Seguridad jurídica) con ejemplos cotidianos.
- **Componentes:** `LayeredContent`.
- **Imágenes:** `hero_conciliacion_dialogo`.
- **Interacciones:** Despliegue de niveles de profundidad, acordeón de principios, botones hacia la Ruta Ciudadana.

### 3. `RutaCiudadanaView`
- **Ruta:** [`src/views/RutaCiudadanaView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/RutaCiudadanaView.tsx) (25,719 bytes).
- **Propósito:** Guía secuencial para el ciudadano con controversias cotidianas.
- **Contenido:** Barra de 6 pasos del trámite; asistente de triage (`CitizenConflictWizard`); Paso 1: Asuntos conciliables (deudas, arriendos, convivencia) y no conciliables (violencia intrafamiliar, delitos); Paso 2: Ubicación de puntos PACE; Paso 3: Solicitud verbal o escrita; Paso 4: Lista de chequeo de preparación (documentos, hechos, propuestas); Paso 5: La audiencia y sus 5 momentos estructurados; Paso 6: Efectos legales del Acta (mérito ejecutivo y cosa juzgada).
- **Componentes:** `CitizenConflictWizard`.
- **Imágenes:** `ruta_ciudadana_audiencia`.
- **Interacciones:** Wizard interactivo con preguntas y resultados en 4 colores, botones de salto directo al directorio territorial PACE.

### 4. `ConciliadoresView`
- **Ruta:** [`src/views/ConciliadoresView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/ConciliadoresView.tsx) (14,489 bytes).
- **Propósito:** Portal de servicio para los operadores comunitarios en equidad.
- **Contenido:** Selector de 4 estados del operador (Aspirante, Nombrado, Activo, Inactivo/Reactivación); marco de deberes éticos; procedimiento de nombramiento judicial e inscripción obligatoria bianual en el PLJE; módulo de bienestar y estímulos del Decreto 42 de 2026 (prioridad en subsidios de vivienda de interés social y programas de educación superior).
- **Imágenes:** `conciliadores_san_javier_clean`.
- **Interacciones:** Pestañas interactivas de cambio de estado del operador, tarjetas informativas desplegables.

### 5. `PljeView`
- **Ruta:** [`src/views/PljeView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/PljeView.tsx) (11,554 bytes).
- **Propósito:** Guía técnica y gerencial para Alcaldías y Gobernaciones.
- **Contenido:** 4 escenarios territoriales de partida (Escenarios A, B, C y D); plazos perentorios del Decreto 42 de 2026 (**21 de enero de 2027** para municipios con conciliadores nombrados y gradualidad hasta **2034**); herramienta gerencial interactiva [`PljeInteractiveChecklist`](file:///j:/Proyectos/Pagina_web/src/components/PljeInteractiveChecklist.tsx).
- **Componentes:** `PljeInteractiveChecklist`.
- **Datos:** `pljeSteps.ts`.
- **Imágenes:** `alcaldia_plje_territorio`.
- **Interacciones:** Personalización del municipio, casillas verificables, cálculo en vivo de avance, impresión nativa en PDF.

### 6. `PaceView`
- **Ruta:** [`src/views/PaceView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/PaceView.tsx) (8,018 bytes).
- **Propósito:** Difusión de estándares de infraestructura y consulta de puntos de atención.
- **Contenido:** 8 condiciones obligatorias de calidad según Decreto 42 de 2026 (privacidad acústica, accesibilidad para personas con discapacidad, señalización de gratuidad visible, horarios); directorio y buscador territorial [`TerritorialMap`](file:///j:/Proyectos/Pagina_web/src/components/TerritorialMap.tsx).
- **Componentes:** `TerritorialMap`.
- **Datos:** `territoryPace.ts`.
- **Imágenes:** `pace_casa_justicia_clean`.
- **Interacciones:** Búsqueda en vivo, filtrado por departamento y tipo de espacio, modal con ficha técnica.

### 7. `SistemaView`
- **Ruta:** [`src/views/SistemaView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/SistemaView.tsx) (10,603 bytes).
- **Propósito:** Visibilización del ecosistema institucional y niveles de articulación.
- **Contenido:** Diagrama conceptual interactivo de 7 nodos (Sistema Nacional de Conciliación, Ministerio de Justicia, PNJE, PLJE en Alcaldías, Infraestructura PACE, Conciliadores comunitarios, Academia/Judicatura); tabla de interdependencia y corresponsabilidad.
- **Imágenes:** `ecosistema_red_pnje`.
- **Interacciones:** Selección interactiva de cada nodo para desplegar rol, insumos que recibe y productos que entrega.

### 8. `RecursosView`
- **Ruta:** [`src/views/RecursosView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/RecursosView.tsx) (14,903 bytes).
- **Propósito:** Biblioteca de documentación oficial, minutas y modelos reglamentarios.
- **Contenido:** Catálogo filtrable por tipo de documento (Normas, Modelos de Acta, Minutas de Decreto, Guías metodológicas) y perfil; tarjetas con estado de vigencia; previsualizador modal con estructura legal completa.
- **Datos:** `resources.ts`.
- **Imágenes:** `recursos_pantalla_interactiva`.
- **Interacciones:** Filtros combinados en tiempo real, buscador por palabra clave, modal de lectura detallada.

### 9. `FaqView`
- **Ruta:** [`src/views/FaqView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/FaqView.tsx) (9,686 bytes).
- **Propósito:** Centro de resolución de inquietudes ciudadanas e institucionales.
- **Contenido:** Banco de 38 preguntas frecuentes estructuradas con respuesta breve, respuesta jurídica ampliada, tags y citas explícitas de la Ley 2220 y Decreto 42; botones de valoración "¿Le fue útil esta respuesta?".
- **Datos:** `faqs.ts`.
- **Imágenes:** `multimedia_video_poster`.
- **Interacciones:** Buscador en vivo conectado con la cabecera, filtros por 8 categorías temáticas, acordeones desplegables con persistencia de feedback.

### 10. `GlosarioView`
- **Ruta:** [`src/views/GlosarioView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/GlosarioView.tsx) (9,268 bytes).
- **Propósito:** Pedagogía en lenguaje claro y erradicación de barreras comunicativas.
- **Contenido:** Tabla de transformación lingüística ("Término a evitar" vs. "Expresión recomendada"); índice alfabético A-Z interactivo; tarjetas explicativas de 22+ conceptos con definición básica y técnica.
- **Datos:** `glossary.ts`.
- **Imágenes:** `glosario_pasillo_interactivo`.
- **Interacciones:** Selector de letras del abecedario, buscador predictivo, filtrado dinámico.

---

# 5. COMPONENTES ACTIVOS (8 COMPONENTES)

1. **[`src/components/Header.tsx`](file:///j:/Proyectos/Pagina_web/src/components/Header.tsx) (16,810 bytes):**
   - *Función:* Encabezado oficial GOV.CO y MinJusticia. Incluye conmutador de accesibilidad (fuente `A`, `A+`, `A++`, alto contraste), campo de búsqueda que redirige con filtro activo a `FaqView`, barra de selección de perfiles y menú horizontal responsive con menú móvil colapsable.
   - *Uso:* En [`src/App.tsx`](file:///j:/Proyectos/Pagina_web/src/App.tsx#L37).
   - *Dependencias:* `lucide-react`, `GovCoLogo`, `MinJusticiaLogo`, `ThemeContext`.

2. **[`src/components/Footer.tsx`](file:///j:/Proyectos/Pagina_web/src/components/Footer.tsx) (7,336 bytes):**
   - *Función:* Pie de página institucional en 4 columnas con identidad del sector, enlaces rápidos, teléfonos oficiales, sede física central en Bogotá (Calle 53 No. 13-27), línea 018000 y botón con retorno suave (*Scroll to top*).
   - *Uso:* En [`src/App.tsx`](file:///j:/Proyectos/Pagina_web/src/App.tsx#L50).
   - *Dependencias:* `lucide-react`, `MinJusticiaLogo`, `ThemeContext`.

3. **[`src/components/CitizenConflictWizard.tsx`](file:///j:/Proyectos/Pagina_web/src/components/CitizenConflictWizard.tsx) (16,772 bytes):**
   - *Función:* Orientador algorítmico de autodiagnóstico en 3 preguntas secuenciales (naturaleza del conflicto, disposición al diálogo y riesgo físico inmediato).
   - *Uso:* En [`src/views/RutaCiudadanaView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/RutaCiudadanaView.tsx).
   - *Resultados:* Rojo (Emergencia/Fiscalía/123), Amarillo (No conciliable/Comisaría), Verde (Conciliable directo), Azul (Asesoría previa PACE).

4. **[`src/components/PljeInteractiveChecklist.tsx`](file:///j:/Proyectos/Pagina_web/src/components/PljeInteractiveChecklist.tsx) (18,224 bytes):**
   - *Función:* Lista de verificación de 39 tareas en 10 etapas para formular el PLJE. Permite ingresar el nombre del municipio, marcar fases completas, calcular el porcentaje global de avance y ejecutar impresión limpia vía `window.print()` con clases `@media print`.
   - *Uso:* En [`src/views/PljeView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/PljeView.tsx).
   - *Dependencias:* `src/data/pljeSteps.ts`, `lucide-react`.

5. **[`src/components/TerritorialMap.tsx`](file:///j:/Proyectos/Pagina_web/src/components/TerritorialMap.tsx) (19,119 bytes):**
   - *Función:* Directorio territorial con búsqueda en vivo, filtros por 33 divisiones territoriales, 4 tipologías PACE, filtro de accesibilidad motriz, alternancia de vista entre tarjetas y tabla estructurada, y modal de detalle técnico.
   - *Uso:* En [`src/views/PaceView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/PaceView.tsx).
   - *Dependencias:* `src/data/territoryPace.ts`, `lucide-react`.

6. **[`src/components/LayeredContent.tsx`](file:///j:/Proyectos/Pagina_web/src/components/LayeredContent.tsx) (6,896 bytes):**
   - *Función:* Mecanismo de divulgación pedagógica progresiva en 4 capas temáticas (Esencial, Ampliada, Técnica y Legal) para dosificar la complejidad jurídica según el interés del lector.
   - *Uso:* En [`src/views/ConozcaView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/ConozcaView.tsx).
   - *Dependencias:* `lucide-react`, `ThemeContext`.

7. **[`src/components/GovCoLogo.tsx`](file:///j:/Proyectos/Pagina_web/src/components/GovCoLogo.tsx) (1,755 bytes):**
   - *Función:* Vector SVG reglamentario del portal GOV.CO de Colombia con la bandera nacional estilizada.
   - *Uso:* En [`src/components/Header.tsx`](file:///j:/Proyectos/Pagina_web/src/components/Header.tsx).

8. **[`src/components/MinJusticiaLogo.tsx`](file:///j:/Proyectos/Pagina_web/src/components/MinJusticiaLogo.tsx) (1,510 bytes):**
   - *Función:* Vector SVG oficial de la marca del Ministerio de Justicia y del Derecho con barra tricolor inferior (48% amarillo, 26% azul, 26% rojo) en variantes de color y blanco.
   - *Uso:* En [`src/components/Header.tsx`](file:///j:/Proyectos/Pagina_web/src/components/Header.tsx) y [`src/components/Footer.tsx`](file:///j:/Proyectos/Pagina_web/src/components/Footer.tsx).

---

# 6. MÓDULOS DE DATOS (5 MÓDULOS ACTIVOS)

1. **[`src/data/faqs.ts`](file:///j:/Proyectos/Pagina_web/src/data/faqs.ts) (25,984 bytes):**
   - *Contenido:* 38 preguntas frecuentes estructuradas (`FaqItem`), clasificadas en 8 categorías temáticas (Conceptos básicos, Competencias, Procedimiento, Efectos legales, PLJE y Municipios, Conciliadores y ética, Infraestructura PACE).
   - *Vistas que lo usan:* [`src/views/FaqView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/FaqView.tsx) y [`src/views/HomeView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/HomeView.tsx).

2. **[`src/data/glossary.ts`](file:///j:/Proyectos/Pagina_web/src/data/glossary.ts) (12,890 bytes):**
   - *Contenido:* 22+ términos pedagógicos (`GlossaryTerm`) con definiciones básicas y técnicas, términos relacionados y tabla de sustituciones de lenguaje claro.
   - *Vistas que lo usan:* [`src/views/GlosarioView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/GlosarioView.tsx).

3. **[`src/data/pljeSteps.ts`](file:///j:/Proyectos/Pagina_web/src/data/pljeSteps.ts) (12,074 bytes):**
   - *Contenido:* 10 etapas gerenciales (`PljeStep`) para Alcaldías con 39 tareas obligatorias, entregables, actores responsables y marcos normativos del Decreto 42 de 2026.
   - *Vistas que lo usan:* [`src/components/PljeInteractiveChecklist.tsx`](file:///j:/Proyectos/Pagina_web/src/components/PljeInteractiveChecklist.tsx) en [`src/views/PljeView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/PljeView.tsx).

4. **[`src/data/resources.ts`](file:///j:/Proyectos/Pagina_web/src/data/resources.ts) (14,584 bytes):**
   - *Contenido:* 12 recursos documentales oficiales (`ResourceItem`) con modelos de actas, minutas de decreto municipal, guías técnicas y estructuras modelo completas.
   - *Vistas que lo usan:* [`src/views/RecursosView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/RecursosView.tsx).

5. **[`src/data/territoryPace.ts`](file:///j:/Proyectos/Pagina_web/src/data/territoryPace.ts) (8,389 bytes):**
   - *Contenido:* Directorio representativo de sedes PACE (`PaceLocation`) con direcciones, horarios, datos de contacto, número de conciliadores activos y catálogo de 33 entidades territoriales.
   - *Vistas que lo usan:* [`src/components/TerritorialMap.tsx`](file:///j:/Proyectos/Pagina_web/src/components/TerritorialMap.tsx) en [`src/views/PaceView.tsx`](file:///j:/Proyectos/Pagina_web/src/views/PaceView.tsx).

---

# 7. RECURSOS VISUALES

### A. Fotografías Activas en Uso (10 de 14)
Estas 10 imágenes están importadas en el código fuente de React y son esenciales para conservar la estética institucional del portal:

| Archivo en `src/assets/images/` | Tamaño | Vista / Componente | Uso / Importancia |
|---|---|---|---|
| `rural_dialogo_willys_1787607843680.jpg` | 1,097,617 B | `HomeView.tsx` | **Hero principal:** Diálogo comunitario en zona rural cafetera con campero Willys. |
| `pace_casa_justicia_clean_1787610561858.jpg` | 1,036,133 B | `HomeView.tsx`, `PaceView.tsx` | **Pilar 1 y Banner:** Fachada institucional y atención ciudadana en Casas de Justicia. |
| `conciliadores_san_javier_clean_1787610547699.jpg` | 1,070,605 B | `HomeView.tsx`, `ConciliadoresView.tsx` | **Pilar 2 y Banner:** Operadores comunitarios en la Comuna 13 San Javier. |
| `alcaldia_plje_territorio_1787178788126.jpg` | 912,460 B | `HomeView.tsx`, `PljeView.tsx` | **Pilar 3 y Banner:** Mesa técnica de concertación territorial y gestión municipal. |
| `hero_conciliacion_dialogo_1787178740778.jpg` | 854,371 B | `ConozcaView.tsx` | **Banner superior:** Espacio de diálogo y cultura de paz ciudadana. |
| `ruta_ciudadana_audiencia_1787180269105.jpg` | 909,172 B | `RutaCiudadanaView.tsx` | **Banner superior:** Orientación a ciudadanos en módulo de atención. |
| `ecosistema_red_pnje_1787607859571.jpg` | 1,089,318 B | `SistemaView.tsx` | **Banner superior:** Red institucional y articulación de justicia local. |
| `recursos_pantalla_interactiva_1787607873159.jpg` | 889,463 B | `RecursosView.tsx` | **Banner superior:** Consulta de minutas, normatividad y formatos. |
| `multimedia_video_poster_1787180280602.jpg` | 1,106,782 B | `FaqView.tsx` | **Banner superior:** Pedagogía ciudadana y resolución de dudas frecuentes. |
| `glosario_pasillo_interactivo_1787607887409.jpg` | 884,270 B | `GlosarioView.tsx` | **Banner superior:** Pedagogía de lenguaje claro y acceso a la justicia. |

### B. Fotografías de Reserva (4 de 14 en `src/assets/images/`)
Presentes en disco pero no importadas actualmente en ningún archivo `.tsx`:
1. `conciliadores_comunidad_1787178774180.jpg` (1,030,348 bytes).
2. `conciliadores_san_javier_1787607828913.jpg` (1,133,631 bytes — versión previa al retoque limpio *clean*).
3. `pace_centro_convivencia_1787178756619.jpg` (1,099,570 bytes).
4. `sistema_justicia_colombia_1787180290390.jpg` (956,139 bytes).

### C. Fotografías Históricas y Duplicados Externos
- `JUSTICIA_EN_EQUIDAD_OFFLINE/assets/banners/` (7 imágenes, 11.8 MB): Remanentes de la versión Vanilla JS.
- `JUSTICIA_EN_EQUIDAD_OFFLINE/assets/images/` (7 imágenes, 11.8 MB): **Duplicados exactos bit a bit** de la subcarpeta contigua `banners/`.
- *Total de imágenes duplicadas o históricas fuera de `src/`:* ~23.6 MB.

---

# 8. DISEÑO Y SISTEMA VISUAL

El diseño se adhiere a las directrices de interfaz del Estado Colombiano (marca GOV.CO) y del Ministerio de Justicia y del Derecho:

- **Estructura visual:** Jerarquía limpia basada en contenedores semánticos (`header`, `main`, `footer`, `section`, `article`).
- **Paleta cromática oficial:**
  - *Azul Institucional GOV.CO:* `#004899` (franja superior, botones principales, acentos activos).
  - *Azul Marino Profundo:* `#003875`, `#003893`, `#001D33` (fondos de footer, tarjetas hero, contrastes).
  - *Amarillo República / Oro:* `#FCD116` (barra tricolor oficial, acento en logos).
  - *Rojo Tricolor:* `#CE1126` (bandera oficial en vector de marca).
  - *Ámbar de Acción:* `amber-500`, `#F59E0B` (botones de acción prioritaria, avisos destacados).
  - *Semántica de Validación:* Verde (`emerald-600` / `emerald-50`) para acuerdos y "SÍ HACE"; Rojo (`rose-600` / `rose-50`) para urgencias y "NO HACE"; Ámbar (`amber-500` / `amber-50`) para alertas del checklist.
  - *Fondos de Interfaz:* `slate-50`, `slate-100`, `#F8FAFC` (institucional), `#FDFBF7` (comunitaria).
- **Tipografía:** Pila nativa del sistema `font-sans` (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`). Jerarquía tipográfica con títulos principales en negrita extrema (`font-black`), subtítulos en `font-bold` y textos de lectura en `font-normal` con altura de línea generosa (`leading-relaxed`).
- **Formas y Sombras:** Radios consistentes de curvatura: `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-3xl` (24px). Sombras sutiles (`shadow-xs`, `shadow-sm`, `shadow-md`) que priorizan la limpieza visual sobre efectos pesados.
- **Iconografía:** Unificada con `lucide-react` (iconos vectoriales coherentes de 16px a 28px).
- **Accesibilidad Integrada:**
  - *Selector de Tamaño Tipográfico:* Conmutador en cabecera en 3 niveles (Normal: 15px, Grande: 17px, Extra grande: 19px) aplicado en cascada.
  - *Modo de Alto Contraste:* Filtro `contrast-125 saturate-150` activable por el usuario.
  - *Vista Accesible:* Conmutador de tarjetas a tabla estructurada en el directorio PACE.
- **Comportamiento Responsive:** Adaptación exhaustiva a pantallas móviles (`< 640px`), tablets (`sm:`, `md:`) y escritorio (`lg:`, `xl:`). La navegación en móviles se colapsa automáticamente en un menú lateral tipo hamburguesa.

---

# 9. FUNCIONALIDADES DETECTADAS EN EL CÓDIGO

1. **Navegación SPA por pestañas:** Transición instantánea entre 10 vistas sin recargas de página.
2. **Scroll restaurado automáticamente:** Retorno suave al inicio de página al cambiar de vista.
3. **Navegación por perfiles:** Conmutación coordinada entre perfiles de usuario y redirección automática a las vistas correspondientes.
4. **Selector dinámico de tamaño de fuente:** Escalado proporcional en toda la interfaz (15px, 17px, 19px).
5. **Modo de alto contraste accesible:** Alternancia cromática de alto impacto visual.
6. **Orientador Ciudadano de Conflictos (Wizard):** Diagnóstico algorítmico en 3 pasos con 4 rutas resolutivas y derivación en casos de urgencia física.
7. **Checklist Municipal Interactivo PLJE:** 39 tareas verificables en 10 etapas, personalización de nombre de alcaldía, cálculo porcentual de avance y función nativa de impresión optimizada para papel (`window.print()`).
8. **Directorio y Buscador Territorial PACE:** Búsqueda en vivo por texto, filtros combinados por departamento, tipo de punto y accesibilidad motriz, conmutador tarjetas/tabla y modal de ficha técnica.
9. **Banco de 38 Preguntas Frecuentes:** Buscador dinámico de texto predictivo, filtrado por 8 categorías y registro de utilidad ("Útil / No útil").
10. **Buscador global en la cabecera:** Redirección automática al banco de preguntas frecuentes con el término buscado.
11. **Glosario Pedagógico en Lenguaje Claro:** Búsqueda alfabética (A-Z) en tiempo real y tabla interactiva de términos a evitar vs. términos recomendados.
12. **Centro de Recursos y Modelos:** Filtrado por categoría y perfil, con modal de lectura estructurada de minutas y modelos oficiales.
13. **Diagrama interactivo del SNC:** Exploración conceptual de 7 nodos institucionales interconectados.

---

# 10. DISTRIBUCIÓN OFFLINE

- **Pipeline de Generación:** El comando `npm run build` ejecuta secuencialmente `vite build` y seguidamente `tsx sync_distributions.ts`.
- **Configuración Vite:** Utiliza `vite-plugin-singlefile` con `assetsInlineLimit: 100000000` (100 MB). Esto incrusta el código JavaScript, CSS y todas las imágenes (codificadas en Base64 dentro del atributo `src`) dentro de un único archivo HTML.
- **Distribución ZIP Válida:** Los archivos [`public/JUSTICIA_EN_EQUIDAD_OFFLINE_2026.zip`](file:///j:/Proyectos/Pagina_web/public/JUSTICIA_EN_EQUIDAD_OFFLINE_2026.zip) y [`JUSTICIA_EN_EQUIDAD_OFFLINE/JUSTICIA_EN_EQUIDAD_OFFLINE_2026.zip`](file:///j:/Proyectos/Pagina_web/JUSTICIA_EN_EQUIDAD_OFFLINE/JUSTICIA_EN_EQUIDAD_OFFLINE_2026.zip) (ambos idénticos, SHA-256: `45C4397F02E69119283F83983C6E297BB452F8323ADC31766D75EEDEAB007308`, tamaño: 20.26 MB) **contienen la versión Offline 100% íntegra, válida y funcional de 14 MB (`14,034,664 bytes`)**, con las 10 vistas, 8 componentes, 5 bases de datos y 10 imágenes Base64 limpias.
- **Artefactos Sueltos con Anomalías:** Los 6 archivos HTML sueltos de 18.7 MB en disco en la raíz, en `public/` y en `JUSTICIA_EN_EQUIDAD_OFFLINE/` presentan cortes sintácticos derivados de una ejecución defectuosa de reemplazo de cadenas.
- **REGLA ABSOLUTA:** **Ningún artefacto generado debe considerarse fuente de verdad del código.**

---

# 11. PROBLEMAS TÉCNICOS CONOCIDOS

### 1. Reemplazo de cadenas en `sync_distributions.ts`
- **Severidad:** **CRÍTICO** (para el pipeline de distribución offline) / **MENOR** (para el desarrollo web en `npm run dev`).
- **Descripción:** En la línea 34 de [`sync_distributions.ts`](file:///j:/Proyectos/Pagina_web/sync_distributions.ts#L34), la instrucción `fullHtmlContent.replace('</body>', `${combinedScripts}\n</body>`)` utiliza un string como segundo argumento. Si el código JavaScript minificado por Vite contiene símbolos `$` (como `$'`, `$&`, habituales en minificación), el motor de JavaScript interpreta estos caracteres como tokens especiales de reemplazo, duplicando fragmentos de código e inflando el archivo de 14 MB a 18.7 MB, truncando el cierre `</script></body></html>`.
- **Solución identificada (NO EJECUTAR TODAVÍA):** Modificar la llamada a una función de retorno: `fullHtmlContent.replace('</body>', () => `${combinedScripts}\n</body>`)`.

### 2. Archivos HTML sueltos desactualizados o con anomalías sintácticas
- **Severidad:** **IMPORTANTE**.
- **Descripción:** Los 6 archivos HTML de 18.7 MB en la raíz y en subcarpetas están incompletos en su cierre debido al problema anterior. No deben distribuirse hasta que se ejecute una corrección controlada del pipeline. El ZIP existente sí contiene la versión sana de 14 MB.

### 3. Duplicación masiva de artefactos y fotografías
- **Severidad:** **MENOR**.
- **Descripción:** El repositorio almacena cerca de 160 MB de archivos redundantes (múltiples copias del mismo HTML de 18.7 MB y carpetas duplicadas de imágenes en `JUSTICIA_EN_EQUIDAD_OFFLINE/assets/`).

### 4. Carpeta histórica Vanilla JS
- **Severidad:** **INFORMATIVO**.
- **Descripción:** Los archivos `app.js` (135 KB) y `styles.css` (74 KB) en `JUSTICIA_EN_EQUIDAD_OFFLINE/` corresponden al prototipo estático previo a React 19 y no tienen ninguna conexión operativa con el aplicativo actual.

---

# 12. REGLAS DE CONTINUIDAD

Todo agente o desarrollador que intervenga en este repositorio debe acatar estrictamente:

1. **No eliminar contenido aprobado:** Textos pedagógicos, principios, tablas comparativas y preguntas frecuentes deben conservarse.
2. **No resumir contenido sin autorización:** No podar párrafos explicativos ni eliminar contextualizaciones comunitarias.
3. **No rediseñar áreas no solicitadas:** Si el usuario pide ajustar un componente, intervenir únicamente dicho componente.
4. **No cambiar la arquitectura sin autorización:** Mantener React 19, TypeScript, Vite y Tailwind CSS v4.
5. **No sustituir imágenes sin autorización:** Las 10 fotografías activas tienen identidad territorial intencional.
6. **No alterar textos normativos sin autorización:** Las referencias a la Ley 2220 de 2022 y Decreto 42 de 2026 (y sus plazos como el 21 de enero de 2027) son de estricta precisión jurídica.
7. **No modificar funcionalidades existentes:** Preservar los asistentes, checklists y filtros activos.
8. **Trabajar por cambios controlados y delimitados:** Identificar previamente los archivos específicos antes de editar.
9. **Verificar después de cada cambio importante:** Comprobar que no se generen errores de TypeScript ni regresiones en la navegación de las 10 vistas.
10. **Mantener la dualidad de versiones:** Preservar tanto la versión de desarrollo (`npm run dev`) como la capacidad de distribución offline monocompilada.

---

# 13. PROTOCOLO PARA UNA NUEVA IA

```
"Este NO es un proyecto nuevo.
Es un proyecto existente.
No debes reconstruirlo desde cero.
Debes estudiar primero los archivos existentes.
La fuente de verdad es el código modular de src/.
El documento de continuidad y este documento de migración son contexto auxiliar.
Los artefactos generados no son fuente de verdad."
```

### Procedimiento recomendado de 10 pasos:
1. **Leer continuidad:** Consultar [`00_CONTINUIDAD_PROYECTO_JUSTICIA_EN_EQUIDAD.md`](file:///j:/Proyectos/Pagina_web/00_CONTINUIDAD_PROYECTO_JUSTICIA_EN_EQUIDAD.md).
2. **Leer paquete de migración:** Consultar este documento ([`00_PAQUETE_MIGRACION_JUSTICIA_EN_EQUIDAD.md`](file:///j:/Proyectos/Pagina_web/00_PAQUETE_MIGRACION_JUSTICIA_EN_EQUIDAD.md)).
3. **Inspeccionar estructura:** Revisar la organización de [`src/`](file:///j:/Proyectos/Pagina_web/src) antes de proponer cambios.
4. **Verificar estado:** Comprobar que el entorno de trabajo y dependencias se mantengan estables.
5. **Comprender arquitectura:** Respetar la navegación por `ThemeContext` y renderizado condicional de vistas.
6. **Identificar la solicitud concreta del usuario:** Acotar con precisión qué se pide modificar.
7. **Modificar únicamente lo solicitado:** Evitar refactorizaciones masivas o cambios de diseño colaterales.
8. **Verificar dependencias:** Comprobar que los tipos TypeScript en `src/types/index.ts` coincidan con los datos.
9. **Ejecutar pruebas/build únicamente cuando corresponda:** No compilar en modo exploratorio o de auditoría; solo cuando se solicite formalmente generar entregables.
10. **Informar exactamente qué archivos fueron modificados:** Proporcionar al usuario la lista precisa de archivos intervenidos y la justificación técnica de cada cambio.

---

# 14. CONTEXTO NORMATIVO

El desarrollo se fundamenta en un marco jurídico vigente de la República de Colombia:

1. **Constitución Política de Colombia (Art. 116):** Autorización expresa a los particulares para administrar justicia transitoriamente como conciliadores en equidad.
2. **Ley 2220 de 2022 (Estatuto Nacional de Conciliación):**
   - *Arts. 3, 4 y 5:* Naturaleza autocompositiva, voluntaria y definición de la Conciliación en Equidad.
   - *Arts. 8 y 9:* Principio estricto de gratuidad del servicio y prohibición de cobros de cualquier índole.
   - *Art. 7:* Asuntos susceptibles y no susceptibles de conciliación (exclusión de violencia intrafamiliar y delitos no desistibles).
   - *Arts. 28 y 33:* Requisitos comunitarios, nombramiento judicial, impedimentos y recusaciones.
   - *Arts. 64, 65 y 66:* Formalidades del Acta de Conciliación, mérito ejecutivo y efecto de cosa juzgada.
3. **Decreto 42 de 2026:**
   - Obligatoriedad del Programa Local de Justicia en Equidad (PLJE) en todos los municipios y distritos.
   - **Plazos perentorios estrictos:** 1 año (hasta el **21 de enero de 2027**) para municipios con conciliadores nombrados y ejercicio activo; y gradualidad hasta el año **2034** para municipios sin nombramientos previos.
   - Inscripción bianual obligatoria (cada 2 años) de los conciliadores ante el PLJE municipal.
   - Estándares mínimos de infraestructura para los Puntos PACE (privacidad acústica, accesibilidad física, aviso de gratuidad visible).
   - Acceso prioritario a subsidios de vivienda de interés social y programas de educación superior.
   - Judicatura de 7 meses para egresados de facultades de Derecho en los PLJE.
4. **Ley 1996 de 2019:** Ajustes razonables y capacidad legal de personas con discapacidad en las audiencias de conciliación.

---

# 15. ESTADO ACTUAL

- **ESTADO DEL CÓDIGO:** Excelente. React 19 + TypeScript + Tailwind v4 estructurado, modular, sin errores de compilación ni dependencias rotas en `src/`.
- **ESTADO DEL DISEÑO:** Terminado y consistente. Estética institucional sobria, paleta oficial GOV.CO / MinJusticia, diseño adaptable a dispositivos móviles y soporte de alto contraste y escalas tipográficas.
- **ESTADO DEL CONTENIDO:** Completo y riguroso. 10 vistas temáticas, 38 preguntas frecuentes, glosario A-Z, 10 pasos gerenciales para alcaldías y citas textuales de leyes y decretos.
- **ESTADO DE LOS RECURSOS:** Íntegro. 14 fotografías en alta resolución disponibles (10 en uso activo y 4 en reserva).
- **ESTADO OFFLINE:** Funcional y resguardado. El paquete comprimido [`JUSTICIA_EN_EQUIDAD_OFFLINE_2026.zip`](file:///j:/Proyectos/Pagina_web/public/JUSTICIA_EN_EQUIDAD_OFFLINE_2026.zip) contiene la versión monocompilada limpia y autónoma de 14 MB. Los HTMLs sueltos de 18.7 MB en disco requieren saneamiento en la etapa correspondiente.
- **ESTADO DE DOCUMENTACIÓN:** Máximo nivel de trazabilidad con [`00_CONTINUIDAD_PROYECTO_JUSTICIA_EN_EQUIDAD.md`](file:///j:/Proyectos/Pagina_web/00_CONTINUIDAD_PROYECTO_JUSTICIA_EN_EQUIDAD.md) y el presente paquete de migración.
- **ESTADO DE MIGRACIÓN:** **100% LISTO PARA TRANSFERENCIA.** El repositorio cuenta con toda la información técnica necesaria para continuar su desarrollo en cualquier entorno externo.

---

# 16. PRIORIDADES FUTURAS

### A. Trabajo de desarrollo pendiente (Evolutivo)
- Evaluar la incorporación del módulo de guiones audiovisuales e infografías propuesto en los tipos TypeScript (`VideoProposal`, `InfographicProposal`).
- Evaluar la conexión de las descargas en `RecursosView` con archivos PDF o Word descargables reales si la entidad lo requiere.

### B. Problemas técnicos pendientes (Corrección de pipeline)
- Corregir técnicamente la línea 34 de [`sync_distributions.ts`](file:///j:/Proyectos/Pagina_web/sync_distributions.ts#L34) implementando una función de retorno en `replace('</body>', () => `${combinedScripts}\n</body>`)` para eliminar la corrupción por símbolos `$`.
- Regenerar limpiamente los bundles HTML monocompilados verificando que alcancen los ~14 MB íntegros idénticos al del ZIP.

### C. Saneamiento pendiente (Optimización de espacio)
- Depurar las copias redundantes de los HTMLs monolíticos en la raíz una vez corregido el script de build.
- Archivar o retirar las carpetas duplicadas de imágenes históricas en `JUSTICIA_EN_EQUIDAD_OFFLINE/assets/` (~23.6 MB).
- Archivar el código histórico Vanilla JS (`app.js` y `styles.css`) en `JUSTICIA_EN_EQUIDAD_OFFLINE/`.

### D. Mejoras opcionales
- Configurar un script de empaquetado que deposite las distribuciones en una carpeta formal `distribuciones/offline/`.
- Evaluar compresión WebP para las imágenes si se requiere reducir el tamaño total del bundle sin perder calidad visual.

---

# 17. INVENTARIO DE ARCHIVOS

```
J:\Proyectos\Pagina_web\
│
├── [CONFIGURACIÓN]
│   ├── index.html                                        # Plantilla HTML oficial de desarrollo Vite (568 bytes)
│   ├── package.json                                      # Configuración de dependencias y scripts de ejecución
│   ├── package-lock.json                                 # Árbol de dependencias bloqueadas de npm
│   ├── tsconfig.json                                     # Configuración de TypeScript
│   ├── vite.config.ts                                    # Configuración de Vite, Tailwind v4 y vite-plugin-singlefile
│   └── .gitignore                                        # Exclusiones de Git
│
├── [DOCUMENTACIÓN MAESTRA]
│   ├── 00_CONTINUIDAD_PROYECTO_JUSTICIA_EN_EQUIDAD.md     # Bitácora maestra de auditorías y reglas de continuidad
│   ├── 00_PAQUETE_MIGRACION_JUSTICIA_EN_EQUIDAD.md       # Este documento maestro de transferencia técnica
│   └── README.md                                         # Documentación original del proyecto
│
├── [FUENTE DE VERDAD — CÓDIGO Y DATOS]
│   └── src/
│       ├── main.tsx                                      # Montaje en ReactDOM
│       ├── App.tsx                                       # Orquestador central y switch de vistas
│       ├── index.css                                     # Directivas Tailwind v4 y reglas @media print
│       ├── vite-env.d.ts                                 # Tipado de entorno Vite
│       │
│       ├── context/
│       │   └── ThemeContext.tsx                          # Estado global (activeTab, contrast, fontSize, search)
│       │
│       ├── types/
│       │   └── index.ts                                  # Interfaces y modelos de datos TypeScript
│       │
│       ├── components/                                   # 8 componentes activos
│       │   ├── Header.tsx                                # Cabecera institucional multicapa
│       │   ├── Footer.tsx                                # Pie de página institucional
│       │   ├── CitizenConflictWizard.tsx                 # Asistente de autodiagnóstico en 3 preguntas
│       │   ├── PljeInteractiveChecklist.tsx              # Checklist de 10 pasos con cálculo e impresión
│       │   ├── TerritorialMap.tsx                        # Directorio interactivo PACE con filtros
│       │   ├── LayeredContent.tsx                        # Despliegue en 4 capas pedagógicas
│       │   ├── GovCoLogo.tsx                             # SVG oficial GOV.CO
│       │   └── MinJusticiaLogo.tsx                       # SVG oficial MinJusticia con tricolor
│       │
│       ├── views/                                        # 10 vistas modulares activas
│       │   ├── HomeView.tsx                              # Portal central y pilares
│       │   ├── ConozcaView.tsx                           # Pedagogía y principios rectores
│       │   ├── RutaCiudadanaView.tsx                     # Guía paso a paso y wizard
│       │   ├── ConciliadoresView.tsx                     # Portal de operadores e incentivos
│       │   ├── PljeView.tsx                              # Guía municipal y checklist
│       │   ├── PaceView.tsx                              # Condiciones de calidad y mapa
│       │   ├── SistemaView.tsx                           # Ecosistema de 7 nodos
│       │   ├── RecursosView.tsx                          # Biblioteca de modelos y minutas
│       │   ├── FaqView.tsx                               # Banco de 38 preguntas frecuentes
│       │   └── GlosarioView.tsx                          # Glosario A-Z en lenguaje claro
│       │
│       ├── data/                                         # 5 bases de datos institucionales
│       │   ├── faqs.ts                                   # 38 FAQs categorizadas
│       │   ├── glossary.ts                               # 22+ términos de glosario y sustituciones
│       │   ├── pljeSteps.ts                              # 10 pasos y 39 tareas de implementación PLJE
│       │   ├── resources.ts                              # 12 modelos y normativas oficiales
│       │   └── territoryPace.ts                          # Sedes PACE y departamentos
│       │
│       └── assets/images/                                # 14 fotografías HD (10 en uso activo + 4 de reserva)
│           ├── rural_dialogo_willys_1787607843680.jpg           [ACTIVA - HomeView]
│           ├── pace_casa_justicia_clean_1787610561858.jpg        [ACTIVA - HomeView / PaceView]
│           ├── conciliadores_san_javier_clean_1787610547699.jpg  [ACTIVA - HomeView / ConciliadoresView]
│           ├── alcaldia_plje_territorio_1787178788126.jpg        [ACTIVA - HomeView / PljeView]
│           ├── hero_conciliacion_dialogo_1787178740778.jpg       [ACTIVA - ConozcaView]
│           ├── ruta_ciudadana_audiencia_1787180269105.jpg        [ACTIVA - RutaCiudadanaView]
│           ├── ecosistema_red_pnje_1787607859571.jpg             [ACTIVA - SistemaView]
│           ├── recursos_pantalla_interactiva_1787607873159.jpg   [ACTIVA - RecursosView]
│           ├── multimedia_video_poster_1787180280602.jpg         [ACTIVA - FaqView]
│           ├── glosario_pasillo_interactivo_1787607887409.jpg    [ACTIVA - GlosarioView]
│           ├── conciliadores_comunidad_1787178774180.jpg         [RESERVA]
│           ├── conciliadores_san_javier_1787607828913.jpg        [RESERVA]
│           ├── pace_centro_convivencia_1787178756619.jpg         [RESERVA]
│           └── sistema_justicia_colombia_1787180290390.jpg       [RESERVA]
│
├── [PIPELINE DE DISTRIBUCIÓN]
│   └── sync_distributions.ts                             # Script de distribución y creación de ZIP offline
│
├── [DISTRIBUCIÓN Y ARTEFACTOS GENERADOS]
│   ├── public/
│   │   ├── JUSTICIA_EN_EQUIDAD_OFFLINE_2026.zip          # ZIP oficial íntegro con bundle de 14 MB
│   │   └── prototipo_conciliacion_equidad_minjusticia.html # Bundle monocompilado suelto
│   ├── 00_ABRIR_PROTOTIPO_COMPLETO_OFFLINE.html          # Bundle monocompilado en raíz
│   ├── 00_INICIAR_PROTOTIPO_AQUI.html                    # Copia duplicada en raíz
│   └── ABRIR_PROTOTIPO_OFFLINE.html                      # Copia duplicada en raíz
│
└── [HISTÓRICO / RESIDUAL]
    ├── JUSTICIA_EN_EQUIDAD_OFFLINE/                      # Paquete previo con Vanilla JS y bundles
    │   ├── JUSTICIA_EN_EQUIDAD_OFFLINE_2026.zip          # Copia idéntica del ZIP oficial
    │   ├── 00_ABRIR_PROTOTIPO_COMPLETO_OFFLINE.html      # Copia monocompilada
    │   ├── index.html                                    # Copia monocompilada desfasada
    │   ├── index_standalone.html                         # Copia monocompilada
    │   ├── README.txt                                    # Manual de usuario offline
    │   ├── js/app.js                                     # Código Vanilla JS histórico (135 KB)
    │   ├── css/styles.css                                # Estilos CSS históricos (74 KB)
    │   └── assets/ (banners/ e images/)                  # Fotografías duplicadas históricas (23.6 MB)
    ├── build_offline.mjs                                 # Script de diagnóstico obsoleto
    ├── bun.lock                                          # Lockfile Bun heredado
    ├── metadata.json                                     # Metadatos de Google AI Studio
    └── .env.example                                      # Plantilla de variables heredada
```

---

# 18. RESUMEN EJECUTIVO PARA UNA NUEVA IA

```
================================================================================
INICIO RÁPIDO PARA NUEVA IA
================================================================================
```

1. **QUÉ ES EL PROYECTO:**
   Es un prototipo digital de alta fidelidad, institucional, interactivo y autónomo para el Ministerio de Justicia y del Derecho de Colombia sobre la Conciliación en Equidad (bajo la Ley 2220 de 2022 y Decreto 42 de 2026).

2. **DÓNDE ESTÁ EL CÓDIGO REAL:**
   La **única fuente de verdad** es `src/` (React 19 + TypeScript + Tailwind CSS v4) junto con `index.html` en la raíz. Toda modificación debe hacerse en `src/`.

3. **QUÉ NO DEBES TOCAR NI EDITAR:**
   - **NO edites los archivos HTML gigantes (~18.7 MB)** en la raíz ni en subcarpetas. Son artefactos derivados generados por scripts.
   - **NO alteres los textos normativos** ni los plazos legales (21 de enero de 2027 / año 2034).
   - **NO elimines las 10 imágenes activas** ni los componentes existentes.
   - **NO cambies la arquitectura SPA** basada en pestañas y `ThemeContext`.

4. **ESTADO ACTUAL DEL PROYECTO:**
   Completamente funcional y maduro. Las 10 vistas, los 8 componentes, los 5 módulos de datos y las 10 imágenes están activos y sin errores de compilación.

5. **PROBLEMAS TÉCNICOS CONOCIDOS:**
   - La línea 34 de `sync_distributions.ts` corrompe los HTMLs sueltos debido a tokens `$` en el código minificado. **NO la modifiques hasta que el usuario lo solicite explícitamente.**
   - El archivo `public/JUSTICIA_EN_EQUIDAD_OFFLINE_2026.zip` contiene la **única versión offline 100% sana e íntegra (14 MB)**. Consérvalo intacto.

6. **CÓMO DEBES TRABAJAR:**
   - Consulta siempre `00_CONTINUIDAD_PROYECTO_JUSTICIA_EN_EQUIDAD.md`.
   - Modifica **únicamente lo que el usuario pida de forma explícita**.
   - No ejecutes `npm run build` salvo que se te pida formalmente compilar una distribución.
   - Informa con exactitud qué archivos modificaste y verifica que las 10 vistas continúen funcionando sin regresiones.
