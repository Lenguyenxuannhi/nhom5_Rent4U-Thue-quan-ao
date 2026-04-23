"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getAll, remove } from '@/lib/client-db'

export default function ReportsListClient({ reports: initialReports }: { reports?: any[] }) {
  const router = useRouter()
  const [reports, setReports] = useState<any[]>(initialReports ?? [])

  useEffect(() => {
    if (initialReports) return
    ;(async () => {
      const data = await getAll('reports')
      setReports(Array.isArray(data) ? data : [])
    })()
  }, [initialReports])

  const handleDelete = async (id: string) => {
    if (!confirm('Delete report?')) return
    const token = sessionStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }
    const ok = await remove('reports', id)
    if (!ok) {
      alert('Delete failed')
      return
    }
    setReports((prev) => prev.filter((report) => String(report.id) !== String(id)))
  }

  return (
    <div>
      <div className="mb-4">
        <Link href="/admin/reports/new" className="px-3 py-1 bg-green-600 text-white rounded">Add Report</Link>
      </div>

      <div className="overflow-auto bg-white dark:bg-gray-800 p-2 rounded">
        <table className="min-w-full table-auto border-collapse text-gray-900 dark:text-white">
          <thead>
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Type</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Created</th>
              <th className="p-2 text-left">Resolved</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r: any) => (
              <tr key={r.id} className="border-t odd:bg-white dark:odd:bg-gray-700 even:bg-gray-50 dark:even:bg-gray-800">
                <td className="p-2 align-top">{r.id}</td>
                <td className="p-2 align-top">{r.type}</td>
                <td className="p-2 align-top">{r.name}</td>
                <td className="p-2 align-top">{r.email}</td>
                <td className="p-2 align-top">{r.createdAt}</td>
                <td className="p-2 align-top">{r.resolved ? 'Yes' : 'No'}</td>
                <td className="p-2 align-top space-x-2">
                  <Link href={`/admin/reports/${r.id}/edit`} className="px-2 py-1 bg-blue-500 text-white rounded">View</Link>
                  <button type="button" onClick={() => handleDelete(r.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
