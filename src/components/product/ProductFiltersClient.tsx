"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ProductFiltersClient({ initial }: { initial?: { category?: string; q?: string; min?: string; max?: string; available?: string } }) {
  const router = useRouter()
  const [q, setQ] = useState(initial?.q ?? '')
  const [category, setCategory] = useState(initial?.category ?? '')
  const [min, setMin] = useState(initial?.min ?? '')
  const [max, setMax] = useState(initial?.max ?? '')
  const [available, setAvailable] = useState(initial?.available === '1')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const p = new URLSearchParams()
    for (const [k, v] of fd.entries()) {
      if (v === null || v === '') continue
      if (p.has(k)) {
        p.append(k, String(v))
      } else {
        p.set(k, String(v))
      }
    }
    // always reset to first page when filtering
    p.set('page', '1')
    const qs = p.toString()
    const dest = `/products${qs ? `?${qs}` : ''}`
    router.push(dest)
  }

  const clearFilters = () => {
    setQ('')
    setCategory('')
    setMin('')
    setMax('')
    setAvailable(false)
    router.push('/products')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 items-end">
      <div>
        <label className="text-xs text-muted-foreground">Tìm kiếm</label>
        <input name="q" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tên, mô tả, tags" className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-input text-foreground" />
      </div>

      <div>
        <label className="text-xs text-muted-foreground">Danh mục</label>
        <input name="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Ví dụ: Đầm dạ hội" className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-input text-foreground" />
      </div>

      <div>
        <label className="text-xs text-muted-foreground">Giá từ (₫)</label>
        <input name="min" type="number" value={min} onChange={(e) => setMin(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-input text-foreground" />
      </div>

      <div>
        <label className="text-xs text-muted-foreground">Giá đến (₫)</label>
        <input name="max" type="number" value={max} onChange={(e) => setMax(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-input text-foreground" />
      </div>

      <div className="flex items-center gap-3">
        <label className="text-xs text-muted-foreground">Chỉ còn hàng</label>
        <input name="available" type="checkbox" value="1" checked={available} onChange={(e) => setAvailable(e.target.checked)} className="mt-1" />
        <div className="ml-auto flex gap-2">
          <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">Lọc</button>
          <button type="button" onClick={clearFilters} className="px-4 py-2 border rounded-lg">Xóa</button>
        </div>
      </div>
    </form>
  )
}
