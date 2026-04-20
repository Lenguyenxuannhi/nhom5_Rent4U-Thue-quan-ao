"use client"
import React from 'react'

export default function PrintSelfButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      aria-label="In hóa đơn"
    >
      In hóa đơn
    </button>
  )
}
