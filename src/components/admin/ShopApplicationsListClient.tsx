"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getAll, getById, save } from '@/lib/client-db'

export default function ShopsApplicationsListClient({ applications = [] }: { applications?: any[] }) {
  const [apps, setApps] = useState(applications || [])
  const router = useRouter()

  useEffect(() => {
    if (applications.length > 0) return
    ;(async () => {
      const items = await getAll('shopApplications')
      setApps(Array.isArray(items) ? items : [])
    })()
  }, [applications])

  const handleAction = async (id: string, status: 'approved' | 'declined') => {
    const token = sessionStorage.getItem('adminToken')
    if (!token) return router.push('/admin/login')
    const current = await getById('shopApplications', id)
    if (!current) return alert('Action failed')

    const next = await save('shopApplications', {
      ...current,
      status,
      adminNote: current.adminNote ?? null,
      processedAt: new Date().toISOString(),
    })

    if (status === 'approved') {
      await save('shops', {
        name: current.shopName || current.name || 'My Shop',
        ownerId: current.userId,
        address: current.address || '',
        phone: current.phone || '',
        isActive: true,
        createdAt: new Date().toISOString(),
      })

      const user = await getById('users', current.userId)
      if (user) {
        await save('users', { ...user, role: 'shopowner' })
      }
    }

    if (!next) return alert('Action failed')
    setApps((prev) => prev.map((app: any) => (app.id === id ? { ...app, status } : app)))
  }

  return (
    <div>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="text-left p-2">ID</th>
            <th className="text-left p-2">Shop Name</th>
            <th className="text-left p-2">User</th>
            <th className="text-left p-2">Status</th>
            <th className="text-left p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {apps.map((a: any) => (
            <tr key={a.id} className="border-t">
              <td className="p-2 align-top text-sm">{a.id}</td>
              <td className="p-2 align-top">{a.shopName}</td>
              <td className="p-2 align-top text-sm">{a.userId}</td>
              <td className="p-2 align-top text-sm">{a.status}</td>
              <td className="p-2 align-top text-sm">
                {a.status === 'pending' && (
                  <div className="flex gap-2">
                    <button onClick={() => handleAction(a.id, 'approved')} className="px-2 py-1 bg-green-600 text-white rounded">Approve</button>
                    <button onClick={() => handleAction(a.id, 'declined')} className="px-2 py-1 bg-red-600 text-white rounded">Decline</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
