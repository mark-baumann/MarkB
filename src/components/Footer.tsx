
import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Mark Baumann</h3>
          <p className="text-white/60">Produktverantwortlicher & Software Entwickler</p>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Impressum</h4>
            <div className="text-white/80 space-y-2">
              <p>Mark Baumann</p>
              <p>Produktverantwortlicher & Software Entwickler</p>
              <p>Deutschland</p>
              <p className="text-sm text-white/60 mt-4">
                © 2024 Mark Baumann. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
