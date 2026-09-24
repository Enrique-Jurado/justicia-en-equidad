import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import conciliadoresImage from '../assets/images/conciliadores_san_javier_clean_1787610547699.jpg';
import {
  Scale,
  Users,
  GraduationCap,
  Home,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  Clock,
  Compass,
  Heart,
  ChevronRight,
  BookOpen,
  Calendar
} from 'lucide-react';

export const ConciliadoresView: React.FC = () => {
  const { setActiveTab } = useTheme();
  const [selectedState, setSelectedState] = useState<'aspirante' | 'nombrado' | 'activo' | 'inactivo'>('activo');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans">
      {/* Header Banner with Photography */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden text-white shadow-md grid grid-cols-1 lg:grid-cols-12 border border-blue-800">
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-3 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold w-fit">
            <Scale className="w-4 h-4" />
            <span>Liderazgo Comunitario al Servicio del Diálogo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Soy Conciliador o Conciliadora en Equidad
          </h2>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
            Consulte las condiciones de ejercicio, la inscripción obligatoria en el PLJE, deberes éticos, gestión documental y los programas de estímulos en vivienda y educación.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs text-blue-200">
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Inscripción Bianual</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Estímulos de Vivienda y Educación</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Custodia de Actas</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full">
          <img
            src={conciliadoresImage}
            alt="Red Comunitaria de Conciliadores en Equidad en Colombia"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[10px] text-white font-medium px-2.5 py-1 rounded-md border border-white/10">
            Operadores Comunitarios de Justicia
          </div>
        </div>
      </div>

      {/* STATE SELECTOR ("Segmentación por estado") */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block mb-3">
          Seleccione su situación actual para ver orientación especializada:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { id: 'aspirante', title: '1. Quiero ser Conciliador(a)', sub: 'Requisitos y postulación comunitaria' },
            { id: 'nombrado', title: '2. Ya fui Nombrado(a)', sub: 'Inscripción obligatoria en el PLJE' },
            { id: 'activo', title: '3. Ya estoy Inscrito(a) y Activo(a)', sub: 'Deberes, actas y ética' },
            { id: 'inactivo', title: '4. Quiero Reactivarme', sub: 'Actualización y reincorporación' },
          ].map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedState(s.id as any)}
              className={`p-4 rounded-xl text-left transition-all border ${
                selectedState === s.id
                  ? 'bg-blue-900 text-white border-blue-900 shadow-sm font-bold'
                  : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className="text-xs sm:text-sm font-bold">{s.title}</div>
              <div className={`text-[11px] mt-1 ${selectedState === s.id ? 'text-blue-200' : 'text-slate-500'}`}>
                {s.sub}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* TAB CONTENT FOR EACH STATE */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
        {selectedState === 'aspirante' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Ruta para Aspirantes a Conciliadores en Equidad</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Para ser conciliador en equidad no se requiere ser abogado. Es un reconocimiento social basado en el arraigo comunitario, la capacidad de escucha y la vocación de servicio voluntario.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <strong className="text-blue-900 block font-bold text-base">Requisitos de Ley:</strong>
                <ul className="space-y-1.5 text-slate-700 list-disc pl-5">
                  <li>Ser ciudadano colombiano en ejercicio.</li>
                  <li>Estar en pleno goce de derechos civiles.</li>
                  <li>Residir mínimo dos (2) años continuos en la comunidad.</li>
                  <li>Gozar de reconocimiento comunitario por su liderazgo cívico.</li>
                  <li>No encontrarse en causal de inhabilidad o conflicto de interés.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 space-y-2 text-blue-950">
                <strong className="text-blue-900 block font-bold text-base">Proceso en 4 Pasos:</strong>
                <ol className="space-y-1.5 text-xs list-decimal pl-5">
                  <li><strong>Postulación:</strong> Presentado por organizaciones cívicas (JAC, resguardos, etc.).</li>
                  <li><strong>Formación:</strong> Aprobar el programa avalado por el MinJusticia.</li>
                  <li><strong>Nombramiento:</strong> Expedido por el Tribunal Superior o Juez del Distrito.</li>
                  <li><strong>Inscripción:</strong> Formalizarse en el PLJE de su municipio.</li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {selectedState === 'nombrado' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Inscripción en el PLJE (Requisito Obligatorio)</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Haber sido nombrado por la autoridad judicial es el reconocimiento formal, pero la <strong>Ley 2220 de 2022 y el Decreto 42 de 2026</strong> exigen estar inscrito en el PLJE para poder atender en los PACE y ejercer válidamente.
            </p>

            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 text-xs sm:text-sm text-amber-950">
              <strong className="text-amber-900 block font-bold">Vigencia de la inscripción: 2 años</strong>
              <p>
                La inscripción tiene una duración de dos (2) años renovables. Durante este tiempo el conciliador tiene asignación en los PACE, respaldo institucional de archivo y acceso a los estímulos.
              </p>
              <div className="p-3 bg-white rounded-lg border border-amber-300 text-xs">
                <strong>¿Qué pasa si mi municipio aún no crea el PLJE?</strong> El Decreto 42 de 2026 prevé un periodo de transición hasta el 21 de enero de 2027 para que las alcaldías creen su programa. Durante este tiempo los conciliadores ya nombrados pueden seguir operando.
              </div>
            </div>
          </div>
        )}

        {selectedState === 'activo' && (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Ejercicio Activo, Deberes y Custodia Documental</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Guía operativa para el día a día en las audiencias y la entrega de actas.
              </p>
            </div>

            {/* 5 Reglas Éticas */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-700" />
                <span>5 Reglas de Oro para Proteger la Confianza Comunitaria</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                  <strong className="text-blue-900 block mb-1">1. Actúe con Imparcialidad</strong>
                  Trate a ambas partes por igual. No favorezca amigos ni prejuzgue el resultado.
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                  <strong className="text-blue-900 block mb-1">2. Proteja la Confidencialidad</strong>
                  No comente los casos con vecinos ni en redes sociales.
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                  <strong className="text-blue-900 block mb-1">3. Gratuidad Estricta</strong>
                  Nunca pida ni reciba dinero, regalos o pagos de expensas en efectivo.
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                  <strong className="text-blue-900 block mb-1">4. Declare Impedimentos</strong>
                  Apártese si tiene parentesco, amistad íntima o interés económico en el caso.
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                  <strong className="text-blue-900 block mb-1">5. Entregue las Actas al PLJE</strong>
                  Radique oportunamente las actas y constancias en el archivo institucional del PLJE.
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedState === 'inactivo' && (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-[58%] space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Ruta de Reactivación para Conciliadores</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Si fue nombrado en años anteriores y estuvo inactivo, puede reincorporarse al servicio comunitario en sencillos pasos.
              </p>

              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal pl-5">
                <li>Acérquese a la Secretaría de Gobierno o Coordinación del PLJE de su municipio.</li>
                <li>Presente copia de su acta o resolución judicial de nombramiento.</li>
                <li>Actualice sus datos de residencia (mínimo 2 años continuos en el territorio) y contacto.</li>
                <li>Participe en los talleres de actualización normativa del Decreto 42 de 2026.</li>
                <li>Obtenga su constancia de inscripción activa por 2 años.</li>
              </ol>
            </div>

            <div className="w-full lg:w-[42%] shrink-0 self-start">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xs aspect-[16/9] flex items-center justify-center">
                <img
                  src="/images/contenido/reactivacion-conciliadores.jpeg"
                  alt="Ruta de reactivación para conciliadores y conciliadoras en equidad"
                  className="w-full h-full object-contain object-center"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 text-center mt-2.5">
                Ruta de reactivación: reincorporación al servicio comunitario de justicia en equidad.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SECCIÓN DE ESTÍMULOS Y APOYOS (Vivienda y Educación) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-100 pb-4 mb-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-blue-700">Reconocimiento Institucional</span>
            <h3 className="text-2xl font-black text-slate-900">Estímulos en Vivienda y Educación Superior</h3>
          </div>
          <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            Sujeto a 1 año de permanencia y actividad
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs sm:text-sm">
          {/* Housing */}
          <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
            <div className="flex items-center gap-2.5 text-blue-900 font-black text-base">
              <Home className="w-5 h-5 text-blue-700" />
              <span>Acceso Prioritario al Sector Vivienda</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Los conciliadores en equidad que acrediten al menos <strong>un (1) año de servicio activo e inscripción en el PLJE</strong> pueden acceder con prioridad a programas de la oferta institucional de vivienda de interés social.
            </p>
            <div className="p-3 bg-white rounded-lg border border-blue-200 text-xs text-slate-600">
              <strong>Aclaración importante:</strong> Otorga prelación en la convocatoria, pero el solicitante debe postularse y cumplir los requisitos del programa de vivienda.
            </div>
          </div>

          {/* Education */}
          <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
            <div className="flex items-center gap-2.5 text-emerald-900 font-black text-base">
              <GraduationCap className="w-5 h-5 text-emerald-700" />
              <span>Beneficios Educativos para Conciliador y Familia</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Acceso prioritario a beneficios de matrícula o descuentos en convenios con instituciones de educación superior y formación técnica, extensivo a los miembros de su <strong>núcleo familiar</strong>.
            </p>
          </div>

          {/* Día Nacional */}
          <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-3">
            <div className="flex items-center gap-2.5 text-purple-900 font-black text-base">
              <Calendar className="w-5 h-5 text-purple-700" />
              <span>Día Nacional de la Conciliación en Equidad</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Se conmemora el último sábado de noviembre para exaltar la labor comunitaria de los conciliadores y conciliadoras en equidad en todo el país.
            </p>
          </div>
        </div>

        {/* Nota Institucional Transversal */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <strong className="text-slate-900 font-bold">Nota institucional:</strong> La inscripción activa en el PLJE no garantiza la asignación automática de beneficios. La prelación opera dentro de la oferta institucional vigente y de acuerdo con los requisitos definidos por cada programa.
        </div>
      </section>
    </div>
  );
};
