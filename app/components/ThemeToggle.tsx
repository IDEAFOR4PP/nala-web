'use client';

import { Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { mounted } = useTheme();

  // Evitar hydration mismatch - renderizar placeholder hasta que esté montado
  if (!mounted) {
    return (
      <div className="p-2 rounded-lg border border-blue-200 bg-white/80 w-[42px] h-[42px]" />
    );
  }

  return (
    <div
      className="p-2 rounded-lg border border-blue-200 bg-white/80 hover:bg-blue-100 transition-all"
      aria-label="Tema claro"
      title="Tema claro"
    >
      <Sun className="w-5 h-5 text-gray-700" />
    </div>
  );
}
