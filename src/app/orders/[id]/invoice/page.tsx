import path from 'path'
import fs from 'fs'
import { Suspense } from 'react'
import OrderInvoicePageClient from '@/components/checkout/OrderInvoicePageClient'

export const dynamicParams = false

export async function generateStaticParams() {
  try {
    const dbPath = path.join(process.cwd(), 'public', 'mock-db', 'db.json')
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
    const items = db.orders ?? []
    return items.map((item: any) => ({ id: String(item.id) }))
  } catch {
    return []
  }
}

export default async function InvoicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto p-6 my-8">Đang tải hóa đơn...</div>}>
      <OrderInvoicePageClient id={id} />
    </Suspense>
  )
}
