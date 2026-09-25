import React, { useState, useRef, useMemo } from 'react';
import { GLOSSARY_TERMS } from '../data/glossary';
import conciliadoresImage from '../assets/images/glosario_pasillo_interactivo_1787607887409.jpg';
import {
  Scale,
  Search,
  BookOpen,
  CheckCircle2,
  XCircle,
  ArrowRight,
  X,
  RotateCcw
} from 'lucide-react';

/**
 * Normaliza cadenas de texto a minúsculas, descomponiendo caracteres
 * Unicode (NFD) y eliminando marcas diacríticas para comparaciones
 * insensibles a tildes y mayúsculas.
 */
const normalizeText = (text: string = ''): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

const getInitialLetter = (text: string = ''): string => {
  const clean = text.trim();
  if (clean.toUpperCase().startsWith('Ñ')) return 'Ñ';
  return normalizeText(clean[0] || '').toUpperCase();
};

const ALPHABET_LETTERS = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');

export const GlosarioView: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>('TODAS');
  const [search, setSearch] = useState<string>('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Conteo dinámico de términos por letra para determinar habilitación en el índice
  const termsCountByLetter = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const letter of ALPHABET_LETTERS) {
      counts[letter] = GLOSSARY_TERMS.filter((t) =>
        getInitialLetter(t.term) === letter
      ).length;
    }
    return counts;
  }, []);

  // Filtrado compuesto con normalización insensible a tildes
  const filtered = useMemo(() => {
    const normSearch = normalizeText(search.trim());

    return GLOSSARY_TERMS.filter((term) => {
      const matchesSearch =
        !normSearch ||
        normalizeText(term.term).includes(normSearch) ||
        normalizeText(term.shortDef).includes(normSearch) ||
        normalizeText(term.fullDef).includes(normSearch) ||
        normalizeText(term.category).includes(normSearch) ||
        normalizeText(term.normativeRef || '').includes(normSearch) ||
        normalizeText(term.example || '').includes(normSearch) ||
        normalizeText(term.avoidTerms || '').includes(normSearch) ||
        normalizeText(term.id).includes(normSearch) ||
        (term.aliases || []).some((alias) => normalizeText(alias).includes(normSearch)) ||
        (term.tags || []).some((tag) => normalizeText(tag).includes(normSearch)) ||
        (term.audience || []).some((aud) => normalizeText(aud).includes(normSearch)) ||
        (term.relatedTerms || []).some((rel) => normalizeText(rel).includes(normSearch));

      const matchesLetter =
        selectedLetter === 'TODAS' ||
        getInitialLetter(term.term) === selectedLetter;

      return matchesSearch && matchesLetter;
    });
  }, [search, selectedLetter]);

  // Manejador para restablecer todos los filtros y devolver el foco al buscador
  const handleResetFilters = () => {
    setSearch('');
    setSelectedLetter('TODAS');
    searchInputRef.current?.focus();
  };

  // Manejador interactivo para términos relacionados
  const handleRelatedTermClick = (relTerm: string) => {
    setSelectedLetter('TODAS');
    setSearch(relTerm);
    searchInputRef.current?.focus();
    searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const isFilterActive = search.trim() !== '' || selectedLetter !== 'TODAS';

  // Construcción del texto del contador de resultados
  const counterText = useMemo(() => {
    const count = filtered.length;
    const total = GLOSSARY_TERMS.length;

    if (!search.trim() && selectedLetter === 'TODAS') {
      return `Mostrando ${count} de ${total} términos`;
    }
    if (search.trim() && selectedLetter === 'TODAS') {
      return `Mostrando ${count} de ${total} términos para la búsqueda «${search}»`;
    }
    if (!search.trim() && selectedLetter !== 'TODAS') {
      return `Mostrando ${count} de ${total} términos que comienzan por «${selectedLetter}»`;
    }
    return `Mostrando ${count} de ${total} términos para la búsqueda «${search}» y la letra «${selectedLetter}»`;
  }, [filtered.length, search, selectedLetter]);

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
      <section
        aria-labelledby="glosario-main-heading"
        className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden text-white shadow-md grid grid-cols-1 lg:grid-cols-12 border border-blue-800"
      >
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-3 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold w-fit">
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            <span>Pedagogía y Lenguaje Accesible</span>
          </div>
          <h1
            id="glosario-main-heading"
            className="text-3xl sm:text-4xl font-black tracking-tight leading-tight"
          >
            Glosario Institucional en Lenguaje Claro
          </h1>
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
      </section>

      {/* GUÍA DE LENGUAJE CLARO */}
      <section
        aria-labelledby="lenguaje-claro-heading"
        className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs"
      >
        <div className="max-w-2xl mb-6">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-700">Guía de Redacción y Pedagogía</span>
          <h2 id="lenguaje-claro-heading" className="text-2xl font-black text-slate-900">
            Términos que debemos Transformar en Lenguaje Claro
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Para evitar que la ciudadanía perciba barreras burocráticas, recomendamos usar expresiones cercanas.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-800 border-collapse">
            <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase text-[11px]">
              <tr>
                <th scope="col" className="p-3.5">Evitar en comunicación pública</th>
                <th scope="col" className="p-3.5">Expresión Recomendada</th>
                <th scope="col" className="p-3.5">Razón Comunicativa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {languageSubstitutions.map((sub, idx) => (
                <tr key={idx}>
                  <td className="p-3.5 text-rose-800 font-bold flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 shrink-0 text-rose-500" aria-hidden="true" />
                    <span>{sub.avoid}</span>
                  </td>
                  <td className="p-3.5 text-emerald-900 font-bold">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" aria-hidden="true" />
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

      {/* CATÁLOGO DE TÉRMINOS CON BÚSQUEDA Y FILTRO */}
      <section aria-labelledby="catalogo-heading" className="space-y-6">
        <h2 id="catalogo-heading" className="sr-only">
          Catálogo interactivo de términos del glosario
        </h2>

        {/* SEARCH AND ALPHABET BAR */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
          {/* Buscador accesible */}
          <div>
            <label htmlFor="search-glossary" className="sr-only">
              Buscar en el glosario institucional
            </label>
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" aria-hidden="true" />
              <input
                id="search-glossary"
                ref={searchInputRef}
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoComplete="off"
                placeholder="Buscar término o definición (ej. mérito ejecutivo, acta, equidad, PACE, PLJE)..."
                aria-label="Buscar en el glosario institucional"
                className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 outline-none focus:border-blue-900 focus:bg-white focus:ring-2 focus:ring-blue-900/20 transition-colors"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch('');
                    searchInputRef.current?.focus();
                  }}
                  aria-label="Limpiar búsqueda"
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 focus:outline-hidden focus:ring-2 focus:ring-blue-900 rounded-sm cursor-pointer"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          {/* Índice alfabético completo dinámico */}
          <div className="space-y-2 pt-1 border-t border-slate-100">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Filtrar por letra inicial:
            </span>
            <div
              role="group"
              aria-label="Índice alfabético de términos"
              className="flex flex-wrap items-center gap-1 text-xs"
            >
              <button
                type="button"
                onClick={() => setSelectedLetter('TODAS')}
                aria-pressed={selectedLetter === 'TODAS' ? 'true' : 'false'}
                aria-label="Mostrar todos los términos"
                className={`px-3 h-8 sm:h-9 rounded-lg font-bold shrink-0 transition-all flex items-center justify-center border cursor-pointer ${
                  selectedLetter === 'TODAS'
                    ? 'bg-blue-900 text-white border-blue-900 shadow-2xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Todas
              </button>

              {ALPHABET_LETTERS.map((letter) => {
                const hasTerms = (termsCountByLetter[letter] || 0) > 0;
                const isSelected = selectedLetter === letter;

                return (
                  <button
                    key={letter}
                    type="button"
                    disabled={!hasTerms}
                    onClick={() => setSelectedLetter(letter)}
                    aria-pressed={isSelected ? 'true' : 'false'}
                    aria-label={
                      hasTerms
                        ? `Mostrar términos que comienzan por ${letter}`
                        : `Sin términos que comiencen por ${letter}`
                    }
                    className={`w-8 sm:w-9 h-8 sm:h-9 rounded-lg font-bold shrink-0 transition-all flex items-center justify-center border ${
                      isSelected
                        ? 'bg-blue-900 text-white border-blue-900 shadow-2xs'
                        : hasTerms
                          ? 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 cursor-pointer'
                          : 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200'
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Barra de contador y restablecimiento */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
            <div
              aria-live="polite"
              aria-atomic="true"
              className="text-xs sm:text-sm font-semibold text-slate-700"
            >
              {counterText}
            </div>

            {isFilterActive && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-2xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-900 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Limpiar búsqueda y filtros</span>
              </button>
            )}
          </div>
        </div>

        {/* ESTADO SIN RESULTADOS O LISTA DE TÉRMINOS */}
        {filtered.length === 0 ? (
          <div
            role="status"
            className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center space-y-4 shadow-xs"
          >
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-900 mx-auto flex items-center justify-center">
              <Search className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              No encontramos términos con esos criterios
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Prueba con otra palabra, revisa la ortografía o limpia los filtros para consultar todo el glosario.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                <span>Ver todos los términos</span>
              </button>
            </div>
          </div>
        ) : (
          <ul
            className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 m-0"
            aria-label="Términos del glosario institucional"
          >
            {filtered.map((item) => (
              <li
                key={item.id}
                id={`term-${item.id}`}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-blue-300 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Encabezado del término */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 gap-2">
                    <h3 id={`term-title-${item.id}`} className="font-bold text-lg text-blue-950 leading-snug">
                      {item.term}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded shrink-0">
                      {item.category}
                    </span>
                  </div>

                  {/* Definiciones principales */}
                  <div className="space-y-3 text-xs sm:text-sm">
                    {/* Lenguaje claro */}
                    <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950">
                      <strong className="block text-[11px] font-bold uppercase tracking-wider text-amber-900 mb-1">
                        En Lenguaje Claro (Para la Ciudadanía):
                      </strong>
                      <p className="leading-relaxed font-medium">{item.shortDef}</p>
                    </div>

                    {/* Definición legal o técnica */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
                      <strong className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Definición Técnica / Legal:
                      </strong>
                      <p className="leading-relaxed">{item.fullDef}</p>
                    </div>

                    {/* Ejemplo (cuando exista) */}
                    {item.example && (
                      <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 text-xs text-slate-700 space-y-1">
                        <strong className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                          Ejemplo:
                        </strong>
                        <p className="italic text-slate-700 leading-relaxed">
                          "{item.example}"
                        </p>
                      </div>
                    )}

                    {/* Expresiones a evitar (cuando existan) */}
                    {item.avoidTerms && (
                      <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/80 text-xs text-amber-950 space-y-1">
                        <strong className="block text-[11px] font-bold uppercase tracking-wider text-amber-900">
                          Para comunicar con mayor claridad:
                        </strong>
                        <p className="text-[11px] text-amber-800 leading-tight">
                          Evita expresiones que puedan generar confusión o reproducir un lenguaje excesivamente judicial.
                        </p>
                        <p className="font-semibold text-amber-950 pt-0.5">
                          {item.avoidTerms}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bloque complementario inferior: Cita normativa y Términos relacionados */}
                <div className="space-y-3 pt-2">
                  {/* Referencia normativa visible */}
                  {item.normativeRef && (
                    <div className="pt-2 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-600">
                      <Scale className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <span className="font-bold text-slate-700">Referencia normativa: </span>
                        <span className="text-slate-600">{item.normativeRef}</span>
                      </div>
                    </div>
                  )}

                  {/* Términos relacionados interactivos */}
                  {item.relatedTerms && item.relatedTerms.length > 0 && (
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Términos relacionados:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.relatedTerms.map((rel, rIdx) => (
                          <button
                            key={rIdx}
                            type="button"
                            onClick={() => handleRelatedTermClick(rel)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-900 border border-slate-200 hover:border-blue-200 text-xs font-medium transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-900"
                            title={`Filtrar por: ${rel}`}
                          >
                            <span>{rel}</span>
                            <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-blue-700" aria-hidden="true" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};
