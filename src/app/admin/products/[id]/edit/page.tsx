import path from 'path'
import fs from 'fs'
import ProductForm from '@/components/admin/ProductForm'

export const dynamicParams = false

export async function generateStaticParams() {
  try {
    const dbPath = path.join(process.cwd(), 'public', 'mock-db', 'db.json')
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
    const items = db.products ?? []
    return items.map((item: any) => ({ id: String(item.id) }))
  } catch {
    return []
  }
}

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Edit Product</h1>
      <ProductForm entityId={id} />
    </div>
  )
}
