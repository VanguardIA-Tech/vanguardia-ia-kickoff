
import { useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

export const NavigationControls = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const sections = document.querySelectorAll('.section-snap');
      const currentSection = Array.from(sections).findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= -100 && rect.top <= 100;
      });

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        if (currentSection > 0) {
          sections[currentSection - 1].scrollIntoView({ behavior: 'smooth' });
        }
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        if (currentSection < sections.length - 1) {
          sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToNext = () => {
    const sections = document.querySelectorAll('.section-snap');
    const currentSection = Array.from(sections).findIndex(section => {
      const rect = section.getBoundingClientRect();
      return rect.top >= -100 && rect.top <= 100;
    });
    
    if (currentSection < sections.length - 1) {
      sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 bottom-6 flex flex-col space-y-2 z-40">
      <button
        onClick={scrollToTop}
        className="bg-vanguardia-green/90 hover:bg-vanguardia-green text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>
      <button
        onClick={scrollToNext}
        className="bg-gray-800/90 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Próxima seção"
      >
        <ArrowDown size={20} />
      </button>
    </div>
  );
};
