import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { CheckIcon } from './SectionHeading'
import { SAME_DAY_WINDOW, SPEEDS, formatMk } from './terms'

const PATHS = [
  { id: 'checkout', label: 'Website checkout', hint: 'Doorbell Checkout takes over' },
  { id: 'api', label: 'API integration', hint: 'Your system books us' },
  { id: 'portal', label: 'No tech', hint: 'Book in our portal' },
]

const ACTORS = {
  customer: { label: 'Your customer', dot: 'bg-tape', text: 'text-tape' },
  you: { label: 'You', dot: 'bg-white', text: 'text-white' },
  doorbell: { label: 'Doorbell', dot: 'bg-primary-light', text: 'text-primary-light' },
}

// One worked example per speed, so every clock on the page tells the same story.
const EXAMPLE = {
  standard: {
    times: ['09:40', '09:42', '09:43', '12:30', '13:50', '14:12', '14:13'],
    booked: `today, ${SAME_DAY_WINDOW}`,
    riderWindow: '14:00–15:00',
    fee: SPEEDS.standard.flat,
    elapsed: '4 h 32 min',
  },
  express: {
    times: ['09:40', '09:41', '09:42', '09:58', '10:01', '10:39', '10:40'],
    booked: 'within the next 90 minutes',
    riderWindow: '10:30–10:45',
    fee: SPEEDS.express.base + 3 * SPEEDS.express.perKm,
    elapsed: '59 min',
  },
}

const ORDER_VALUE = 45000
const PAYOUT = ORDER_VALUE - ORDER_VALUE * 0.02

const STAGES = [
  {
    id: 'order',
    short: 'Order',
    actor: 'customer',
    title: 'Your customer orders and wants it at home',
    body: {
      checkout:
        'They fill their cart on your website and choose “Deliver to my door” at checkout.',
      api: 'They order in your app, online store or till system, with home delivery.',
      portal:
        'They order by phone, WhatsApp or Instagram, or a parcel for them arrives at your courier branch.',
    },
  },
  {
    id: 'book',
    short: 'Book',
    actor: { checkout: 'doorbell', api: 'you', portal: 'you' },
    title: {
      checkout: 'Doorbell Checkout takes over the delivery step',
      api: 'Your system books the delivery for you',
      portal: 'You book it in the Business Portal',
    },
    body: {
      checkout:
        'Your checkout hands your customer to our hosted page. They drop a pin, pick a delivery time and pay the delivery fee. The booking is made automatically and they land back on your site.',
      api: 'Your system sends the drop-off coordinates, gets back a zone and a price, and confirms. Nobody at your business has to touch it.',
      portal:
        'Type in the customer’s name, phone number and area, or upload the day’s list as a spreadsheet. Couriers upload each morning’s arrivals in one go.',
    },
  },
  {
    id: 'notify',
    short: 'We message them',
    actor: 'doorbell',
    title: 'We reach your customer, in your name',
    body: {
      checkout:
        'This is our first contact with your customer. We already have their pin from checkout, so a WhatsApp in your business’s name just confirms when it will arrive.',
      api: 'This is our first contact with your customer. Within a minute of booking, a WhatsApp in your business’s name confirms the delivery time and asks them to share their location.',
      portal:
        'This is our first contact with your customer. Within a minute of booking, a WhatsApp in your business’s name confirms the delivery time and asks them to share their location.',
    },
    note: 'Addresses here are landmarks, not postcodes. A location pin is how the rider finds the right door first time.',
  },
  {
    id: 'collect',
    short: 'Collect',
    actor: 'doorbell',
    title: 'A rider collects from you',
    body: 'On the collection run (Express: straight away), a named rider comes to your counter, warehouse or branch, seals the parcel in a numbered bag and scans it.',
  },
  {
    id: 'enroute',
    short: 'On the way',
    actor: 'doorbell',
    title: 'On the way, with a handover PIN',
    body: 'As the rider leaves, your customer gets the rider’s name, a one-hour window, a live tracking link and a PIN. They can reply to change the time or name someone else to receive it.',
  },
  {
    id: 'door',
    short: 'At the door',
    actor: 'customer',
    title: 'Handed over at the door',
    body: 'The rider hands it over only when the PIN matches. A photo and the location are recorded, and payment is collected if you asked us to.',
  },
  {
    id: 'proof',
    short: 'Proof to you',
    actor: 'you',
    title: 'Proof and payment come back to you',
    body: {
      checkout:
        'Proof of delivery appears in your portal straight away. Anything we collected is paid out the next working day.',
      api: 'A signed webhook tells your system it’s delivered, with the PIN match, photo and location. Anything we collected is paid out the next working day.',
      portal:
        'Proof of delivery appears in your portal straight away. Anything we collected is paid out the next working day.',
    },
  },
]

const pick = (value, path) =>
  typeof value === 'string' || value === undefined ? value : value[path]

const pct = (i) => ((i + 0.5) / STAGES.length) * 100

/* ---------- Stage visuals ---------- */

function Card({ children, className }) {
  return (
    <div
      className={clsx(
        'w-full max-w-sm rounded-lg bg-white text-ink shadow-2xl shadow-black/30',
        className
      )}
    >
      {children}
    </div>
  )
}

function UrlBar({ url }) {
  return (
    <div className="flex items-center gap-2 border-b border-line px-3 py-2">
      <span className="flex gap-1">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
      </span>
      <span className="flex-1 truncate rounded-sm bg-paper px-2 py-0.5 font-mono text-[11px] text-ink/60">
        {url}
      </span>
    </div>
  )
}

function Chat({ from = 'Kaya Pharmacy', children }) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-[#0B141A] shadow-2xl shadow-black/30 ring-1 ring-white/10">
      <div className="flex items-center gap-3 bg-[#1F2C33] px-4 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-tape font-display text-xs font-black text-ink">
          {from[0]}
        </span>
        <div>
          <p className="text-sm font-semibold text-white">{from}</p>
          <p className="text-[11px] text-white/50">WhatsApp</p>
        </div>
      </div>
      <div className="space-y-2 p-3 text-[13px] leading-5 text-white/90">
        {children}
      </div>
    </div>
  )
}

function Bubble({ mine, children }) {
  return (
    <div
      className={clsx(
        'max-w-[88%] rounded-lg p-3',
        mine
          ? 'ml-auto rounded-tr-none bg-[#005C4B]'
          : 'rounded-tl-none bg-[#1F2C33]'
      )}
    >
      {children}
    </div>
  )
}

function QuickReply({ children }) {
  return (
    <span className="block rounded-lg bg-[#1F2C33] py-2 text-center text-[12px] font-medium text-[#53BDEB]">
      {children}
    </span>
  )
}

function Row({ label, value, strong }) {
  return (
    <div className="flex justify-between gap-4 py-1.5 text-xs">
      <span className="text-ink/50">{label}</span>
      <span className={clsx('text-right', strong ? 'font-semibold' : 'font-mono')}>
        {value}
      </span>
    </div>
  )
}

function OrderVisual({ path }) {
  if (path === 'checkout')
    return (
      <Card>
        <UrlBar url="kayapharmacy.mw/checkout" />
        <div className="p-5">
          <p className="text-sm font-bold">Order #1042 · 3 items</p>
          <p className="font-mono text-xs text-ink/60">{formatMk(ORDER_VALUE)}</p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink/50">
            How would you like it?
          </p>
          <div className="mt-2 space-y-2 text-sm">
            <div className="rounded-md border border-line px-3 py-2 text-ink/50">
              Collect in store
            </div>
            <div className="flex items-center justify-between rounded-md border-2 border-primary px-3 py-2 font-semibold">
              Deliver to my door
              <span className="font-mono text-[10px] font-medium text-primary">
                by Doorbell
              </span>
            </div>
          </div>
          <div className="mt-5 rounded-md bg-ink py-2 text-center text-sm font-semibold text-white">
            Continue to delivery
          </div>
        </div>
      </Card>
    )
  if (path === 'api')
    return (
      <Card>
        <UrlBar url="kaya-pos · orders" />
        <div className="p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold">New order #1042</p>
            <span className="rounded-sm bg-signal/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-signal">
              PAID
            </span>
          </div>
          <div className="mt-4 divide-y divide-line">
            <Row label="Customer" value="Chikondi Banda" strong />
            <Row label="Fulfilment" value="Home delivery" strong />
            <Row label="Drop-off" value="-13.9626, 33.7741" />
            <Row label="Total" value={formatMk(ORDER_VALUE)} />
          </div>
          <p className="mt-4 flex items-center gap-2 font-mono text-[11px] text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Sending to Doorbell…
          </p>
        </div>
      </Card>
    )
  return (
    <Chat from="Chikondi Banda">
      <Bubble>
        Hi, I&apos;d like the order we discussed. Can you deliver to Area 47
        today? I&apos;ll pay on delivery.
      </Bubble>
      <Bubble mine>Yes! Sending it with Doorbell, you&apos;ll get a message from us shortly.</Bubble>
    </Chat>
  )
}

function BookVisual({ path, ex }) {
  if (path === 'checkout')
    return (
      <Card>
        <UrlBar url="checkout.doorbell.mw/s/kaya-1042" />
        <div className="p-5">
          <p className="text-xs text-ink/50">Kaya Pharmacy · Delivery by Doorbell</p>
          <div className="relative mt-3 h-24 overflow-hidden rounded-md bg-[#E7ECF7]">
            <svg viewBox="0 0 300 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path d="M0 70 C80 60 120 20 300 30" stroke="#fff" strokeWidth="6" fill="none" />
              <path d="M140 0 L160 100" stroke="#fff" strokeWidth="4" />
            </svg>
            <svg viewBox="0 0 24 24" className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-full text-primary" aria-hidden="true">
              <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
            </svg>
          </div>
          <Row label="Drop-off" value="Area 47/3 · zone LL-A47" />
          <div className="mt-2 grid grid-cols-2 gap-2 text-center text-xs font-semibold">
            <span className="rounded-md border-2 border-primary py-1.5">{ex === EXAMPLE.express ? 'Express' : `Today ${SAME_DAY_WINDOW}`}</span>
            <span className="rounded-md border border-line py-1.5 text-ink/50">{ex === EXAMPLE.express ? `Today ${SAME_DAY_WINDOW}` : 'Express'}</span>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-line pt-3 text-sm">
            <span>Delivery</span>
            <span className="font-mono font-semibold">{formatMk(ex.fee)}</span>
          </div>
          <div className="mt-3 rounded-md bg-tape py-2 text-center text-sm font-semibold">
            Pay with Airtel Money
          </div>
        </div>
      </Card>
    )
  if (path === 'api')
    return (
      <pre className="w-full max-w-sm overflow-hidden rounded-lg bg-[#060D24] p-4 font-mono text-[11px] leading-5 text-white/80 shadow-2xl shadow-black/30 ring-1 ring-white/10">
        <span className="text-tape">POST</span> /v1/quotes{'\n'}
        <span className="text-white/40">{'{'} &quot;pickup&quot;: {'{'} &quot;location_id&quot;: &quot;loc_kaya_area3&quot; {'}'},{'\n'}
        {'  '}&quot;dropoff&quot;: {'{'} &quot;lat&quot;: -13.9626, &quot;lng&quot;: 33.7741 {'}'} {'}'}</span>
        {'\n'}
        <span className="text-signal">200</span> zone_id <span className="text-white">&quot;LL-A47&quot;</span> · price_mwk{' '}
        <span className="text-white">{ex.fee}</span>
        {'\n\n'}
        <span className="text-tape">POST</span> /v1/deliveries{'\n'}
        <span className="text-white/40">{'{'} &quot;quote_id&quot;: &quot;qt_8f2c&quot;,{'\n'}
        {'  '}&quot;reference&quot;: &quot;1042&quot;,{'\n'}
        {'  '}&quot;handover&quot;: {'{'} &quot;pin&quot;: true {'}'} {'}'}</span>
        {'\n'}
        <span className="text-signal">201</span> status <span className="text-tape">&quot;booked&quot;</span>
      </pre>
    )
  return (
    <Card>
      <UrlBar url="portal.doorbell.mw/new" />
      <div className="space-y-2 p-5 text-xs">
        {[
          ['Recipient', 'Chikondi Banda'],
          ['Phone', '+265 99 123 4567'],
          ['Area or landmark', 'Area 47/3, near the school'],
          ['Collect on delivery', formatMk(ORDER_VALUE)],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="text-ink/50">{label}</p>
            <p className="mt-0.5 rounded-sm border border-line px-2 py-1.5 text-sm">{value}</p>
          </div>
        ))}
        <div className="flex items-center justify-between pt-2">
          <span className="font-mono text-[11px] text-ink/50">or upload a spreadsheet</span>
          <span className="rounded-md bg-ink px-3 py-1.5 text-sm font-semibold text-white">
            Book · {formatMk(ex.fee)}
          </span>
        </div>
      </div>
    </Card>
  )
}

function NotifyVisual({ path, ex }) {
  return (
    <Chat>
      <Bubble>
        Hi Chikondi, your Kaya Pharmacy order is booked for delivery{' '}
        <b>{ex.booked}</b>.
        {path !== 'checkout' && ' Tap below so our rider can find you.'}
      </Bubble>
      {path === 'checkout' ? (
        <Bubble>
          We have your location from checkout. We&apos;ll send your rider&apos;s
          details when they set off.
        </Bubble>
      ) : (
        <>
          <QuickReply>Share my location</QuickReply>
          <Bubble mine>
            <span className="block h-14 w-44 rounded bg-[radial-gradient(circle_at_50%_50%,#E5484D_0_5px,transparent_6px),linear-gradient(#2A3942,#2A3942)]" />
            <span className="mt-1 block text-[11px] text-white/70">Location · Area 47/3</span>
          </Bubble>
        </>
      )}
    </Chat>
  )
}

function CollectVisual({ ex }) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
          Rider app · collection
        </p>
        <span className="font-mono text-xs">{ex.times[3]}</span>
      </div>
      <div className="mt-4 flex items-center gap-4 rounded-md bg-paper p-4">
        <svg viewBox="0 0 60 30" className="h-10 w-20 text-ink" aria-hidden="true">
          {[2, 5, 7, 11, 13, 17, 20, 22, 26, 29, 33, 35, 39, 42, 44, 48, 51, 55].map((x, i) => (
            <rect key={x} x={x} width={i % 3 === 0 ? 2 : 1} height="30" fill="currentColor" />
          ))}
        </svg>
        <div>
          <p className="text-sm font-bold">Seal A-44871</p>
          <p className="text-xs text-ink/60">Scanned and photographed</p>
        </div>
      </div>
      <div className="mt-3 divide-y divide-line">
        <Row label="Rider" value="Tiwonge M. · DB-114" strong />
        <Row label="Collected from" value="Kaya Pharmacy, Area 3" strong />
        <Row label="Trip" value={ex === EXAMPLE.express ? 'Direct, Express' : 'Afternoon run · 12 parcels'} />
      </div>
    </Card>
  )
}

function EnrouteVisual({ ex }) {
  return (
    <Chat>
      <Bubble>
        Tiwonge is on the way with your order. Arriving <b>{ex.riderWindow}</b>.
        <br />
        <span className="text-[#53BDEB]">doorbell.mw/t/204817</span>
      </Bubble>
      <Bubble>
        Your handover PIN is{' '}
        <b className="font-mono tracking-wider text-tape">4471</b>. Only share it
        when the parcel is in your hands.
      </Bubble>
      <div className="grid gap-1.5">
        <QuickReply>Change the time</QuickReply>
        <QuickReply>Someone else will receive it</QuickReply>
      </div>
    </Chat>
  )
}

function DoorVisual({ ex }) {
  return (
    <Card className="p-5">
      <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
        Rider app · handover
      </p>
      <p className="mt-3 text-sm font-semibold">Customer&apos;s PIN</p>
      <div className="mt-2 grid grid-cols-4 gap-2">
        {'4471'.split('').map((d, i) => (
          <span
            key={i}
            className="flex h-11 items-center justify-center rounded-md border-2 border-signal font-mono text-lg font-semibold"
          >
            {d}
          </span>
        ))}
      </div>
      <ul className="mt-4 space-y-1.5 text-sm">
        {[
          'PIN matched',
          'Photo taken',
          'Location -13.9626, 33.7741',
          `${formatMk(ORDER_VALUE)} collected · Airtel Money`,
        ].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-signal" />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-md bg-signal/10 px-3 py-2 text-center font-mono text-xs font-semibold text-signal">
        Delivered {ex.times[5]} · same day
      </p>
    </Card>
  )
}

function ProofVisual({ path, ex }) {
  if (path === 'api')
    return (
      <pre className="w-full max-w-sm overflow-hidden rounded-lg bg-[#060D24] p-4 font-mono text-[11px] leading-5 text-white/80 shadow-2xl shadow-black/30 ring-1 ring-white/10">
        <span className="text-white/40">webhook →</span> your-system.mw/doorbell{'\n'}
        {'{'}{'\n'}
        {'  '}&quot;type&quot;: <span className="text-signal">&quot;delivery.delivered&quot;</span>,{'\n'}
        {'  '}&quot;delivery_id&quot;: &quot;dlv_204817&quot;,{'\n'}
        {'  '}&quot;reference&quot;: &quot;1042&quot;,{'\n'}
        {'  '}&quot;delivered_at&quot;: &quot;2026-10-27T{ex.times[5]}:00+02:00&quot;,{'\n'}
        {'  '}&quot;proof&quot;: {'{'} &quot;pin_matched&quot;: <span className="text-primary-light">true</span>,{'\n'}
        {'    '}&quot;photo_url&quot;: &quot;…/pod/204817.jpg&quot; {'}'},{'\n'}
        {'  '}&quot;collection&quot;: {'{'} &quot;amount_mwk&quot;: {ORDER_VALUE} {'}'}{'\n'}
        {'}'}
      </pre>
    )
  return (
    <Card>
      <UrlBar url="portal.doorbell.mw/deliveries" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <p className="font-mono text-sm font-semibold">DB-204817</p>
          <span className="rounded-sm bg-signal/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-signal">
            DELIVERED {ex.times[5]}
          </span>
        </div>
        <div className="mt-3 divide-y divide-line">
          <Row label="Proof" value="PIN · photo · location" />
          <Row label="Collected" value={formatMk(ORDER_VALUE)} />
          <Row label="Payout tomorrow" value={formatMk(PAYOUT)} strong />
        </div>
      </div>
    </Card>
  )
}

const VISUALS = {
  order: OrderVisual,
  book: BookVisual,
  notify: NotifyVisual,
  collect: CollectVisual,
  enroute: EnrouteVisual,
  door: DoorVisual,
  proof: ProofVisual,
}

/* ---------- Journey ---------- */

function Segmented({ options, value, onChange, label }) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          role="radio"
          aria-checked={value === o.id}
          onClick={() => onChange(o.id)}
          className={clsx(
            'rounded-md border px-3 py-2 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-tape',
            value === o.id
              ? 'border-tape bg-tape text-ink'
              : 'border-white/15 text-white/70 hover:border-white/40 hover:text-white'
          )}
        >
          <span className="block text-sm font-semibold">{o.label}</span>
          {o.hint && (
            <span
              className={clsx(
                'block text-[11px]',
                value === o.id ? 'text-ink/70' : 'text-white/40'
              )}
            >
              {o.hint}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

export function Journey() {
  const [path, setPath] = useState('checkout')
  const [speed, setSpeed] = useState('standard')
  const [stage, setStage] = useState(0)
  const [playing, setPlaying] = useState(false)
  const rootRef = useRef(null)
  const startedRef = useRef(false)

  // Start playing the first time the journey scrolls into view.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          setPlaying(true)
        }
      },
      { threshold: 0.35 }
    )
    observer.observe(rootRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!playing) return
    const id = setTimeout(
      () => setStage((s) => (s + 1) % STAGES.length),
      stage === STAGES.length - 1 ? 5500 : 4200
    )
    return () => clearTimeout(id)
  }, [playing, stage])

  const go = (i) => {
    setPlaying(false)
    setStage(i)
  }

  const ex = EXAMPLE[speed]
  const current = STAGES[stage]
  const actorOf = (s) => ACTORS[pick(s.actor, path)]
  const actor = actorOf(current)
  // With Doorbell Checkout, our hosted page does the booking, so our part starts a step earlier.
  const legStart = path === 'checkout' ? 1 : 2
  const Visual = VISUALS[current.id]

  return (
    <div ref={rootRef} className="mt-14">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">
            How you take orders
          </p>
          <div className="mt-3">
            <Segmented
              label="How you take orders"
              options={PATHS}
              value={path}
              onChange={(p) => {
                setPath(p)
                go(1)
              }}
            />
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">
            Speed
          </p>
          <div className="mt-3">
            <Segmented
              label="Delivery speed"
              options={[
                { id: 'standard', label: 'Same day' },
                { id: 'express', label: 'Express' },
              ]}
              value={speed}
              onChange={setSpeed}
            />
          </div>
        </div>
      </div>

      {/* Route */}
      <div className="relative mt-14">
        <div
          aria-hidden="true"
          className="absolute -top-7 hidden rounded-t-md border-x border-t border-primary-light/40 transition-all duration-500 lg:block"
          style={{ left: `${pct(legStart)}%`, right: `${100 - pct(5)}%`, height: '3.25rem' }}
        >
          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-ink px-2 font-mono text-[10px] uppercase tracking-widest text-primary-light">
            Doorbell&apos;s part
          </span>
        </div>
        <div aria-hidden="true" className="absolute left-0 right-0 top-[11px] h-0.5 bg-white/10" style={{ left: `${pct(0)}%`, right: `${100 - pct(STAGES.length - 1)}%` }} />
        <div
          aria-hidden="true"
          className="absolute top-[11px] h-0.5 bg-tape transition-all duration-700 ease-out"
          style={{ left: `${pct(0)}%`, width: `${pct(stage) - pct(0)}%` }}
        />
        <div
          aria-hidden="true"
          className="absolute top-0 z-10 -ml-3 flex h-6 w-6 items-center justify-center rounded-md bg-tape shadow-lg shadow-tape/30 transition-all duration-700 ease-out"
          style={{ left: `${pct(stage)}%` }}
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-ink" aria-hidden="true">
            <path d="M2 5.5 8 2.5l6 3v5l-6 3-6-3v-5Zm0 0 6 3m0 0 6-3m-6 3v5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
          </svg>
        </div>
        <ol className="relative grid grid-cols-7">
          {STAGES.map((s, i) => (
            <li key={s.id} className="flex flex-col items-center text-center">
              <button
                type="button"
                onClick={() => go(i)}
                aria-current={i === stage ? 'step' : undefined}
                aria-label={`Step ${i + 1}: ${s.short}`}
                className="group flex flex-col items-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-tape"
              >
                <span
                  className={clsx(
                    'h-6 w-6 rounded-full border-2 transition-colors',
                    i <= stage ? 'border-tape' : 'border-white/20',
                    'bg-ink'
                  )}
                >
                  <span className={clsx('m-[5px] block h-2.5 w-2.5 rounded-full', actorOf(s).dot, i > stage && 'opacity-30')} />
                </span>
                <span className="mt-3 font-mono text-[11px] text-white/50">
                  {ex.times[i]}
                </span>
                <span
                  className={clsx(
                    'mt-1 hidden text-xs font-semibold sm:block',
                    i === stage ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                  )}
                >
                  {s.short}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-white/50">
        {Object.values(ACTORS).map((a) => (
          <span key={a.label} className="flex items-center gap-2">
            <span className={clsx('h-2 w-2 rounded-full', a.dot)} />
            {a.label}
          </span>
        ))}
      </div>

      {/* Stage */}
      <div className="mt-10 grid gap-10 rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div key={`${stage}-${path}-text`} className="animate-fade-in">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl font-black tracking-tight text-white">
              {ex.times[stage]}
            </span>
            <span className={clsx('font-mono text-[11px] uppercase tracking-widest', actor.text)}>
              {actor.label}
            </span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            {pick(current.title, path)}
          </h3>
          <p className="mt-4 max-w-lg leading-7 text-white/70">
            {pick(current.body, path)}
          </p>
          {current.note && (
            <p className="mt-4 max-w-lg border-l-2 border-tape pl-4 text-sm leading-6 text-white/60">
              {current.note}
            </p>
          )}
          {current.id === 'door' && (
            <p className="mt-6 inline-block rounded-sm bg-signal/15 px-3 py-1.5 font-mono text-xs text-signal">
              Ordered {ex.times[0]} → in their hands {ex.times[5]}: {ex.elapsed}
            </p>
          )}

          <div className="mt-8 flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(Math.max(0, stage - 1))}
              disabled={stage === 0}
              className="rounded-md border border-white/15 px-3 py-2 text-sm text-white/80 hover:border-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-tape disabled:opacity-30"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => go((stage + 1) % STAGES.length)}
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-ink hover:bg-tape focus:outline-none focus-visible:ring-2 focus-visible:ring-tape"
            >
              {stage === STAGES.length - 1 ? 'Start again' : 'Next step'}
            </button>
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="ml-2 font-mono text-xs text-white/50 underline-offset-4 hover:text-white hover:underline focus:outline-none focus-visible:text-white"
            >
              {playing ? 'Pause' : 'Play'}
            </button>
            <span className="ml-auto font-mono text-xs text-white/40">
              {stage + 1} / {STAGES.length}
            </span>
          </div>
        </div>

        <div
          key={`${stage}-${path}-${speed}-visual`}
          className="flex min-h-[22rem] animate-fade-in items-center justify-center"
        >
          <Visual path={path} ex={ex} />
        </div>
      </div>
    </div>
  )
}
