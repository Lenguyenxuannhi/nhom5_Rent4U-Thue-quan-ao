'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getSession } from '@/lib/auth-client'
import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminTopbar from '@/components/admin/AdminTopbar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    const session = getSession()
    if (!session || session.user?.role !== 'admin') {
      router.replace('/admin/login')
    } else {
      setAuthorized(true)
    }
  }, [router])

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Đang kiểm tra quyền truy cập...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 min-h-screen">
          <AdminTopbar />
          <main className="p-6">
            <div className="site-container">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
