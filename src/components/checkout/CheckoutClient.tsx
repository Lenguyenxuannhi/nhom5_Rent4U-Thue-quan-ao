"use client"

import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/AuthProvider'
import { readCart, writeCart } from '@/lib/user-storage'
import { getProductById } from '@/lib/public-db'

export default function CheckoutClient() {
  const [cart, setCart] = useState<any[]>([])
  const [productsMap, setProductsMap] = useState<Record<string, any>>({})
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [promoCode, setPromoCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [promoMessage, setPromoMessage] = useState<string | null>(null)
  const [promoError, setPromoError] = useState<string | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'ewallet' | 'cod' | 'mock'>('mock')
  const [formErrors, setFormErrors] = useState<Record<string, string | undefined>>({})
  const [savedMessage, setSavedMessage] = useState<string | null>(null)
  const savedTimeoutRef = useRef<number | null>(null)
  const nameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const phoneRef = useRef<HTMLInputElement | null>(null)
  const addressRef = useRef<HTMLInputElement | null>(null)
  const router = useRouter()
  const { user, update } = useAuth()

  useEffect(() => {
    if (!user) {
      router.push('/login')
      return
    }
    const parsed = readCart(user)
    setCart(parsed)
    loadProducts(parsed)
    // prefill buyer info from user
    if (user) {
      setName(user.name || '')
      setEmail(user.email || '')
      setPhone(user.phone || '')
      setAddress(user.address || '')
    }
  }, [user])

  useEffect(() => {
    return () => {
      if (savedTimeoutRef.current) clearTimeout(savedTimeoutRef.current)
    }
  }, [])

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

  function saveFieldOnBlur(field: 'name' | 'email' | 'phone' | 'address', value: string) {
    try {
      if (user && typeof update === 'function') {
        const trimmed = String(value || '').trim()
        const current = (user as any)?.[field] ?? ''
        const err = validateField(field, value)
        if (err) {
          setFormErrors(prev => ({ ...prev, [field]: err }))
          return
        }
        if (trimmed && String(current) !== trimmed) {
          update({ [field]: trimmed })
          setSavedMessage('Thông tin đã được lưu')
          if (savedTimeoutRef.current) clearTimeout(savedTimeoutRef.current)
          // window.setTimeout returns number in browsers
          // store id so we can clear on unmount
          // @ts-ignore-next-line
          savedTimeoutRef.current = window.setTimeout(() => setSavedMessage(null), 2000)
        }
      }
    } catch (e) {
      // ignore
    }
  }

  function validateField(field: 'name' | 'email' | 'phone' | 'address', value: string) {
    const v = String(value || '').trim()
    if (field === 'name') {
      if (!v) return 'Vui lòng nhập họ và tên'
      return null
    }
    if (field === 'email') {
      if (!v) return 'Vui lòng nhập email'
      // simple email check
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      if (!ok) return 'Email không hợp lệ'
      return null
    }
    if (field === 'phone') {
      if (!v) return 'Vui lòng nhập số điện thoại'
      const digits = v.replace(/\D/g, '')
      if (digits.length < 7) return 'Số điện thoại không hợp lệ'
      return null
    }
    if (field === 'address') {
      if (!v) return 'Vui lòng nhập địa chỉ'
      return null
    }
    return null
  }

  function validateAll(): string | null {
    const errs: Record<string, string> = {}
    ;(['name', 'email', 'phone', 'address'] as const).forEach((f) => {
      const val = (f === 'name' ? name : f === 'email' ? email : f === 'phone' ? phone : address) as string
      const e = validateField(f, val)
      if (e) errs[f] = e
    })
    setFormErrors(errs)
    if (Object.keys(errs).length === 0) return null
    return Object.keys(errs)[0]
  }

  const itemsTotal = cart.reduce((sum: number, it: any) => {
    const p = productsMap[it.productId]
    const pricePerDay = (it.pricePerDay ?? (p && (p.pricePerDay ?? p.price ?? 0))) || 0
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

  const fees = 0 // placeholder for extra charges (damage, late fees)
  const total = Math.max(0, itemsTotal + depositTotal + fees - discount)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setProcessing(true)
    setError(null)
    try {
      // validate required fields before proceeding
      const firstInvalid = validateAll()
      if (firstInvalid) {
        setError('Vui lòng hoàn thành các trường bắt buộc')
        // autofocus first invalid field
        if (firstInvalid === 'name' && nameRef.current) nameRef.current.focus()
        else if (firstInvalid === 'email' && emailRef.current) emailRef.current.focus()
        else if (firstInvalid === 'phone' && phoneRef.current) phoneRef.current.focus()
        else if (firstInvalid === 'address' && addressRef.current) addressRef.current.focus()
        setProcessing(false)
        return
      }

      // If user profile is missing fields, save them from checkout form for next time
      try {
        if (user && typeof update === 'function') {
          const patch: Record<string, any> = {}
          if ((!user.name || String(user.name).trim() === '') && name.trim()) patch.name = name.trim()
          if ((!user.email || String(user.email).trim() === '') && email.trim()) patch.email = email.trim()
          if ((!user.phone || String(user.phone).trim() === '') && phone.trim()) patch.phone = phone.trim()
          if ((!user.address || String(user.address).trim() === '') && address.trim()) patch.address = address.trim()
          if (Object.keys(patch).length > 0) update(patch)
        }
      } catch (e) {
        // non-fatal: continue checkout even if update fails
      }
      const payload = {
        items: cart,
        buyer: { name, email, phone, address },
        subtotal: itemsTotal,
        depositTotal,
        discount,
        fees,
        total,
        paymentMethod,
        promoCode: promoCode || undefined,
        paid: paymentMethod === 'mock',
      }
      try {
        const { save } = await import('@/lib/client-db')
        const saved = await save('orders', { ...payload, id: Date.now().toString(), createdAt: new Date().toISOString() })
        if (saved) {
          writeCart(user, [])
          const orderId = saved?.id || saved?.invoiceId || null
          if (orderId) router.push(`/checkout/success?orderId=${encodeURIComponent(String(orderId))}`)
          else router.push('/checkout/success')
        } else {
          setError('Checkout failed')
        }
      } catch (e) {
        setError('Checkout failed')
      }
    } catch (err) {
      setError('Checkout failed')
    }
    setProcessing(false)
  }

  if (!cart || cart.length === 0) return <div className="p-4">Giỏ hàng trống.</div>

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl p-4 bg-white dark:bg-gray-800 rounded space-y-4">
      <h2 className="text-lg font-semibold">Thông tin người nhận</h2>
      {savedMessage && (
        <div className="fixed top-4 right-4 z-50 px-3 py-2 rounded bg-green-600 text-white text-sm shadow">
          {savedMessage}
        </div>
      )}
      <div>
        <label className="text-sm">Họ và tên</label>
        <input
          ref={nameRef}
          value={name}
          onChange={(e) => { setName(e.target.value); setFormErrors(prev => ({ ...prev, name: undefined })) }}
          onBlur={() => { saveFieldOnBlur('name', name); const err = validateField('name', name); setFormErrors(prev => ({ ...prev, name: err || undefined })); }}
          className="w-full p-2 border rounded"
        />
        {formErrors.name && <div className="text-sm text-red-500 mt-1">{formErrors.name}</div>}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-sm">Email</label>
          <input
            ref={emailRef}
            value={email}
            onChange={(e) => { setEmail(e.target.value); setFormErrors(prev => ({ ...prev, email: undefined })) }}
            onBlur={() => { saveFieldOnBlur('email', email); const err = validateField('email', email); setFormErrors(prev => ({ ...prev, email: err || undefined })); }}
            className="w-full p-2 border rounded"
          />
          {formErrors.email && <div className="text-sm text-red-500 mt-1">{formErrors.email}</div>}
        </div>
        <div>
          <label className="text-sm">Số điện thoại</label>
          <input
            ref={phoneRef}
            value={phone}
            onChange={(e) => { setPhone(e.target.value); setFormErrors(prev => ({ ...prev, phone: undefined })) }}
            onBlur={() => { saveFieldOnBlur('phone', phone); const err = validateField('phone', phone); setFormErrors(prev => ({ ...prev, phone: err || undefined })); }}
            className="w-full p-2 border rounded"
          />
          {formErrors.phone && <div className="text-sm text-red-500 mt-1">{formErrors.phone}</div>}
        </div>
      </div>
      <div>
        <label className="text-sm">Địa chỉ</label>
        <input
          ref={addressRef}
          value={address}
          onChange={(e) => { setAddress(e.target.value); setFormErrors(prev => ({ ...prev, address: undefined })) }}
          onBlur={() => { saveFieldOnBlur('address', address); const err = validateField('address', address); setFormErrors(prev => ({ ...prev, address: err || undefined })); }}
          className="w-full p-2 border rounded"
        />
        {formErrors.address && <div className="text-sm text-red-500 mt-1">{formErrors.address}</div>}
      </div>

      <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded">
        <div className="flex justify-between">
          <div className="font-medium">Tổng</div>
          <div className="font-semibold">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}</div>
        </div>
      </div>

      <div className="p-4 bg-white dark:bg-gray-800 rounded border">
        <div className="flex justify-between">
          <div>Subtotal</div>
          <div>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(itemsTotal)}</div>
        </div>
        <div className="flex justify-between">
          <div>Deposit (tạm giữ)</div>
          <div>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(depositTotal)}</div>
        </div>
        <div className="flex justify-between">
          <div>Discount</div>
          <div>-{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discount)}</div>
        </div>
      </div>

      <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded text-sm text-yellow-800 dark:text-yellow-200">
        - Lưu ý: Trả muộn hoặc hư hỏng sẽ bị tính phí phụ thu theo mức do chủ cửa hàng quy định.
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-sm">Mã khuyến mãi</label>
          <div className="flex gap-2">
            <input value={promoCode} onChange={(e) => setPromoCode(e.target.value)} className="w-full p-2 border rounded" />
            <button type="button" onClick={() => {
              const code = (promoCode || '').trim().toUpperCase()
              const PROMOS: Record<string, any> = { PROMO10: { type: 'percent', value: 10 }, PROMO50K: { type: 'fixed', value: 50000 } }
              if (!code) {
                setPromoMessage(null)
                setPromoError(null)
                setDiscount(0)
                return
              }
              const p = PROMOS[code]
              if (p) {
                const d = p.type === 'percent' ? Math.round(itemsTotal * p.value / 100) : p.value
                setDiscount(d)
                setPromoMessage(`Mã ${code} áp dụng: -${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(d)}`)
                setPromoError(null)
              } else {
                setDiscount(0)
                setPromoMessage(null)
                setPromoError('Mã không hợp lệ')
              }
            }} className="px-3 py-2 bg-blue-600 text-white rounded">Áp dụng</button>
          </div>
          {promoMessage && <div className="mt-2 text-sm text-green-600">{promoMessage}</div>}
          {promoError && <div className="mt-2 text-sm text-red-500">{promoError}</div>}
        </div>
        <div>
          <label className="text-sm">Phương thức thanh toán</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value as any)} className="w-full p-2 border rounded bg-white text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600">
            <option value="card">Credit / Debit Card</option>
            <option value="ewallet">E-wallet</option>
            <option value="cod">Cash on delivery (COD)</option>
            <option value="mock">Mock (dev)</option>
          </select>
        </div>
      </div>

      {error && <div className="text-red-500">{error}</div>}

      <div>
        {/** disable submit if required fields missing or there are validation errors */}
        <button
          disabled={processing || Object.values(formErrors).some(Boolean) || !name.trim() || !email.trim() || !phone.trim() || !address.trim()}
          className={`px-4 py-2 rounded ${processing || Object.values(formErrors).some(Boolean) || !name.trim() || !email.trim() || !phone.trim() || !address.trim() ? 'bg-gray-400 text-gray-800 cursor-not-allowed' : 'bg-green-600 text-white'}`}
        >
          {processing ? 'Đang xử lý...' : 'Thanh toán (giả lập)'}
        </button>
      </div>
      </form>
    </div>
  )
}
