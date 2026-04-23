"use client"
import React, { useState } from 'react'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'

export default function ImageGalleryClient({ images = [] }: { images?: string[] }) {
  const [active, setActive] = useState(0)

  return (
    <div className="space-y-3">
      <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
        <ImageWithFallback src={images[active] || ''} alt={`Ảnh sản phẩm ${active + 1}`} className="w-full h-full object-cover transition-all duration-200" />
      </div>

      {images && images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Xem ảnh ${i + 1}`}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${i === active ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
            >
              <ImageWithFallback src={src} alt={`Ảnh ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
