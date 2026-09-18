import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp, BookOpen, ShieldCheck, FileDown, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface LayeredContentProps {
  id?: string;
  title: string;
  subtitle?: string;
  layer1Essential: React.ReactNode;
  layer2Expanded?: React.ReactNode;
  layer3Technical?: React.ReactNode;
  layer4Legal?: React.ReactNode;
  legalArticles?: string;
  defaultExpanded?: boolean;
}

export const LayeredContent: React.FC<LayeredContentProps> = ({
  id,
  title,
  subtitle,
  layer1Essential,
  layer2Expanded,
  layer3Technical,
  layer4Legal,
  legalArticles,
  defaultExpanded = false,
}) => {
  const { direction } = useTheme();
  const [activeLayer, setActiveLayer] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(defaultExpanded);

  const getBorderColor = () => {
    if (direction === 'comunitaria') return 'border-emerald-200 hover:border-emerald-300';
    if (direction === 'editorial') return 'border-amber-200 hover:border-amber-300';
    return 'border-blue-200 hover:border-blue-300';
  };

  const getHeaderBg = () => {
    if (direction === 'comunitaria') return 'bg-emerald-50/70 text-emerald-950';
    if (direction === 'editorial') return 'bg-amber-50/70 text-amber-950';
    return 'bg-blue-50/70 text-blue-950';
  };

  const getActivePill = (layerNum: number) => {
    if (activeLayer === layerNum) {
      if (direction === 'comunitaria') return 'bg-emerald-700 text-white font-semibold shadow-xs';
      if (direction === 'editorial') return 'bg-amber-800 text-white font-semibold shadow-xs';
      return 'bg-blue-900 text-white font-semibold shadow-xs';
    }
    return 'bg-slate-100 hover:bg-slate-200 text-slate-700';
  };

  return (
    <div id={id} className={`rounded-xl border bg-white overflow-hidden shadow-xs my-4 transition-all ${getBorderColor()}`}>
      {/* Header bar */}
      <div className={`p-4 sm:p-5 flex items-start justify-between gap-4 border-b border-slate-100 ${getHeaderBg()}`}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-white/90 text-slate-800 border border-slate-200">
              <Layers className="w-3 h-3 text-blue-600" />
              Contenido por capas
            </span>
            {legalArticles && (
              <span className="text-[11px] text-slate-600 font-mono bg-white/80 px-2 py-0.5 rounded border border-slate-200">
                {legalArticles}
              </span>
            )}
          </div>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">{title}</h3>
          {subtitle && <p className="text-sm text-slate-600 mt-0.5">{subtitle}</p>}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="shrink-0 p-2 rounded-lg bg-white/90 hover:bg-white text-slate-700 border border-slate-200 transition-colors flex items-center gap-1 text-xs font-medium"
          aria-expanded={isOpen}
        >
          <span>{isOpen ? 'Ocultar capas' : 'Profundizar'}</span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Main Essential View (Always visible or primary) */}
      <div className="p-5 sm:p-6 text-slate-800 leading-relaxed">
        <div className="prose prose-slate max-w-none text-base">
          {layer1Essential}
        </div>

        {/* Layer Selector Bar */}
        {isOpen && (
          <div className="mt-6 pt-5 border-t border-slate-100">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Nivel de profundización:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  onClick={() => setActiveLayer(1)}
                  className={`px-3 py-1 text-xs rounded-full transition-colors flex items-center gap-1 ${getActivePill(1)}`}
                >
                  <Sparkles className="w-3 h-3" />
                  Capa 1: Esencial
                </button>
                {layer2Expanded && (
                  <button
                    onClick={() => setActiveLayer(2)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors flex items-center gap-1 ${getActivePill(2)}`}
                  >
                    <BookOpen className="w-3 h-3" />
                    Capa 2: Explicación
                  </button>
                )}
                {layer3Technical && (
                  <button
                    onClick={() => setActiveLayer(3)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors flex items-center gap-1 ${getActivePill(3)}`}
                  >
                    <ShieldCheck className="w-3 h-3" />
                    Capa 3: Técnica
                  </button>
                )}
                {layer4Legal && (
                  <button
                    onClick={() => setActiveLayer(4)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors flex items-center gap-1 ${getActivePill(4)}`}
                  >
                    <FileDown className="w-3 h-3" />
                    Capa 4: Normativa & Modelos
                  </button>
                )}
              </div>
            </div>

            {/* Render selected layer content */}
            <div className="p-4 sm:p-5 rounded-lg bg-slate-50 border border-slate-200/80 transition-all">
              {activeLayer === 1 && (
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-2">Resumen clave para la ciudadanía:</div>
                  {layer1Essential}
                </div>
              )}
              {activeLayer === 2 && layer2Expanded && (
                <div>
                  <div className="text-xs font-semibold text-blue-800 mb-2">Explicación ampliada y ejemplos orientadores:</div>
                  {layer2Expanded}
                </div>
              )}
              {activeLayer === 3 && layer3Technical && (
                <div>
                  <div className="text-xs font-semibold text-purple-800 mb-2">Procedimiento técnico para operadores y secretarías:</div>
                  {layer3Technical}
                </div>
              )}
              {activeLayer === 4 && layer4Legal && (
                <div>
                  <div className="text-xs font-semibold text-emerald-800 mb-2">Sustento legal y documentos oficiales:</div>
                  {layer4Legal}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
