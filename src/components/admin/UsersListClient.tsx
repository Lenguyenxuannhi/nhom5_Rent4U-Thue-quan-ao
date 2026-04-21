"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getAll, remove } from '@/lib/client-db'

export default function UsersListClient({ users: initialUsers }: { users?: any[] }) {
  const router = useRouter()
  const [users, setUsers] = useState<any[]>(initialUsers ?? [])

  useEffect(() => {
    if (initialUsers) return
    ;(async () => {
      const data = await getAll('users')
      setUsers(Array.isArray(data) ? data : [])
    })()
  }, [initialUsers])

  const handleDelete = async (id: string) => {
    if (!confirm('Delete user?')) return
    const token = sessionStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }
    const ok = await remove('users', id)
    if (!ok) {
      alert('Delete failed')
      return
    }
    setUsers((prev) => prev.filter((user) => String(user.id) !== String(id)))
  }

  return (
    <div>
      <div className="mb-4">
        <Link href="/admin/users/new" className="px-3 py-1 bg-green-600 text-white rounded">Add User</Link>
      </div>

      <div className="overflow-auto bg-white dark:bg-gray-800 p-2 rounded">
        <table className="min-w-full table-auto border-collapse text-gray-900 dark:text-white">
          <thead>
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Role</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u: any) => (
              <tr key={u.id} className="border-t odd:bg-white dark:odd:bg-gray-700 even:bg-gray-50 dark:even:bg-gray-800">
                <td className="p-2 align-top">{u.id}</td>
                <td className="p-2 align-top">{u.name}</td>
                <td className="p-2 align-top">{u.email}</td>
                <td className="p-2 align-top">{u.role}</td>
                <td className="p-2 align-top space-x-2">
                  <Link href={`/admin/users/${u.id}/edit`} className="px-2 py-1 bg-blue-500 text-white rounded">Edit</Link>
                  <button type="button" onClick={() => handleDelete(u.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
