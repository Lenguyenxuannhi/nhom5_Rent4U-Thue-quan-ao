"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getAll, remove } from '@/lib/client-db'

export default function ShopsListClient({ shops: initialShops }: { shops?: any[] }) {
  const router = useRouter()
  const [shops, setShops] = useState<any[]>(initialShops ?? [])

  useEffect(() => {
    if (initialShops) return
    ;(async () => {
      const data = await getAll('shops')
      setShops(Array.isArray(data) ? data : [])
    })()
  }, [initialShops])

  const handleDelete = async (id: string) => {
    if (!confirm('Delete shop?')) return
    const token = sessionStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }
    const ok = await remove('shops', id)
    if (!ok) {
      alert('Delete failed')
      return
    }
    setShops((prev) => prev.filter((shop) => String(shop.id) !== String(id)))
  }

  return (
    <div>
      <div className="mb-4">
        <Link href="/admin/shops/new" className="px-3 py-1 bg-green-600 text-white rounded">Add Shop</Link>
      </div>

      <div className="overflow-auto bg-white dark:bg-gray-800 p-2 rounded">
        <table className="min-w-full table-auto border-collapse text-gray-900 dark:text-white">
          <thead>
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Owner</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((s: any) => (
              <tr key={s.id} className="border-t odd:bg-white dark:odd:bg-gray-700 even:bg-gray-50 dark:even:bg-gray-800">
                <td className="p-2 align-top">{s.id}</td>
                <td className="p-2 align-top">{s.name}</td>
                <td className="p-2 align-top">{s.ownerId}</td>
                <td className="p-2 align-top space-x-2">
                  <Link href={`/admin/shops/${s.id}/edit`} className="px-2 py-1 bg-blue-500 text-white rounded">Edit</Link>
                  <button type="button" onClick={() => handleDelete(s.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
