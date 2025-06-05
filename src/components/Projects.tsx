
import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "CodeTranslator",
      description: "Ein intelligenter Code-Übersetzer, der verschiedene Programmiersprachen ineinander überführt. Entwickelt mit modernsten KI-Technologien für präzise und effiziente Code-Übersetzung.",
      technologies: ["Python", "KI", "Machine Learning", "NLP"],
      link: "https://github.com/mark-baumann/CodeTranslator",
      gradient: "from-blue-600 to-cyan-600"
    }
  ];

  return (
    <section id="projekte" className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black dark:text-white mb-16 animate-fade-in">
          Projekte
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="animate-fade-in bg-gray-100 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20 rounded-xl overflow-hidden hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group shadow-lg hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-600/30 text-blue-600 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-500/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-300 hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  <ExternalLink size={16} />
                  Projekt ansehen
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
