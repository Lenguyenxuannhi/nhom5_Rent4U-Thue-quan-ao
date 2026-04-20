"use client";

import React, { useEffect } from 'react';
import { useAuth } from '@/components/AuthProvider';
import Image from 'next/image';
import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProfileTabsClient from '@/components/profile/ProfileTabsClient';
import { getBasePath } from '@/lib/base-path';

export default function ProfilePage() {
  const { user, logout, update } = useAuth();
  const router = useRouter();

  const { theme } = useTheme();

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) return null

  const isDark = theme === 'dark';
  const basePath = getBasePath();
  const smallIconSrc = isDark ? `${basePath}/logo-icon-dark.png` : `${basePath}/logo-icon-light.png`;

  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-card p-6 rounded-2xl border border-border flex items-center gap-6">
          <Image src={user.avatar || smallIconSrc} alt={user.name} width={96} height={96} className="rounded-full object-cover" />
          <div>
            <h2 className="text-2xl font-bold">{user.name} {user.username ? <span className="text-sm text-muted-foreground">(@{user.username})</span> : null}</h2>
            <div className="text-sm text-muted-foreground">{user.email}</div>
            <div className="mt-3 text-sm">Vai trò: <strong>{user.role}</strong></div>
            <div className="mt-4 flex gap-3">
              <Link href="/" className="px-4 py-2 bg-primary text-primary-foreground rounded">Trang chủ</Link>
              <button onClick={() => { logout(); router.push('/'); }} className="px-4 py-2 border rounded">Đăng xuất</button>
            </div>
          </div>
        </div>
      </div>
      <ProfileTabsClient />
    </div>
  );
}
