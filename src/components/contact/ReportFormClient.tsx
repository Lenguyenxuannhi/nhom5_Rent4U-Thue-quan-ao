"use client"
import React, { useState } from 'react'

type ReportState = 'idle' | 'loading' | 'success' | 'error'

const REPORT_TYPES = [
  { value: 'damaged', label: 'Sản phẩm bị hỏng / không đúng mô tả' },
  { value: 'late', label: 'Giao hàng trễ' },
  { value: 'refund', label: 'Chưa nhận được hoàn tiền' },
  { value: 'fraud', label: 'Nghi ngờ gian lận' },
  { value: 'other', label: 'Khác' },
]

const URGENCY = [
  { value: 'low', label: 'Thấp', color: 'text-green-600' },
  { value: 'medium', label: 'Trung bình', color: 'text-yellow-600' },
  { value: 'high', label: 'Cao', color: 'text-red-500' },
]

export default function ReportFormClient() {
  const [state, setState] = useState<ReportState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [fields, setFields] = useState({ name: '', email: '', reportType: '', orderId: '', description: '', urgency: 'medium' })

  function validate() {
    const e: Record<string, string> = {}
    if (fields.name.trim().length < 2) e.name = 'Họ tên phải có ít nhất 2 ký tự'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Email không hợp lệ'
    if (!fields.reportType) e.reportType = 'Vui lòng chọn loại báo cáo'
    if (fields.description.trim().length < 30) e.description = 'Mô tả phải có ít nhất 30 ký tự'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setState('loading')
    try {
      const { save } = await import('@/lib/client-db')
      const item = { ...fields, type: 'report', createdAt: new Date().toISOString(), id: Date.now().toString() }
      const saved = await save('reports', item)
      if (saved) {
        setState('success')
        setFields({ name: '', email: '', reportType: '', orderId: '', description: '', urgency: 'medium' })
      } else setState('error')
    } catch {
      setState('error')
    }
  }

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields(f => ({ ...f, [key]: e.target.value }))
    setErrors(err => { const n = { ...err }; delete n[key]; return n })
  }

  const inputClass = (field: string) =>
    `w-full mt-1 px-3 py-2 rounded-lg border bg-input-background dark:bg-input/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors ${
      errors[field] ? 'border-red-400' : 'border-border'
    }`

  if (state === 'success') {
    return (
      <div className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center space-y-3">
        <div className="text-4xl">📋</div>
        <h3 className="font-semibold text-base">Báo cáo đã được ghi nhận!</h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          Chúng tôi sẽ xem xét và phản hồi qua email của bạn trong vòng <strong>24 giờ làm việc</strong>.
        </p>
        <button onClick={() => setState('idle')} className="mt-2 px-4 py-2 border border-border rounded-lg text-sm hover:border-primary transition-colors">
          Gửi báo cáo khác
        </button>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center text-lg">🚨</div>
        <div>
          <h2 className="font-semibold text-base">Gửi báo cáo / Khiếu nại</h2>
          <p className="text-xs text-muted-foreground">Báo cáo sự cố liên quan đến đơn hàng hoặc sản phẩm</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground">Họ và tên <span className="text-red-400">*</span></label>
            <input type="text" value={fields.name} onChange={set('name')} className={inputClass('name')} />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Email <span className="text-red-400">*</span></label>
            <input type="email" value={fields.email} onChange={set('email')} className={inputClass('email')} />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground">Loại báo cáo <span className="text-red-400">*</span></label>
            <select value={fields.reportType} onChange={set('reportType')} className={inputClass('reportType') + ' bg-white text-gray-900 dark:bg-zinc-800 dark:text-zinc-100 [color-scheme:light] dark:[color-scheme:dark]'}>
              <option value="">-- Chọn loại --</option>
              {REPORT_TYPES.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
            </select>
            {errors.reportType && <p className="text-xs text-red-400 mt-1">{errors.reportType}</p>}
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Mã đơn hàng <span className="text-muted-foreground">(nếu có)</span></label>
            <input type="text" value={fields.orderId} onChange={set('orderId')} placeholder="VD: R4-2025-00123" className={inputClass('orderId')} />
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground">Mức độ khẩn cấp <span className="text-red-400">*</span></label>
          <div className="flex gap-4 mt-2">
            {URGENCY.map(u => (
              <label key={u.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="urgency"
                  value={u.value}
                  checked={fields.urgency === u.value}
                  onChange={set('urgency')}
                  className="accent-primary"
                />
                <span className={`text-sm font-medium ${u.color}`}>{u.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground">Mô tả chi tiết <span className="text-red-400">*</span></label>
          <textarea
            value={fields.description}
            onChange={set('description')}
            rows={5}
            maxLength={3000}
            placeholder="Mô tả cụ thể sự cố xảy ra, thời gian, ảnh hưởng..."
            className={inputClass('description') + ' resize-none'}
          />
          <div className="flex justify-between mt-1">
            {errors.description ? <p className="text-xs text-red-400">{errors.description}</p> : <span />}
            <p className="text-xs text-muted-foreground">{fields.description.length}/3000</p>
          </div>
        </div>

        {state === 'error' && (
          <div className="text-sm text-red-500 bg-red-50 rounded-lg px-3 py-2">
            ❌ Gửi thất bại. Vui lòng thử lại hoặc liên hệ trực tiếp: zerolol248@gmail.com
          </div>
        )}

        <button
          type="submit"
          disabled={state === 'loading'}
          className="w-full py-3 bg-red-500 text-white rounded-xl font-semibold text-sm hover:bg-red-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state === 'loading' ? 'Đang gửi báo cáo...' : '🚨 Gửi báo cáo'}
        </button>
      </form>
    </div>
  )
}

