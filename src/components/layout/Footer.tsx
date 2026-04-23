"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';
import { getBasePath } from '@/lib/base-path';

export default function Footer() {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const basePath = getBasePath();
  const brandSrc = isDark ? `${basePath}/logo-brand-dark.png` : `${basePath}/logo-brand-light.png`;
  const smallIconSrc = isDark ? `${basePath}/logo-icon-dark.png` : `${basePath}/logo-icon-light.png`;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDark = () => {
      if (theme === 'dark') { setIsDark(true); return; }
      if (theme === 'light') { setIsDark(false); return; }
      setIsDark(
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    };
    checkDark();
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (e: MediaQueryListEvent) => {
      if (theme === 'system') setIsDark(e.matches);
    };
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, [theme]);

  return (
    <footer className="border-t py-8 bg-background">
      <div className="site-container flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center gap-3">
          {!mounted ? (
            <div style={{ width: 32, height: 32 }} />
          ) : (
            <Image src={smallIconSrc} alt="logo icon" width={32} height={32} className="rounded-lg object-contain" />
          )}
          {!mounted ? (
            <div style={{ width: 120, height: 40 }} />
          ) : (
            <Image src={brandSrc} alt="brand logo" width={120} height={40} className="object-contain" />
          )}
        </div>

        <div className="flex-1 flex justify-center space-x-6 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-primary">Chính sách</Link>
          <Link href="/terms" className="hover:text-primary">Điều khoản</Link>
          <Link href="/contact" className="hover:text-primary">Liên hệ</Link>
        </div>

        <div className="text-sm text-muted-foreground">© 2026</div>
      </div>
    </footer>
  );
}
