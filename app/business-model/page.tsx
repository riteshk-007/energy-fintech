import Link from 'next/link'
import { ArrowRight, ChevronRight, ChevronDown } from 'lucide-react'
import { Container } from '@/components/sections/SharedSections'
import { Reveal } from '@/components/sections/Reveal'

export const metadata = {
  title: 'Business Model & Operations | Energy Fintech Services LLP',
  description:
    'Learn about Energy Fintech Services LLP’s co-lending model and on-ground mobility finance operations.',
}

const model = [
  ['Institutional Funding Partners', 'Funding strength through bank and NBFC partnerships under a co-lending model.'],
  ['Fintech Capabilities', 'Technology-enabled assessment and financing operations.'],
  ['Field Operations', 'Market access supported by field verification and customer profiling.'],
  ['Customer Financing Support', 'Financing focus across vehicles, batteries and mobility assets.'],
] as const

const capabilities = [
  ['Digital Underwriting', 'Technology-enabled assessment processes that support financing decisions.'],
  ['Customer Profiling', 'Building a picture of the customer’s background and earning context.'],
  ['Field Investigation', 'On-ground residence and business verification.'],
  ['Collection Management', 'Structured EMI collection, follow-ups and recovery.'],
  ['Customer Servicing', 'Relationship-led support during financing operations.'],
  ['Portfolio Monitoring', 'Ongoing monitoring of the financing portfolio.'],
] as const

const fieldWork = [
  ['Residence Verification', 'Confirming the customer’s residence details on the ground.'],
  ['Business Verification', 'Verifying the customer’s business or occupation.'],
  ['Customer Profiling', 'Understanding the customer’s background and circumstances.'],
  ['Earning Capacity Assessment', 'Assessing the customer’s income and ability to service the financing.'],
  ['Risk Evaluation', 'Bringing the findings together into a risk view.'],
] as const

const collections = [
  ['EMI Collections', 'Collecting scheduled instalments from customers.'],
  ['Customer Follow-ups', 'Regular contact to support timely payments.'],
  ['Recovery Management', 'Structured recovery activity where payments fall behind.'],
  ['Portfolio Monitoring', 'Tracking the health of the portfolio.'],
] as const

const revenues = [
  ['Interest Income', 'Earnings from financed loan portfolios', 'Current'],
  ['Processing Fees', 'Charges collected during loan processing', 'Current'],
  ['Documentation Charges', 'Service and documentation-related income', 'Current'],
  ['Insurance Commission', 'Future income through insurance partnerships', 'Future'],
  ['Late Payment Charges', 'Charges on delayed EMI payments', 'Current'],
  ['OEM and Dealer Onboarding Charges', 'Charges related to platform implementation', 'Current'],
] as const

const benefits = [
  'Faster approvals',
  'Competitive interest rates',
  'Better customer access',
  'Flexible financing solutions',
] as const

const strengths = [
  'Faster turnaround time',
  'Better portfolio quality',
  'Strong repayment tracking',
  'Improved customer servicing',
] as const

const journey = [
  ['Customer Assessment', 'Digital underwriting systems support the initial assessment.'],
  ['Verification', 'The FI team verifies residence and business and profiles the customer.'],
  ['Financing Support', 'Financing is supported through the co-lending model.'],
  ['EMI Follow-up', 'EMI collections and customer follow-ups after disbursement.'],
  ['Portfolio Monitoring', 'Ongoing monitoring of the financing portfolio.'],
] as const

const future = [
  'Vehicle Insurance Services',
  'EV Protection Plans',
  'Battery Protection Programs',
  'Micro-Insurance Products',
  'Fleet Financing Solutions',
]

const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <p className={`text-[11px] font-bold tracking-[.2em] ${light ? 'text-[#ffb84d]' : 'text-[#087fc3]'}`}>
    {children}
  </p>
)

const h2 = 'mt-3 text-[clamp(1.7rem,3.2vw,2.5rem)] font-semibold leading-[1.08] tracking-[-.045em]'

export default function BusinessModelPage() {
  return (
    <main className="bg-white text-[#172b4d]">
      {/* A — HERO */}
      <section className="relative isolate overflow-hidden bg-[#14294e] py-12 text-white sm:py-20">
        <svg
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full opacity-[.07]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div
          aria-hidden
          className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full border border-[#ffb84d]/30"
        />
        <div
          aria-hidden
          className="absolute -right-10 -top-10 -z-10 h-52 w-52 rounded-full border border-[#ffb84d]/20"
        />
        <Container>
          <p className="rise text-[11px] font-bold tracking-[.2em] text-[#ffb84d]">
            BUSINESS MODEL &amp; OPERATIONS
          </p>
          <h1 className="rise d1 mt-3 max-w-3xl text-[clamp(2.1rem,5vw,4rem)] font-semibold leading-[1.03] tracking-[-.055em]">
            How Our Mobility Financing Ecosystem Works
          </h1>
          <p className="rise d2 mt-4 max-w-xl border-l-2 border-[#ffb84d] pl-4 text-sm leading-6 text-white/75 sm:text-[15px] sm:leading-7">
            Energy Fintech Services LLP operates through a fintech-based co-lending model,
            combining institutional funding strength with fintech capabilities and on-ground market
            expertise.
          </p>
        </Container>
      </section>

      {/* B — CO-LENDING DIAGRAM */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>THE CO-LENDING MODEL</Eyebrow>
            <h2 className={h2}>From institutional funding to mobility finance</h2>
            <p className="mt-3 text-sm leading-6 text-[#65738b]">
              This diagram explains the operating approach. It does not describe a guaranteed
              outcome for every application.
            </p>
          </Reveal>
          <Reveal>
            <ol className="mt-8 grid gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch md:gap-0">
              {model.flatMap(([title, text], i) => {
                const card = (
                  <li
                    key={title}
                    className="rounded-md border border-[#e5eaf1] border-t-2 border-t-[#087fc3] bg-[#f7f9fc] p-4"
                  >
                    <span className="text-[10px] font-extrabold tracking-widest text-[#b17a22]">
                      0{i + 1}
                    </span>
                    <h3 className="mt-2 text-sm font-semibold leading-5">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#65738b]">{text}</p>
                  </li>
                )
                if (i === model.length - 1) return [card]
                return [
                  card,
                  <li
                    key={`a${i}`}
                    aria-hidden
                    className="grid place-items-center py-0.5 text-[#ffb84d] md:px-2"
                  >
                    <ChevronDown size={20} className="md:hidden" />
                    <ChevronRight size={22} className="hidden md:block" />
                  </li>,
                ]
              })}
            </ol>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[#e5eaf1] bg-white py-8">
        <Container className="grid gap-4 lg:grid-cols-[.6fr_1.4fr] lg:gap-14">
          <p className="text-[11px] font-bold tracking-[.2em] text-[#087fc3]">
            STATED OBJECTIVES OF THE MODEL
          </p>
          <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-4">
            {benefits.map((b, i) => (
              <li key={b} className="border-t-2 border-[#ffb84d] py-3 text-sm font-semibold">
                <span className="block text-[10px] font-extrabold text-[#087fc3]">0{i + 1}</span>
                {b}
              </li>
            ))}
          </ul>
        </Container>
        <Container>
          <p className="mt-2 text-xs leading-5 text-[#65738b]">
            These are the company’s stated objectives for the model, not guarantees for any
            individual application.
          </p>
        </Container>
      </section>

      {/* C — TECHNOLOGY & OPERATIONS */}
      <section className="bg-[#f7f9fc] py-12 sm:py-16">
        <Container className="grid gap-7 lg:grid-cols-[.6fr_1.4fr] lg:gap-14">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>TECHNOLOGY &amp; OPERATIONS</Eyebrow>
            <h2 className={h2}>Structured processes, supported on the ground</h2>
            <p className="mt-3 text-sm leading-6 text-[#65738b]">
              Digital underwriting, customer tracking and field operations support financing and
              servicing activities.
            </p>
          </Reveal>
          <Reveal>
            <dl className="grid border-t border-[#d6deea] sm:grid-cols-2 sm:gap-x-8">
              {capabilities.map(([t, d], i) => (
                <div key={t} className="border-b border-[#d6deea] py-4">
                  <dt className="flex items-baseline gap-3 text-[15px] font-semibold">
                    <span className="text-[11px] font-extrabold text-[#ffb84d]">0{i + 1}</span>
                    {t}
                  </dt>
                  <dd className="mt-1 pl-8 text-[13px] leading-5 text-[#65738b]">{d}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>THE FINANCING JOURNEY</Eyebrow>
            <h2 className={h2}>From assessment to portfolio monitoring</h2>
            <p className="mt-3 text-sm leading-6 text-[#65738b]">
              A general overview of how the operating model fits together. It does not describe an
              identical process for every customer.
            </p>
          </Reveal>
          <Reveal>
            <ol className="relative mt-9 grid gap-7 border-l border-[#d6deea] pl-7 md:grid-cols-5 md:gap-5 md:border-l-0 md:pl-0 md:pt-9">
              <span
                aria-hidden
                className="line-grow absolute left-0 top-0 hidden h-px w-full bg-[#d6deea] md:block"
              />
              {journey.map(([t, d], i) => (
                <li key={t} className="relative">
                  <span className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-[#ffb84d] md:-top-[44px] md:left-0" />
                  <span className="text-[11px] font-extrabold tracking-widest text-[#087fc3]">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold">{t}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-[#65738b]">{d}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <div className="mt-9 border-t border-[#e5eaf1] pt-5">
            <p className="text-[11px] font-bold tracking-[.2em] text-[#087fc3]">
              THE HYBRID MODEL HELPS MAINTAIN
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm font-medium sm:grid-cols-4">
              {strengths.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb84d]" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* D — FIELD INVESTIGATION */}
      <section className="py-12 sm:py-16">
        <Container className="grid gap-7 lg:grid-cols-[.6fr_1.4fr] lg:gap-14">
          <Reveal>
            <Eyebrow>FIELD INVESTIGATION</Eyebrow>
            <h2 className={h2}>Field Investigation (FI) team</h2>
            <p className="mt-3 text-sm leading-6 text-[#65738b]">
              Before loan disbursement, the FI team conducts these checks. The process helps
              maintain disciplined lending practices and reduces future default risks.
            </p>
          </Reveal>
          <Reveal>
            <ol className="relative border-l-2 border-[#d6deea] pl-7">
              {fieldWork.map(([t, d], i) => (
                <li key={t} className="relative pb-6 last:pb-0">
                  <span className="absolute -left-[41px] top-0 grid h-7 w-7 place-items-center rounded-md bg-[#1f3b70] text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-[15px] font-semibold">{t}</h3>
                  <p className="mt-1 text-[13px] leading-5 text-[#65738b]">{d}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* E — COLLECTION MANAGEMENT */}
      <section className="bg-[#1f3b70] py-12 text-white sm:py-16">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow light>COLLECTION MANAGEMENT</Eyebrow>
            <h2 className={h2}>Collection team</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Post-disbursement, the collection team manages the following. The company follows a
              relationship-driven approach to maintain strong customer engagement and healthy
              recovery performance.
            </p>
          </Reveal>
          <Reveal>
            <ol className="relative mt-8 grid gap-6 md:grid-cols-4 md:gap-5 md:border-t md:border-white/25 md:pt-8">
              {collections.map(([t, d], i) => (
                <li key={t} className="relative border-l border-white/25 pl-5 md:border-l-0 md:pl-0">
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[#ffb84d] md:-top-[37px] md:left-0" />
                  <span className="text-[11px] font-extrabold tracking-widest text-[#ffb84d]">
                    0{i + 1}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold">{t}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-white/65">{d}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <p className="mt-8 border-t border-white/20 pt-4 text-[13px] leading-6 text-white/70">
            <strong className="text-white">Repossession support</strong> is provided by the
            collection team in critical default cases.
          </p>
        </Container>
      </section>

      {/* F — REVENUE */}
      <section className="py-12 sm:py-16">
        <Container className="grid gap-7 lg:grid-cols-[.6fr_1.4fr] lg:gap-14">
          <Reveal>
            <Eyebrow>REVENUE MODEL</Eyebrow>
            <h2 className={h2}>A sustainable business model</h2>
            <p className="mt-3 text-sm leading-6 text-[#65738b]">
              Energy Fintech Services LLP generates revenue through multiple business channels. This
              diversified income structure supports long-term operational sustainability and
              business scalability. No figures or forecasts are implied.
            </p>
          </Reveal>
          <Reveal>
            <div className="overflow-hidden rounded-md border border-[#e5eaf1]">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Documented revenue streams</caption>
                <thead className="bg-[#f7f9fc] text-[10px] font-bold uppercase tracking-widest text-[#65738b]">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Revenue source
                    </th>
                    <th scope="col" className="hidden px-4 py-3 sm:table-cell">
                      Note
                    </th>
                    <th scope="col" className="px-4 py-3 text-right">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5eaf1]">
                  {revenues.map(([name, note, status]) => (
                    <tr key={name}>
                      <th scope="row" className="px-4 py-3.5 align-top font-semibold">
                        {name}
                        <span className="mt-1 block text-xs font-normal leading-5 text-[#65738b] sm:hidden">
                          {note}
                        </span>
                      </th>
                      <td className="hidden px-4 py-3.5 text-[13px] text-[#65738b] sm:table-cell">
                        {note}
                      </td>
                      <td className="px-4 py-3.5 text-right align-top">
                        <span
                          className={`inline-block rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${
                            status === 'Current'
                              ? 'bg-[#eaf6fc] text-[#087fc3]'
                              : 'bg-[#fff3df] text-[#b17a22]'
                          }`}
                        >
                          {status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* G — FUTURE */}
      <section className="border-y border-[#e5eaf1] bg-[#f7f9fc] py-12 sm:py-14">
        <Container className="grid gap-6 lg:grid-cols-[.6fr_1.4fr] lg:gap-14">
          <Reveal>
            <Eyebrow>FUTURE EXPANSION</Eyebrow>
            <h2 className={h2}>A broader mobility ecosystem</h2>
            <p className="mt-3 text-sm leading-6 text-[#65738b]">
              To become a trusted, technology-driven platform supporting India’s green mobility transformation, building a complete “One-Stop Financial Solution” for EV and mobility customers. These are planned areas, not current offerings.
            </p>
          </Reveal>
          <Reveal>
            <ol className="grid gap-3 sm:grid-cols-2">
              {future.map((f, i) => (
                <li
                  key={f}
                  className="flex items-center gap-3 rounded-md border border-dashed border-[#c5cfdd] bg-white px-4 py-3.5 text-sm font-semibold"
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
      <section className="bg-[#14294e] py-10 text-white sm:py-12">
        <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-xl text-[clamp(1.5rem,3vw,2.2rem)] font-semibold leading-[1.1] tracking-[-.04em]">
            Let’s Build the Future of Mobility Financing
          </h2>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#ffb84d] px-6 text-sm font-bold text-[#1f3b70] transition hover:bg-white"
          >
            Contact Our Team <ArrowRight size={16} />
          </Link>
        </Container>
      </section>
    </main>
  )
}
