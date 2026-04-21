"use client"

import React from 'react'

export default function StatCard({ title, value }: { title: string; value: number | string }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  )
}
