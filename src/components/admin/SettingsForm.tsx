"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { save } from '@/lib/client-db'

export default function SettingsForm({ initialValues }: { initialValues?: any }) {
  const router = useRouter()
  const [siteTitle, setSiteTitle] = useState(initialValues?.siteTitle ?? '')
  const [supportEmail, setSupportEmail] = useState(initialValues?.supportEmail ?? '')
  const [currency, setCurrency] = useState(initialValues?.currency ?? 'VND')
  const [maintenanceMode, setMaintenanceMode] = useState(initialValues?.maintenanceMode ?? false)
  const [itemsPerPage, setItemsPerPage] = useState(initialValues?.itemsPerPage ?? 10)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    if (initialValues) {
      setSiteTitle(initialValues.siteTitle ?? '')
      setSupportEmail(initialValues.supportEmail ?? '')
      setCurrency(initialValues.currency ?? 'VND')
      setMaintenanceMode(initialValues.maintenanceMode ?? false)
      setItemsPerPage(initialValues.itemsPerPage ?? 10)
    }
  }, [initialValues])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    setSuccess(null)

    const token = sessionStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }

    const payload = {
      siteTitle,
      supportEmail,
      currency,
      maintenanceMode,
      itemsPerPage: Number(itemsPerPage) || 10,
    }

    try {
      const saved = await save('settings', payload)
      if (saved) {
        setSuccess('Settings saved')
      } else {
        setError('Save failed')
      }
    } catch (err) {
      setError((err as Error).message || 'Save failed')
    }
    setSaving(false)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl bg-white dark:bg-gray-800 p-4 rounded shadow space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Site title</label>
        <input value={siteTitle} onChange={(e) => setSiteTitle(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Support email</label>
        <input value={supportEmail} onChange={(e) => setSupportEmail(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Currency</label>
        <input value={currency} onChange={(e) => setCurrency(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Items per page</label>
        <input type="number" value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Maintenance mode</label>
        <select value={maintenanceMode ? 'true' : 'false'} onChange={(e) => setMaintenanceMode(e.target.value === 'true')} className="w-full p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-white">
          <option value="false">Disabled</option>
          <option value="true">Enabled</option>
        </select>
      </div>

      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">{success}</div>}

      <div>
        <button disabled={saving} className="px-3 py-2 bg-blue-600 text-white rounded">
          {saving ? 'Saving...' : 'Save settings'}
        </button>
      </div>
    </form>
  )
}
