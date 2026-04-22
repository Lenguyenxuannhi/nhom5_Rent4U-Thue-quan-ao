export function getBasePath(): string {
  if (typeof window === 'undefined') return ''
  return window.location.pathname.startsWith('/nhom5_Rent4U-') ? '/nhom5_Rent4U-' : ''
}

/** Products with timestamp ids (> 1776000000000) were created after build and need /product/not-built?id= */
export function productHref(id: string | number): string {
  const strId = String(id)
  const numericId = Number(strId)
  if (!isNaN(numericId) && numericId > 1776000000000) {
    return `/product/not-built?id=${encodeURIComponent(strId)}`
  }
  return `/product/${encodeURIComponent(strId)}`
}
