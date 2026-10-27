// Figures carried over from the consumer era (see /about). Update as B2B volume grows.
const PROOF = [
  { value: '100k+', label: 'deliveries since 2019' },
  { value: '280k km', label: 'ridden across Lilongwe' },
  { value: '7,500+', label: 'people handed a parcel' },
  { value: '4 checks', label: 'seal, scan, PIN and photo on every drop' },
]

export function ProofBar() {
  return (
    <section aria-label="Doorbell in numbers" className="border-b border-line bg-white">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-line px-4 sm:px-6 lg:grid-cols-4 lg:divide-x lg:px-8">
        {PROOF.map((item) => (
          <div key={item.label} className="flex flex-col-reverse py-8 lg:px-8 lg:first:pl-0">
            <dt className="mt-1 text-sm text-ink/60">{item.label}</dt>
            <dd className="font-display text-3xl font-black tracking-tight text-ink">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
