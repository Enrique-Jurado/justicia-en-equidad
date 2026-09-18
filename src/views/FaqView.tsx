import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FAQS_DATA } from '../data/faqs';
import { FaqItem } from '../types';
import heroImage from '../assets/images/multimedia_video_poster_1787180280602.jpg';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  BookOpen,
  CheckCircle2,
  FileText
} from 'lucide-react';

export const FaqView: React.FC = () => {
  const { termQuery, setTermQuery } = useTheme();
  const [selectedCat, setSelectedCat] = useState<string>('todos');
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [feedbackGiven, setFeedbackGiven] = useState<{ [key: number]: 'yes' | 'no' }>({});

  const categories = [
    { id: 'todos', label: 'Todas las preguntas' },
    { id: 'Conceptos básicos', label: 'Conceptos básicos' },
    { id: 'Competencias y asuntos', label: '¿Qué se puede conciliar?' },
    { id: 'Procedimiento y trámite', label: 'Trámite y audiencias' },
    { id: 'Efectos legales', label: 'Efectos y mérito ejecutivo' },
    { id: 'PLJE y Municipios', label: 'Alcaldías y PLJE' },
    { id: 'Conciliadores y voluntariado', label: 'Conciliadores y ética' },
    { id: 'Infraestructura PACE', label: 'Puntos PACE' },
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleFeedback = (id: number, type: 'yes' | 'no') => {
    setFeedbackGiven({ ...feedbackGiven, [id]: type });
  };

  const filteredFaqs = FAQS_DATA.filter((f) => {
    const qLower = termQuery.toLowerCase();
    const matchesSearch =
      !termQuery ||
      f.question.toLowerCase().includes(qLower) ||
      f.shortAnswer.toLowerCase().includes(qLower) ||
      f.fullAnswer.toLowerCase().includes(qLower) ||
      (f.tags && f.tags.some((k) => k.toLowerCase().includes(qLower)));

    const matchesCat = selectedCat === 'todos' || f.category === selectedCat;

    return matchesSearch && matchesCat;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans">
      {/* Header Banner with Photography */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden text-white shadow-md grid grid-cols-1 lg:grid-cols-12 border border-blue-800">
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-3 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold w-fit">
            <HelpCircle className="w-4 h-4" />
            <span>Banco Oficial de Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Banco de Respuestas a Inquietudes
          </h2>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
            Respuestas categorizadas a las inquietudes más comunes de la ciudadanía, conciliadores, alcaldías y autoridades judiciales.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs text-blue-200">
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">8 Categorías Clave</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Búsqueda Rápida</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Sustento en Ley 2220</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full">
          <img
            src={heroImage}
            alt="Diálogo ciudadano y resolución de inquietudes sobre conciliación"
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
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={termQuery}
            onChange={(e) => setTermQuery(e.target.value)}
            placeholder="Escriba su pregunta o palabra clave (ej. arriendo, deudas, cobros, acta, plazos, juez)..."
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 outline-none focus:border-blue-900 focus:bg-white transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 border-t border-slate-100 text-xs scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCat(c.id)}
              className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-all border ${
                selectedCat === c.id
                  ? 'bg-blue-900 text-white border-blue-900'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* FAQS ACCORDION */}
      <div className="space-y-4">
        <div className="text-xs text-slate-500 font-semibold px-2">
          Mostrando {filteredFaqs.length} preguntas encontradas
        </div>

        {filteredFaqs.map((faq) => {
          const isOpen = openFaq === faq.id;
          const feedback = feedbackGiven[faq.id];

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
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-blue-900 uppercase text-[10px] bg-blue-50 px-2 py-0.5 rounded">
                      {faq.category}
                    </span>
                    {faq.normativeRef && (
                      <span className="text-slate-400 font-mono text-[11px]">
                        Ref: {faq.normativeRef}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <div className="mt-1 p-1 rounded-lg bg-slate-100 text-slate-600">
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-blue-950 font-medium">
                    <strong className="text-blue-900 font-bold block mb-1">Respuesta Clave en Lenguaje Claro:</strong>
                    {faq.shortAnswer}
                  </div>

                  <div className="space-y-2 text-slate-600 leading-relaxed">
                    <p>{faq.fullAnswer}</p>
                  </div>

                  {/* Feedback widget */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <span className="text-slate-500 font-medium">¿Le resultó útil esta respuesta?</span>
                    {feedback ? (
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        ¡Gracias por su retroalimentación!
                      </span>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleFeedback(faq.id, 'yes')}
                          className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 font-semibold flex items-center gap-1.5 transition-colors"
                        >
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span>Sí</span>
                        </button>
                        <button
                          onClick={() => handleFeedback(faq.id, 'no')}
                          className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-700 font-semibold flex items-center gap-1.5 transition-colors"
                        >
                          <ThumbsDown className="w-3.5 h-3.5" />
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
    </div>
  );
};
