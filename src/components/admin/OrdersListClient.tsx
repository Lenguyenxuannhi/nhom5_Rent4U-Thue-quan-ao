"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getAll, remove } from '@/lib/client-db'
import { getBasePath, productHref } from '@/lib/base-path'

export default function OrdersListClient({ orders: initialOrders }: { orders?: any[] }) {
  const router = useRouter()
  const [orders, setOrders] = useState<any[]>(initialOrders ?? [])

  useEffect(() => {
    if (initialOrders) return
    ;(async () => {
      const data = await getAll('orders')
      setOrders(Array.isArray(data) ? data : [])
    })()
  }, [initialOrders])

  const handleDelete = async (id: string) => {
    if (!confirm('Delete order?')) return
    const token = sessionStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }
    const ok = await remove('orders', id)
    if (!ok) {
      alert('Delete failed')
      return
    }
    setOrders((prev) => prev.filter((order) => String(order.id) !== String(id)))
  }

  return (
    <div>
      <div className="mb-4">
        <Link href="/admin/orders/new" className="px-3 py-1 bg-green-600 text-white rounded">Add Order</Link>
      </div>

      <div className="overflow-auto bg-white dark:bg-gray-800 p-2 rounded">
        <table className="min-w-full table-auto border-collapse text-gray-900 dark:text-white">
          <thead>
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Buyer</th>
              <th className="p-2 text-left">Products</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Total</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o: any) => (
              <tr key={o.id} className="border-t odd:bg-white dark:odd:bg-gray-700 even:bg-gray-50 dark:even:bg-gray-800">
                <td className="p-2 align-top">{o.id}</td>
                <td className="p-2 align-top">
                  <div className="font-medium">{o.buyer?.name || o.buyer?.fullName || o.buyer?.userName || '—'}</div>
                  <div className="text-sm text-gray-500">{o.buyer?.email}</div>
                  <div className="text-sm text-gray-500">{o.buyer?.phone}</div>
                </td>
                <td className="p-2 align-top">
                  <ul className="list-disc pl-5 space-y-1">
                    {(o.items || []).map((it: any, idx: number) => {
                      const pid = it.productSnapshot?.id || it.productId || it.product || null
                      const name = it.productSnapshot?.name || it.name || `Sản phẩm ${pid}`
                      const href = pid ? productHref(String(pid)) : '#'
                      return (
                        <li key={idx}>
                          <Link href={href} className="text-blue-600 hover:underline">{name}</Link>
                          {it.rentalDays ? <span className="text-sm text-gray-500"> — {it.rentalDays} ngày</span> : null}
                        </li>
                      )
                    })}
                  </ul>
                </td>
                <td className="p-2 align-top">{o.status}</td>
                <td className="p-2 align-top">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(o.total ?? o.totalPrice ?? 0))}</td>
                <td className="p-2 align-top space-x-2">
                  <Link href={`/admin/orders/${o.id}/edit`} className="px-2 py-1 bg-blue-500 text-white rounded">Edit</Link>
                  <button type="button" onClick={() => handleDelete(o.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                  <button
                    type="button"
                    onClick={() => {
                      const basePath = getBasePath()
                      window.open(
                        `${basePath}/orders/not-built/invoice?id=${encodeURIComponent(String(o.id))}`,
                        '_blank'
                      )
                    }}
                    className="px-2 py-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded"
                  >
                    Xem hóa đơn
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
