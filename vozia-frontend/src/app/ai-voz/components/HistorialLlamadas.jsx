import React, { useState } from "react";
import { FiCalendar, FiClock, FiActivity, FiSmile, FiAlertCircle, FiChevronDown, FiChevronUp, FiTrash2 } from "react-icons/fi";

export default function HistorialLlamadas({ llamadas = [], alEliminar }) {
  const [llamadaExpandida, setLlamadaExpandida] = useState(null);

  const toggleExpandir = (id) => {
    setLlamadaExpandida(llamadaExpandida === id ? null : id);
  };

  const formatearFecha = (fechaStr) => {
    try {
      const fecha = new Date(fechaStr);
      return fecha.toLocaleString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return fechaStr;
    }
  };

  const obtenerColorSatisfaccion = (nivel) => {
    if (nivel >= 75) return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
    if (nivel >= 45) return "text-amber-400 bg-amber-500/10 border-amber-500/20";
    return "text-rose-400 bg-rose-500/10 border-rose-500/20";
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 mt-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
            <FiActivity className="text-cyan-400 animate-pulse" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Historial de Análisis</h3>
            <p className="text-xs text-slate-400">Últimas llamadas procesadas en esta sesión</p>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-slate-800 border border-white/5 rounded-full text-xs text-slate-300 font-mono">
          {llamadas.length} {llamadas.length === 1 ? "registro" : "registros"}
        </span>
      </div>

      {llamadas.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-slate-500 border border-dashed border-white/10 rounded-xl">
          <p className="text-sm">Aún no has analizado ninguna llamada en esta sesión.</p>
          <p className="text-xs mt-1 text-slate-600">Los resultados que proceses aparecerán listados aquí abajo.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {llamadas.map((llamada) => {
            const estaExpandido = llamadaExpandida === llamada.id;
            return (
              <div
                key={llamada.id}
                className={`rounded-xl border transition-all duration-300 ${
                  estaExpandido 
                    ? "border-cyan-500/30 bg-[#0B0F17]/80" 
                    : "border-white/5 bg-slate-950/40 hover:bg-slate-900/40"
                }`}
              >
                {/* Cabecera del item */}
                <div 
                  onClick={() => toggleExpandir(llamada.id)}
                  className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 w-2 h-2 rounded-full ${llamada.huboAlerta ? 'bg-rose-500 animate-ping' : 'bg-emerald-500'}`} />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                          <FiCalendar size={12} /> {formatearFecha(llamada.fecha)}
                        </span>
                        {llamada.huboAlerta && (
                          <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30 uppercase tracking-wide">
                            <FiAlertCircle size={10} /> Alerta Supervisor
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-slate-200 mt-1 line-clamp-1 max-w-md md:max-w-xl">
                        {llamada.resumen}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 ml-5 md:ml-0 self-end md:self-auto">
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-semibold ${obtenerColorSatisfaccion(llamada.satisfaccion)}`}>
                      <FiSmile size={14} />
                      <span>Satisfacción {llamada.satisfaccion}%</span>
                    </div>
                    <button className="text-slate-400 hover:text-white transition-colors">
                      {estaExpandido ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                    </button>
                  </div>
                </div>

                {/* Contenido expandido */}
                {estaExpandido && (
                  <div className="border-t border-white/5 p-4 bg-black/20 space-y-4 animate-fadeIn">
                    {/* Tarjeta de Métricas Promedio */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="bg-slate-900/60 p-3 rounded-lg border border-white/5">
                        <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Satisfacción</div>
                        <div className="text-lg font-bold text-emerald-400 mt-1">{llamada.metricasPromedio.satisfaccion}%</div>
                      </div>
                      <div className="bg-slate-900/60 p-3 rounded-lg border border-white/5">
                        <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Angustia</div>
                        <div className="text-lg font-bold text-rose-400 mt-1">{llamada.metricasPromedio.angustia}%</div>
                      </div>
                      <div className="bg-slate-900/60 p-3 rounded-lg border border-white/5">
                        <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Urgencia</div>
                        <div className="text-lg font-bold text-amber-400 mt-1">{llamada.metricasPromedio.urgencia}%</div>
                      </div>
                      <div className="bg-slate-900/60 p-3 rounded-lg border border-white/5">
                        <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Interés</div>
                        <div className="text-lg font-bold text-cyan-400 mt-1">{llamada.metricasPromedio.interes}%</div>
                      </div>
                    </div>

                    {/* Texto completo de la llamada */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Transcripción Completa</h4>
                      <div className="bg-slate-950/80 p-3.5 rounded-lg border border-white/5 max-h-40 overflow-y-auto text-xs text-slate-300 leading-relaxed whitespace-pre-wrap font-mono">
                        {llamada.textoCompleto}
                      </div>
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
}
