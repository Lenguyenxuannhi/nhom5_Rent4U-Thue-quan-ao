"use client"
import React, { useState } from 'react'
import { useAuth } from '@/components/AuthProvider'
import { useRouter } from 'next/navigation'
import { addToCartFor } from '@/lib/user-storage'

export default function BookingPanelClient({ product }: { product: any }) {
  const [size, setSize] = useState(product.sizes?.[0] ?? '')
  const [color, setColor] = useState(product.colors?.[0]?.name ?? (product.colors?.[0] ?? ''))
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [message, setMessage] = useState('')
  const { user } = useAuth()
  const router = useRouter()

  const today = new Date().toISOString().split('T')[0]

  const rentalDays = (() => {
    if (!startDate || !endDate) return 0
    const diff = new Date(endDate).getTime() - new Date(startDate).getTime()
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
  })()

  const rentalTotal = rentalDays * (product.pricePerDay ?? 0)

  const formatVND = (n: number) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n)

  function addToCart() {
    if (!startDate || !endDate) {
      setMessage('Vui lòng chọn ngày thuê')
      setTimeout(() => setMessage(''), 2000)
      return
    }
    if (rentalDays <= 0) {
      setMessage('Ngày trả phải sau ngày nhận')
      setTimeout(() => setMessage(''), 2000)
      return
    }
    try {
      if (!user) { router.push('/login'); return }
      // use per-user cart helper and store booking details
      const extras = { name: product.name, image: product.images?.[0], size, color, startDate, endDate, rentalDays, pricePerDay: product.pricePerDay, rentalTotal, depositAmount: product.depositAmount }
      const next = addToCartFor(user, product.id, 1, extras)
      setMessage(`✓ Đã thêm vào giỏ (${rentalDays} ngày)`)
      setTimeout(() => setMessage(''), 2500)
    } catch {
      setMessage('Lỗi khi thêm vào giỏ')
      setTimeout(() => setMessage(''), 2000)
    }
  }

  return (
    <div className="bg-card rounded-2xl border border-border p-4 space-y-4 lg:sticky lg:top-4">
      <div>
        <h1 className="text-lg font-bold leading-snug">{product.name}</h1>
        <p className="text-xs text-muted-foreground mt-0.5">{product.provider}</p>
      </div>

      <div className="border-t border-border pt-3">
        <div className="text-2xl font-bold text-primary">{formatVND(product.pricePerDay)}<span className="text-sm font-normal text-muted-foreground"> / ngày</span></div>
        <div className="text-xs text-muted-foreground mt-0.5">Tiền cọc: {formatVND(product.depositAmount ?? 0)}</div>
      </div>

      {product.sizes?.length > 0 && (
        <div>
          <label className="text-xs font-medium text-muted-foreground">Kích cỡ</label>
          <div className="flex flex-wrap gap-2 mt-1.5">
            {product.sizes.map((s: string) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-3 py-1 text-sm rounded-lg border transition-colors ${
                  size === s
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background border-border hover:border-primary'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {product.colors?.length > 0 && (
        <div>
          <label className="text-xs font-medium text-muted-foreground">Màu sắc</label>
          <div className="flex flex-wrap gap-2 mt-1.5">
            {product.colors.map((c: any) => {
              const name = typeof c === 'string' ? c : c.name
              const hex = typeof c === 'object' ? c.hex : null
              return (
                <button
                  key={name}
                  onClick={() => setColor(name)}
                  className={`flex items-center gap-1.5 px-3 py-1 text-sm rounded-lg border transition-colors ${
                    color === name
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background border-border hover:border-primary'
                  }`}
                >
                  {hex && <span className="w-3 h-3 rounded-full border border-white/20 inline-block" style={{ backgroundColor: hex }} />}
                  {name}
                </button>
              )
            })}
          </div>
        </div>
      )}

      <div className="border-t border-border pt-3 space-y-3">
        <p className="text-xs font-medium text-muted-foreground">Chọn ngày thuê</p>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-xs text-muted-foreground">Ngày nhận</label>
            <input
              type="date"
              value={startDate}
              min={today}
              onChange={(e) => {
                setStartDate(e.target.value)
                if (endDate && e.target.value >= endDate) setEndDate('')
              }}
              className="w-full mt-1 px-3 py-2 text-sm rounded-lg border border-border bg-input text-foreground"
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Ngày trả</label>
            <input
              type="date"
              value={endDate}
              min={startDate || today}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full mt-1 px-3 py-2 text-sm rounded-lg border border-border bg-input text-foreground"
            />
          </div>
        </div>
      </div>

      {rentalDays > 0 && (
        <div className="bg-muted rounded-xl p-3 space-y-1.5 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">{formatVND(product.pricePerDay)} × {rentalDays} ngày</span>
            <span>{formatVND(rentalTotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tiền cọc</span>
            <span>{formatVND(product.depositAmount ?? 0)}</span>
          </div>
          <div className="flex justify-between font-semibold border-t border-border pt-1.5">
            <span>Tổng cộng</span>
            <span className="text-primary">{formatVND(rentalTotal + (product.depositAmount ?? 0))}</span>
          </div>
        </div>
      )}

      <button
        onClick={addToCart}
        disabled={!product.isAvailable}
        className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
          product.isAvailable
            ? 'bg-primary text-primary-foreground hover:opacity-90'
            : 'bg-muted text-muted-foreground cursor-not-allowed'
        }`}
      >
        {product.isAvailable ? 'Thêm vào giỏ hàng' : 'Sản phẩm đã được thuê'}
      </button>

      {message && (
        <div className={`text-sm text-center py-2 rounded-lg ${message.startsWith('✓') ? 'text-green-600 bg-green-50' : 'text-red-500 bg-red-50'}`}>
          {message}
        </div>
      )}

      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className={`w-2 h-2 rounded-full ${product.isAvailable ? 'bg-green-500' : 'bg-red-400'}`} />
        {product.isAvailable ? 'Còn trống, có thể đặt ngay' : 'Hiện đang được thuê'}
      </div>
    </div>
  )
}
