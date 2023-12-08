'use client';

import {NextUIProvider} from '@nextui-org/react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

export default function Provider({ children } : {children: React.ReactNode}) {
  return (
    <NextUIProvider>
      <NextThemeProvider
      attribute = 'class'
      defaultTheme = 'dark'
      themes = {['light', 'dark', 'modern']}>
        {children}
        </NextThemeProvider>
    </NextUIProvider>
  );
}