import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { LayeredContent } from '../components/LayeredContent';
import heroImage from '../assets/images/hero_conciliacion_dialogo_1787178740778.jpg';
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  Scale,
  ShieldCheck,
  HeartHandshake,
  Users,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  FileText,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ConozcaView: React.FC = () => {
  const { setActiveTab } = useTheme();
  const [activePrinciple, setActivePrinciple] = useState<number | null>(0);

  const principles = [
    {
      name: 'Autocomposición',
      desc: 'Las propias personas involucradas son dueñas de la decisión y construyen la solución. El conciliador no decide por ellas.',
      practical: 'Si Pedro y María tienen una diferencia, el conciliador no dicta quién gana: ayuda a que ellos mismos fijen un acuerdo que puedan cumplir.'
    },
    {
      name: 'Acceso a la justicia',
      desc: 'Garantiza que cualquier persona pueda resolver sus controversias sin barreras geográficas, económicas o de conectividad.',
      practical: 'La atención llega a barrios y veredas rurales a través de puntos PACE fijos e itinerantes, sin cobrar honorarios.'
    },
    {
      name: 'Gratuidad',
      desc: 'El servicio de conciliación, la audiencia y la expedición del acta son 100% gratuitos.',
      practical: 'El conciliador no puede pedir ni recibir propinas, tarifas ni dinero para gastos en sus manos.'
    },
    {
      name: 'Confidencialidad',
      desc: 'Toda la información, ofertas y documentos compartidos en la audiencia gozan de reserva legal.',
      practical: 'Lo que se hable en la audiencia no puede ser ventilado en la comunidad ni usado como prueba en un juicio.'
    },
    {
      name: 'Informalidad',
      desc: 'El trámite no exige términos jurídicos complejos ni las formalidades rígidas de un juzgado.',
      practical: 'Las personas pueden explicar lo ocurrido con sus propias palabras cotidianas y ser escuchadas con dignidad.'
    },
    {
      name: 'Imparcialidad y Neutralidad',
      desc: 'El conciliador ofrece un trato igualitario a ambas partes y no puede intervenir si tiene un interés personal.',
      practical: 'Si el conciliador es familiar de una parte o tiene amistad íntima, debe declararse impedido de inmediato.'
    },
    {
      name: 'Seguridad Jurídica (Mérito Ejecutivo y Cosa Juzgada)',
      desc: 'El acuerdo firmado es definitivo y de obligatorio cumplimiento ante cualquier autoridad.',
      practical: 'Si una parte no cumple la fecha de pago pactada, la otra puede exigir su cobro ante un juez sin empezar un nuevo juicio.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans">
      {/* Header Banner with Photography */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden text-white shadow-md grid grid-cols-1 lg:grid-cols-12 border border-blue-800">
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-4 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold w-fit">
            <BookOpen className="w-4 h-4" />
            <span>Fundamentos de la Justicia Comunitaria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Conozca la Conciliación en Equidad
          </h2>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
            Una forma dialogada, cercana y comunitaria para que las personas gestionen sus propias diferencias con el apoyo de un tercero neutral reconocido por su comunidad.
          </p>
          <div className="pt-2 flex items-center gap-3 flex-wrap text-xs">
            <button
              onClick={() => setActiveTab('ruta-ciudadana')}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Ver Ruta Ciudadana</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-blue-200/80">Ley 2220 de 2022 • Decreto 42 de 2026</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full">
          <img
            src={heroImage}
            alt="Diálogo comunitario y conciliación en equidad"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[10px] text-white font-medium px-2.5 py-1 rounded-md border border-white/10">
            Cultura de Paz y Diálogo
          </div>
        </div>
      </div>

      {/* Layered Content Component: ¿Qué es y por qué existe? */}
      <LayeredContent
        title="1. Definición y Propósito Fundamental"
        subtitle="Enfoque en autocomposición y justicia comunitaria"
        legalArticles="Ley 2220/2022 art. 3, 5; Decreto 42/2026"
        defaultExpanded={true}
        layer1Essential={
          <div className="space-y-4">
            <p className="text-base text-slate-800 leading-relaxed font-medium">
              La <strong>Conciliación en Equidad</strong> es un mecanismo de resolución pacífica de conflictos donde dos o más ciudadanos conversan y acuerdan la solución a sus problemas con la ayuda de un <strong>conciliador o conciliadora en equidad</strong>.
            </p>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-sm font-semibold flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
              <span>El conciliador ayuda a construir el diálogo. Las partes construyen y aceptan la solución.</span>
            </div>
          </div>
        }
        layer2Expanded={
          <div className="space-y-3 text-xs sm:text-sm text-slate-700">
            <p>
              Se denomina <strong>"en equidad"</strong> porque las fórmulas de arreglo no se limitan a la aplicación estricta de normas procesales abstractas, sino que tienen en cuenta el sentido de justicia de la comunidad, las relaciones vecinales y las realidades concretas de cada familia o territorio.
            </p>
            <p>
              Esto <strong>no significa</strong> que el conciliador pueda actuar al margen de la Constitución ni vulnerar derechos fundamentales. La equidad armoniza la convivencia comunitaria dentro de los límites de la ley.
            </p>
          </div>
        }
        layer3Technical={
          <div className="space-y-3 text-xs sm:text-sm text-slate-700">
            <p>
              <strong>Investidura de administración de justicia:</strong> Conforme al artículo 116 de la Constitución Política y los artículos 5 y 28 de la Ley 2220 de 2022, el conciliador en equidad es investido transitoriamente de la función pública de administrar justicia durante la actuación conciliatoria.
            </p>
            <p>
              <strong>Efectos procesales:</strong> El acta de conciliación válidamente suscrita produce plenos efectos de cosa juzgada e idéntico mérito ejecutivo a una obligación judicialmente exigible, sin necesidad de homologación o elevación a escritura pública (salvo regla especial expresa).
            </p>
          </div>
        }
        layer4Legal={
          <div className="space-y-2 text-xs text-slate-700">
            <div className="font-bold text-slate-900">Fuentes normativas de soporte:</div>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Constitución Política de Colombia:</strong> Artículo 116 (administración transitoria de justicia por particulares).</li>
              <li><strong>Ley 2220 de 2022:</strong> Artículos 3 (definición y autocomposición), 4 (principios), 5 (conciliación en equidad), 64 (actas) y 65 (constancias).</li>
              <li><strong>Decreto 42 de 2026:</strong> Artículos 2.2.4.1.1 y ss. (sustitutivos del Decreto 1069 de 2015 sobre PNJE, PLJE y PACE).</li>
            </ul>
          </div>
        }
      />

      {/* COMPONENTE CLAVE: EL CONCILIADOR SÍ HACE / NO HACE (Dos Columnas Claras) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-700">Claridad de Roles</span>
          <h3 className="text-2xl font-black text-slate-900">¿Qué hace y qué NO hace el Conciliador en Equidad?</h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Diferenciar con precisión su labor evita falsas expectativas y protege la confianza comunitaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Columna SÍ HACE */}
          <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-6 space-y-3.5">
            <div className="flex items-center gap-2 text-emerald-900 font-black text-base border-b border-emerald-200 pb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>El Conciliador en Equidad SÍ HACE:</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                <span><strong>Escucha activamente</strong> a cada persona y promueve un trato igualitario y respetuoso.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                <span><strong>Explica con claridad</strong> la finalidad, límites y efectos vinculantes del trámite.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                <span><strong>Facilita la conversación</strong> y ayuda a que las partes identifiquen los puntos reales de su desacuerdo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                <span><strong>Propone fórmulas de arreglo</strong> útiles y realistas cuando las partes se encuentren bloqueadas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                <span><strong>Redacta el Acta oficial</strong> con las obligaciones claras o expide la Constancia correspondiente.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                <span><strong>Guarda estricta confidencialidad</strong> y se declara impedido ante cualquier conflicto de interés.</span>
              </li>
            </ul>
          </div>

          {/* Columna NO HACE */}
          <div className="bg-rose-50/50 border border-rose-200 rounded-2xl p-6 space-y-3.5">
            <div className="flex items-center gap-2 text-rose-900 font-black text-base border-b border-rose-200 pb-3">
              <XCircle className="w-5 h-5 text-rose-600" />
              <span>El Conciliador en Equidad NO HACE:</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-rose-950">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                <span><strong>NO impone una solución</strong> ni declara quién ganó o quién perdió el conflicto.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                <span><strong>NO obliga a firmar</strong> un compromiso a nadie contra su voluntad.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                <span><strong>NO representa ni asesora</strong> como abogado a una de las partes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                <span><strong>NO cobra por el servicio</strong> ni puede recibir dinero en efectivo para expensas o citas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                <span><strong>NO atiende casos con impedimento</strong> familiar, afectivo o de interés económico.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                <span><strong>NO utiliza la información confidencial</strong> para beneficio propio ni la publica en redes sociales.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRINCIPIOS EXPLICADOS EN LENGUAJE CLARO (Acordeón interactivo) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="max-w-2xl mb-6">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-700">Marco de Principios</span>
          <h3 className="text-2xl font-black text-slate-900">7 Principios Rectores explicados</h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Cada principio protege a las personas y garantiza que el acuerdo sea justo, seguro y respetuoso.
          </p>
        </div>

        <div className="space-y-3">
          {principles.map((p, idx) => {
            const isOpen = activePrinciple === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 overflow-hidden transition-all bg-slate-50/50"
              >
                <button
                  onClick={() => setActivePrinciple(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-slate-100/70 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-sm sm:text-base text-slate-900">{p.name}</span>
                  </div>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                </button>

                {isOpen && (
                  <div className="p-5 bg-white border-t border-slate-200 text-xs sm:text-sm space-y-2 text-slate-700">
                    <p className="font-medium text-slate-900">{p.desc}</p>
                    <div className="p-3 bg-blue-50/60 rounded-lg border border-blue-200 text-blue-950">
                      <strong>Ejemplo práctico:</strong> {p.practical}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CASO PRÁCTICO CENTRAL DE EJEMPLO */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-900 text-white font-bold text-[10px] uppercase tracking-wider">
            Caso Práctico Orientador
          </span>
          <span className="text-xs text-slate-500">Ejemplo pedagógico</span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">Un desacuerdo de convivencia que necesita conversación</h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
          Rosa y Felipe tienen una diferencia por humedades y ruidos en su vivienda compartida. Tras varios intentos fallidos donde terminaban discutiendo, Rosa acude a un Punto de Atención (PACE) en su municipio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-1">1. Solicitud y Citación</strong>
            El conciliador escucha a Rosa, revisa que no haya violencia, y envía una citación cordial a Felipe para dialogar en el PACE.
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-1">2. Audiencia Respetuosa</strong>
            Ambos exponen sus puntos. El conciliador formula preguntas y los ayuda a identificar fechas y costos para arreglar la tubería.
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-1">3. Firma del Acta</strong>
            Acuerdan que Felipe reparará la tubería el día 20 y Rosa asumirá el 50% de materiales. Queda en un Acta con mérito ejecutivo.
          </div>
        </div>

        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950">
          <strong>Aprendizaje clave:</strong> La conciliación no buscó castigar a ninguno, sino construir compromisos claros con fechas y montos específicos que ambos pudieran cumplir.
        </div>
      </section>
    </div>
  );
};
