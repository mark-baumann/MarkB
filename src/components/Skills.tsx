
import React from 'react';

export const Skills = () => {
  const skills = [
    { name: "Python", level: 90, color: "from-yellow-400 to-yellow-600" },
    { name: "TypeScript", level: 85, color: "from-blue-400 to-blue-600" },
    { name: "Java", level: 80, color: "from-red-400 to-red-600" },
    { name: "Produktmanagement", level: 95, color: "from-purple-400 to-purple-600" },
    { name: "KI", level: 88, color: "from-green-400 to-green-600" }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-fade-in">
          Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <span className="text-purple-300 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div 
                  className={`h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.2 + 0.5}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
