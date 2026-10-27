import { useState } from 'react'
import clsx from 'clsx'
import { CheckIcon, CtaLink, SectionHeading } from './SectionHeading'
import { CITY, EXTRAS, POLICIES, SPEEDS, estimate, formatMk } from './terms'

const PLANS = [
  {
    name: 'Pay as you go',
    tagline: 'For getting started',
    billing: 'Prepaid balance',
    points: [
      'The published rates on this page',
      `Top up with ${POLICIES.topUp}`,
      'Business Portal and Doorbell Checkout',
      'No contract, no minimum, no registered company needed',
    ],
  },
  {
    name: 'Business',
    tagline: 'From 300 deliveries a month',
    billing: 'Monthly invoice',
    featured: true,
    points: [
      'Volume rates agreed on your rate card',
      'Scheduled daily collections',
      'Team logins, CSV upload and API access',
      'Inter-city last mile from coach depots',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For chains, couriers and corporates',
    billing: 'Agreement',
    points: [
      'Dedicated riders on your routes',
      'Service levels with credits if we miss',
      'Custom integrations and reporting',
      'Named account manager',
    ],
  },
]

function SpeedCard({ speed }) {
  const s = SPEEDS[speed]
  return (
    <div className="flex flex-col rounded-lg border border-line bg-white p-8">
      <p className="font-mono text-[11px] uppercase tracking-widest text-ink/50">
        {s.fit}
      </p>
      <h3 className="mt-3 font-display text-2xl font-black text-ink">{s.name}</h3>
      <p className="mt-2 text-sm leading-6 text-ink/70">{s.promise}</p>
      <div className="mt-6 border-t border-line pt-6">
        {speed === 'express' ? (
          <>
            <p className="font-display text-4xl font-black tracking-tight text-ink">
              {formatMk(s.base)}
            </p>
            <p className="mt-1 text-sm text-ink/60">
              first {s.baseKm} km, then {formatMk(s.perKm)} per km
            </p>
          </>
        ) : (
          <>
            <p className="font-display text-4xl font-black tracking-tight text-ink">
              {formatMk(s.flat)}
            </p>
            <p className="mt-1 text-sm text-ink/60">flat, anywhere in {CITY}</p>
          </>
        )}
      </div>
      <ul className="mt-6 space-y-2 text-sm text-ink">
        <li className="flex gap-2">
          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
          {s.window}
        </li>
        {s.lateWindow && (
          <li className="flex gap-2">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
            {s.lateWindow}
          </li>
        )}
        <li className="flex gap-2">
          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
          PIN handover, photo proof and tracking included
        </li>
      </ul>
    </div>
  )
}

function Estimator() {
  const [speed, setSpeed] = useState('express')
  const [km, setKm] = useState(8)
  const [cod, setCod] = useState('')
  const codAmount = Number(String(cod).replace(/[^0-9]/g, '')) || 0
  const { delivery, collection, total } = estimate({ speed, km, cod: codAmount })

  return (
    <div className="flex flex-col rounded-lg bg-ink p-8 text-white">
      <h3 className="font-display text-xl font-extrabold">Estimate a delivery</h3>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold">Speed</legend>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {Object.entries(SPEEDS).map(([key, s]) => (
            <label
              key={key}
              className={clsx(
                'cursor-pointer rounded-md border px-3 py-2 text-center text-sm font-semibold transition focus-within:ring-2 focus-within:ring-tape',
                speed === key
                  ? 'border-tape bg-tape text-ink'
                  : 'border-white/20 text-white/80 hover:border-white/50'
              )}
            >
              <input
                type="radio"
                name="speed"
                value={key}
                checked={speed === key}
                onChange={() => setSpeed(key)}
                className="sr-only"
              />
              {s.name}
            </label>
          ))}
        </div>
      </fieldset>

      <div className={clsx('mt-6', speed !== 'express' && 'opacity-40')}>
        <div className="flex justify-between text-sm">
          <label htmlFor="km" className="font-semibold">
            Distance
          </label>
          <span className="font-mono">{km} km</span>
        </div>
        <input
          id="km"
          type="range"
          min={1}
          max={25}
          value={km}
          disabled={speed !== 'express'}
          onChange={(e) => setKm(Number(e.target.value))}
          className="mt-3 w-full accent-tape"
        />
        {speed !== 'express' && (
          <p className="mt-1 text-xs text-white/60">
            Standard is one price across {CITY}.
          </p>
        )}
      </div>

      <div className="mt-6">
        <label htmlFor="cod" className="text-sm font-semibold">
          Collect from your customer{' '}
          <span className="font-normal text-white/40">(optional)</span>
        </label>
        <div className="mt-2 flex items-center rounded-md bg-white/5 ring-1 ring-inset ring-white/15 focus-within:ring-2 focus-within:ring-tape">
          <span className="pl-3 font-mono text-sm text-white/50">MK</span>
          <input
            id="cod"
            inputMode="numeric"
            placeholder="0"
            value={cod}
            onChange={(e) => setCod(e.target.value)}
            className="w-full border-0 bg-transparent px-2 py-2.5 text-sm text-white placeholder:text-white/30 focus:ring-0"
          />
        </div>
      </div>

      <dl className="mt-8 space-y-2 border-t border-white/10 pt-6 font-mono text-sm" aria-live="polite">
        <div className="flex justify-between text-white/70">
          <dt>Delivery</dt>
          <dd>{formatMk(delivery)}</dd>
        </div>
        {collection > 0 && (
          <div className="flex justify-between text-white/70">
            <dt>Collection fee</dt>
            <dd>{formatMk(collection)}</dd>
          </div>
        )}
        <div className="flex items-baseline justify-between pt-2 text-white">
          <dt className="font-sans font-semibold">You pay</dt>
          <dd className="font-display text-3xl font-black text-tape">
            {formatMk(total)}
          </dd>
        </div>
      </dl>
      <p className="mt-4 text-xs leading-5 text-white/50">
        An estimate. The exact price shows before you confirm each booking.
      </p>
    </div>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Our prices are on the page."
          lead="You pay per delivery, at the rates below. No sign-up fee, no monthly fee, no contract. Whether you charge your customer for delivery is up to you."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <SpeedCard speed="express" />
          <SpeedCard speed="standard" />
          <Estimator />
        </div>

        <div className="mt-6 overflow-hidden rounded-lg border border-line bg-white">
          <table className="w-full text-left text-sm">
            <caption className="border-b border-line px-6 py-4 text-left font-display text-base font-extrabold text-ink">
              Extras, only when they apply
            </caption>
            <tbody className="divide-y divide-line">
              {EXTRAS.map((extra) => (
                <tr key={extra.label}>
                  <th scope="row" className="px-6 py-3 font-medium text-ink/80">
                    {extra.label}
                  </th>
                  <td className="px-6 py-3 text-right font-mono text-xs text-ink sm:text-sm">
                    {extra.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                'relative flex flex-col rounded-lg border p-8',
                plan.featured
                  ? 'border-ink bg-ink text-white'
                  : 'border-line bg-white text-ink'
              )}
            >
              <p
                className={clsx(
                  'font-mono text-[11px] uppercase tracking-widest',
                  plan.featured ? 'text-tape' : 'text-ink/50'
                )}
              >
                {plan.billing}
              </p>
              <h3 className="mt-3 font-display text-2xl font-black">{plan.name}</h3>
              <p className={clsx('mt-1 text-sm', plan.featured ? 'text-white/60' : 'text-ink/60')}>
                {plan.tagline}
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <CheckIcon
                      className={clsx(
                        'mt-0.5 h-4 w-4 shrink-0',
                        plan.featured ? 'text-tape' : 'text-signal'
                      )}
                    />
                    {p}
                  </li>
                ))}
              </ul>
              <CtaLink
                href="#get-started"
                variant={plan.featured ? 'tape' : 'outline'}
                className="mt-10"
              >
                {plan.name === 'Pay as you go' ? 'Get started' : 'Talk to us'}
              </CtaLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
