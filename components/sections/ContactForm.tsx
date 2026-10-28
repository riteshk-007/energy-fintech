'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

const EMAIL = 'energyfintechfinancellp@gmail.com'

const field =
  'mt-1.5 w-full rounded-md border border-[#d6deea] bg-white px-3 py-2.5 text-sm text-[#172b4d] outline-none transition focus:border-[#087fc3] focus:ring-2 focus:ring-[#087fc3]/20'

export function ContactForm() {
  const [opened, setOpened] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const body = [
      `Name: ${d.get('name')}`,
      `Phone: ${d.get('phone')}`,
      `Email: ${d.get('email')}`,
      '',
      `${d.get('message')}`,
    ].join('\n')
    const subject = `Enquiry from ${d.get('name')}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  return (
    <form onSubmit={onSubmit} className="bg-white p-6 sm:p-8">
      <p className="text-[10px] font-bold tracking-[.18em] text-[#087fc3]">SEND AN ENQUIRY</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold text-[#172b4d]">
          Full name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="text-xs font-semibold text-[#172b4d]">
          Phone number
          <input name="phone" type="tel" required autoComplete="tel" className={field} />
        </label>
        <label className="text-xs font-semibold text-[#172b4d] sm:col-span-2">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="text-xs font-semibold text-[#172b4d] sm:col-span-2">
          Message
          <textarea name="message" required rows={4} className={field} />
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#087fc3] px-5 text-sm font-bold text-white transition hover:bg-[#1f3b70]"
      >
        Send via email <Send size={15} />
      </button>
      <p className="mt-3 text-[11px] leading-5 text-[#65738b]" aria-live="polite">
        {opened
          ? 'Your email app should have opened with the message ready. Press send there to complete your enquiry.'
          : 'This opens your email app with your message ready to send to our team.'}
      </p>
    </form>
  )
}
