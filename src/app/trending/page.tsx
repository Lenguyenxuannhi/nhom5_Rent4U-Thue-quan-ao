'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { Product } from '@/data/products'
import { HERO_IMAGE } from '@/data/products'
import { ProductCard } from '@/components/ui/ProductCard'
import { getAll } from '@/lib/client-db'

const LIMIT = 12

function scoreProduct(product: Product) {
  const rating = Number(product.rating || 0)
  const reviews = Number(product.reviewCount || 0)
  const providerRentals = Number((product as any).providerTotalRentals || 0)
  let score = rating * 20 + reviews + providerRentals * 0.1
  if (product.isTrending) score += 15
  if (product.isFeatured) score += 8
  if (product.isNew) score += 4
  return score
}

export default function TrendingPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    ;(async () => {
      const data = await getAll('products')
      setProducts(Array.isArray(data) ? (data as Product[]) : [])
      setLoaded(true)
    })()
  }, [])

  const scored = products
    .map((product) => ({ product, score: scoreProduct(product) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, LIMIT)
    .map((entry) => entry.product)

  if (!loaded) {
    return <div className="px-4 py-10">Đang tải xu hướng...</div>
  }

  return (
    <div className="px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center mb-8">
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden h-56 sm:h-72 md:h-96">
              <img src={HERO_IMAGE} alt="Xu hướng thời trang" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute left-6 bottom-6 text-white">
                <h1 className="text-3xl font-bold">Sản phẩm Xu Hướng</h1>
                <p className="mt-1 text-sm max-w-xl">Những món đồ được thuê nhiều và được đánh giá cao — lựa chọn hàng đầu của cộng đồng.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-card rounded-2xl p-4 border border-border">
              <h3 className="text-sm font-semibold">Top Xu hướng</h3>
              <p className="text-sm text-muted-foreground mt-2">Sắp xếp theo đánh giá, lượt thuê và xu hướng hiện thời.</p>
              <Link href="/products" className="inline-block mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm">Khám phá tất cả</Link>
            </div>
          </div>
        </div>

        {scored.length === 0 ? (
          <div className="py-12 text-center w-full">
            <h3 className="text-lg font-semibold">Chưa có sản phẩm xu hướng</h3>
            <p className="text-sm text-muted-foreground mt-2">Hãy thử quay lại sau hoặc duyệt toàn bộ danh sách sản phẩm.</p>
            <div className="mt-4 flex justify-center">
              <Link href="/products" className="px-4 py-2 border rounded-lg">Xem tất cả sản phẩm</Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {scored.map((product) => (
              <ProductCard key={product.id} product={product as any} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
