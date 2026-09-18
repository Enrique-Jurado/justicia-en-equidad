import { FaqItem } from '../types';

export const FAQS_DATA: FaqItem[] = [
  // Categoría 1. Conceptos básicos
  {
    id: 1,
    question: '¿Qué es la Conciliación en Equidad?',
    shortAnswer: 'Es un mecanismo de diálogo comunitario donde dos o más personas resuelven voluntariamente sus diferencias con el apoyo de un conciliador en equidad.',
    fullAnswer: 'Es un mecanismo alternativo y gratuito de resolución pacífica de conflictos. En él, un tercero neutral reconocido por la comunidad ayuda a las partes a entender su diferencia y construir una solución acordada, sin que nadie imponga un fallo.',
    category: 'Conceptos básicos',
    audience: ['todos', 'ciudadania'],
    tags: ['que es', 'concepto', 'definicion', 'dialogo', 'justicia comunitaria'],
    normativeRef: 'Ley 2220 de 2022, art. 5'
  },
  {
    id: 2,
    question: '¿Por qué se llama "en equidad"?',
    shortAnswer: 'Porque considera el contexto social, los valores comunitarios y las realidades concretas de las personas dentro del marco de la ley.',
    fullAnswer: 'A diferencia de la conciliación en derecho que aplica estrictas fórmulas procesales jurídicas, la equidad permite valorar las costumbres locales, las relaciones vecinales y el sentido de justicia propio de la comunidad, respetando siempre los derechos fundamentales.',
    category: 'Conceptos básicos',
    audience: ['todos', 'ciudadania'],
    tags: ['equidad', 'comunidad', 'justicia comunitaria', 'diferencia'],
    normativeRef: 'Ley 2220 de 2022, art. 5; Decreto 42 de 2026'
  },
  {
    id: 3,
    question: '¿La Conciliación en Equidad es un juicio o proceso judicial?',
    shortAnswer: 'No. No es un juicio. Las partes construyen la solución y el conciliador no dicta sentencias ni condenas.',
    fullAnswer: 'La conciliación es un espacio de diálogo horizontal. No hay demandante ni demandado en sentido procesal estricto, sino partes que buscan voluntariamente un arreglo mutuamente aceptable.',
    category: 'Conceptos básicos',
    audience: ['todos', 'ciudadania'],
    tags: ['juicio', 'tribunal', 'demanda', 'sentencia'],
    normativeRef: 'Ley 2220 de 2022, art. 3'
  },
  {
    id: 4,
    question: '¿El conciliador en equidad es un juez?',
    shortAnswer: 'No es un juez de la República. Es un particular investido transitoriamente de la función pública de administrar justicia.',
    fullAnswer: 'El conciliador es un ciudadano o ciudadana de la comunidad, capacitado y nombrado formalmente por la autoridad judicial competente, que actúa como facilitador neutral durante la audiencia.',
    category: 'Conceptos básicos',
    audience: ['todos', 'ciudadania'],
    tags: ['juez', 'autoridad', 'quien es', 'investidura'],
    normativeRef: 'Constitución Política art. 116; Ley 2220 de 2022, art. 28'
  },
  {
    id: 5,
    question: '¿Quién decide cómo se soluciona el conflicto?',
    shortAnswer: 'Las personas involucradas. El conciliador solo facilita la conversación y puede sugerir opciones.',
    fullAnswer: 'El poder de decisión radica exclusivamente en las partes. Nadie puede obligarlas a firmar un acuerdo con el que no estén conformes.',
    category: 'Conceptos básicos',
    audience: ['ciudadania'],
    tags: ['quien decide', 'autocomposicion', 'acuerdo', 'obligacion'],
    normativeRef: 'Ley 2220 de 2022, art. 3'
  },
  {
    id: 6,
    question: '¿Qué diferencia existe entre conciliación y mediación comunitaria?',
    shortAnswer: 'Ambas promueven el diálogo, pero el acta de conciliación en equidad presta mérito ejecutivo y hace tránsito a cosa juzgada.',
    fullAnswer: 'Mientras que los acuerdos de mediación son compromisos morales o comunitarios que no tienen fuerza ejecutiva directa ante jueces, el acta formal suscrita por un conciliador en equidad debidamente inscrito en un PLJE tiene plenos efectos legales.',
    category: 'Conceptos básicos',
    audience: ['todos', 'aliado'],
    tags: ['mediacion', 'diferencia', 'merito ejecutivo', 'legalidad'],
    normativeRef: 'Ley 2220 de 2022, arts. 5 y 64'
  },
  {
    id: 7,
    question: '¿Qué diferencia existe entre Conciliación en Equidad y Conciliación en Derecho?',
    shortAnswer: 'Se adelantan ante operadores distintos. En derecho intervienen abogados o centros especializados; en equidad, líderes comunitarios habilitados.',
    fullAnswer: 'La conciliación en derecho se realiza ante centros de conciliación, notarías, personerías o consultorios jurídicos. La conciliación en equidad se realiza ante conciliadores en equidad en el marco de los PLJE y PACE territoriales aplicando criterios comunitarios.',
    category: 'Conceptos básicos',
    audience: ['todos', 'conciliador'],
    tags: ['derecho', 'abogados', 'centros de conciliacion', 'operadores'],
    normativeRef: 'Ley 2220 de 2022, arts. 5, 8 y 28'
  },

  // Categoría 2. Antes de solicitar la conciliación
  {
    id: 8,
    question: '¿Todo conflicto puede llevarse a Conciliación en Equidad?',
    shortAnswer: 'No. Solo asuntos que la ley permita conciliar (materias disponibles, transigibles o desistibles) y donde las partes tengan capacidad.',
    fullAnswer: 'Se atienden conflictos cotidianos de convivencia, deudas, linderos, arrendamientos y acuerdos familiares básicos. No pueden conciliarse delitos graves, violencias intrafamiliares que requieran protección urgente ni derechos indisponibles.',
    category: 'Antes de solicitar',
    audience: ['ciudadania', 'todos'],
    tags: ['casos conciliables', 'limites', 'asuntos', 'delitos', 'puedo conciliar'],
    normativeRef: 'Ley 2220 de 2022, art. 7',
    marker: 'P-JUR-01'
  },
  {
    id: 9,
    question: '¿Qué situaciones cotidianas pueden recibir orientación?',
    shortAnswer: 'Diferencias entre vecinos (ruidos, humedades, linderos), cobro de deudas, arriendos, compromisos de pago y convivencia comunitaria.',
    fullAnswer: 'La lista es ilustrativa: acuerdos sobre daños menores en bienes, uso de espacios compartidos, préstamos entre particulares, cumplimiento de contratos verbales o escritos de menor cuantía.',
    category: 'Antes de solicitar',
    audience: ['ciudadania'],
    tags: ['vecinos', 'deudas', 'arriendo', 'humedad', 'ruido', 'convivencia', 'plata'],
    normativeRef: 'Ley 2220 de 2022, art. 7'
  },
  {
    id: 10,
    question: '¿Qué situaciones NO pueden conciliarse y deben acudir a otra autoridad?',
    shortAnswer: 'Delitos penales no querellables, violencia física o sexual, situaciones con menores que requieran medidas cautelares de defensoría/comisaría y emergencias de seguridad.',
    fullAnswer: 'Ante riesgos a la vida, integridad física o vulneración grave de derechos, se debe acudir de inmediato a Fiscalía, Comisaría de Familia, Policía Nacional o ICBF. La conciliación no sustituye medidas de protección urgentes.',
    category: 'Antes de solicitar',
    audience: ['ciudadania', 'todos'],
    tags: ['no conciliable', 'violencia', 'delitos', 'emergencia', 'seguridad', 'proteccion'],
    normativeRef: 'Ley 2220 de 2022, art. 7; Código Penal',
    marker: 'P-PRO-03'
  },
  {
    id: 11,
    question: '¿Cómo se presenta una solicitud de conciliación?',
    shortAnswer: 'De manera verbal o escrita, presencial o virtual según los canales habilitados por el PLJE o PACE de su municipio.',
    fullAnswer: 'No requiere formalismos. Basta con acercarse al Punto de Atención (PACE) o Casa de Justicia, relatar con claridad los hechos y suministrar los datos de contacto de la otra persona.',
    category: 'Antes de solicitar',
    audience: ['ciudadania'],
    tags: ['solicitud', 'como pedir', 'requisitos', 'formulario', 'verbal'],
    normativeRef: 'Ley 2220 de 2022, art. 50'
  },
  {
    id: 12,
    question: '¿Necesito un abogado para solicitar o acudir a la conciliación en equidad?',
    shortAnswer: 'No. La ciudadanía participa directamente sin necesidad de apoderado o abogado.',
    fullAnswer: 'Una de las grandes ventajas de la justicia en equidad es su cercanía y gratuidad. Las personas pueden expresarse con su lenguaje cotidiano sin contratar abogados.',
    category: 'Antes de solicitar',
    audience: ['ciudadania'],
    tags: ['abogado', 'necesito abogado', 'apoderado', 'costo'],
    normativeRef: 'Ley 2220 de 2022, arts. 5 y 50'
  },
  {
    id: 13,
    question: '¿Qué documentos debo llevar al solicitar o asistir a la audiencia?',
    shortAnswer: 'Documento de identidad y soportes sencillos relacionados con el caso (recibos, fotos, mensajes, contratos si existen).',
    fullAnswer: 'No es obligatorio presentar un expediente complejo. Cualquier comprobante que ayude a que ambas partes entiendan la situación facilitará el diálogo.',
    category: 'Antes de solicitar',
    audience: ['ciudadania'],
    tags: ['documentos', 'que llevar', 'papeles', 'cedula', 'recibos'],
    normativeRef: 'Ley 2220 de 2022, art. 50'
  },

  // Categoría 3. Durante la audiencia
  {
    id: 14,
    question: '¿Cómo se desarrolla la audiencia de conciliación?',
    shortAnswer: 'El conciliador se presenta, explica las reglas de respeto y confidencialidad, escucha a cada parte, resume los puntos clave y facilita la búsqueda de acuerdos.',
    fullAnswer: 'La audiencia se organiza en 5 momentos: Apertura explicativa, relato de las partes, delimitación de controversias, generación colaborativa de opciones y elaboración del acta o constancia.',
    category: 'Durante la audiencia',
    audience: ['ciudadania', 'conciliador'],
    tags: ['audiencia', 'como es', 'pasos', 'reunion', 'que pasa'],
    normativeRef: 'Ley 2220 de 2022, art. 61'
  },
  {
    id: 15,
    question: '¿La conversación durante la audiencia es confidencial?',
    shortAnswer: 'Sí. Todo lo conversado, las ofertas y los documentos aportados tienen reserva legal y no pueden usarse en un juicio posterior.',
    fullAnswer: 'El principio de confidencialidad protege a las partes para que dialoguen con sinceridad y tranquilidad. El conciliador está obligado al secreto profesional.',
    category: 'Durante la audiencia',
    audience: ['ciudadania', 'conciliador'],
    tags: ['confidencialidad', 'secreto', 'reserva', 'grabacion'],
    normativeRef: 'Ley 2220 de 2022, art. 4'
  },
  {
    id: 16,
    question: '¿Puedo asistir con una persona de apoyo o acompañante?',
    shortAnswer: 'Sí, especialmente si requiere apoyos de accesibilidad, personas de la tercera edad o personas con discapacidad, informando previamente.',
    fullAnswer: 'Se garantiza la participación efectiva y ajustes razonables, cuidando siempre que el acompañante no interfiera en la voluntad directa de las partes ni vulnere la confidencialidad.',
    category: 'Durante la audiencia',
    audience: ['ciudadania'],
    tags: ['acompañante', 'persona de apoyo', 'discapacidad', 'tercera edad', 'accesibilidad'],
    normativeRef: 'Ley 2220 de 2022, art. 4; Ley 1996 de 2019'
  },
  {
    id: 17,
    question: '¿La audiencia puede realizarse de forma virtual?',
    shortAnswer: 'Sí, cuando se cuente con las condiciones técnicas y ambas partes acepten este medio.',
    fullAnswer: 'La normativa permite medios presenciales, electrónicos o mixtos garantizando siempre la autenticidad, la privacidad y la alternativa presencial para quienes no tengan conectividad.',
    category: 'Durante la audiencia',
    audience: ['ciudadania', 'conciliador'],
    tags: ['virtual', 'internet', 'videollamada', 'audiencia virtual', 'celular'],
    normativeRef: 'Ley 2220 de 2022, art. 61; Decreto 42 de 2026'
  },
  {
    id: 18,
    question: '¿Qué pasa si la otra persona citada no asiste a la audiencia?',
    shortAnswer: 'El conciliador expedirá una constancia de inasistencia. Si presentó justificación dentro de los términos legales, se evaluará reprogramar.',
    fullAnswer: 'La inasistencia no genera automáticamente una multa penal en conciliación en equidad, pero cierra la etapa conciliatoria y deja constancia formal para futuras acciones.',
    category: 'Durante la audiencia',
    audience: ['ciudadania'],
    tags: ['no fue a la cita', 'inasistencia', 'no fue', 'no asistio', 'que pasa si no va'],
    normativeRef: 'Ley 2220 de 2022, art. 65'
  },

  // Categoría 4. Resultados y documentos
  {
    id: 19,
    question: '¿Qué posibles resultados tiene una audiencia de conciliación?',
    shortAnswer: 'Acuerdo total, acuerdo parcial, constancia de no acuerdo, constancia de inasistencia, o constancia de asunto no conciliable / falta de competencia.',
    fullAnswer: 'Existen 5 resultados documentales oficiales: Acta de acuerdo total, Acta de acuerdo parcial, Constancia de no acuerdo, Constancia de inasistencia y Constancia de falta de competencia.',
    category: 'Resultados y documentos',
    audience: ['ciudadania', 'conciliador'],
    tags: ['resultados', 'que puede pasar', 'acta', 'constancia', 'finales'],
    normativeRef: 'Ley 2220 de 2022, arts. 64 y 65'
  },
  {
    id: 20,
    question: '¿Qué es el acta de conciliación y qué valor legal tiene?',
    shortAnswer: 'Es el documento oficial firmado con el acuerdo. Tiene valor definitivo: presta mérito ejecutivo y hace tránsito a cosa juzgada.',
    fullAnswer: 'Significa que lo acordado es de obligatorio cumplimiento. Si alguien incumple, se puede solicitar su ejecución inmediata ante un juez sin empezar un juicio desde cero.',
    category: 'Resultados y documentos',
    audience: ['ciudadania', 'todos'],
    tags: ['acta', 'merito ejecutivo', 'cosa juzgada', 'fuerza legal', 'obligatorio'],
    normativeRef: 'Ley 2220 de 2022, art. 64'
  },
  {
    id: 21,
    question: '¿Qué pasa si la otra persona incumple lo pactado en el acta?',
    shortAnswer: 'Puede acudir con copia del acta ante el juez competente para exigir el cumplimiento forzoso mediante un proceso ejecutivo.',
    fullAnswer: 'Al prestar mérito ejecutivo, el acta funciona como un título de cobro o cumplimiento obligatorio. Se recomienda antes intentar recordar el compromiso o pedir orientación en el PLJE.',
    category: 'Resultados y documentos',
    audience: ['ciudadania'],
    tags: ['no cumplio', 'incumplimiento', 'no pago', 'demanda ejecutiva', 'hacer cumplir'],
    normativeRef: 'Ley 2220 de 2022, art. 64',
    marker: 'P-JUR-02'
  },
  {
    id: 22,
    question: '¿El acta de conciliación debe llevarse a una notaría o autenticarse?',
    shortAnswer: 'No. El acta suscrita por el conciliador en equidad tiene plena validez legal por sí misma sin necesidad de trámites notariales.',
    fullAnswer: 'La investidura transitoria de administrar justicia que otorga la ley al conciliador hace que el acta tenga efectos probatorios y ejecutivos directos.',
    category: 'Resultados y documentos',
    audience: ['ciudadania'],
    tags: ['notaria', 'autenticar', 'escritura publica', 'validez'],
    normativeRef: 'Ley 2220 de 2022, arts. 64 y 66'
  },
  {
    id: 23,
    question: '¿Puedo pedir una copia del acta de conciliación tiempo después?',
    shortAnswer: 'Sí. Las partes pueden solicitar copias al Programa Local de Justicia en Equidad (PLJE) que custodia los archivos.',
    fullAnswer: 'El conciliador tiene la obligación de radicar las actas y constancias ante el PLJE territorial para su archivo seguro y permanente.',
    category: 'Resultados y documentos',
    audience: ['ciudadania', 'conciliador'],
    tags: ['copia del acuerdo', 'perdi el acta', 'solicitar copia', 'archivo'],
    normativeRef: 'Ley 2220 de 2022, art. 66; Decreto 42 de 2026'
  },

  // Categoría 5. Gratuidad y expensas
  {
    id: 24,
    question: '¿La Conciliación en Equidad tiene algún costo?',
    shortAnswer: 'No. El servicio, la audiencia y la labor del conciliador son 100% gratuitos.',
    fullAnswer: 'La Ley 2220 de 2022 prohíbe taxativamente que el conciliador cobre honorarios, propinas o tarifas a la ciudadanía.',
    category: 'Gratuidad y expensas',
    audience: ['todos', 'ciudadania'],
    tags: ['precio', 'costo', 'gratis', 'gratuidad', 'cobro'],
    normativeRef: 'Ley 2220 de 2022, arts. 8 y 9'
  },
  {
    id: 25,
    question: '¿Qué son las expensas y por qué pueden existir?',
    shortAnswer: 'Son gastos materiales indispensables para el trámite (fotocopias, cartas certificadas de citación) que pagan directamente las partes.',
    fullAnswer: 'Las expensas no son pago al conciliador. Corresponden a los insumos necesarios que las partes sufragan directamente al proveedor (ej. papelería, correo).',
    category: 'Gratuidad y expensas',
    audience: ['todos', 'ciudadania', 'conciliador'],
    tags: ['expensas', 'gastos', 'fotocopias', 'citacion costo', 'envio'],
    normativeRef: 'Ley 2220 de 2022, arts. 8 y 9; Decreto 42 de 2026'
  },
  {
    id: 26,
    question: '¿Qué debo hacer si un conciliador me pide dinero por atender mi caso?',
    shortAnswer: 'No entregue ningún dinero y reporte de inmediato la situación al PLJE o al correo institucional del Ministerio.',
    fullAnswer: 'Pedir o recibir dinero por el servicio es una falta disciplinaria y ética grave que acarrea la suspensión o exclusión del conciliador.',
    category: 'Gratuidad y expensas',
    audience: ['ciudadania', 'todos'],
    tags: ['me cobraron', 'pidieron plata', 'denuncia', 'corrupcion', 'cobro indebido'],
    normativeRef: 'Ley 2220 de 2022, art. 35; Decreto 42 de 2026',
    marker: 'P-CAN-01'
  },

  // Categoría 6. Para Conciliadores en Equidad
  {
    id: 27,
    question: '¿Cuáles son los requisitos para ser conciliador o conciliadora en equidad?',
    shortAnswer: 'Ser ciudadano colombiano en ejercicio, gozar de reconocimiento comunitario, residir mínimo 2 años en la comunidad, ser postulado por una organización cívica, aprobar la formación avalada y ser nombrado por la autoridad judicial.',
    fullAnswer: 'No se requiere ser abogado. Es un cargo de vocación comunitaria que exige formación específica en resolución pacífica de conflictos y nombramiento por el Tribunal Superior o Juez del Distrito.',
    category: 'Conciliadores en Equidad',
    audience: ['conciliador', 'aliado'],
    tags: ['quiero ser conciliador', 'requisitos', 'postulacion', 'formacion', 'como ser conciliador'],
    normativeRef: 'Ley 2220 de 2022, art. 28'
  },
  {
    id: 28,
    question: '¿Por qué es obligatoria la inscripción en el PLJE para poder ejercer?',
    shortAnswer: 'Porque la Ley 2220 y el Decreto 42 de 2026 establecen que la inscripción en el PLJE es condición indispensable para el ejercicio activo.',
    fullAnswer: 'La inscripción vincula al conciliador con los Puntos de Atención (PACE), le asigna turnos, respalda la validez de sus actas ante el archivo municipal y le permite acceder a programas de estímulos y formación continua.',
    category: 'Inscripción y ejercicio',
    audience: ['conciliador', 'entidad'],
    tags: ['registrarme', 'inscripcion', 'debo inscribirme', 'plje requisito', 'vigencia'],
    normativeRef: 'Ley 2220 de 2022, art. 28; Decreto 42 de 2026'
  },
  {
    id: 29,
    question: '¿Cuánto tiempo dura la inscripción en el PLJE y cómo se renueva?',
    shortAnswer: 'Tiene una vigencia de dos (2) años y debe renovarse ante el PLJE acreditando permanencia y actividad en el territorio.',
    fullAnswer: 'El proceso de renovación permite actualizar datos de contacto, verificar que se mantengan los requisitos de residencia y buena conducta, y registrar las capacitaciones recibidas.',
    category: 'Inscripción y ejercicio',
    audience: ['conciliador'],
    tags: ['renovacion', 'vigencia', 'dos años', 'vencimiento'],
    normativeRef: 'Decreto 42 de 2026'
  },
  {
    id: 30,
    question: '¿Qué estímulos o apoyos pueden recibir los conciliadores en equidad?',
    shortAnswer: 'Acceso prioritario a programas de vivienda de interés social y beneficios educativos en educación superior para el conciliador y su núcleo familiar (tras 1 año de servicio activo).',
    fullAnswer: 'La Ley y el Decreto reconocen la valiosa labor voluntaria facilitando prioridad en convocatorias de vivienda y becas/descuentos en convenios universitarios gestionados por el Ministerio o las alcaldías.',
    category: 'Apoyos y estímulos',
    audience: ['conciliador'],
    tags: ['estimulos', 'vivienda', 'educacion', 'subsidio', 'beneficios', 'familia'],
    normativeRef: 'Ley 2220 de 2022, art. 82; Decreto 42 de 2026'
  },
  {
    id: 31,
    question: '¿Los estímulos de vivienda o educación son automáticos por estar inscrito?',
    shortAnswer: 'No son automáticos. El conciliador debe postularse a las convocatorias públicas vigentes y cumplir los requisitos de cada entidad.',
    fullAnswer: 'La ley otorga un criterio de prelación o prioridad, pero no exime del cumplimiento de los requisitos del programa de vivienda o de la institución educativa.',
    category: 'Apoyos y estímulos',
    audience: ['conciliador'],
    tags: ['estimulo automatico', 'vivienda gratis', 'condiciones', 'convocatoria'],
    normativeRef: 'Decreto 42 de 2026'
  },

  // Categoría 7. Para Entidades Territoriales (Alcaldías y Gobernaciones)
  {
    id: 32,
    question: '¿Quién tiene la obligación de crear y financiar el PLJE en el municipio?',
    shortAnswer: 'Las alcaldías municipales y distritales, con el apoyo y acompañamiento técnico de las gobernaciones y el Ministerio de Justicia.',
    fullAnswer: 'El Decreto 42 de 2026 establece la responsabilidad de los entes territoriales de formalizar el PLJE mediante acto administrativo, designar un coordinador, adscribirlo al PISCC y disponer espacios físicos y recursos.',
    category: 'Entidades territoriales y PLJE',
    audience: ['entidad'],
    tags: ['crear programa', 'alcaldia', 'gobernacion', 'presupuesto', 'obligacion plje'],
    normativeRef: 'Decreto 42 de 2026; Ley 2220 de 2022, art. 141'
  },
  {
    id: 33,
    question: '¿Cuál es el plazo legal para que los municipios creen su PLJE?',
    shortAnswer: 'Municipios con conciliadores ya nombrados: hasta el 21 de enero de 2027. Municipios sin conciliadores: implementación gradual hasta 2034.',
    fullAnswer: 'El Decreto 42 de 2026 otorgó un plazo de 1 año calendario desde su expedición para territorios con operadores nombrados, y una ruta progresiva decenal para el resto del país.',
    category: 'Entidades territoriales y PLJE',
    audience: ['entidad'],
    tags: ['plazo', 'cronograma', 'fecha limite', '2027', '2034'],
    normativeRef: 'Decreto 42 de 2026'
  },
  {
    id: 34,
    question: '¿Qué documentos mínimos debe contener la propuesta de creación del PLJE?',
    shortAnswer: '1) Diagnóstico territorial de conflictividades, 2) Proyecto de acto administrativo, 3) Documento de articulación con el PISCC y Plan de Desarrollo, 4) Reglamento de operación.',
    fullAnswer: 'La carpeta completa debe enviarse para concepto y asistencia técnica a la Dirección de Métodos Alternativos del Ministerio de Justicia (conciliacionequidad@minjusticia.gov.co).',
    category: 'Entidades territoriales y PLJE',
    audience: ['entidad'],
    tags: ['documentos plje', 'diagnostico', 'reglamento', 'acto administrativo', 'piscc'],
    normativeRef: 'Decreto 42 de 2026'
  },
  {
    id: 35,
    question: '¿Qué es un PACE y qué condiciones físicas mínimas debe cumplir?',
    shortAnswer: 'Es el Punto de Atención de Conciliación en Equidad. Debe asegurar privacidad acústica, accesibilidad física, señalización clara, seguridad y archivo seguro.',
    fullAnswer: 'Puede ubicarse en una Casa de Justicia, Centro de Convivencia, salón comunal o sede institucional. No puede ser un espacio abierto donde terceros escuchen las conversaciones.',
    category: 'PACE y atención territorial',
    audience: ['entidad', 'conciliador', 'todos'],
    tags: ['que es pace', 'salon comunal', 'condiciones pace', 'privacidad', 'donde funciona'],
    normativeRef: 'Decreto 42 de 2026'
  },
  {
    id: 36,
    question: '¿Puede existir un PACE itinerante para veredas o corregimientos rurales?',
    shortAnswer: 'Sí. El PLJE puede programar jornadas móviles periódicas para acercar el servicio a zonas rurales dispersas.',
    fullAnswer: 'Los PACE itinerantes publican con anticipación su calendario y garantizan las mismas condiciones de confidencialidad, custodia de actas y gratuidad que los puntos fijos.',
    category: 'PACE y atención territorial',
    audience: ['entidad', 'ciudadania'],
    tags: ['itinerante', 'rural', 'vereda', 'jornada movil', 'corregimiento'],
    normativeRef: 'Decreto 42 de 2026'
  },

  // Categoría 8. Academia y Actores Aliados
  {
    id: 37,
    question: '¿Los estudiantes de Derecho pueden hacer su judicatura en los PLJE?',
    shortAnswer: 'Sí. Quienes hayan culminado materias de Derecho pueden realizar la judicatura en un PLJE con una duración de siete (7) meses.',
    fullAnswer: 'La judicatura en el PLJE es remunerada o ad honorem según convenio, apoya la gestión documental y orientación general, y otorga puntaje de desempate en concursos de méritos públicos.',
    category: 'Academia y prácticas',
    audience: ['aliado', 'entidad'],
    tags: ['judicatura', 'derecho', 'estudiantes', 'pasantia', '7 meses'],
    normativeRef: 'Ley 2220 de 2022, art. 80; Decreto 42 de 2026'
  },
  {
    id: 38,
    question: '¿Estudiantes de Psicología, Trabajo Social o Comunicación pueden hacer prácticas en el PLJE?',
    shortAnswer: 'Sí. Mediante convenios interinstitucionales con universidades, estudiantes de últimos semestres pueden apoyar la atención y el tejido comunitario.',
    fullAnswer: 'Los practicantes interdisciplinarios enriquecen la recepción y el clima de convivencia sin suplantar la función conciliatoria directa de los conciliadores nombrados.',
    category: 'Academia y prácticas',
    audience: ['aliado', 'entidad'],
    tags: ['practicas', 'psicologia', 'trabajo social', 'comunicacion', 'convenio'],
    normativeRef: 'Decreto 42 de 2026'
  }
];
