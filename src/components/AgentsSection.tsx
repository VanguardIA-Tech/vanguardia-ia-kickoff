
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const AgentsSection = () => {
  const [demoInput, setDemoInput] = useState('');
  const [demoResponse, setDemoResponse] = useState('');

  const agents = [
    {
      name: "Jurist-Pesquisa",
      description: "Jurisprudência em segundos",
      icon: "⚖️"
    },
    {
      name: "Case-Filtro", 
      description: "Classifica novos casos por área e risco",
      icon: "📋"
    },
    {
      name: "Minuta-Rápida",
      description: "Esboço instantâneo de petições e contratos", 
      icon: "📝"
    },
    {
      name: "Compliance-LGPD",
      description: "Monitor de privacidade interna",
      icon: "🔒"
    },
    {
      name: "Knowledge-Base",
      description: "Busca semântica em documentos internos",
      icon: "📚"
    }
  ];

  const handleDemo = () => {
    if (demoInput.trim()) {
      setDemoResponse(`🤖 Agente Jurist-Pesquisa ativado!\n\nPesquisando jurisprudência para: "${demoInput}"\n\n✅ Encontradas 23 decisões relevantes\n📊 Análise de tendências: 87% favoráveis\n📑 Precedentes mais citados identificados\n⏱️ Processamento concluído em 2.3s`);
    }
  };

  return (
    <section id="section-6" className="min-h-screen flex items-center justify-center section-snap bg-gradient-to-b from-vanguardia-dark to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="mono-text text-vanguardia-green text-xl tracking-wider mb-4 block">6 ·</span>
          <h2 className="heading-lg mb-8">Exemplos de Agentes Virtuais</h2>
          <span className="bg-vanguardia-green/20 text-vanguardia-green px-4 py-2 rounded-full text-sm font-semibold">(demo)</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {agents.map((agent, index) => (
            <div 
              key={index}
              className="bg-vanguardia-light/5 border border-gray-700 rounded-xl p-6 hover:border-vanguardia-green/50 transition-all duration-300 animate-fade-up hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-4">{agent.icon}</div>
              <h3 className="font-poppins font-semibold text-xl text-vanguardia-green mb-3">{agent.name}</h3>
              <p className="body-text text-gray-300">{agent.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-up">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-vanguardia-green hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                🚀 Testar Jurist-Pesquisa
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-vanguardia-green text-xl">Demo - Agente Jurist-Pesquisa</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-gray-300">Digite um termo jurídico e veja o agente trabalhar:</p>
                <input
                  type="text"
                  value={demoInput}
                  onChange={(e) => setDemoInput(e.target.value)}
                  placeholder="Ex: responsabilidade civil médica"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-vanguardia-green focus:outline-none"
                />
                <Button 
                  onClick={handleDemo}
                  className="w-full bg-vanguardia-green hover:bg-emerald-600 text-white py-3"
                >
                  Processar Pesquisa
                </Button>
                {demoResponse && (
                  <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 mt-4">
                    <pre className="text-sm text-gray-200 whitespace-pre-wrap font-mono">{demoResponse}</pre>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};
