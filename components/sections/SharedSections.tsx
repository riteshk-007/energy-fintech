import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`mx-auto w-[min(1160px,calc(100%-32px))] sm:w-[min(1160px,calc(100%-48px))] ${className}`}
    >
      {children}
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string
  title: string
  text?: string
  light?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <span
        className={`text-[11px] font-bold uppercase tracking-[.2em] ${light ? 'text-[#ffb84d]' : 'text-[#087fc3]'}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 text-[clamp(1.9rem,4vw,3.3rem)] font-semibold leading-[1.08] tracking-[-.045em] ${light ? 'text-white' : 'text-[#172b4d]'}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-3 max-w-xl text-[15px] leading-7 ${light ? 'text-white/65' : 'text-[#65738b]'}`}
        >
          {text}
        </p>
      )}
    </div>
  )
}

export function ContactCTA() {
  return (
    <section className="bg-[#1f3b70] py-10 text-white sm:py-12">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold tracking-[.18em] text-[#ffb84d]">
            LET’S MOVE FORWARD
          </p>
          <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
            Let’s move towards smarter mobility financing
          </h2>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Connect with our team to learn more about our vehicle financing and mobility-focused
            financial solutions.
          </p>
        </div>
        <div className="flex flex-col gap-3 min-[420px]:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#ffb84d] px-5 text-sm font-bold text-[#1f3b70]"
          >
            Get in touch <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+919818484810"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 px-5 text-sm font-bold text-white"
          >
            Call our team
          </a>
        </div>
      </Container>
    </section>
  )
}
