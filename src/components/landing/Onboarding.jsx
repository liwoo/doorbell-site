import { SectionHeading } from './SectionHeading'
import { POLICIES } from './terms'

const TRACKS = [
  {
    name: 'Pay as you go',
    for: 'Restaurants, shops, pharmacies and online sellers',
    outcome: `Sending within ${POLICIES.goLive} of verification`,
    steps: [
      {
        title: 'Tell us about your business',
        body: 'Fill in the form below. It takes two minutes, and we call you back to set up your account.',
      },
      {
        title: 'Verify your account',
        body: 'Your national ID or business registration, a phone number and your pickup address. You don’t need a registered company.',
      },
      {
        title: 'Top up your balance',
        body: `Add credit with ${POLICIES.topUp}. Each delivery is deducted at the published rate.`,
      },
      {
        title: 'Book your first delivery',
        body: 'From the portal, or share a checkout link with a customer and let them book it.',
      },
    ],
  },
  {
    name: 'Business account',
    for: 'Chains, couriers, e-commerce and corporates',
    outcome: 'Live after a one-week pilot',
    steps: [
      {
        title: 'Planning call',
        body: 'We go through your volumes, delivery areas, products and any handling rules, like ID checks for medicine.',
      },
      {
        title: 'Rate card and agreement',
        body: 'Volume rates, service levels, monthly invoicing terms and cover limits, in writing.',
      },
      {
        title: 'Set-up and training',
        body: 'Team logins, API keys or a CSV template, seal bags and labels delivered, and your staff shown the handover routine.',
      },
      {
        title: 'Pilot week, then live',
        body: 'We run your deliveries with a daily report on timing and failed attempts, fix what needs fixing, then go live.',
      },
    ],
  },
]

export function Onboarding() {
  return (
    <section id="onboarding" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Getting started"
          title="Two ways to start. Both take days, not months."
          lead="Start on pay as you go and move to a business account once your volume grows. Your history, customers and settings come with you."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {TRACKS.map((track) => (
            <article
              key={track.name}
              className="flex flex-col rounded-lg border border-line bg-paper/50"
            >
              <header className="border-b border-line p-8">
                <h3 className="font-display text-2xl font-black text-ink">
                  {track.name}
                </h3>
                <p className="mt-1 text-sm text-ink/60">{track.for}</p>
              </header>
              <ol className="flex-1 space-y-6 p-8">
                {track.steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-ink font-mono text-xs font-semibold text-ink">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{step.title}</p>
                      <p className="mt-1 text-sm leading-6 text-ink/70">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <footer className="border-t border-line px-8 py-4">
                <p className="inline-block rounded-sm bg-tape/70 px-2 py-1 font-mono text-xs font-medium text-ink">
                  {track.outcome}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
