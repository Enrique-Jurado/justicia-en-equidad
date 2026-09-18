import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { PljeInteractiveChecklist } from '../components/PljeInteractiveChecklist';
import alcaldiaImage from '../assets/images/alcaldia_plje_territorio_1787178788126.jpg';
import {
  Building2,
  Calendar,
  FileText,
  Layers,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  Download,
  Mail
} from 'lucide-react';

export const PljeView: React.FC = () => {
  const { setActiveTab } = useTheme();
  const [selectedScenario, setSelectedScenario] = useState<number>(3);

  const scenarios = [
    {
      id: 1,
      title: 'Escenario A: Municipio con conciliadores nombrados y activos',
      deadline: '21 de enero de 2027 (Plazo perentorio de 1 año)',
      actions: [
        'Realizar censo rápido de ubicación y disponibilidad de operadores.',
        'Expedir Decreto municipal de creación del PLJE.',
        'Designar coordinador(a) del programa y habilitar turnos en puntos PACE.',
        'Abrir el libro oficial de radicación y custodia de actas.'
      ]
    },
    {
      id: 2,
      title: 'Escenario B: Municipio con nombramientos antiguos pero sin censo',
      deadline: '21 de enero de 2027',
      actions: [
        'Cruzar archivos locales con el Tribunal Superior de Distrito.',
        'Publicar convocatoria de reactivación y actualización de datos.',
        'Expedir el acto de creación del PLJE y vincular a los conciliadores que deseen retomar.',
        'Capacitar a los operadores en el Decreto 42 de 2026.'
      ]
    },
    {
      id: 3,
      title: 'Escenario C: Municipio sin conciliadores nombrados',
      deadline: 'Hasta el año 2034 (Plazo de gradualidad según Ley 2220 de 2022 y Decreto 42 de 2026)',
      actions: [
        'Adelantar diagnóstico territorial de conflictividades y mapeo comunitario.',
        'Articular el programa a la política de seguridad (PISCC) y Plan de Desarrollo.',
        'Solicitar asistencia técnica al Ministerio para futuros procesos de formación comunitaria.',
        'Articular a otros operadores comunitarios existentes (jueces de paz, comités comunales).'
      ]
    },
    {
      id: 4,
      title: 'Escenario D: Municipio con programa o estructura anterior',
      deadline: 'Armonización inmediata al Decreto 42 de 2026',
      actions: [
        'Revisar el acto administrativo existente y ajustar denominación a PLJE.',
        'Actualizar reglamento interno con reglas de inscripción bianual.',
        'Verificar condiciones de privacidad física de los espacios PACE.',
        'Establecer canal de reporte de información hacia el MinJusticia.'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans print:py-0 print:px-0 print:space-y-0">
      {/* Header Banner with Photography (Hidden in print) */}
      <div className="print:hidden bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden text-white shadow-md grid grid-cols-1 lg:grid-cols-12 border border-blue-800">
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-3 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold w-fit">
            <Building2 className="w-4 h-4" />
            <span>Guía Gerencial para Entidades Territoriales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Implemente el PLJE en su Municipio o Distrito
          </h2>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
            Ruta paso a paso para que alcaldías y gobernaciones formulen, formalicen, operen y sostengan los Programas Locales de Justicia en Equidad conforme a la Ley 2220 de 2022 y el Decreto 42 de 2026.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs text-blue-200">
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Decreto 42 de 2026</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Ruta en 10 Pasos</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Checklist Descargable</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full">
          <img
            src={alcaldiaImage}
            alt="Mesa técnica municipal de planificación territorial de justicia en equidad"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[10px] text-white font-medium px-2.5 py-1 rounded-md border border-white/10">
            Gestión Territorial e Institucional
          </div>
        </div>
      </div>

      {/* ÁRBOL DE DECISIÓN TERRITORIAL (Hidden in print) */}
      <section className="print:hidden bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="max-w-2xl mb-6">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-700">Árbol de Decisión Territorial</span>
          <h3 className="text-2xl font-black text-slate-900">¿Cuál es la situación actual de su entidad territorial?</h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Seleccione el escenario que corresponda a su municipio para ver el plazo legal y las acciones prioritarias.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {scenarios.map((sc) => (
            <button
              key={sc.id}
              onClick={() => setSelectedScenario(sc.id)}
              className={`p-4 rounded-xl text-left border transition-all ${
                selectedScenario === sc.id
                  ? 'bg-blue-900 text-white border-blue-900 shadow-sm font-bold'
                  : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className="text-xs font-bold">{sc.title}</div>
            </button>
          ))}
        </div>

        {/* Selected scenario detail box */}
        {(() => {
          const sc = scenarios.find((s) => s.id === selectedScenario) || scenarios[0];
          return (
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <h4 className="font-bold text-base text-slate-900">{sc.title}</h4>
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Plazo: {sc.deadline}</span>
                </div>
              </div>

              <div>
                <strong className="block text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Acciones prioritarias recomendadas:
                </strong>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                  {sc.actions.map((act, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex items-center justify-between flex-wrap gap-3 text-xs">
                <span className="text-slate-500">¿Requiere asistencia técnica ministerial?</span>
                <a
                  href="mailto:conciliacionequidad@minjusticia.gov.co?subject=Solicitud de Acompañamiento PLJE"
                  className="px-4 py-2 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Escribir al Programa Nacional (MinJusticia)</span>
                </a>
              </div>
            </div>
          );
        })()}
      </section>

      {/* INTERACTIVE CHECKLIST OF 10 STEPS (This will be the only part printed!) */}
      <PljeInteractiveChecklist />

      {/* MATRIZ DE RESPONSABILIDADES "QUIÉN HACE QUÉ" (Hidden in print) */}
      <section className="print:hidden bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="max-w-2xl mb-6">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-700">Articulación Multinivel</span>
          <h3 className="text-2xl font-black text-slate-900">Matriz de Responsabilidades en la Gestión Pública</h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Distribución clara de roles entre Nación, Departamentos, Distritos y Municipios.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-800 border-collapse">
            <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase text-[11px]">
              <tr>
                <th className="p-3.5">Nivel Institucional</th>
                <th className="p-3.5">Responsabilidad Principal</th>
                <th className="p-3.5">Qué NO debe hacer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-3.5 font-bold text-blue-900">Nación (MinJusticia / PNJE)</td>
                <td className="p-3.5">Orientar la política pública, expedir lineamientos, dar asistencia técnica e inspección.</td>
                <td className="p-3.5 text-rose-800 font-medium">No impone soluciones a casos ni reemplaza al municipio.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-purple-900">Departamentos (Gobernaciones)</td>
                <td className="p-3.5">Promover, articular regionalmente y brindar asistencia técnica y financiera a municipios de menor categoría.</td>
                <td className="p-3.5 text-rose-800 font-medium">No suprime la autonomía de las alcaldías municipales.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-emerald-900">Municipios y Distritos (Alcaldías)</td>
                <td className="p-3.5">Crear formalmente el PLJE, designar coordinador, adscribir presupuesto en el PISCC, habilitar PACE y custodiar actas.</td>
                <td className="p-3.5 text-rose-800 font-medium">No limita el programa a expedir un decreto de papel sin operación.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-amber-900">Coordinador del PLJE</td>
                <td className="p-3.5">Administrar el censo de conciliadores, turnos en PACE, archivo seguro y reporte al Ministerio.</td>
                <td className="p-3.5 text-rose-800 font-medium">No le dice al conciliador cómo resolver ni qué acordar en una audiencia.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
