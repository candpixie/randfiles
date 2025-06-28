import React, { useState } from 'react';
import { Sun, Moon, X, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { setTheme, lightThemes, darkThemes, currentTheme, toggleMode } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const themeColors = {
    sunset: '#FFB5A7',
    ocean: '#A7E6FF',
    lavender: '#D8B4FE',
    mint: '#A7F3D0',
    rose: '#FECACA',
    peach: '#FDBA74',
    darksunset: '#FFB5A7',
    darkocean: '#A7E6FF',
    darklavender: '#D8B4FE',
    darkmint: '#A7F3D0',
    darkrose: '#FECACA',
    midnight: '#8B5CF6',
  };

  const handleModeToggle = () => {
    // Toggle the expanded state when mode button is clicked
    setIsExpanded(!isExpanded);
    // Also toggle the mode
    toggleMode();
  };

  const cycleToNextColor = () => {
    const availableThemes = currentTheme.mode === 'light' ? lightThemes : darkThemes;
    const currentThemeName = currentTheme.name.toLowerCase().replace(' ', '').replace('dark', '');
    
    // Find current theme index
    let currentIndex = -1;
    if (currentTheme.mode === 'light') {
      currentIndex = availableThemes.indexOf(currentThemeName);
    } else {
      // For dark themes, find the base theme name
      const darkThemeName = currentTheme.name.toLowerCase().replace(' ', '');
      currentIndex = darkThemes.indexOf(darkThemeName);
    }
    
    // Get next theme
    const nextIndex = (currentIndex + 1) % availableThemes.length;
    setTheme(availableThemes[nextIndex]);
  };

  const getCurrentThemeKey = () => {
    return currentTheme.name.toLowerCase().replace(' ', '');
  };

  const handleClickOutside = () => {
    setIsExpanded(false);
    setShowInfo(false);
  };

  return (
    <>
      {/* Backdrop to close when clicking outside */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={handleClickOutside}
        />
      )}
      
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Info Panel */}
          {showInfo && (
            <div className="absolute bottom-20 right-0 bg-surface/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border p-6 min-w-[280px] animate-fade-in-up">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-text">Theme Settings</h3>
                <button
                  onClick={() => setShowInfo(false)}
                  className="text-textSecondary hover:text-text transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Current Theme Display */}
              <div className="mb-4 p-4 bg-background/50 rounded-xl border border-border">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                    style={{
                      backgroundColor: themeColors[getCurrentThemeKey() as keyof typeof themeColors],
                    }}
                  />
                  <div>
                    <div className="text-sm font-medium text-text">{currentTheme.name}</div>
                    <div className="text-xs text-textSecondary capitalize">{currentTheme.mode} mode</div>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="text-xs text-textSecondary bg-primary/5 p-3 rounded-lg">
                <p className="mb-2">🌙☀️ <strong>Mode Button:</strong> Click to toggle light/dark and reveal color options</p>
                <p className="mb-1">🎨 <strong>Color Button:</strong> Click to cycle through pastel colors</p>
                <p>ℹ️ <strong>Info Button:</strong> View current theme details</p>
              </div>
            </div>
          )}

          {/* Floating Action Buttons Container */}
          <div className="flex flex-col items-end space-y-3">
            {/* Expanded Color Options */}
            <div className={`transition-all duration-500 ease-in-out transform origin-bottom ${
              isExpanded 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
            }`}>
              <div className="flex flex-col space-y-3">
                {/* Color Cycle Button */}
                <button
                  onClick={cycleToNextColor}
                  className="bg-surface/95 backdrop-blur-md hover:bg-primary/20 text-text hover:text-primary transition-all duration-300 p-4 rounded-full shadow-lg border border-border hover:shadow-xl transform hover:scale-105 group relative animate-bounce-in"
                  title="Cycle through pastel colors"
                >
                  <div className="relative">
                    <div
                      className="w-6 h-6 rounded-full border-2 border-white shadow-sm group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundColor: themeColors[getCurrentThemeKey() as keyof typeof themeColors],
                      }}
                    />
                    {/* Rotating ring indicator */}
                    <div className="absolute inset-0 border-2 border-transparent border-t-primary/50 rounded-full animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </button>

                {/* Info Button */}
                <button
                  onClick={() => setShowInfo(!showInfo)}
                  className="bg-surface/95 backdrop-blur-md hover:bg-primary/20 text-text hover:text-primary transition-all duration-300 p-2 rounded-full shadow-lg border border-border hover:shadow-xl transform hover:scale-105 group text-xs font-bold animate-bounce-in"
                  style={{ animationDelay: '0.1s' }}
                  title="Theme info"
                >
                  ℹ️
                </button>
              </div>
            </div>

            {/* Main Mode Toggle Button */}
            <button
              onClick={handleModeToggle}
              className={`bg-surface/95 backdrop-blur-md hover:bg-primary/20 text-text hover:text-primary transition-all duration-300 p-4 rounded-full shadow-lg border border-border hover:shadow-xl transform hover:scale-105 group relative ${
                currentTheme.mode === 'dark' ? 'bg-primary/10' : ''
              } ${isExpanded ? 'ring-2 ring-primary/30' : ''}`}
              title={`Switch to ${currentTheme.mode === 'light' ? 'dark' : 'light'} mode & toggle color options`}
            >
              {currentTheme.mode === 'light' ? (
                <Moon size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              ) : (
                <Sun size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              )}
              
              {/* Expansion indicator */}
              {isExpanded && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;