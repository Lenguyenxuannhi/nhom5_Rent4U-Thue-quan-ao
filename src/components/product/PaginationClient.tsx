"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

function buildHref(params: Record<string, any> = {}) {
  const p = new URLSearchParams()
  Object.entries(params || {}).forEach(([k, v]) => {
    if (v === undefined || v === null || v === '') return
    if (Array.isArray(v)) {
      v.forEach((item) => {
        if (item === undefined || item === null || item === '') return
        p.append(k, String(item))
      })
    } else {
      p.set(k, String(v))
    }
  })
  const qs = p.toString()
  return `/products${qs ? `?${qs}` : ''}`
}

export default function PaginationClient({ currentPage, totalPages, searchParams }: { currentPage: number; totalPages: number; searchParams?: Record<string, any> }) {
  const router = useRouter()

  const navigate = (page: number) => {
    const href = buildHref({ ...(searchParams || {}), page })
    router.push(href)
  }

  function renderPageNumbers() {
    const pages: number[] = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      const left = Math.max(2, currentPage - 1)
      const right = Math.min(totalPages - 1, currentPage + 1)
      if (left > 2) pages.push(-1)
      for (let i = left; i <= right; i++) pages.push(i)
      if (right < totalPages - 1) pages.push(-1)
      pages.push(totalPages)
    }
    return pages
  }

  return (
    <nav className="mt-6 flex items-center justify-center space-x-2" aria-label="Pagination">
      <button onClick={() => navigate(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className={`px-3 py-1 rounded-lg border ${currentPage === 1 ? 'opacity-50 pointer-events-none' : 'bg-card'}`}>
        Prev
      </button>

      {renderPageNumbers().map((p, idx) =>
        p === -1 ? (
          <span key={`e-${idx}`} className="px-2">…</span>
        ) : (
          <button key={p} onClick={() => navigate(p)} className={`px-3 py-1 rounded-lg border ${p === currentPage ? 'bg-primary text-primary-foreground' : 'bg-card'}`}>
            {p}
          </button>
        )
      )}

      <button onClick={() => navigate(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className={`px-3 py-1 rounded-lg border ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : 'bg-card'}`}>
        Next
      </button>
    </nav>
  )
}
