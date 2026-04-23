import { DB_URL } from './db-url'

let _cache: any = null

export async function fetchPublicDb() {
  if (typeof window === 'undefined') return { users: [], products: [], orders: [] }
  if (_cache) return _cache
  try {
    const res = await fetch(DB_URL)
    if (!res.ok) return { users: [], products: [], orders: [] }
    _cache = await res.json()
    return _cache
  } catch (err) {
    return { users: [], products: [], orders: [] }
  }
}

export async function getProductById(id: string) {
  const db = await fetchPublicDb()
  const products = db.products || []
  return products.find((p: any) => String(p.id) === String(id)) ?? null
}

export async function getProductsByOwner(ownerId: string) {
  const db = await fetchPublicDb()
  const products = db.products || []
  return products.filter((p: any) => String(p.ownerId) === String(ownerId))
}

export async function getCollection(name: string) {
  const db = await fetchPublicDb()
  return db[name] || []
}
