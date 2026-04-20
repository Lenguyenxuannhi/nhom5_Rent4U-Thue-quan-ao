"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { useAuth } from '@/components/AuthProvider'
import { useRouter } from 'next/navigation'
import { readFavorites, toggleFavoriteFor } from '@/lib/user-storage'
import { getProductById } from '@/lib/public-db'
import { productHref } from '@/lib/base-path'

export default function FavoritesClient() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [productsMap, setProductsMap] = useState<Record<string, any>>({})
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      // redirect to login if not authenticated
      router.push('/login')
      return
    }
    try {
      const favs = readFavorites(user)
      setFavorites(favs)
      loadProducts(favs)
    } catch {
      setFavorites([])
    }
  }, [user])

  async function loadProducts(ids: string[]) {
    const map: Record<string, any> = {}
    await Promise.all(ids.map(async (id) => {
      try {
        const p = await getProductById(String(id))
        map[id] = p ?? null
      } catch {
        map[id] = null
      }
    }))
    setProductsMap(map)
  }

  function toggle(id: string) {
    if (!user) {
      router.push('/login')
      return
    }
    const next = toggleFavoriteFor(user, id) || []
    setFavorites(next)
  }

  if (!favorites || favorites.length === 0) return (
    <div className="p-4">Bạn chưa có sản phẩm yêu thích.</div>
  )

  return (
    <div className="space-y-4">
      {favorites.map((id) => {
        const p = productsMap[id]
        return (
          <div key={id} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded border">
            <div className="w-24 h-24">
              <ImageWithFallback src={p?.images?.[0]} alt={p?.name || 'Product'} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <Link href={productHref(id)} className="font-medium">{p?.name ?? 'Unknown'}</Link>
              <div className="mt-2">
                <button onClick={() => toggle(id)} className="px-2 py-1 bg-red-500 text-white rounded">Bỏ yêu thích</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
