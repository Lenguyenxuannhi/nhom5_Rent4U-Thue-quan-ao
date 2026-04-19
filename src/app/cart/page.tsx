import CartPageClient from '@/components/cart/CartPageClient'

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Giỏ hàng</h1>
      <CartPageClient />
    </div>
  )
}
