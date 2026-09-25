import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { CitizenConflictWizard } from '../components/CitizenConflictWizard';
import rutaImage from '../assets/images/ruta_ciudadana_audiencia_1787180269105.jpg';
import {
  Compass,
  CheckCircle2,
  Calendar,
  FileText,
  MessageCircle,
  ShieldCheck,
  AlertTriangle,
  Scale,
  MapPin,
  ArrowRight,
  HelpCircle,
  Download,
  Printer,
  ChevronRight,
  FileDown
} from 'lucide-react';

export const RutaCiudadanaView: React.FC = () => {
  const { setActiveTab } = useTheme();
  const [activeStep, setActiveStep] = useState<number>(1);
  const [checkedPrep, setCheckedPrep] = useState<{ [key: string]: boolean }>({
    id: true,
    relato: true,
    datos: false,
    documentos: false,
    propuestas: false,
  });

  const toggleCheck = (k: string) => {
    setCheckedPrep({ ...checkedPrep, [k]: !checkedPrep[k] });
  };

  const steps = [
    { num: 1, title: '1. Revise su situación', tag: 'Autodiagnóstico' },
    { num: 2, title: '2. Ubique un punto PACE', tag: 'Encuentre atención' },
    { num: 3, title: '3. Presente la solicitud', tag: 'Verbal o escrita' },
    { num: 4, title: '4. Prepárese', tag: 'Lista de verificación' },
    { num: 5, title: '5. La Audiencia', tag: '5 momentos de diálogo' },
    { num: 6, title: '6. Resultados & Acta', tag: 'Efectos legales' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans">
      {/* Header Banner with Photography */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden text-white shadow-md grid grid-cols-1 lg:grid-cols-12 border border-blue-800">
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-3 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold w-fit">
            <Compass className="w-4 h-4" />
            <span>Guía Ciudadana Paso a Paso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Ruta Ciudadana: "Tengo una situación, ¿qué puedo hacer?"
          </h2>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
            Recorra de manera clara y sencilla los pasos para solicitar una Conciliación en Equidad, qué preparar para la audiencia y qué ocurre después de firmar el acuerdo.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs text-blue-200">
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Trámite Gratuito</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">No requiere abogado para solicitar la conciliación</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Tiene efectos jurídicos (Mérito ejecutivo y cosa juzgada)</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full">
          <img
            src={rutaImage}
            alt="Orientación ciudadana y audiencia de conciliación en equidad"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[10px] text-white font-medium px-2.5 py-1 rounded-md border border-white/10">
            Atención Ciudadana en Puntos PACE
          </div>
        </div>
      </div>

      {/* Interactive Step Navigator Bar */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {steps.map((s) => {
            const isSelected = activeStep === s.num;
            return (
              <button
                key={s.num}
                onClick={() => setActiveStep(s.num)}
                className={`p-3 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-blue-900 text-white border-blue-900 shadow-sm font-bold'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div
                  className={`text-[11px] font-semibold tracking-normal mb-0.5 transition-colors ${
                    isSelected ? 'text-blue-200' : 'text-slate-500'
                  }`}
                >
                  {s.tag}
                </div>
                <div className="text-xs sm:text-sm font-bold truncate">{s.title}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP CONTENT CONTAINER */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
        {/* Step 1: Revise su situación */}
        {activeStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs uppercase font-bold text-blue-700 tracking-wider">Paso 1 de 6</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">¿Mi situación se puede conciliar en equidad?</h3>
              <p className="text-sm text-slate-600 mt-1">
                La ley permite conciliar asuntos sobre los cuales las personas tengan capacidad para decidir y no estén prohibidos.
              </p>
            </div>

            <CitizenConflictWizard />

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setActiveStep(2)}
                className="px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2"
              >
                <span>Paso 2: Ubicar Punto de Atención →</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Ubique un punto PACE */}
        {activeStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs uppercase font-bold text-blue-700 tracking-wider">Paso 2 de 6</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">Encuentre un lugar de atención en su territorio</h3>
              <p className="text-sm text-slate-600 mt-1">
                Puede acudir a un <strong>Punto de Atención de Conciliación en Equidad (PACE)</strong>, una <strong>Casa de Justicia</strong> o un <strong>Centro de Convivencia Ciudadana</strong>.
              </p>
            </div>

            <div className="bg-blue-50/70 p-6 rounded-2xl border border-blue-200 space-y-4">
              <h4 className="font-bold text-base text-blue-950 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-700" />
                <span>Consulte el Directorio Territorial Oficial</span>
              </h4>
              <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
                Utilice el mapa interactivo y la vista accesible para encontrar horarios, números telefónicos y condiciones de accesibilidad antes de desplazarse.
              </p>
              <button
                onClick={() => setActiveTab('pace')}
                className="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-colors"
              >
                <span>Abrir mapa y directorio de PACE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1 font-bold">PACE Fijo:</strong>
                Opera en sedes comunales, Casas de Justicia o inmuebles municipales en días y horarios estables.
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1 font-bold">PACE Itinerante:</strong>
                Jornadas móviles que visitan veredas y corregimientos rurales periódicamente.
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={() => setActiveStep(1)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800"
              >
                ← Paso 1: Autodiagnóstico
              </button>
              <button
                onClick={() => setActiveStep(3)}
                className="px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2"
              >
                <span>Paso 3: Presentar la solicitud →</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Presente la solicitud */}
        {activeStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs uppercase font-bold text-blue-700 tracking-wider">Paso 3 de 6</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">¿Cómo presentar la solicitud de conciliación?</h3>
              <p className="text-sm text-slate-600 mt-1">
                La solicitud es sencilla, gratuita y puede hacerse en persona o por canal virtual habilitado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm">
                <h4 className="font-bold text-slate-900 text-base">Información indispensable:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                    <span><strong>Sus datos:</strong> Nombre completo, documento y teléfono/correo de contacto.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                    <span><strong>Datos de la otra parte:</strong> Nombre y dirección, teléfono o correo para citarla.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                    <span><strong>Relato de los hechos:</strong> Explicación clara en sus propias palabras de lo ocurrido.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                    <span><strong>Lo que espera resolver:</strong> Qué acuerdos o compromisos le gustaría proponer.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3 text-xs sm:text-sm text-emerald-950">
                <h4 className="font-bold text-emerald-900 text-base flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Sin formalismos jurídicos</span>
                </h4>
                <p>
                  No se preocupe si no conoce leyes o términos técnicos. El conciliador le ayudará a redactar la solicitud si es verbal.
                </p>
                <div className="p-3 bg-white rounded-lg border border-emerald-200 text-xs">
                  <strong>La Citación:</strong> Una vez radicada, el conciliador envía una invitación cordial a la otra parte indicando fecha, hora y lugar de la audiencia.
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={() => setActiveStep(2)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800"
              >
                ← Paso 2: Puntos PACE
              </button>
              <button
                onClick={() => setActiveStep(4)}
                className="px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2"
              >
                <span>Paso 4: Prepararse para la audiencia →</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Prepárese (Checklist interactivo) */}
        {activeStep === 4 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs uppercase font-bold text-blue-700 tracking-wider">Paso 4 de 6</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">¿Qué debo preparar antes de asistir?</h3>
              <p className="text-sm text-slate-600 mt-1">
                Marque en esta lista interactiva los elementos que ya tiene listos para su día de audiencia.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              {[
                { k: 'id', title: 'Documento de Identidad original', sub: 'Cédula de ciudadanía, extranjería o documento válido de identificación.' },
                { k: 'relato', title: 'Ideas claras sobre lo ocurrido', sub: 'Ordene los hechos cronológicamente sin insultos ni rencores.' },
                { k: 'datos', title: 'Comprobantes sencillos (si existen)', sub: 'Recibos de pago, mensajes de texto, fotos de daños o contratos verbales/escritos.' },
                { k: 'documentos', title: 'Opciones de solución realistas', sub: 'Piense de antemano qué fechas de pago, plazos o arreglos puede cumplir.' },
                { k: 'propuestas', title: 'Disposición sincera para escuchar', sub: 'La conciliación requiere voluntad mutua para construir un acuerdo duradero.' },
              ].map((item) => (
                <div
                  key={item.k}
                  onClick={() => toggleCheck(item.k)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    checkedPrep[item.k]
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100/70'
                  }`}
                >
                  <div className="mt-0.5">
                    {checkedPrep[item.k] ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <div className="w-5 h-5 rounded border border-slate-300 bg-white" />
                    )}
                  </div>
                  <div>
                    <strong className="text-sm block font-bold">{item.title}</strong>
                    <span className="text-xs text-slate-600">{item.sub}</span>
                  </div>
                </div>
              ))}

              <div className="pt-2 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-600 bg-white p-3.5 rounded-xl border border-slate-200">
                <span className="font-semibold text-slate-900">¿Desea llevar esta guía impresa o en su celular?</span>
                <button
                  onClick={() => setActiveTab('recursos')}
                  className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-900 font-bold hover:bg-blue-100 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Ver Guía Práctica de Preparación en Recursos →</span>
                </button>
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={() => setActiveStep(3)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800"
              >
                ← Paso 3: Solicitud
              </button>
              <button
                onClick={() => setActiveStep(5)}
                className="px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2"
              >
                <span>Paso 5: La Audiencia de Conciliación →</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 5: La Audiencia (5 Momentos) */}
        {activeStep === 5 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs uppercase font-bold text-blue-700 tracking-wider">Paso 5 de 6</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">¿Qué ocurre durante la audiencia de conciliación?</h3>
              <p className="text-sm text-slate-600 mt-1">
                La audiencia se realiza en un espacio privado y confidencial, estructurada en 5 momentos claros.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-[58%] space-y-3 text-xs sm:text-sm">
                {[
                  {
                    m: 'Momento 1: Explicación Inicial',
                    desc: 'El conciliador se presenta, aclara que el servicio es gratuito, que no es un juicio, y fija las reglas de respeto y confidencialidad.',
                  },
                  {
                    m: 'Momento 2: Relato de las Partes',
                    desc: 'Cada persona expone su versión sin interrupciones. El conciliador toma notas para identificar las verdaderas causas del desacuerdo.',
                  },
                  {
                    m: 'Momento 3: Delimitación del Conflicto',
                    desc: 'El conciliador resume los puntos donde hay acuerdo y donde existe desacuerdo, aclarando qué asuntos son prioritarios resolver.',
                  },
                  {
                    m: 'Momento 4: Construcción de Fórmulas',
                    desc: 'Las partes proponen alternativas. El conciliador formula preguntas y sugiere opciones realistas basadas en la equidad comunitaria.',
                  },
                  {
                    m: 'Momento 5: Lectura y Firma del Acta',
                    desc: 'Si hay acuerdo, se lee el texto en voz alta para verificar montos, fechas y lugares exactos de cumplimiento antes de estampar las firmas.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.m}</h4>
                      <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full lg:w-[42%] shrink-0 self-start">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xs aspect-[16/9] flex items-center justify-center">
                  <img
                    src="images/contenido/audiencia-conciliacion.jpeg"
                    alt="Audiencia de conciliación en equidad comunitaria"
                    className="w-full h-full object-contain object-center"
                    loading="lazy"
                  />
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 text-center mt-2.5">
                  Audiencia de conciliación: diálogo constructivo orientado por el conciliador en equidad.
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={() => setActiveStep(4)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800"
              >
                ← Paso 4: Preparación
              </button>
              <button
                onClick={() => setActiveStep(6)}
                className="px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2"
              >
                <span>Paso 6: Resultados y Efectos Legales →</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 6: Resultados y Efectos Legales */}
        {activeStep === 6 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs uppercase font-bold text-blue-700 tracking-wider">Paso 6 de 6</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">Los 6 Posibles Resultados y sus Efectos Jurídicos</h3>
              <p className="text-sm text-slate-600 mt-1">
                La audiencia puede terminar de diversas formas. Conozca qué significa cada resultado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <strong className="text-emerald-950 font-bold text-sm block">1. Acuerdo Total</strong>
                <p className="text-emerald-900">
                  Solución a todos los puntos tratados. Se suscribe el <strong>Acta de Conciliación</strong>.
                </p>
                <span className="inline-block px-2 py-0.5 rounded bg-emerald-200 text-emerald-950 font-bold text-[10px]">
                  Mérito ejecutivo + Cosa juzgada
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
                <strong className="text-blue-950 font-bold text-sm block">2. Acuerdo Parcial</strong>
                <p className="text-blue-900">
                  Solución a algunos temas. El acta señala lo acordado y deja constancia de lo pendiente.
                </p>
                <span className="inline-block px-2 py-0.5 rounded bg-blue-200 text-blue-950 font-bold text-[10px]">
                  Válido para lo acordado
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <strong className="text-amber-950 font-bold text-sm block">3. No Acuerdo</strong>
                <p className="text-amber-900">
                  Las partes dialogaron pero no hallaron fórmula aceptable. Se expide <strong>Constancia de no acuerdo</strong>.
                </p>
                <span className="inline-block px-2 py-0.5 rounded bg-amber-200 text-amber-950 font-bold text-[10px]">
                  Abre otras rutas judiciales
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100 border border-slate-300 space-y-2">
                <strong className="text-slate-900 font-bold text-sm block">4. Inasistencia</strong>
                <p className="text-slate-700">
                  Una o ambas partes no asistieron. Se expide <strong>Constancia de inasistencia</strong> con justificación si la hubo.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                <strong className="text-rose-950 font-bold text-sm block">5. Asunto No Conciliable</strong>
                <p className="text-rose-900">
                  La materia está prohibida por ley o requiere medidas urgentes. Se expide <strong>Constancia y remisión</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 space-y-2">
                <strong className="text-purple-950 font-bold text-sm block">6. Falta de Competencia</strong>
                <p className="text-purple-900">
                  El caso corresponde a otra entidad o jurisdicción especial. Se entrega orientación clara de derivación.
                </p>
              </div>
            </div>

            {/* What to do on non-compliance */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-700" />
                <span>¿Qué hacer si una persona no cumple lo pactado en el Acta?</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                El Acta de Conciliación presta <strong>mérito ejecutivo</strong>. Si vence la fecha y la obligación no se cumple, la parte afectada puede acudir ante un juez de la República con su copia del acta para solicitar que se ordene el cumplimiento judicial inmediato sin necesidad de un juicio ordinario previo.
              </p>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={() => setActiveStep(5)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800"
              >
                ← Paso 5: La Audiencia
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs flex items-center gap-2"
              >
                <span>Consultar Preguntas Frecuentes →</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
