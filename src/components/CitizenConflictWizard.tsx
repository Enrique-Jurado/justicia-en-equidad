import React, { useState } from 'react';
import { HelpCircle, CheckCircle, AlertTriangle, ArrowRight, RotateCcw, MapPin, PhoneCall, ShieldAlert, Sparkles, Building2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const CitizenConflictWizard: React.FC = () => {
  const { setActiveTab } = useTheme();
  const [conflictType, setConflictType] = useState<string>('');
  const [canTalk, setCanTalk] = useState<string>('');
  const [urgencyRisk, setUrgencyRisk] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleReset = () => {
    setConflictType('');
    setCanTalk('');
    setUrgencyRisk('');
    setSubmitted(false);
  };

  // Determine outcome
  // 1. REGLA PRIORITARIA: Resultado ROJO si la respuesta a la Pregunta 3 es 'si', independientemente de las demás respuestas
  const isEmergency = urgencyRisk === 'si';

  // 2. Resultado AMARILLO: Si en Pregunta 1 se selecciona agresión/violencia o posible delito, y en Pregunta 3 se responde 'no'
  const isNotConciliable =
    !isEmergency &&
    urgencyRisk === 'no' &&
    (conflictType === 'violencia_agresion' || conflictType === 'delito_orientacion');

  // 3. Resultado VERDE: Materia típicamente conciliable, existe disposición al diálogo, y no existe riesgo actual (Pregunta 3 = 'no')
  const isDirectlyConciliable =
    !isEmergency &&
    !isNotConciliable &&
    (conflictType === 'vecinos' || conflictType === 'deudas' || conflictType === 'arriendo' || conflictType === 'compromisos') &&
    canTalk === 'si' &&
    urgencyRisk === 'no';

  // 4. Resultado AZUL: Materia potencialmente conciliable, comunicación difícil o inexistente, y no existe riesgo actual (Pregunta 3 = 'no')
  const requiresIndividualAssessment =
    !isEmergency &&
    !isNotConciliable &&
    (conflictType === 'vecinos' || conflictType === 'deudas' || conflictType === 'arriendo' || conflictType === 'compromisos') &&
    (canTalk === 'duda' || canTalk === 'no') &&
    urgencyRisk === 'no';

  return (
    <div id="orientador-ciudadano-wizard" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-4xl mx-auto my-8 font-sans">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#004899] flex items-center justify-center font-bold">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-[#004899]">Orientador Ciudadano</span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">¿La Conciliación en Equidad puede ayudarme en mi situación?</h3>
        </div>
      </div>

      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        Responda 3 sencillas preguntas para orientar su camino. Esta herramienta pedagógica no emite un fallo legal automático, sino que le indica a qué canal o Punto de Atención acudir.
      </p>

      {!submitted ? (
        <div className="space-y-6">
          {/* Pregunta 1 */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80">
            <label className="block text-sm sm:text-base font-semibold text-slate-900 mb-3">
              1. ¿Sobre qué tema o situación es la diferencia o desacuerdo?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: 'vecinos', label: 'Convivencia entre vecinos (ruidos, humedades, linderos)' },
                { id: 'deudas', label: 'Dinero, deudas o compromisos de pago entre personas' },
                { id: 'arriendo', label: 'Arrendamientos, contratos o uso de bienes' },
                { id: 'compromisos', label: 'Acuerdos familiares de mutuo acuerdo o préstamos' },
                { id: 'violencia_agresion', label: 'Existe o existió una situación de agresión, amenaza o violencia entre las personas involucradas.' },
                { id: 'delito_orientacion', label: 'Creo que puede existir un delito o necesito orientación de una autoridad.' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setConflictType(opt.id)}
                  className={`p-3 rounded-lg text-left text-xs sm:text-sm transition-all border ${
                    conflictType === opt.id
                      ? 'bg-[#004899] text-white border-[#004899] font-medium shadow-xs'
                      : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Pregunta 2 */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80">
            <label className="block text-sm sm:text-base font-semibold text-slate-900 mb-3">
              2. ¿Existe la posibilidad de que ambas personas conversen con respeto acompañadas de un tercero neutral?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'si', label: 'Sí, queremos dialogar' },
                { id: 'duda', label: 'No estoy seguro / Está difícil' },
                { id: 'no', label: 'No, no hay comunicación' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setCanTalk(opt.id)}
                  className={`p-3 rounded-lg text-center text-xs sm:text-sm transition-all border ${
                    canTalk === opt.id
                      ? 'bg-[#004899] text-white border-[#004899] font-medium shadow-xs'
                      : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Pregunta 3 */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80">
            <label className="block text-sm sm:text-base font-semibold text-slate-900 mb-3">
              3. ¿Existe actualmente un riesgo para la vida, la integridad o la seguridad de alguna persona que requiera atención inmediata?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: 'no', label: 'No.' },
                { id: 'si', label: 'Sí.' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setUrgencyRisk(opt.id)}
                  className={`p-3.5 rounded-lg text-center text-sm font-semibold transition-all border ${
                    urgencyRisk === opt.id
                      ? 'bg-[#004899] text-white border-[#004899] shadow-xs'
                      : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              disabled={!conflictType || !canTalk || !urgencyRisk}
              onClick={() => setSubmitted(true)}
              className="px-6 py-3 rounded-xl bg-[#004899] hover:bg-[#003875] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold text-sm sm:text-base flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Ver recomendación orientadora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Vista de Resultados */
        <div className="space-y-6">
          {/* RESULTADO ROJO: Atención Inmediata por Riesgo */}
          {isEmergency ? (
            <div className="p-6 rounded-xl bg-rose-50 border border-rose-300 text-rose-950">
              <div className="flex items-center gap-3 mb-3">
                <ShieldAlert className="w-7 h-7 text-rose-600 shrink-0" />
                <h4 className="text-xl font-bold text-rose-900">Existe una posible situación de riesgo que requiere atención inmediata</h4>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Si existe riesgo para la vida, integridad o seguridad de alguna persona, <strong>no debe esperar una audiencia de conciliación</strong>. Acuda inmediatamente a las autoridades competentes para recibir protección y atención especializada.
              </p>
              <div className="bg-white p-4 sm:p-5 rounded-lg border border-rose-200 text-xs sm:text-sm space-y-2.5">
                <p className="font-semibold text-rose-900 flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-rose-600" /> Rutas de atención inmediata y protección:
                </p>
                <ul className="list-disc pl-5 text-slate-700 space-y-1.5 leading-relaxed">
                  <li><strong>Línea 123:</strong> Emergencias y atención inmediata por riesgo para la vida o la seguridad.</li>
                  <li><strong>Línea 155:</strong> Orientación a mujeres víctimas de violencias basadas en género.</li>
                  <li><strong>Línea 141 (ICBF):</strong> Protección de niños, niñas y adolescentes.</li>
                  <li><strong>Comisaría de Familia:</strong> Medidas de protección en casos de violencia intrafamiliar y violencia en el contexto familiar.</li>
                  <li><strong>Fiscalía General de la Nación:</strong> Denuncias e investigación de posibles delitos.</li>
                </ul>
              </div>
              <div className="mt-4 p-3.5 rounded-lg bg-rose-100/80 border border-rose-200 text-xs sm:text-sm text-rose-950 leading-relaxed">
                <strong>Importante:</strong> Esta orientación es únicamente pedagógica y no reemplaza la valoración ni las medidas que puedan adoptar las autoridades competentes.
              </div>
            </div>
          ) : isNotConciliable ? (
            /* RESULTADO AMARILLO: Requiere otra ruta institucional */
            <div className="p-6 rounded-xl bg-amber-50 border border-amber-300 text-amber-950">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-7 h-7 text-amber-600 shrink-0" />
                <h4 className="text-xl font-bold text-amber-900">La situación consultada parece requerir una ruta diferente a la Conciliación en Equidad</h4>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Con base en las respuestas suministradas, la situación consultada podría requerir la intervención de autoridades o mecanismos especializados.
              </p>
              <div className="bg-white p-4 sm:p-5 rounded-lg border border-amber-200 text-xs sm:text-sm space-y-2.5">
                <p className="font-semibold text-amber-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-600" /> Ruta recomendada
                </p>
                <p className="text-slate-700 leading-relaxed mb-2">
                  Acuda a la entidad competente según la naturaleza de la situación:
                </p>
                <ul className="list-disc pl-5 text-slate-700 space-y-1.5 leading-relaxed">
                  <li><strong>Fiscalía General de la Nación:</strong> si considera que ocurrió un delito o requiere presentar una denuncia.</li>
                  <li><strong>Comisaría de Familia:</strong> si existe violencia en el contexto familiar o necesidad de medidas de protección.</li>
                  <li><strong>ICBF:</strong> cuando estén involucrados niños, niñas o adolescentes cuyos derechos puedan estar en riesgo.</li>
                  <li><strong>Casa de Justicia o Personería Municipal:</strong> para recibir orientación sobre la ruta institucional más adecuada y los servicios disponibles en su municipio.</li>
                </ul>
              </div>
              <div className="mt-4 p-3.5 rounded-lg bg-amber-100/80 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed">
                <strong>Importante:</strong> Esta orientación es únicamente pedagógica y no reemplaza la valoración ni las medidas que puedan adoptar las autoridades competentes.
              </div>
            </div>
          ) : isDirectlyConciliable ? (
            /* RESULTADO VERDE: Potencialmente conciliable */
            <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-7 h-7 text-emerald-600 shrink-0" />
                <h4 className="text-xl font-bold text-emerald-900">La Conciliación en Equidad puede ser una alternativa para su caso</h4>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Con base en las respuestas suministradas, el conflicto descrito podría ser susceptible de ser atendido mediante Conciliación en Equidad.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="bg-white p-3.5 rounded-lg border border-emerald-200 text-xs sm:text-sm space-y-2">
                  <span className="font-bold text-emerald-800 block mb-1">✓ Totalmente Gratuito</span>
                  <p className="text-slate-700 leading-relaxed">
                    El conciliador en equidad no cobra honorarios ni recibe pagos por el servicio.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    En algunos casos pueden existir gastos operativos necesarios para el trámite, como envíos postales o copias documentales.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Estos valores no se pagan al conciliador.
                  </p>
                </div>
                <div className="bg-white p-3.5 rounded-lg border border-emerald-200 text-xs sm:text-sm">
                  <span className="font-bold text-emerald-800 block mb-1">✓ Pleno Valor Legal</span>
                  El acuerdo final presta mérito ejecutivo y hace tránsito a cosa juzgada.
                </div>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => setActiveTab('ruta-ciudadana')}
                  className="px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
                >
                  <span>Iniciar Ruta Ciudadana paso a paso</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('pace')}
                  className="px-4 py-2.5 rounded-lg bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-100 font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Ubicar Punto de Atención (PACE)</span>
                </button>
              </div>
            </div>
          ) : (
            /* RESULTADO AZUL: Requiere valoración individual */
            <div className="p-6 rounded-xl bg-blue-50 border border-blue-300 text-blue-950">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-7 h-7 text-[#004899] shrink-0" />
                <h4 className="text-xl font-bold text-blue-900">Su caso requiere valoración individual en un Punto de Atención</h4>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Con base en las respuestas suministradas, el caso podría requerir una valoración individual por parte de un conciliador en equidad o de un Punto de Atención para determinar la ruta más adecuada.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => setActiveTab('pace')}
                  className="px-5 py-2.5 rounded-lg bg-[#004899] hover:bg-[#003875] text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Consultar puntos de atención cercanos</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('ruta-ciudadana')}
                  className="px-4 py-2.5 rounded-lg bg-white border border-blue-300 text-[#004899] hover:bg-blue-100 font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
                >
                  <span>Ver qué información preparar</span>
                </button>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center pt-2 border-t border-slate-200">
            <span className="text-xs text-slate-500">Resultado orientador preliminar</span>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-[#004899] hover:text-[#003875] font-semibold flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Realizar otra consulta</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
