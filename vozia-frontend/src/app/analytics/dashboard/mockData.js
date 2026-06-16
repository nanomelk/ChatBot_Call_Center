export const mockDashboardData = {
  KPIGrid: [
    {
      title: "Llamadas Totales",
      value: "1,482",
      growth: "+14.3%",
      description: "Llamadas atendidas hoy"
    },
    {
      title: "Nivel de Urgencia",
      value: "Media",
      growth: "realtime",
      description: "Estado crítico del Call Center"
    },
    {
      title: "Satisfacción Promedio",
      value: "84.5%",
      growth: "+5.2%",
      description: "Basado en análisis emocional"
    },
    {
      title: "Tiempo de Resolución",
      value: "3m 45s",
      growth: "-18.4%",
      description: "Tiempo promedio por llamada"
    }
  ],
  RevenueChart: [
    { month: "Ene", revenue: 3800 },
    { month: "Feb", revenue: 4200 },
    { month: "Mar", revenue: 4700 },
    { month: "Abr", revenue: 5900 },
    { month: "May", revenue: 6800 },
    { month: "Jun", revenue: 8400 }
  ],
  AIInsights: [
    { text: "Se detectó un incremento del 15% en frustración del cliente por demoras en facturación." },
    { text: "Los agentes que aplican la guía de empatía del Copiloto cierran casos un 22% más rápido." },
    { text: "La urgencia general ha bajado a nivel medio debido a la resolución ágil de colas de espera." }
  ],
  TopProducts: [
    { name: "Soporte Técnico de Red", sales: "542 llamadas", growth: "+15.8%" },
    { name: "Reclamos y Devoluciones", sales: "392 llamadas", growth: "-8.4%" },
    { name: "Actualización de Planes", sales: "218 llamadas", growth: "+12.1%" }
  ],
  SalesTarget: {
    progress: 74
  },
  ActivityFeed: [
    { title: "Cliente molesto fidelizado con éxito (Agente 03)", time: "Hace 2 min" },
    { title: "Alerta de urgencia escalada a supervisor (Llamada #948)", time: "Hace 10 min" },
    { title: "Agente 14 completó la guía de retención comercial", time: "Hace 14 min" },
    { title: "Llamada finalizada con 95% de satisfacción (Llamada #946)", time: "Hace 20 min" }
  ]
};
