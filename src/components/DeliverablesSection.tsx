
export const DeliverablesSection = () => {
  const deliverables = [
    "05 Workshops presenciais (1h cada) + 01 Workshop de apresentação para Sócios",
    "06 Hotseats ao vivo para dúvidas reais", 
    "03 Reuniões de Suporte Presencial (time de entrega dos Agentes IA)",
    "05 Agentes-IPC personalizados + 02 fluxos de automação+IA (triagem & minutas)",
    "Dashboard de métricas de avanço",
    "Suporte WhatsApp em horário estendido"
  ];

  return (
    <section id="section-11" className="min-h-screen flex items-center justify-center section-snap bg-vanguardia-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="mono-text text-vanguardia-green text-xl tracking-wider mb-4 block">9</span>
          <h2 className="heading-lg mb-8">Entregáveis Essenciais</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {deliverables.map((deliverable, index) => (
            <div 
              key={index}
              className="bg-vanguardia-light/5 border border-gray-700 rounded-xl p-6 hover:border-vanguardia-green/50 transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-vanguardia-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="body-text text-gray-200">{deliverable}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
