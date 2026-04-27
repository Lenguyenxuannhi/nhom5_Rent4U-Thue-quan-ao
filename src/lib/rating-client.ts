import { getAll, getById, save } from '@/lib/client-db'

export async function getUserRating(userId: string, productId: string) {
  try {
    const all = await getAll('ratings')
    if (!Array.isArray(all)) return null
    return all.find((r: any) => String(r.userId) === String(userId) && String(r.productId) === String(productId)) ?? null
  } catch {
    return null
  }
}

export async function getRatingsForProduct(productId: string) {
  try {
    const all = await getAll('ratings')
    if (!Array.isArray(all)) return []
    return all.filter((r: any) => String(r.productId) === String(productId))
  } catch {
    return []
  }
}

export async function getUserRatings(userId: string) {
  try {
    const all = await getAll('ratings')
    if (!Array.isArray(all)) return []
    return all.filter((r: any) => String(r.userId) === String(userId))
  } catch {
    return []
  }
}

export async function submitRating(userId: string, productId: string, rating: number, comment?: string) {
  try {
    const all = await getAll('ratings')
    const list = Array.isArray(all) ? all : []

    const exists = list.find((r: any) => String(r.userId) === String(userId) && String(r.productId) === String(productId))
    const now = new Date().toISOString()
    const entry = exists
      ? { ...exists, rating, comment, date: now }
      : { id: Date.now().toString(), userId, productId, rating, comment, date: now }

    const saved = await save('ratings', entry)

    // recompute aggregate for product
    const after = await getAll('ratings')
    const forProduct = (Array.isArray(after) ? after : []).filter((r: any) => String(r.productId) === String(productId))
    const count = forProduct.length
    const avg = count === 0 ? 0 : forProduct.reduce((s: number, it: any) => s + Number(it.rating || 0), 0) / count

    // update product entry
    try {
      const prod = await getById('products', String(productId))
      if (prod) {
        const next = { ...prod, rating: Math.round((avg + Number.EPSILON) * 10) / 10, reviewCount: count }
        await save('products', next)
      }
    } catch (e) {
      // ignore
    }

    return { saved, avg: Math.round((avg + Number.EPSILON) * 10) / 10, count }
  } catch (e) {
    return null
  }
}

export default { getUserRating, getRatingsForProduct, submitRating }
