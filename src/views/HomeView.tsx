import React from 'react';
import { useTheme } from '../context/ThemeContext';
import heroImage from '../assets/images/rural_dialogo_willys_1787607843680.jpg';
import paceImage from '../assets/images/pace_casa_justicia_clean_1787610561858.jpg';
import conciliadoresImage from '../assets/images/conciliadores_san_javier_clean_1787610547699.jpg';
import alcaldiaImage from '../assets/images/alcaldia_plje_territorio_1787178788126.jpg';
import {
  Scale,
  Users,
  Building2,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MapPin,
  HelpCircle,
  FileText,
  ShieldCheck,
  HeartHandshake,
  MessageCircle,
  ChevronRight,
  BookOpen,
  Layers,
  FileDown,
  Calendar,
  AlertCircle,
  Eye,
  Check
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { setActiveTab, setActiveProfile, direction } = useTheme();

  return (
    <div className="space-y-16 pb-12 font-sans">
      {/* HERO BLOCK */}
      <section className="relative overflow-hidden bg-radial from-blue-900 via-blue-950 to-[#001D33] text-white py-14 sm:py-20 border-b border-blue-800">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Key Messaging */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-amber-300 text-xs font-semibold backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Justicia cercana, comunitaria y gratuita</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                Resuelva sus conflictos mediante el diálogo
              </h2>

              <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl">
                La Conciliación en Equidad permite que dos o más personas construyan una solución voluntaria a sus diferencias con el apoyo de un conciliador o conciliadora reconocido por su comunidad.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setActiveProfile('ciudadania');
                    setActiveTab('ruta-ciudadana');
                  }}
                  className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  <span>Quiero resolver un conflicto</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setActiveTab('conozca')}
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm sm:text-base flex items-center justify-center gap-2 backdrop-blur-xs transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-blue-300" />
                  <span>Conocer cómo funciona</span>
                </button>
              </div>

              {/* Quick links under hero */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-blue-200/90">
                <span className="font-semibold text-white">Accesos rápidos:</span>
                <button
                  onClick={() => {
                    setActiveProfile('conciliador');
                    setActiveTab('conciliadores');
                  }}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 underline underline-offset-4"
                >
                  Soy conciliador(a)
                </button>
                <button
                  onClick={() => {
                    setActiveProfile('entidad');
                    setActiveTab('plje');
                  }}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 underline underline-offset-4"
                >
                  Represento a una Alcaldía o Gobernación
                </button>
                <button
                  onClick={() => setActiveTab('pace')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 underline underline-offset-4"
                >
                  Puntos de Atención (PACE)
                </button>
              </div>
            </div>

            {/* Right Column: Visual Narrative Card and Hero Photo */}
            <div className="lg:col-span-5 space-y-4">
              {/* Official Photo Banner Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                <img
                  src={heroImage}
                  alt="Audiencia comunitaria de conciliación en equidad en Colombia"
                  referrerPolicy="no-referrer"
                  className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 bg-black/40 px-2 py-0.5 rounded w-fit backdrop-blur-xs mb-1">
                    Encuentro Comunitario
                  </span>
                  <p className="text-xs font-semibold text-white leading-snug">
                    Diálogo respetuoso y confidencial guiado por conciliadores comunitarios.
                  </p>
                </div>
              </div>

              {/* Principles Summary */}
              <div className="bg-white/10 border border-white/15 backdrop-blur-md rounded-2xl p-5 text-white space-y-3 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                    Garantías Fundamentales
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full font-bold">
                    Ley 2220 de 2022
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <strong className="text-emerald-400 block font-bold mb-0.5">100% Gratuito</strong>
                    <span className="text-[11px] text-blue-200">Sin aranceles ni cobros.</span>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <strong className="text-amber-400 block font-bold mb-0.5">Voluntario</strong>
                    <span className="text-[11px] text-blue-200">Las partes deciden.</span>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <strong className="text-blue-300 block font-bold mb-0.5">Efecto Legal</strong>
                    <span className="text-[11px] text-blue-200">Mérito ejecutivo.</span>
                  </div>
                </div>

                <div className="text-center text-[10px] text-blue-200/80 pt-1">
                  Decreto 42 de 2026 • Programas Locales de Justicia en Equidad (PLJE)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 1 & ACCESOS POR PÚBLICO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-700 block mb-1">
            Encuentre la información que necesita
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Navegación personalizada por perfil ciudadano e institucional
          </h3>
          <p className="text-slate-600 text-sm mt-2">
            Seleccione la opción que mejor describe su necesidad. No requiere conocer previamente normas ni siglas administrativas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Ciudadanía */}
          <div
            onClick={() => {
              setActiveProfile('ciudadania');
              setActiveTab('ruta-ciudadana');
            }}
            className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block mb-1">Ciudadanía</span>
              <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                Necesito ayuda para resolver un conflicto
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Conozca cuándo procede la conciliación, qué debe preparar, cómo se realiza la audiencia y qué ocurre después.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-blue-800 group-hover:text-blue-950">
              <span>Consultar Ruta Ciudadana</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Entidades Territoriales */}
          <div
            onClick={() => {
              setActiveProfile('entidad');
              setActiveTab('plje');
            }}
            className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center mb-4 group-hover:bg-purple-900 group-hover:text-white transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 block mb-1">Alcaldías y Gobernaciones</span>
              <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                Necesito crear o fortalecer un PLJE
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Consulte etapas, plazos del Decreto 42 de 2026, acto administrativo, reglamento, financiamiento y PACE.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-purple-800 group-hover:text-purple-950">
              <span>Iniciar Ruta de Alcaldías</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Conciliadores en Equidad */}
          <div
            onClick={() => {
              setActiveProfile('conciliador');
              setActiveTab('conciliadores');
            }}
            className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4 group-hover:bg-amber-900 group-hover:text-white transition-colors">
                <Scale className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block mb-1">Conciliadores</span>
              <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                Soy conciliador o conciliadora en equidad
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Inscripción obligatoria de 2 años en el PLJE, deberes, ética, manejo de actas y acceso a estímulos de vivienda y educación.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-amber-800 group-hover:text-amber-950">
              <span>Consultar mi ruta y deberes</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Actores Aliados & Academia */}
          <div
            onClick={() => {
              setActiveProfile('aliado');
              setActiveTab('sistema');
            }}
            className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4 group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">Academia y Aliados</span>
              <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                Quiero participar o articularme
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Judicaturas de 7 meses en PLJE, prácticas interdisciplinarias, Juntas de Acción Comunal y veeduría social.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-800 group-hover:text-emerald-950">
              <span>Ver formas de articulación</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL SHOWCASE BANNERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400 block mb-1">
                Presencia Territorial y Operación
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Los Tres Pilares de la Conciliación en Equidad en Colombia
              </h3>
            </div>
            <span className="text-xs font-mono bg-blue-900/60 border border-blue-700/50 text-blue-200 px-3 py-1 rounded-full">
              Ley 2220 de 2022 • Decreto 42 de 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: PACE */}
            <div
              onClick={() => setActiveTab('pace')}
              className="bg-slate-950/70 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-400/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={paceImage}
                  alt="Punto de Atención PACE en Casa de Justicia"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute bottom-2 left-3 text-[10px] uppercase font-bold tracking-wider bg-blue-900/90 text-white px-2 py-0.5 rounded">
                  Infraestructura PACE
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                  Puntos de Atención Fijos e Itinerantes
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Espacios dignos y accesibles con privacidad acústica y radicación oficial en Casas de Justicia y Centros de Convivencia.
                </p>
                <div className="pt-2 flex items-center text-xs font-bold text-amber-400">
                  <span>Ver directorio y condiciones</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Pillar 2: Conciliadores */}
            <div
              onClick={() => {
                setActiveProfile('conciliador');
                setActiveTab('conciliadores');
              }}
              className="bg-slate-950/70 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-400/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={conciliadoresImage}
                  alt="Conciliadores Comunitarios en Equidad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute bottom-2 left-3 text-[10px] uppercase font-bold tracking-wider bg-amber-600/90 text-white px-2 py-0.5 rounded">
                  Operadores Comunitarios
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                  Liderazgo Avalado por la Rama Judicial
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Líderes formados y certificados por Tribunales Superiores que administran justicia de forma voluntaria y gratuita.
                </p>
                <div className="pt-2 flex items-center text-xs font-bold text-amber-400">
                  <span>Ver requisitos y estímulos</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Pillar 3: Alcaldías PLJE */}
            <div
              onClick={() => {
                setActiveProfile('entidad');
                setActiveTab('plje');
              }}
              className="bg-slate-950/70 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-400/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={alcaldiaImage}
                  alt="Planificación municipal del Programa Local de Justicia en Equidad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute bottom-2 left-3 text-[10px] uppercase font-bold tracking-wider bg-purple-700/90 text-white px-2 py-0.5 rounded">
                  Gestión Municipal
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                  Programas Locales de Justicia (PLJE)
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Decreto municipal de formalización, reglamento operativo, articulación al PISCC y habilitación de turnos.
                </p>
                <div className="pt-2 flex items-center text-xs font-bold text-amber-400">
                  <span>Ver ruta de 10 pasos para alcaldías</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 2: ESPACIO ORIENTADOR - GUÍA HACIA LA RUTA CIUDADANA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-amber-50/40 rounded-3xl border border-blue-200/80 p-8 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold w-fit">
                <HelpCircle className="w-4 h-4 text-blue-700" />
                <span>Orientador Ciudadano Interactivo</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                ¿La Conciliación en Equidad puede ayudarme en mi situación?
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Responda 3 sencillas preguntas en la <strong>Ruta Ciudadana</strong> para recibir una orientación pedagógica personalizada: sabrá si su caso puede resolverse mediante el diálogo, qué documentos preparar y a cuál Punto de Atención (PACE) acudir.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-1 text-xs text-slate-700">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Orientación pedagógica en 3 pasos</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Gratuito y sin abogado</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Directorio y pasos claros</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <button
                onClick={() => {
                  setActiveProfile('ciudadania');
                  setActiveTab('ruta-ciudadana');
                }}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>Iniciar Orientador Ciudadano</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-amber-400" />
              </button>
              <span className="text-[11px] text-slate-500 mt-2 text-center sm:text-right w-full">
                Encuentre el paso a paso en la Ruta Ciudadana
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: NARRATIVA VISUAL DEL PROCESO */}
      <section className="bg-slate-50 border-y border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-700 block mb-1">
              Descubra la Conciliación en Equidad
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Una narrativa visual: Del conflicto al acuerdo voluntario
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              El proceso no impone una solución: crea un espacio donde la conversación transforma las diferencias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-black text-lg mb-3">
                1
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">Situación Cotidiana</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Surge una diferencia por convivencia, deudas o acuerdos entre vecinos o familiares.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-black text-lg mb-3">
                2
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">Diálogo en el PACE</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                El conciliador en equidad facilita un espacio confidencial y seguro para escucharse con respeto.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-900 flex items-center justify-center font-black text-lg mb-3">
                3
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">Construcción Conjunta</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ambas partes proponen opciones realistas y deciden qué compromisos pueden asumir y cumplir.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center font-black text-lg mb-3">
                4
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">Acuerdo y Paz</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Se firma el Acta que tiene pleno valor legal (mérito ejecutivo y cosa juzgada), restableciendo la convivencia.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setActiveTab('ruta-ciudadana')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-all"
            >
              <span>Recorrer la Ruta Ciudadana completa (Paso a Paso)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* BLOQUE 5 & 6: QUIÉNES HACEN POSIBLE EL SISTEMA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-[#004899]">
                Sistema de Justicia en Equidad
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                ¿Quiénes hacen posible la Justicia en Equidad en Colombia?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No es un trámite aislado: es una red nacional y territorial donde el Estado y las comunidades se unen para acercar la justicia a cada barrio y vereda.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('sistema')}
                  className="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all"
                >
                  <Layers className="w-4 h-4" />
                  <span>Explorar el Sistema de Justicia en Equidad</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  MinJusticia / PNJE
                </div>
                <p className="text-xs text-slate-600">
                  Órgano rector nacional que formula la política pública, expide lineamientos técnicos y brinda asistencia.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  Alcaldías y Gobernaciones / PLJE
                </div>
                <p className="text-xs text-slate-600">
                  Entidades territoriales que crean formalmente el programa, disponen recursos, nombran coordinación y habilitan PACE.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  Conciliadores(as) en Equidad
                </div>
                <p className="text-xs text-slate-600">
                  Líderes formados, nombrados judicialmente e inscritos que facilitan el diálogo voluntario y gratuito.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  Ciudadanía y Comunidad
                </div>
                <p className="text-xs text-slate-600">
                  Protagonistas que postulan conciliadores, participan en el diálogo y construyen acuerdos para la convivencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE DE NOVEDADES DEL DECRETO 42 DE 2026 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 rounded-3xl p-8 sm:p-10 text-white shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                Marco Normativo Actualizado
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mt-1">
                ¿Qué cambió con el Decreto 42 de 2026 y la Ley 2220?
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-blue-200 border border-white/20">
                Vigencia Inmediata
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <strong className="text-amber-300 font-bold block text-base">Para Alcaldías y Gobernaciones</strong>
              <p className="text-blue-100/90 leading-relaxed">
                Obligación de crear y sostener los PLJE. Territorios con conciliadores ya nombrados tienen plazo hasta el <strong>21 de enero de 2027</strong>.
              </p>
              <button
                onClick={() => setActiveTab('plje')}
                className="text-amber-400 font-bold hover:underline inline-flex items-center gap-1 pt-2"
              >
                Ver hoja de ruta municipal →
              </button>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <strong className="text-amber-300 font-bold block text-base">Para Conciliadores en Equidad</strong>
              <p className="text-blue-100/90 leading-relaxed">
                Inscripción obligatoria cada 2 años en el PLJE, acceso prioritario a programas de vivienda y educación superior para ellos y su familia.
              </p>
              <button
                onClick={() => setActiveTab('conciliadores')}
                className="text-amber-400 font-bold hover:underline inline-flex items-center gap-1 pt-2"
              >
                Ver requisitos y estímulos →
              </button>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <strong className="text-amber-300 font-bold block text-base">Para la Ciudadanía</strong>
              <p className="text-blue-100/90 leading-relaxed">
                Atención más organizada a través de Puntos PACE fijos e itinerantes, gratuidad estricta y custodia institucional de actas en el archivo municipal.
              </p>
              <button
                onClick={() => setActiveTab('pace')}
                className="text-amber-400 font-bold hover:underline inline-flex items-center gap-1 pt-2"
              >
                Consultar puntos PACE →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE DE PREGUNTAS FRECUENTES DESTACADAS (8 PREGUNTAS CLAVE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-blue-700">Respuestas Claras</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Preguntas Frecuentes Destacadas</h3>
          </div>
          <button
            onClick={() => setActiveTab('faq')}
            className="text-xs sm:text-sm font-bold text-blue-800 hover:text-blue-950 hover:underline flex items-center gap-1"
          >
            <span>Ver banco integral de 38 preguntas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              q: '1. ¿La Conciliación en Equidad tiene algún costo?',
              a: 'No. El servicio y la orientación son 100% gratuitos. El conciliador no puede cobrar honorarios ni recibir dinero.',
            },
            {
              q: '2. ¿El conciliador decide quién tiene la razón?',
              a: 'No. El conciliador facilita la conversación y puede sugerir opciones, pero las partes deciden si llegan a un acuerdo.',
            },
            {
              q: '3. ¿Estoy obligado a aceptar una propuesta en la audiencia?',
              a: 'No. El acuerdo es voluntario y solo existe cuando ambas partes manifiestan libremente que lo aceptan.',
            },
            {
              q: '4. ¿El acuerdo firmado en el acta debe cumplirse?',
              a: 'Sí. El acta presta mérito ejecutivo y hace tránsito a cosa juzgada. Es de obligatorio cumplimiento legal.',
            },
            {
              q: '5. ¿Puedo solicitar la conciliación de forma verbal?',
              a: 'Sí. La solicitud puede presentarse verbalmente o por escrito según los canales disponibles en su municipio.',
            },
            {
              q: '6. ¿Todo conflicto puede conciliarse en equidad?',
              a: 'No. Solo asuntos civiles y de convivencia permitidos por la ley. Delitos graves o violencias no pueden conciliarse.',
            },
            {
              q: '7. ¿Qué es un PLJE en un municipio?',
              a: 'Es el Programa Local de Justicia en Equidad que organiza, acompaña, custodia actas y sostiene los puntos de atención.',
            },
            {
              q: '8. ¿Un conciliador debe inscribirse en el PLJE para ejercer?',
              a: 'Sí. La inscripción ante el PLJE tiene una vigencia de 2 años y es requisito indispensable para el ejercicio activo.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-sm text-slate-900 mb-1.5 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{item.q}</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
