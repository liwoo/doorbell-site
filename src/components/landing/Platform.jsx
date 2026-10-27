import clsx from 'clsx'
import { SectionHeading } from './SectionHeading'

function PortalMock() {
  const rows = [
    ['DB-204817', 'Area 47', 'Delivered', 'text-signal'],
    ['DB-204818', 'Kanengo', 'On the way', 'text-primary'],
    ['DB-204819', 'Area 10', 'Rider assigned', 'text-ink/60'],
  ]
  return (
    <div className="rounded-md border border-line bg-white text-[11px] shadow-sm">
      <div className="flex items-center justify-between border-b border-line px-3 py-2">
        <span className="font-semibold text-ink">Today · 46 deliveries</span>
        <span className="rounded-sm bg-ink px-2 py-0.5 font-semibold text-white">
          + Book
        </span>
      </div>
      {rows.map(([id, area, status, color]) => (
        <div
          key={id}
          className="grid grid-cols-3 gap-2 border-b border-line px-3 py-2 font-mono last:border-0"
        >
          <span className="text-ink">{id}</span>
          <span className="text-ink/60">{area}</span>
          <span className={clsx('text-right font-medium', color)}>{status}</span>
        </div>
      ))}
    </div>
  )
}

function CheckoutMock() {
  return (
    <div className="mx-auto w-44 rounded-[1.25rem] border-4 border-ink bg-white p-3 text-[11px] shadow-sm">
      <p className="font-semibold text-ink">Mama&apos;s Kitchen</p>
      <div className="mt-2 h-14 rounded-sm bg-[radial-gradient(circle_at_60%_45%,#2E5BFF_0_4px,transparent_5px),linear-gradient(#E7ECF7,#E7ECF7)]" />
      <p className="mt-2 text-ink/60">Drop a pin · Area 43</p>
      <div className="mt-2 flex justify-between font-mono text-ink">
        <span>Delivery</span>
        <span>MWK 2,500</span>
      </div>
      <div className="mt-2 rounded-sm bg-tape py-1.5 text-center font-semibold text-ink">
        Pay with Airtel Money
      </div>
    </div>
  )
}

function ApiMock() {
  return (
    <pre className="overflow-hidden rounded-md bg-ink p-3 font-mono text-[11px] leading-5 text-white/80 shadow-sm">
      <span className="text-tape">POST</span> /v1/deliveries{'\n'}
      <span className="text-white/40">{'{'}</span> &quot;service&quot;:{' '}
      <span className="text-signal">&quot;same_day&quot;</span>,{'\n'}
      {'  '}&quot;handover&quot;: {'{'} &quot;pin&quot;:{' '}
      <span className="text-primary-light">true</span> {'}'}{' '}
      <span className="text-white/40">{'}'}</span>
      {'\n'}
      <span className="text-white/40">→ 201</span>{' '}
      <span className="text-signal">rider_assigned</span>
    </pre>
  )
}

function TrackingMock() {
  return (
    <div className="space-y-2 text-[11px]">
      <div className="max-w-[85%] rounded-lg rounded-bl-none bg-white p-3 text-ink shadow-sm">
        Your order from <b>Kaya Pharmacy</b> is on its way with Tiwonge.
        Track it: doorbell.mw/t/204817
      </div>
      <div className="max-w-[85%] rounded-lg rounded-bl-none bg-white p-3 text-ink shadow-sm">
        Your handover PIN is <b className="font-mono">4471</b>. Only share it
        when the parcel is in your hands.
      </div>
    </div>
  )
}

const PRODUCTS = [
  {
    name: 'Business Portal',
    for: 'For operations teams',
    body: 'For businesses with no tech. Book one delivery or upload a day’s worth from a spreadsheet. See every rider, every parcel and every invoice in one place.',
    mock: PortalMock,
  },
  {
    name: 'Doorbell Checkout',
    for: 'For websites, WhatsApp and social',
    body: 'A hosted delivery page. Send customers to it from your website’s checkout, or share it as a link in a chat. They drop a pin, pick a time and pay. The delivery is booked before they leave the page.',
    mock: CheckoutMock,
    early: true,
  },
  {
    name: 'Delivery API',
    for: 'For developers',
    body: 'Quotes, bookings, labels and cancellations over REST, with webhooks for every status change. Sandbox keys the day you sign up.',
    mock: ApiMock,
    early: true,
  },
  {
    name: 'Customer tracking',
    for: 'For the people you deliver to',
    body: 'SMS and WhatsApp updates in your name, a live tracking page, and a handover PIN so parcels only go to the right person.',
    mock: TrackingMock,
  },
]

export function Platform() {
  return (
    <section id="platform" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The platform"
          title="Three ways to book us. No code needed for two of them."
          lead="Start in the portal today and add Checkout or the API later. Whichever you use, your customer gets the same messages and you get the same proof."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="flex flex-col overflow-hidden rounded-lg border border-line bg-white"
            >
              <div className="flex h-60 items-center justify-center border-b border-line bg-[linear-gradient(135deg,#E9EEF9,#F7F9FD)] p-8">
                <div className="w-full max-w-xs">
                  <p.mock />
                </div>
              </div>
              <div className="flex-1 p-8">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-xl font-extrabold text-ink">
                    {p.name}
                  </h3>
                  {p.early && (
                    <span className="rounded-sm border border-primary/30 px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-primary">
                      Early access
                    </span>
                  )}
                </div>
                <p className="mt-1 font-mono text-xs text-ink/50">{p.for}</p>
                <p className="mt-4 leading-7 text-ink/70">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
