import { ArrowDown } from 'lucide-react';
export const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('section-2');
    nextSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center section-snap relative bg-gradient-to-br from-vanguardia-dark via-gray-900 to-vanguardia-dark">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <div className="mb-8">
            <span className="mono-text text-xl tracking-wider text-emerald-300">Silveira, Athias, Soriano de Mello, Bentes, Lobato &amp; Scaff - Advogados</span>
          </div>
          
          <h1 className="heading-xl mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            IA na Prática para<br />
            Escritórios de Advocacia
          </h1>
          
          <p className="heading-md text-gray-300 mb-8 max-w-4xl mx-auto">
            Modernizando a rotina jurídica sem perder a essência
          </p>
          
          <div className="bg-vanguardia-green/10 border border-vanguardia-green/20 rounded-xl p-8 max-w-5xl mx-auto mb-12">
            <p className="body-text text-gray-200 italic">
              "Colocamos a tecnologia para trabalhar por vocês, enquanto o time foca em estratégia jurídica e cuidado com o cliente."
            </p>
          </div>
        </div>
      </div>
      
      <button onClick={scrollToNext} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-vanguardia-green hover:text-emerald-400 transition-colors animate-bounce" aria-label="Scroll para próxima seção">
        <ArrowDown size={32} />
      </button>
    </section>;
};