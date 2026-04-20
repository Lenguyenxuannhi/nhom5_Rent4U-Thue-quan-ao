"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';
import { useAuth } from './AuthProvider';
import { getBasePath } from '@/lib/base-path';
import { useRouter } from 'next/navigation';

export default function ProfileMenu() {
  const { user, logout } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const basePath = getBasePath();
  const smallIconSrc = isDark ? `${basePath}/logo-icon-dark.png` : `${basePath}/logo-icon-light.png`;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (!user) {
    return (
      <div>
        <Link href="/login" className="text-sm text-primary">Đăng nhập</Link>
      </div>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-10 h-10 rounded-full overflow-hidden border border-border flex items-center justify-center"
        aria-label="Profile"
      >
        <Image src={user.avatar || smallIconSrc} alt={user.name} width={40} height={40} className="object-cover" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg py-1 z-50">
          <div className="px-3 py-2 text-sm font-medium">{user.name}</div>
          <Link href="/profile" className="block px-3 py-2 text-sm hover:bg-muted">Trang cá nhân</Link>
          {user.role === 'admin' && <Link href="/admin" className="block px-3 py-2 text-sm hover:bg-muted">Admin Dashboard</Link>}
          {(user.role === 'shopowner' || user.role === 'admin') && (
            <Link href="/shop-owner" className="block px-3 py-2 text-sm hover:bg-muted">Quản lý cửa hàng</Link>
          )}
          <button onClick={handleLogout} className="w-full text-left px-3 py-2 text-sm hover:bg-muted">Đăng xuất</button>
        </div>
      )}
    </div>
  );
}
