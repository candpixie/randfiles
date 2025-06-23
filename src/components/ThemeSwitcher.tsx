import React, { useState } from 'react';
import { Palette, Sun, Moon, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { setTheme, lightThemes, darkThemes, currentTheme, toggleMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

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

  const getDisplayName = (themeName: string) => {
    return themes[themeName]?.name || themeName.charAt(0).toUpperCase() + themeName.slice(1);
  };

  const themes: Record<string, { name: string }> = {
    sunset: { name: 'Sunset' },
    ocean: { name: 'Ocean' },
    lavender: { name: 'Lavender' },
    mint: { name: 'Mint' },
    rose: { name: 'Rose' },
    peach: { name: 'Peach' },
    darkSunset: { name: 'Dark Sunset' },
    darkOcean: { name: 'Dark Ocean' },
    darkLavender: { name: 'Dark Lavender' },
    darkMint: { name: 'Dark Mint' },
    darkRose: { name: 'Dark Rose' },
    midnight: { name: 'Midnight' },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-surface/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border p-6 min-w-[280px] max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-text flex items-center">
                <Palette className="mr-2 text-primary" size={20} />
                Themes
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-textSecondary hover:text-text transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Mode Toggle */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-text">Mode</span>
                <button
                  onClick={toggleMode}
                  className="flex items-center space-x-2 bg-primary/10 hover:bg-primary/20 text-primary px-3 py-2 rounded-lg transition-colors"
                >
                  {currentTheme.mode === 'light' ? (
                    <>
                      <Sun size={16} />
                      <span className="text-sm">Light</span>
                    </>
                  ) : (
                    <>
                      <Moon size={16} />
                      <span className="text-sm">Dark</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Light Themes */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-text mb-3 flex items-center">
                <Sun className="mr-2 text-yellow-500" size={16} />
                Light Themes
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {lightThemes.map((themeName) => (
                  <button
                    key={themeName}
                    onClick={() => {
                      setTheme(themeName);
                      setIsOpen(false);
                    }}
                    className={`flex items-center space-x-3 p-3 rounded-xl transition-all ${
                      currentTheme.name.toLowerCase().replace(' ', '') === themeName ||
                      currentTheme.name.toLowerCase() === themeName
                        ? 'bg-primary/20 border-2 border-primary shadow-md'
                        : 'hover:bg-primary/10 border-2 border-transparent'
                    }`}
                  >
                    <div
                      className="w-5 h-5 rounded-full border-2 border-white shadow-sm flex-shrink-0"
                      style={{
                        backgroundColor: themeColors[themeName as keyof typeof themeColors],
                      }}
                    />
                    <span className="text-xs font-medium text-text text-left">
                      {getDisplayName(themeName)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dark Themes */}
            <div>
              <h4 className="text-sm font-semibold text-text mb-3 flex items-center">
                <Moon className="mr-2 text-blue-400" size={16} />
                Dark Themes
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {darkThemes.map((themeName) => (
                  <button
                    key={themeName}
                    onClick={() => {
                      setTheme(themeName);
                      setIsOpen(false);
                    }}
                    className={`flex items-center space-x-3 p-3 rounded-xl transition-all ${
                      currentTheme.name.toLowerCase().replace(' ', '') === themeName ||
                      currentTheme.name.toLowerCase() === themeName
                        ? 'bg-primary/20 border-2 border-primary shadow-md'
                        : 'hover:bg-primary/10 border-2 border-transparent'
                    }`}
                  >
                    <div
                      className="w-5 h-5 rounded-full border-2 border-white shadow-sm flex-shrink-0"
                      style={{
                        backgroundColor: themeColors[themeName as keyof typeof themeColors],
                      }}
                    />
                    <span className="text-xs font-medium text-text text-left">
                      {getDisplayName(themeName)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-surface/95 backdrop-blur-md hover:bg-primary/20 text-text hover:text-primary transition-all duration-300 p-4 rounded-full shadow-lg border border-border hover:shadow-xl transform hover:scale-105 group"
        >
          <Palette size={24} className="group-hover:rotate-12 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;