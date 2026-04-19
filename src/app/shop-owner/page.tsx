"use client";

"use client"

import React from 'react'
import { useAuth } from '@/components/AuthProvider'
import { useRouter } from 'next/navigation'
import ShopOwnerProductsClient from '@/components/shop-owner/ShopOwnerProductsClient'

export default function ShopOwnerPage() {
  const { user } = useAuth()
  const router = useRouter()

  if (!user) {
    if (typeof window !== 'undefined') router.push('/login')
    return null
  }

  if (user.role !== 'shopowner' && user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold">Truy cập bị từ chối</h2>
          <p className="mt-2 text-sm text-muted-foreground">Trang này chỉ dành cho chủ cửa hàng.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Quản lý cửa hàng</h1>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-card p-4 rounded">
            <ShopOwnerProductsClient ownerId={user.id} />
          </div>
        </div>
      </div>
    </div>
  )
}
