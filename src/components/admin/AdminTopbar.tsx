"use client"

import React from 'react'
import { getBasePath } from '@/lib/base-path'

export default function AdminTopbar() {
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('adminToken')
      const basePath = getBasePath()
      window.location.href = `${basePath}/admin/login`
    }
  }

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-black border-b">
      <div className="text-lg font-semibold">Admin</div>
      <div>
        <button onClick={handleLogout} className="px-3 py-1 bg-red-500 text-white rounded">Logout</button>
      </div>
    </header>
  )
}
