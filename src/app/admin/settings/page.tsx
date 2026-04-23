'use client'

import { useEffect, useState } from 'react'
import SettingsForm from '@/components/admin/SettingsForm'
import { getAll } from '@/lib/client-db'

export default function SettingsPage() {
  const [settings, setSettings] = useState<any>({})

  useEffect(() => {
    ;(async () => {
      const data = await getAll('settings')
      setSettings(data && typeof data === 'object' && !Array.isArray(data) ? data : {})
    })()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <SettingsForm initialValues={settings} />
        </div>
        <div>
          <h2 className="text-lg font-medium mb-2">Raw settings</h2>
          <pre className="bg-white dark:bg-gray-800 p-4 rounded overflow-auto max-h-[60vh]">{JSON.stringify(settings, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
