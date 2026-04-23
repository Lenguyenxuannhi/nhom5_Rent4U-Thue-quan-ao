import path from 'path'
import fs from 'fs'
import ShopForm from '@/components/admin/ShopForm'

export const dynamicParams = false

export async function generateStaticParams() {
  try {
    const dbPath = path.join(process.cwd(), 'public', 'mock-db', 'db.json')
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
    const items = db.shops ?? []
    return items.map((item: any) => ({ id: String(item.id) }))
  } catch {
    return []
  }
}

export default async function EditShopPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Edit Shop</h1>
      <ShopForm entityId={id} />
    </div>
  )
}
