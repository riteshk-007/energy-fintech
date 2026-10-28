'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Our services', href: '/services' },
  { label: 'Business model', href: '/business-model' },
  { label: 'Leadership', href: '/about#leadership' },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5eaf1] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[70px] w-[min(1160px,calc(100%-32px))] items-center gap-6 sm:min-h-[78px] sm:w-[min(1160px,calc(100%-48px))]">
        <Link href="/" aria-label="Energy Fintech Services home" className="shrink-0">
          <Image
            src="/energy-fintech-logo.jpeg"
            alt="Energy Fintech Services LLP"
            width={600}
            height={176}
            priority
            className="h-auto w-[158px] sm:w-[180px]"
          />
        </Link>
        <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-6 lg:flex">
          {links.map(({ label, href }) => {
            const active = href === '/' ? pathname === '/' : pathname === href.split('#')[0]
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`text-[13px] font-semibold transition hover:text-[#087fc3] ${active ? 'text-[#087fc3]' : 'text-[#65738b]'}`}
              >
                {label}
              </Link>
            )
          })}
        </nav>
        <Link
          href="/contact"
          className="hidden min-h-10 items-center gap-2 rounded-md bg-[#087fc3] px-4 text-[13px] font-bold text-white transition hover:bg-[#1f3b70] lg:inline-flex"
        >
          Contact us <ArrowRight size={15} />
        </Link>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          className="ml-auto rounded p-2 text-[#1f3b70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#087fc3] lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="animate-in slide-in-from-top-2 duration-200 border-t border-[#e5eaf1] bg-white px-5 pb-3 lg:hidden motion-reduce:animate-none"
        >
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#e5eaf1] py-3.5 text-sm font-semibold text-[#65738b] hover:text-[#087fc3]"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-3.5 text-sm font-bold text-[#087fc3]"
          >
            Contact us <ArrowRight size={16} />
          </Link>
        </nav>
      )}
    </header>
  )
}
