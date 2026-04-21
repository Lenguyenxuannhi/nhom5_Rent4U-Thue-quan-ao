"use client"
import React, { useState } from 'react'

export default function FaqAccordionClient({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium hover:bg-muted/40 transition-colors"
          >
            <span>{item.q}</span>
            <span className={`ml-4 flex-shrink-0 text-primary transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}>
              ▾
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
