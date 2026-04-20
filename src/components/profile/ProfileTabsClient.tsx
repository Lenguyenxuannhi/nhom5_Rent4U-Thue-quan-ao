"use client";

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/components/AuthProvider';
import FavoritesClient from '@/components/favorites/FavoritesClient';
import CartPageClient from '@/components/cart/CartPageClient';

export default function ProfileTabsClient() {
  const { user, update } = useAuth();
  const [tab, setTab] = useState<'overview' | 'favorites' | 'cart' | 'settings'>('overview');

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    bank: '',
  });

  useEffect(() => {
    if (!user) return;
    setForm({
      name: user.name || '',
      email: user.email || '',
      phone: (user as any).phone || '',
      address: (user as any).address || '',
      cardNumber: (user as any).cardNumber || '',
      bank: (user as any).bank || '',
    });
  }, [user]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSave(e?: React.FormEvent) {
    e?.preventDefault?.();
    update({
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      cardNumber: form.cardNumber,
      bank: form.bank,
    } as any);
    alert('Thông tin đã được lưu.');
  }

  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto mt-6 px-4">
      <div className="bg-card border border-border rounded-2xl p-4">
        <div className="flex gap-3 border-b border-border pb-3">
          <button onClick={() => setTab('overview')} className={`px-3 py-2 rounded ${tab === 'overview' ? 'bg-muted' : ''}`}>Tổng quan</button>
          <button onClick={() => setTab('favorites')} className={`px-3 py-2 rounded ${tab === 'favorites' ? 'bg-muted' : ''}`}>Yêu thích</button>
          <button onClick={() => setTab('cart')} className={`px-3 py-2 rounded ${tab === 'cart' ? 'bg-muted' : ''}`}>Giỏ hàng</button>
          <button onClick={() => setTab('settings')} className={`px-3 py-2 rounded ${tab === 'settings' ? 'bg-muted' : ''}`}>Cài đặt</button>
        </div>

        <div className="mt-4">
          {tab === 'overview' && (
            <div className="text-sm text-muted-foreground">
              <p>Họ tên: <strong>{user.name}</strong></p>
              <p>Email: <strong>{user.email}</strong></p>
              <p>Số điện thoại: <strong>{(user as any).phone || '-'}</strong></p>
              <p>Địa chỉ: <strong>{(user as any).address || '-'}</strong></p>
            </div>
          )}

          {tab === 'favorites' && (
            <div>
              <FavoritesClient />
            </div>
          )}

          {tab === 'cart' && (
            <div>
              <CartPageClient />
            </div>
          )}

          {tab === 'settings' && (
            <form onSubmit={handleSave} className="grid grid-cols-1 gap-3">
              <div>
                <label className="text-sm">Họ và tên</label>
                <input name="name" value={form.name} onChange={handleChange} className="w-full px-3 py-2 bg-input border border-border rounded text-sm text-card-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input name="email" value={form.email} onChange={handleChange} className="w-full px-3 py-2 bg-input border border-border rounded text-sm text-card-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="text-sm">Số điện thoại</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="w-full px-3 py-2 bg-input border border-border rounded text-sm text-card-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="text-sm">Địa chỉ nhận hàng</label>
                <textarea name="address" value={form.address} onChange={handleChange} className="w-full px-3 py-2 bg-input border border-border rounded text-sm text-card-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="text-sm">Số thẻ (Visa)</label>
                <input name="cardNumber" value={form.cardNumber} onChange={handleChange} className="w-full px-3 py-2 bg-input border border-border rounded text-sm text-card-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="text-sm">Ngân hàng</label>
                <input name="bank" value={form.bank} onChange={handleChange} className="w-full px-3 py-2 bg-input border border-border rounded text-sm text-card-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
              </div>

              <div className="mt-2 flex gap-2">
                <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded">Lưu</button>
                <button type="button" onClick={() => { setForm({ name: user.name, email: user.email, phone: (user as any).phone || '', address: (user as any).address || '', cardNumber: (user as any).cardNumber || '', bank: (user as any).bank || '' }); }} className="px-4 py-2 border rounded">Khôi phục</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
