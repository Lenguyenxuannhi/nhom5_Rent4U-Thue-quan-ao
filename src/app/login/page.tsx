"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { HERO_IMAGE_2 } from '@/data/products';
import { loginWithCredentials } from '@/lib/auth-client';
import { useTheme } from '@/components/ThemeProvider';
import { getBasePath } from '@/lib/base-path';

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState(''); // email or username
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage('');
    setStatusType(null);
    setIsLoading(true);

    // simulate loading delay 1s
    await new Promise((res) => setTimeout(res, 1000));

    try {
      const found = await loginWithCredentials(identifier, password)

      if (!found) {
        setIsLoading(false)
        setStatusMessage('Không tìm thấy tài khoản. Vui lòng đăng ký.')
        setStatusType('error')
        setTimeout(() => {
          setStatusMessage('')
          setStatusType(null)
        }, 1000)
        return
      }

      setIsLoading(false)
      setStatusMessage('Đăng nhập thành công (offline).')
      setStatusType('success')
      setTimeout(() => {
        login({ id: found.id, name: found.name || found.username || found.email, email: found.email, role: found.role || 'user', avatar: found.avatar, username: found.username, phone: found.phone, address: found.address, cardNumber: found.cardNumber, bank: found.bank })
        router.push('/profile')
      }, 1000)
    } catch {
      setIsLoading(false)
      setStatusMessage('Lỗi khi đăng nhập.')
      setStatusType('error')
      setTimeout(() => {
        setStatusMessage('')
        setStatusType(null)
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="hidden lg:block rounded-xl overflow-hidden">
          <ImageWithFallback src={HERO_IMAGE_2} alt="Decor" className="w-full h-full object-cover rounded-xl" />
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

          <h2 className="text-2xl font-bold mb-4">Đăng nhập vào tài khoản</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-muted-foreground">Email hoặc username</label>
              <input value={identifier} onChange={(e) => setIdentifier(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground" placeholder="you@example.com hoặc username" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Mật khẩu</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground" placeholder="••••••" />
            </div>

            {statusMessage && (
              <div role="status" aria-live="polite" className={`text-sm ${statusType === 'error' ? 'text-destructive' : 'text-green-500'}`}>
                {statusMessage}
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link href="/register" className="text-primary">Đăng ký</Link>
              </div>
              <div className="flex items-center gap-2">
                <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">Đăng nhập</button>
                {isLoading && <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden />}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
