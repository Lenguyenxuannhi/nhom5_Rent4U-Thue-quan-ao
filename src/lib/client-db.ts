import { DB_URL } from './db-url'

type CollectionValue = any[] | Record<string, any>

function localKey(collection: string) {
  return `mock__${collection}`
}

async function fetchDb() {
  const res = await fetch(DB_URL, { cache: 'no-store' })
  const data = await res.json()
  return data ?? {}
}

function readLocal(collection: string) {
  const raw = localStorage.getItem(localKey(collection))
  return raw ? JSON.parse(raw) : null
}

async function readWritableCollection(collection: string): Promise<CollectionValue> {
  const local = readLocal(collection)
  if (local !== null) return local

  const data = await fetchDb()
  const base = data[collection]
  if (Array.isArray(base)) return [...base]
  if (base && typeof base === 'object') return { ...base }
  return []
}

export async function getAll(collection: string): Promise<any> {
  try {
    const data = await fetchDb()
    const base: any[] = Array.isArray(data[collection]) ? data[collection] : []

    // For products collection, also include static products from data/products.ts
    let staticItems: any[] = []
    if (collection === 'products') {
      try {
        const { products } = await import('@/data/products')
        staticItems = products ?? []
      } catch {}
    }

    // Merge: static items first, then db.json items (db.json overrides static)
    const merged = [...staticItems]
    for (const item of base) {
      const exists = merged.findIndex((m: any) => String(m.id) === String(item.id))
      if (exists === -1) merged.push(item)
      else merged[exists] = item
    }

    const local = readLocal(collection)
    if (!local || !Array.isArray(local)) return merged

    // Merge localStorage on top
    for (const item of local) {
      const exists = merged.findIndex((m: any) => String(m.id) === String(item.id))
      if (exists === -1) merged.push(item)
      else merged[exists] = item
    }
    return merged
  } catch {
    return []
  }
}

export async function getById(collection: string, id: string): Promise<any | null> {
  const value = await getAll(collection)
  if (!Array.isArray(value)) return null
  return value.find((item: any) => String(item?.id) === String(id)) ?? null
}

export async function save(collection: string, item: any): Promise<any> {
  try {
    const current = await readWritableCollection(collection)

    if (!Array.isArray(current)) {
      const next = { ...current, ...item }
      localStorage.setItem(localKey(collection), JSON.stringify(next))
      return next
    }

    const id = item?.id ?? Date.now().toString()
    const nextItem = { ...item, id }
    const index = current.findIndex((entry: any) => String(entry?.id) === String(id))

    if (index === -1) current.push(nextItem)
    else current[index] = { ...current[index], ...nextItem }

    localStorage.setItem(localKey(collection), JSON.stringify(current))
    return nextItem
  } catch {
    return null
  }
}

export async function remove(collection: string, id: string): Promise<boolean> {
  try {
    const current = await readWritableCollection(collection)
    if (!Array.isArray(current)) return false

    const filtered = current.filter((entry: any) => String(entry?.id) !== String(id))
    localStorage.setItem(localKey(collection), JSON.stringify(filtered))
    return true
  } catch {
    return false
  }
}

export const removeItem = remove

export default { getAll, getById, save, remove, removeItem }
