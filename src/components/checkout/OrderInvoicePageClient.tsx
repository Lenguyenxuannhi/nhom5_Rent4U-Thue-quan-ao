'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAll, getById } from '@/lib/client-db'
import PrintSelfButton from '@/components/checkout/PrintSelfButton'

type Props = {
  id: string
}

function formatCurrency(value?: number) {
  return (value ?? 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
}

export default function OrderInvoicePageClient({ id }: Props) {
  const [order, setOrder] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  const lookupId = id

  useEffect(() => {
    ;(async () => {
      const direct = await getById('orders', lookupId)
      if (direct) {
        setOrder(direct)
        setLoading(false)
        return
      }

      const allOrders = await getAll('orders')
      if (!Array.isArray(allOrders)) {
        setLoading(false)
        return
      }

      const found = allOrders.find(
        (entry: any) =>
          entry?.invoiceId === lookupId ||
          entry?.eInvoice?.id === lookupId ||
          entry?.id === lookupId
      )
      setOrder(found ?? null)
      setLoading(false)
    })()
  }, [lookupId])

  const [enrichedItems, setEnrichedItems] = useState<any[]>([])

  useEffect(() => {
    if (!order) {
      setEnrichedItems([])
      return
    }

    ;(async () => {
      const nextItems = await Promise.all(
        (order.items ?? []).map(async (item: any) => {
          if (item.productSnapshot || !item.productId) return item
          const product = await getById('products', String(item.productId))
          if (!product) return item
          return {
            ...item,
            productSnapshot: {
              id: product.id,
              name: product.name,
              pricePerDay: product.pricePerDay ?? product.price,
              depositAmount: product.depositAmount,
            },
          }
        })
      )
      setEnrichedItems(nextItems)
    })()
  }, [order])

  if (loading) {
    return <div className="max-w-3xl mx-auto p-6 my-8">Đang tải hóa đơn...</div>
  }

  if (!order) {
    return <div className="max-w-3xl mx-auto p-6 my-8">Không tìm thấy hóa đơn.</div>
  }

  const createdAt = order.createdAt ? new Date(order.createdAt).toLocaleString('vi-VN') : ''
  const recomputedSubtotal = enrichedItems.reduce((sum: number, item: any) => {
    const pricePerDay = Number(item.pricePerDay ?? item.productSnapshot?.pricePerDay ?? 0) || 0
    const days = Number(item.rentalDays ?? 1) || 1
    const qty = Number(item.qty ?? 1) || 1
    return sum + pricePerDay * days * qty
  }, 0)
  const recomputedDeposit = enrichedItems.reduce((sum: number, item: any) => {
    const deposit = Number(item.depositAmount ?? item.productSnapshot?.depositAmount ?? 0) || 0
    const qty = Number(item.qty ?? 1) || 1
    return sum + deposit * qty
  }, 0)
  const invoiceCode = order.invoiceId ?? order.eInvoice?.id ?? `INV-${order.id}`
  const displaySubtotal =
    typeof order.subtotal === 'number' && !Number.isNaN(order.subtotal) ? order.subtotal : recomputedSubtotal
  const displayDeposit =
    typeof order.depositTotal === 'number' && !Number.isNaN(order.depositTotal)
      ? order.depositTotal
      : recomputedDeposit
  const displayDiscount =
    typeof order.discount === 'number' && !Number.isNaN(order.discount) ? order.discount : 0
  const displayTotal =
    typeof order.total === 'number' && !Number.isNaN(order.total)
      ? order.total
      : Math.max(0, displaySubtotal + displayDeposit - displayDiscount)

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow rounded my-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Hóa đơn: {invoiceCode}</h1>
          <div className="text-sm text-slate-500 dark:text-slate-300">Ngày tạo: {createdAt}</div>
        </div>
        <div className="flex gap-2">
          <PrintSelfButton />
          <Link href="/admin/orders" className="px-3 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded">Quay lại</Link>
        </div>
      </div>

      <section className="mb-6">
        <div className="mb-4">
          <strong>Người mua:</strong>
          <div>{order.buyer?.name} — {order.buyer?.email} — {order.buyer?.phone}</div>
          <div className="text-sm text-slate-500 dark:text-slate-300">Địa chỉ: {order.buyer?.address}</div>
        </div>
        <div className="mb-4">
          <strong>Đơn hàng:</strong>
          <div className="mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-600 dark:text-slate-300">
                  <th>Sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Ngày thuê</th>
                  <th className="text-right">Tổng</th>
                </tr>
              </thead>
              <tbody>
                {enrichedItems.map((item: any, index: number) => (
                  <tr key={index} className="border-t">
                    <td className="py-2">{item.productSnapshot?.name ?? item.name}</td>
                    <td className="py-2">{item.qty}</td>
                    <td className="py-2">{item.rentalDays ?? 1}</td>
                    <td className="py-2 text-right">
                      {formatCurrency(
                        (Number(item.pricePerDay ?? item.productSnapshot?.pricePerDay ?? 0) *
                          Number(item.rentalDays ?? 1) *
                          Number(item.qty ?? 1)) ||
                          0
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="text-right space-y-2">
        <div>Subtotal: {formatCurrency(displaySubtotal)}</div>
        <div>Khoản đặt cọc: {formatCurrency(displayDeposit)}</div>
        <div>Giảm giá: {formatCurrency(displayDiscount)}</div>
        <div className="text-lg font-semibold">Tổng: {formatCurrency(displayTotal)}</div>
      </div>
    </div>
  )
}
