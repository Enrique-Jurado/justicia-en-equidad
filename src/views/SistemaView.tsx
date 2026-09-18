import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import sistemaImage from '../assets/images/ecosistema_red_pnje_1787607859571.jpg';
import {
  Layers,
  Scale,
  Building2,
  GraduationCap,
  Users,
  MapPin,
  FileCheck,
  ChevronRight,
  Sparkles,
  Info,
  Shield,
  BookOpen,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const SistemaView: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('pnje');

  const nodes = [
    {
      id: 'snc',
      label: '1. Sistema Nacional de Conciliación (SNC)',
      role: 'Marco General de Política Pública',
      icon: Scale,
      color: 'blue',
      desc: 'Instancia superior creada por la Ley 2220 de 2022 que articula a todos los operadores de conciliación en derecho y en equidad del país.',
      inputs: 'Políticas de Estado, diagnósticos de conflictividad nacional, estadísticas.',
      outputs: 'Estrategias de acceso a la justicia, lineamientos y estándares.',
    },
    {
      id: 'minjusticia',
      label: '2. Ministerio de Justicia y del Derecho',
      role: 'Órgano Rector y Formulación Normativa',
      icon: Building2,
      color: 'indigo',
      desc: 'Diseña la política, expide decretos y resoluciones, vigila y controla los centros y programas de justicia.',
      inputs: 'Solicitudes territoriales, reformas legales, seguimiento.',
      outputs: 'Decretos reglamentarios (ej. Decreto 42 de 2026), avales de formación.',
    },
    {
      id: 'pnje',
      label: '3. Programa Nacional de Justicia en Equidad (PNJE)',
      role: 'Brazo Técnico y Pedagógico Ministerial',
      icon: BookOpen,
      color: 'amber',
      desc: 'Estructura dentro de la Dirección de Métodos Alternativos (MASC) encargada de orientar técnica y metodológicamente la justicia en equidad en todo el territorio.',
      inputs: 'Diagnósticos departamentales, necesidades de capacitación comunitaria.',
      outputs: 'Guías metodológicas, mallas curriculares, censo nacional de operadores.',
    },
    {
      id: 'plje',
      label: '4. Programas Locales de Justicia en Equidad (PLJE)',
      role: 'Ejecución y Sostenibilidad Municipal',
      icon: Shield,
      color: 'purple',
      desc: 'Creados por las alcaldías y gobernaciones para formalizar la atención, designar coordinadores, dotar espacios y custodiar actas.',
      inputs: 'Presupuesto local, apoyo departamental, asistencia del MinJusticia.',
      outputs: 'Inscripción de conciliadores (2 años), funcionamiento de PACE, archivo oficial.',
    },
    {
      id: 'pace',
      label: '5. Puntos de Atención (PACE)',
      role: 'Espacios de Diálogo Ciudadano',
      icon: MapPin,
      color: 'emerald',
      desc: 'Lugares físicos habilitados en barrios y veredas donde se desarrollan las audiencias de conciliación con privacidad y seguridad.',
      inputs: 'Dotación municipal, turnos de conciliadores, solicitudes ciudadanas.',
      outputs: 'Audiencias, actas de acuerdo, constancias, remisiones institucionales.',
    },
    {
      id: 'conciliadores',
      label: '6. Conciliadores(as) en Equidad',
      role: 'Facilitadores Comunitarios Neutrales',
      icon: Users,
      color: 'amber',
      desc: 'Líderes de la comunidad investidos transitoriamente de la función de administrar justicia para ayudar a construir acuerdos voluntarios.',
      inputs: 'Vocación de servicio, conocimiento de la realidad local, formación continua.',
      outputs: 'Acuerdos duraderos con mérito ejecutivo y restablecimiento del tejido social.',
    },
    {
      id: 'academia',
      label: '7. Academia y Judicatura en PLJE',
      role: 'Articulación Intersectorial',
      icon: GraduationCap,
      color: 'cyan',
      desc: 'Egresados de Derecho que realizan su judicatura de 7 meses en los PLJE, apoyando la coordinación, gestión de casos y pedagogía comunitaria.',
      inputs: 'Convenios entre universidades, alcaldías y Ministerio.',
      outputs: 'Fortalecimiento de la capacidad técnica municipal y experiencia profesional.',
    },
  ];

  const active = nodes.find((n) => n.id === selectedNode) || nodes[2];
  const ActiveIcon = active.icon;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans">
      {/* Header Banner with Photography */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden text-white shadow-md grid grid-cols-1 lg:grid-cols-12 border border-blue-800">
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-3 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold w-fit">
            <Layers className="w-4 h-4" />
            <span>Arquitectura Institucional del Sistema</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Sistema de Justicia en Equidad
          </h2>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
            Comprenda cómo interactúan los órganos rectores nacionales, las entidades territoriales, los conciliadores y la ciudadanía en una red colaborativa.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs text-blue-200">
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Sistema Nacional (SNC)</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Articulación Territorial PLJE</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Judicatura de 7 Meses</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full">
          <img
            src={sistemaImage}
            alt="Sede del Sistema Nacional de Justicia en Colombia"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[10px] text-white font-medium px-2.5 py-1 rounded-md border border-white/10">
            Marco Institucional y Normativo
          </div>
        </div>
      </div>

      {/* DIAGRAMA NODAL INTERACTIVO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Nodos de navegación con Iconos enriquecidos */}
        <div className="lg:col-span-5 space-y-2.5">
          <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block mb-2">
            Seleccione un nodo institucional:
          </span>
          {nodes.map((node) => {
            const isSelected = selectedNode === node.id;
            const Icon = node.icon;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-blue-900 text-white border-blue-900 shadow-md font-bold'
                    : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-blue-50 text-blue-900'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold leading-snug">{node.label}</div>
                    <div className={`text-[11px] ${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>
                      {node.role}
                    </div>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-amber-300' : 'text-slate-400'}`} />
              </button>
            );
          })}
        </div>

        {/* Detalle ampliado del nodo seleccionado */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6 sticky top-24">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs uppercase font-bold text-blue-700 tracking-wider">
                  Detalle Funcional e Interacción
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">{active.label}</h3>
                <p className="text-sm font-semibold text-slate-700 mt-0.5">{active.role}</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 border border-blue-100">
                <ActiveIcon className="w-6 h-6" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {active.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1.5 text-blue-950">
                <strong className="text-blue-900 font-bold block">Insumos y Entradas:</strong>
                <p className="leading-relaxed text-slate-700">{active.inputs}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1.5 text-emerald-950">
                <strong className="text-emerald-900 font-bold block">Productos y Salidas:</strong>
                <p className="leading-relaxed text-slate-700">{active.outputs}</p>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0" />
              <span>
                <strong>Soporte Jurídico:</strong> Artículos 2.2.4.1.1 a 2.2.4.1.18 del Decreto 42 de 2026 y Ley 2220 de 2022.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
