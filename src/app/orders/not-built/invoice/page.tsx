'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import OrderInvoicePageClient from '@/components/checkout/OrderInvoicePageClient'

function InvoiceViewer() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id') ?? ''
  if (!id) return <div className="p-8">Không tìm thấy hóa đơn.</div>
  return <OrderInvoicePageClient id={id} />
}

export default function NotBuiltInvoicePage() {
  return (
    <Suspense fallback={<div className="p-8">Đang tải...</div>}>
      <InvoiceViewer />
    </Suspense>
  )
}
