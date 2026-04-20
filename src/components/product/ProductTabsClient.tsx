"use client"
import React, { useState } from 'react'
import { StarRating } from '@/components/ui/StarRating'

type Tab = 'description' | 'details' | 'reviews'

export default function ProductTabsClient({ product }: { product: any }) {
  const [tab, setTab] = useState<Tab>('description')

  const tabs: { key: Tab; label: string }[] = [
    { key: 'description', label: 'Mô tả' },
    { key: 'details', label: 'Thông tin' },
    { key: 'reviews', label: `Đánh giá (${product.reviewCount ?? 0})` },
  ]

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      <div className="flex border-b border-border">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              tab === t.key
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-4">
        {tab === 'description' && (
          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
            {product.description || 'Chưa có mô tả.'}
          </p>
        )}

        {tab === 'details' && (
          <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {[
              ['Danh mục', product.category],
              ['Tình trạng', product.condition],
              ['Trạng thái', product.isAvailable ? 'Còn trống' : 'Đã thuê'],
              ['Nhà cung cấp', product.provider],
              ['Sizes', (product.sizes || []).join(', ') || '—'],
              ['Màu sắc', (product.colors || []).map((c: any) => (typeof c === 'string' ? c : c.name)).join(', ') || '—'],
              ['Tags', (product.tags || []).join(', ') || '—'],
            ].map(([label, value]) => (
              <React.Fragment key={String(label)}>
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="font-medium">{value || '—'}</dd>
              </React.Fragment>
            ))}
          </dl>
        )}

        {tab === 'reviews' && (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold">{product.rating?.toFixed(1) ?? '—'}</div>
              <div>
                <StarRating rating={product.rating} count={product.reviewCount} />
                <p className="text-xs text-muted-foreground mt-1">{product.reviewCount ?? 0} đánh giá</p>
              </div>
            </div>

            <div className="space-y-3">
              {(product.reviews && product.reviews.length > 0 ? product.reviews : generatePlaceholderReviews(product.rating, product.reviewCount)).map((r: any, i: number) => (
                <div key={i} className="border border-border rounded-xl p-3 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{r.author}</span>
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                  </div>
                  <StarRating rating={r.rating} />
                  <p className="text-sm text-muted-foreground">{r.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function generatePlaceholderReviews(rating: number, count: number) {
  if (!count || count === 0) return []
  const samples = [
    { author: 'Nguyễn Thị H.', comment: 'Sản phẩm rất đẹp, đúng như mô tả, giao nhanh.' },
    { author: 'Trần Minh T.', comment: 'Chất liệu tốt, mặc rất thoải mái, sẽ thuê lại.' },
    { author: 'Lê Thu P.', comment: 'Màu sắc đẹp, size chuẩn, nhà cung cấp nhiệt tình.' },
    { author: 'Phạm Lan A.', comment: 'Hài lòng với sản phẩm, giao hàng đúng hẹn.' },
    { author: 'Hoàng Yến N.', comment: 'Đầm rất xinh, được khen nhiều khi mặc dự tiệc.' },
  ]
  return samples.slice(0, Math.min(3, count)).map((s, i) => ({
    ...s,
    rating: Math.max(3, Math.round(rating) - (i % 2 === 0 ? 0 : 1)),
    date: `${10 + i}/0${(i % 3) + 1}/2025`,
  }))
}
