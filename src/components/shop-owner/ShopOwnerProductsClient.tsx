"use client"

import { useEffect, useState } from 'react'
import ShopOwnerProductForm from './ShopOwnerProductForm'
import { getAll, remove } from '@/lib/client-db'

export default function ShopOwnerProductsClient({ ownerId }: { ownerId?: string | null }) {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<any | null>(null)

  useEffect(() => {
    if (!ownerId) return
    ;(async () => {
      try {
        const items = await getAll('products')
        const list = Array.isArray(items)
          ? items.filter((product: any) => String(product.ownerId) === String(ownerId))
          : []
        setProducts(list)
      } catch {
        setProducts([])
      }
    })()
  }, [ownerId])

  const handleSaved = (item: any) => {
    setProducts((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id)
      if (idx === -1) return [item, ...prev]
      const copy = [...prev]
      copy[idx] = item
      return copy
    })
    setShowForm(false)
    setEditing(null)
  }

  const removeProduct = async (id: string) => {
    if (!ownerId) return
    if (!confirm('Delete product?')) return
    const ok = await remove('products', id)
    if (ok) setProducts((products) => products.filter((product) => product.id !== id))
    else alert('Failed')
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold">Your Products</h2>
        <div>
          {!showForm && (
            <button onClick={() => { setShowForm(true); setEditing(null) }} className="px-3 py-2 bg-green-600 text-white rounded">Add product</button>
          )}
        </div>
      </div>

      {showForm && (
        <div className="mb-4">
          <ShopOwnerProductForm ownerId={ownerId} initialValues={editing ?? undefined} onSaved={handleSaved} onCancel={() => { setShowForm(false); setEditing(null) }} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {products.map((p) => (
          <div key={p.id} className="p-3 bg-white dark:bg-gray-800 rounded border">
            <div className="flex items-center gap-3">
              {p.images?.[0]
                ? <img src={p.images[0]} alt={p.name} className="w-20 h-20 object-cover rounded" />
                : <div className="w-20 h-20 bg-gray-200 rounded" />
              }

              <div className="flex-1">
                <div className="font-semibold">{p.name}</div>
                <div className="text-sm text-muted-foreground">{p.provider || p.shopName || ''}</div>
                <div className="text-sm text-muted-foreground">
                  {p.pricePerDay ? `${p.pricePerDay} VND/day` : '—'} • Tiền cọc: {p.depositAmount ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p.depositAmount) : '—'}
                </div>
              </div>

              <div className="flex gap-2">
                <button onClick={() => { setEditing(p); setShowForm(true) }} className="px-2 py-1 bg-blue-500 text-white rounded">Edit</button>
                <button
                  onClick={() => removeProduct(p.id)}
                  className="px-2 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
