"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/components/AuthProvider';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { BOUTIQUE_IMAGE } from '@/data/products';
import { useTheme } from '@/components/ThemeProvider';
import { registerLocalUser } from '@/lib/auth-client';
import { getBasePath } from '@/lib/base-path';
// logos use CSS classes (.logo-light / .logo-dark) toggled by the global .dark class

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'user' | 'shopowner'>('user');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const basePath = getBasePath();
  const smallIconSrc = isDark ? `${basePath}/logo-icon-dark.png` : `${basePath}/logo-icon-light.png`;
  const brandSrc = isDark ? `${basePath}/logo-brand-dark.png` : `${basePath}/logo-brand-light.png`;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  // no-op: logo visibility handled by CSS classes

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      if (!username) {
        setError('Vui lòng chọn username.');
        return;
      }
      if (!password) {
        setError('Vui lòng nhập mật khẩu.');
        return;
      }

      const newUser = await registerLocalUser({
        username,
        name: name || username,
        email,
        password,
        role,
        avatar: smallIconSrc,
      })

      // Auto-login after register (store session via AuthProvider)
      login({ id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role, avatar: newUser.avatar, username: newUser.username })
      router.push('/profile')
    } catch (err) {
      setError((err as Error).message || 'Lỗi khi đăng ký.')
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="hidden lg:block rounded-xl overflow-hidden">
          <ImageWithFallback src={BOUTIQUE_IMAGE} alt="Decor" className="w-full h-full object-cover rounded-xl" />
        </div>

        <div className="p-8 bg-card rounded-2xl border border-border">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="flex items-center gap-3">
              {!mounted ? (
                <div style={{ width: 40, height: 40 }} />
              ) : (
                <Image src={smallIconSrc} alt="logo" width={40} height={40} className="rounded-lg object-contain" />
              )}
              {!mounted ? (
                <div style={{ width: 120, height: 40 }} className="hidden sm:block" />
              ) : (
                <Image src={brandSrc} alt="brand" width={120} height={40} className="object-contain hidden sm:block" />
              )}
            </Link>
          </div>

          <h2 className="text-2xl font-bold mb-4">Tạo tài khoản mới</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-muted-foreground">Vai trò (mặc định là User)</label>
              <select value={role} onChange={(e) => setRole(e.target.value as any)} className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-white dark:bg-card text-foreground">
                <option value="user">User</option>
                <option value="shopowner">Shop Owner</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-muted-foreground">Username</label>
              <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground" placeholder="username" />
            </div>

            <div>
              <label className="text-xs text-muted-foreground">Họ & tên</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground" placeholder="Nguyễn Văn A" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email (tùy chọn)</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Mật khẩu</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground" placeholder="••••••" />
            </div>

            {error && <div className="text-sm text-destructive">{error}</div>}

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link href="/login" className="text-primary">Đã có tài khoản?</Link>
              </div>
              <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">Đăng ký</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
