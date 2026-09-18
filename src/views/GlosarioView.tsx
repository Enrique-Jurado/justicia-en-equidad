import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { GLOSSARY_TERMS } from '../data/glossary';
import { GlossaryTerm } from '../types';
import conciliadoresImage from '../assets/images/glosario_pasillo_interactivo_1787607887409.jpg';
import {
  Scale,
  Search,
  BookOpen,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const GlosarioView: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>('TODOS');
  const [search, setSearch] = useState<string>('');

  const alphabet = ['TODOS', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'M', 'N', 'P', 'R', 'S', 'T'];

  const filtered = GLOSSARY_TERMS.filter((term) => {
    const matchesSearch =
      !search ||
      term.term.toLowerCase().includes(search.toLowerCase()) ||
      term.shortDef.toLowerCase().includes(search.toLowerCase()) ||
      term.fullDef.toLowerCase().includes(search.toLowerCase());

    const matchesLetter =
      selectedLetter === 'TODOS' ||
      term.term.toUpperCase().startsWith(selectedLetter);

    return matchesSearch && matchesLetter;
  });

  const languageSubstitutions = [
    { avoid: 'Sentencia / Fallo', recommend: 'Acuerdo / Acta de Conciliación', reason: 'En equidad no hay condena ni imposición judicial.' },
    { avoid: 'Demanda / Litigio', recommend: 'Solicitud / Diferencia o Conflicto', reason: 'El lenguaje debe ser cercano y desjudicializado.' },
    { avoid: 'Juez / Tribunal', recommend: 'Conciliador(a) en Equidad', reason: 'Diferencia el rol de facilitador comunitario.' },
    { avoid: 'Audiencia de juzgamiento', recommend: 'Espacio de diálogo / Audiencia de conciliación', reason: 'No se juzga ni se absuelve a nadie.' },
    { avoid: 'Honorarios / Tarifas', recommend: 'Servicio 100% Gratuito', reason: 'Protege la gratuidad consagrada en la ley.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans">
      {/* Header Banner with Photography */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden text-white shadow-md grid grid-cols-1 lg:grid-cols-12 border border-blue-800">
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-3 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold w-fit">
            <BookOpen className="w-4 h-4" />
            <span>Pedagogía y Lenguaje Accesible</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Glosario Institucional en Lenguaje Claro
          </h2>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
            Consulte el significado cotidiano y la precisión jurídica de los términos más utilizados en la Conciliación en Equidad.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs text-blue-200">
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Lenguaje Desjudicializado</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Filtro Alfabético</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Términos Clave Ley 2220</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full">
          <img
            src={conciliadoresImage}
            alt="Líderes y comunidad en pedagogía de lenguaje claro"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[10px] text-white font-medium px-2.5 py-1 rounded-md border border-white/10">
            Cultura de Claridad Ciudadana
          </div>
        </div>
      </div>

      {/* GUÍA DE LENGUAJE CLARO */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="max-w-2xl mb-6">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-700">Guía de Redacción y Pedagogía</span>
          <h3 className="text-2xl font-black text-slate-900">Términos que debemos Transformar en Lenguaje Claro</h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Para evitar que la ciudadanía perciba barreras burocráticas, recomendamos usar expresiones cercanas.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-800 border-collapse">
            <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase text-[11px]">
              <tr>
                <th className="p-3.5">Evitar en comunicación pública</th>
                <th className="p-3.5">Expresión Recomendada</th>
                <th className="p-3.5">Razón Comunicativa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {languageSubstitutions.map((sub, idx) => (
                <tr key={idx}>
                  <td className="p-3.5 text-rose-800 font-bold flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 shrink-0 text-rose-500" />
                    <span>{sub.avoid}</span>
                  </td>
                  <td className="p-3.5 text-emerald-900 font-bold">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                      <span>{sub.recommend}</span>
                    </div>
                  </td>
                  <td className="p-3.5 text-slate-600">{sub.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SEARCH AND ALPHABET BAR */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar término o definición (ej. mérito ejecutivo, acta, equidad, PACE, PLJE)..."
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 outline-none focus:border-blue-900 focus:bg-white transition-colors"
          />
        </div>

        <div className="flex items-center gap-1 overflow-x-auto pb-1 pt-2 border-t border-slate-100 text-xs scrollbar-none">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`w-9 h-9 rounded-lg font-bold shrink-0 transition-all flex items-center justify-center border ${
                selectedLetter === letter
                  ? 'bg-blue-900 text-white border-blue-900'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* TERMS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-blue-300 transition-all space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h4 className="font-bold text-lg text-blue-950">{item.term}</h4>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                {item.category}
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950">
                <strong className="block text-[11px] font-bold uppercase tracking-wider text-amber-900 mb-1">
                  En Lenguaje Claro (Para la Ciudadanía):
                </strong>
                <p className="leading-relaxed font-medium">{item.shortDef}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
                <strong className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Definición Técnica / Legal:
                </strong>
                <p className="leading-relaxed">{item.fullDef}</p>
              </div>

              {item.example && (
                <div className="text-xs text-slate-600 italic">
                  <strong>Ejemplo:</strong> "{item.example}"
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
