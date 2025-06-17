
export const QASection = () => {
  return <section id="section-16" className="min-h-screen flex items-center justify-center section-snap bg-gradient-to-b from-gray-900 to-vanguardia-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="mono-text text-vanguardia-green text-xl tracking-wider mb-4 block">12</span>
          <h2 className="heading-lg mb-12">Perguntas & Contribuições</h2>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-vanguardia-green/20 to-emerald-500/20 border border-vanguardia-green/30 rounded-xl p-12 animate-fade-up">
            <div className="text-6xl mb-8">💡</div>
            <blockquote className="text-2xl md:text-3xl text-gray-200 italic mb-8 leading-relaxed">
              "A inovação é coletiva — nenhuma pergunta é pequena. Qual dúvida podemos esclarecer agora?"
            </blockquote>
          
          </div>
          
          {/* Logo da Vanguardia */}
          <div className="mt-16 animate-fade-up">
            <img 
              src="/lovable-uploads/8808d21c-8d70-4941-9a10-aaee8ddc9983.png" 
              alt="Vanguardia Logo" 
              className="h-20 md:h-24 mx-auto filter brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </section>;
};
