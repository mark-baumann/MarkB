
import React from 'react';
import { Download } from 'lucide-react';

export const Hero = () => {
  const downloadCV = () => {
    // Create a simple CV download
    const cvContent = `
Mark Baumann - Lebenslauf

ERFAHRUNG:
• CIB software GmbH (03.2023 - 06.2025) - Produktverantwortlicher
• MicroNova (08.2022 - 03.2023) - Software Entwickler (Praktikum)

AUSBILDUNG:
• FOM München (03.2024 - Heute) - Bachelor Wirtschaftsinformatik
• Semper Bildungswerke Gera (01.2020 - 07.2023) - Fachabitur IT-Assistent
• CIB software GmbH (09.2017 - 08.2020) - Ausbildung IT-Kaufmann

SKILLS:
• Python & Web Programmierung
• TypeScript (Angular)
• Java
• Produktmanagement
• KI
    `;
    
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Mark_Baumann_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="über-mich" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 mb-8 animate-scale-in">
            Mark Baumann
          </h1>
          <div className="text-2xl md:text-3xl text-white/80 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
            <p className="text-xl text-white/90 mb-6 max-w-md leading-relaxed">
              Leidenschaftlicher Software-Entwickler mit Expertise in modernen Technologien 
              und einem starken Fokus auf Produktmanagement und KI-Entwicklung.
            </p>
            <button 
              onClick={downloadCV}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
