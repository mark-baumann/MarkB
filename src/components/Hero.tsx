
import React from 'react';
import { Download } from 'lucide-react';

export const Hero = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://github.com/mark-baumann/MarkB/raw/main/lebenslauf.pdf';
    link.download = 'Mark_Baumann_Lebenslauf.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="über-mich" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 mb-8 animate-scale-in">
            Mark Baumann
          </h1>
          <div className="text-2xl md:text-3xl text-gray-700 dark:text-white/80 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Produktverantwortlicher & Software Entwickler
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
          <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <img 
              src="/lovable-uploads/1b2865c8-dab3-431f-972c-1eff361125ca.png"
              alt="Mark Baumann"
              className="w-64 h-64 rounded-full object-cover border-4 border-blue-400 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="text-left animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-xl text-gray-700 dark:text-white/90 mb-6 max-w-md leading-relaxed">
              Leidenschaftlicher Software-Entwickler mit Expertise in modernen Technologien 
              und einem starken Fokus auf Produktmanagement und KI-Entwicklung.
            </p>
            <button 
              onClick={downloadCV}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Lebenslauf herunterladen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
