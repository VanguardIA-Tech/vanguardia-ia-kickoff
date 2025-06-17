export const TimelineSection = () => {
  const phases = [
    { weeks: "1–3", title: "Kick-off & Diagnóstico", color: "from-red-500 to-orange-500" },
    { weeks: "4–12", title: "Construção", color: "from-orange-500 to-yellow-500" },
    { weeks: "13–18", title: "Otimização & Escala", color: "from-yellow-500 to-vanguardia-green" },
    { weeks: "19–24", title: "Revisão & Expansão", color: "from-vanguardia-green to-emerald-500" }
  ];

  return (
    <section id="section-7" className="min-h-screen flex items-center justify-center section-snap bg-vanguardia-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="mono-text text-vanguardia-green text-xl tracking-wider mb-4 block">7</span>
          <h2 className="heading-lg mb-8">Cronograma-Panorama</h2>
          <span className="mono-text text-2xl text-gray-400">(24 semanas)</span>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Grid com duas linhas: círculos e cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-2">
            {phases.map((phase, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="z-10 w-16 h-16 rounded-full bg-gradient-to-br border-4 border-white flex items-center justify-center mb-2"
                  style={{ background: `linear-gradient(135deg, ${phase.color.split(' ')[1]}, ${phase.color.split(' ')[3]})` }}>
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Linha horizontal entre círculos e cards */}
          <div className="relative flex items-center mb-2" style={{ height: '16px' }}>
            <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 via-vanguardia-green to-emerald-500 w-full"></div>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="flex flex-col items-center animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-center bg-vanguardia-light/5 border border-gray-700 rounded-xl p-6 hover:border-vanguardia-green/50 transition-all duration-300 w-full">
                  <div className="mono-text text-vanguardia-green font-bold mb-2">{phase.weeks}</div>
                  <h3 className="font-poppins font-semibold text-lg text-white">{phase.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
