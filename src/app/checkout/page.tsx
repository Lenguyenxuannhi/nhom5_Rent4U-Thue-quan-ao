import CheckoutClient from '@/components/checkout/CheckoutClient'

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Thanh toán</h1>
      <CheckoutClient />
    </div>
  )
}
