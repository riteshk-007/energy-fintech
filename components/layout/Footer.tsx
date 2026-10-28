import Image from 'next/image'
import Link from 'next/link'

const companyLinks = [
  ['Home', '/'],
  ['About us', '/about'],
  ['Our services', '/services'],
  ['Business model', '/business-model'],
] as const

const serviceLinks = [
  ['E-Rickshaw financing', '/services#e-rickshaw'],
  ['Battery financing', '/services#battery'],
  ['Two-wheeler financing', '/services#two-wheeler'],
  ['Commercial mobility', '/services#commercial'],
] as const

export function Footer() {
  return (
    <footer className="border-t border-[#e5eaf1] bg-[#f7f9fc] py-11 text-[#65738b] sm:py-14">
      <div className="mx-auto grid w-[min(1160px,calc(100%-32px))] grid-cols-2 gap-x-5 gap-y-8 sm:w-[min(1160px,calc(100%-48px))] sm:gap-9 lg:grid-cols-[1.5fr_1fr_1.2fr_1.4fr]">
        <div className="col-span-2 lg:col-span-1">
          <Link
            href="/"
            aria-label="Energy Fintech Services home"
            className="inline-block"
          >
            <Image
              src="/energy-fintech-logo.jpeg"
              alt="Energy Fintech Services LLP"
              width={600}
              height={176}
              className="h-auto w-[160px] mix-blend-multiply sm:w-[175px]"
            />
          </Link>
          <p className="mt-4 max-w-[240px] text-xs leading-6 text-[#65738b]">
            Innovative financial solutions for green mobility and sustainable transport.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[.14em] text-[#1f3b70] after:mt-2 after:block after:h-0.5 after:w-6 after:bg-[#ffb84d]">
            Explore
          </h2>
          {companyLinks.map(([label, href]) => (
            <Link key={href} href={href} className="mb-3 block text-xs hover:text-[#087fc3]">
              {label}
            </Link>
          ))}
          <Link href="/about#leadership" className="mb-3 block text-xs hover:text-[#087fc3]">
            Leadership
          </Link>
          <Link href="/contact" className="mb-3 block text-xs hover:text-[#087fc3]">
            Contact us
          </Link>
        </div>
        <div>
          <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[.14em] text-[#1f3b70] after:mt-2 after:block after:h-0.5 after:w-6 after:bg-[#ffb84d]">
            Solutions
          </h2>
          {serviceLinks.map(([label, href]) => (
            <Link key={href} href={href} className="mb-3 block text-xs hover:text-[#087fc3]">
              {label}
            </Link>
          ))}
        </div>
        <div className="col-span-2 sm:col-span-1">
          <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[.14em] text-[#1f3b70] after:mt-2 after:block after:h-0.5 after:w-6 after:bg-[#ffb84d]">
            Contact
          </h2>
          <a href="tel:+919818484810" className="mb-3 block text-xs hover:text-[#087fc3]">
            +91 98184 84810
          </a>
          <a
            href="mailto:energyfintechfinancellp@gmail.com"
            className="break-all text-xs hover:text-[#087fc3]"
          >
            energyfintechfinancellp@gmail.com
          </a>
        </div>
      </div>
      <div className="mx-auto mt-9 flex w-[min(1160px,calc(100%-32px))] flex-col gap-2 border-t border-[#dfe5ed] pt-4 text-[11px] text-[#8a97ab] sm:w-[min(1160px,calc(100%-48px))] sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Energy Fintech Services LLP. All rights reserved.</span>
        <span>Built for a moving India.</span>
      </div>
    </footer>
  )
}
