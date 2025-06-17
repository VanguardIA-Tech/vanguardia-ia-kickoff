
export const MetricsSection = () => {
  const metrics = [
    {
      indicator: "Horas poupadas por advogado",
      meta: "≥ 2 h/dia",
      measurement: "Timesheet + dashboard"
    },
    {
      indicator: "Taxa de adoção dos agentes", 
      meta: "≥ 70% usuários ativos semanais",
      measurement: "Logs GPT"
    },
    {
      indicator: "Precisão em pesquisas",
      meta: "+25% vs. linha-base",
      measurement: "Revisão amostral"
    }
  ];

  return (
    <section id="section-14" className="min-h-screen flex items-center justify-center section-snap bg-vanguardia-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="mono-text text-vanguardia-green text-xl tracking-wider mb-4 block">14 ·</span>
          <h2 className="heading-lg mb-8">Métricas de Sucesso</h2>
          <span className="bg-vanguardia-green/20 text-vanguardia-green px-4 py-2 rounded-full text-sm font-semibold">(top 3)</span>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-vanguardia-green/10 to-emerald-500/10 border border-vanguardia-green/30 rounded-xl p-8 animate-fade-up">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-vanguardia-green/30">
                    <th className="py-4 px-6 font-poppins font-bold text-vanguardia-green text-lg">Indicador</th>
                    <th className="py-4 px-6 font-poppins font-bold text-vanguardia-green text-lg">Meta 90 dias</th>
                    <th className="py-4 px-6 font-poppins font-bold text-vanguardia-green text-lg">Como medimos</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((metric, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors animate-slide-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <td className="py-4 px-6 font-semibold text-white">{metric.indicator}</td>
                      <td className="py-4 px-6 mono-text text-vanguardia-green font-bold text-lg">{metric.meta}</td>
                      <td className="py-4 px-6 text-gray-300">{metric.measurement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
