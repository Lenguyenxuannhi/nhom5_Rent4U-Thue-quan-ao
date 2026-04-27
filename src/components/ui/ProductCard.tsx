"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Product, formatPrice } from '../../data/products';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useAuth } from '@/components/AuthProvider';
import { toggleFavoriteFor, readFavorites } from '@/lib/user-storage';
import { useRouter } from 'next/navigation';
import { productHref } from '@/lib/base-path';
import { StarRating } from './StarRating';

export function ProductCard({ product }: { product: Product }) {
  const [isFav, setIsFav] = useState(false)
  const [message, setMessage] = useState('')
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    try {
      const favs = readFavorites(user)
      setIsFav(favs.includes(product.id))
    } catch {
      setIsFav(false)
    }
  }, [product.id, user])

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!user) {
      router.push('/login')
      return
    }
    try {
      const next = toggleFavoriteFor(user, product.id)
      setIsFav(Array.isArray(next) ? next.includes(product.id) : false)
    } catch {
      // ignore
    }
  }

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // redirect user to product detail so they can choose dates/options
    router.push(productHref(product.id))
  }

  return (
    <Link href={productHref(product.id)} className="block group">
      <div className="product-card bg-card rounded-2xl overflow-hidden border border-border p-2 relative">
        <div className="media aspect-[3/4] overflow-hidden">
          <ImageWithFallback src={product.images?.[0]} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-3">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-muted-foreground">{product.provider}</p>
              <h3 className="text-sm font-medium text-card-foreground">{product.name}</h3>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={toggleFavorite} aria-label="favorite" className="fav-btn text-xl leading-none">{isFav ? '❤️' : '🤍'}</button>
              <button onClick={addToCart} className="add-btn px-2 py-1 bg-primary text-primary-foreground rounded">Thêm</button>
            </div>
          </div>
          <StarRating rating={product.rating} count={product.reviewCount} />
          <div className="flex items-center justify-between mt-2">
            <span className="font-semibold text-primary">{formatPrice(product.pricePerDay)}</span>
            <span className="text-xs text-muted-foreground">{product.isAvailable ? 'Còn trống' : 'Đã thuê'}</span>
          </div>
          {message && <div className="text-sm text-muted-foreground mt-2">{message}</div>}
        </div>
      </div>
    </Link>
  );
}
