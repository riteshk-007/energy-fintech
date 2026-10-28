import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BatteryCharging, Bike, Building2, Check, Truck } from 'lucide-react'
import { Container } from '@/components/sections/SharedSections'
import { Reveal } from '@/components/sections/Reveal'

export const metadata = {
  title: 'Our Services | Energy Fintech Services LLP',
  description:
    'Explore vehicle, battery, and commercial mobility financing support from Energy Fintech Services LLP.',
}

const nav = [
  [Truck, 'E-Rickshaw Financing', '#e-rickshaw'],
  [BatteryCharging, 'Battery Financing', '#battery'],
  [Bike, 'Two-Wheeler Financing', '#two-wheeler'],
  [Building2, 'Commercial Mobility', '#commercial'],
] as const

const process = [
  ['Initial Enquiry', 'A customer or business reaches out to the team about their mobility financing needs.'],
  ['Customer Information & Verification', 'Customer details are collected, with field verification of residence and business.'],
  ['Financing Assessment', 'Technology-enabled assessment and customer profiling support the financing review.'],
  ['Operational Follow-up & Servicing', 'Ongoing customer servicing, EMI collection and follow-up support.'],
] as const

const ContactLink = ({ light = false }: { light?: boolean }) => (
  <Link
    href="/contact"
    className={`mt-5 inline-flex min-h-11 items-center gap-2 rounded-md px-5 text-[13px] font-bold transition ${
      light
        ? 'bg-[#ffb84d] text-[#1f3b70] hover:bg-white'
        : 'bg-[#1f3b70] text-white hover:bg-[#087fc3]'
    }`}
  >
    Enquire about this service <ArrowRight size={16} />
  </Link>
)

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#172b4d]">
      {/* A — HERO */}
      <section className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-[#14294e] pb-8 pt-20 text-white sm:min-h-[440px] sm:pb-12">
        <Image
          src="/images/company-mayuri.jpg"
          alt="Light blue electric three-wheeler e-rickshaw against a city skyline"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[40%_55%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#14294e] via-[#14294e]/70 to-[#14294e]/20" />
        <Container>
          <p className="rise text-[11px] font-bold tracking-[.2em] text-[#ffb84d]">OUR SERVICES</p>
          <h1 className="rise d1 mt-3 max-w-3xl text-[clamp(2.1rem,5.2vw,4.2rem)] font-semibold leading-[1.02] tracking-[-.055em]">
            Financing Solutions for Every Stage of Mobility
          </h1>
          <p className="rise d2 mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-[15px] sm:leading-7">
            Energy Fintech Services LLP supports drivers, small operators and businesses with
            financing across electric vehicles, batteries, two-wheelers and commercial mobility.
          </p>
        </Container>
      </section>

      {/* B — SERVICE NAV */}
      <nav aria-label="Services" className="border-b border-[#e5eaf1] bg-white">
        <Container>
          <ul className="flex overflow-x-auto">
            {nav.map(([Icon, label, href], i) => (
              <li key={href} className="shrink-0">
                <a
                  href={href}
                  className="flex min-h-14 items-center gap-2 border-b-2 border-transparent pr-6 text-[13px] font-semibold text-[#65738b] transition hover:border-[#087fc3] hover:text-[#1f3b70]"
                >
                  <span className="text-[10px] font-extrabold text-[#ffb84d]">0{i + 1}</span>
                  <Icon size={16} className="text-[#087fc3]" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {/* C — E-RICKSHAW */}
      <section id="e-rickshaw" className="py-12 sm:py-16">
        <Container>
          <Reveal className="relative">
            <div className="relative h-[280px] overflow-hidden rounded-md sm:h-[440px]">
              <Image
                src="/images/company-vishala.jpg"
                alt="White electric three-wheeler e-rickshaw parked on grass"
                fill
                sizes="100vw"
                className="object-cover object-[50%_45%]"
              />
            </div>
            <div className="relative -mt-10 ml-3 mr-3 rounded-md bg-white p-5 shadow-[0_16px_40px_-20px_rgba(20,41,78,.4)] sm:-mt-24 sm:ml-auto sm:mr-8 sm:max-w-[520px] sm:p-8">
              <span className="text-[11px] font-bold tracking-[.16em] text-[#087fc3]">
                01 / L3 &amp; L5 ELECTRIC VEHICLES
              </span>
              <h2 className="mt-2 text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.05] tracking-[-.045em]">
                E-Rickshaw Financing
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#65738b]">
                Financing support for L3 and L5 electric vehicles, helping drivers and small fleet
                operators access commercial mobility opportunities and support their transportation
                businesses.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  'Customised financing for L3 and L5 electric vehicles',
                  'Helps drivers and small fleet operators purchase commercial electric vehicles',
                  'Aims for easy repayment structures and quick approval processes',
                  'Supports self-employment, eco-friendly transport and stable earning opportunities for drivers',
                ].map((x) => (
                  <li key={x} className="flex gap-2 text-[13px] leading-5">
                    <Check size={15} className="mt-0.5 shrink-0 text-[#087fc3]" />
                    {x}
                  </li>
                ))}
              </ul>
              <ContactLink />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* D — BATTERY */}
      <section id="battery" className="bg-[#1f3b70] py-12 text-white sm:py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[.16em] text-[#ffb84d]">
              02 / ENERGY STORAGE
            </span>
            <h2 className="mt-2 text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.05] tracking-[-.045em]">
              Battery Financing
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/75">
              Battery financing is one of the company’s key business verticals. Since batteries are
              one of the most expensive components in EV ownership, the company focuses on reducing
              the upfront financial burden for customers through flexible financing structures.
            </p>
            <div className="mt-5 grid max-w-xl gap-px overflow-hidden rounded-md bg-white/15 sm:grid-cols-3">
              {['Battery replacement financing', 'Battery upgrade financing', 'Battery-as-a-Service (BaaS) support'].map((x, i) => (
                <div key={x} className="bg-[#1f3b70] p-4">
                  <span className="text-[10px] font-extrabold text-[#ffb84d]">0{i + 1}</span>
                  <p className="mt-1 text-sm font-semibold leading-5">{x}</p>
                </div>
              ))}
            </div>
            <ContactLink light />
          </Reveal>
          <Reveal delay={100}>
            <div className="relative h-[250px] overflow-hidden rounded-md sm:h-[360px]">
              <Image
                src="/images/ev-charging-plugs-closeup.jpg"
                alt="Electric vehicle charging plugs at a charging station"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <span className="absolute bottom-0 right-0 h-1.5 w-28 bg-[#ffb84d]" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* E — TWO-WHEELER */}
      <section id="two-wheeler" className="bg-[#f7f9fc] py-12 sm:py-16">
        <Container className="grid items-stretch gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
          <Reveal className="relative min-h-[300px] overflow-hidden rounded-md sm:min-h-[420px]">
            <Image
              src="/images/scooters-varanasi.jpg"
              alt="Riders on scooters in a busy Indian city street"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
            <span className="absolute bottom-3 left-3 flex items-center gap-2 bg-white px-3 py-2 text-[10px] font-bold tracking-widest text-[#1f3b70]">
              <Bike size={14} /> 03 / TWO-WHEELER
            </span>
          </Reveal>
          <Reveal className="self-center" delay={100}>
            <span className="text-[11px] font-bold tracking-[.16em] text-[#087fc3]">
              PERSONAL &amp; COMMERCIAL MOBILITY
            </span>
            <h2 className="mt-2 text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.05] tracking-[-.045em]">
              Two-Wheeler Financing
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#65738b]">
              Energy Fintech Services LLP also provides financing support for electric and
              petrol-based two-wheelers. The LLP focuses on quick loan processing and
              customer-friendly repayment models.
            </p>
            <ul className="mt-5 max-w-xl border-t border-[#dfe5ed]">
              {[
                'Electric two-wheelers',
                'Petrol-based two-wheelers',
                'Personal mobility users and delivery executives',
                'Small business operators',
                'Rural and semi-urban customers',
              ].map((x, i) => (
                <li
                  key={x}
                  className="flex items-center gap-3 border-b border-[#dfe5ed] py-3 text-sm font-medium"
                >
                  <span className="text-[10px] font-extrabold text-[#ffb84d]">0{i + 1}</span>
                  {x}
                </li>
              ))}
            </ul>
            <ContactLink />
          </Reveal>
        </Container>
      </section>

      {/* F — COMMERCIAL */}
      <section id="commercial" className="relative isolate overflow-hidden py-16 text-white sm:py-28">
        <Image
          src="/images/company-pink-erickshaw.jpg"
          alt="Passenger e-rickshaw used for commercial transport"
          fill
          sizes="100vw"
          className="-z-10 object-cover object-[50%_60%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#14294e]/95 via-[#14294e]/75 to-[#14294e]/20" />
        <Container>
          <Reveal className="max-w-2xl">
            <span className="text-[11px] font-bold tracking-[.16em] text-[#ffb84d]">
              04 / MOBILITY ASSETS
            </span>
            <h2 className="mt-3 text-[clamp(2rem,4.8vw,3.8rem)] font-semibold leading-[1.02] tracking-[-.05em]">
              Commercial Mobility Support
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/80">
              Financing support for commercial mobility assets and last-mile transportation, backing
              the operators and businesses that move people and goods across rural and urban India.
            </p>
            <ContactLink light />
          </Reveal>
        </Container>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-[#f7f9fc] py-12 sm:py-14">
        <Container className="grid gap-6 lg:grid-cols-[.6fr_1.4fr] lg:gap-14">
          <Reveal>
            <p className="text-[11px] font-bold tracking-[.2em] text-[#087fc3]">CUSTOMER SEGMENTS</p>
            <h2 className="mt-3 text-[clamp(1.7rem,3.2vw,2.5rem)] font-semibold leading-[1.08] tracking-[-.045em]">
              Who we support
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#65738b]">
              Financial inclusion in underserved markets is a core focus of the LLP.
            </p>
          </Reveal>
          <Reveal>
            <ul className="grid border-t border-[#d6deea] sm:grid-cols-2 sm:gap-x-8">
              {[
                'Drivers and small fleet operators',
                'Personal mobility users',
                'Delivery executives',
                'Small business operators',
                'Rural and semi-urban customers',
                'Individuals and small operators contributing to India’s EV growth',
              ].map((x, i) => (
                <li key={x} className="flex gap-3 border-b border-[#d6deea] py-3.5 text-sm font-medium">
                  <span className="text-[11px] font-extrabold text-[#ffb84d]">0{i + 1}</span>
                  {x}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* G — PROCESS */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[.2em] text-[#087fc3]">HOW IT WORKS</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.08] tracking-[-.045em]">
              A general overview of the process
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#65738b]">
              An illustrative overview, not a guarantee that every financing follows identical
              steps.
            </p>
          </Reveal>
          <Reveal>
            <ol className="relative mt-9 grid gap-7 border-l border-[#d6deea] pl-7 md:grid-cols-4 md:gap-5 md:border-l-0 md:pl-0 md:pt-9">
              <span
                aria-hidden
                className="line-grow absolute left-0 top-0 hidden h-px w-full bg-[#d6deea] md:block"
              />
              {process.map(([title, text], i) => (
                <li key={title} className="relative">
                  <span className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-[#ffb84d] md:-top-[44px] md:left-0" />
                  <span className="text-[11px] font-extrabold tracking-widest text-[#087fc3]">
                    STEP 0{i + 1}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold">{title}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-[#65738b]">{text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* FUTURE */}
      <section className="border-t border-[#e5eaf1] py-12 sm:py-14">
        <Container className="grid gap-6 lg:grid-cols-[.6fr_1.4fr] lg:gap-14">
          <Reveal>
            <p className="text-[11px] font-bold tracking-[.2em] text-[#087fc3]">PLANNED EXPANSION</p>
            <h2 className="mt-3 text-[clamp(1.7rem,3.2vw,2.5rem)] font-semibold leading-[1.08] tracking-[-.045em]">
              Towards a one-stop financial solution
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#65738b]">
              The company aims to build a complete “One-Stop Financial Solution” for EV and
              mobility customers. These are planned areas, not current services.
            </p>
          </Reveal>
          <Reveal>
            <ol className="grid gap-3 sm:grid-cols-2">
              {[
                'Vehicle Insurance Services',
                'EV Protection Plans',
                'Battery Protection Programs',
                'Micro-Insurance Products',
                'Fleet Financing Solutions',
              ].map((f, i) => (
                <li
                  key={f}
                  className="flex items-center gap-3 rounded-md border border-dashed border-[#c5cfdd] px-4 py-3.5 text-sm font-semibold"
                >
                  <span className="text-[11px] font-extrabold text-[#ffb84d]">0{i + 1}</span>
                  {f}
                  <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-[#b17a22]">
                    Planned
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* H — CTA */}
      <section className="bg-[#1f3b70] py-12 text-white sm:py-14">
        <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[.2em] text-[#ffb84d]">NEXT STEP</p>
            <h2 className="mt-3 text-[clamp(1.7rem,3.6vw,2.7rem)] font-semibold leading-[1.08] tracking-[-.04em]">
              Explore Financing Solutions for Your Mobility Needs
            </h2>
          </Reveal>
          <div className="flex flex-col gap-3 min-[420px]:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#ffb84d] px-6 text-sm font-bold text-[#1f3b70] transition hover:bg-white"
            >
              Contact Our Team <ArrowRight size={16} />
            </Link>
            <Link
              href="/business-model"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-bold transition hover:bg-white/10"
            >
              Explore Our Business Model
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
