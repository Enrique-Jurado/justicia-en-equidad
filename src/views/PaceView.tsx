import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { TerritorialMap } from '../components/TerritorialMap';
import paceImage from '../assets/images/pace_casa_justicia_clean_1787610561858.jpg';
import {
  MapPin,
  Building,
  ShieldCheck,
  CheckCircle2,
  Accessibility,
  Lock,
  Calendar,
  Sparkles,
  FileText,
  AlertTriangle,
  Info
} from 'lucide-react';

export const PaceView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans">
      {/* Header Banner with Photography */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden text-white shadow-md grid grid-cols-1 lg:grid-cols-12 border border-blue-800">
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-3 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold w-fit">
            <MapPin className="w-4 h-4" />
            <span>Red Territorial de Atención</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Puntos de Atención de la Conciliación en Equidad (PACE)
          </h2>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
            Los PACE son los espacios físicos fijos o itinerantes donde los conciliadores en equidad atienden a las comunidades bajo la coordinación del PLJE de cada municipio.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs text-blue-200">
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Casas de Justicia</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Centros de Convivencia</span>
            <span className="bg-white/10 px-2.5 py-1 rounded-lg">Sedes Comunales Habilitadas</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full">
          <img
            src={paceImage}
            alt="Punto de Atención PACE y Centro de Convivencia en Colombia"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[10px] text-white font-medium px-2.5 py-1 rounded-md border border-white/10">
            Punto de Atención PACE Habilitado
          </div>
        </div>
      </div>

      {/* CONDICIONES MÍNIMAS DE UN PACE (ESTÁNDAR DE CALIDAD) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="max-w-2xl mb-8">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-700">Estándar de Calidad</span>
          <h3 className="text-2xl font-black text-slate-900">8 Condiciones Mínimas que debe cumplir un PACE</h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Requisitos obligatorios fijados por el Decreto 42 de 2026 para garantizar la dignidad y seguridad de las audiencias.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
              <Lock className="w-4 h-4" />
            </div>
            <strong className="text-slate-900 block font-bold text-sm">1. Privacidad Acústica</strong>
            <p className="text-slate-600">
              Espacio cerrado donde las conversaciones no sean escuchadas por terceros o transeúntes.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
              <Accessibility className="w-4 h-4" />
            </div>
            <strong className="text-slate-900 block font-bold text-sm">2. Accesibilidad Física</strong>
            <p className="text-slate-600">
              Ubicación preferiblemente en primer piso o con rampa y facilidades para personas con discapacidad.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <strong className="text-slate-900 block font-bold text-sm">3. Aviso de Gratuidad</strong>
            <p className="text-slate-600">
              Cartelera visible que informe a la ciudadanía que el servicio es 100% gratuito por ley.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
              <Calendar className="w-4 h-4" />
            </div>
            <strong className="text-slate-900 block font-bold text-sm">4. Horarios Publicados</strong>
            <p className="text-slate-600">
              Días de atención y turnos de conciliadores inscritos publicados y debidamente cumplidos.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <strong className="text-slate-900 block font-bold text-sm">5. Seguridad</strong>
            <p className="text-slate-600">
              Condiciones de iluminación, ventilación y protocolos de salida ante emergencias.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
              <Building className="w-4 h-4" />
            </div>
            <strong className="text-slate-900 block font-bold text-sm">6. Dotación Básica</strong>
            <p className="text-slate-600">
              Mesa redonda o neutral, sillas cómodas, papelería y formatos oficiales actualizados.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <strong className="text-slate-900 block font-bold text-sm">7. Archivo Seguro</strong>
            <p className="text-slate-600">
              Mueble o gaveta bajo llave para custodiar temporalmente las actas antes de su entrega al PLJE.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <strong className="text-slate-900 block font-bold text-sm">8. Operadores Inscritos</strong>
            <p className="text-slate-600">
              Solo pueden atender conciliadores con nombramiento judicial e inscripción vigente de 2 años.
            </p>
          </div>
        </div>
      </section>

      {/* EMBEDDED TERRITORIAL DIRECTORY & MAP */}
      <section>
        <TerritorialMap />
      </section>
    </div>
  );
};
