import * as Tabs from '@radix-ui/react-tabs'
import { ArrowIcon, CtaLink, SectionHeading } from './SectionHeading'

// Field names mirror docs/delivery-api.md. Keep the two in step.
const UNITS = [
  { name: 'Zone', fields: ['zone_id', 'services', 'standard_price_mwk'], what: 'Where we deliver and the price area' },
  { name: 'Location', fields: ['location_id', 'lat', 'lng', 'landmark'], what: 'Your shop, warehouse or branch' },
  { name: 'Recipient', fields: ['name', 'phone', 'language'], what: 'Who we hand over to' },
  { name: 'Drop-off', fields: ['lat', 'lng', 'landmark', 'zone_id'], what: 'Where the door is' },
  { name: 'Parcel', fields: ['size', 'category', 'declared_value_mwk'], what: 'What we carry' },
  { name: 'Handover', fields: ['pin', 'photo', 'id_check'], what: 'The proof the rider must capture' },
  { name: 'Collection', fields: ['amount_mwk', 'methods'], what: 'Cash or mobile money at the door' },
  { name: 'Quote', fields: ['quote_id', 'window', 'price'], what: 'Price and time before you commit' },
  { name: 'Delivery', fields: ['delivery_id', 'status', 'proof'], what: 'The booking, start to finish' },
  { name: 'Checkout session', fields: ['url', 'success_url'], what: 'Hand your checkout to our page' },
  { name: 'Event', fields: ['type', 'data'], what: 'Signed webhooks for every change' },
  { name: 'Payout', fields: ['amount_mwk', 'deliveries'], what: 'Money we collected for you' },
]

const SAMPLES = [
  {
    id: 'quote',
    label: '1 · Quote',
    endpoint: 'POST /v1/quotes',
    code: `{
  "pickup":  { "location_id": "loc_kaya_area3" },
  "dropoff": { "lat": -13.9626, "lng": 33.7741 },
  "service": "standard",
  "parcels": [{ "size": "S" }],
  "collection": { "amount_mwk": 45000 }
}`,
    result: [
      ['200', 'text-signal'],
      ['zone_id', 'text-white/50'],
      ['"LL-A47"', 'text-white'],
      ['· window', 'text-white/50'],
      ['14:00–18:00', 'text-white'],
      ['· total_mwk', 'text-white/50'],
      ['2700', 'text-tape'],
    ],
  },
  {
    id: 'book',
    label: '2 · Book',
    endpoint: 'POST /v1/deliveries',
    code: `{
  "quote_id": "qt_8f2c",
  "reference": "1042",
  "recipient": { "name": "Chikondi Banda", "phone": "+265991234567" },
  "dropoff": { "lat": -13.9626, "lng": 33.7741,
               "landmark": "Blue gate behind the school" },
  "parcels": [{ "size": "S", "category": "medicine",
                "declared_value_mwk": 45000 }],
  "handover": { "pin": true, "photo": true },
  "collection": { "amount_mwk": 45000,
                  "methods": ["cash", "airtel_money", "tnm_mpamba"] },
  "notifications": { "channel": "whatsapp", "sender_name": "Kaya Pharmacy" }
}`,
    result: [
      ['201', 'text-signal'],
      ['delivery_id', 'text-white/50'],
      ['"dlv_204817"', 'text-white'],
      ['· status', 'text-white/50'],
      ['"booked"', 'text-tape'],
    ],
  },
  {
    id: 'checkout',
    label: 'Checkout',
    endpoint: 'POST /v1/checkout/sessions',
    code: `{
  "pickup": { "location_id": "loc_kaya_area3" },
  "reference": "1042",
  "order_value_mwk": 45000,
  "delivery_paid_by": "customer",
  "services": ["standard", "express"],
  "success_url": "https://kayapharmacy.mw/orders/1042?delivery={DELIVERY_ID}",
  "cancel_url": "https://kayapharmacy.mw/checkout"
}`,
    result: [
      ['200', 'text-signal'],
      ['url', 'text-white/50'],
      ['checkout.doorbell.mw/s/cs_31ab', 'text-white'],
      ['→ redirect your customer', 'text-tape'],
    ],
  },
  {
    id: 'webhook',
    label: 'Webhook',
    endpoint: 'POST → your endpoint',
    code: `Doorbell-Signature: t=1793103120,v1=5f2a…

{
  "type": "delivery.delivered",
  "data": {
    "delivery_id": "dlv_204817",
    "reference": "1042",
    "proof": {
      "pin_matched": true,
      "photo_url": "https://files.doorbell.mw/pod/204817.jpg",
      "lat": -13.9626, "lng": 33.7741,
      "delivered_at": "2026-10-27T14:12:00+02:00"
    }
  }
}`,
    result: [
      ['200', 'text-signal'],
      ['acknowledge within 10 s · retried for 24 h', 'text-white/50'],
    ],
  },
]

const EVENTS = [
  'delivery.booked',
  'delivery.location_confirmed',
  'delivery.rider_assigned',
  'delivery.picked_up',
  'delivery.out_for_delivery',
  'delivery.rescheduled',
  'delivery.delivered',
  'delivery.attempt_failed',
  'collection.collected',
  'payout.sent',
]

export function Developers() {
  return (
    <section id="developers" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="For developers"
              title="Quote, book, get proof. Three calls."
              lead="Send coordinates, get back a zone, a price and a delivery window. Confirm, and every status change comes back to you as a signed webhook. Money is whole kwacha, times are Malawi time, phones are +265."
            />
            <div className="mt-10">
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink/50">
                Webhook events
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {EVENTS.map((e) => (
                  <li
                    key={e}
                    className="rounded-sm border border-line bg-paper px-2 py-1 font-mono text-xs text-ink"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10">
              <CtaLink href="#get-started" variant="ink">
                Request sandbox keys <ArrowIcon className="h-4 w-4" />
              </CtaLink>
              <p className="mt-3 font-mono text-xs text-ink/50">
                Early access. Field names may change before v1 is final.
              </p>
            </div>
          </div>

          <Tabs.Root
            defaultValue="quote"
            className="self-start overflow-hidden rounded-lg bg-ink shadow-2xl shadow-ink/20"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-4">
              <Tabs.List aria-label="API examples" className="flex overflow-x-auto scrollbar-hide">
                {SAMPLES.map((s) => (
                  <Tabs.Trigger
                    key={s.id}
                    value={s.id}
                    className="shrink-0 border-b-2 border-transparent px-3 py-3 font-mono text-xs text-white/50 hover:text-white focus:outline-none focus-visible:text-white focus-visible:underline data-[state=active]:border-tape data-[state=active]:text-white"
                  >
                    {s.label}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </div>
            {SAMPLES.map((s) => (
              <Tabs.Content key={s.id} value={s.id} className="focus:outline-none">
                <p className="px-6 pt-5 font-mono text-xs text-tape">{s.endpoint}</p>
                <pre className="overflow-x-auto px-6 pb-6 pt-3 font-mono text-[13px] leading-6 text-white/85">
                  <code>{s.code}</code>
                </pre>
                <div className="flex flex-wrap gap-x-2 border-t border-white/10 bg-white/[0.03] px-6 py-4 font-mono text-xs leading-6">
                  {s.result.map(([text, color], i) => (
                    <span key={i} className={color}>
                      {text}
                    </span>
                  ))}
                </div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>

        <div className="mt-20">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink/50">
            The building blocks
          </p>
          <p className="mt-2 max-w-2xl text-ink/70">
            Every delivery is made of the same units, whether it comes from the
            API, Doorbell Checkout or a spreadsheet upload. Spreadsheet columns
            use the same names, like <code className="font-mono text-sm text-ink">recipient.phone</code>.
          </p>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {UNITS.map((u) => (
              <div key={u.name} className="bg-white p-5">
                <dt className="font-display text-base font-extrabold text-ink">
                  {u.name}
                </dt>
                <dd className="mt-1 text-sm text-ink/60">{u.what}</dd>
                <dd className="mt-3 flex flex-wrap gap-1">
                  {u.fields.map((f) => (
                    <code
                      key={f}
                      className="rounded-sm bg-primary/10 px-1.5 py-0.5 font-mono text-[11px] text-primary-dark"
                    >
                      {f}
                    </code>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
