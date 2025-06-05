
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      {isMobile ? (
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white/10 dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/20 rounded-full p-3 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {isOpen && (
            <div className="absolute top-16 right-0 bg-white/90 dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/20 rounded-2xl p-4 min-w-[200px] animate-fade-in shadow-lg">
              <div className="flex flex-col space-y-3">
                {['Über mich', 'Werdegang', 'Expertise', 'Projekte', 'Blog'].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300 text-left py-2"
                  >
                    {item}
                  </button>
                ))}
                <div className="pt-3 border-t border-gray-300 dark:border-white/20">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300 py-2"
                  >
                    {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white/90 dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/20 rounded-full px-8 py-4 animate-fade-in shadow-lg">
          <div className="flex items-center space-x-8">
            {['Über mich', 'Werdegang', 'Expertise', 'Projekte', 'Blog'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
