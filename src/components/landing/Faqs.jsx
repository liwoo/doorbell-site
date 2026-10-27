import { SectionHeading } from './SectionHeading'
import { CITY, CUTOFF, POLICIES } from './terms'

const FAQS = [
  {
    q: 'Where do you deliver?',
    a: `Across ${CITY} today, with more cities opening in stages. For parcels coming from other cities, your courier or coach service brings them to ${CITY} and we take them from the branch to the door.`,
  },
  {
    q: 'When does Doorbell first contact my customer?',
    a: 'The moment you book. Your customer gets a WhatsApp in your business’s name confirming the delivery time and, if we don’t have their location yet, asking them to share a pin. They hear from us again when the rider sets off, with the rider’s name, a one-hour window and a handover PIN.',
  },
  {
    q: 'We’re a courier. Can you deliver our parcels to the door?',
    a: `Yes. That’s the part we do. Upload the day’s arrivals at your branch, we collect on a fixed run and deliver door to door, with proof per parcel. Parcels at your branch by ${CUTOFF.label} reach the door the same day. Your waybill number stays the reference.`,
  },
  {
    q: 'Do I need a registered company?',
    a: 'No. Pay as you go needs your national ID, a phone number and a pickup address. A business account needs your business registration so we can invoice you monthly.',
  },
  {
    q: 'How do I pay?',
    a: `On pay as you go, you top up a balance with ${POLICIES.topUp}, and each delivery is deducted at the published rate. Business accounts get one invoice a month with every delivery itemised.`,
  },
  {
    q: 'Who pays for delivery, me or my customer?',
    a: 'We always bill you. You decide whether to absorb the fee, add it to the order, or offer free delivery above an order value. Doorbell Checkout can charge your customer the delivery fee for you.',
  },
  {
    q: 'When do I get the cash you collect?',
    a: `The ${POLICIES.payout}, to ${POLICIES.payoutChannels}, with a statement listing every order. The collection fee is 2% of the amount, with a minimum of MK 300.`,
  },
  {
    q: 'What if my customer isn’t home?',
    a: `The rider calls and waits ${POLICIES.freeWaitMinutes} minutes. If nobody answers, we record the attempt with a photo and location and try again on the next run for free. After that we hold the parcel for ${POLICIES.heldDays} days, then return it to you at half the delivery fee.`,
  },
  {
    q: 'What if a parcel is damaged or goes missing?',
    a: `Every parcel is covered up to ${POLICIES.cover}. Tell us within ${POLICIES.claimHours} hours. The custody log shows exactly which handover went wrong, so we settle on evidence. Business accounts can agree higher cover.`,
  },
  {
    q: 'Do I need a developer?',
    a: 'No. Most businesses use the Business Portal or Doorbell Checkout. The API is there when you want deliveries booked straight from your own systems.',
  },
]

export function Faqs() {
  return (
    <section id="faqs" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:px-8">
        <SectionHeading
          eyebrow="Questions"
          title="What businesses ask before they switch."
        />
        <div className="divide-y divide-line border-y border-line">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-ink focus:outline-none focus-visible:text-primary [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="font-mono text-xl font-normal text-ink/40 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-7 text-ink/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
