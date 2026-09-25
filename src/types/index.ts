export type VisualDirection = 'institucional' | 'comunitaria' | 'editorial';

export type UserProfile = 'ciudadania' | 'entidad' | 'conciliador' | 'aliado';

export type ActiveTab =
  | 'home'
  | 'conozca'
  | 'ruta-ciudadana'
  | 'conciliadores'
  | 'plje'
  | 'pace'
  | 'sistema'
  | 'recursos'
  | 'faq'
  | 'glosario';

export interface MarkerInfo {
  code: string;
  type: 'JUR' | 'LIN' | 'MOD' | 'PRO' | 'SIS' | 'CAN' | 'TEC';
  title: string;
  description: string;
  actionRequired: string;
}

export interface FaqItem {
  id: number;
  question: string;
  shortAnswer: string;
  fullAnswer: string;
  category: string;
  audience: ('todos' | 'ciudadania' | 'conciliador' | 'entidad' | 'aliado')[];
  tags: string[];
  normativeRef?: string;
  marker?: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  category: string;
  shortDef: string;
  fullDef: string;
  example?: string;
  aliases: string[];
  tags: string[];
  relatedTerms: string[];
  avoidTerms?: string;
  normativeRef?: string;
  audience: string[];
  marker?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  audience: UserProfile | 'todos';
  theme: string;
  type: 'Guía' | 'Norma' | 'Lineamiento' | 'Formato' | 'Modelo' | 'Infografía' | 'Video' | 'Herramienta';
  format: 'PDF' | 'Word' | 'Web' | 'Interactivo';
  version: string;
  date: string;
  status: 'Vigente' | 'En preparación' | 'Histórico' | 'Pendiente de validación';
  officialSource?: string;
  marker?: string;
  downloadable: boolean;
  legalBasis?: string;
  keySections?: string[];
  sampleStructure?: string;
}

export interface PaceLocation {
  id: string;
  name: string;
  type: 'PACE Fijo' | 'PACE Itinerante' | 'Casa de Justicia' | 'Centro de Convivencia';
  department: string;
  municipality: string;
  address: string;
  schedule: string;
  modality: 'Presencial' | 'Virtual / Mixta' | 'Itinerante';
  accessible: boolean;
  phone: string;
  email: string;
  activeConciliators: number;
  status: 'Activo' | 'En programación' | 'En adecuación';
  lastUpdated: string;
  notes?: string;
}

export interface VideoProposal {
  id: string;
  title: string;
  targetAudience: string;
  duration: string;
  objective: string;
  format: string;
  visualConcept: string;
  structure: { scene: string; visual: string; narration: string; onScreenText: string }[];
}

export interface InfographicProposal {
  id: string;
  title: string;
  objective: string;
  content: string;
  structure: string[];
  visualizationType: string;
  siteLocation: string;
  colorScheme?: string;
  keyElements?: string[];
}
