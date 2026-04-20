"use client"

import React, { useState } from 'react'
import { useAuth } from '@/components/AuthProvider'
import { useRouter } from 'next/navigation'
import { addToCartFor } from '@/lib/user-storage'

export default function AddToCartClient({ product }: { product: any }) {
  const [size, setSize] = useState(product.sizes?.[0] ?? '')
  const [color, setColor] = useState(product.colors?.[0]?.name ?? '')
  const [qty, setQty] = useState(1)
  const [message, setMessage] = useState('')
  const { user } = useAuth()
  const router = useRouter()

  function addToCart() {
    try {
      if (!user) { router.push('/login'); return }
      addToCartFor(user, product.id, qty)
      setMessage('Đã thêm vào giỏ hàng')
      setTimeout(() => setMessage(''), 1500)
    } catch (err) {
      setMessage('Lỗi khi thêm vào giỏ')
      setTimeout(() => setMessage(''), 1500)
    }
  }

  return (
    <div className="space-y-3">
      {product.sizes && product.sizes.length > 0 && (
        <div>
          <label className="text-xs text-muted-foreground">Size</label>
          <select value={size} onChange={(e) => setSize(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-input text-foreground">
            {product.sizes.map((s: string) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      )}

      {product.colors && product.colors.length > 0 && (
        <div>
          <label className="text-xs text-muted-foreground">Màu</label>
          <select value={color} onChange={(e) => setColor(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-input text-foreground">
            {product.colors.map((c: any) => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label className="text-xs text-muted-foreground">Số lượng</label>
        <input type="number" min={1} value={qty} onChange={(e) => setQty(Math.max(1, Number(e.target.value)))} className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-input text-foreground" />
      </div>

      <div className="flex items-center gap-2">
        <button onClick={addToCart} className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg">Thêm vào giỏ</button>
      </div>

      {message && <div className="text-sm text-muted-foreground">{message}</div>}
    </div>
  )
}
