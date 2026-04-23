import ShopsApplicationsListClient from '@/components/admin/ShopApplicationsListClient'

export default function ShopApplicationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Shop Applications</h1>
        <div className="bg-card p-4 rounded">
          <ShopsApplicationsListClient />
        </div>
      </div>
    </div>
  )
}
