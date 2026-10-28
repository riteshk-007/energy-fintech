import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { Container } from '@/components/sections/SharedSections'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata = {
  title: 'Contact Us | Energy Fintech Services LLP',
  description:
    'Contact Energy Fintech Services LLP about vehicle, battery, and mobility financing solutions.',
}

export default function ContactPage() {
  return (
    <main className="bg-[#f7f9fc] text-[#172b4d]">
      <section className="relative overflow-hidden pb-10 pt-8 sm:pb-14 sm:pt-12">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-0 h-[260px] bg-[#1f3b70] sm:h-[300px]"
        />
        <Container className="relative">
          <p className="rise text-[11px] font-bold tracking-[.2em] text-[#ffb84d]">
            CONTACT ENERGY FINTECH
          </p>
          <h1 className="rise d1 mt-3 max-w-3xl text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-[1.05] tracking-[-.05em] text-white">
            Let’s talk about smarter mobility financing
          </h1>
          <p className="rise d2 mt-3 max-w-xl text-sm leading-6 text-white/75">
            Connect with Energy Fintech Services LLP to learn more about our mobility-focused
            financial solutions.
          </p>

          <div className="rise d3 mt-8 grid overflow-hidden rounded-md bg-white shadow-[0_18px_50px_-20px_rgba(20,41,78,.45)] lg:grid-cols-[.9fr_1.1fr]">
            <div className="relative isolate flex flex-col justify-between gap-8 overflow-hidden bg-[#14294e] p-6 text-white sm:p-8">
              <Image
                src="/images/delhi-street-e-rickshaws.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="-z-10 object-cover object-[50%_60%] opacity-30"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#14294e]/70 to-[#14294e]" />
              <div>
                <p className="text-[10px] font-bold tracking-[.18em] text-[#ffb84d]">GET IN TOUCH</p>
                <p className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">
                  Financing for electric vehicles, batteries and commercial mobility.
                </p>
              </div>

              <div className="space-y-4">
                <a href="tel:+919818484810" className="group flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#ffb84d] text-[#1f3b70]">
                    <Phone size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold tracking-wider text-white/55">
                      CALL OUR TEAM
                    </span>
                    <span className="block text-lg font-semibold group-hover:text-[#ffb84d]">
                      +91 98184 84810
                    </span>
                  </span>
                </a>
                <a
                  href="mailto:energyfintechfinancellp@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-white/10 text-[#ffb84d]">
                    <Mail size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold tracking-wider text-white/55">
                      EMAIL US
                    </span>
                    <span className="block break-all text-sm font-semibold group-hover:text-[#ffb84d] sm:text-base">
                      energyfintechfinancellp@gmail.com
                    </span>
                  </span>
                </a>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#ffb84d]"
              >
                View our services <ArrowRight size={15} />
              </Link>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  )
}
