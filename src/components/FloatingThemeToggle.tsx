"use client";

import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function FloatingThemeToggle() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="shadow-lg rounded-full">
          <button aria-label="Toggle theme" className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card text-sm">
            <span className="select-none opacity-0">☀️</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="shadow-lg rounded-full">
        <ThemeToggle />
      </div>
    </div>
  );
}
