import React, { useState, useMemo } from 'react';
import { PLJE_STEPS, PljeStep } from '../data/pljeSteps';
import {
  CheckSquare,
  Square,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Printer,
  Sparkles,
  Building2,
  Calendar,
  Layers,
  RotateCcw,
  Check
} from 'lucide-react';

export const PljeInteractiveChecklist: React.FC = () => {
  // Initialize with some tasks checked in stage 1 by default
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({
    '1-0': true,
    '1-1': true,
    '1-2': true,
  });

  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>({
    1: true,
    2: true,
  });

  const [territoryName, setTerritoryName] = useState<string>('Municipio Ejemplo');

  // Total count of all tasks across all 10 steps
  const totalTasksCount = useMemo(() => {
    return PLJE_STEPS.reduce((sum, step) => sum + step.mandatoryTasks.length, 0);
  }, []);

  // Count of currently checked tasks
  const completedTasksCount = useMemo(() => {
    return Object.values(checkedTasks).filter(Boolean).length;
  }, [checkedTasks]);

  // Real-time progress percentage based on completed tasks
  const progressPercentage = useMemo(() => {
    if (totalTasksCount === 0) return 0;
    return Math.round((completedTasksCount / totalTasksCount) * 100);
  }, [completedTasksCount, totalTasksCount]);

  // Check if an entire stage is fully completed
  const isStageFullyCompleted = (stepNumber: number) => {
    const step = PLJE_STEPS.find((s) => s.stepNumber === stepNumber);
    if (!step) return false;
    return step.mandatoryTasks.every((_, idx) => checkedTasks[`${stepNumber}-${idx}`]);
  };

  // Count completed stages
  const completedStagesCount = useMemo(() => {
    return PLJE_STEPS.filter((s) => isStageFullyCompleted(s.stepNumber)).length;
  }, [checkedTasks]);

  // Toggle an individual task
  const toggleTask = (stepNumber: number, taskIdx: number) => {
    const key = `${stepNumber}-${taskIdx}`;
    setCheckedTasks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Toggle an entire stage (all tasks in that stage)
  const toggleStage = (stepNumber: number) => {
    const step = PLJE_STEPS.find((s) => s.stepNumber === stepNumber);
    if (!step) return;

    const isCurrentlyDone = isStageFullyCompleted(stepNumber);
    const newChecked = { ...checkedTasks };

    step.mandatoryTasks.forEach((_, idx) => {
      newChecked[`${stepNumber}-${idx}`] = !isCurrentlyDone;
    });

    setCheckedTasks(newChecked);
  };

  // Expand / collapse single step
  const toggleExpand = (stepNumber: number) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [stepNumber]: !prev[stepNumber],
    }));
  };

  // Expand all or collapse all
  const expandAll = (expand: boolean) => {
    const nextState: Record<number, boolean> = {};
    PLJE_STEPS.forEach((s) => {
      nextState[s.stepNumber] = expand;
    });
    setExpandedSteps(nextState);
  };

  // Reset checklist
  const resetChecklist = () => {
    setCheckedTasks({});
  };

  const handlePrint = () => {
    // Open print dialog
    window.print();
  };

  const currentDate = new Date().toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div
      id="checklist-interactivo-plje"
      className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 my-8 print:p-0 print:border-none print:shadow-none font-sans"
    >
      {/* EXCLUSIVE PRINT HEADER (Visible only when printing) */}
      <div className="hidden print:block border-b-2 border-slate-900 pb-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase font-black tracking-widest text-slate-700 block">
              República de Colombia • Ministerio de Justicia y del Derecho
            </span>
            <h1 className="text-2xl font-black text-slate-900 mt-1">
              Hoja de Ruta Gerencial de Implementación del PLJE (10 Pasos)
            </h1>
            <p className="text-xs text-slate-600 mt-1">
              Guía técnica y normativa para Alcaldías y Gobernaciones (Ley 2220 de 2022 y Decreto 42 de 2026)
            </p>
          </div>
          <div className="text-right border-l-2 border-slate-300 pl-4">
            <div className="text-xs font-bold text-slate-700">Entidad: <span className="font-normal">{territoryName || 'Sin especificar'}</span></div>
            <div className="text-xs font-bold text-slate-700">Fecha: <span className="font-normal">{currentDate}</span></div>
            <div className="text-xs font-bold text-blue-900 mt-1">
              Progreso Verificado: {progressPercentage}% ({completedStagesCount} de 10 etapas)
            </div>
          </div>
        </div>
      </div>

      {/* REGULAR WEB HEADER (Hidden in print) */}
      <div className="print:hidden flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-blue-700">
            Herramienta Gerencial de Gestión Pública
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            Lista de Verificación de Implementación del PLJE (10 Pasos)
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Basada en los lineamientos del Decreto 42 de 2026 y la Ley 2220 de 2022 para alcaldías y gobernaciones.
          </p>
        </div>

        {/* Real-time Progress Widget */}
        <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-2xl border border-slate-200">
          <div className="text-right">
            <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider block">
              Progreso Territorial
            </span>
            <span className="text-3xl font-black text-blue-900 leading-none">
              {progressPercentage} %
            </span>
          </div>
          <div className="w-24 sm:w-28 bg-slate-200 rounded-full h-3.5 overflow-hidden p-0.5">
            <div
              className="bg-emerald-600 h-full rounded-full transition-all duration-300 shadow-xs"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* TOOLBAR: Territory input and controls (Hidden in print) */}
      <div className="print:hidden bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label htmlFor="territory-input" className="font-bold text-slate-700 shrink-0">
            Territorio / Entidad:
          </label>
          <input
            id="territory-input"
            type="text"
            value={territoryName}
            onChange={(e) => setTerritoryName(e.target.value)}
            className="px-3 py-1.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold focus:outline-none focus:border-blue-900 w-full sm:w-64 text-xs sm:text-sm"
            placeholder="Nombre de su municipio o distrito"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end text-xs">
          <span className="text-slate-600 font-medium">
            <strong className="text-blue-900">{completedTasksCount}</strong> de {totalTasksCount} tareas • <strong className="text-emerald-800">{completedStagesCount}</strong> de 10 etapas
          </span>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => expandAll(true)}
              className="px-2.5 py-1 text-[11px] font-bold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100"
            >
              Expandir todo
            </button>
            <button
              onClick={() => expandAll(false)}
              className="px-2.5 py-1 text-[11px] font-bold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100"
            >
              Colapsar
            </button>
            <button
              onClick={resetChecklist}
              title="Reiniciar lista de verificación"
              className="p-1.5 text-slate-500 hover:text-rose-600 bg-white border border-slate-200 rounded-lg hover:bg-rose-50"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 10 STAGES LIST */}
      <div className="space-y-4">
        {PLJE_STEPS.map((step) => {
          const isDone = isStageFullyCompleted(step.stepNumber);
          const isExpanded = !!expandedSteps[step.stepNumber];

          // Count tasks completed in this specific step
          const stepCompletedTasks = step.mandatoryTasks.filter(
            (_, idx) => checkedTasks[`${step.stepNumber}-${idx}`]
          ).length;

          return (
            <div
              key={step.stepNumber}
              className={`rounded-2xl border transition-all print:border-slate-300 print:mb-4 print:break-inside-avoid ${
                isDone
                  ? 'border-emerald-300 bg-emerald-50/20'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              {/* Step Header */}
              <div className="p-4 sm:p-5 flex items-start sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-3">
                  {/* Stage Checkbox button */}
                  <button
                    onClick={() => toggleStage(step.stepNumber)}
                    className="mt-0.5 sm:mt-0 text-slate-400 hover:text-emerald-600 transition-colors shrink-0"
                    aria-label={`Marcar etapa ${step.stepNumber} como completada`}
                    title={isDone ? 'Desmarcar etapa' : 'Marcar etapa como completada'}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    ) : (
                      <Square className="w-6 h-6 text-slate-300 hover:text-slate-500" />
                    )}
                  </button>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 print:bg-slate-200">
                        Etapa {step.stepNumber}
                      </span>
                      <h4
                        className={`text-sm sm:text-base font-bold ${
                          isDone ? 'text-emerald-950 line-through decoration-emerald-500/50' : 'text-slate-900'
                        }`}
                      >
                        {step.title}
                      </h4>
                      <span className="text-[11px] font-medium text-slate-500 print:hidden">
                        ({stepCompletedTasks}/{step.mandatoryTasks.length} tareas)
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                      {step.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Dropdown toggle button (hidden in print, because print forces expansion) */}
                <button
                  onClick={() => toggleExpand(step.stepNumber)}
                  className="print:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 shrink-0"
                  aria-label={isExpanded ? 'Colapsar detalles' : 'Expandir detalles'}
                >
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Step Detail Content (Always visible in print, conditionally visible on screen) */}
              <div
                className={`p-5 border-t border-slate-100 bg-slate-50/70 text-xs sm:text-sm text-slate-800 space-y-4 print:bg-white print:border-t-slate-200 ${
                  isExpanded ? 'block' : 'hidden print:block'
                }`}
              >
                {/* 1. Objetivos específicos */}
                <div>
                  <strong className="block text-slate-900 mb-1.5 font-bold uppercase text-[11px] tracking-wider">
                    Objetivos específicos de la etapa:
                  </strong>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700 text-xs">
                    {step.detailedObjectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>

                {/* 2. Tareas obligatorias a verificar (Interactive checkboxes) */}
                <div>
                  <strong className="block text-slate-900 mb-1.5 font-bold uppercase text-[11px] tracking-wider">
                    Tareas obligatorias a verificar:
                  </strong>
                  <div className="space-y-2">
                    {step.mandatoryTasks.map((task, taskIdx) => {
                      const taskKey = `${step.stepNumber}-${taskIdx}`;
                      const isTaskChecked = !!checkedTasks[taskKey];

                      return (
                        <div
                          key={taskIdx}
                          onClick={() => toggleTask(step.stepNumber, taskIdx)}
                          className={`flex items-start gap-2.5 p-2.5 rounded-xl border cursor-pointer select-none transition-all ${
                            isTaskChecked
                              ? 'bg-emerald-50/60 border-emerald-300 text-emerald-950 font-medium'
                              : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <button
                            type="button"
                            className="mt-0.5 text-blue-600 shrink-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleTask(step.stepNumber, taskIdx);
                            }}
                          >
                            {isTaskChecked ? (
                              <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-400 shrink-0" />
                            )}
                          </button>
                          <span className={`text-xs ${isTaskChecked ? 'line-through decoration-emerald-500/40 text-emerald-900' : ''}`}>
                            {task}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Entregables y Riesgos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200">
                    <span className="font-bold text-emerald-900 block mb-1 text-[11px] uppercase tracking-wider">
                      Entregables esperados:
                    </span>
                    <ul className="list-disc pl-4 text-emerald-950 text-xs space-y-0.5">
                      {step.deliverables.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-200">
                    <span className="font-bold text-amber-900 block mb-1 text-[11px] uppercase tracking-wider">
                      Riesgo frecuente y prevención:
                    </span>
                    <p className="text-xs text-amber-950 mb-1">
                      <strong>Riesgo:</strong> {step.commonRisks}
                    </p>
                    <p className="text-xs text-amber-900">
                      <strong>Prevención:</strong> {step.preventionTip}
                    </p>
                  </div>
                </div>

                {/* 4. Actores clave y acción de estado */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200 flex-wrap gap-2">
                  <span>
                    <strong className="text-slate-700">Actores clave:</strong> {step.responsibleActors.join(' • ')}
                  </span>
                  <button
                    onClick={() => toggleStage(step.stepNumber)}
                    className="font-bold text-blue-900 hover:underline print:hidden"
                  >
                    {isDone ? 'Desmarcar toda la etapa' : 'Marcar todas las tareas de la etapa'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FOOTER ACTIONS (Hidden in print) */}
      <div className="print:hidden mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-500">
          ¿Tiene dudas en algún paso de la implementación? Escriba a{' '}
          <a
            href="mailto:conciliacionequidad@minjusticia.gov.co"
            className="text-blue-700 font-semibold underline"
          >
            conciliacionequidad@minjusticia.gov.co
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir Hoja de Ruta (Guía Completa)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
