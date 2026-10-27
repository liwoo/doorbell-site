// Single source of truth for prices, cut-offs and delivery rules on the landing page.
// Pricing, the delivery process, the quote estimator and the FAQs all read from here,
// so change a number once and the whole page stays consistent.
//
// DRAFT: every value below is a proposal benchmarked against Pick Up Mtaani, Sendy,
// Lalamove, Uber Direct and Stuart (see docs/research). Confirm with ops and finance
// before deploying to production.

export const CITY = 'Lilongwe'
export const TIMEZONE = 'Africa/Blantyre'

// Standard same-day run: book by the cut-off, delivered in the afternoon window.
export const CUTOFF = { hour: 11, minute: 0, label: '11:00' }
export const SAME_DAY_WINDOW = '14:00–18:00'
export const SAME_DAY_BY = '18:00'
export const RUN_DAYS = [1, 2, 3, 4, 5, 6] // Monday to Saturday

export const formatMk = (amount) =>
  `MK ${Math.round(amount).toLocaleString('en-US')}`

export const SPEEDS = {
  express: {
    name: 'Express',
    promise: 'A rider is sent straight away and goes direct to your customer.',
    window: 'Usually delivered within 90 minutes',
    base: 2000, // covers the first 5 km
    baseKm: 5,
    perKm: 300,
    fit: 'Food, urgent medicine, documents',
  },
  standard: {
    name: 'Standard',
    promise: 'We batch your parcels into the next delivery run.',
    window: `Book by ${CUTOFF.label}, delivered ${SAME_DAY_WINDOW} the same day`,
    lateWindow: `Book after ${CUTOFF.label}, delivered by 13:00 the next working day`,
    flat: 1800, // anywhere in the city delivery zone
    fit: 'Shops, online sellers, pharmacies',
  },
}

export const EXTRAS = [
  { label: 'Extra drop on the same trip', price: 'MK 800 per stop' },
  { label: 'Cash or mobile money collected', price: '2% of the amount (min MK 300)' },
  { label: 'Waiting at pickup or drop-off', price: 'First 10 min free, then MK 100/min' },
  { label: 'Large or heavy item (over 10 kg)', price: '+ MK 1,500' },
  { label: 'Second delivery attempt', price: 'Free' },
  { label: 'Return to you after a failed delivery', price: '50% of the delivery fee' },
]

export const POLICIES = {
  freeWaitMinutes: 10,
  heldDays: 3,
  goLive: 'one working day',
  payout: 'next working day',
  payoutChannels: 'your mobile money or bank account',
  cover: 'MK 100,000',
  claimHours: 48,
  topUp: 'Airtel Money, TNM Mpamba, bank transfer or card',
}

export const COD_RATE = 0.02
export const COD_MIN = 300

export function estimate({ speed, km, cod }) {
  const s = SPEEDS[speed]
  const delivery =
    speed === 'express'
      ? s.base + Math.max(0, Math.ceil(km) - s.baseKm) * s.perKm
      : s.flat
  const collection = cod > 0 ? Math.max(COD_MIN, cod * COD_RATE) : 0
  return { delivery, collection, total: delivery + collection }
}

// Where we are relative to today's Standard cut-off, in Malawi time.
export function cutoffStatus(date = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: TIMEZONE,
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value])
  )
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(
    parts.weekday
  )
  const now = Number(parts.hour) * 60 + Number(parts.minute)
  const cutoff = CUTOFF.hour * 60 + CUTOFF.minute
  if (!RUN_DAYS.includes(day)) return { state: 'closed' }
  if (now < cutoff) return { state: 'open', minutesLeft: cutoff - now }
  return { state: 'after' }
}
