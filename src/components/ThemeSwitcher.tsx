import React, { useState, useEffect } from 'react';
import { Sun, Moon, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { setTheme, lightThemes, darkThemes, currentTheme, toggleMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);

  const themeColors = {
    sunset: '#FFB5A7',
    ocean: '#A7E6FF',
    lavender: '#D8B4FE',
    mint: '#A7F3D0',
    rose: '#FECACA',
    peach: '#FDBA74',
    darkSunset: '#FFB5A7',
    darkOcean: '#A7E6FF',
    darkLavender: '#D8B4FE',
    darkMint: '#A7F3D0',
    darkRose: '#FECACA',
    midnight: '#8B5CF6',
  };

  // Auto-rotate themes every 10 seconds when enabled
  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      const availableThemes = currentTheme.mode === 'light' ? lightThemes : darkThemes;
      const currentIndex = availableThemes.indexOf(currentTheme.name.toLowerCase().replace(' ', ''));
      const nextIndex = (currentIndex + 1) % availableThemes.length;
      setTheme(availableThemes[nextIndex]);
    }, 10000); // Change theme every 10 seconds

    return () => clearInterval(interval);
  }, [autoRotate, currentTheme, lightThemes, darkThemes, setTheme]);

  const handleModeToggle = () => {
    toggleMode();
  };

  const toggleAutoRotate = () => {
    setAutoRotate(!autoRotate);
    localStorage.setItem('auto-rotate-themes', (!autoRotate).toString());
  };

  // Load auto-rotate preference on mount
  useEffect(() => {
    const savedAutoRotate = localStorage.getItem('auto-rotate-themes');
    if (savedAutoRotate === 'true') {
      setAutoRotate(true);
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {isOpen && (
          <div className="absolute bottom-20 right-0 bg-surface/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border p-6 min-w-[280px]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-text">Theme Settings</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-textSecondary hover:text-text transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Auto Theme Toggle */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-text">Auto Pastel Themes</span>
                <button
                  onClick={toggleAutoRotate}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    autoRotate ? 'bg-primary' : 'bg-border'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      autoRotate ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <p className="text-xs text-textSecondary">
                {autoRotate ? 'Themes change automatically every 10 seconds' : 'Manual theme selection'}
              </p>
            </div>

            {/* Current Theme Display */}
            <div className="mb-4 p-4 bg-background/50 rounded-xl border border-border">
              <div className="flex items-center space-x-3">
                <div
                  className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                  style={{
                    backgroundColor: themeColors[currentTheme.name.toLowerCase().replace(' ', '') as keyof typeof themeColors],
                  }}
                />
                <div>
                  <div className="text-sm font-medium text-text">{currentTheme.name}</div>
                  <div className="text-xs text-textSecondary capitalize">{currentTheme.mode} mode</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Floating Action Buttons */}
        <div className="flex flex-col space-y-3">
          {/* Mode Toggle Button */}
          <button
            onClick={handleModeToggle}
            className={`bg-surface/95 backdrop-blur-md hover:bg-primary/20 text-text hover:text-primary transition-all duration-300 p-4 rounded-full shadow-lg border border-border hover:shadow-xl transform hover:scale-105 group ${
              currentTheme.mode === 'dark' ? 'bg-primary/10' : ''
            }`}
            title={`Switch to ${currentTheme.mode === 'light' ? 'dark' : 'light'} mode`}
          >
            {currentTheme.mode === 'light' ? (
              <Moon size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            ) : (
              <Sun size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            )}
          </button>

          {/* Settings Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-surface/95 backdrop-blur-md hover:bg-primary/20 text-text hover:text-primary transition-all duration-300 p-4 rounded-full shadow-lg border border-border hover:shadow-xl transform hover:scale-105 group relative"
            title="Theme settings"
          >
            <div className="relative">
              <div
                className="w-6 h-6 rounded-full border-2 border-current"
                style={{
                  backgroundColor: themeColors[currentTheme.name.toLowerCase().replace(' ', '') as keyof typeof themeColors],
                }}
              />
              {autoRotate && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;