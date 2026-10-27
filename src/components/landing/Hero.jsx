import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { ArrowIcon, CheckIcon, CtaLink, Eyebrow } from './SectionHeading'
import { CITY, CUTOFF, SAME_DAY_BY, cutoffStatus } from './terms'

// Same worked example as the How it works journey (Standard, same day).
const SCANS = [
  { time: '09:42', label: 'Booked at checkout', detail: 'Customer pinned Area 47/3' },
  { time: '12:30', label: 'Sealed at pickup', detail: 'Seal A-44871 · Tiwonge M.' },
  { time: '13:50', label: 'Out for delivery', detail: 'PIN sent by WhatsApp' },
  { time: '14:12', label: 'Handed over', detail: 'PIN 4471 matched · photo' },
]

// Deterministic bar widths so server and client render the same barcode.
const BARS = 'DB-LL-204817/KAYA-PHARMACY/AREA47'.split('').flatMap((c, i) => {
  const n = c.charCodeAt(0) * 31 + i * 17
  return [1 + (n % 4), 1 + ((n >> 3) % 3)]
})

function Barcode({ className }) {
  let x = 0
  const rects = BARS.map((w, i) => {
    const rect = i % 2 === 0 ? <rect key={i} x={x} y="0" width={w} height="40" /> : null
    x += w
    return rect
  })
  return (
    <svg
      viewBox={`0 0 ${x} 40`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <g fill="currentColor">{rects}</g>
    </svg>
  )
}

function useScanSequence() {
  // Render the finished label on the server; animate the scans once mounted.
  const [step, setStep] = useState(SCANS.length + 1)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let current = 0
    setStep(0)
    const id = setInterval(() => {
      current = current > SCANS.length + 3 ? 0 : current + 1
      setStep(Math.min(current, SCANS.length + 1))
    }, 1300)
    return () => clearInterval(id)
  }, [])

  return step
}

function formatLeft(minutes) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return h ? `${h} h ${m} min` : `${m} min`
}

function CutoffClock() {
  // Server render shows the rule; the live countdown takes over in the browser.
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const tick = () => setStatus(cutoffStatus())
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])

  let message = `Book by ${CUTOFF.label}, at your customer’s door by ${SAME_DAY_BY} the same day.`
  if (status?.state === 'open')
    message = `Book in the next ${formatLeft(status.minutesLeft)} and it reaches your customer’s door by ${SAME_DAY_BY} today.`
  if (status?.state === 'after')
    message = `Today’s same-day cut-off has passed. Express still reaches the door in about 90 minutes.`
  if (status?.state === 'closed')
    message = `No runs today. Book now for the first run on the next working day.`

  return (
    <p className="mt-10 flex max-w-xl items-start gap-3 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80">
      <span className="relative mt-1.5 flex h-2 w-2 shrink-0">
        {status?.state === 'open' && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
        )}
        <span
          className={clsx(
            'relative inline-flex h-2 w-2 rounded-full',
            status?.state === 'open' ? 'bg-signal' : 'bg-tape'
          )}
        />
      </span>
      <span aria-live="polite">{message}</span>
    </p>
  )
}

function Waybill() {
  const step = useScanSequence()
  const delivered = step > SCANS.length

  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0">
      {/* Parcel tape */}
      <div
        aria-hidden="true"
        className="absolute -left-10 -top-1 z-20 h-7 w-28 -rotate-[38deg] bg-tape/90 shadow-sm"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-2 -right-8 z-20 h-7 w-28 -rotate-[38deg] bg-tape/90 shadow-sm"
      />

      <figure
        className="relative rotate-[1.5deg] overflow-hidden rounded-sm bg-white text-ink shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        aria-label="Example Doorbell delivery note with a live scan log"
      >
        <div className="flex items-center justify-between border-b-2 border-ink px-5 py-3">
          <span className="font-display text-lg font-black uppercase tracking-tight">
            Doorbell
          </span>
          <span className="rounded-sm bg-ink px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-white">
            Same-day
          </span>
        </div>

        <div className="grid grid-cols-2 border-b border-ink/15">
          <div className="border-r border-ink/15 px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
              From
            </p>
            <p className="mt-1 text-sm font-bold">Kaya Pharmacy</p>
            <p className="text-xs text-ink/60">Area 3, Lilongwe</p>
          </div>
          <div className="px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
              To
            </p>
            <p className="mt-1 text-sm font-bold">Chikondi Banda</p>
            <p className="text-xs text-ink/60">Area 47/3, Lilongwe</p>
          </div>
        </div>

        <div className="flex items-end gap-4 border-b border-ink/15 px-5 py-4">
          <Barcode className="h-12 flex-1 text-ink" />
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
              Tracking
            </p>
            <p className="font-mono text-sm font-semibold">DB-LL-204817</p>
          </div>
        </div>

        <div className="px-5 py-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
            Custody log
          </p>
          <ol className="mt-3 space-y-3" aria-live="off">
            {SCANS.map((scan, i) => {
              const done = step > i
              const active = step === i
              return (
                <li
                  key={scan.label}
                  className={clsx(
                    'flex gap-3 transition-all duration-500',
                    done || active ? 'opacity-100' : 'translate-y-1 opacity-20'
                  )}
                >
                  <span className="w-10 shrink-0 font-mono text-xs text-ink/50">
                    {scan.time}
                  </span>
                  <span
                    className={clsx(
                      'mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-500',
                      done ? 'border-signal bg-signal' : 'border-ink/30',
                      active && 'animate-pulse border-primary'
                    )}
                  />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold leading-tight">
                      {scan.label}
                    </span>
                    <span className="block text-xs text-ink/60">
                      {scan.detail}
                    </span>
                  </span>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="grid grid-cols-3 border-t-2 border-dashed border-ink/20 bg-paper font-mono text-[11px] font-semibold uppercase tracking-wider">
          {['PIN', 'Photo', 'GPS'].map((proof) => (
            <span
              key={proof}
              className={clsx(
                'flex items-center justify-center gap-1.5 py-3 transition-colors duration-500',
                delivered ? 'text-signal' : 'text-ink/30'
              )}
            >
              <CheckIcon className="h-3.5 w-3.5" />
              {proof}
            </span>
          ))}
        </div>

        {/* Rubber stamp */}
        <div
          aria-hidden="true"
          className={clsx(
            'pointer-events-none absolute bottom-[4.5rem] right-5 -rotate-12 rounded-md border-[3px] border-signal px-3 py-1 font-display text-2xl font-black uppercase tracking-wider text-signal mix-blend-multiply transition-all duration-300',
            delivered ? 'scale-100 opacity-90' : 'scale-150 opacity-0'
          )}
        >
          Delivered
        </div>
      </figure>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-24 pt-36 sm:pt-44 lg:pb-32">
      {/* Road grid */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-[0.07]"
      >
        <defs>
          <pattern
            id="roads"
            width="96"
            height="96"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0 48h96M48 0v96" stroke="#fff" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#roads)" />
      </svg>
      <div
        aria-hidden="true"
        className="absolute -right-40 top-10 h-[36rem] w-[36rem] rounded-full bg-primary/30 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <Eyebrow dark>Delivery for businesses · {CITY}</Eyebrow>
          <h1 className="mt-6 font-display text-[2.6rem] font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-5xl xl:text-6xl">
            Your last-mile, <span className="text-tape">same-day</span>{' '}
            delivery partner.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
            You make the sale. We take it from your counter, warehouse or
            courier branch to your customer&apos;s door the same day, and
            hand it over only to the right person, with proof.
          </p>
          <CutoffClock />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="#get-started">
              Get started <ArrowIcon className="h-4 w-4" />
            </CtaLink>
            <CtaLink href="#pricing" variant="ghost">
              See our prices
            </CtaLink>
          </div>
          <p className="mt-6 font-mono text-xs text-white/50">
            Published prices · No contract · Top up with Airtel Money or
            Mpamba
          </p>
        </div>

        <Waybill />
      </div>
    </section>
  )
}
