
import React, { useState, createContext, useContext, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  showLoginDialog: boolean;
  setShowLoginDialog: (show: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

const ADMIN_PASSWORD = 'admin123'; // In der Praxis sollte das sicherer sein

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const authStatus = localStorage.getItem('markb-auth');
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (inputPassword: string) => {
    if (inputPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('markb-auth', 'authenticated');
      setShowLoginDialog(false);
      setPassword('');
      setError('');
      return true;
    } else {
      setError('Falsches Passwort');
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('markb-auth');
  };

  const handleLogin = () => {
    login(password);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, showLoginDialog, setShowLoginDialog }}>
      {children}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Anmelden</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="password">Passwort</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              />
              {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
            </div>
            <div className="flex gap-2">
              <Button onClick={handleLogin}>Anmelden</Button>
              <Button variant="outline" onClick={() => setShowLoginDialog(false)}>
                Abbrechen
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </AuthContext.Provider>
  );
};
