import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { UserProfile, ActiveTab } from '../types';
import {
  Scale,
  Users,
  Building2,
  GraduationCap,
  Sparkles,
  Search,
  Bookmark,
  MapPin,
  HelpCircle,
  BookOpen,
  Layers,
  Eye,
  Type,
  Menu,
  X,
  Compass,
  ChevronDown,
} from 'lucide-react';
import { GovCoLogo } from './GovCoLogo';
import { MinJusticiaLogo } from './MinJusticiaLogo';

export const Header: React.FC = () => {
  const {
    activeProfile,
    setActiveProfile,
    activeTab,
    setActiveTab,
    fontSize,
    setFontSize,
    highContrast,
    setHighContrast,
    setTermQuery,
  } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickSearchOpen, setQuickSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setTermQuery(searchInput.trim());
      setActiveTab('faq');
      setQuickSearchOpen(false);
    }
  };

  const handleEntitySearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setTermQuery(searchInput.trim());
      setActiveTab('faq');
    }
  };

  const navLinks: { tab: ActiveTab; label: string; icon: React.ElementType }[] = [
    { tab: 'home', label: 'Inicio', icon: Compass },
    { tab: 'ruta-ciudadana', label: 'Ruta Ciudadana', icon: Sparkles },
    { tab: 'conozca', label: '¿Qué es?', icon: BookOpen },
    { tab: 'conciliadores', label: 'Soy Conciliador(a)', icon: Users },
    { tab: 'plje', label: 'Implemente un PLJE', icon: Building2 },
    { tab: 'pace', label: 'Puntos de Atención (PACE)', icon: MapPin },
    { tab: 'sistema', label: 'Estructura', icon: Layers },
    { tab: 'recursos', label: 'Recursos', icon: Bookmark },
    { tab: 'faq', label: 'Preguntas Frecuentes', icon: HelpCircle },
    { tab: 'glosario', label: 'Glosario', icon: Scale },
  ];

  const profileOptions: { id: UserProfile; label: string; icon: React.ElementType; sub: string }[] = [
    { id: 'ciudadania', label: 'Ciudadanía', icon: Users, sub: 'Resolver un conflicto' },
    { id: 'entidad', label: 'Alcaldías y Gobernaciones', icon: Building2, sub: 'Crear o sostener PLJE' },
    { id: 'conciliador', label: 'Conciliadores en Equidad', icon: Scale, sub: 'Inscripción y ejercicio' },
    { id: 'aliado', label: 'Academia y Aliados', icon: GraduationCap, sub: 'Judicaturas y convenios' },
  ];

  return (
    <header className="print:hidden sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs font-sans">
      {/* 1. Barra Oficial GOV.CO - Color Institucional #004899 */}
      <div className="bg-[#004899] text-white text-[11px] py-1.5 px-4 sm:px-8 flex items-center justify-between border-b border-blue-900 shadow-xs">
        <div className="flex items-center gap-3">
          <GovCoLogo height={18} className="text-white" />
          <span className="text-blue-100/80 text-[10px] hidden sm:inline border-l border-blue-400/40 pl-3">
            República de Colombia • Ministerio de Justicia y del Derecho
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[10px]">
            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : fontSize === 'large' ? 'xlarge' : 'normal')}
              className="p-1 hover:bg-white/10 rounded flex items-center gap-0.5 cursor-pointer"
              title="Cambiar tamaño de texto"
            >
              <Type className="w-3 h-3" />
              <span>A{fontSize === 'large' ? '+' : fontSize === 'xlarge' ? '++' : ''}</span>
            </button>
            <button
              onClick={() => setHighContrast(!highContrast)}
              className="p-1 hover:bg-white/10 rounded cursor-pointer"
              title="Modo alto contraste"
            >
              <Eye className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Cabecera Institucional Oficial MinJusticia (Con Logo Imagen 3 y Buscador Oficial) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        {/* Logo Oficial MinJusticia (Imagen 3) */}
        <div
          onClick={() => setActiveTab('home')}
          className="flex items-center cursor-pointer group select-none py-0.5"
        >
          <MinJusticiaLogo variant="color" size="md" />
        </div>

        {/* Buscador Oficial de la Entidad */}
        <div className="flex items-center gap-3">
          <form onSubmit={handleEntitySearch} className="hidden sm:flex items-center">
            <div className="flex items-center border border-slate-300 rounded-full pl-4 pr-1 py-1 bg-white hover:border-[#004899] focus-within:border-[#004899] transition-colors shadow-xs">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Buscar en la entidad"
                className="text-xs text-slate-700 placeholder:text-slate-400 outline-none w-48 lg:w-64 bg-transparent"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-full bg-[#004899] hover:bg-[#003875] text-white flex items-center justify-center cursor-pointer transition-colors shadow-xs"
                title="Buscar"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setQuickSearchOpen(true)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer"
              aria-label="Buscar"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#004899] text-white hover:bg-[#003875] cursor-pointer"
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Barra de Navegación Oficial MinJusticia */}
      <div className="border-t border-slate-200 text-xs font-semibold text-[#004899] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start overflow-x-auto divide-x divide-blue-200/80 scrollbar-none">
          <button
            onClick={() => setActiveTab('home')}
            className="px-3.5 py-2 hover:bg-blue-50/80 transition-colors text-left shrink-0 cursor-pointer text-[#004899]"
          >
            Inicio
          </button>
          <span className="px-3.5 py-2 hover:bg-blue-50/80 transition-colors text-left shrink-0 cursor-pointer text-[#004899]">
            Transparencia
          </span>
          <span className="px-3.5 py-2 hover:bg-blue-50/80 transition-colors text-left shrink-0 cursor-pointer flex items-center gap-1 text-[#004899]">
            Atención y Servicios a la Ciudadanía
            <ChevronDown className="w-3 h-3 text-blue-600" />
          </span>
          <span className="px-3.5 py-2 hover:bg-blue-50/80 transition-colors text-left shrink-0 cursor-pointer flex items-center gap-1 text-[#004899]">
            Participa
            <ChevronDown className="w-3 h-3 text-blue-600" />
          </span>
          <span className="px-3.5 py-2 hover:bg-blue-50/80 transition-colors text-left shrink-0 cursor-pointer flex items-center gap-1 text-[#004899]">
            Ministerio
            <ChevronDown className="w-3 h-3 text-blue-600" />
          </span>
          <span className="px-3.5 py-2 hover:bg-blue-50/80 transition-colors text-left shrink-0 cursor-pointer flex items-center gap-1 text-[#004899]">
            Normatividad
            <ChevronDown className="w-3 h-3 text-blue-600" />
          </span>
          <span className="px-3.5 py-2 hover:bg-blue-50/80 transition-colors text-left shrink-0 cursor-pointer flex items-center gap-1 text-[#004899]">
            Sala de prensa
            <ChevronDown className="w-3 h-3 text-blue-600" />
          </span>
          <span className="px-3.5 py-2 hover:bg-blue-50/80 transition-colors text-left shrink-0 cursor-pointer flex items-center gap-1 text-[#004899]">
            Programas
            <ChevronDown className="w-3 h-3 text-blue-600" />
          </span>
        </div>
      </div>

      {/* 4. Título "Justicia en Equidad" y Barra de Perfiles de Navegación */}
      <div className="bg-slate-50 border-t border-b border-slate-200/80 px-4 sm:px-8 py-2.5">
        <div className="max-w-7xl mx-auto space-y-2">
          {/* Título de Identificación de la Página Web */}
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-black text-[#004899] tracking-tight flex items-center gap-2">
              <Scale className="w-6 h-6 text-[#004899] shrink-0" />
              <span>Justicia en Equidad</span>
            </h1>
          </div>

          {/* Elementos del Perfil de Navegación */}
          <div className="flex items-center justify-between gap-3 text-xs overflow-x-auto scrollbar-none pt-0.5">
            <div className="flex items-center gap-2 overflow-x-auto py-0.5">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0 mr-1">
                PERFIL DE NAVEGACIÓN:
              </span>
              {profileOptions.map((p) => {
                const isSelected = activeProfile === p.id;
                const Icon = p.icon;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      setActiveProfile(p.id);
                      if (p.id === 'ciudadania') setActiveTab('ruta-ciudadana');
                      else if (p.id === 'entidad') setActiveTab('plje');
                      else if (p.id === 'conciliador') setActiveTab('conciliadores');
                      else if (p.id === 'aliado') setActiveTab('sistema');
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-[#004899] text-white border-[#004899] shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{p.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Pestañas de Navegación del Programa Nacional de Justicia en Equidad */}
      <nav className="hidden lg:block bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-0.5 xl:gap-1 py-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.tab;
              const Icon = link.icon;
              return (
                <button
                  key={link.tab}
                  onClick={() => setActiveTab(link.tab)}
                  className={`px-2 xl:px-2.5 py-2 text-[11px] xl:text-xs font-bold rounded-lg transition-all flex items-center gap-1 shrink-0 relative cursor-pointer ${
                    isActive
                      ? 'text-[#004899] bg-blue-50/80 font-black'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#004899]' : 'text-slate-400'}`} />
                  <span className="whitespace-nowrap">{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1.5 right-1.5 h-0.5 bg-[#004899] rounded-t-full"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 6. Menú Lateral Móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 p-4 space-y-2 max-h-[80vh] overflow-y-auto">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
            Secciones del Micrositio
          </div>
          {navLinks.map((link) => {
            const isActive = activeTab === link.tab;
            const Icon = link.icon;
            return (
              <button
                key={link.tab}
                onClick={() => {
                  setActiveTab(link.tab);
                  setMobileMenuOpen(false);
                }}
                className={`w-full p-2.5 rounded-lg text-left text-xs font-bold flex items-center gap-2.5 transition-colors cursor-pointer ${
                  isActive ? 'bg-[#004899] text-white' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Modal de Búsqueda Rápida */}
      {quickSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-start justify-center p-4 pt-20">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-150">
            <form onSubmit={handleQuickSearch}>
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-4">
                <Search className="w-5 h-5 text-[#004899]" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="¿Qué desea saber? (ej. me cobraron, acta, arriendo, requisitos)..."
                  className="w-full text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setQuickSearchOpen(false)}
                  className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  ESC
                </button>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600">
                <span className="font-semibold text-slate-400 uppercase text-[10px] tracking-wider block mb-1">
                  Búsquedas ciudadanas sugeridas:
                </span>
                {[
                  { text: '¿Tiene algún costo el servicio?', query: 'costo' },
                  { text: '¿Qué hago si no cumplieron el acuerdo?', query: 'incumplimiento' },
                  { text: '¿Qué debo llevar a la audiencia?', query: 'documentos' },
                  { text: '¿Cómo inscribirse en un PLJE?', query: 'inscripcion' },
                  { text: '¿Dónde encuentro un punto de atención?', query: 'donde ir' },
                ].map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setTermQuery(s.query);
                      setActiveTab('faq');
                      setQuickSearchOpen(false);
                    }}
                    className="w-full text-left p-2 rounded-lg hover:bg-blue-50 text-slate-800 hover:text-[#004899] flex items-center justify-between cursor-pointer"
                  >
                    <span>{s.text}</span>
                    <span className="text-[10px] text-[#004899] font-semibold">Ir a FAQ →</span>
                  </button>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Presione ENTER para buscar en el banco integral</span>
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-[#004899] text-white font-semibold rounded-lg text-xs cursor-pointer"
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};
