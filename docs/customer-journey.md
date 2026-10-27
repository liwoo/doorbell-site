# Doorbell B2B: customer journey, offer and process

_Last updated: 27 Oct 2026. Doorbell is no longer a consumer app. We are delivery as a service: businesses hand us orders, and we pick up, carry and hand over to their customers, with proof._

## Positioning
**"Your last-mile, same-day delivery partner."**

Malawi's couriers and coach parcel services (CTS, Speed, Swift, Smart Deliveries, AXA, Sososo) move parcels **branch to branch**, and the recipient comes to collect. **We are not another courier.** We are the leg they don't run: from the counter, warehouse or courier branch **to the customer's door, the same day**. That makes those couriers **customers and partners**, not competitors. They can sell doorstep delivery as an add-on on every waybill, and we fulfil it.

### Where Doorbell starts, and when we reach the end customer
| Moment | Who acts | What happens |
|---|---|---|
| Order | End customer | Orders from the business and asks for home delivery |
| Book | Business, or Doorbell Checkout | Booking created through one of three paths (below). With Checkout, our hosted page does the booking, so **our part starts here** |
| **First contact** | Doorbell → end customer | **Within a minute of booking:** a WhatsApp in the business's name confirms the window and, if we don't have coordinates, asks for a location pin. Addresses are landmarks, so the pin is how we find the door |
| Collect | Doorbell | Rider collects on the run (Express: immediately), seals the parcel, scans it |
| **Second contact** | Doorbell → end customer | **As the rider leaves:** rider name, one-hour window, live link, handover PIN. The customer can reschedule or name someone else to receive |
| Door | Doorbell + end customer | PIN match, photo, GPS, COD collected. **Our part ends here** |
| Proof | Business | Proof of delivery to portal or webhook; COD paid out the next working day |

### Three ways to book (same data model underneath, see [`delivery-api.md`](./delivery-api.md))
1. **Website checkout → Doorbell Checkout.** The business's site creates a checkout session. The customer drops a pin, picks a slot and pays on our hosted page, then returns to the merchant's site.
2. **API integration.** Quote (coordinates → `zone_id`, price, window) → book → webhooks.
3. **No tech → Business Portal.** Type in a delivery, or upload a spreadsheet whose columns use the same field names. Couriers upload each morning's branch arrivals.

### Selling speed
- Lead with the clock: book by **11:00**, at the door by **18:00** the same day.
- The hero shows a live countdown to the cut-off, in Malawi time.
- Every timestamp on the page tells one worked example: ordered 09:40 → delivered 14:12 (Express: 09:40 → 10:39).

This doc drives what we build, what we sell, and what the landing page says (`src/pages/index.jsx`). Prices, cut-offs and delivery rules live in one file, `src/components/landing/terms.js`, and every section of the page reads from it.

Market research behind this doc, with sources: [`docs/research/`](./research)
- `east-southern-africa.md`: Kenya, Uganda, Zambia, Malawi (Pick Up Mtaani, Sendy, SafeBoda, Jumia, Glovo, local couriers, MACRA)
- `south-africa-nigeria.md`: Picup, Uber Direct SA, Bob Go, The Courier Guy/Pudo, Paxi, Pargo, GIGL, Kwik, Chowdeck
- `global-benchmarks.md`: DPD UK, Amazon Shipping and the DSP model, Uber Direct, DoorDash Drive, Stuart, Lalamove, Evri

---

## 1. What the market taught us

| Finding | Evidence | What we do |
|---|---|---|
| **Nobody in Malawi publishes delivery prices.** CTS, Speed, Swift, Smart and the coach parcel services publish no rates or terms online. They are prospective **customers**; their recipients still collect from branches. | East/Southern Africa research §7 | **Publish our rate card on the homepage**, and pitch couriers a doorstep add-on they can resell. |
| **Trust is the problem, not speed.** Swift's MD says Malawians have "lost confidence" in couriers. Lilongwe police get daily lost-parcel complaints. Pick Up Mtaani's 2.7★ rating comes from unclear status updates and rude riders. | East/Southern Africa §7, §1 | **Lead with proof:** PIN handover, photo, GPS, sealed bags, named riders, and written rules for failures and claims. |
| **The best recipient experience is DPD Predict.** A one-hour window the evening before, the driver's name and photo, and five ways to change the delivery. In DPD's own (old) figures: 98% of deliveries landed in the window, and first-time delivery went up about 10%. | Global §DPD | **Do Predict over WhatsApp:** a message in the merchant's name with the rider, a time window, a tracking link and a PIN, plus buttons to change the time or name someone else to receive it. |
| **Everyone runs two onboarding tracks.** Self-serve with a prepaid wallet (GIGL, Lalamove, Stuart, Pick Up Mtaani), and sales-led with a monthly invoice for corporates. GIGL and Pick Up Mtaani don't require a registered company. | All three | **Pay as you go** (ID + phone + mobile-money top-up) and a **Business account** (registration, rate card, invoice, pilot week). |
| **The clearest pricing is a public rate card with named extras.** Lalamove, Uber Direct AU and Sendy's old Express/Standard split all do this, and some add a quote before sign-up (Stuart). | Global §pricing, E/S Africa §2 | Two speeds (**Express** priced by distance, **Standard** flat across the city), an extras table, and an **estimator** on the page. |
| **COD speed is the headline for social sellers.** Kwik pays out in 24 hours, GIGL in 3–4 days, and Pick Up Mtaani has a wallet you can withdraw from instantly. COD fees run from 1–5%, or a flat fee. | SA/NG, E/S Africa | Cash collected is paid out **the next working day**, at 2% (minimum MK 300). |
| **The merchant is always billed.** The merchant decides whether to pass delivery on to their customer (Uber Direct, DoorDash, Shopify rules). | Global | Say this plainly in the FAQ. Checkout links can add the fee to the order. |
| **Failure lessons.** Sendy died from burning cash while expanding into too many products and countries. Lori Systems ran out of cash by paying truckers before its customers paid. SafeBoda left Nigeria because margins were too thin. | E/S Africa §11 | **One city, one product, until each delivery makes a margin.** Small businesses prepay; invoices only for vetted accounts on short terms. Riders get paid quickly, but never before cash comes in. |
| **Chowdeck Relay (Nigeria) is our pivot, already proven.** A consumer delivery app that now sells delivery to the vendors it already serves. | SA/NG | **Sign up our existing restaurant and shop partners first.** |

---

## 2. Who we sell to

| Segment | What they ship | What hurts today | What wins them |
|---|---|---|---|
| **Restaurants & cafés** | Hot food, 2–8 km, peaks at lunch and dinner | Riders idle off-peak; marketplace commissions; they don't own the customer | Express at a flat per-km rate, no commission; checkout links on their own WhatsApp |
| **Pharmacies & health** | Prescriptions, OTC medicine, some cold-chain | Wrong-person handovers; no record of who received what | PIN or ID handover, numbered sealed bags, custody log, scheduled repeat deliveries |
| **Shops & social sellers** | Mixed parcels, many first-time buyers | COD risk, chasing riders on WhatsApp, no tracking | Standard at one flat price, COD paid out next working day, no registered company needed |
| **Couriers & coach parcel services** (CTS, Speed, Swift, Smart, AXA, Sososo) | Parcels arriving at city branches | Recipients have to come and collect; no doorstep option to sell | Daily branch collections, spreadsheet/API upload of arrivals, waybill number kept as `reference`, same-day door delivery, proof per parcel. They can resell it as a doorstep add-on |
| **E-commerce & corporates** | Documents, cards, e-commerce orders | Need SLAs, audit trails, invoicing | API + webhooks, signature/ID capture, SLA reporting, monthly invoice |

**Personas:**
- **Owner-operator:** decides on a phone in one sitting; needs the price and to start today.
- **Ops manager:** needs reliability, visibility and a named contact; will pilot first.
- **Developer:** needs a sandbox and predictable statuses.
- **Finance:** needs one invoice and COD reconciliation.

---

## 3. The offer, as the page tells it

The page answers four questions in order:
1. **Who is it for?** The segment tabs.
2. **What happens to my parcel?** The delivery process.
3. **What does it cost?** Pricing.
4. **How do I start?** Onboarding.

Everything else (platform, API, FAQs) supports those four.

### 3.1 Delivery process (what happens after you book)
1. **You book:** portal, checkout link, CSV or API. The price is shown before you confirm.
2. **We collect:** a named, uniformed rider seals the parcel in a numbered bag and scans it. _Recorded: seal no., photo, time._
3. **Your customer is told:** WhatsApp/SMS in the merchant's name with the rider's name, a time window, a tracking link and a handover PIN. Reply buttons: *Change the time*, *Someone else will receive it*, *Call me on arrival*.
4. **We hand over:** the parcel is released only when the PIN matches; photo taken; cash or mobile money collected. _Recorded: PIN, photo, GPS._
5. **You get proof and payment:** proof of delivery in seconds; COD paid out the next working day.

**Published rules:**
- **Nobody home:** call and wait 10 min → failed attempt logged with photo and GPS → one free re-attempt on the next run → held 3 days → returned at 50% of the fee.
- **Cash on delivery:** cash, Airtel Money or TNM Mpamba at the door; paid out the next working day, minus 2% (min MK 300).
- **Lost or damaged:** covered up to MK 100,000 per parcel; claims within 48 hours, settled using the custody log.

### 3.2 Pricing: draft rate card (Lilongwe, motorbike)

| Item | Draft price | Reasoning |
|---|---|---|
| **Express**: dispatched now, usually within 90 min | MK 2,000 for the first 5 km + MK 300/km | Same shape as Sendy (KES 250 for first 7 km + KES 30/km) and Lalamove (base + per km); about $1.15 at MK 1,750/$ |
| **Standard**: book by 11:00, delivered 14:00–18:00; after 11:00, next day by 13:00 | MK 1,800 flat anywhere in the city | Sendy's batched Standard and Pick Up Mtaani's two daily drop-off cut-offs |
| Extra drop on the same trip | MK 800 | Lalamove charges per extra stop |
| Cash/mobile money collected | 2%, min MK 300 | Regional range is 1–5% |
| Waiting | 10 min free, then MK 100/min | Uber Direct AU (10 min free) |
| Large item (over 10 kg) | + MK 1,500 | Size-band pricing (Paxi, Pudo) |
| Second attempt | Free | Sendy gave 3 attempts |
| Return to sender | 50% of the fee | Uber Direct (50%) |
| Cover | MK 100,000 per parcel, claims within 48 h | Bob Go/Paxi free cover tiers; Bob Go's 48-hour claim window |

> ⚠️ **These are proposals, not decided prices.** Check them against what Doorbell's consumer deliveries actually cost per drop, plus rider pay and a margin. Then edit `terms.js` once, and the page, estimator and FAQs all update.

**Plans:**
- **Pay as you go:** prepaid balance at the published rates; no contract or minimum; no registered company needed.
- **Business** (300+ deliveries a month): monthly invoice, volume rates, scheduled collections, team logins/CSV/API, inter-city last mile from coach depots.
- **Enterprise:** dedicated riders, SLAs with credits, custom integrations, account manager.

### 3.3 Onboarding (two tracks)

| Pay as you go | Business account |
|---|---|
| 1. Tell us about your business (2-minute form) | 1. Planning call: volumes, areas, products, handling rules |
| 2. Verify: national ID or registration, phone, pickup address | 2. Rate card and agreement in writing |
| 3. Top up with Airtel Money, TNM Mpamba, bank or card | 3. Set-up: logins, API keys or CSV template, seal bags and labels, staff training |
| 4. Book your first delivery (portal or checkout link) | 4. Pilot week with a daily report, then go live |
| **Sending within one working day of verification** | **Live after a one-week pilot** |

Today both tracks are run by our team behind the lead form. The steps stay the same when the self-serve portal ships.

---

## 4. Journey stages and metrics

| Stage | Customer goal | We need | Metric |
|---|---|---|---|
| Discover | "I need deliveries handled without hiring riders" | Landing page by segment, city pages (Uber does one per city) | Visit → lead |
| Evaluate | "Is it cheaper and safer than what I do now?" | Published rate card, estimator, written rules for failures and claims | Lead → verified account |
| Onboard | "Set me up without paperwork pain" | ID/registration check, wallet top-up, pickup addresses, team roles | Time to verification |
| Integrate | "Fit how I already take orders" | Portal, checkout links, CSV, API sandbox | Verified → first delivery |
| Ship | "Book it, forget it, tell me if it goes wrong" | Dispatch, cut-offs, exception alerts | Pickup and delivery on time % |
| Handover | "The right person got it, and I can prove it" | Rider app custody steps, WhatsApp Predict, PIN | First-attempt success %, disputes per 1,000 |
| Settle | "My COD money, fast; a bill I understand" | Next-working-day payouts, statements, claims | Payout time, invoice disputes |
| Grow | "More areas, cheaper per drop" | Volume tiers, new cities, pickup points, SLAs | Deliveries per merchant per month, retention |

---

## 5. Product map and build order

| Product | Who uses it | When |
|---|---|---|
| Lead form + sales-run onboarding | Everyone | **Now** (this site) |
| Rider app custody steps (seal scan, PIN, photo, GPS) | Riders | **Next.** Without these, the page's claims aren't true. |
| WhatsApp/SMS recipient messages + tracking page | Recipients | **Next** |
| Business Portal (book, CSV, wallet, statements, COD payouts) | Merchants | **Next** |
| Checkout links with mobile-money payment | Social sellers, restaurants | Then |
| Delivery API + webhooks (out of early access) | Developers | Then |
| Pickup points in partner shops (pharmacies, mobile-money agents) | Recipients | Later. Jumia runs 80%+ of its pickup stations through partners; Pick Up Mtaani uses about 190 shop agents. |
| WooCommerce/Shopify plugins, analytics, SLA reports | E-commerce, ops | Later |

### Rider supply: a fleet-partner model (to evaluate)
Amazon outsources last-mile to small Delivery Service Partners. Each is paid per route plus per package plus a scorecard bonus, minus chargebacks, settled weekly. A Lilongwe version: local entrepreneurs run 3–10 bikes under the Doorbell brand. The scorecard covers on-time %, proof-of-delivery compliance and cash reconciliation, and settlement is weekly by mobile money. Watch the co-employment risk Amazon faces in the US.

---

## 6. Risks and open questions
- **MACRA courier licence.** MACRA lists the single-city courier licence category with "no licensed operators currently". Operating without one carries a K1M fine or 2 years in prison. Confirm our licence status before marketing heavily. Being the first licensed operator could also be a selling point.
- **Rates.** Every number in §3.2 is a draft.
- **Cover.** Do we self-insure MK 100,000 per parcel, or buy goods-in-transit insurance? Who handles claims?
- **Payout timing.** Next working day assumes daily cash reconciliation from riders. Confirm that ops can do this.
- **Coverage.** Which Lilongwe zones are inside the Standard flat price? Do we need a zone map?
- **Inter-city.** Agree handover terms with AXA and Sososo for depot collections.
- **Consumer-era pages** still live: `/privacy`, `/terms`, `/revoke` and the help pages. Decide which stay.
