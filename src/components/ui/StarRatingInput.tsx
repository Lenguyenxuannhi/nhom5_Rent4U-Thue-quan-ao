"use client"

import React, { useEffect, useState } from 'react'

export function StarRatingInput({ initial = 0, onSubmit, disabled }: { initial?: number; onSubmit?: (v: number) => Promise<void> | void; disabled?: boolean }) {
  const [value, setValue] = useState<number>(initial)
  const [hover, setHover] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => setValue(initial), [initial])

  const submit = async (v: number) => {
    setValue(v)
    if (!onSubmit) return
    try {
      setLoading(true)
      await onSubmit(v)
    } catch {
      // ignore
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => {
          const v = i + 1
          const active = v <= (hover ?? value ?? 0)
          return (
            <button
              key={i}
              type="button"
              aria-label={`${v} sao`}
              disabled={disabled || loading}
              onMouseEnter={() => setHover(v)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(v)}
              onBlur={() => setHover(null)}
              onClick={() => submit(v)}
              className={`text-2xl leading-none ${active ? 'text-yellow-400' : 'text-muted-foreground'} transition-colors`}
            >
              ★
            </button>
          )
        })}
      </div>
      {loading && <span className="text-xs text-muted-foreground">Đang lưu...</span>}
    </div>
  )
}

export default StarRatingInput
