'use client'

import { Suspense, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import type { Product } from '@/data/products'
import { ProductCard } from '@/components/ui/ProductCard'
import ProductFiltersClient from '@/components/product/ProductFiltersClient'
import PaginationClient from '@/components/product/PaginationClient'
import { getAll } from '@/lib/client-db'

const PER_PAGE = 16

function ProductsPageContent() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    ;(async () => {
      const data = await getAll('products')
      setProducts(Array.isArray(data) ? (data as Product[]) : [])
      setLoaded(true)
    })()
  }, [])

  const category = searchParams.get('category') || ''
  const q = searchParams.get('q') || ''
  const min = parseInt(searchParams.get('min') || '', 10)
  const max = parseInt(searchParams.get('max') || '', 10)
  const available = searchParams.get('available') || ''
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10))

  const filtered = useMemo(() => {
    function normalize(value: string) {
      return value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
    }

    function matchesQuery(target: string, query: string) {
      const normalizedTarget = normalize(target)
      const tokens = normalize(query).split(' ').filter(Boolean)
      if (tokens.length === 0) return true
      return tokens.every((token) => normalizedTarget.includes(token))
    }

    return products.filter((product) => {
      if (category.trim() && !matchesQuery(String(product.category || ''), category.trim())) return false
      if (q.trim()) {
        const haystack = [
          String(product.name || ''),
          String(product.description || ''),
          String(product.provider || ''),
          String(product.category || ''),
          ...(Array.isArray(product.tags) ? product.tags.map(String) : []),
        ]
          .filter(Boolean)
          .join(' ')
        if (!matchesQuery(haystack, q.trim())) return false
      }
      if (!Number.isNaN(min) && product.pricePerDay < min) return false
      if (!Number.isNaN(max) && product.pricePerDay > max) return false
      if (available === '1' && !product.isAvailable) return false
      return true
    })
  }, [available, category, max, min, products, q])

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const start = (currentPage - 1) * PER_PAGE
  const paged = filtered.slice(start, start + PER_PAGE)

  if (!loaded) {
    return <div className="px-4 py-8">Đang tải sản phẩm...</div>
  }

  return (
    <div className="px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs text-primary uppercase">Sản phẩm</span>
            <h2 className="text-2xl font-bold mt-1">Danh sách sản phẩm</h2>
            <div className="text-sm text-muted-foreground">
              Hiển thị {total === 0 ? 0 : start + 1} - {Math.min(start + PER_PAGE, total)} trong {total} kết quả
            </div>
          </div>
        </div>

        <ProductFiltersClient initial={{ category, q, min: Number.isNaN(min) ? '' : String(min), max: Number.isNaN(max) ? '' : String(max), available }} />

        {paged.length === 0 ? (
          <div className="py-12 text-center w-full">
            <h3 className="text-lg font-semibold">Không tìm thấy sản phẩm nào</h3>
            <p className="text-sm text-muted-foreground mt-2">Thử bỏ bớt bộ lọc, thay đổi từ khoá hoặc xóa bộ lọc để xem tất cả sản phẩm.</p>
            <div className="mt-4 flex justify-center gap-2">
              <Link href="/products" className="px-4 py-2 border rounded-lg">Xóa bộ lọc</Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {paged.map((product) => (
              <ProductCard key={product.id} product={product as any} />
            ))}
          </div>
        )}

        <PaginationClient
          currentPage={currentPage}
          totalPages={totalPages}
          searchParams={{
            category,
            q,
            min: Number.isNaN(min) ? undefined : String(min),
            max: Number.isNaN(max) ? undefined : String(max),
            available,
          }}
        />
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="px-4 py-8">Đang tải sản phẩm...</div>}>
      <ProductsPageContent />
    </Suspense>
  )
}
