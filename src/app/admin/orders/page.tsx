import OrdersListClient from '@/components/admin/OrdersListClient'

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      <OrdersListClient />
    </div>
  )
}
