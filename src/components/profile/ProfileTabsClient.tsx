"use client";

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/components/AuthProvider';
import FavoritesClient from '@/components/favorites/FavoritesClient';
import CartPageClient from '@/components/cart/CartPageClient';
import { getAll, getById } from '@/lib/client-db'
import { getUserRatings } from '@/lib/rating-client'
import Link from 'next/link'
import { StarRating } from '@/components/ui/StarRating'

export default function ProfileTabsClient() {
  const { user, update } = useAuth();
  const [tab, setTab] = useState<'overview' | 'favorites' | 'cart' | 'settings' | 'orders' | 'reviews'>('overview');

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    bank: '',
  });
  const [orders, setOrders] = useState<any[]>([])
  const [userRatings, setUserRatings] = useState<any[]>([])
  const [enrichedRatings, setEnrichedRatings] = useState<any[]>([])

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
    ;(async () => {
      try {
        const all = await getAll('orders')
        const list = Array.isArray(all) ? all as any[] : []
        const matched = list.filter((o: any) => {
          // try a few matching heuristics
          if (!o) return false
          if (o.userId && user.id && String(o.userId) === String(user.id)) return true
          if (o.buyer && o.buyer.userId && user.id && String(o.buyer.userId) === String(user.id)) return true
          if (o.buyer && o.buyer.email && user.email && String(o.buyer.email) === String(user.email)) return true
          return false
        })
        setOrders(matched.slice().sort((a: any, b: any) => (b.createdAt || '').localeCompare(a.createdAt || '')))
      } catch (e) {
        setOrders([])
      }

      try {
        const r = await getUserRatings(String(user.id))
        setUserRatings(Array.isArray(r) ? r : [])
        const enriched = await Promise.all((Array.isArray(r) ? r : []).map(async (it: any) => {
          try {
            const p = await getById('products', String(it.productId))
            return { ...it, productName: p?.name ?? 'Sản phẩm' }
          } catch {
            return { ...it, productName: 'Sản phẩm' }
          }
        }))
        setEnrichedRatings(enriched)
      } catch {
        setUserRatings([])
        setEnrichedRatings([])
      }
    })()
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
          <button onClick={() => setTab('orders')} className={`px-3 py-2 rounded ${tab === 'orders' ? 'bg-muted' : ''}`}>Đơn hàng</button>
          <button onClick={() => setTab('reviews')} className={`px-3 py-2 rounded ${tab === 'reviews' ? 'bg-muted' : ''}`}>Đánh giá</button>
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

          {tab === 'orders' && (
            <div className="space-y-3">
              {orders.length === 0 && <div>Chưa có đơn hàng.</div>}
              {orders.map((o: any) => (
                <div key={o.id} className="border border-border rounded p-3 flex items-center justify-between">
                  <div>
                    <div className="font-medium">{o.buyer?.name ?? 'Khách'}</div>
                    <div className="text-sm text-muted-foreground">{new Date(o.createdAt || o.id || Date.now()).toLocaleString('vi-VN')}</div>
                    <div className="text-sm">Tổng: {(o.total ?? 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/orders/not-built/invoice?id=${encodeURIComponent(String(o.id))}`} className="px-3 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded">Xem hóa đơn</Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'reviews' && (
            <div className="space-y-3">
              {enrichedRatings.length === 0 && <div>Chưa có đánh giá nào.</div>}
              {enrichedRatings.map((r: any) => (
                <div key={r.id} className="border border-border rounded p-3">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{r.productName}</div>
                    <div className="text-xs text-muted-foreground">{r.date}</div>
                  </div>
                  <div className="mt-2">
                    <StarRating rating={r.rating} />
                    <div className="text-sm text-muted-foreground mt-2">{r.comment}</div>
                  </div>
                </div>
              ))}
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
