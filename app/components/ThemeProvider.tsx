'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light';

interface ThemeContextType {
  theme: Theme;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
}

function getInitialTheme(): Theme {
  return 'light';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Marcar como montado
    setMounted(true);
    
    // Obtener el tema inicial
    const initialTheme = getInitialTheme();
    setThemeState(initialTheme);
  }, []);

useEffect(() => {
  // Asegurarse de que no haya clase 'dark' en el documento
  if (!mounted) return;
  
  const root = document.documentElement;
  root.classList.remove('dark');
  
  // Guardar en localStorage
  try {
    localStorage.setItem('theme', 'light');
  } catch {
    // Ignorar errores de localStorage
  }
}, [mounted]);

  return (
    <ThemeContext.Provider value={{ theme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}
