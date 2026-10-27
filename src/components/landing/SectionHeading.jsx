import clsx from 'clsx'

export function Eyebrow({ children, className, dark = false }) {
  return (
    <p
      className={clsx(
        'font-mono text-xs font-medium uppercase tracking-[0.18em]',
        dark ? 'text-tape' : 'text-primary',
        className
      )}
    >
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  dark = false,
  center = false,
  className,
}) {
  return (
    <div
      className={clsx(
        'max-w-3xl',
        center && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={clsx(
          'mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl',
          dark ? 'text-white' : 'text-ink'
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={clsx(
            'mt-6 text-base leading-7 sm:text-lg sm:leading-8',
            dark ? 'text-white/70' : 'text-ink/70'
          )}
        >
          {lead}
        </p>
      )}
    </div>
  )
}

export function CtaLink({ href, children, variant = 'tape', className }) {
  return (
    <a
      href={href}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        variant === 'tape' &&
          'bg-tape text-ink hover:bg-white focus-visible:ring-tape focus-visible:ring-offset-ink',
        variant === 'ghost' &&
          'border border-white/25 text-white hover:border-white hover:bg-white/5 focus-visible:ring-white focus-visible:ring-offset-ink',
        variant === 'ink' &&
          'bg-ink text-white hover:bg-primary focus-visible:ring-ink focus-visible:ring-offset-white',
        variant === 'outline' &&
          'border border-ink/20 text-ink hover:border-ink focus-visible:ring-ink focus-visible:ring-offset-white',
        className
      )}
    >
      {children}
    </a>
  )
}

export function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 8h10m0 0L9 4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="m3.5 8.5 3 3 6-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
