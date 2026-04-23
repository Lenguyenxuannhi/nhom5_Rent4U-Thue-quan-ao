"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { readFavorites, readCart } from '@/lib/user-storage';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/components/ThemeProvider';
import { getBasePath } from '@/lib/base-path';
import ProfileMenu from '@/components/ProfileMenu';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Trang chủ', to: '/' },
  { label: 'Sản phẩm', to: '/products' },
  { label: 'Xu hướng', to: '/trending' },
  { label: 'Liên hệ', to: '/contact' },
];

export default function Header() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return theme === 'dark';
    try {
      if (document.documentElement.classList.contains('dark')) return true;
      if (theme === 'dark') return true;
      if (theme === 'light') return false;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return theme === 'dark';
    }
  });

  useEffect(() => {
    if (theme === 'dark') {
      setIsDark(true);
      return;
    }
    if (theme === 'light') {
      setIsDark(false);
      return;
    }

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mq.matches);
    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
    if (mq.addEventListener) mq.addEventListener('change', listener);
    else mq.addListener(listener as any);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', listener);
      else mq.removeListener(listener as any);
    };
  }, [theme]);

  const basePath = getBasePath();
  const smallIconSrc = isDark ? `${basePath}/logo-icon-dark.png` : `${basePath}/logo-icon-light.png`;
  const brandSrc = isDark ? `${basePath}/logo-brand-dark.png` : `${basePath}/logo-brand-light.png`;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [cartCount, setCartCount] = useState(0);
  const [favCount, setFavCount] = useState(0);
  const { user } = useAuth();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const btnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    function readCounts() {
      try {
        const c = readCart(user)
        setCartCount(Array.isArray(c) ? c.reduce((s: number, i: any) => s + (i.qty || i.quantity || 1), 0) : 0);
      } catch (e) { setCartCount(0); }
      try {
        const f = readFavorites(user)
        setFavCount(Array.isArray(f) ? f.length : 0);
      } catch (e) { setFavCount(0); }
    }

    readCounts();
    const onStorage = (e: StorageEvent | any) => {
      if (e?.key === 'r4_cart' || e?.key === 'r4_favorites') readCounts();
    }
    const onCounts = () => readCounts();
    const onAuth = () => readCounts();
    window.addEventListener('storage', onStorage as any);
    window.addEventListener('r4:counts-changed', onCounts as any);
    window.addEventListener('r4:auth-changed', onAuth as any);
    return () => {
      window.removeEventListener('storage', onStorage as any);
      window.removeEventListener('r4:counts-changed', onCounts as any);
      window.removeEventListener('r4:auth-changed', onAuth as any);
    };
  }, [user]);

  // close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // close when clicking outside
  useEffect(() => {
    function onPointer(e: any) {
      if (!mobileOpen) return
      const target = e.target
      if (menuRef.current && menuRef.current.contains(target)) return
      if (btnRef.current && btnRef.current.contains(target)) return
      setMobileOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    return () => document.removeEventListener('pointerdown', onPointer)
  }, [mobileOpen])

  // close when switching to large screens
  useEffect(() => {
    try {
      const mq = window.matchMedia('(min-width: 1280px)')
      const listener = (e: MediaQueryListEvent) => { if (e.matches) setMobileOpen(false) }
      if (mq.addEventListener) mq.addEventListener('change', listener)
      else mq.addListener(listener as any)
      return () => { if (mq.removeEventListener) mq.removeEventListener('change', listener); else mq.removeListener(listener as any) }
    } catch {
      return
    }
  }, [])

  return (
    <header className="w-full border-b relative">
      <div className="site-container py-4 flex items-center">
        <Link href="/" aria-label="Home">
          <div className="flex items-center gap-2">
            {!mounted ? (
              <div style={{ width: 32, height: 32 }} />
            ) : (
              <Image src={smallIconSrc} alt="logo icon" width={32} height={32} priority className="rounded-lg object-contain" />
            )}
            {!mounted ? (
              <div style={{ width: 120, height: 40 }} />
            ) : (
              <Image src={brandSrc} alt="brand logo" width={120} height={40} className="object-contain" />
            )}
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 ml-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`text-sm transition-colors ${pathname === link.to ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button (visible when nav is hidden) */}
        <div className="lg:hidden ml-4">
          <button
            ref={btnRef}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded hover:bg-muted inline-flex items-center"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <div className="relative">
            <button onClick={() => { if (!user) router.push('/login'); else router.push('/favorites') }} className="p-2 rounded hover:bg-muted inline-flex items-center" aria-label="Yêu thích">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.6-4.35-10-7.04C-0.1 10.37 3.6 4 8.57 6.01 10.46 6.87 12 8.4 12 8.4s1.54-1.53 3.43-2.39C20.4 4 24.1 10.37 22 13.96 19.6 16.65 12 21 12 21z"/></svg>
            </button>
            {favCount > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{favCount}</span>}
          </div>

          <div className="relative">
            <button onClick={() => { if (!user) router.push('/login'); else router.push('/cart') }} className="p-2 rounded hover:bg-muted inline-flex items-center" aria-label="Giỏ hàng">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.45C8.52 16.37 9.48 18 11 18h8v-2h-7.42c-.14 0-.25-.11-.29-.24L13.1 14h4.36c.75 0 1.41-.41 1.75-1.03L22 6H6.21l-.94-2H2v2h2l3.6 7.59L7 4z"/></svg>
            </button>
            {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>}
          </div>

          <ProfileMenu />
        </div>
      </div>
      {/* Mobile dropbar: shows nav links when mobile menu is open */}
      <div
        ref={menuRef}
        className={`lg:hidden absolute left-0 right-0 top-full z-30 border-t border-border bg-card text-foreground transition-shadow ${mobileOpen ? 'block' : 'hidden'}`}
        role="menu"
      >
        <div className="site-container py-3">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded text-sm transition-colors ${pathname === link.to ? 'text-primary font-medium' : 'text-foreground hover:text-primary hover:bg-muted'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
