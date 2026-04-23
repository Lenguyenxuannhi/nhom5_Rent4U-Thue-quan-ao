"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getAll, remove } from '@/lib/client-db'
import ColorSwatch from '@/components/ui/ColorSwatch'

export default function ProductsListClient({ products: initialProducts }: { products?: any[] }) {
  const router = useRouter()
  const [products, setProducts] = useState<any[]>(initialProducts ?? [])

  useEffect(() => {
    if (initialProducts) return
    ;(async () => {
      const data = await getAll('products')
      setProducts(Array.isArray(data) ? data : [])
    })()
  }, [initialProducts])

  const handleDelete = async (id: string) => {
    if (!confirm('Delete product?')) return
    const token = sessionStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }
    const ok = await remove('products', id)
    if (!ok) {
      alert('Delete failed')
      return
    }
    setProducts((prev) => prev.filter((product) => String(product.id) !== String(id)))
  }

  return (
    <div>
      <div className="mb-4">
        <Link href="/admin/products/new" className="px-3 py-1 bg-green-600 text-white rounded">Add Product</Link>
      </div>

      <div className="overflow-auto bg-white dark:bg-gray-800 p-2 rounded">
        <table className="min-w-full table-auto border-collapse text-gray-900 dark:text-white">
          <thead>
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">Màu</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p: any) => (
              <tr key={p.id} className="border-t odd:bg-white dark:odd:bg-gray-700 even:bg-gray-50 dark:even:bg-gray-800">
                <td className="p-2 align-top">{p.id}</td>
                <td className="p-2 align-top">{p.name}</td>
                <td className="p-2 align-top">{p.category}</td>
                <td className="p-2 align-top">
                  <div className="flex items-center gap-1">
                    {(p.colors || []).slice(0,5).map((c: any, i: number) => (
                      <ColorSwatch key={i} color={c} size={14} />
                    ))}
                  </div>
                </td>
                <td className="p-2 align-top space-x-2">
                  <Link href={`/admin/products/${p.id}/edit`} className="px-2 py-1 bg-blue-500 text-white rounded">Edit</Link>
                  <button type="button" onClick={() => handleDelete(p.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
