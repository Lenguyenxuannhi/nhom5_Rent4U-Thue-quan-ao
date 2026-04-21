import FavoritesClient from '@/components/favorites/FavoritesClient'

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Sản phẩm yêu thích</h1>
      <FavoritesClient />
    </div>
  )
}
