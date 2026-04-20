"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const { theme, setTheme } = useTheme();
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  // Render neutral placeholder until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button aria-label="Toggle theme" className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card text-sm">
        <span className="select-none opacity-0">☀️</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card text-sm hover:opacity-95"
    >
      <span className="select-none">{theme === 'dark' ? '🌙' : '☀️'}</span>
    </button>
  );
}
