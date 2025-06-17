
export const WhySection = () => {
  const reasons = [
    {
      icon: "⏰",
      title: "Tempo demais em tarefas repetitivas",
      description: "(triagem, pesquisa, minutas)"
    },
    {
      icon: "📊",
      title: "Visão de dados ainda fragmentada",
      description: "→ decisões mais lentas"
    },
    {
      icon: "🚀",
      title: "Mercado jurídico já se move",
      description: "quem adota IA primeiro ganha vantagem competitiva"
    }
  ];

  return (
    <section id="section-2" className="min-h-screen flex items-center justify-center section-snap bg-gradient-to-b from-vanguardia-dark to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="mono-text text-vanguardia-green text-xl tracking-wider mb-4 block">2</span>
          <h2 className="heading-lg mb-8">Por que estamos aqui?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-vanguardia-light/5 border border-gray-700 rounded-xl p-8 text-center hover:border-vanguardia-green/50 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="heading-md text-white mb-4">{reason.title}</h3>
              <p className="body-text text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-vanguardia-green/20 to-emerald-500/20 border border-vanguardia-green/30 rounded-xl p-8 text-center animate-fade-up">
          <p className="body-text text-gray-200">
            <strong className="text-vanguardia-green">Nossa missão:</strong> diminuir o trabalho mecânico, aumentar precisão e tornar cada colaborador fluente no uso de IA.
          </p>
        </div>
      </div>
    </section>
  );
};
