import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { RESOURCES_DATA } from '../data/resources';
import { ResourceItem, UserProfile } from '../types';
import sistemaImage from '../assets/images/recursos_pantalla_interactiva_1787607873159.jpg';
import {
  Bookmark,
  Search,
  Download,
  Filter,
  FileText,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Eye
} from 'lucide-react';

export const RecursosView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState<string>('todos');
  const [selectedProfile, setSelectedProfile] = useState<string>('todos');
  const [previewResource, setPreviewResource] = useState<ResourceItem | null>(null);

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

  const filtered = RESOURCES_DATA.filter((r) => {
    const matchSearch =
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase()) ||
      r.theme.toLowerCase().includes(search.toLowerCase());

    const matchType = selectedType === 'todos' || r.type === selectedType;
    const matchProfile =
      selectedProfile === 'todos' ||
      r.audience === 'todos' ||
      r.audience === selectedProfile;

    return matchSearch && matchType && matchProfile;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans">
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
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Modelos Descargables</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Decreto 42 de 2026</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Formatos Oficiales MinJusticia</span>
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
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre, palabra clave o tema (ej. decreto 42, acta, estatuto, minuta)..."
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 outline-none focus:border-blue-900 focus:bg-white transition-colors"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider mr-1">Tipo:</span>
            {types.map((c) => (
              <button
                key={c.id}
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

          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider mr-1">Perfil:</span>
            {profiles.map((p) => (
              <button
                key={p.id}
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

      {/* RESULTS LIST */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500 px-2">
          <span>Mostrando {filtered.length} recursos disponibles</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-900">
                    {item.type.toUpperCase()}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">v{item.version} • {item.date}</span>
                </div>

                <h4 className="font-bold text-base text-slate-900 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">{item.description}</p>
                <div className="text-[11px] text-slate-500 mb-3"><strong>Tema:</strong> {item.theme}</div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-medium">{item.format} • {item.status}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPreviewResource(item)}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver ficha</span>
                  </button>
                  {item.downloadable ? (
                    <button
                      onClick={() => alert(`Iniciando descarga del recurso oficial: ${item.title}`)}
                      className="px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold flex items-center gap-1 shadow-2xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Descargar</span>
                    </button>
                  ) : (
                    <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold">
                      {item.marker || 'En validación'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RESOURCE PREVIEW MODAL */}
      {previewResource && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                  Ficha Técnica Oficial
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {previewResource.format} • {previewResource.status}
                </span>
              </div>
              <button
                onClick={() => setPreviewResource(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div>
              <h3 className="font-black text-xl text-slate-900">{previewResource.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">{previewResource.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div><strong className="text-slate-900">Tipo de Documento:</strong> <span className="text-slate-600">{previewResource.type}</span></div>
              <div><strong className="text-slate-900">Versión / Fecha:</strong> <span className="text-slate-600">v{previewResource.version} ({previewResource.date})</span></div>
              <div><strong className="text-slate-900">Público Destinatario:</strong> <span className="text-slate-600 uppercase font-semibold">{previewResource.audience}</span></div>
              <div><strong className="text-slate-900">Tema Principal:</strong> <span className="text-slate-600">{previewResource.theme}</span></div>
              {previewResource.legalBasis && (
                <div className="sm:col-span-2 pt-1 border-t border-slate-200/60">
                  <strong className="text-slate-900">Fundamento Legal:</strong> <span className="text-slate-600">{previewResource.legalBasis}</span>
                </div>
              )}
              {previewResource.officialSource && (
                <div className="sm:col-span-2">
                  <strong className="text-slate-900">Fuente Oficial:</strong> <span className="text-slate-600">{previewResource.officialSource}</span>
                </div>
              )}
            </div>

            {previewResource.keySections && previewResource.keySections.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">Contenido y Estructura del Documento:</h4>
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

            {previewResource.sampleStructure && (
              <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200 text-xs text-amber-950">
                <strong className="block font-bold mb-0.5 text-amber-900">Estructura de la Minuta / Formato:</strong>
                <span>{previewResource.sampleStructure}</span>
              </div>
            )}

            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => setPreviewResource(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
              >
                Cerrar
              </button>
              {previewResource.downloadable && (
                <button
                  onClick={() => {
                    const blob = new Blob([
                      `${previewResource.title}\n\nDescripción:\n${previewResource.description}\n\nFundamento Legal:\n${previewResource.legalBasis || 'N/A'}\n\nSecciones:\n${previewResource.keySections?.join('\n') || ''}\n\nEstructura:\n${previewResource.sampleStructure || ''}`
                    ], { type: 'text/plain;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${previewResource.id}.txt`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                    setPreviewResource(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Descargar Plantilla / Ficha</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
