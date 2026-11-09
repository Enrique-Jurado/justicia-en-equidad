import React, { useState, useEffect, useRef } from 'react';
import { RESOURCES_DATA } from '../data/resources';
import { ResourceItem } from '../types';
import sistemaImage from '../assets/images/recursos_pantalla_interactiva_1787607873159.jpg';
import {
  Bookmark,
  Search,
  Download,
  Filter,
  FileText,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Eye,
  X,
  RotateCcw
} from 'lucide-react';

function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export const RecursosView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState<string>('todos');
  const [selectedProfile, setSelectedProfile] = useState<string>('todos');
  const [selectedAvailability, setSelectedAvailability] = useState<'todos' | 'disponible' | 'en-preparacion'>('todos');
  const [previewResource, setPreviewResource] = useState<ResourceItem | null>(null);

  const lastFocusedTriggerRef = useRef<HTMLElement | null>(null);
  const modalCloseBtnRef = useRef<HTMLButtonElement | null>(null);

  const types = [
    { id: 'todos', label: 'Todos los tipos' },
    { id: 'Norma', label: 'Normativa' },
    { id: 'Modelo', label: 'Modelos' },
    { id: 'Formato', label: 'Formatos' },
    { id: 'Guía', label: 'Guías y Manuales' },
    { id: 'Lineamiento', label: 'Lineamientos' },
  ];

  const profiles = [
    { id: 'todos', label: 'Todos los perfiles' },
    { id: 'ciudadania', label: 'Ciudadanía' },
    { id: 'entidad', label: 'Alcaldías' },
    { id: 'conciliador', label: 'Conciliadores' },
    { id: 'aliado', label: 'Aliados' },
  ];

  const availabilities = [
    { id: 'todos', label: 'Todos' },
    { id: 'disponible', label: 'Disponibles para descarga' },
    { id: 'en-preparacion', label: 'En construcción o aprobación' },
  ] as const;

  // Manage Escape key, body scroll lock and focus when modal opens/closes
  useEffect(() => {
    if (previewResource) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setPreviewResource(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      // Focus close button in modal after render
      setTimeout(() => {
        modalCloseBtnRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
        if (lastFocusedTriggerRef.current) {
          lastFocusedTriggerRef.current.focus();
        }
      };
    }
  }, [previewResource]);

  const handleOpenPreview = (item: ResourceItem, triggerElement: HTMLElement | null) => {
    lastFocusedTriggerRef.current = triggerElement;
    setPreviewResource(item);
  };

  const handleResetFilters = () => {
    setSearch('');
    setSelectedType('todos');
    setSelectedProfile('todos');
    setSelectedAvailability('todos');
  };

  const normalizedQuery = normalizeText(search);

  const filtered = RESOURCES_DATA.filter((r) => {
    // Search filter across title, description, theme, officialSource, type, audience, aliases
    if (normalizedQuery) {
      const matchInTitle = normalizeText(r.title).includes(normalizedQuery);
      const matchInDesc = normalizeText(r.description).includes(normalizedQuery);
      const matchInTheme = normalizeText(r.theme).includes(normalizedQuery);
      const matchInSource = r.officialSource ? normalizeText(r.officialSource).includes(normalizedQuery) : false;
      const matchInType = normalizeText(r.type).includes(normalizedQuery);
      const matchInAudience = normalizeText(r.audience).includes(normalizedQuery);
      const matchInAliases = r.aliases?.some((a) => normalizeText(a).includes(normalizedQuery)) ?? false;
      const matchInLegal = r.legalBasis ? normalizeText(r.legalBasis).includes(normalizedQuery) : false;

      if (
        !matchInTitle &&
        !matchInDesc &&
        !matchInTheme &&
        !matchInSource &&
        !matchInType &&
        !matchInAudience &&
        !matchInAliases &&
        !matchInLegal
      ) {
        return false;
      }
    }

    // Type filter
    if (selectedType !== 'todos' && r.type !== selectedType) {
      return false;
    }

    // Profile filter
    if (
      selectedProfile !== 'todos' &&
      r.audience !== 'todos' &&
      r.audience !== selectedProfile
    ) {
      return false;
    }

    // Availability filter
    if (selectedAvailability !== 'todos' && r.status !== selectedAvailability) {
      return false;
    }

    return true;
  });

  const availableCount = filtered.filter((r) => r.status === 'disponible').length;
  const isFiltered =
    Boolean(search.trim()) ||
    selectedType !== 'todos' ||
    selectedProfile !== 'todos' ||
    selectedAvailability !== 'todos';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 font-sans">
      {/* Header Banner with Photography */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden text-white shadow-md grid grid-cols-1 lg:grid-cols-12 border border-blue-800">
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-3 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold w-fit">
            <Bookmark className="w-4 h-4" />
            <span>Centro de Documentación y Herramientas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Biblioteca de Recursos, Normas y Modelos
          </h2>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
            Consulte leyes, decretos reglamentarios, modelos de actas, minutas de actos administrativos y guías pedagógicas estandarizadas.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs text-blue-200">
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">4 Documentos Oficiales en PDF</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Decreto 0042 de 2026</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Ley 2220 de 2022</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Lineamientos MinJusticia</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full">
          <img
            src={sistemaImage}
            alt="Biblioteca de recursos institucionales y jurídicos en Colombia"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[10px] text-white font-medium px-2.5 py-1 rounded-md border border-white/10">
            Documentación Oficial Homologada
          </div>
        </div>
      </div>

      {/* SEARCH AND FILTERS TOOLBAR */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" aria-hidden="true" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre, palabra clave o tema (ej. decreto 0042, ley 2220, abc, acta, minuta)..."
            aria-label="Buscar documentos y recursos"
            className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 outline-none focus:border-blue-900 focus:bg-white transition-colors"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 p-1"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Rows */}
        <div className="space-y-3 pt-2 border-t border-slate-100 text-xs">
          {/* Availability filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-slate-500 uppercase text-[10px] tracking-wider mr-1">Disponibilidad:</span>
            {availabilities.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setSelectedAvailability(a.id)}
                className={`px-3 py-1.5 rounded-full font-semibold transition-all border ${
                  selectedAvailability === a.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 border-t border-slate-100">
            {/* Type filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-slate-500 uppercase text-[10px] tracking-wider mr-1">Tipo:</span>
              {types.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedType(c.id)}
                  className={`px-3 py-1.5 rounded-full font-semibold transition-all border ${
                    selectedType === c.id
                      ? 'bg-blue-900 text-white border-blue-900 shadow-2xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Profile filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-slate-500 uppercase text-[10px] tracking-wider mr-1">Perfil:</span>
              {profiles.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedProfile(p.id)}
                  className={`px-3 py-1.5 rounded-full font-semibold transition-all border ${
                    selectedProfile === p.id
                      ? 'bg-amber-600 text-white border-amber-600 shadow-2xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RESULTS LIST & COUNTER */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-600 px-2" aria-live="polite">
          <span>
            Mostrando <strong>{filtered.length}</strong> de <strong>{RESOURCES_DATA.length}</strong> recursos
            {' '}
            <span className="text-slate-500 font-normal">
              ({availableCount} {availableCount === 1 ? 'disponible' : 'disponibles'} para descarga oficial)
            </span>
          </span>
          {isFiltered && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-blue-900 hover:text-blue-700 font-semibold inline-flex items-center gap-1 underline underline-offset-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restablecer filtros</span>
            </button>
          )}
        </div>

        {/* Empty state when no resources match */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 mx-auto flex items-center justify-center">
              <Filter className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">
                No se encontraron recursos con los criterios seleccionados
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Prueba ajustando el término de búsqueda o restableciendo los filtros de tipo, perfil o disponibilidad.
              </p>
            </div>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-2xs transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ver todos los recursos</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((item) => {
              const isAvailable = item.status === 'disponible' && Boolean(item.fileUrl);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Type and Version/Date */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-900">
                        {item.type.toUpperCase()}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {item.version ? `v${item.version} • ` : ''}{item.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-base text-slate-900 mb-1 leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {/* Theme and Official Source */}
                    <div className="space-y-1 text-[11px] text-slate-500 mb-3">
                      <div>
                        <strong className="text-slate-700">Tema:</strong> {item.theme}
                      </div>
                      {item.officialSource && (
                        <div>
                          <strong className="text-slate-700">Fuente:</strong> {item.officialSource}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                    {/* Status Badge */}
                    <div>
                      {isAvailable ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Disponible en PDF</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-semibold">
                          <AlertCircle className="w-3 h-3 text-slate-500" />
                          <span>En construcción o aprobación</span>
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => handleOpenPreview(item, e.currentTarget)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold flex items-center gap-1 text-xs transition-colors"
                        aria-label={`Ver ficha técnica de ${item.title}`}
                      >
                        <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Ver ficha</span>
                      </button>

                      {isAvailable && item.fileUrl && (
                        <a
                          href={item.fileUrl}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold flex items-center gap-1 shadow-2xs text-xs transition-colors"
                          aria-label={`Descargar PDF: ${item.title}`}
                        >
                          <Download className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Descargar PDF</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* RESOURCE PREVIEW MODAL */}
      {previewResource && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="resource-modal-title"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-md">
                  Ficha Técnica Oficial
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {previewResource.format} • {previewResource.status === 'disponible' ? 'Documento Oficial Disponible' : 'En Construcción'}
                </span>
              </div>
              <button
                ref={modalCloseBtnRef}
                type="button"
                onClick={() => setPreviewResource(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm transition-colors"
                aria-label="Cerrar ficha técnica"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Title & Description */}
            <div>
              <h3 id="resource-modal-title" className="font-black text-xl text-slate-900 leading-snug">
                {previewResource.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1.5">
                {previewResource.description}
              </p>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div>
                <strong className="text-slate-900">Tipo de Documento:</strong>{' '}
                <span className="text-slate-600">{previewResource.type}</span>
              </div>
              <div>
                <strong className="text-slate-900">Versión / Fecha:</strong>{' '}
                <span className="text-slate-600">
                  {previewResource.version ? `${previewResource.version} • ` : ''}{previewResource.date}
                </span>
              </div>
              <div>
                <strong className="text-slate-900">Público Destinatario:</strong>{' '}
                <span className="text-slate-600 uppercase font-semibold">{previewResource.audience}</span>
              </div>
              <div>
                <strong className="text-slate-900">Tema Principal:</strong>{' '}
                <span className="text-slate-600">{previewResource.theme}</span>
              </div>
              {previewResource.legalBasis && (
                <div className="sm:col-span-2 pt-1 border-t border-slate-200/60">
                  <strong className="text-slate-900">Fundamento Legal:</strong>{' '}
                  <span className="text-slate-600">{previewResource.legalBasis}</span>
                </div>
              )}
              {previewResource.officialSource && (
                <div className="sm:col-span-2">
                  <strong className="text-slate-900">Fuente Oficial:</strong>{' '}
                  <span className="text-slate-600">{previewResource.officialSource}</span>
                </div>
              )}
            </div>

            {/* Key Sections */}
            {previewResource.keySections && previewResource.keySections.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                  Contenido y Estructura del Documento:
                </h4>
                <div className="bg-blue-50/50 rounded-2xl p-4 border border-blue-100 space-y-1.5 text-xs text-slate-700">
                  {previewResource.keySections.map((sec, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 shrink-0" />
                      <span>{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sample Structure */}
            {previewResource.sampleStructure && (
              <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200 text-xs text-amber-950">
                <strong className="block font-bold mb-0.5 text-amber-900">Estructura de la Minuta / Formato:</strong>
                <span>{previewResource.sampleStructure}</span>
              </div>
            )}

            {/* Notice for resources in progress */}
            {previewResource.status === 'en-preparacion' && (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-3 text-xs text-slate-700">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 font-bold block mb-0.5">Estado del recurso</strong>
                  <span>
                    Este recurso se encuentra en proceso de construcción o aprobación institucional. La versión descargable se publicará cuando esté disponible.
                  </span>
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-end gap-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setPreviewResource(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
              >
                Cerrar
              </button>

              {previewResource.externalUrl && (
                <a
                  href={previewResource.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-blue-200 text-blue-900 bg-blue-50 hover:bg-blue-100 text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Consultar en SUIN-Juriscol</span>
                </a>
              )}

              {previewResource.status === 'disponible' && previewResource.fileUrl && (
                <a
                  href={previewResource.fileUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold inline-flex items-center gap-2 shadow-xs transition-colors"
                  aria-label={`Descargar PDF: ${previewResource.title}`}
                >
                  <Download className="w-4 h-4" />
                  <span>Descargar PDF Oficial</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
