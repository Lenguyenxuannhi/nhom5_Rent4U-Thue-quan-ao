"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getById, save } from '@/lib/client-db'

export default function UserForm({ initialValues, entityId }: { initialValues?: any; entityId?: string }) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const [name, setName] = useState(initialValues?.name ?? '')
  const [email, setEmail] = useState(initialValues?.email ?? '')
  const [role, setRole] = useState(initialValues?.role ?? 'user')
  const [phone, setPhone] = useState(initialValues?.phone ?? '')
  const [password, setPassword] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (initialValues) {
      setName(initialValues.name ?? '')
      setEmail(initialValues.email ?? '')
      setRole(initialValues.role ?? 'user')
      setPhone(initialValues.phone ?? '')
    }
  }, [initialValues])

  useEffect(() => {
    if (initialValues || !entityId) return
    ;(async () => {
      const user = await getById('users', entityId)
      if (!user) return
      setName(user.name ?? '')
      setEmail(user.email ?? '')
      setRole(user.role ?? 'user')
      setPhone(user.phone ?? '')
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
      email,
      role,
      phone,
    }
    if (password) payload.password = password

    const saved = await save('users', payload)
    if (saved) {
      router.push('/admin/users')
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
        <label className="block text-sm font-medium mb-1">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-white">
          <option value="user">User</option>
          <option value="owner">Shop Owner</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password (leave blank to keep)</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" />
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
