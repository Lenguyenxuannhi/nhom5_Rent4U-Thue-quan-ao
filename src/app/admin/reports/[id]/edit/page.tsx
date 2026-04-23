import path from 'path'
import fs from 'fs'
import ReportForm from '@/components/admin/ReportForm'

export const dynamicParams = false

export async function generateStaticParams() {
  try {
    const dbPath = path.join(process.cwd(), 'public', 'mock-db', 'db.json')
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
    const items = db.reports ?? []
    return items.map((item: any) => ({ id: String(item.id) }))
  } catch {
    return []
  }
}

export default async function EditReportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">View / Edit Report</h1>
      <ReportForm entityId={id} />
    </div>
  )
}
