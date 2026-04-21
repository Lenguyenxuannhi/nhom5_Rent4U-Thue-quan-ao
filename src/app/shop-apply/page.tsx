"use client"

import React, { useState } from 'react'
import { useAuth } from '@/components/AuthProvider'
import { useRouter } from 'next/navigation'

export default function ShopApplyPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [shopName, setShopName] = useState('')
  const [description, setDescription] = useState('')
  const [contactEmail, setContactEmail] = useState(user?.email || '')
  const [phone, setPhone] = useState('')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  if (!user) {
    if (typeof window !== 'undefined') router.push('/login')
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!shopName) return setMessage('Vui lòng nhập tên cửa hàng')
    setSaving(true)
    try {
      const { save } = await import('@/lib/client-db')
      const item = await save('shopApplications', { userId: user.id, shopName, description, contactEmail, phone, status: 'pending', createdAt: new Date().toISOString() })
      if (item) setMessage('Ứng dụng đã gửi. Quản trị viên sẽ xem xét.')
      else setMessage('Gửi thất bại')
    } catch (err) {
      setMessage('Lỗi khi gửi')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="max-w-2xl mx-auto px-4 bg-card p-6 rounded">
        <h1 className="text-xl font-bold mb-4">Apply to Open a Shop</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Shop Name</label>
            <input value={shopName} onChange={(e) => setShopName(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm mb-1">Contact Email</label>
            <input value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          {message && <div className="text-sm text-green-600">{message}</div>}
          <div>
            <button disabled={saving} className="px-4 py-2 bg-primary text-primary-foreground rounded">{saving ? 'Sending...' : 'Send Application'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}
