import fs from 'fs'
import path from 'path'
import React from 'react'
import ProductPageClient from '@/components/product/ProductPageClient'

export const dynamicParams = false

export async function generateStaticParams() {
  const ids = new Set<string>()

  // Source 1: db.json
  try {
    const dbPath = path.join(process.cwd(), 'public', 'mock-db', 'db.json')
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
    for (const item of db.products ?? []) {
      if (item?.id) ids.add(String(item.id))
    }
  } catch {}

  // Source 2: hardcoded ids from src/data/products.ts
  const staticIds = ['1','2','3','4','5','6','7','8','9']
  for (const id of staticIds) {
    ids.add(id)
  }

  const result = Array.from(ids).map(id => ({ id }))
  console.log('generateStaticParams returning:', result.map(r => r.id).join(', '))
  return result
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <ProductPageClient id={id} />
}