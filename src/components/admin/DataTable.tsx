"use client"

import React from 'react'

export default function DataTable({ columns, data }: { columns: string[]; data: any[] }) {
  return (
    <div className="overflow-auto">
    <table className="min-w-full table-auto border-collapse text-gray-900 dark:text-white">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} className="text-left p-2 border-b">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {data.map((row: any) => (
            <tr key={row.id} className="odd:bg-white dark:odd:bg-gray-700 even:bg-gray-50 dark:even:bg-gray-800">
              {columns.map((c) => (
                <td key={c} className="p-2 align-top">{String(row[c.toLowerCase()] ?? '')}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
