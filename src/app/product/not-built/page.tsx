'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import { getById } from '@/lib/client-db'
import ImageGalleryClient from '@/components/product/ImageGalleryClient'
import ProductTabsClient from '@/components/product/ProductTabsClient'
import BookingPanelClient from '@/components/product/BookingPanelClient'
import Link from 'next/link'
import { getBasePath } from '@/lib/base-path'

function ProductViewer() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) { setLoading(false); return }
    getById('products', id).then(p => {
      setProduct(p)
      setLoading(false)
    })
  }, [id])

  if (loading) return <div className="max-w-6xl mx-auto px-4 py-8">Đang tải...</div>
  if (!product) return <div className="max-w-6xl mx-auto px-4 py-8">Không tìm thấy sản phẩm.</div>

  return (
    <div className="px-4 py-8">
      <div className="max-w-6xl mx-auto">
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

export default function NotBuiltProductPage() {
  return (
    <Suspense fallback={<div className="max-w-6xl mx-auto px-4 py-8">Đang tải...</div>}>
      <ProductViewer />
    </Suspense>
  )
}
