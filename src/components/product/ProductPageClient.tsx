'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getById } from '@/lib/client-db'
import ImageGalleryClient from '@/components/product/ImageGalleryClient'
import ProductTabsClient from '@/components/product/ProductTabsClient'
import BookingPanelClient from '@/components/product/BookingPanelClient'

export default function ProductPageClient({ id }: { id: string }) {
  const [product, setProduct] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const found = await getById('products', id)
      setProduct(found ?? null)
      setLoading(false)
    })()
  }, [id])

  if (loading) {
    return <div className="px-4 py-8 max-w-6xl mx-auto">Đang tải sản phẩm...</div>
  }

  if (!product) {
    return <div className="px-4 py-8 max-w-6xl mx-auto">Không tìm thấy sản phẩm.</div>
  }

  return (
    <div className="px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted-foreground mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-foreground">Trang chủ</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-foreground">Sản phẩm</Link>
          <span>/</span>
          <span className="text-foreground truncate max-w-[200px]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-6">
            <ImageGalleryClient images={product.images || []} />
            <ProductTabsClient product={product} />
          </div>

          <div>
            <BookingPanelClient product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}
