export const StatsSection = () => {
  const stats = [
    {
      number: "30–40%",
      label: "do tempo de um associate é gasto em pesquisas repetitivas"
    },
    {
      number: "+120h",
      label: "economizadas por mês em escritórios que automatizam fluxos"
    },
    {
      number: "83%",
      label: "das bancas que adotam IA relatam satisfação maior dos clientes",
      note: "(benchmark interno)"
    }
  ];

  return (
    <section id="section-3" className="min-h-screen flex items-center justify-center section-snap bg-vanguardia-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="mono-text text-vanguardia-green text-xl tracking-wider mb-4 block">3</span>
          <h2 className="heading-lg mb-8">A oportunidade em números</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex animate-fade-up h-full min-h-[320px]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col justify-center w-full bg-gradient-to-br from-vanguardia-green/20 to-emerald-500/20 border border-vanguardia-green/30 rounded-2xl p-8 md:p-12 hover:scale-105 transition-transform duration-300 h-full">
                <div className="mono-text text-3xl md:text-4xl lg:text-5xl font-bold text-vanguardia-green mb-6 whitespace-nowrap">
                  {stat.number}
                </div>
                <p className="body-text text-base md:text-lg text-gray-200 mb-2">{stat.label}</p>
                {stat.note && (
                  <p className="text-sm text-gray-400 italic">{stat.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
