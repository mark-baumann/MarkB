
import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/20 dark:border-white/20 border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h4 className="text-lg font-semibold text-black dark:text-white mb-6">Impressum</h4>
          <div className="text-gray-700 dark:text-white/70 space-y-3 text-sm max-w-2xl mx-auto">
            <p><strong>Angaben gemäß § 5 TMG:</strong></p>
            <div className="space-y-1">
              <p>Mark Baumann</p>
              <p>Uferstraße 6a</p>
              <p>07548 Gera</p>
            </div>
            
            <div className="pt-4">
              <p><strong>Kontakt:</strong></p>
              <p>E-Mail: kontakt@markb.de</p>
            </div>
            
            <div className="pt-4">
              <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong></p>
              <div className="space-y-1">
                <p>Mark Baumann</p>
                <p>Uferstraße 6a</p>
                <p>07548 Gera</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-300 dark:border-white/20">
              <p className="text-gray-600 dark:text-white/60">
                © 2025 Mark Baumann. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
