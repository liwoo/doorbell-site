import { SectionHeading } from './SectionHeading'
import { Journey } from './Journey'
import { POLICIES } from './terms'

const RULES = [
  {
    title: 'Nobody home',
    body: `The rider calls and waits ${POLICIES.freeWaitMinutes} minutes. If your customer can’t be reached, we log the attempt with a photo and location and try again on the next run, free. After that we hold the parcel for ${POLICIES.heldDays} days, then return it to you at half the delivery fee.`,
  },
  {
    title: 'Cash on delivery',
    body: `Riders collect cash, Airtel Money or TNM Mpamba at the door. Every collection shows in your portal, and it is paid to ${POLICIES.payoutChannels} the ${POLICIES.payout}.`,
  },
  {
    title: 'Lost or damaged',
    body: `Every parcel is covered up to ${POLICIES.cover}. Report a problem within ${POLICIES.claimHours} hours. The custody log shows which handover went wrong, so claims are settled on evidence.`,
  },
]

export function DeliveryProcess() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="How it works"
          title="From your counter to their door, the same day."
          lead="Doorbell’s part starts the moment you book and ends when the parcel is in your customer’s hands. We reach your customer twice before the rider arrives: first to confirm the time and pin their location, then with the rider’s name and a handover PIN."
        />

        <Journey />

        <div className="mt-20 grid gap-px overflow-hidden rounded-lg bg-white/10 md:grid-cols-3">
          {RULES.map((rule) => (
            <div key={rule.title} className="bg-ink-soft p-8">
              <h3 className="font-display text-lg font-extrabold text-white">
                {rule.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                {rule.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
