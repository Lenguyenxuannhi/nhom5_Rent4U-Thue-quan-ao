"use client"

import Link from 'next/link'
import React from 'react'

export default function AdminSidebar() {
  return (
    <aside className="w-64 p-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/admin" className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Dashboard</Link>
          </li>
          <li>
            <Link href="/admin/products" className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Products</Link>
          </li>
          <li>
            <Link href="/admin/shops" className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Shops</Link>
          </li>
          <li>
            <Link href="/admin/users" className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Users</Link>
          </li>
          <li>
            <Link href="/admin/orders" className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Orders</Link>
          </li>
          <li>
            <Link href="/admin/reports" className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Reports</Link>
          </li>
          <li>
            <Link href="/admin/settings" className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
