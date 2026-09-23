import React, { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FAQS_DATA } from '../data/faqs';
import heroImage from '../assets/images/multimedia_video_poster_1787180280602.jpg';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  ThumbsUp,
  ThumbsDown,
  CheckCircle2,
  X,
  RotateCcw
} from 'lucide-react';

const normalizeText = (text: string): string =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

export const FaqView: React.FC = () => {
  const { termQuery, setTermQuery } = useTheme();
  const [selectedCat, setSelectedCat] = useState<string>('todos');
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [feedbackGiven, setFeedbackGiven] = useState<{ [key: number]: 'yes' | 'no' }>({});

  // Dynamic categories ordered by their first appearance in FAQS_DATA
  const categories = useMemo(() => {
    const uniqueCats = Array.from(new Set(FAQS_DATA.map((item) => item.category)));
    return [
      { id: 'todos', label: 'Todas las preguntas', count: FAQS_DATA.length },
      ...uniqueCats.map((cat) => ({
        id: cat,
        label: cat,
        count: FAQS_DATA.filter((item) => item.category === cat).length,
      })),
    ];
  }, []);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleFeedback = (id: number, type: 'yes' | 'no') => {
    setFeedbackGiven((prev) => ({ ...prev, [id]: type }));
  };

  const handleClearAll = () => {
    setTermQuery('');
    setSelectedCat('todos');
  };

  const qNorm = normalizeText(termQuery.trim());

  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((f) => {
      const matchesSearch =
        !qNorm ||
        normalizeText(f.question).includes(qNorm) ||
        normalizeText(f.shortAnswer).includes(qNorm) ||
        normalizeText(f.fullAnswer).includes(qNorm) ||
        normalizeText(f.category).includes(qNorm) ||
        (f.normativeRef && normalizeText(f.normativeRef).includes(qNorm)) ||
        (f.tags && f.tags.some((tag) => normalizeText(tag).includes(qNorm)));

      const matchesCat = selectedCat === 'todos' || f.category === selectedCat;

      return matchesSearch && matchesCat;
    });
  }, [qNorm, selectedCat]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 font-sans">
      {/* Header Banner with Photography */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden text-white shadow-md grid grid-cols-1 lg:grid-cols-12 border border-blue-800">
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-3 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold w-fit">
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            <span>Banco de Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Banco de Respuestas a Inquietudes
          </h2>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
            Orientación pedagógica y respuestas categorizadas a las inquietudes más comunes de la ciudadanía, conciliadores en equidad, alcaldías y actores aliados.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs text-blue-200">
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">14 Categorías Clave</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">{FAQS_DATA.length} Preguntas Orientadoras</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Sustento en Ley 2220 y Decreto 42</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full">
          <img
            src={heroImage}
            alt="Diálogo ciudadano y orientación comunitaria sobre conciliación en equidad"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[10px] text-white font-medium px-2.5 py-1 rounded-md border border-white/10">
            Orientación Pedagógica Inmediata
          </div>
        </div>
      </div>

      {/* SEARCH AND CATEGORIES */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none" aria-hidden="true" />
          <input
            type="text"
            value={termQuery}
            onChange={(e) => setTermQuery(e.target.value)}
            placeholder="Escriba su pregunta o palabra clave (ej. arriendo, deudas, cobros, acta, plazos, juez, requisitos)..."
            aria-label="Buscar en preguntas frecuentes"
            className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 outline-none focus:border-blue-900 focus:bg-white focus-visible:ring-2 focus-visible:ring-blue-900 transition-colors"
          />
          {termQuery && (
            <button
              type="button"
              onClick={() => setTermQuery('')}
              aria-label="Borrar texto de búsqueda"
              className="absolute right-3 p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Dynamic Category Filter Pills */}
        <div
          role="toolbar"
          aria-label="Filtrar por categoría"
          className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100 text-xs"
        >
          {categories.map((c) => {
            const isSelected = selectedCat === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCat(c.id)}
                aria-pressed={isSelected}
                className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-all border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 ${
                  isSelected
                    ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {c.label} ({c.count})
              </button>
            );
          })}
        </div>
      </div>

      {/* RESULTS HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-2 text-xs text-slate-600">
        <div className="font-semibold">
          Mostrando <span className="font-bold text-slate-900">{filteredFaqs.length}</span> de {FAQS_DATA.length} preguntas
          {selectedCat !== 'todos' && (
            <span> en categoría <strong className="text-blue-900">&ldquo;{selectedCat}&rdquo;</strong></span>
          )}
          {termQuery.trim() && (
            <span> para la búsqueda <strong className="text-blue-900">&ldquo;{termQuery.trim()}&rdquo;</strong></span>
          )}
        </div>

        {(termQuery.trim() || selectedCat !== 'todos') && (
          <button
            type="button"
            onClick={handleClearAll}
            className="inline-flex items-center gap-1.5 text-blue-900 hover:text-blue-700 font-semibold underline underline-offset-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Limpiar búsqueda y filtros</span>
          </button>
        )}
      </div>

      {/* FAQS ACCORDION OR EMPTY STATE */}
      {filteredFaqs.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              No se encontraron preguntas que coincidan
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              No encontramos resultados para{' '}
              {termQuery.trim() && (
                <span className="font-semibold text-slate-800">
                  el término &ldquo;{termQuery.trim()}&rdquo;
                </span>
              )}
              {termQuery.trim() && selectedCat !== 'todos' && ' en '}
              {selectedCat !== 'todos' && (
                <span className="font-semibold text-slate-800">
                  la categoría &ldquo;{selectedCat}&rdquo;
                </span>
              )}
              . Pruebe con términos más generales o explore todas las preguntas.
            </p>
          </div>
          <button
            type="button"
            onClick={handleClearAll}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-900 text-white text-sm font-semibold hover:bg-blue-800 focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:outline-none transition-colors cursor-pointer shadow-xs"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            <span>Limpiar búsqueda y filtros</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            const feedback = feedbackGiven[faq.id];
            const btnId = `faq-btn-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-blue-900 shadow-sm ring-1 ring-blue-900/10'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-inset"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-bold text-blue-900 uppercase text-[10px] bg-blue-50 px-2 py-0.5 rounded">
                        {faq.category}
                      </span>
                      {faq.normativeRef && (
                        <span className="text-slate-500 font-mono text-[11px]">
                          Ref: {faq.normativeRef}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="mt-1 p-1 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-5 h-5" aria-hidden="true" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 space-y-4 text-xs sm:text-sm text-slate-700"
                  >
                    <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-blue-950 font-medium">
                      <strong className="text-blue-900 font-bold block mb-1">
                        Respuesta Clave en Lenguaje Claro:
                      </strong>
                      <p>{faq.shortAnswer}</p>
                    </div>

                    <div className="space-y-2 text-slate-700 leading-relaxed">
                      <p>{faq.fullAnswer}</p>
                    </div>

                    {/* Feedback widget */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <span className="text-slate-500 font-medium">
                        ¿Le resultó útil esta respuesta?
                      </span>
                      {feedback ? (
                        <span className="text-emerald-700 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                          ¡Gracias por su retroalimentación!
                        </span>
                      ) : (
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleFeedback(faq.id, 'yes')}
                            aria-label={`Marcar respuesta como útil para: ${faq.question}`}
                            className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900"
                          >
                            <ThumbsUp className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Sí</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleFeedback(faq.id, 'no')}
                            aria-label={`Marcar respuesta como no útil para: ${faq.question}`}
                            className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-700 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900"
                          >
                            <ThumbsDown className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>No</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
