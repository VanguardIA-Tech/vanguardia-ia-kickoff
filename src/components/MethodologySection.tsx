
export const MethodologySection = () => {
  const steps = [
    {
      letter: "C",
      title: "Compreender",
      description: "Diagnóstico dos fluxos, docs e sistemas",
      result: "Gargalos mapeados"
    },
    {
      letter: "N", 
      title: "Navegar",
      description: "Treinamentos presenciais/on-line",
      result: "Equipe confiante no uso diário"
    },
    {
      letter: "H",
      title: "Habilitar", 
      description: "Automações + Agentes-GPT implantados",
      result: "Produtividade mensurável"
    }
  ];

  return (
    <section id="section-5" className="min-h-screen flex items-center justify-center section-snap bg-vanguardia-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="mono-text text-vanguardia-green text-xl tracking-wider mb-4 block">5 ·</span>
          <h2 className="heading-lg mb-8">Metodologia CNH da IA</h2>
          <div className="text-6xl mb-8">🚗</div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-vanguardia-green to-emerald-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-poppins font-bold text-3xl">{step.letter}</span>
                </div>
                <h3 className="heading-md text-vanguardia-green mb-4">{step.title}</h3>
                <p className="body-text text-gray-300 mb-2">{step.description}</p>
                <div className="bg-vanguardia-light/5 border border-gray-700 rounded-lg p-4">
                  <p className="text-sm font-semibold text-white">{step.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-vanguardia-green/10 to-emerald-500/10 border border-vanguardia-green/30 rounded-xl p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="py-3 px-4 font-poppins font-semibold text-vanguardia-green">Etapa</th>
                    <th className="py-3 px-4 font-poppins font-semibold text-vanguardia-green">O que acontece</th>
                    <th className="py-3 px-4 font-poppins font-semibold text-vanguardia-green">Resultado visível</th>
                  </tr>
                </thead>
                <tbody>
                  {steps.map((step, index) => (
                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-800/30">
                      <td className="py-3 px-4 font-bold text-white">{step.letter} – {step.title}</td>
                      <td className="py-3 px-4 text-gray-300">{step.description}</td>
                      <td className="py-3 px-4 text-gray-200">{step.result}</td>
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
