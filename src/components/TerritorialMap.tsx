import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  TERRITORY_PACE,
  TerritoryPace,
  PACE_DIRECTORY_UPDATED_AT,
  PACE_DIRECTORY_SUMMARY,
} from '../data/territoryPace';
import {
  MapPin,
  Search,
  Phone,
  Mail,
  Clock,
  RotateCcw,
  List,
  LayoutGrid,
  Info,
  CheckCircle2,
  X,
  Building2,
  Map,
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

/**
 * Valida si una cadena de teléfono contiene dígitos útiles
 * y no consiste únicamente en ceros (como el caso de PACE-0019)
 * o separadores sin valor comunicativo.
 */
const isValidPhone = (phone?: string): boolean => {
  if (!phone) return false;
  const trimmed = phone.trim();
  if (!trimmed) return false;
  const digitsOnly = trimmed.replace(/\D/g, '');
  if (!digitsOnly || /^0+$/.test(digitsOnly)) return false;
  return true;
};

/**
 * Genera un enlace seguro tel: únicamente cuando el teléfono
 * representa una línea directa sencilla y confiable. Si contiene
 * múltiples líneas con plecas (|), extensiones u opciones complejas,
 * retorna null para evitar enlaces erróneos y conservar el texto original.
 */
const getCleanTelHref = (phone?: string): string | null => {
  if (!isValidPhone(phone) || !phone) return null;
  if (/[|/]/.test(phone) || /ext|opción|opcion/i.test(phone)) {
    return null;
  }
  const cleanDigits = phone.replace(/[^\d+]/g, '');
  return cleanDigits.length >= 7 ? `tel:${cleanDigits}` : null;
};

export const TerritorialMap: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('Todos los departamentos');
  const [selectedMun, setSelectedMun] = useState<string>('Todos los municipios');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');
  const [selectedPace, setSelectedPace] = useState<TerritoryPace | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const modalCloseBtnRef = useRef<HTMLButtonElement>(null);
  const lastActiveTriggerRef = useRef<HTMLElement | null>(null);

  // Departamentos únicos ordenados alfabéticamente en español
  const departmentOptions = useMemo(() => {
    const depts = Array.from(new Set(TERRITORY_PACE.map((p) => p.departamento))).sort((a, b) =>
      a.localeCompare(b, 'es')
    );
    return ['Todos los departamentos', ...depts];
  }, []);

  // Municipios únicos según el departamento seleccionado
  const municipalityOptions = useMemo(() => {
    let source = TERRITORY_PACE;
    if (selectedDept !== 'Todos los departamentos') {
      source = source.filter((p) => p.departamento === selectedDept);
    }
    const muns = Array.from(new Set(source.map((p) => p.municipio))).sort((a, b) =>
      a.localeCompare(b, 'es')
    );
    return ['Todos los municipios', ...muns];
  }, [selectedDept]);

  // Manejo del cambio de departamento con verificación de pertenencia del municipio
  const handleDeptChange = (newDept: string) => {
    setSelectedDept(newDept);
    if (newDept === 'Todos los departamentos') {
      // Municipio se mantiene o se restablece si no aplica
      return;
    }
    // Verificar si el municipio actualmente seleccionado pertenece al nuevo departamento
    const munsInNewDept = TERRITORY_PACE.filter((p) => p.departamento === newDept).map(
      (p) => p.municipio
    );
    if (selectedMun !== 'Todos los municipios' && !munsInNewDept.includes(selectedMun)) {
      setSelectedMun('Todos los municipios');
    }
  };

  // Filtrado reactivo con normalización Unicode insensible a tildes
  const filteredPaces = useMemo(() => {
    const normQuery = normalizeText(searchQuery.trim());

    return TERRITORY_PACE.filter((pace) => {
      const matchDept =
        selectedDept === 'Todos los departamentos' || pace.departamento === selectedDept;
      const matchMun =
        selectedMun === 'Todos los municipios' || pace.municipio === selectedMun;

      if (!matchDept || !matchMun) return false;

      if (!normQuery) return true;

      const searchableText = [
        pace.nombre,
        pace.direccion,
        pace.municipio,
        pace.departamento,
        pace.subregion || '',
        pace.codigoDivipola,
        isValidPhone(pace.telefono) ? pace.telefono || '' : '',
        pace.correo || '',
      ]
        .map(normalizeText)
        .join(' ');

      return searchableText.includes(normQuery);
    });
  }, [selectedDept, selectedMun, searchQuery]);

  const isFilterActive =
    searchQuery.trim() !== '' ||
    selectedDept !== 'Todos los departamentos' ||
    selectedMun !== 'Todos los municipios';

  const handleResetFilters = () => {
    setSelectedDept('Todos los departamentos');
    setSelectedMun('Todos los municipios');
    setSearchQuery('');
    searchInputRef.current?.focus();
  };

  const openPaceFicha = (pace: TerritoryPace, triggerElem?: HTMLElement) => {
    if (triggerElem) {
      lastActiveTriggerRef.current = triggerElem;
    }
    setSelectedPace(pace);
  };

  const closePaceFicha = () => {
    setSelectedPace(null);
    setTimeout(() => {
      lastActiveTriggerRef.current?.focus();
    }, 50);
  };

  // Manejo de accesibilidad para el modal (Escape y bloqueo de scroll)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedPace) {
        closePaceFicha();
      }
    };

    if (selectedPace) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        modalCloseBtnRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPace]);

  return (
    <div id="directorio-territorial-pace" className="my-8 font-sans space-y-6">
      {/* Contenedor Principal: Encabezado y Resumen Territorial */}
      <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-6">
        {/* Cabecera del Directorio */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-700">
              Directorio Territorial Oficial
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Puntos de Atención de la Conciliación en Equidad (PACE)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              Consulte las sedes activas autorizadas en Colombia donde la ciudadanía puede radicar
              solicitudes y celebrar audiencias de conciliación en equidad.
            </p>
          </div>

          {/* Selector de Vista: Tarjetas o Lista Accesible */}
          <div
            role="group"
            aria-label="Selector de tipo de vista"
            className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl self-start lg:self-center border border-slate-200 shrink-0"
          >
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              aria-pressed={viewMode === 'cards'}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-white text-blue-900 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Tarjetas</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              aria-pressed={viewMode === 'list'}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-white text-blue-900 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <List className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Lista Accesible</span>
            </button>
          </div>
        </div>

        {/* Resumen Territorial Dinámico (Indicadores Oficiales) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 border-t border-slate-100">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Sedes Activas
              </span>
              <strong className="text-base sm:text-lg font-black text-slate-900">
                {PACE_DIRECTORY_SUMMARY.total} puntos PACE
              </strong>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center shrink-0">
              <Map className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Cobertura Departamental
              </span>
              <strong className="text-base sm:text-lg font-black text-slate-900">
                {PACE_DIRECTORY_SUMMARY.departamentos} departamentos
              </strong>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-950 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Presencia Territorial
              </span>
              <strong className="text-base sm:text-lg font-black text-slate-900">
                {PACE_DIRECTORY_SUMMARY.municipios} municipios
              </strong>
            </div>
          </div>
        </div>

        {/* Precisión General de Gratuidad (Única y Sobria) */}
        <div className="p-3.5 bg-slate-50/90 border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed flex items-start gap-2.5">
          <Info className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            <strong className="text-slate-900 font-bold">Principio de Gratuidad: </strong>
            La atención y la labor de los conciliadores y conciliadoras en equidad son gratuitas. En
            determinados trámites pueden existir expensas o gastos operativos autorizados que no
            constituyen honorarios ni pagos al conciliador.
          </p>
        </div>

        {/* Controles de Filtros: Departamento, Municipio y Búsqueda */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          {/* Filtro: Departamento */}
          <div>
            <label
              htmlFor="filter-department"
              className="block text-xs font-bold text-slate-700 mb-1"
            >
              Departamento
            </label>
            <select
              id="filter-department"
              value={selectedDept}
              onChange={(e) => handleDeptChange(e.target.value)}
              className="w-full text-xs sm:text-sm rounded-xl border border-slate-300 p-2.5 bg-white text-slate-800 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-colors"
            >
              {departmentOptions.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro: Municipio */}
          <div>
            <label
              htmlFor="filter-municipality"
              className="block text-xs font-bold text-slate-700 mb-1"
            >
              Municipio
            </label>
            <select
              id="filter-municipality"
              value={selectedMun}
              onChange={(e) => setSelectedMun(e.target.value)}
              className="w-full text-xs sm:text-sm rounded-xl border border-slate-300 p-2.5 bg-white text-slate-800 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-colors"
            >
              {municipalityOptions.map((mun) => (
                <option key={mun} value={mun}>
                  {mun}
                </option>
              ))}
            </select>
          </div>

          {/* Búsqueda Rápida */}
          <div className="sm:col-span-2 lg:col-span-1">
            <label
              htmlFor="search-pace"
              className="block text-xs font-bold text-slate-700 mb-1"
            >
              Búsqueda rápida
            </label>
            <div className="relative">
              <Search
                className="w-4 h-4 text-slate-400 absolute left-3 top-3.5 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="search-pace"
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Nombre, dirección, municipio o teléfono..."
                autoComplete="off"
                className="w-full text-xs sm:text-sm rounded-xl border border-slate-300 p-2.5 pl-9 pr-9 bg-white text-slate-800 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    searchInputRef.current?.focus();
                  }}
                  aria-label="Limpiar campo de búsqueda"
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Barra de Contador, Limpiar Filtros y Nota de Actualización */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div
            aria-live="polite"
            aria-atomic="true"
            className="text-slate-700 font-semibold"
          >
            Mostrando <strong>{filteredPaces.length}</strong> de {PACE_DIRECTORY_SUMMARY.total} puntos PACE
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {isFilterActive && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold shadow-2xs transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-900"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                <span>Limpiar búsqueda y filtros</span>
              </button>
            )}

            <span className="text-slate-500 text-[11px]">
              Directorio actualizado con información validada al 6 de noviembre de 2026.
            </span>
          </div>
        </div>
      </div>

      {/* ÁREA DE CONTENIDO: Estado Sin Resultados o Visualización */}
      {filteredPaces.length === 0 ? (
        <div
          role="status"
          className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center space-y-4 shadow-xs"
        >
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-900 mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" aria-hidden="true" />
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-slate-900">
            No encontramos puntos PACE con esos criterios
          </h4>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Prueba con otro departamento, municipio o término de búsqueda.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
              <span>Ver todos los puntos PACE</span>
            </button>
          </div>
        </div>
      ) : viewMode === 'cards' ? (
        /* VISTA EN TARJETAS */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPaces.map((pace) => {
            const hasPhone = isValidPhone(pace.telefono);
            const telHref = hasPhone ? getCleanTelHref(pace.telefono) : null;
            const hasEmail = !!pace.correo && pace.correo.trim().length > 0;

            return (
              <div
                key={pace.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Encabezado: Estado y Ubicación territorial */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Activo
                    </span>

                    {pace.subregion && (
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded truncate max-w-[150px]">
                        {pace.subregion}
                      </span>
                    )}
                  </div>

                  {/* Nombre del punto de atención */}
                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {pace.nombre}
                  </h4>

                  {/* Ubicación: Municipio, Departamento */}
                  <div className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-700 shrink-0" aria-hidden="true" />
                    <span>
                      {pace.municipio}, {pace.departamento}
                    </span>
                  </div>

                  {/* Detalles Operativos y Canales de Contacto */}
                  <div className="space-y-2 text-xs text-slate-700 pt-1">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-slate-500 shrink-0">Dirección:</span>
                      <span className="text-slate-800 leading-relaxed">{pace.direccion}</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-slate-800 leading-relaxed">{pace.horario}</span>
                    </div>

                    {hasPhone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                        {telHref ? (
                          <a
                            href={telHref}
                            className="text-slate-800 hover:text-blue-900 hover:underline font-medium"
                            title={`Llamar al ${pace.telefono}`}
                          >
                            {pace.telefono}
                          </a>
                        ) : (
                          <span className="text-slate-800">{pace.telefono}</span>
                        )}
                      </div>
                    )}

                    {hasEmail && (
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                        <a
                          href={`mailto:${pace.correo}`}
                          className="text-blue-800 hover:underline break-all font-medium"
                          title={`Enviar correo a ${pace.correo}`}
                        >
                          {pace.correo}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Pie de Tarjeta con Botón de Ficha Detallada */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={(e) => openPaceFicha(pace, e.currentTarget)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-950 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-900"
                    aria-label={`Ver ficha oficial de ${pace.nombre}`}
                  >
                    <span>Ver ficha</span>
                    <Info className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* VISTA LISTA ACCESIBLE (TABLA CONTENIDA) */
        <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm text-slate-800 border-collapse min-w-[640px]">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase text-[11px] tracking-wider">
              <tr>
                <th scope="col" className="p-3.5">
                  Sede / Punto PACE
                </th>
                <th scope="col" className="p-3.5">
                  Ubicación
                </th>
                <th scope="col" className="p-3.5">
                  Dirección
                </th>
                <th scope="col" className="p-3.5">
                  Horario
                </th>
                <th scope="col" className="p-3.5">
                  Contacto
                </th>
                <th scope="col" className="p-3.5 text-right">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPaces.map((pace) => {
                const hasPhone = isValidPhone(pace.telefono);
                const telHref = hasPhone ? getCleanTelHref(pace.telefono) : null;
                const hasEmail = !!pace.correo && pace.correo.trim().length > 0;

                return (
                  <tr key={pace.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 font-bold text-slate-900">
                      {pace.nombre}
                      {pace.subregion && (
                        <div className="text-[11px] text-slate-500 font-normal">
                          Subregión: {pace.subregion}
                        </div>
                      )}
                    </td>
                    <td className="p-3.5">
                      <span className="font-semibold text-slate-800">{pace.municipio}</span>
                      <div className="text-[11px] text-slate-500">{pace.departamento}</div>
                    </td>
                    <td className="p-3.5 text-slate-800 max-w-xs">{pace.direccion}</td>
                    <td className="p-3.5 text-xs text-slate-700">{pace.horario}</td>
                    <td className="p-3.5 text-xs space-y-1">
                      {hasPhone && (
                        <div>
                          {telHref ? (
                            <a
                              href={telHref}
                              className="text-slate-800 hover:text-blue-900 hover:underline font-medium"
                            >
                              {pace.telefono}
                            </a>
                          ) : (
                            <span className="text-slate-800">{pace.telefono}</span>
                          )}
                        </div>
                      )}
                      {hasEmail && (
                        <div>
                          <a
                            href={`mailto:${pace.correo}`}
                            className="text-blue-800 hover:underline break-all"
                          >
                            {pace.correo}
                          </a>
                        </div>
                      )}
                      {!hasPhone && !hasEmail && (
                        <span className="text-slate-400 italic text-[11px]">
                          Atención presencial en sede
                        </span>
                      )}
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        type="button"
                        onClick={(e) => openPaceFicha(pace, e.currentTarget)}
                        className="px-2.5 py-1 text-xs bg-blue-50 text-blue-900 hover:bg-blue-100 rounded-md font-bold border border-blue-200 transition-colors cursor-pointer"
                        aria-label={`Ver ficha de ${pace.nombre}`}
                      >
                        Ver ficha
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* FICHA DETALLADA (MODAL ACCESIBLE) */}
      {selectedPace && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pace-modal-title"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closePaceFicha();
            }
          }}
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in duration-150 my-8">
            {/* Cabecera del modal */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Ficha Oficial del Punto de Atención
                  </span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Activo
                  </span>
                </div>
                <h3 id="pace-modal-title" className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {selectedPace.nombre}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {selectedPace.municipio}, {selectedPace.departamento}
                  {selectedPace.subregion ? ` • Subregión ${selectedPace.subregion}` : ''}
                </p>
              </div>

              <button
                ref={modalCloseBtnRef}
                type="button"
                onClick={closePaceFicha}
                aria-label="Cerrar ficha del punto de atención"
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Contenido detallado de la sede */}
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Dirección de Atención
                </span>
                <p className="font-semibold text-slate-900 leading-relaxed">
                  {selectedPace.direccion}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Días y Horarios de Atención
                </span>
                <p className="font-semibold text-slate-900 leading-relaxed">
                  {selectedPace.horario}
                </p>
              </div>

              {(isValidPhone(selectedPace.telefono) || selectedPace.correo) && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Canales de Contacto Oficial
                  </span>

                  {isValidPhone(selectedPace.telefono) && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                      {getCleanTelHref(selectedPace.telefono) ? (
                        <a
                          href={getCleanTelHref(selectedPace.telefono)!}
                          className="text-slate-900 hover:text-blue-900 hover:underline font-semibold"
                        >
                          {selectedPace.telefono}
                        </a>
                      ) : (
                        <span className="text-slate-900 font-semibold">{selectedPace.telefono}</span>
                      )}
                    </div>
                  )}

                  {selectedPace.correo && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                      <a
                        href={`mailto:${selectedPace.correo}`}
                        className="text-blue-800 hover:underline font-semibold break-all"
                      >
                        {selectedPace.correo}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Pie del modal */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-medium">
                Identificador: {selectedPace.id}
              </span>
              <button
                type="button"
                onClick={closePaceFicha}
                className="px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
              >
                Cerrar ficha
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
