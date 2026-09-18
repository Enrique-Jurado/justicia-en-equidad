import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { MinJusticiaLogo } from './MinJusticiaLogo';

export const Footer: React.FC = () => {
  const { setActiveTab } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="print:hidden bg-[#004899] text-white font-sans border-t-4 border-amber-500 mt-16">
      {/* Upper Footer: Actions & Institutional Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: MinJusticia Identity con Logo Oficial */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <MinJusticiaLogo variant="light" size="sm" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200 block">
                  Gobierno de Colombia
                </span>
                <h4 className="font-bold text-sm leading-tight text-white">
                  Ministerio de Justicia y del Derecho
                </h4>
              </div>
            </div>
            <p className="text-xs text-blue-100/90 leading-relaxed">
              Dirección de Métodos Alternativos de Solución de Conflictos (MASC) • Programa Nacional de Justicia en Equidad (PNJE).
            </p>
          </div>

          {/* Col 2: Navigation Map */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              Rutas y Secciones
            </h5>
            <ul className="space-y-2 text-xs text-blue-100/90">
              <li>
                <button onClick={() => setActiveTab('ruta-ciudadana')} className="hover:text-white hover:underline text-left cursor-pointer">
                  → Ruta Ciudadana (Resolver un conflicto)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('conozca')} className="hover:text-white hover:underline text-left cursor-pointer">
                  → ¿Qué es la Conciliación en Equidad?
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('conciliadores')} className="hover:text-white hover:underline text-left cursor-pointer">
                  → Soy Conciliador(a) en Equidad
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('plje')} className="hover:text-white hover:underline text-left cursor-pointer">
                  → Guía para Alcaldías (Crear PLJE)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('pace')} className="hover:text-white hover:underline text-left cursor-pointer">
                  → Directorio de Puntos PACE
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('sistema')} className="hover:text-white hover:underline text-left cursor-pointer">
                  → Estructura y Articulación
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Tools */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              Herramientas y Normas
            </h5>
            <ul className="space-y-2 text-xs text-blue-100/90">
              <li>
                <button onClick={() => setActiveTab('recursos')} className="hover:text-white hover:underline text-left cursor-pointer">
                  → Banco de Minutas y Actas
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('glosario')} className="hover:text-white hover:underline text-left cursor-pointer">
                  → Glosario Ciudadano y Técnico
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('faq')} className="hover:text-white hover:underline text-left cursor-pointer">
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

          {/* Col 4: Official Contact & Sede Central */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              Contacto y Atención
            </h5>
            <div className="space-y-2 text-xs text-blue-100/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Calle 53 No. 13 - 27, Bogotá D.C., Colombia. Código Postal: 110231</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Línea Gratuita Nacional: 01 8000 911170</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>PBX Bogotá: (+57) 601 444 31 00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>quejasreclamos@minjusticia.gov.co</span>
              </div>
            </div>
            <div className="pt-2 text-[11px] text-blue-200">
              <span>Horario de atención: Lunes a Viernes 8:00 a.m. a 5:00 p.m.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer: Legal & Access Bar */}
      <div className="border-t border-blue-800/80 bg-[#003875] py-4 text-[11px] text-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span>© 2026 Ministerio de Justicia y del Derecho de Colombia</span>
            <span className="hidden sm:inline">•</span>
            <span>Todos los derechos reservados</span>
            <span className="hidden sm:inline">•</span>
            <span>Ley 2220 de 2022 (Estatuto de Conciliación)</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white text-amber-300 font-bold transition-colors cursor-pointer"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
