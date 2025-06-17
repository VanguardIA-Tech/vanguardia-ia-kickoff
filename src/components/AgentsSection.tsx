
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
          <span className="mono-text text-vanguardia-green text-xl tracking-wider mb-4 block">6</span>
          <h2 className="heading-lg mb-8">Exemplos de Agentes Virtuais</h2>
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

      </div>
    </section>
  );
};
