"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getById, save } from '@/lib/client-db'

export default function ReportForm({ initialValues, entityId }: { initialValues?: any; entityId?: string }) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const [report, setReport] = useState<any>(initialValues ?? null)

  const [resolved, setResolved] = useState(initialValues?.resolved ?? false)
  const [adminNote, setAdminNote] = useState(initialValues?.adminNote ?? '')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (initialValues) {
      setReport(initialValues)
      setResolved(initialValues.resolved ?? false)
      setAdminNote(initialValues.adminNote ?? '')
    }
  }, [initialValues])

  useEffect(() => {
    if (initialValues || !entityId) return
    ;(async () => {
      const item = await getById('reports', entityId)
      if (!item) return
      setReport(item)
      setResolved(item.resolved ?? false)
      setAdminNote(item.adminNote ?? '')
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
      ...report,
      id: report?.id ?? initialValues?.id ?? entityId,
      resolved,
      adminNote,
    }

    const saved = await save('reports', payload)
    if (saved) {
      router.push('/admin/reports')
    } else {
      setError('Save failed')
    }
    setSaving(false)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl bg-white dark:bg-gray-800 p-4 rounded shadow space-y-4">
      {report && (
        <div className="bg-white dark:bg-gray-800 p-4 rounded border">
          <div className="font-medium">{report.type} — {report.name}</div>
          <div className="text-sm text-gray-500">{report.email}</div>
          <p className="mt-2">{report.message ?? report.description}</p>
        </div>
      )}
      <div>
        <label className="block text-sm font-medium mb-1">Resolved</label>
        <select value={resolved ? 'true' : 'false'} onChange={(e) => setResolved(e.target.value === 'true')} className="w-full p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-white">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Admin note</label>
        <textarea value={adminNote} onChange={(e) => setAdminNote(e.target.value)} className="w-full p-2 border rounded" />
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
