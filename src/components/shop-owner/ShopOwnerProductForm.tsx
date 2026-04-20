"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  initialValues?: any
  ownerId?: string | null
  onSaved?: (item: any) => void
  onCancel?: () => void
}

export default function ShopOwnerProductForm({ initialValues, ownerId, onSaved, onCancel }: Props) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const [name, setName] = useState(initialValues?.name ?? '')
  const [pricePerDay, setPricePerDay] = useState(initialValues?.pricePerDay ?? '')
  const [category, setCategory] = useState(initialValues?.category ?? '')
  const [images, setImages] = useState<string[]>(initialValues?.images ?? [])
  const [provider, setProvider] = useState(initialValues?.provider ?? '')
  const [depositAmount, setDepositAmount] = useState<number | string>(initialValues?.depositAmount ?? '')
  const [urlInput, setUrlInput] = useState('')
  const [isAvailable, setIsAvailable] = useState(initialValues?.isAvailable ?? true)
  const [colors, setColors] = useState<string[]>(initialValues?.colors ?? [])
  const [sizes, setSizes] = useState<string[]>(initialValues?.sizes ?? [])
  const [colorInput, setColorInput] = useState('')
  const [sizeInput, setSizeInput] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (initialValues) {
      setName(initialValues.name ?? '')
      setPricePerDay(initialValues.pricePerDay ?? '')
      setCategory(initialValues.category ?? '')
      setImages(initialValues.images ?? [])
      setIsAvailable(initialValues.isAvailable ?? true)
      setProvider(initialValues.provider ?? '')
      setDepositAmount(initialValues.depositAmount ?? '')
      setColors(initialValues.colors ?? [])
      setSizes(initialValues.sizes ?? [])
    }
  }, [initialValues])

  if (!mounted) return null

  const fileToBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(String(reader.result))
      reader.onerror = reject
      reader.readAsDataURL(file)
    })

  const handleFiles = async (files: FileList | File[]) => {
    const arr = Array.from(files as any) as File[]
    if (arr.length === 0) return
    const encoded = await Promise.all(arr.map(fileToBase64))
    setImages((prev) => [...prev, ...encoded])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!ownerId) {
      setError('Missing owner id')
      return
    }
    setSaving(true)
    setError(null)

    // client-side validation
    if (!provider || String(provider).trim() === '') {
      setError('Shop / Provider is required')
      setSaving(false)
      return
    }
    const dep = Number(depositAmount)
    if (!dep || dep <= 0) {
      setError('Deposit amount must be greater than 0')
      setSaving(false)
      return
    }

    const payload: any = {
      id: initialValues?.id,
      ownerId,
      name,
      pricePerDay: Number(pricePerDay) || 0,
      category,
      images,
      isAvailable,
      provider: provider || undefined,
      depositAmount: Number(depositAmount) || 0,
      colors,
      sizes,
    }

    try {
      const { save } = await import('@/lib/client-db')
      const saved = await save('products', payload)
      if (saved) {
        onSaved?.(saved)
        if (!initialValues?.id) {
          router.push(`/product/not-built?id=${encodeURIComponent(String(saved.id))}`)
        }
      }
      else setError('Save failed')
    } catch (err) {
      setError('Save failed')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl bg-white dark:bg-gray-800 p-4 rounded shadow space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Price per day (VND)</label>
        <input type="number" value={pricePerDay} onChange={(e) => setPricePerDay(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-white">
          <option value="">-- Select --</option>
          <option value="Đầm dạ hội">Đầm dạ hội</option>
          <option value="Váy liền">Váy liền</option>
          <option value="Streetwear">Streetwear</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Màu sắc</label>
        <div className="flex gap-2 flex-wrap mb-2">
          {colors.map((c, i) => (
            <span key={i} className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
              {c}
              <button type="button" onClick={() => setColors(prev => prev.filter((_, idx) => idx !== i))} className="text-red-400 hover:text-red-600">×</button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                if (colorInput.trim()) {
                  setColors(prev => [...prev, colorInput.trim()])
                  setColorInput('')
                }
              }
            }}
            placeholder="Nhập màu rồi Enter (vd: Đỏ, Xanh...)"
            className="w-full p-2 border rounded"
          />
          <button type="button" onClick={() => { if (colorInput.trim()) { setColors(prev => [...prev, colorInput.trim()]); setColorInput('') } }} className="px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded">Add</button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Kích thước</label>
        <div className="flex gap-2 flex-wrap mb-2">
          {sizes.map((s, i) => (
            <span key={i} className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
              {s}
              <button type="button" onClick={() => setSizes(prev => prev.filter((_, idx) => idx !== i))} className="text-red-400 hover:text-red-600">×</button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={sizeInput}
            onChange={(e) => setSizeInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                if (sizeInput.trim()) {
                  setSizes(prev => [...prev, sizeInput.trim()])
                  setSizeInput('')
                }
              }
            }}
            placeholder="Nhập size rồi Enter (vd: S, M, L, XL...)"
            className="w-full p-2 border rounded"
          />
          <button type="button" onClick={() => { if (sizeInput.trim()) { setSizes(prev => [...prev, sizeInput.trim()]); setSizeInput('') } }} className="px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded">Add</button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Shop / Provider</label>
        <input value={provider} onChange={(e) => setProvider(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Deposit amount (VND)</label>
        <input type="number" min={0} value={depositAmount as any} onChange={(e) => setDepositAmount(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Images</label>
        <div
          onDrop={async (e) => {
            e.preventDefault()
            if (e.dataTransfer?.files?.length) {
              await handleFiles(e.dataTransfer.files)
            }
          }}
          onDragOver={(e) => e.preventDefault()}
          className="border border-dashed p-4 rounded mb-2 bg-gray-50 dark:bg-gray-900"
        >
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Kéo thả ảnh vào đây hoặc chọn file</div>
            <div>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded"
              >
                Chọn ảnh
              </button>
            </div>
          </div>
          <input ref={fileRef} type="file" accept="image/*" multiple onChange={async (e) => { if (e.target.files) { await handleFiles(e.target.files); e.currentTarget.value = '' } }} className="hidden" />
        </div>

        <div className="flex gap-2 flex-wrap mt-2">
          {images.map((src, idx) => (
            <div key={idx} className="relative w-24 h-24 border rounded overflow-hidden">
              <img src={src} alt={`img-${idx}`} className="w-full h-full object-cover" />
              <button type="button" onClick={() => { setImages(prev => prev.filter((_, i) => i !== idx)) }} className="absolute top-1 right-1 bg-white bg-opacity-80 rounded-full px-1">✕</button>
            </div>
          ))}
        </div>

        <div className="mt-2 flex gap-2">
          <input value={urlInput} onChange={(e) => setUrlInput(e.target.value)} placeholder="Or paste image URL" className="w-full p-2 border rounded" />
          <button type="button" onClick={() => { if (urlInput) { setImages(prev => [...prev, urlInput]); setUrlInput('') } }} className="px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded">Add</button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Available</label>
        <select value={isAvailable ? 'true' : 'false'} onChange={(e) => setIsAvailable(e.target.value === 'true')} className="w-full p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-white">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>

      {error && <div className="text-red-500">{error}</div>}

      <div className="flex gap-2">
        <button disabled={saving} className="px-3 py-2 bg-blue-600 text-white rounded">
          {saving ? 'Saving...' : 'Save'}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="px-3 py-2 border rounded">Cancel</button>
        )}
      </div>
    </form>
  )
}
