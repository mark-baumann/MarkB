
import React from 'react';

export const Timeline = () => {
  const experiences = [
    {
      company: "CIB software GmbH",
      period: "03.2023 - 06.2025",
      position: "Produktverantwortlicher",
      description: "Produktmanagement, KI, Python und Web Programmierung",
      current: true,
      type: "experience"
    },
    {
      company: "MicroNova",
      period: "08.2022 - 03.2023",
      position: "Software Entwickler (Praktikum)",
      description: "TypeScript (Angular), Java",
      current: false,
      type: "experience"
    }
  ];

  const education = [
    {
      company: "FOM München",
      period: "03.2024 - Heute",
      position: "Bachelor",
      description: "Wirtschaftsinformatik",
      current: true,
      type: "education"
    },
    {
      company: "Semper Bildungswerke Gera",
      period: "01.2020 - 07.2023",
      position: "Fachabitur",
      description: "IT-Assistent",
      current: false,
      type: "education"
    },
    {
      company: "CIB software GmbH",
      period: "09.2017 - 08.2020",
      position: "Ausbildung",
      description: "IT-Kaufmann",
      current: false,
      type: "education"
    }
  ];

  const TimelineItem = ({ item, index }: { item: any, index: number }) => (
    <div className="flex items-center mb-8 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-black shadow-lg"></div>
      <div className="ml-6 bg-gray-100 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20 rounded-xl p-6 flex-grow hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h3 className="text-xl font-bold text-black dark:text-white">{item.company}</h3>
          <div className="flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-300 font-medium">{item.period}</span>
            {item.current && (
              <div className="w-2 h-6 bg-gradient-to-t from-blue-600 to-cyan-600 rounded-full"></div>
            )}
          </div>
        </div>
        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">{item.position}</h4>
        <p className="text-gray-700 dark:text-white/80">{item.description}</p>
      </div>
    </div>
  );

  return (
    <section id="werdegang" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black dark:text-white mb-16 animate-fade-in">
          Mein Werdegang
        </h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-8 animate-fade-in">Erfahrung</h3>
          <div className="relative">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600"></div>
            {experiences.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-8 animate-fade-in">Ausbildung</h3>
          <div className="relative">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600"></div>
            {education.map((item, index) => (
              <TimelineItem key={index + experiences.length} item={item} index={index + experiences.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
