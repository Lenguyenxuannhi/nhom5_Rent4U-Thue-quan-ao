"use client"

import React from 'react'
import { getBasePath } from '@/lib/base-path'

export default function InvoicePrintButton({ orderId }: { orderId: string }) {
  function handlePrint() {
    try {
      const basePath = getBasePath()
      const url = `${basePath}/orders/not-built/invoice?id=${encodeURIComponent(orderId)}`
      const w = window.open(url, '_blank')
      if (!w) return
      // try to call print when the new window finishes loading
      const interval = window.setInterval(() => {
        try {
          if (w.document && w.document.readyState === 'complete') {
            w.focus()
            w.print()
            window.clearInterval(interval)
          }
        } catch (e) {
          // ignore cross-window access until it's ready
        }
      }, 500)
      // stop trying after 10s
      setTimeout(() => window.clearInterval(interval), 10000)
    } catch (e) {
      // ignore
    }
  }

  return (
    <button type="button" onClick={handlePrint} className="px-4 py-2 bg-green-600 text-white rounded">
      In hóa đơn
    </button>
  )
}
