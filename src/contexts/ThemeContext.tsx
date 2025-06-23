import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Theme {
  name: string;
  mode: 'light' | 'dark';
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
  };
}

const themes: Record<string, Theme> = {
  // Light Pastel Themes
  sunset: {
    name: 'Sunset',
    mode: 'light',
    colors: {
      primary: '#FFB5A7',
      secondary: '#F8D7DA',
      accent: '#FF8A95',
      background: '#FDF4F5',
      surface: '#FFFFFF',
      text: '#4A4A4A',
      textSecondary: '#8B8B8B',
      border: '#F0E6E6',
    },
  },
  ocean: {
    name: 'Ocean',
    mode: 'light',
    colors: {
      primary: '#A7E6FF',
      secondary: '#B8F2FF',
      accent: '#6BCAFF',
      background: '#F0FAFF',
      surface: '#FFFFFF',
      text: '#2D3748',
      textSecondary: '#718096',
      border: '#E2F8FF',
    },
  },
  lavender: {
    name: 'Lavender',
    mode: 'light',
    colors: {
      primary: '#D8B4FE',
      secondary: '#E9D5FF',
      accent: '#C084FC',
      background: '#FAF5FF',
      surface: '#FFFFFF',
      text: '#4C1D95',
      textSecondary: '#7C3AED',
      border: '#F3E8FF',
    },
  },
  mint: {
    name: 'Mint',
    mode: 'light',
    colors: {
      primary: '#A7F3D0',
      secondary: '#D1FAE5',
      accent: '#6EE7B7',
      background: '#F0FDF4',
      surface: '#FFFFFF',
      text: '#064E3B',
      textSecondary: '#047857',
      border: '#DCFCE7',
    },
  },
  rose: {
    name: 'Rose',
    mode: 'light',
    colors: {
      primary: '#FECACA',
      secondary: '#FEE2E2',
      accent: '#F87171',
      background: '#FFF5F5',
      surface: '#FFFFFF',
      text: '#7F1D1D',
      textSecondary: '#B91C1C',
      border: '#FECACA',
    },
  },
  peach: {
    name: 'Peach',
    mode: 'light',
    colors: {
      primary: '#FDBA74',
      secondary: '#FED7AA',
      accent: '#FB923C',
      background: '#FFFBEB',
      surface: '#FFFFFF',
      text: '#9A3412',
      textSecondary: '#C2410C',
      border: '#FEF3C7',
    },
  },
  // Dark Themes
  darkSunset: {
    name: 'Dark Sunset',
    mode: 'dark',
    colors: {
      primary: '#FFB5A7',
      secondary: '#F8D7DA',
      accent: '#FF8A95',
      background: '#1A1A1A',
      surface: '#2D2D2D',
      text: '#F5F5F5',
      textSecondary: '#B0B0B0',
      border: '#404040',
    },
  },
  darkOcean: {
    name: 'Dark Ocean',
    mode: 'dark',
    colors: {
      primary: '#A7E6FF',
      secondary: '#B8F2FF',
      accent: '#6BCAFF',
      background: '#0F1419',
      surface: '#1E2A35',
      text: '#E2F8FF',
      textSecondary: '#94C7D9',
      border: '#2D3748',
    },
  },
  darkLavender: {
    name: 'Dark Lavender',
    mode: 'dark',
    colors: {
      primary: '#D8B4FE',
      secondary: '#E9D5FF',
      accent: '#C084FC',
      background: '#1A0B2E',
      surface: '#2D1B4E',
      text: '#F3E8FF',
      textSecondary: '#C4B5FD',
      border: '#4C1D95',
    },
  },
  darkMint: {
    name: 'Dark Mint',
    mode: 'dark',
    colors: {
      primary: '#A7F3D0',
      secondary: '#D1FAE5',
      accent: '#6EE7B7',
      background: '#0C1F17',
      surface: '#1F2937',
      text: '#ECFDF5',
      textSecondary: '#A7F3D0',
      border: '#374151',
    },
  },
  darkRose: {
    name: 'Dark Rose',
    mode: 'dark',
    colors: {
      primary: '#FECACA',
      secondary: '#FEE2E2',
      accent: '#F87171',
      background: '#1F1315',
      surface: '#2D1B1F',
      text: '#FFF5F5',
      textSecondary: '#FECACA',
      border: '#4C1D1D',
    },
  },
  midnight: {
    name: 'Midnight',
    mode: 'dark',
    colors: {
      primary: '#8B5CF6',
      secondary: '#A78BFA',
      accent: '#7C3AED',
      background: '#0D1117',
      surface: '#161B22',
      text: '#F0F6FC',
      textSecondary: '#8B949E',
      border: '#30363D',
    },
  },
};

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
  availableThemes: string[];
  lightThemes: string[];
  darkThemes: string[];
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentThemeName, setCurrentThemeName] = useState('sunset');

  const lightThemes = Object.keys(themes).filter(name => themes[name].mode === 'light');
  const darkThemes = Object.keys(themes).filter(name => themes[name].mode === 'dark');

  const setTheme = (themeName: string) => {
    setCurrentThemeName(themeName);
    localStorage.setItem('preferred-theme', themeName);
  };

  const toggleMode = () => {
    const currentTheme = themes[currentThemeName];
    if (currentTheme.mode === 'light') {
      // Switch to corresponding dark theme or default dark theme
      const darkEquivalent = `dark${currentTheme.name}`;
      if (themes[darkEquivalent]) {
        setTheme(darkEquivalent);
      } else {
        setTheme('midnight');
      }
    } else {
      // Switch to corresponding light theme or default light theme
      const lightEquivalent = currentTheme.name.replace('Dark ', '').toLowerCase();
      if (themes[lightEquivalent]) {
        setTheme(lightEquivalent);
      } else {
        setTheme('sunset');
      }
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentThemeName(savedTheme);
    }
  }, []);

  useEffect(() => {
    const theme = themes[currentThemeName];
    const root = document.documentElement;
    
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [currentThemeName]);

  const value: ThemeContextType = {
    currentTheme: themes[currentThemeName],
    setTheme,
    availableThemes: Object.keys(themes),
    lightThemes,
    darkThemes,
    toggleMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};