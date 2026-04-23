// Utility helpers to keep per-user localStorage keys for cart and favorites
export function getCurrentUserFromStorage() {
  try {
    const auth = localStorage.getItem('auth')
    if (auth) {
      const session = JSON.parse(auth)
      if (session?.user) return session.user
    }

    const raw = localStorage.getItem('r4_auth_user')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function userIdFor(user: any) {
  if (!user) return null
  return (user.email || user.username || user.name || '').replace(/\s+/g, '_') || null
}

export function favoritesKeyFor(user: any) {
  const id = userIdFor(user)
  return id ? `r4_favorites_${id}` : 'r4_favorites'
}

export function cartKeyFor(user: any) {
  const id = userIdFor(user)
  return id ? `r4_cart_${id}` : 'r4_cart'
}

export function readFavorites(user: any) {
  try {
    if (!user) return []
    const raw = localStorage.getItem(favoritesKeyFor(user))
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

export function writeFavorites(user: any, arr: string[]) {
  try {
    if (!user) return
    localStorage.setItem(favoritesKeyFor(user), JSON.stringify(arr))
    // notify same-window listeners
    try { window.dispatchEvent(new CustomEvent('r4:counts-changed')) } catch (e) {}
  } catch {}
}

export function toggleFavoriteFor(user: any, id: string) {
  if (!user) return null
  const cur = readFavorites(user)
  const next = cur.includes(id) ? cur.filter((x: string) => x !== id) : [...cur, id]
  writeFavorites(user, next)
  return next
}

export function readCart(user: any) {
  try {
    if (!user) return []
    const raw = localStorage.getItem(cartKeyFor(user))
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

export function writeCart(user: any, arr: any[]) {
  try {
    if (!user) return
    localStorage.setItem(cartKeyFor(user), JSON.stringify(arr))
    try { window.dispatchEvent(new CustomEvent('r4:counts-changed')) } catch (e) {}
  } catch {}
}

export function addToCartFor(user: any, productId: string, qty = 1, extras?: any) {
  if (!user) return null
  const cur = readCart(user)
  // merge if same product (and extras not provided)
  const canMerge = !extras
  const found = canMerge ? cur.find((it: any) => it.productId === productId) : null
  let next
  if (found) {
    next = cur.map((it: any) => it.productId === productId ? { ...it, qty: (it.qty || 1) + qty } : it)
  } else {
    const item: any = { productId, qty, addedAt: new Date().toISOString() }
    if (extras && typeof extras === 'object') Object.assign(item, extras)
    next = [...cur, item]
  }
  writeCart(user, next)
  return next
}

export function clearCartFor(user: any) {
  if (!user) return
  writeCart(user, [])
}
