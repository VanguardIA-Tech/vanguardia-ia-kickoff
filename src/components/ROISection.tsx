
export const ROISection = () => {
  const metrics = [
    {
      value: "2h/dia",
      description: "poupadas por advogado em 90 dias",
      icon: "⏰"
    },
    {
      value: "+25%",
      description: "de acurácia em pesquisas jurídicas",
      icon: "🎯"
    },
    {
      value: "70%+",
      description: "de utilização semanal dos agentes",
      icon: "📈"
    }
  ];

  return (
    <section id="section-8" className="min-h-screen flex items-center justify-center section-snap bg-gradient-to-b from-gray-900 to-vanguardia-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="mono-text text-vanguardia-green text-xl tracking-wider mb-4 block">8 ·</span>
          <h2 className="heading-lg mb-8">Retorno Esperado</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gradient-to-br from-vanguardia-green/20 to-emerald-500/20 border border-vanguardia-green/30 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="mono-text text-4xl md:text-5xl font-bold text-vanguardia-green mb-4">
                  {metric.value}
                </div>
                <p className="body-text text-gray-200">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-vanguardia-green/10 to-emerald-500/10 border border-vanguardia-green/30 rounded-xl p-8 text-center animate-fade-up">
          <p className="body-text text-gray-200">
            <strong className="text-vanguardia-green">Cultura de inovação:</strong> Transformamos cada colaborador em um expert em IA jurídica
          </p>
        </div>
      </div>
    </section>
  );
};
