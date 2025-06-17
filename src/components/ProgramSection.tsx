

export const ProgramSection = () => {
  const features = [
    "Workshops didáticos & Hotseats aplicados",
    "Implantação de 5 Agentes-GPT jurídicos", 
    "Dashboards de métricas e suporte dedicado",
    "Treinamos todos – dos sócios aos estagiários – para \"dirigir\" a IA com segurança"
  ];

  return (
    <section id="section-4" className="min-h-screen flex items-center justify-center section-snap bg-gradient-to-b from-gray-900 to-vanguardia-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="mono-text text-vanguardia-green text-xl tracking-wider mb-4 block">4 ·</span>
          <h2 className="heading-lg mb-8">O Programa em 1 Minuto</h2>
          <div className="bg-vanguardia-green/10 border border-vanguardia-green/30 rounded-xl p-4 inline-block">
            <span className="mono-text text-vanguardia-green text-2xl font-bold">Plano INNOVA – 24 semanas</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-vanguardia-light/5 border border-gray-700 rounded-xl p-8 hover:border-vanguardia-green/50 transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-vanguardia-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="body-text text-gray-200">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

