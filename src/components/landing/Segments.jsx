import * as Tabs from '@radix-ui/react-tabs'
import { CheckIcon, SectionHeading } from './SectionHeading'
import { POLICIES } from './terms'

const SEGMENTS = [
  {
    id: 'restaurants',
    tab: 'Restaurants',
    title: 'Hot food out the door, without a rider on payroll.',
    body: 'Riders come when orders do, so you stop paying for quiet afternoons. Take orders on your own WhatsApp or Instagram with a checkout link, and pay a flat fee per drop instead of a cut of every meal.',
    points: [
      'Rider dispatched as soon as you accept the order',
      'Insulated bags on every food run',
      'Your name on the tracking link, not ours',
      'Flat per-delivery pricing, no commission on the order',
    ],
    uses: ['Doorbell Checkout', 'Business Portal', 'API for your POS'],
  },
  {
    id: 'pharmacies',
    tab: 'Pharmacies',
    title: 'Medicines reach the patient, and nobody else.',
    body: 'Prescriptions are sealed at your counter and only released to the person holding the PIN. Every step is logged, so you can show exactly who carried a parcel and who signed for it.',
    points: [
      'PIN or ID check before handover',
      'Tamper-evident sealed bags, numbered',
      'Full custody log for every parcel',
      'Scheduled repeat deliveries for chronic medication',
    ],
    uses: ['Business Portal', 'Scheduled deliveries', 'API'],
  },
  {
    id: 'shops',
    tab: 'Shops & SMEs',
    title: 'Sell on any channel. We get it to the door.',
    body: 'Send a checkout link that prices delivery for the buyer’s location. Choose prepaid or cash on delivery. We collect cash, Airtel Money or TNM Mpamba at the door and pay it out to you.',
    points: [
      'Doorbell Checkout links for WhatsApp, Instagram and Facebook',
      'Cash and mobile money collected on delivery',
      `Collections paid out the ${POLICIES.payout}`,
      'No contract, no minimum volume',
    ],
    uses: ['Doorbell Checkout', 'Business Portal'],
  },
  {
    id: 'couriers',
    tab: 'Couriers & coach parcels',
    title: 'You get it to the city. We take it to the door.',
    body: 'Today your customers come to your branch to collect. With Doorbell, they don’t have to. Upload the morning’s arrivals, we collect from your branch on a fixed run and deliver door to door the same day. Sell doorstep delivery as an add-on on every waybill.',
    points: [
      'Daily collection runs from your branch or depot',
      'Upload the day’s arrivals as a spreadsheet, or send them by API',
      'Your waybill number stays the reference end to end',
      'Proof of delivery returned per parcel, so you can close the waybill',
    ],
    uses: ['Business Portal', 'Spreadsheet upload', 'API & webhooks'],
  },
  {
    id: 'enterprise',
    tab: 'E-commerce & corporates',
    title: 'Delivery that plugs into your stack and your audit.',
    body: 'Book deliveries from your own systems, get status changes as webhooks, and send cards, contracts and documents with signature capture. One invoice a month, with SLA reporting your finance team can check.',
    points: [
      'REST API with sandbox keys from day one',
      'Signature and ID capture for documents and cards',
      'SLA reporting and monthly invoicing',
      'Dedicated riders for high-volume routes',
    ],
    uses: ['API & webhooks', 'Business Portal', 'Dedicated riders'],
  },
]

export function Segments() {
  return (
    <section id="solutions" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who ships with Doorbell"
          title="One network. Set up for what you send."
          lead="A pizza and a prescription need different handling. Pick your business and see how we'd run your deliveries."
        />

        <Tabs.Root defaultValue={SEGMENTS[0].id} className="mt-14">
          <Tabs.List
            aria-label="Choose your type of business"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {SEGMENTS.map((s) => (
              <Tabs.Trigger
                key={s.id}
                value={s.id}
                className="shrink-0 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold text-ink/70 transition hover:border-ink/40 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-primary data-[state=active]:border-ink data-[state=active]:bg-ink data-[state=active]:text-white"
              >
                {s.tab}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {SEGMENTS.map((s) => (
            <Tabs.Content
              key={s.id}
              value={s.id}
              className="mt-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="grid overflow-hidden rounded-lg border border-line bg-white lg:grid-cols-[1.2fr_1fr]">
                <div className="p-8 sm:p-12">
                  <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-6 max-w-xl leading-7 text-ink/70">
                    {s.body}
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-ink/50">
                      You&apos;d use
                    </span>
                    {s.uses.map((u) => (
                      <span
                        key={u}
                        className="rounded-sm bg-primary/10 px-2 py-1 font-mono text-xs font-medium text-primary-dark"
                      >
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="divide-y divide-line border-t border-line bg-paper/60 lg:border-l lg:border-t-0">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 px-8 py-5 text-sm font-medium text-ink sm:px-10"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  )
}
