import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  Check,
  ClipboardCheck,
  Cpu,
  Handshake,
  HeartHandshake,
  Landmark,
  LineChart,
  MapPinned,
  Plus,
  Truck,
  Users,
  Zap,
} from 'lucide-react'
import { Container, SectionHeading } from '@/components/sections/SharedSections'
import { Reveal } from '@/components/sections/Reveal'

const capabilities = [
  [Truck, 'E-Rickshaw Financing', '/services#e-rickshaw'],
  [BatteryCharging, 'Battery Financing', '/services#battery'],
  [Zap, 'Two-Wheeler Financing', '/services#two-wheeler'],
  [Building2, 'Commercial Mobility', '/services#commercial'],
] as const

const approach = [
  [Cpu, 'Digital Underwriting', 'Technology-enabled assessment processes that support financing decisions.'],
  [MapPinned, 'Field Investigation', 'Residence and business verification, customer profiling and earning capacity checks.'],
  [ClipboardCheck, 'Collection Management', 'Structured EMI collections, customer follow-ups and recovery management.'],
  [HeartHandshake, 'Customer Servicing', 'A relationship-driven approach to supporting customers through their financing.'],
  [LineChart, 'Portfolio Monitoring', 'Ongoing monitoring of the financing portfolio as part of day-to-day operations.'],
] as const

const ecosystem = [
  [Landmark, 'Institutional Funding Partners', 'Funding strength through bank and NBFC partnerships under a co-lending model.'],
  [Cpu, 'Fintech Capabilities', 'Technology-enabled assessment and financing operations.'],
  [MapPinned, 'Field Operations', 'On-ground market expertise, verification and customer profiling.'],
  [Handshake, 'Customer Financing Support', 'Financing across vehicles, batteries and mobility assets.'],
] as const

const faqs = [
  [
    'What does Energy Fintech Services LLP do?',
    'Energy Fintech Services LLP is a fintech-driven financial services company supporting India’s green mobility and last-mile transportation sector. It connects institutional funding with customers seeking finance for electric vehicles, batteries and mobility-related assets.',
  ],
  [
    'What types of mobility financing does the company focus on?',
    'Our focus areas are e-rickshaw financing, battery financing, two-wheeler financing, and commercial mobility support. You can read more about each on our Services page.',
  ],
  [
    'Does the company support electric three-wheelers?',
    'Yes. E-rickshaw financing covers L3 and L5 electric vehicles, with support for drivers and small fleet operators.',
  ],
  [
    'What is the company’s approach to financing operations?',
    'We combine technology-enabled assessment with on-ground expertise: digital underwriting, field investigation, collection management and customer servicing, operating through a fintech-based co-lending model.',
  ],
  [
    'How can businesses contact Energy Fintech Services LLP?',
    'Call +91 98184 84810 or email energyfintechfinancellp@gmail.com, or use the enquiry form on our Contact page. For specific questions about financing, please contact our team directly.',
  ],
] as const

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-[#172b4d]">
      {/* 1 — HERO */}
      <section className="bg-[#f7f9fc] py-10 sm:py-14 lg:py-16">
        <Container className="grid items-center gap-9 lg:grid-cols-[1fr_1.02fr] lg:gap-14">
          <div className="relative z-10">
            <p className="rise text-[11px] font-bold tracking-[.2em] text-[#087fc3]">
              FINANCING THE FUTURE OF MOBILITY
            </p>
            <h1
              lang="hi"
              className="rise d1 mt-4 max-w-[680px] text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.25]"
            >
              अब ई-रिक्शा व ई-2W पर{' '}
              <span className="text-[#087fc3]">लोन उपलब्ध।</span>
              <span className="mt-2 block text-[0.62em] leading-[1.4] text-[#172b4d]">
                आसान शर्तों पर हमारे साथ जुड़ें।
              </span>
            </h1>
            <p className="rise d2 mt-5 max-w-xl text-[15px] leading-7 text-[#65738b] sm:text-base">
              Smart, accessible financing solutions for electric vehicles, batteries, and commercial
              mobility—helping drivers and businesses move forward with confidence.
            </p>
            <div className="rise d3 mt-6 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center">
              <Link
                href="/services"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#087fc3] px-5 text-[13px] font-bold text-white transition hover:bg-[#1f3b70]"
              >
                Explore Our Solutions <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#1f3b70]/25 px-5 text-[13px] font-bold text-[#1f3b70] transition hover:border-[#1f3b70] hover:bg-[#1f3b70] hover:text-white"
              >
                Talk to Our Team
              </Link>
            </div>
            <p className="rise d4 mt-6 flex max-w-sm items-start gap-3 text-xs leading-5 text-[#65738b]">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#ffb84d] text-[#1f3b70]">
                <Check size={12} />
              </span>
              Built around technology, trusted relationships, and sustainable transportation.
            </p>
          </div>
          <div className="reveal-img relative h-[340px] sm:h-[400px] lg:h-[440px]">
            <div className="absolute inset-y-3 left-3 right-0 rounded-md bg-[#1f3b70] sm:left-6" />
            <div className="absolute -bottom-2 -left-2 h-16 w-16 border-b-[8px] border-l-[8px] border-[#ffb84d] sm:h-20 sm:w-20" />
            <div className="absolute inset-x-0 top-0 bottom-[76px] overflow-hidden rounded-md sm:bottom-[88px]">
              <Image
                src="/images/hero-e-rickshaw.jpeg"
                alt="Energy Fintech electric rickshaw"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-40 w-40 overflow-hidden rounded-md border-[5px] border-white bg-white shadow-xl sm:h-48 sm:w-48">
              <Image
                src="/images/hero-electric-scooter.jpeg"
                alt="Blue Energy Fintech electric scooter"
                fill
                sizes="(max-width: 640px) 160px, 192px"
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2 — CAPABILITIES STRIP */}
      <section aria-label="Business focus" className="border-b border-[#e5eaf1]">
        <Container className="grid grid-cols-2 lg:grid-cols-4">
          {capabilities.map(([Icon, label, href], i) => (
            <Link
              key={label}
              href={href}
              className={`group flex min-h-[72px] items-center gap-3 border-[#e5eaf1] px-3 transition hover:bg-[#f7f9fc] sm:px-5 ${i % 2 === 0 ? 'border-r' : ''} ${i > 1 ? 'border-t lg:border-t-0' : ''} ${i === 1 ? 'lg:border-r' : ''}`}
            >
              <Icon size={20} className="shrink-0 text-[#087fc3]" />
              <span className="text-xs font-bold leading-4 sm:text-[13px]">{label}</span>
              <ArrowRight
                size={14}
                className="ml-auto hidden shrink-0 text-[#a9b4c4] transition group-hover:translate-x-1 group-hover:text-[#087fc3] sm:block"
              />
            </Link>
          ))}
        </Container>
      </section>

      {/* 3 — INTRODUCTION */}
      <section className="py-12 sm:py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-14">
          <Reveal className="relative">
            <div className="relative h-[270px] overflow-hidden rounded-md sm:h-[400px]">
              <Image
                src="/images/company-vishala.jpg"
                alt="White electric three-wheeler e-rickshaw parked on grass"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 right-3 max-w-[230px] rounded-md bg-[#1f3b70] p-4 text-white sm:-right-4">
              <span className="block h-0.5 w-8 bg-[#ffb84d]" />
              <p className="mt-3 text-xs font-semibold leading-5">
                Financial access for green mobility and last-mile transportation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="WHO WE ARE"
              title="Financial Solutions That Move Mobility Forward"
            />
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#65738b]">
              Energy Fintech Services LLP is a fintech-driven financial services company supporting
              India’s green mobility and last-mile transportation sector.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#65738b]">
              We connect institutional funding with drivers and businesses seeking finance for
              electric vehicles, battery systems and mobility-related assets. Our operations span
              vehicle financing, customer servicing, field verification, collections and future
              insurance integration.
            </p>
            <ul className="mt-4 grid max-w-xl gap-2 text-sm min-[480px]:grid-cols-2">
              {[
                'Electric vehicle financing',
                'Last-mile connectivity',
                'Commercial transport solutions',
                'Driver and small operator support',
              ].map((x) => (
                <li key={x} className="flex gap-2 font-medium">
                  <Check size={16} className="mt-0.5 shrink-0 text-[#087fc3]" />
                  {x}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-[#1f3b70] px-5 text-[13px] font-bold text-white transition hover:bg-[#087fc3]"
            >
              Discover Our Company <ArrowRight size={16} />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* 4 — FINANCING SOLUTIONS (asymmetric) */}
      <section className="bg-[#f7f9fc] py-12 sm:py-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="OUR FINANCING SOLUTIONS"
              title="Financing Built Around the Future of Mobility"
              text="Supporting drivers, small businesses and mobility operators across electric vehicles, batteries, two-wheelers and commercial transport."
            />
          </Reveal>
          <div className="mt-7 grid gap-4 lg:grid-cols-12">
            {/* A — primary */}
            <Reveal className="lg:col-span-7 lg:row-span-2">
              <Link
                href="/services#e-rickshaw"
                className="group relative block h-full min-h-[340px] overflow-hidden rounded-md bg-[#14294e] lg:min-h-[520px]"
              >
                <Image
                  src="/images/company-mayuri.jpg"
                  alt="Light blue electric three-wheeler e-rickshaw against a city skyline"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-[40%_center] transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14294e] via-[#14294e]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
                  <span className="text-[10px] font-bold tracking-[.18em] text-[#ffb84d]">
                    01 / FEATURED SOLUTION
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                    E-Rickshaw Financing
                  </h3>
                  <p className="mt-2 max-w-md text-[13px] leading-6 text-white/80">
                    Financing support for L3 and L5 electric vehicles, helping drivers and small
                    fleet operators access self-employment and eco-friendly transportation.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#ffb84d]">
                    Explore E-Rickshaw Financing{' '}
                    <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* B — battery */}
            <Reveal className="lg:col-span-5" delay={80}>
              <Link
                href="/services#battery"
                className="group relative flex h-full min-h-[240px] flex-col justify-end overflow-hidden rounded-md bg-[#1f3b70] p-5 text-white"
              >
                <Image
                  src="/images/ev-charging-plugs-closeup.jpg"
                  alt="Electric vehicle charging plugs at a charging station"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover opacity-35 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f3b70] via-[#1f3b70]/60 to-[#1f3b70]/20" />
                <div className="relative">
                  <BatteryCharging size={24} className="text-[#ffb84d]" />
                  <span className="mt-3 block text-[10px] font-bold tracking-[.18em] text-[#ffb84d]">
                    02 / ENERGY STORAGE
                  </span>
                  <h3 className="mt-1 text-xl font-semibold">Battery Financing</h3>
                  <p className="mt-2 text-[13px] leading-6 text-white/75">
                    Support for battery replacement, battery upgrades and Battery-as-a-Service
                    solutions.
                  </p>
                </div>
              </Link>
            </Reveal>

            {/* C — two-wheeler */}
            <Reveal className="lg:col-span-5" delay={140}>
              <Link
                href="/services#two-wheeler"
                className="group grid h-full overflow-hidden rounded-md border border-[#dfe5ed] bg-white min-[520px]:grid-cols-[.9fr_1.1fr] lg:grid-cols-1 xl:grid-cols-[.9fr_1.1fr]"
              >
                <div className="relative min-h-[160px]">
                  <Image
                    src="/images/scooters-varanasi.jpg"
                    alt="Riders on scooters in a busy Indian city street"
                    fill
                    sizes="(max-width: 520px) 100vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <Zap size={22} className="text-[#087fc3]" />
                  <span className="mt-3 block text-[10px] font-bold tracking-[.18em] text-[#b17a22]">
                    03 / PERSONAL MOBILITY
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">Two-Wheeler Financing</h3>
                  <p className="mt-2 text-[13px] leading-6 text-[#65738b]">
                    Electric and petrol two-wheelers for personal mobility, delivery executives and
                    small business operators.
                  </p>
                </div>
              </Link>
            </Reveal>

            {/* D — wide commercial */}
            <Reveal className="lg:col-span-12" delay={100}>
              <Link
                href="/services#commercial"
                className="group relative flex min-h-[200px] items-center overflow-hidden rounded-md bg-[#14294e] text-white"
              >
                <Image
                  src="/images/company-pink-erickshaw.jpg"
                  alt="Passenger e-rickshaw used for commercial transport"
                  fill
                  sizes="100vw"
                  className="object-cover object-center opacity-60 transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#14294e] via-[#14294e]/80 to-[#14294e]/10" />
                <div className="relative max-w-xl p-5 sm:p-8">
                  <span className="text-[10px] font-bold tracking-[.18em] text-[#ffb84d]">
                    04 / MOBILITY ASSETS
                  </span>
                  <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                    Commercial Mobility Support
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-white/80">
                    Financing support for commercial transportation assets and mobility-related
                    business requirements.
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#ffb84d]">
                    View all services{' '}
                    <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 5 — APPROACH */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="WHY ENERGY FINTECH"
              title="A Smarter Approach to Mobility Financing"
              text="Technology-enabled assessment, backed by on-ground expertise at every stage of the financing relationship."
            />
          </Reveal>
          <Reveal>
            <ol className="relative mt-9 grid gap-7 border-l border-[#d6deea] pl-7 md:grid-cols-5 md:gap-5 md:border-l-0 md:pl-0 md:pt-9">
              <span
                aria-hidden
                className="line-grow absolute left-0 top-0 hidden h-px w-full bg-[#d6deea] md:block"
              />
              {approach.map(([Icon, title, text], i) => (
                <li key={title} className="relative">
                  <span className="absolute -left-[34px] top-1 grid h-4 w-4 place-items-center rounded-full bg-[#ffb84d] md:-top-[44px] md:left-0" />
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

      {/* 6 — ECOSYSTEM */}
      <section className="bg-[#14294e] py-12 text-white sm:py-16">
        <Container>
          <Reveal className="grid items-end gap-4 md:grid-cols-[1fr_auto]">
            <SectionHeading
              light
              eyebrow="HOW IT WORKS"
              title="Connecting Financing, Technology and Mobility"
              text="Our fintech-based co-lending model combines institutional funding strength with fintech capabilities and on-ground market expertise."
            />
            <Link
              href="/business-model"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#ffb84d] px-5 text-[13px] font-bold text-[#1f3b70] transition hover:bg-white"
            >
              Explore Our Business Model <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal>
            <ol className="relative mt-9 grid gap-5 md:grid-cols-4">
              <span
                aria-hidden
                className="line-grow absolute left-[23px] top-6 hidden h-px w-[calc(100%-46px)] bg-white/20 md:block"
              />
              {ecosystem.map(([Icon, title, text], i) => (
                <li key={title} className="relative flex gap-4 md:block">
                  {i < ecosystem.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-[23px] top-12 h-[calc(100%-1rem)] w-px bg-white/20 md:hidden"
                    />
                  )}
                  <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-md border border-[#ffb84d] bg-[#14294e] text-[#ffb84d]">
                    <Icon size={20} />
                  </span>
                  <div className="md:mt-4">
                    <span className="text-[10px] font-bold tracking-widest text-[#ffb84d]">
                      STEP 0{i + 1}
                    </span>
                    <h3 className="mt-1 text-sm font-semibold">{title}</h3>
                    <p className="mt-2 text-[13px] leading-5 text-white/65">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* 7 — IMPACT */}
      <section className="py-12 sm:py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="OUR IMPACT ON MOBILITY"
              title="Supporting the People Who Keep India Moving"
            />
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#65738b]">
              Every day, e-rickshaw drivers, delivery executives and small fleet operators keep
              cities and towns connected. Accessible financing helps them move from need to
              ownership of the vehicles and batteries their work depends on.
            </p>
            <div className="mt-5 grid max-w-xl gap-4 sm:grid-cols-3">
              {[
                [Users, 'Drivers', 'Self-employment through electric vehicles.'],
                [Truck, 'Small fleets', 'Support for growing commercial operators.'],
                [Building2, 'Businesses', 'Mobility assets for transport needs.'],
              ].map(([Icon, t, d]) => {
                const I = Icon as typeof Users
                return (
                  <div key={t as string} className="border-t-2 border-[#ffb84d] pt-3">
                    <I size={18} className="text-[#087fc3]" />
                    <h3 className="mt-2 text-sm font-semibold">{t as string}</h3>
                    <p className="mt-1 text-xs leading-5 text-[#65738b]">{d as string}</p>
                  </div>
                )
              })}
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={100}>
            <div className="grid grid-cols-[1.25fr_.75fr] gap-3">
              <div className="relative h-[300px] overflow-hidden rounded-md sm:h-[420px]">
                <Image
                  src="/images/varanasi-street-tuk-tuks.jpg"
                  alt="Busy Indian street with three-wheelers carrying passengers"
                  fill
                  sizes="(max-width: 1024px) 60vw, 28vw"
                  className="object-cover object-[45%_center]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative flex-1 overflow-hidden rounded-md">
                  <Image
                    src="/images/scooter-india-blue.jpg"
                    alt="Scooter parked on an Indian street"
                    fill
                    sizes="(max-width: 1024px) 40vw, 18vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-md bg-[#1f3b70] p-4 text-white">
                  <span className="block h-0.5 w-8 bg-[#ffb84d]" />
                  <p className="mt-2 text-xs font-semibold leading-5">Financial inclusion for a moving India.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 8 — LEADERSHIP */}
      <section className="bg-[#f7f9fc] py-12 sm:py-16">
        <Container>
          <Reveal className="grid items-end gap-4 md:grid-cols-[1fr_auto]">
            <SectionHeading
              eyebrow="LEADERSHIP"
              title="Leadership Focused on Mobility and Financial Services"
              text="Practical financial and automotive experience supports disciplined operations and strategic planning."
            />
            <Link
              href="/about#leadership"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#1f3b70] px-5 text-[13px] font-bold text-[#1f3b70] transition hover:bg-[#1f3b70] hover:text-white"
            >
              Meet Our Leadership <ArrowRight size={16} />
            </Link>
          </Reveal>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {[
              [
                '/images/leadership-jugal-kishore-sharma.png',
                'Mr. Jugal Kishore Sharma',
                'Founder & Partner',
                'More than 35 years of experience across automobile dealership operations, financial management, banking coordination and strategic planning.',
                'border-[#1f3b70]',
              ],
              [
                '/images/leadership-sonu-sharma.png',
                'Ms. Sonu Sharma',
                'Partner',
                'Associated with business coordination, relationship management and the company’s green mobility financing ecosystem.',
                'border-[#ffb84d]',
              ],
              [
                '/images/leadership-sandeep-sharma.jpg',
                'Mr. Sandeep Sharma',
                'Business Head',
                'More than 15 years of vehicle-funding experience in the banking sector, with extensive experience in collections and team handling.',
                'border-[#087fc3]',
              ],
              [
                '/images/leadership-mayank-gupta.jpg',
                'Mr. Mayank Gupta',
                'Chief Finance Officer · CFO',
                '10 years of experience in accounting, finance management and financial operations. M.Com; currently pursuing LL.B.',
                'border-[#1f3b70]',
              ],
            ].map(([photo, name, role, text, tone], i) => (
              <Reveal key={name} delay={i * 100}>
                <article className="flex h-full gap-5 rounded-md border border-[#e5eaf1] bg-white p-5 sm:p-6">
                  <div
                    className={`relative h-28 w-[84px] shrink-0 overflow-hidden rounded-md border-b-4 sm:h-36 sm:w-28 ${tone}`}
                  >
                    <Image
                      src={photo}
                      alt={`Portrait of ${name}`}
                      fill
                      sizes="112px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[.16em] text-[#087fc3]">
                      {role.toUpperCase()}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight">{name}</h3>
                    <span className="mt-2 block h-0.5 w-8 bg-[#ffb84d]" />
                    <p className="mt-3 text-[13px] leading-6 text-[#65738b]">{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 9 — FUTURE */}
      <section className="relative isolate overflow-hidden py-16 text-white sm:py-24">
        <Image
          src="/images/delhi-street-e-rickshaws.jpg"
          alt="E-rickshaws travelling through a busy Indian street"
          fill
          sizes="100vw"
          className="-z-10 object-cover object-[50%_55%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#14294e]/95 via-[#14294e]/75 to-[#14294e]/25" />
        <Container>
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[.2em] text-[#ffb84d]">
              FUTURE OF GREEN MOBILITY
            </p>
            <h2 className="mt-3 text-[clamp(1.9rem,4.4vw,3.4rem)] font-semibold leading-[1.08] tracking-[-.045em]">
              Moving Towards a More Connected Mobility Future
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/80">
              Our vision is to become a trusted and technology-driven financial services platform
              supporting India’s green mobility transformation and empowering underserved customers
              through accessible financing solutions.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#ffb84d]"
            >
              Read our story <ArrowRight size={16} />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* 10 — FAQ */}
      <section className="py-12 sm:py-16">
        <Container className="grid gap-7 lg:grid-cols-[.7fr_1.3fr] lg:gap-14">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              text="Quick answers about Energy Fintech Services LLP."
            />
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#087fc3]"
            >
              Have another question? Contact us <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal className="border-t border-[#dfe5ed]">
            {faqs.map(([q, a]) => (
              <details key={q} className="faq group border-b border-[#dfe5ed]">
                <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 py-3 text-sm font-semibold hover:text-[#087fc3] sm:text-[15px]">
                  {q}
                  <span className="faq-icon grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[#eef3f9] text-[#1f3b70] transition-transform">
                    <Plus size={16} />
                  </span>
                </summary>
                <p className="faq-body max-w-2xl pb-4 text-sm leading-6 text-[#65738b]">{a}</p>
              </details>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* 11 — CTA */}
      <section className="relative isolate overflow-hidden bg-[#1f3b70] py-12 text-white sm:py-16">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-20 -z-10 select-none text-[18rem] font-extrabold leading-none text-white/[.04]"
        >
          E
        </span>
        <Container className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[.2em] text-[#ffb84d]">LET’S MOVE FORWARD</p>
            <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-.04em]">
              Let’s Move Towards Smarter Mobility Financing
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
              Connect with Energy Fintech Services LLP to explore our mobility-focused financial
              solutions.
            </p>
          </Reveal>
          <div className="flex flex-col gap-3 min-[420px]:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#ffb84d] px-6 text-sm font-bold text-[#1f3b70] transition hover:bg-white"
            >
              Contact Our Team <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Explore Our Services
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
