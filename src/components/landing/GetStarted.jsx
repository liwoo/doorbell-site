import { useRef, useState } from 'react'
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3'
import { ArrowIcon, CheckIcon, Eyebrow } from './SectionHeading'

const INDUSTRIES = [
  'Restaurant or café',
  'Pharmacy or health',
  'Shop or online seller',
  'Courier or inter-city carrier',
  'E-commerce or corporate',
  'Something else',
]

const VOLUMES = [
  'Under 50 a month',
  '50–300 a month',
  '300–1,000 a month',
  'Over 1,000 a month',
]

const TRACKS = [
  ['payg', 'Pay as you go', 'Start sending this week'],
  ['business', 'Business account', '300+ deliveries a month'],
]

const inputClass =
  'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2.5 text-sm text-white ring-1 ring-inset ring-white/15 placeholder:text-white/30 focus:ring-2 focus:ring-inset focus:ring-tape'

function Field({ label, htmlFor, optional, children }) {
  return (
    <div>
      <div className="flex justify-between">
        <label htmlFor={htmlFor} className="text-sm font-semibold text-white">
          {label}
        </label>
        {optional && <span className="text-xs text-white/40">Optional</span>}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  )
}

function LeadForm() {
  const formRef = useRef()
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      if (!executeRecaptcha) {
        throw new Error(
          'Spam check has not loaded. Refresh the page and send the form again.'
        )
      }
      const token = await executeRecaptcha('b2b_lead')
      const verify = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      if (!verify.ok) {
        throw new Error(
          'We could not confirm you are not a bot. Send the form again, or email info@doorbell.mw.'
        )
      }

      const data = Object.fromEntries(new FormData(formRef.current))
      const sent = await fetch('/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: { ...data, source: 'b2b-landing' } }),
      })
      if (!sent.ok) {
        throw new Error(
          'Your request did not reach us. Send the form again, or email info@doorbell.mw.'
        )
      }

      formRef.current.reset()
      setStatus('sent')
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-lg border border-white/15 bg-white/5 p-10" role="status">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal text-white">
          <CheckIcon className="h-5 w-5" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-black text-white">
          Request received.
        </h3>
        <p className="mt-3 leading-7 text-white/70">
          Our team will call you to verify your account and set up your first
          pickup. Have your ID or business registration and pickup address
          ready.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 text-sm font-semibold text-tape underline-offset-4 hover:underline"
        >
          Send another request
        </button>
      </div>
    )
  }

  const sending = status === 'sending'

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-lg border border-white/15 bg-white/5 p-6 sm:grid-cols-2 sm:p-10"
    >
      <fieldset className="sm:col-span-2">
        <legend className="text-sm font-semibold text-white">
          How do you want to start?
        </legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {TRACKS.map(([value, label, hint], i) => (
            <label
              key={value}
              className="flex cursor-pointer items-start gap-3 rounded-md p-4 ring-1 ring-inset ring-white/15 transition has-[:checked]:bg-white/10 has-[:checked]:ring-2 has-[:checked]:ring-tape"
            >
              <input
                type="radio"
                name="track"
                value={label}
                defaultChecked={i === 0}
                className="mt-0.5 border-white/30 bg-transparent text-tape focus:ring-tape focus:ring-offset-ink"
              />
              <span>
                <span className="block text-sm font-semibold text-white">
                  {label}
                </span>
                <span className="block text-xs text-white/50">{hint}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Your name" htmlFor="name">
        <input id="name" name="name" autoComplete="name" required className={inputClass} />
      </Field>
      <Field label="Business name" htmlFor="company">
        <input id="company" name="company" autoComplete="organization" required className={inputClass} />
      </Field>
      <Field label="Work email" htmlFor="email">
        <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
      </Field>
      <Field label="Phone or WhatsApp" htmlFor="phone">
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+265"
          required
          className={inputClass}
        />
      </Field>
      <Field label="Type of business" htmlFor="industry">
        <select id="industry" name="industry" required defaultValue="" className={inputClass}>
          <option value="" disabled className="text-ink">
            Choose one
          </option>
          {INDUSTRIES.map((i) => (
            <option key={i} className="text-ink">
              {i}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Deliveries per month" htmlFor="volume">
        <select id="volume" name="volume" required defaultValue="" className={inputClass}>
          <option value="" disabled className="text-ink">
            Choose a range
          </option>
          {VOLUMES.map((v) => (
            <option key={v} className="text-ink">
              {v}
            </option>
          ))}
        </select>
      </Field>
      <div className="sm:col-span-2">
        <Field label="What do you deliver, and where?" htmlFor="message" optional>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={1000}
            placeholder="e.g. Prescriptions from two branches in Lilongwe, mostly same-day"
            className={inputClass}
          />
        </Field>
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-md bg-red-500/10 px-4 py-3 text-sm text-red-200 sm:col-span-2">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/40">
          Protected by reCAPTCHA. We only use your details to reply.
        </p>
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-tape px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-tape focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-60"
        >
          {sending ? 'Sending…' : 'Get started'}
          {!sending && <ArrowIcon className="h-4 w-4" />}
        </button>
      </div>
    </form>
  )
}

export function GetStarted() {
  return (
    <section id="get-started" className="scroll-mt-24 bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <div>
          <Eyebrow dark>Get started</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl">
            Start sending.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-white/70">
            Tell us what you deliver and where. We&apos;ll call you to verify
            your account, or to plan your rollout if you need a business
            account.
          </p>
          <dl className="mt-12 space-y-6 border-t border-white/10 pt-8 text-sm">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                Email
              </dt>
              <dd className="mt-1">
                <a href="mailto:info@doorbell.mw" className="font-semibold text-white hover:text-tape">
                  info@doorbell.mw
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                Already shipping with us?
              </dt>
              <dd className="mt-1 text-white/70">
                Use the chat button to reach operations.
              </dd>
            </div>
          </dl>
        </div>

        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        >
          <LeadForm />
        </GoogleReCaptchaProvider>
      </div>
    </section>
  )
}
