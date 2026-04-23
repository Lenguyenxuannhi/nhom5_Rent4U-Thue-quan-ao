"use client"
import React, { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const TOPICS = [
  { value: 'general', label: 'Câu hỏi chung' },
  { value: 'order', label: 'Vấn đề đơn hàng / thuê đồ' },
  { value: 'product', label: 'Vấn đề sản phẩm' },
  { value: 'payment', label: 'Thanh toán / hoàn tiền' },
  { value: 'account', label: 'Tài khoản' },
  { value: 'other', label: 'Khác' },
]

export default function ContactFormClient() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [fields, setFields] = useState({ name: '', email: '', phone: '', topic: '', message: '' })

  function validate() {
    const e: Record<string, string> = {}
    if (fields.name.trim().length < 2) e.name = 'Họ tên phải có ít nhất 2 ký tự'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Email không hợp lệ'
    if (!fields.topic) e.topic = 'Vui lòng chọn chủ đề'
    if (fields.message.trim().length < 20) e.message = 'Nội dung phải có ít nhất 20 ký tự'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setFormState('loading')
    try {
      const { save } = await import('@/lib/client-db')
      const item = { ...fields, type: 'contact', createdAt: new Date().toISOString(), id: Date.now().toString() }
      const saved = await save('reports', item)
      if (saved) {
        setFormState('success')
        setFields({ name: '', email: '', phone: '', topic: '', message: '' })
      } else setFormState('error')
    } catch {
      setFormState('error')
    }
  }

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields(f => ({ ...f, [key]: e.target.value }))
    setErrors(err => { const n = { ...err }; delete n[key]; return n })
  }

  const inputClass = (field: string) =>
    `w-full mt-1 px-3 py-2 rounded-lg border bg-input-background dark:bg-input/30 text-foreground text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
      errors[field] ? 'border-red-400' : 'border-border'
    }`

  if (formState === 'success') {
    return (
      <div className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-3 min-h-[400px]">
        <div className="text-4xl">✅</div>
        <h3 className="text-lg font-semibold">Gửi thành công!</h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi qua email <strong>zerolol248@gmail.com</strong> trong thời gian sớm nhất.
        </p>
        <button onClick={() => setFormState('idle')} className="mt-2 px-4 py-2 border border-border rounded-lg text-sm hover:border-primary transition-colors">
          Gửi câu hỏi khác
        </button>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <h2 className="font-semibold text-base mb-4">Gửi câu hỏi cho chúng tôi</h2>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground">Họ và tên <span className="text-red-400">*</span></label>
            <input type="text" value={fields.name} onChange={set('name')} placeholder="Nguyễn Văn A" className={inputClass('name')} />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Email <span className="text-red-400">*</span></label>
            <input type="email" value={fields.email} onChange={set('email')} placeholder="email@example.com" className={inputClass('email')} />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground">Số điện thoại <span className="text-muted-foreground">(tùy chọn)</span></label>
            <input type="tel" value={fields.phone} onChange={set('phone')} placeholder="0901 234 567" className={inputClass('phone')} />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Chủ đề <span className="text-red-400">*</span></label>
            <select value={fields.topic} onChange={set('topic')} className={inputClass('topic') + ' bg-white text-gray-900 dark:bg-zinc-800 dark:text-zinc-100 [color-scheme:light] dark:[color-scheme:dark]'}>
              <option value="">-- Chọn chủ đề --</option>
              {TOPICS.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
            {errors.topic && <p className="text-xs text-red-400 mt-1">{errors.topic}</p>}
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground">Nội dung <span className="text-red-400">*</span></label>
          <textarea
            value={fields.message}
            onChange={set('message')}
            rows={5}
            maxLength={2000}
            placeholder="Mô tả chi tiết vấn đề hoặc câu hỏi của bạn..."
            className={inputClass('message') + ' resize-none'}
          />
          <div className="flex justify-between mt-1">
            {errors.message ? <p className="text-xs text-red-400">{errors.message}</p> : <span />}
            <p className="text-xs text-muted-foreground">{fields.message.length}/2000</p>
          </div>
        </div>

        {formState === 'error' && (
          <div className="text-sm text-red-500 bg-red-50 rounded-lg px-3 py-2">
            ❌ Gửi thất bại. Vui lòng thử lại hoặc liên hệ trực tiếp qua email.
          </div>
        )}

        <button
          type="submit"
          disabled={formState === 'loading'}
          className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {formState === 'loading' ? 'Đang gửi...' : 'Gửi câu hỏi →'}
        </button>
      </form>
    </div>
  )
}
