import React, { useState, useMemo } from 'react';
import { PACE_LOCATIONS, COLOMBIA_DEPARTMENTS } from '../data/territoryPace';
import { PaceLocation } from '../types';
import { MapPin, Search, Phone, Mail, Clock, Accessibility, Calendar, Filter, List, Map as MapIcon, Info, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const TerritorialMap: React.FC = () => {
  const { direction } = useTheme();
  const [selectedDept, setSelectedDept] = useState<string>('Todos los departamentos');
  const [selectedType, setSelectedType] = useState<string>('todos');
  const [accessibleOnly, setAccessibleOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');
  const [selectedPace, setSelectedPace] = useState<PaceLocation | null>(null);

  const filteredPaces = useMemo(() => {
    return PACE_LOCATIONS.filter((item) => {
      const matchDept = selectedDept === 'Todos los departamentos' || item.department === selectedDept;
      const matchType = selectedType === 'todos' || item.type === selectedType;
      const matchAccess = !accessibleOnly || item.accessible;
      const matchSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.municipality.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.address.toLowerCase().includes(searchQuery.toLowerCase());

      return matchDept && matchType && matchAccess && matchSearch;
    });
  }, [selectedDept, selectedType, accessibleOnly, searchQuery]);

  return (
    <div id="directorio-territorial-pace" className="my-8">
      {/* Header with Search and Filters */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-blue-700">Directorio Territorial Oficial</span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Puntos de Atención de la Conciliación en Equidad (PACE) y Espacios de Justicia
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Consulte los espacios fijos e itinerantes, Casas de Justicia y Centros de Convivencia autorizados en Colombia.
            </p>
          </div>

          {/* Toggle Cards / List View */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start lg:self-center border border-slate-200">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'cards' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              aria-label="Vista en tarjetas"
            >
              <MapIcon className="w-3.5 h-3.5" />
              <span>Tarjetas</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'list' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              aria-label="Vista accesible en tabla"
            >
              <List className="w-3.5 h-3.5" />
              <span>Lista Accesible</span>
            </button>
          </div>
        </div>

        {/* Filter controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {/* Department */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Departamento</label>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full text-xs sm:text-sm rounded-lg border border-slate-300 p-2.5 bg-white text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {COLOMBIA_DEPARTMENTS.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Space Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Tipo de Espacio</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full text-xs sm:text-sm rounded-lg border border-slate-300 p-2.5 bg-white text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="todos">Todos los tipos</option>
              <option value="PACE Fijo">PACE Fijo (Barrial / Comunal)</option>
              <option value="PACE Itinerante">PACE Itinerante (Rural / Veredal)</option>
              <option value="Casa de Justicia">Casa de Justicia</option>
              <option value="Centro de Convivencia">Centro de Convivencia Ciudadana</option>
            </select>
          </div>

          {/* Search by name/address */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Búsqueda rápida</label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ej. Kennedy, Bello, Aguablanca..."
                className="w-full text-xs sm:text-sm rounded-lg border border-slate-300 p-2.5 pl-8 bg-white text-slate-800 focus:ring-2 focus:ring-blue-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-3" />
            </div>
          </div>

          {/* Accessibility toggle */}
          <div className="flex items-end">
            <label className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 text-xs w-full cursor-pointer hover:bg-slate-100 transition-colors">
              <input
                type="checkbox"
                checked={accessibleOnly}
                onChange={(e) => setAccessibleOnly(e.target.checked)}
                className="rounded border-slate-300 text-blue-900 focus:ring-blue-500"
              />
              <Accessibility className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Solo espacios con rampa / accesibilidad</span>
            </label>
          </div>
        </div>

        {/* Results summary counter */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
          <span>
            Mostrando <strong>{filteredPaces.length}</strong> punto(s) de atención verificados
          </span>
          {(selectedDept !== 'Todos los departamentos' || selectedType !== 'todos' || searchQuery || accessibleOnly) && (
            <button
              onClick={() => {
                setSelectedDept('Todos los departamentos');
                setSelectedType('todos');
                setSearchQuery('');
                setAccessibleOnly(false);
              }}
              className="text-blue-700 hover:underline font-medium"
            >
              Restablecer filtros
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area: Cards or Accessible List */}
      {viewMode === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPaces.map((pace) => {
            const isItinerant = pace.type === 'PACE Itinerante';
            const isCasa = pace.type === 'Casa de Justicia';

            return (
              <div
                key={pace.id}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Type */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                        isItinerant
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : isCasa
                          ? 'bg-blue-50 text-blue-900 border-blue-200'
                          : 'bg-emerald-50 text-emerald-900 border-emerald-200'
                      }`}
                    >
                      {pace.type}
                    </span>

                    <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {pace.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-1 leading-snug">{pace.name}</h4>
                  <div className="text-xs text-slate-500 mb-3 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{pace.municipality}, {pace.department}</span>
                  </div>

                  {/* Details list */}
                  <div className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-3">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-slate-500 shrink-0">Dirección:</span>
                      <span className="text-slate-800">{pace.address}</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-slate-800">{pace.schedule}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="text-slate-800">{pace.phone}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="text-slate-700 truncate">{pace.email}</span>
                    </div>
                  </div>
                </div>

                {/* Footer of card */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {pace.accessible && (
                      <span className="inline-flex items-center gap-1 text-[10px] bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded border border-blue-200" title="Acceso sin barreras físicas">
                        <Accessibility className="w-3 h-3" /> Accesible
                      </span>
                    )}
                    <span className="text-[10px] text-slate-500">
                      {pace.activeConciliators} conciliadores
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedPace(pace)}
                    className="text-xs font-semibold text-blue-800 hover:text-blue-950 flex items-center gap-1"
                  >
                    <span>Ver ficha</span>
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Accessible List / Table View */
        <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm text-slate-800 border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="p-3.5">Espacio / PACE</th>
                <th className="p-3.5">Ubicación</th>
                <th className="p-3.5">Tipo</th>
                <th className="p-3.5">Horario</th>
                <th className="p-3.5">Contacto</th>
                <th className="p-3.5 text-center">Accesibilidad</th>
                <th className="p-3.5 text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPaces.map((pace) => (
                <tr key={pace.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900">
                    {pace.name}
                    <div className="text-[11px] text-slate-500 font-normal">{pace.address}</div>
                  </td>
                  <td className="p-3.5">
                    {pace.municipality}
                    <div className="text-[11px] text-slate-500">{pace.department}</div>
                  </td>
                  <td className="p-3.5">
                    <span className="px-2 py-0.5 rounded text-xs bg-slate-100 border border-slate-200 text-slate-800">
                      {pace.type}
                    </span>
                  </td>
                  <td className="p-3.5 text-xs text-slate-700">{pace.schedule}</td>
                  <td className="p-3.5 text-xs">
                    <div>{pace.phone}</div>
                    <div className="text-slate-500 truncate max-w-[140px]">{pace.email}</div>
                  </td>
                  <td className="p-3.5 text-center">
                    {pace.accessible ? (
                      <span className="text-emerald-700 font-semibold flex items-center justify-center gap-1 text-xs">
                        <CheckCircle2 className="w-4 h-4" /> Sí
                      </span>
                    ) : (
                      <span className="text-slate-400 text-xs">Parcial</span>
                    )}
                  </td>
                  <td className="p-3.5 text-right">
                    <button
                      onClick={() => setSelectedPace(pace)}
                      className="px-2.5 py-1 text-xs bg-blue-50 text-blue-900 hover:bg-blue-100 rounded-md font-semibold border border-blue-200"
                    >
                      Ficha
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal with detailed PACE ficha */}
      {selectedPace && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-150">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Ficha Oficial del Punto de Atención
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedPace.name}</h3>
                <p className="text-xs text-slate-500">{selectedPace.municipality}, {selectedPace.department}</p>
              </div>
              <button
                onClick={() => setSelectedPace(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div>
                  <span className="font-semibold text-slate-500 block text-[11px]">Tipo de espacio:</span>
                  <span className="font-medium text-slate-900">{selectedPace.type}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block text-[11px]">Modalidad de atención:</span>
                  <span className="font-medium text-slate-900">{selectedPace.modality}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block text-[11px]">Conciliadores asignados:</span>
                  <span className="font-medium text-slate-900">{selectedPace.activeConciliators} operadores habilitados</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block text-[11px]">Accesibilidad física:</span>
                  <span className="font-medium text-slate-900">{selectedPace.accessible ? '✓ Rampa / Espacio accesible' : 'En proceso de adecuación'}</span>
                </div>
              </div>

              <div>
                <strong className="block text-slate-900 mb-0.5">Dirección exacta:</strong>
                <p>{selectedPace.address}</p>
              </div>

              <div>
                <strong className="block text-slate-900 mb-0.5">Días y horario de atención:</strong>
                <p>{selectedPace.schedule}</p>
              </div>

              <div>
                <strong className="block text-slate-900 mb-0.5">Canales de contacto institucional:</strong>
                <p>Teléfono: {selectedPace.phone} • Correo: {selectedPace.email}</p>
              </div>

              {selectedPace.notes && (
                <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-lg text-xs text-blue-950">
                  <strong>Detalles operativos:</strong> {selectedPace.notes}
                </div>
              )}

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  <strong>Servicio 100% Gratuito:</strong> Ningún conciliador ni funcionario de este PACE puede cobrar tarifas por la atención.
                </span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedPace(null)}
                className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs"
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
