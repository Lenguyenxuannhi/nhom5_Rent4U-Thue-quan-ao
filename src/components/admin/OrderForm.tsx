"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getById } from '@/lib/client-db'

export default function OrderForm({ initialValues, entityId }: { initialValues?: any; entityId?: string }) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const [userId, setUserId] = useState(initialValues?.userId ?? '')
  const [productId, setProductId] = useState(initialValues?.productId ?? '')
  const [status, setStatus] = useState(initialValues?.status ?? 'pending')
  const [totalPrice, setTotalPrice] = useState(initialValues?.totalPrice ?? '')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (initialValues) {
      setUserId(initialValues.userId ?? '')
      setProductId(initialValues.productId ?? '')
      setStatus(initialValues.status ?? 'pending')
      setTotalPrice(initialValues.totalPrice ?? '')
    }
  }, [initialValues])

  useEffect(() => {
    if (initialValues || !entityId) return
    ;(async () => {
      const order = await getById('orders', entityId)
      if (!order) return
      setUserId(order.userId ?? '')
      setProductId(order.productId ?? '')
      setStatus(order.status ?? 'pending')
      setTotalPrice(order.totalPrice ?? order.total ?? '')
    })()
  }, [entityId, initialValues])

  if (!mounted) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    const token = sessionStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }

    const payload: any = {
      id: initialValues?.id ?? entityId,
      userId,
      productId,
      status,
      totalPrice: Number(totalPrice) || 0,
    }

    try {
      const { save } = await import('@/lib/client-db')
      const saved = await save('orders', payload)
      if (saved) router.push('/admin/orders')
      else setError('Save failed')
    } catch (e) {
      setError('Save failed')
    }
    setSaving(false)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl bg-white dark:bg-gray-800 p-4 rounded shadow space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">User ID</label>
        <input value={userId} onChange={(e) => setUserId(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Product ID</label>
        <input value={productId} onChange={(e) => setProductId(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-white">
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="cancelled">Cancelled</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Total Price</label>
        <input type="number" value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      {error && <div className="text-red-500">{error}</div>}

      <div>
        <button disabled={saving} className="px-3 py-2 bg-blue-600 text-white rounded">
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  )
}
