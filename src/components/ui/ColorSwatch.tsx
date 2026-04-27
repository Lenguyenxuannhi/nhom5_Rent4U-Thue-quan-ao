"use client"

import React from 'react'

type ColorInput = string | { name?: string; hex?: string }

type Props = {
  color?: ColorInput
  size?: number
}

const VI_NAME_MAP: Record<string, string> = {
  'do': '#ff0000',
  'đo': '#ff0000',
  'xanh': '#0000ff',
  'xanhla': '#00a86b',
  'xanh lá': '#00a86b',
  'trang': '#ffffff',
  'trắng': '#ffffff',
  'den': '#000000',
  'đen': '#000000',
  'vang': '#ffff00',
  'vàng': '#ffff00',
  'hong': '#ffc0cb',
  'hồng': '#ffc0cb',
  'tim': '#800080',
  'tím': '#800080',
  'nau': '#a52a2a',
  'nâu': '#a52a2a',
  'cam': '#ffa500',
  'xam': '#808080',
  'xám': '#808080',
  'be': '#f5f5dc'
}

function normalizeText(s: string) {
  return s
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '')
}

function resolveColor(input?: string) {
  if (!input) return undefined
  const v = input.trim()
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v)) return v
  const norm = normalizeText(v)
  if (VI_NAME_MAP[norm]) return VI_NAME_MAP[norm]
  // fallback: return original and let browser try; may not render if invalid
  return v
}

export function parseColorInput(input?: ColorInput) {
  if (!input) return { name: '', hex: undefined }
  if (typeof input === 'string') {
    const name = input.trim()
    const resolved = resolveColor(name)
    const hex = resolved && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(resolved) ? resolved : undefined
    return { name, hex }
  }
  const name = (input.name ?? input.hex ?? '').toString().trim()
  const resolved = resolveColor(input.hex ?? input.name)
  const hex = resolved && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(resolved) ? resolved : undefined
  return { name, hex }
}

export default function ColorSwatch({ color, size = 16 }: Props) {
  const parsed = typeof color === 'object' ? parseColorInput(color) : parseColorInput(color as any)
  const bg = parsed.hex ?? (typeof color === 'string' ? resolveColor(color) : undefined)
  const isLight = bg && (bg === '#ffffff' || bg === 'white')

  return (
    <span
      aria-hidden
      title={parsed.name || undefined}
      className="inline-block rounded-full"
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        backgroundColor: bg || 'transparent',
        border: isLight ? '1px solid rgba(0,0,0,0.12)' : '1px solid rgba(0,0,0,0.06)'
      }}
    />
  )
}
