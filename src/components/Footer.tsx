
import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h4 className="text-lg font-semibold text-white mb-6">Impressum</h4>
          <div className="text-white/70 space-y-2 text-sm">
            <p><strong>Angaben gemäß § 5 TMG:</strong></p>
            <p>Mark Baumann</p>
            <p>Produktverantwortlicher & Software Entwickler</p>
            <p>Deutschland</p>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white/60">
                © 2024 Mark Baumann. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
