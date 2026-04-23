'use client'

import { useEffect, useState } from 'react'
import StatCard from '@/components/admin/StatCard'
import { getAll } from '@/lib/client-db'

export default function AdminPage() {
  const [counts, setCounts] = useState({
    users: 0,
    products: 0,
    shops: 0,
    orders: 0,
  })
  const [reports, setReports] = useState<any[]>([])

  useEffect(() => {
    ;(async () => {
      const [users, products, shops, orders, reportsData] = await Promise.all([
        getAll('users'),
        getAll('products'),
        getAll('shops'),
        getAll('orders'),
        getAll('reports'),
      ])

      setCounts({
        users: Array.isArray(users) ? users.length : 0,
        products: Array.isArray(products) ? products.length : 0,
        shops: Array.isArray(shops) ? shops.length : 0,
        orders: Array.isArray(orders) ? orders.length : 0,
      })
      setReports(Array.isArray(reportsData) ? reportsData : [])
    })()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <StatCard title="Users" value={counts.users} />
        <StatCard title="Products" value={counts.products} />
        <StatCard title="Shops" value={counts.shops} />
        <StatCard title="Orders" value={counts.orders} />
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-medium mb-2">Recent Reports</h2>
        <ul className="space-y-2">
          {reports.slice(0, 5).map((report: any) => (
            <li key={report.id} className="p-3 bg-white dark:bg-gray-800 rounded">
              <div className="font-medium">{report.name} — {report.type}</div>
              <div className="text-sm text-gray-500">{report.message ?? report.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
