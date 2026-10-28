import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Cpu,
  HeartHandshake,
  Leaf,
  MapPinned,
  Route,
  Truck,
  Users,
  Zap,
} from 'lucide-react'
import { Container } from '@/components/sections/SharedSections'
import { Reveal } from '@/components/sections/Reveal'

export const metadata = {
  title: 'About Us | Energy Fintech Services LLP',
  description:
    'Energy Fintech Services LLP is a fintech-driven financial services company supporting India’s green mobility and last-mile transportation sector.',
}

const primaryFocus = [
  'E-Rickshaw Financing',
  'Battery Financing',
  'Two-Wheeler Financing',
  'Commercial Mobility Support',
  'Financial Inclusion in Underserved Markets',
]

const focus = [
  [Leaf, 'Green Mobility', 'Supporting individuals and businesses shifting towards affordable, environmentally friendly transportation.'],
  [Zap, 'Electric Vehicle Financing', 'Financing for electric vehicles used for personal and commercial mobility.'],
  [Route, 'Last-Mile Connectivity', 'Supporting the drivers and operators who keep cities and towns connected.'],
  [Truck, 'Commercial Transport Solutions', 'Financing support for commercial transportation assets.'],
  [Building2, 'Rural & Urban Mobility Support', 'Serving customers across both rural and urban markets.'],
  [Users, 'Small Operator & Driver Empowerment', 'Simplifying financing for individuals and small operators contributing to India’s EV growth.'],
] as const

const stages = [
  [Cpu, 'Digital Underwriting', 'Digital underwriting systems support the assessment of each financing.'],
  [MapPinned, 'Field Investigation', 'The FI team verifies residence and business, profiles the customer and assesses earning capacity.'],
  [ClipboardCheck, 'Collection Management', 'EMI collections, customer follow-ups, recovery management and portfolio monitoring.'],
  [HeartHandshake, 'Customer Servicing', 'A relationship-driven approach to strong customer engagement.'],
] as const

const visionAreas = [
  ['Vehicle Finance', 'Easy, flexible and technology-driven vehicle financing for electric and commercial mobility vehicles, with convenient repayment options.', 'Current'],
  ['Battery Support', 'Battery financing, replacement and upgrade support that helps EV owners reduce upfront costs and keep vehicles running smoothly.', 'Current'],
  ['Insurance', 'Reliable insurance services designed to protect vehicles, drivers and businesses from unexpected financial risks.', 'Planned'],
  ['Financial Protection Services', 'Financial protection solutions and support services that help customers manage risks, secure their assets and maintain long-term financial stability.', 'Planned'],
] as const

const jugalExpertise = [
  ['Financial Management', 'Since the early 1990s, managing financial planning, operations, banking relationships and business coordination for multiple automobile dealership businesses, including large-scale financial operations and vehicle finance ecosystems.'],
  ['Business Operations', 'Extensive experience managing dealership operations, financial systems, customer management and business growth strategies within the automobile sector.'],
  ['Leadership & Strategic Planning', 'A practical understanding of business operations, finance management and market dynamics that supports long-term planning, operational stability and sustainable growth.'],
  ['Industry Associations', 'Has managed the business through different market situations and economic changes in the Indian automobile industry over the last three decades.'],
] as const

const jugalRoles = [
  'CFO – Rajesh Motors Group Companies',
  'Founder and Partner – Energy Fintech Services LLP',
  'Director in automobile dealership companies associated with leading automobile brands, including KIA and Volkswagen dealership operations in Udaipur',
  'Strategic Advisor for various automotive and finance-related businesses within the group',
]

export default function AboutPage() {
  return (
    <main className="bg-white text-[#172b4d]">
      {/* A — HERO */}
      <section className="pt-10 sm:pt-14">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:gap-12">
            <div>
              <p className="rise text-[11px] font-bold tracking-[.2em] text-[#087fc3]">
                ABOUT ENERGY FINTECH
              </p>
              <h1 className="rise d1 mt-4 text-[clamp(2.1rem,5.2vw,4.3rem)] font-semibold leading-[1.02] tracking-[-.055em]">
                Building Financial Access for a Changing Mobility Landscape
              </h1>
            </div>
            <p className="rise d2 border-l-2 border-[#ffb84d] pl-4 text-[15px] leading-7 text-[#65738b]">
              Energy Fintech Services LLP is a fintech-driven financial services company focused on
              supporting India’s rapidly growing green mobility and last-mile transportation
              sector.
            </p>
          </div>
          <div className="reveal-img relative mt-8 h-[220px] overflow-hidden rounded-md bg-[#dfe6ee] sm:h-[340px] lg:h-[420px]">
            <Image
              src="/images/company-mayuri.jpg"
              alt="Light blue electric three-wheeler e-rickshaw against a city skyline"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[40%_55%]"
            />
            <span className="absolute bottom-0 left-0 h-1.5 w-28 bg-[#ffb84d]" />
          </div>
        </Container>
      </section>

      {/* B — STORY */}
      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <Reveal className="relative lg:order-2">
            <div className="relative h-[300px] overflow-hidden rounded-md sm:h-[440px] lg:h-full lg:min-h-[460px]">
              <Image
                src="/images/company-vishala.jpg"
                alt="White electric three-wheeler e-rickshaw parked on grass"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
          <Reveal className="lg:order-1 lg:py-2">
            <p className="text-[11px] font-bold tracking-[.2em] text-[#087fc3]">INTRODUCTION</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-[1.08] tracking-[-.045em]">
              A fintech approach, grounded in mobility operations
            </h2>
            <span className="mt-4 block h-0.5 w-12 bg-[#ffb84d]" />
            <div className="mt-4 space-y-3 text-sm leading-7 text-[#65738b]">
              <p>
                The LLP provides smart, accessible and technology-enabled financing solutions for
                electric vehicles, battery systems and mobility-related assets. The company aims to
                bridge the gap between institutional funding and customers who require fast and
                flexible finance solutions.
              </p>
              <p>
                By combining fintech systems with strong field operations, Energy Fintech Services
                LLP is building a reliable and scalable ecosystem for vehicle financing,
                collections, customer servicing and future insurance integration.
              </p>
            </div>
            <p className="mt-5 text-[11px] font-bold tracking-[.2em] text-[#087fc3]">
              PRIMARY BUSINESS FOCUS
            </p>
            <ul className="mt-2 border-t border-[#e5eaf1] text-sm font-medium">
              {primaryFocus.map((x) => (
                <li key={x} className="border-b border-[#e5eaf1] py-2">
                  {x}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-[#1f3b70] px-5 text-[13px] font-bold text-white transition hover:bg-[#087fc3]"
            >
              Explore Our Services <ArrowRight size={16} />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* C — FOCUS */}
      <section className="bg-[#f7f9fc] py-12 sm:py-16">
        <Container className="grid gap-7 lg:grid-cols-[.55fr_1.45fr] lg:gap-14">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[11px] font-bold tracking-[.2em] text-[#087fc3]">INDUSTRY FOCUS</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.08] tracking-[-.045em]">
              Key focus areas
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#65738b]">
              Energy Fintech Services LLP operates in sectors that are witnessing strong future
              growth and government support.
            </p>
          </Reveal>
          <Reveal>
            <ol className="border-t border-[#d6deea]">
              {focus.map(([Icon, title, text], i) => (
                <li
                  key={title}
                  className="grid grid-cols-[36px_1fr] items-start gap-x-3 gap-y-1 border-b border-[#d6deea] py-4 transition hover:bg-white sm:grid-cols-[48px_28px_1fr_1.1fr] sm:items-center sm:px-3"
                >
                  <span className="text-xs font-extrabold text-[#ffb84d]">0{i + 1}</span>
                  <Icon size={20} className="hidden text-[#087fc3] sm:block" />
                  <h3 className="text-[15px] font-semibold">{title}</h3>
                  <p className="col-start-2 text-[13px] leading-5 text-[#65738b] sm:col-start-auto">
                    {text}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* D — APPROACH */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[.2em] text-[#087fc3]">OUR APPROACH</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.08] tracking-[-.045em]">
              Technology combined with field-level execution
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#65738b]">
              The LLP believes in combining technology with field-level execution to create a
              stable and sustainable lending ecosystem.
            </p>
          </Reveal>
          <Reveal>
            <ol className="relative mt-9 grid gap-7 border-l border-[#d6deea] pl-7 md:grid-cols-4 md:gap-5 md:border-l-0 md:pl-0 md:pt-9">
              <span
                aria-hidden
                className="line-grow absolute left-0 top-0 hidden h-px w-full bg-[#d6deea] md:block"
              />
              {stages.map(([Icon, title, text], i) => (
                <li key={title} className="relative">
                  <span className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-[#ffb84d] md:-top-[44px] md:left-0" />
                  <span className="text-[11px] font-extrabold tracking-widest text-[#087fc3]">
                    0{i + 1}
                  </span>
                  <Icon size={22} className="mt-2 text-[#1f3b70]" />
                  <h3 className="mt-2 text-sm font-semibold">{title}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-[#65738b]">{text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* E — VISION */}
      <section className="relative isolate overflow-hidden bg-[#14294e] py-14 text-white sm:py-20">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-2/5 lg:block">
          <Image
            src="/images/company-singham.jpg"
            alt=""
            fill
            sizes="40vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14294e] to-transparent" />
        </div>
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-[11px] font-bold tracking-[.2em] text-[#ffb84d]">VISION</p>
            <p className="mt-4 text-[clamp(1.6rem,3.8vw,3rem)] font-semibold leading-[1.1] tracking-[-.045em]">
              To become a trusted and technology-driven financial services platform supporting
              India’s <span className="text-[#ffb84d]">green mobility transformation</span> and
              empowering underserved customers through accessible financing solutions.
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <p className="text-[11px] font-bold tracking-[.2em] text-[#ffb84d]">
              LONG-TERM VISION
            </p>
            <ol className="mt-4 grid gap-px overflow-hidden rounded-md bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
              {visionAreas.map(([t, d, status], i) => (
                <li key={t} className="bg-[#14294e] p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-[#ffb84d]">0{i + 1}</span>
                    <span
                      className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                        status === 'Planned'
                          ? 'bg-[#ffb84d]/15 text-[#ffb84d]'
                          : 'bg-white/10 text-white/70'
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold">{t}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-white/65">{d}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* F — LEADERSHIP */}
      <section id="leadership" className="py-12 sm:py-16">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[.2em] text-[#087fc3]">
              LEADERSHIP · THE ORGANIZATION
            </p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-[1.08] tracking-[-.045em]">
              Leadership built on industry experience
            </h2>
          </Reveal>

          {/* Jugal Kishore Sharma */}
          <Reveal className="mt-9 grid gap-6 border-t border-[#dfe5ed] pt-8 md:grid-cols-[.55fr_1.45fr] md:gap-12">
            <div className="md:sticky md:top-24 md:self-start">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-md border-b-4 border-[#1f3b70] md:mx-0">
                <Image
                  src="/images/leadership-jugal-kishore-sharma.png"
                  alt="Portrait of Mr. Jugal Kishore Sharma, Founder and Partner"
                  fill
                  sizes="(max-width: 768px) 300px, 28vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[.2em] text-[#087fc3]">
                FOUNDER &amp; PARTNER
              </p>
              <h3 className="mt-2 text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-[1.05] tracking-[-.045em]">
                Mr. Jugal Kishore Sharma
              </h3>
              <span className="mt-4 block h-0.5 w-12 bg-[#ffb84d]" />
              <div className="mt-4 max-w-2xl space-y-3 text-[15px] leading-7 text-[#65738b]">
                <p>
                  Jugal Kishore Sharma is a highly experienced finance professional with more than
                  35 years of experience in the automobile and financial services sector.
                </p>
                <p>
                  His expertise in financial management, operations handling, banking coordination
                  and business planning brings strong industry knowledge and stability to Energy
                  Fintech Services LLP. With long-term experience in dealership operations,
                  vehicle finance ecosystems and large-scale business management, he plays an
                  important role in strengthening the company’s financial structure and future
                  growth plans.
                </p>
              </div>

              <h4 className="mt-7 text-[11px] font-bold tracking-[.2em] text-[#087fc3]">
                KEY EXPERTISE &amp; EXPERIENCE
              </h4>
              <dl className="mt-2 max-w-2xl border-t border-[#e5eaf1]">
                {jugalExpertise.map(([t, d]) => (
                  <div key={t} className="border-b border-[#e5eaf1] py-3 sm:grid sm:grid-cols-[190px_1fr] sm:gap-4">
                    <dt className="text-sm font-semibold">{t}</dt>
                    <dd className="mt-1 text-[13px] leading-6 text-[#65738b] sm:mt-0">{d}</dd>
                  </div>
                ))}
              </dl>

              <h4 className="mt-7 text-[11px] font-bold tracking-[.2em] text-[#087fc3]">
                CURRENT ROLES
              </h4>
              <ul className="mt-2 max-w-2xl border-t border-[#e5eaf1]">
                {jugalRoles.map((r) => (
                  <li key={r} className="border-b border-[#e5eaf1] py-2.5 text-[13px] leading-6">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Sonu Sharma */}
          <Reveal className="mt-10 grid gap-6 border-t border-[#dfe5ed] pt-8 md:grid-cols-[1.45fr_.55fr] md:gap-12">
            <div className="order-2 md:order-1">
              <p className="text-[11px] font-bold tracking-[.2em] text-[#087fc3]">PARTNER</p>
              <h3 className="mt-2 text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-[1.05] tracking-[-.045em]">
                Ms. Sonu Sharma
              </h3>
              <span className="mt-4 block h-0.5 w-12 bg-[#ffb84d]" />
              <div className="mt-4 max-w-2xl space-y-3 text-[15px] leading-7 text-[#65738b]">
                <p>
                  Sonu Sharma is associated with the management vision and growth ecosystem of
                  Energy Fintech Services LLP.
                </p>
                <p>
                  She plays an important role in maintaining the company’s professional values,
                  business relationships and long-term growth vision, and is connected with a
                  strong professional environment in the automobile and financial services sector.
                </p>
              </div>

              <h4 className="mt-7 text-[11px] font-bold tracking-[.2em] text-[#087fc3]">
                PROFESSIONAL BACKGROUND
              </h4>
              <p className="mt-2 max-w-2xl text-[13px] leading-6 text-[#65738b]">
                Actively associated with the vision and growth of Energy Fintech Services LLP,
                which focuses on green mobility financing, e-rickshaw funding, battery financing
                and two-wheeler finance solutions. Through her professional exposure and business
                ecosystem she has gained understanding and experience in:
              </p>
              <ul className="mt-2 grid max-w-2xl border-t border-[#e5eaf1] sm:grid-cols-2 sm:gap-x-6">
                {[
                  'Customer relationship management',
                  'Business coordination',
                  'Financial services environment',
                  'Automobile and mobility sector operations',
                  'Maintaining long-term professional networks',
                ].map((x) => (
                  <li key={x} className="border-b border-[#e5eaf1] py-2.5 text-[13px] font-medium">
                    {x}
                  </li>
                ))}
              </ul>

              <h4 className="mt-7 text-[11px] font-bold tracking-[.2em] text-[#087fc3]">
                ROLE &amp; CONTRIBUTION
              </h4>
              <ul className="mt-2 grid max-w-2xl border-t border-[#e5eaf1] sm:grid-cols-2 sm:gap-x-6">
                {[
                  'Business coordination',
                  'Relationship management',
                  'Operational support',
                  'Professional network development',
                ].map((x) => (
                  <li key={x} className="border-b border-[#e5eaf1] py-2.5 text-[13px] font-medium">
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-3 max-w-2xl text-[13px] leading-6 text-[#65738b]">
                She contributes towards maintaining strong professional relationships and
                supporting the LLP’s long-term business values, customer-focused approach and
                future growth plans, carrying forward the company’s values of trust, integrity,
                customer support and business excellence.
              </p>
            </div>
            <div className="order-1 md:order-2 md:sticky md:top-24 md:self-start">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-md border-b-4 border-[#ffb84d] md:mx-0 md:ml-auto">
                <Image
                  src="/images/leadership-sonu-sharma.png"
                  alt="Portrait of Ms. Sonu Sharma, Partner"
                  fill
                  sizes="(max-width: 768px) 300px, 28vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#1f3b70] py-10 text-white sm:py-12">
        <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-xl text-[clamp(1.5rem,3vw,2.2rem)] font-semibold leading-[1.1] tracking-[-.04em]">
            Speak with our team about mobility financing
          </h2>
          <div className="flex flex-col gap-3 min-[420px]:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#ffb84d] px-6 text-sm font-bold text-[#1f3b70] transition hover:bg-white"
            >
              Contact Energy Fintech <ArrowRight size={16} />
            </Link>
            <Link
              href="/business-model"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-bold transition hover:bg-white/10"
            >
              Understand Our Business Model
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
