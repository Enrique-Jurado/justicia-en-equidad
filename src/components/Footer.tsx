import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowUp } from 'lucide-react';
import { GovCoFooterLogo } from './GovCoFooterLogo';

export const Footer: React.FC = () => {
  const { setActiveTab } = useTheme();

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="print:hidden text-white font-sans border-t-4 border-amber-500 mt-16">
      {/* NIVEL A. Justicia en Equidad - Información Especializada del Micrositio */}
      <div className="bg-[#002d62] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Col 1: Identidad del Micrositio */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200 block">
                Micrositio Especializado
              </span>
              <h3 className="font-extrabold text-lg leading-tight text-white">
                Justicia en Equidad
              </h3>
              <p className="text-xs text-blue-100/90 leading-relaxed">
                Programa Nacional de Justicia en Equidad (PNJE) • Dirección de Métodos Alternativos de Solución de Conflictos (MASC).
              </p>
              <p className="text-xs text-blue-200/80 leading-relaxed">
                Promoción comunitaria de la conciliación en equidad para la resolución ágil, pacífica y concertada de controversias ciudadanas en el territorio nacional.
              </p>
            </div>

            {/* Col 2: Rutas y Secciones del Micrositio */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Rutas y Secciones
              </h4>
              <ul className="space-y-2 text-xs text-blue-100/90">
                <li>
                  <button
                    onClick={() => { setActiveTab('ruta-ciudadana'); scrollToTop(); }}
                    className="hover:text-white hover:underline text-left cursor-pointer"
                  >
                    → Ruta Ciudadana (Resolver un conflicto)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setActiveTab('conozca'); scrollToTop(); }}
                    className="hover:text-white hover:underline text-left cursor-pointer"
                  >
                    → ¿Qué es la Conciliación en Equidad?
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setActiveTab('conciliadores'); scrollToTop(); }}
                    className="hover:text-white hover:underline text-left cursor-pointer"
                  >
                    → Soy Conciliador(a) en Equidad
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setActiveTab('plje'); scrollToTop(); }}
                    className="hover:text-white hover:underline text-left cursor-pointer"
                  >
                    → Guía para Alcaldías (Crear PLJE)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setActiveTab('pace'); scrollToTop(); }}
                    className="hover:text-white hover:underline text-left cursor-pointer"
                  >
                    → Directorio de Puntos PACE
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setActiveTab('sistema'); scrollToTop(); }}
                    className="hover:text-white hover:underline text-left cursor-pointer"
                  >
                    → Estructura y Articulación
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Herramientas y Normas */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Herramientas y Normas
              </h4>
              <ul className="space-y-2 text-xs text-blue-100/90">
                <li>
                  <button
                    onClick={() => { setActiveTab('recursos'); scrollToTop(); }}
                    className="hover:text-white hover:underline text-left cursor-pointer"
                  >
                    → Banco de Minutas y Actas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setActiveTab('glosario'); scrollToTop(); }}
                    className="hover:text-white hover:underline text-left cursor-pointer"
                  >
                    → Glosario Ciudadano y Técnico
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setActiveTab('faq'); scrollToTop(); }}
                    className="hover:text-white hover:underline text-left cursor-pointer"
                  >
                    → Preguntas Frecuentes
                  </button>
                </li>
                <li>
                  <a
                    href="https://www.minjusticia.gov.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline inline-flex items-center gap-1"
                  >
                    ↗ Portal Institucional MinJusticia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* NIVEL B. Información Institucional General */}
      <div className="bg-[#004899] border-t border-blue-700/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-white/20 md:divide-y-0 md:divide-x md:divide-white/20 items-start">
            {/* Columna 1. Identidad GOV.CO */}
            <div className="pb-8 md:pb-0 md:pr-8 flex justify-center items-start pt-2">
              <GovCoFooterLogo height={30} />
            </div>

            {/* Columna 2. Ministerio de Justicia y del Derecho */}
            <div className="py-8 md:py-0 md:px-8 space-y-3.5 text-xs text-white leading-relaxed">
              <h4 className="font-bold text-sm text-white mb-3">
                Ministerio de Justicia y del Derecho
              </h4>

              {/* Primer bloque */}
              <div>
                <p>Calle 53 No. 13 - 27 / Bogotá D.C., Colombia</p>
                <p>Código Postal 110231</p>
              </div>

              {/* Segundo bloque */}
              <div className="space-y-1">
                <div>
                  <span className="font-bold">Teléfono Conmutador:</span>{' '}
                  <a href="tel:+576014443100" className="text-white hover:underline">
                    +57 (60) 1 444 31 00
                  </a>
                </div>
                <div>
                  <span className="font-bold">Línea Gratuita:</span>{' '}
                  <a href="tel:018000911170" className="text-white hover:underline">
                    01 8000 911170
                  </a>
                </div>
              </div>

              {/* Tercer bloque */}
              <div>
                <p className="font-bold">Horario de Atención:</p>
                <p className="text-white/90">Lunes a Viernes de 8:30 a.m. a 4:30 p.m. en jornada continua.</p>
              </div>

              {/* Cuarto bloque */}
              <div>
                <p className="font-bold">Dirección de correspondencia:</p>
                <p className="text-white/90">Carrera 13 No. 52 - 95 Bogotá</p>
              </div>

              {/* Quinto bloque */}
              <div>
                <p className="font-bold">Dirección Despacho:</p>
                <p className="text-white/90">Cra 9 No. 12C - 10 (Sede Centro)</p>
              </div>

              {/* Sexto bloque */}
              <div>
                <a
                  href="https://www.minjusticia.gov.co/_layouts/15/FIXUPREDIRECT.ASPX?WebId=81cc8fc0-8d1e-4295-8f37-5d076116407c&TermSetId=bc8fde6e-ca78-428b-ace8-2501b5ff592c&TermId=e90f0a94-410f-4746-9039-d90f1dce5215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline block"
                >
                  Peticiones, Quejas, Reclamos, Denuncias, Solicitudes
                </a>
              </div>

              {/* Séptimo bloque */}
              <div>
                <a
                  href="https://www.minjusticia.gov.co/_layouts/15/FIXUPREDIRECT.ASPX?WebId=81cc8fc0-8d1e-4295-8f37-5d076116407c&TermSetId=bc8fde6e-ca78-428b-ace8-2501b5ff592c&TermId=f711c879-b548-488b-b7ce-de03320cd837"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline block"
                >
                  Canales de Atención
                </a>
              </div>

              {/* Octavo bloque */}
              <div>
                <span className="font-bold">Línea Anticorrupción:</span>{' '}
                <a href="tel:+576014443100" className="text-white hover:underline">
                  601 4443100
                </a>{' '}
                extensiones 1310
              </div>

              {/* Noveno bloque */}
              <div>
                <a
                  href="https://www.minjusticia.gov.co/servicio-ciudadano/Paginas/politica-proteccion-datos-personales.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline block"
                >
                  Políticas de Privacidad y Condiciones de Uso
                </a>
              </div>
            </div>

            {/* Columna 3. Correspondencia, notificaciones y enlaces */}
            <div className="pt-8 md:pt-0 md:pl-8 space-y-4 text-xs text-white leading-relaxed">
              {/* Primer bloque */}
              <div className="space-y-1">
                <p className="font-bold text-white">Correo para radicación de correspondencia:</p>
                <a
                  href="mailto:gestion.documental.adm@minjusticia.gov.co"
                  className="text-white hover:underline block break-all"
                >
                  gestion.documental.adm@minjusticia.gov.co
                </a>
                <a
                  href="https://www.minjusticia.gov.co/_layouts/15/FIXUPREDIRECT.ASPX?WebId=81cc8fc0-8d1e-4295-8f37-5d076116407c&TermSetId=bc8fde6e-ca78-428b-ace8-2501b5ff592c&TermId=5fb3b01d-b66a-49d3-9433-3ff776b1481b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white hover:underline block"
                >
                  Informe Procesos Judiciales contra el MJD
                </a>
              </div>

              {/* Segundo bloque */}
              <div className="space-y-1">
                <p className="font-bold text-white">Correo para notificaciones judiciales:</p>
                <a
                  href="mailto:notificaciones.judiciales@minjusticia.gov.co"
                  className="text-white hover:underline block break-all"
                >
                  notificaciones.judiciales@minjusticia.gov.co
                </a>
                <a
                  href="https://www.minjusticia.gov.co/_layouts/15/FIXUPREDIRECT.ASPX?WebId=81cc8fc0-8d1e-4295-8f37-5d076116407c&TermSetId=bc8fde6e-ca78-428b-ace8-2501b5ff592c&TermId=5fb3b01d-b66a-49d3-9433-3ff776b1481b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white hover:underline block"
                >
                  Informe Procesos Judiciales contra el MJD
                </a>
              </div>

              {/* Tercer bloque: Funcionarios */}
              <div className="space-y-1">
                <p className="font-bold text-white">Funcionarios</p>
                <div className="flex flex-col gap-1">
                  <a
                    href="https://www.office.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white hover:underline"
                  >
                    Correo Institucional
                  </a>
                  <a
                    href="https://intranet.minjusticia.gov.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white hover:underline"
                  >
                    Intranet
                  </a>
                </div>
              </div>

              {/* Cuarto bloque: Mapa del sitio */}
              <div>
                <a
                  href="https://www.minjusticia.gov.co/transparencia/Paginas/Mapa-de-Sitio.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline block"
                >
                  Mapa del sitio
                </a>
              </div>

              {/* Quinto bloque: Volver arriba */}
              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="flex items-center gap-1.5 text-white hover:underline font-bold transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-white rounded-xs py-1 text-xs"
                >
                  <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Volver arriba</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
