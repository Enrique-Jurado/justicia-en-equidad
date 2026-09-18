export interface PljeStep {
  stepNumber: number;
  title: string;
  shortDesc: string;
  detailedObjectives: string[];
  mandatoryTasks: string[];
  deliverables: string[];
  commonRisks: string;
  preventionTip: string;
  responsibleActors: string[];
}

export const PLJE_STEPS: PljeStep[] = [
  {
    stepNumber: 1,
    title: 'Alistamiento Institucional',
    shortDesc: 'Identificar la secretaría responsable, conformar el equipo base de trabajo y vincular a planeación y jurídica.',
    detailedObjectives: [
      'Identificar la secretaría líder (Gobierno, Seguridad, Paz o Derechos Humanos).',
      'Articular a los equipos jurídicos, de planeación, de presupuesto y de tecnologías.',
      'Establecer contacto de asistencia técnica con el Programa Nacional de Justicia en Equidad (PNJE).'
    ],
    mandatoryTasks: [
      'Designar funcionario líder responsable del proyecto de creación.',
      'Revisar antecedentes normativos y actas históricas del municipio.',
      'Enviar correo formal de solicitud de acompañamiento a conciliacionequidad@minjusticia.gov.co.'
    ],
    deliverables: ['Acta de conformación de mesa técnica municipal', 'Cronograma inicial de formulación'],
    commonRisks: 'Crear el programa de manera aislada sin vincular a Hacienda o Planeación.',
    preventionTip: 'La viabilidad depende de asegurar presupuesto y anclaje en el Plan de Desarrollo.',
    responsibleActors: ['Alcalde / Gobernador', 'Secretaría de Gobierno', 'Oficina Jurídica']
  },
  {
    stepNumber: 2,
    title: 'Diagnóstico Territorial y Línea Base',
    shortDesc: 'Mapear conflictividades locales, censar a los conciliadores nombrados y ubicar expresiones de justicia comunitaria.',
    detailedObjectives: [
      'Identificar conciliadores nombrados en el territorio y clasificar su estado (activos, inactivos, trasladados).',
      'Analizar los tipos de conflictos más recurrentes (convivencia, linderos, deudas, ruidos).',
      'Mapear la oferta de Casas de Justicia, Centros de Convivencia y salones comunales viables.'
    ],
    mandatoryTasks: [
      'Revisar archivos locales y cruzar datos con el Tribunal Superior de Distrito.',
      'Realizar talleres comunitarios participativos y cartografía social.',
      'Establecer la línea base de necesidades de atención urbana y rural.'
    ],
    deliverables: ['Documento de diagnóstico territorial de conflictividades', 'Censo preliminar de operadores nombrados'],
    commonRisks: 'Copiar diagnósticos generales de otros municipios sin consultar a las comunidades locales.',
    preventionTip: 'Involucrar a las Juntas de Acción Comunal y autoridades étnicas desde la fase cero.',
    responsibleActors: ['Equipo técnico PLJE', 'Juntas de Acción Comunal', 'Casas de Justicia']
  },
  {
    stepNumber: 3,
    title: 'Preparación de la Propuesta Técnica',
    shortDesc: 'Estructurar el expediente técnico con justificación, metas territoriales y plan de sostenibilidad.',
    detailedObjectives: [
      'Redactar la justificación técnica conforme a los lineamientos del Ministerio.',
      'Definir metas de cobertura urbana y rural y cronograma de apertura de PACE.',
      'Proyectar el presupuesto para dotación, papelería y gestión documental.'
    ],
    mandatoryTasks: [
      'Consolidar la memoria técnica del PLJE.',
      'Elaborar la matriz de fuentes de financiación territorial.',
      'Remitir la propuesta al Ministerio de Justicia para revisión y asistencia.'
    ],
    deliverables: ['Expediente técnico completo de propuesta de PLJE', 'Concepto preliminar de viabilidad'],
    commonRisks: 'Proponer estructuras desproporcionadas que luego no cuentan con presupuesto real.',
    preventionTip: 'Aprovechar la infraestructura física y tecnológica ya instalada en el municipio.',
    responsibleActors: ['Secretaría de Planeación', 'Secretaría de Gobierno', 'PNJE']
  },
  {
    stepNumber: 4,
    title: 'Expedición del Acto Administrativo',
    shortDesc: 'Formalizar legalmente el PLJE mediante Decreto del Alcalde o Acuerdo del Concejo Municipal.',
    detailedObjectives: [
      'Emitir la norma local que crea formalmente el Programa Local de Justicia en Equidad.',
      'Establecer la adscripción institucional, el objeto, principios y fuentes de recursos.',
      'Garantizar la seguridad jurídica del programa ante cambios de administración.'
    ],
    mandatoryTasks: [
      'Revisar la concordancia con la Ley 2220 de 2022 y el Decreto 42 de 2026.',
      'Someter a visto bueno de la Oficina Jurídica y firma de la máxima autoridad.',
      'Publicar en la Gaceta Oficial o medio de divulgación municipal.'
    ],
    deliverables: ['Decreto municipal / Acuerdo distrital de creación del PLJE debidamente promulgado'],
    commonRisks: 'Crear el PLJE solo en el papel y no avanzar hacia su operación real.',
    preventionTip: 'El acto debe incluir plazos claros para la expedición del reglamento y designación del coordinador.',
    responsibleActors: ['Alcalde / Concejo Municipal', 'Oficina Jurídica']
  },
  {
    stepNumber: 5,
    title: 'Estructura y Designación de Coordinación',
    shortDesc: 'Nombrar al coordinador del PLJE con idoneidad y competencias en justicia comunitaria.',
    detailedObjectives: [
      'Designar al servidor público que liderará la articulación diaria.',
      'Definir manual de funciones, canales de atención y mesa de coordinación.',
      'Articular con el Sistema Local de Justicia (SLJ) cuando exista en el territorio.'
    ],
    mandatoryTasks: [
      'Asignar perfil idóneo con experiencia en resolución pacífica de conflictos.',
      'Establecer espacio físico para la oficina de coordinación y atención ciudadana.',
      'Participar en los talleres nacionales de inducción organizados por el MinJusticia.'
    ],
    deliverables: ['Acto de designación del Coordinador del PLJE', 'Manual operativo de funciones'],
    commonRisks: 'Sobrecargar al coordinador con tareas ajenas que le impidan acompañar a los conciliadores.',
    preventionTip: 'Garantizar dedicación horaria efectiva y soporte administrativo.',
    responsibleActors: ['Alcaldía', 'Coordinador del PLJE']
  },
  {
    stepNumber: 6,
    title: 'Identificación e Inscripción de Operadores',
    shortDesc: 'Abrir el registro oficial para que los conciliadores nombrados queden debidamente inscritos por 2 años.',
    detailedObjectives: [
      'Emitir la resolución o formulario de inscripción para conciliadores nombrados.',
      'Verificar soportes de nombramiento judicial y vigencia de requisitos.',
      'Vincular voluntariamente a otros operadores comunitarios (jueces de paz, mediadores).'
    ],
    mandatoryTasks: [
      'Publicar convocatoria pública y personalizada para conciliar el censo.',
      'Expedir la constancia formal de inscripción con vigencia de 2 años.',
      'Proteger los datos personales y publicar únicamente el registro público de atención.'
    ],
    deliverables: ['Registro público oficial de conciliadores en equidad inscritos', 'Constancias de inscripción emitidas'],
    commonRisks: 'Inscribir automáticamente a cualquier líder comunitario sin nombramiento judicial.',
    preventionTip: 'Diferenciar claramente en el registro quién administra justicia (conciliador nombrado) y quién es mediador.',
    responsibleActors: ['Coordinador del PLJE', 'Conciliadores en equidad']
  },
  {
    stepNumber: 7,
    title: 'Organización y Registro de PACE',
    shortDesc: 'Aprobar y registrar los Puntos de Atención fijos e itinerantes garantizando privacidad y accesibilidad.',
    detailedObjectives: [
      'Verificar que los espacios físicos cumplan con privacidad acústica y dignidad.',
      'Georreferenciar los puntos e integrarlos al mapa territorial del Ministerio.',
      'Programar calendarios de atención y turnos de conciliadores.'
    ],
    mandatoryTasks: [
      'Aplicar la lista de verificación técnica de infraestructura.',
      'Suscribir actas de articulación con sedes comunales o Casas de Justicia.',
      'Instalar señalización visible de "Servicio Gratuito" y horarios oficiales.'
    ],
    deliverables: ['Actas de verificación y aprobación de PACE', 'Fichas de georreferenciación enviadas al MinJusticia'],
    commonRisks: 'Habilitar salones ruidosos o sin privacidad donde vecinos escuchen los testimonios.',
    preventionTip: 'Asegurar un cubículo o salón cerrado exclusivo durante el tiempo de las audiencias.',
    responsibleActors: ['Coordinación PLJE', 'Administradores de espacios anfitriones']
  },
  {
    stepNumber: 8,
    title: 'Puesta en Marcha y Operación del Servicio',
    shortDesc: 'Iniciar la atención ciudadana, recepción de solicitudes verbales/escritas y realización de audiencias.',
    detailedObjectives: [
      'Brindar orientación accesible y sin tecnicismos a la ciudadanía.',
      'Gestionar citaciones oportunas y respetuosas.',
      'Garantizar la gratuidad absoluta del servicio.'
    ],
    mandatoryTasks: [
      'Habilitar canales físicos y electrónicos de solicitud.',
      'Entregar formatos actualizados de actas y constancias a los conciliadores.',
      'Verificar que las expensas se paguen directamente y nunca al conciliador.'
    ],
    deliverables: ['Libro de radicación y registro de casos', 'Formatos oficiales de actas en uso'],
    commonRisks: 'Permitir cobros informales de fotocopias o transporte al conciliador.',
    preventionTip: 'Carteleras visibles en cada PACE indicando la prohibición expresa de entrega de dinero al conciliador.',
    responsibleActors: ['Conciliadores en equidad', 'Equipo de apoyo PACE']
  },
  {
    stepNumber: 9,
    title: 'Gestión Documental y Archivo Seguro',
    shortDesc: 'Custodiar las actas y constancias con reglas archivísticas para permitir copias y seguridad jurídica.',
    detailedObjectives: [
      'Recibir y radicar las actas y constancias dentro de los plazos reglamentarios.',
      'Organizar archivo físico y digital con estricta reserva confidencial.',
      'Facilitar la expedición de copias auténticas a las partes cuando lo soliciten.'
    ],
    mandatoryTasks: [
      'Implementar protocolo de custodia y seguridad de expedientes.',
      'Crear copia de respaldo digitalizada de cada acta suscrita.',
      'Reportar estadísticas agregadas al sistema de información del Ministerio.'
    ],
    deliverables: ['Archivo centralizado de actas y constancias del PLJE', 'Reportes trimestrales consolidados'],
    commonRisks: 'Dejar que las actas se queden en las viviendas de los conciliadores sin respaldo institucional.',
    preventionTip: 'Fijar entrega mensual obligatoria de actas con comprobante de radicación.',
    responsibleActors: ['Gestión Documental de la Alcaldía', 'Coordinador del PLJE']
  },
  {
    stepNumber: 10,
    title: 'Seguimiento, Fortalecimiento y Mejora Continua',
    shortDesc: 'Medir la satisfacción ciudadana, gestionar incentivos (vivienda/educación) y capacitar continuamente.',
    detailedObjectives: [
      'Medir indicadores de calidad, acceso rural y trato digno.',
      'Gestionar convenios con universidades para judicaturas de 7 meses y prácticas.',
      'Postular a los conciliadores activos a los programas de estímulos y conmemoración anual.'
    ],
    mandatoryTasks: [
      'Realizar jornadas de formación continua y autocuidado emocional.',
      'Formular planes de mejoramiento ante hallazgos de inspección ministerial.',
      'Conmemorar el Día Nacional de la Conciliación en Equidad (último sábado de noviembre).'
    ],
    deliverables: ['Informe anual de gestión y convivencia comunitaria', 'Plan de mejoramiento institucional'],
    commonRisks: 'Evaluar el éxito del programa únicamente por cantidad de actas firmadas.',
    preventionTip: 'Valorar la reconstrucción de la convivencia y el acceso a la justicia de poblaciones vulnerables.',
    responsibleActors: ['Alcaldía / Gobernación', 'Comité de Ética', 'MinJusticia']
  }
];
