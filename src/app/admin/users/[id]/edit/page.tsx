import path from 'path'
import fs from 'fs'
import UserForm from '@/components/admin/UserForm'

export const dynamicParams = false

export async function generateStaticParams() {
  try {
    const dbPath = path.join(process.cwd(), 'public', 'mock-db', 'db.json')
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
    const items = db.users ?? []
    return items.map((item: any) => ({ id: String(item.id) }))
  } catch {
    return []
  }
}

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Edit User</h1>
      <UserForm entityId={id} />
    </div>
  )
}
