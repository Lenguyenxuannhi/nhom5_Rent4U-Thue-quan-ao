"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { useAuth } from '@/components/AuthProvider'
import { readCart, writeCart } from '@/lib/user-storage'
import { getProductById } from '@/lib/public-db'

export default function CartPageClient() {
  const [cart, setCart] = useState<any[]>([])
  const [productsMap, setProductsMap] = useState<Record<string, any>>({})
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      router.push('/login')
      return
    }
    const parsed = readCart(user)
    setCart(parsed)
    loadProducts(parsed)
  }, [user])

  async function loadProducts(items: any[]) {
    const ids = Array.from(new Set(items.map((i: any) => i.productId)))
    const map: Record<string, any> = {}
    await Promise.all(ids.map(async (id) => {
      try {
        const p = await getProductById(String(id))
        map[id] = p ?? null
      } catch {
        map[id] = null
      }
    }))
    setProductsMap(map)
  }

  function updateQty(index: number, qty: number) {
    if (!user) return
    const next = [...cart]
    next[index] = { ...next[index], qty }
    writeCart(user, next)
    setCart(next)
  }

  function removeItem(index: number) {
    if (!user) return
    const next = [...cart]
    next.splice(index, 1)
    writeCart(user, next)
    setCart(next)
  }

  function handleCheckout() {
    router.push('/checkout')
  }

  const itemsTotal = cart.reduce((sum: number, it: any) => {
    const p = productsMap[it.productId]
    const pricePerDay = (p && (p.pricePerDay ?? p.price ?? 0)) || 0
    const days = it.rentalDays ?? 1
    const qty = it.qty ?? 1
    return sum + pricePerDay * days * qty
  }, 0)

  const depositTotal = cart.reduce((sum: number, it: any) => {
    const p = productsMap[it.productId]
    const deposit = (it.depositAmount ?? p?.depositAmount ?? 0) || 0
    const qty = it.qty ?? 1
    return sum + deposit * qty
  }, 0)

  const total = itemsTotal + depositTotal

  if (!cart || cart.length === 0) return (
    <div className="p-4">
      <div className="text-center">Giỏ hàng trống.</div>
      <div className="mt-4 text-center">
        <Link href="/products" className="px-3 py-2 bg-blue-600 text-white rounded">Tiếp tục mua</Link>
      </div>
    </div>
  )

  return (
    <div className="space-y-4">
      {cart.map((it, idx) => {
        const p = productsMap[it.productId]
        const pricePerDay = (p && (p.pricePerDay ?? p.price ?? 0)) || 0
        const days = it.rentalDays ?? 1
        const qty = it.qty ?? 1
        const itemTotal = pricePerDay * days * qty
        const itemDeposit = (it.depositAmount ?? p?.depositAmount ?? 0) * qty

        return (
          <div key={idx} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded border">
            <div className="w-24 h-24">
              <ImageWithFallback src={p?.images?.[0]} alt={p?.name || 'Product'} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="font-medium">{p?.name ?? 'Unknown product'}</div>
              <div className="text-sm text-muted-foreground">{p?.provider}</div>
              {it.startDate && it.endDate && (
                <div className="text-xs text-muted-foreground mt-1">Ngày thuê: {it.startDate} → {it.endDate} ({days} ngày)</div>
              )}
              <div className="mt-2 flex items-center gap-2">
                <label className="text-xs text-muted-foreground">Số lượng</label>
                <input type="number" min={1} value={qty} onChange={(e) => updateQty(idx, Math.max(1, Number(e.target.value)))} className="w-20 p-1 border rounded" />
                <button onClick={() => removeItem(idx)} className="px-2 py-1 bg-red-500 text-white rounded">Xóa</button>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(itemTotal)}</div>
              <div className="text-sm text-muted-foreground">Tiền cọc: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(itemDeposit)}</div>
            </div>
          </div>
        )
      })}

      <div className="p-4 bg-white dark:bg-gray-800 rounded border flex items-center justify-between">
        <div className="font-semibold">Tổng: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}</div>
        <div>
          <button onClick={handleCheckout} className="px-4 py-2 bg-green-600 text-white rounded">Thanh toán</button>
        </div>
      </div>
    </div>
  )
}
