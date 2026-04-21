"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getById, save } from '@/lib/client-db'

export default function ShopForm({ initialValues, entityId }: { initialValues?: any; entityId?: string }) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const [name, setName] = useState(initialValues?.name ?? '')
  const [ownerId, setOwnerId] = useState(initialValues?.ownerId ?? '')
  const [address, setAddress] = useState(initialValues?.address ?? '')
  const [phone, setPhone] = useState(initialValues?.phone ?? '')
  const [isActive, setIsActive] = useState(initialValues?.isActive ?? true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (initialValues) {
      setName(initialValues.name ?? '')
      setOwnerId(initialValues.ownerId ?? '')
      setAddress(initialValues.address ?? '')
      setPhone(initialValues.phone ?? '')
      setIsActive(initialValues.isActive ?? true)
    }
  }, [initialValues])

  useEffect(() => {
    if (initialValues || !entityId) return
    ;(async () => {
      const shop = await getById('shops', entityId)
      if (!shop) return
      setName(shop.name ?? '')
      setOwnerId(shop.ownerId ?? '')
      setAddress(shop.address ?? '')
      setPhone(shop.phone ?? '')
      setIsActive(shop.isActive ?? true)
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
      id: initialValues?.id,
      name,
      ownerId,
      address,
      phone,
      isActive,
    }

    const saved = await save('shops', payload)
    if (saved) {
      router.push('/admin/shops')
    } else {
      setError('Save failed')
    }
    setSaving(false)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl bg-white dark:bg-gray-800 p-4 rounded shadow space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Owner ID</label>
        <input value={ownerId} onChange={(e) => setOwnerId(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Address</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Active</label>
        <select value={isActive ? 'true' : 'false'} onChange={(e) => setIsActive(e.target.value === 'true')} className="w-full p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-white">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
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
