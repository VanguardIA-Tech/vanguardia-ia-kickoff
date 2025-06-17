
export const ParticipationSection = () => {
  const expectations = [
    {
      title: "Workshops",
      description: "recomendação de 100% de presença (conteúdo sequencial)",
      icon: "📚"
    },
    {
      title: "Hotseats", 
      description: "tragam casos reais; quanto mais contexto, melhor a resposta",
      icon: "🔥"
    },
    {
      title: "Piloto interno",
      description: "cada área escolhe 1 processo para aplicar IA nas 1ªs 8 semanas",
      icon: "🚀"
    },
    {
      title: "Feedback rápido",
      description: "sinalizem dificuldades via emoji 👍/⚙️ no grupo",
      icon: "💬"
    }
  ];

  return (
    <section id="section-13" className="min-h-screen flex items-center justify-center section-snap bg-gradient-to-b from-vanguardia-dark to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="mono-text text-vanguardia-green text-xl tracking-wider mb-4 block">13 ·</span>
          <h2 className="heading-lg mb-8">Expectativas de Participação</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {expectations.map((expectation, index) => (
            <div 
              key={index}
              className="bg-vanguardia-light/5 border border-gray-700 rounded-xl p-8 hover:border-vanguardia-green/50 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{expectation.icon}</div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-vanguardia-green mb-3">{expectation.title}:</h3>
                  <p className="body-text text-gray-300">{expectation.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
