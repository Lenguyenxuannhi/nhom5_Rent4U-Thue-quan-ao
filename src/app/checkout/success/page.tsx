'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import InvoicePrintButton from '@/components/checkout/InvoicePrintButton'
import { getAll, getById } from '@/lib/client-db'
import { getBasePath } from '@/lib/base-path'

function SuccessPageContent() {
  const searchParams = useSearchParams()
  const [order, setOrder] = useState<any | null>(null)
  const [loaded, setLoaded] = useState(false)
  const orderId = searchParams.get('orderId')

  useEffect(() => {
    ;(async () => {
      if (!orderId) {
        setLoaded(true)
        return
      }

      const direct = await getById('orders', String(orderId))
      if (direct) {
        setOrder(direct)
        setLoaded(true)
        return
      }

      const allOrders = await getAll('orders')
      if (Array.isArray(allOrders)) {
        const found = allOrders.find(
          (entry: any) =>
            entry?.id === orderId ||
            entry?.invoiceId === orderId ||
            entry?.eInvoice?.id === orderId
        )
        setOrder(found ?? null)
      }
      setLoaded(true)
    })()
  }, [orderId])

  if (!loaded) {
    return <div className="min-h-screen flex items-center justify-center p-6">Đang tải...</div>
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded p-6">
        <h1 className="text-2xl font-semibold mb-4">Thanh toán thành công</h1>
        {order ? (
          <div className="space-y-3">
            <p>Đơn hàng <strong>{order.id}</strong> đã được lưu.</p>
            <p>Hóa đơn: <strong>{order.invoiceId}</strong></p>
            <p>Ngày: {new Date(order.createdAt).toLocaleString('vi-VN')}</p>
            <div className="flex gap-2 mt-3">
              <a href={`${getBasePath()}/orders/not-built/invoice?id=${encodeURIComponent(order.id)}`} className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded" target="_blank" rel="noreferrer">Xem hóa đơn</a>
              <InvoicePrintButton orderId={String(order.id)} />
            </div>
          </div>
        ) : (
          orderId ? (
            <div className="space-y-3">
              <p>Không tìm thấy dữ liệu đơn hàng với ID <strong>{orderId}</strong>. Bạn có thể thử tải hoặc xem hóa đơn bằng ID này:</p>
              <div className="flex gap-2 mt-3">
                <a href={`${getBasePath()}/orders/not-built/invoice?id=${encodeURIComponent(orderId)}`} className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded" target="_blank" rel="noreferrer">Xem hóa đơn</a>
                <a href={`${getBasePath()}/orders/not-built?id=${encodeURIComponent(orderId)}`} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 rounded">Kiểm tra đơn</a>
              </div>
            </div>
          ) : (
            <p>Cảm ơn bạn! Đơn hàng đã được tạo và lưu. Chúng tôi sẽ liên hệ sớm.</p>
          )
        )}
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center p-6">Đang tải...</div>}>
      <SuccessPageContent />
    </Suspense>
  )
}
