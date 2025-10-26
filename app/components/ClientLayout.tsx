'use client';

import { ThemeProvider } from './ThemeProvider';
import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster richColors theme="system" />
      <Analytics />
    </ThemeProvider>
  );
}
