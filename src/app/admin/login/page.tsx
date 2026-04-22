"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
/*lol*/
export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    // Local admin login for static export: accept if matches stored adminPassword, otherwise grant session for development
    const stored = localStorage.getItem('adminPassword')
    if (stored && stored !== password) {
      setError('Login failed')
      return
    }
    // grant a short-lived token in sessionStorage for admin UI in static export
    sessionStorage.setItem('adminToken', 'local')
    router.push('/admin')
  }

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h1 className="text-xl font-semibold mb-4">Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Sign in</button>
      </form>
    </div>
  )
}
