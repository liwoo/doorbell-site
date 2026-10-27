# Global B2B Last-Mile Benchmarks for Doorbell (UK / Europe / US / Asia)

Research date: 26 Oct 2026. Purpose: copy the best onboarding, pricing, delivery-process and messaging practices for Doorbell's pivot to B2B delivery in Lilongwe (restaurants, pharmacies, shops/SMEs, Instagram sellers, inter-city couriers, e-commerce, corporates).

**Confidence notes.** Figures marked (official) come from the provider's own site or docs. Figures marked (3rd-party) come from resellers, integrators, blogs or forums and should be treated as indicative. Several DPD and Amazon DSP sources are old (2014-2019) or third-party; the feature set is stable but numbers may have moved. Prices exclude VAT/GST unless stated.

---

## 0. TL;DR comparison table

| Provider | Type | Onboarding | Published price point | Who pays / how shown | Recipient experience | Proof of delivery |
|---|---|---|---|---|---|---|
| **DPD UK** | Next-day parcel network | Sales-led account ("New Customer Enquiry"); reseller route for small shippers; DPD Local for lower-volume SMEs | Ad hoc via resellers: Next Day drop-off from ~£7.10 ex VAT; Economy drop-off from £4.99 ex VAT (3rd-party, 2025). Account rates negotiated | Merchant pays; retailer decides checkout fee | **Predict**: 1-hour window, driver name/photo, live map narrowing to 15 min, 5 in-flight options | Photo for safe place, signature, PIN (on some services) |
| **Evri** | Budget parcel network | Self-serve (frequent-sender tiers 40+/80+ per month); Business Account by enquiry at ~150+/week | Consumer-style from ~£2.70 drop-off (3rd-party); one SME quote ~£2.45 + VAT standard at 130+/month (forum) | Merchant pays | 1-hour window (official), "My places" safe place + photo, preferred/avoid neighbour, divert to ParcelShop/Locker | Photo on safe place; up to 3 attempts |
| **Royal Mail / Parcelforce** | National post | Click & Drop self-serve below 20 parcels/week; business account at 20+/week; credit account | Tiered by volume (not researched in depth) | Merchant pays | Safeplace, tracked/signed services | Signature (Signed For / Tracked), used for controlled drugs by Pharmacy2U |
| **Amazon Shipping UK** | Parcel network (Amazon Logistics) sold to non-Amazon shippers | Online form (~10 min); auto-approved under 200 parcels/day; 4-6 weeks to first collection; no minimum term | Rate card by parcel profile + volume; volume programme for 50-199/day; Next Day may need 250+/day | Merchant pays | Amazon tracking page, photo on delivery | Photo on Delivery (privacy-blurred), OTP on delivery (auto above £200 declared value from June 2026), signature |
| **Amazon DSP** | Fleet-supply model (subcontracted last mile) | Application + vetting + owner training | ~$10k start-up (5 vans) + ~$30k liquid assets (US); £10k + £25k (UK); vans leased via Amazon | Amazon pays DSP per route + per package + scorecard incentives | n/a (Amazon owns the customer) | Amazon app enforces photo/OTP |
| **Uber Direct** | On-demand, white-label couriers | Self-serve dashboard or via POS/e-com partner; API sandbox ("test mode") then billing + approval for production | US: "as low as US$7.99"; AU: A$10 base + A$1.10/km; NZ: NZ$9.50 + NZ$1.10/km; wait A$0.50/min after 10 min; return trip 50% | Merchant pays; can absorb or pass to customer at checkout | Live tracking, under 2h / same day / scheduled up to 30 days | Signature, photo, barcode, 4-digit PIN, ID scan with min age; auto-return on failed ID |
| **DoorDash Drive** | On-demand, white-label Dashers | Drive On-Demand: self-serve for restaurants, sales for others (5+ locations); Drive API: sandbox + simulator, then production review + live demo (currently restricted) | API: **$9.75 within 5 miles + $0.75/mile to 15 miles**; $2.75 off if tip passed through; On-Demand: $6.99-$10.99; return 60% of fee | Merchant pays; tips 100% to Dasher | Status, ETA, driver location, completion confirmation | Signature (hand-it-to-me), photo for contactless, PIN, return_to_pickup or dispose |
| **Stuart (UK/FR)** | On-demand + same-day + scheduled | Self-serve free account, card at sign-up, instant quote before sign-up; tiers: SMB / Mid-Market / Enterprise | **From £5.50 per delivery**, PAYG, no contract; peak/off-peak zones | Merchant pays; separate delivery fee + service fee invoices | Tracking link to end customer; 1-hour scheduled slots for grocery; multi-drop up to 8 | Photo/signature in dashboard (must be enabled) |
| **Gophr (UK)** | Same-day courier | Free account; business account for invoicing/teams/discounts | Motorcycle from £7.85, small van £19, large van £26.50 (official "from") | Merchant pays | Tracking | Not researched |
| **Lalamove (Asia/LatAm)** | On-demand, multi-vehicle marketplace | App self-serve; upgrade to Corporate account with business registration/tax ID; API with sandbox | PH motorcycle: ₱49-50 base + ₱6-6.50/km tiered; +₱40/stop; COD ₱30; waiting ₱70; round trip +70%; surge up to 300% | Merchant (or individual) pays; wallet top-up or monthly statement | Real-time tracking, ShareLink to third parties | Photo POD; document handling; insured goods |
| **GrabExpress** | On-demand | App + business portal | SG same-day S$5.30 for 0-5 km (2021) | Sender pays | Live GPS | Photo POD |
| **Onfleet / Shipday / Tookan** | Software for own fleets | Self-serve trials | Onfleet $619/mo (2,500 tasks); Shipday from $39/mo (750 orders); Tookan ~$59-$99/mo (1,000 tasks) | SaaS fee to merchant | Branded tracking SMS/page | Photo, signature, barcode |
| **AfterShip / parcelLab / Bringg** | Post-purchase + orchestration | Self-serve (AfterShip) / enterprise | AfterShip from $11/mo (100 shipments) | n/a | Branded tracking page, EDD on product/checkout pages, delivery slots | n/a |

---

## 1. DPD UK (gold standard for recipient experience)

### 1.1 Recipient experience: how Predict actually works

This is the part to copy most closely.

1. **Evening before delivery**: the recipient gets an SMS and/or email with a **one-hour delivery window** for the next day (e.g. "14:00-15:00"). The 2014 upgrade added an evening-before notice specifically to "double the response rate" so recipients can act before the van leaves. Source: [Post & Parcel, 24 Mar 2014](https://postandparcel.info/?p=60569); [DPD Lithuania FAQ](https://www.dpd.com/lt/en/faq/was-bedeutet-predict).
2. **Morning of delivery**: the window is confirmed (DPD Estonia describes the message arriving that morning to the nearest hour). Source: [DPD EE Predict](https://www.dpd.com/ee/en/receiving/predict-service/).
3. **Personalised content**: notifications carry the **sender's branding**, the **driver's name** (the app also shows a **photo** of the driver) and the recipient's **position in the delivery queue**. Source: [DPD UK Predict & Follow My Parcel](https://www.dpd.co.uk/content/products_services/predict_fmp.jsp); [DPD App Store listing](https://apps.apple.com/gb/app/dpd/id1064977107).
4. **Follow My Parcel**: a real-time map of the van; as the driver gets close, the hour narrows to a **15-minute slot**. App alerts when the driver is ~30 minutes away (official App Store); one retailer reports 45/30/15-minute alerts (3rd-party).
5. **In-flight options** (available the night before *and* on the day, until the parcel arrives), per DPD UK:
   - Choose an alternative delivery date
   - Deliver to a nominated **neighbour**
   - Leave in a specified **safe place** (you can upload a photo of the safe place; the driver sends a **photo of where it was left**)
   - Collect from a local **DPD Pickup shop** (~2,500 in UK per App Store listing; originally "collect from depot")
   - **Upgrade** to an earlier slot (before 10:30 or 12:00), afternoon, Saturday or Sunday, paid for in-app
6. **After delivery**: photo POD for safe-place drops; rate your driver 1-5 (3rd-party retailer help page).
7. **Failed delivery**: sources conflict. Retailer pages describe up to three attempts on consecutive days then a 7-day hold before return; customers report one or two attempts and then return or Pickup shop. Treat as "redirect to Pickup shop after failed attempt, return to sender after ~7 days". Source: [ID Mobile community](https://community.idmobile.co.uk/ask-a-question-18/missed-delivery-wrong-pdp-delivery-information-on-website-57028) (3rd-party).

**Impact claims** (old, company-reported): ~1.1m Predict notifications per week, ~10% of recipients used an in-flight option; >98% of deliveries within the stated window at launch; "right first time" up ~10% for retailers. Source: search summaries of [Post & Parcel](https://postandparcel.info/?p=60569) / [Logistics Manager](https://www.logisticsmanager.com/18258-dpd-drops-charge-for-one-hour-timeslot-service). UK market-wide first-attempt success is ~93.7% (Parcel Monitor via [SmartRoutes](https://smartroutes.io/blogs/delivery-success-rates-key-stats-for-retail-and-ecommerce/)).

**Why it works**: the window is precise enough that people plan around it, and it's sent early enough to change. Every option avoids a failed attempt, which is the most expensive event in last-mile.

### 1.2 Onboarding
- **Direct account**: sales-led "New Customer Enquiry", no published threshold ([ShipEngine help](https://help.shipengine.com/hc/en-us/articles/7687209038747)). A forum user was told 15 parcels/week minimum (anecdotal, [UKBF](https://www.ukbusinessforums.co.uk/goto/post?id=3105316)).
- **DPD Local**: the SME brand, aimed at lower volumes, same Predict experience ([Sendcloud guide](https://www.sendcloud.com/en_uk/shipping-with-dpd/)).
- **Small shippers** mostly use resellers (Parcel2Go, Interparcel, Parcel Monkey), which offer instant quotes, prepaid labels and drop-off at Pickup shops. Parcel2Go's own business account wants 50+ parcels/week ([Parcel2Go](https://www.parcel2go.com/business/dpd-business-account)).
- Integrations: shipping platforms (Sendcloud, ShipStation, Metapack, Shiptheory) handle labels and Predict data.

### 1.3 Service levels and pricing
- Services: Two Day, Next Day, by 12:00, by 10:30, Saturday, Sunday. "By 12" adds roughly £1-2 over Next Day (3rd-party).
- Ad hoc (reseller) prices 2025: DPD Next Day drop-off from **£7.10 ex VAT** (1-10 kg) ([Interparcel, Aug 2025](https://uk.interparcel.com/blog/services/dpd-next-day-price-drop)); Drop Off from £6.29 ex VAT; Drop Off Economy (1-3 days) **£4.99 ex VAT** ([Parcel2Go](https://www.parcel2go.com/service/dpd_drop_off_economy)); shop-to-door £6.39 up to 5 kg ([Which?, Dec 2024](https://www.which.co.uk/news/article/7-ways-to-save-on-christmas-postage-costs-aThrd7P5QseC)).
- Account rates are negotiated by volume and parcel profile; not published.
- Pharmacy use: some pharmacies use a DPD **24-hour PIN service** for high-value, refrigerated and controlled drugs, where the PIN must be given to the driver ([Pontllanfraith Pharmacy](https://pontllanfraithpharmacy.co.uk/delivery)).

### 1.4 Messaging
Product pages lead with recipient benefit, not price: "Predict & Follow My Parcel", "Personal Service", "In-flight Options". The pitch to businesses is that DPD's recipient experience protects *your* brand ("notifications carry your branding").

---

## 2. Amazon: Shipping UK and the Delivery Service Partner (DSP) model

### 2.1 Amazon Shipping UK (selling Amazon's network to other businesses)
- **Onboarding**: online registration takes ~10 minutes; under 200 packages/day is processed automatically; **4-6 weeks from registration to first collection**; Shipper Central or third-party platforms take a few days to connect, direct API 1-3 weeks; **no minimum contract and no lock-in**. Source: [Amazon Shipping UK, How to start shipping](https://shipping.amazon.co.uk/resources/getting-started-guide/how-to-start-shipping).
- **Eligibility**: volume-based pricing programme for 50-199 parcels/day; one FAQ says Next Day needs 250+/day, Two Day from 50+/day (sources conflict). Source: [Small Business Delivery](https://shipping.amazon.co.uk/small-business-parcel-delivery), [Quick service check](https://shipping.amazon.co.uk/quick-service-check).
- **Pricing**: rate card by parcel dimensions/weight, speed (Next/Two Day) and historic + forecast volume ([Shipping rates](https://shipping.amazon.co.uk/shipping-rates)).
- **Collection**: standard pickup window Mon-Fri **14:30-18:00** for under 200/day; later and Sunday by request. Max 23 kg, 120x60x60 cm, UK only.
- **POD and security**: Photo on Delivery (privacy-blurred, visible in Shipper Central and on the customer tracking page within minutes); **Secure Delivery Suite** with OTP and signature; OTP auto-applies to off-Amazon shipments declared above **£200 from 11 June 2026**. Source: [Secure Delivery Suite blog](https://shipping.amazon.co.uk/blog/introducing-the-secure-delivery-suite); [Amazon Shipping API changelog](https://developer-docs.shipping.amazon.com/apis/changelog/launch-announcement-value-added-service-signature-delivery-and-one-time-pass-code-for-uk-non-amazon-marketplace-volume-off-amazon).
- **OTP mechanics (Amazon retail)**: 6-digit code emailed after dispatch and shown in "Track package"; valid only for the delivery day; shareable with a neighbour or gift recipient. Which? reported fraud cases where drivers obtained the code and then the parcel was swapped, so the code confirms *handover*, not *contents*. Source: [Amazon Flex UK](https://flex.amazon.co.uk/blog/secure-delivery-one-time-password/); [Which?](https://www.which.co.uk/news/article/amazon-one-time-passwords-customers-report-item-thefts-and-parcels-being-switched-ait1r3T6wfnz).

### 2.2 The DSP model (how Amazon outsources last mile to small fleet companies)
**How it works**
- Amazon recruits entrepreneurs to start small delivery companies (typically 20-40 vans, 40-100+ drivers). The DSP **employs** the drivers; Amazon supplies **routes, packages, the driver app/routing technology, branded vans via a leasing programme, uniforms, and discounts on fuel and insurance**. Leased vans can only carry Amazon parcels. Source: [GeekWire 2018](https://www.geekwire.com/2018/owning-amazon-delivery-business-risks-rewards-economic-realities-tech-giants-new-program-entrepreneurs/).
- **Entry**: ~$10,000 start-up (based on 5 vans) and ~$30,000 liquid assets in the US; UK figures quoted as £10,000 and £25,000 ([CILT UK](https://ciltuk.org.uk/News/News-Centre/ArtMID/7018/ArticleID/35892/Amazon%e2%80%99s-partnership-with-business-owners); [Routific](https://www.routific.com/blog/how-to-start-an-amazon-delivery-business)). Amazon's projected owner profit range is $75k-$300k/yr on $1m-$4.5m revenue for 20-40 vehicles; critics say this is not guaranteed.
- **Scale**: 4,400+ DSP owners (undated Amazon claim); 390,000 driving jobs created since 2018; $16.7bn invested in the programme over seven years, incl. $2.1bn (Sept 2024) and $1.9bn (Sept 2025), with average driver pay pushed to nearly $22 then ~$23/hour. Source: [Fortune, Sept 2024](https://fortune.com/2024/09/13/amazon-pay-rise-subcontracted-delivery-drivers); [STAT Times, 2025](https://www.stattimes.com/amp/latest-news/amazon-boosts-dsp-programme-with-19-billion-investment-1356650); [About Amazon](https://www.aboutamazon.com/md/news/transportation/amazon-delivery-service-partner-dsp-rate-increases-investment).
- **How DSPs are paid** (3rd-party bookkeepers/consultants, figures inconsistent): weekly settlement (Sat-Fri service week, paid 5-10 business days later) made up of a **fixed amount per dispatched route** (roughly $180-$280/route, or hourly ~$25/route-hour), a **per-package** component, **scorecard incentives** (e.g. 7 cents/package for "Fantastic", 15 cents for "Fantastic Plus"), van lease reimbursement, onboarding payments, peak pay, minus **chargebacks** and deductions. Scorecard covers safety, delivery quality (DCR, POD compliance), customer feedback; overall score is capped by the safety score. Sources: [Route Consultant](https://routeconsultant.com/industry-insights/how-are-amazon-dsps-paid); [Steph's Books](https://stephsbooks.com/blog/amazon-dsp-payment-reconciliation).
- **Risks**: thin margins, high driver turnover, total dependency on one customer, and NLRB scrutiny over whether Amazon is a co-employer.

**Relevance to Doorbell**: highly relevant as a *supply* model, adapted:
- Doorbell can recruit **"fleet partners"**: a local entrepreneur who owns or finances 3-10 motorbikes and employs riders. Doorbell supplies demand, the rider app, routing, branded bags/vests, training and possibly bike financing; the partner handles hiring, rider discipline, maintenance and daily attendance.
- Pay them like Amazon: **guaranteed block/route fee + per-drop fee + weekly scorecard bonus** (on-time %, POD compliance, customer rating, cash reconciliation for COD), minus chargebacks for lost/damaged goods. Weekly settlement via mobile money.
- This turns rider supply from Doorbell's headache into a partner's business, while Doorbell keeps the customer, tech and brand (the DSP vans are Amazon-branded; the customer never sees the DSP).
- Caveat: co-employment and labour-law questions exist in Malawi too; keep contracts clear.

---

## 3. Uber Direct

### 3.1 Onboarding
- Three routes: (1) **self-serve Direct Dashboard** (sign up, add payment, book from a web form); (2) **activate through an integration partner** (POS, online ordering, Shopify, WooCommerce, etc.); (3) **API**. Source: [Uber Direct AU](https://merchants.ubereats.com/au/en/services/uber-direct/).
- API: after creating an account, the Developer tab gives Customer ID, Client ID and Client Secret for **test mode** (blue banner; no real deliveries; "Robo Courier" simulates trips). To go live you **add billing info and get approved for production**. Source: [Uber developer get started](https://developer.uber.com/docs/deliveries/get-started); [Robo courier](https://developer.uber.com/docs/deliveries/guides/robocourier).
- Shopify app: free to install but limited to Shopify Plus ([Shopify App Store](https://apps.shopify.com/uber-direct)).
- "No startup costs, commissions, or monthly minimums."

### 3.2 Pricing (official)
- **US**: "as low as **US$7.99** per delivery" (CA$6.99), varies by channel partner and mileage ([Uber Direct US](https://merchants.ubereats.com/us/en/services/uber-direct)).
- **Australia** (most transparent rate card): **A$10 base + A$1.10/km** (estimated pickup-to-dropoff, prorated); **wait time A$0.50/min after 10 minutes** at pickup; **cancellation** if order fails delivery restrictions = delivery fee + return trip; **return trip = 50% of delivery fee**. ([Uber Direct AU](https://merchants.ubereats.com/au/en/services/uber-direct/))
- **NZ**: NZ$9.50 base + NZ$1.10/km.
- Default radius ~10 miles; delivery windows: under 2 hours, same day, or scheduled up to 30 days ahead.
- **Who pays**: merchant is billed; merchant can **absorb or pass on** the fee at checkout. An integrator (Bopple) recommends subsidising ~$5 per delivery to keep the customer-facing fee reasonable ([Bopple](https://help.bopple.com/uber-direct-pricing)).

### 3.3 Delivery process
- Dispatch is automatic to nearby couriers. Stats: 8.5m monthly active couriers (Mar 2025), 81% of orders finished in 45 minutes or less, under 2% courier cancellation (2023).
- **Proof of delivery** configurable separately for pickup, dropoff and return ([Uber POD guide](https://developer.uber.com/docs/deliveries/guides/proof-of-delivery)):
  - **Signature** (optionally signer name and relationship); image kept 30 days
  - **Picture** (automatic for Leave at Door); 7 days in dashboard, 30 days via API
  - **Barcode** scan at pickup/dropoff/return (multiple barcodes per order)
  - **PIN**: Uber sends the customer a **4-digit PIN** in its communications; courier must enter it
  - **Identification**: courier photographs a government ID; `min_age` (e.g. 18); required for alcohol, tobacco and **prescription medicines**; if the ID check fails, **a return trip is created automatically**
- `deliverable_action`: meet at door / leave at door. `undeliverable_action`: leave_at_door or return. Webhook `courier_imminent` fires about 1 minute out.
- Integrator example (Slerp, UK): orders under £100 without alcohol = leave at door with photo; £100+ = meet at door + photo, returned if undeliverable at extra cost ([Slerp](https://support.slerp.com/knowledge/delivery-with-uber-direct-faqs)). This value-based POD rule is a good pattern.

### 3.4 Messaging
Headline: **"Deliver from your channels with Uber Direct"**; sub: "Tap into Uber's global network of delivery partners". **5-step How it works**: Sign up or integrate -> Receive orders -> Dispatch with Uber -> Delivery person completes -> Track and optimise. Pricing shown as a "from" price with a footnote, plus big trust stats.

---

## 4. DoorDash Drive (incl. Drive On-Demand)

### 4.1 Products
- **Drive On-Demand**: no-code/partner-integrated delivery for your own site/app/phone orders; also a "request a Dasher" portal.
- **Drive API** (v2): self-integrating developers.
- **Drive Classic** (legacy API): $7 flat + tips paid by end user, invoiced monthly.
- Marketing widgets ("Order Now" pop-up) claimed to lift sales 15-30%.

### 4.2 Onboarding
- **Drive On-Demand**: if you use Olo/Toast/Square etc., onboard through them; else fill the form and the team sends instructions. **Self-serve is currently limited to restaurants**; non-restaurant businesses with 5+ locations email with location count and projected volume. Source: [Drive On-Demand](https://merchants.doordash.com/en-us/products/drive-on-demand).
- **Drive API**: create a sandbox access key (JWT-signed), build with the **Delivery Simulator** (free, no real Dashers), then **Request Production Access** (confirm business details, set up payment, accept terms), **schedule a live demo**, review in "a few days", then generate a production key. Production access is **currently restricted** with no timeline. Source: [Get production access](https://developer.doordash.com/docs/drive/how_to/get_production_access); [About Drive](https://developer.doordash.com/docs/drive/overview/about_drive).

### 4.3 Pricing (official)
- **Drive API**: **$9.75 base within 5 miles; +$0.75/mile beyond 5 miles up to 15 miles** (max ~$17.25, my calculation). **$2.75 discount** if your app lets the recipient tip and you pass 100% of the tip to the Dasher. **Return-to-pickup = 60% of original fee.** Charged per delivery by card (Stripe) at creation; monthly ACH/check invoicing on request. Source: [Drive pricing & payment](https://developer.doordash.com/en-US/docs/drive/overview/pricing_payment).
- **Drive On-Demand (US)**: **$6.99-$10.99 per delivery**, flat fee, no commission, no signup/subscription/termination fees; Canada page shows $8.50 flat; Australia A$5.50 incl. GST (search snippets). Monthly invoice via HighRadius portal (ACH, debit, card, autopay); accounts deactivated 20 days after due date. Source: [Drive On-Demand](https://merchants.doordash.com/en-us/products/drive-on-demand).
- **Who pays**: merchant; tips 100% to Dasher. Pharmacy flavour: "DoorDash will never collect co-payment, delivery fees, or tips directly from the customer" - the pharmacy collects them.

### 4.4 Delivery process / POD
- Default is **hand-it-to-me (HITM)**; `contactless_dropoff` triggers an automatic **photo** request (Dasher can skip with "I handed order to customer").
- **Signature** (`dropoff_requires_signature`), HITM only; image URL returned in the `DELIVERY_DROPPED_OFF` webhook.
- **PIN code** POD (`dropoff_pin_code_verification_metadata`), HITM with returns enabled.
- `action_if_undeliverable`: `return_to_pickup` or `dispose` (default dispose). Redelivery API exists. Source: [Signature required](https://developer.doordash.com/docs/drive/how_to/signature_required); [CnG onboarding kit](https://developer.doordash.com/docs/drive/how_to/CnG_Drive_Onboarding_Kit).
- Customers see status, ETA, driver location, completion confirmation.

### 4.5 Messaging
Hero: **"Request delivery drivers with Drive On-Demand"**; sub: "Maximize profits by offering delivery from your site or app without managing a fleet of drivers." Three value cards (Unmatched quality / Easy integration / Lower costs), "Give your customers visibility" with a tracking screenshot, partner logo grid, a **pricing card showing the range**, FAQ, closing CTA. Case studies: honeygrow +31% orders, Roll'd +177% white-label sales.

---

## 5. Stuart (UK / France)

### 5.1 Onboarding
- Free self-serve account; **instant quote in the Dashboard before signing up**; card details at account creation; PAYG after each delivery; no minimum for SMBs. Dashboard + mobile app + API + e-com plugins. Source: [Stuart pricing](https://stuart.com/pricing/); [Stuart FAQs](https://help.stuart.com/en/articles/7011319-faqs).
- Booking: enter pickup and drop-off, choose package size, request courier; "Add another drop-off" for multi-drop.

### 5.2 Pricing (official)
| Plan | Threshold | Pricing | Inclusions |
|---|---|---|---|
| SMB | up to 500 deliveries/month or 7 locations | **from £5.50/delivery**, PAYG, no contract | tracking, dashboard, chat support |
| Mid-Market | 500+/month or 8-50 locations | volume tiers | invoicing, POS/e-com integration, time slots, multi-drop, dedicated contact |
| Enterprise | 5,000+/month or 50+ locations | custom | SLAs, full API, account manager, **white-label**, advanced reporting |

- Price drivers: location (zones), volume, transport type (bike, cargo bike, motorbike, motorbike XL, car, all with e-variants). Peak/off-peak pricing in some zones.
- **Two-part fee**: delivery fee (collected on behalf of the courier) + Stuart service fee; both shown ex VAT; card users get per-delivery invoices, direct debit users get weekly invoices + CSV. Source: [Stuart pricing & billing](http://help.stuart.com/en/articles/7012396-understand-pricing-and-billing).
- **Cancellation**: free before courier assigned and for 2 minutes after; fee after that. Waiting: reportedly no waiting fee (3rd-party Slerp). Fee disputes within 24 hours.

### 5.3 Delivery process
- Courier assigned in 5-7 minutes; at pickup within ~15 minutes; average under 30 minutes up to 1.5 miles; ~7 min/mile moped, ~9 min/mile bike.
- Services: on-demand, same/next-day with custom windows, **1-hour scheduled slots** for grocery, multi-drop up to 8 parcels; 7am-11pm, 7 days.
- Tracking link sent to end customer "in just a few clicks"; POD (photo/signature) visible under History, enabled by account manager. Failed delivery: Stuart auto-returns to the venue with photo (3rd-party Slerp).

### 5.4 Messaging
Headline **"Fast & Affordable Deliveries for Your Business"**; sub mentions transport options, real-time tracking and **"prices from £5.50"**. **4-step How it works**: Sign Up ("create a free account") -> Create Delivery -> Pay as You Go ("no hidden fees. Starting at £5.5") -> Track in Real-Time. Industry tiles (restaurants, retail, grocery). Logo bar (Tesco, Co-op). Source: [Stuart UK courier service](https://info.stuart.com/courier-service-uk).

---

## 6. Lalamove (Asia / LatAm) - closest analogue to an emerging-market motorbike-first service

### 6.1 Onboarding
- Individuals and SMEs book in the app/web immediately. **Corporate account**: upgrade in Settings, submit company info + business registration or tax ID; gets centralised **business wallet**, **monthly statements**, multi-tier corporate plans, API. Wallet top-up by card, PayNow, bank transfer (with screenshot) in SG. Source: [Lalamove SG corporate account](https://www.lalamove.com/en-sg/corporate-account-information); [Lalamove FAQ](https://www.lalamove.com/en-ph/faq).
- **API**: register at partnerportal.lalamove.com for separate sandbox and production keys; sandbox at `rest.sandbox.lalamove.com`; quotation -> order flow, quotation ID with expiry; webhooks for status changes; ShareLink to share tracking with third parties; priority fee (tip) add-on. Source: [Lalamove developers](https://developers.lalamove.com/).
- Business page tiers (Basic/Business, Enterprise, Premium) all say "Custom pricing - Contact Sales"; enterprise gets fixed monthly budgets / postpaid billing. Source: [Lalamove for Business PH](https://www.lalamove.com/en-ph/business).

### 6.2 Pricing (official public rate card, Philippines)
The **most transparent published rate card** in this set, by vehicle and region. Source: [Lalamove PH vehicle pricing](https://www.lalamove.com/en-ph/all-vehicle-pricing-detail).
- **Motorcycle (Metro Manila, 20 kg, 0.5x0.4x0.5 m)**: base ₱49-50 + ₱6-6.50/km for the first few km, declining to ₱5/km at 15+ km; **+₱40 per extra stop**.
- Sedan (200 kg): ₱100 base + ₱18/km (to 5 km) then ₱15/km. Vans/trucks up to 12,000 kg with long-distance bases and hourly rental.
- **Add-ons**: cash on delivery handling ₱30 (up to ₱2,000); "Buy For Me" ₱70 (motorcycle, Manila); **extra waiting ₱70**; **round trip +70%** (+90% some vehicles); document handling ₱50; door-to-door loading ₱80/stop; extra helpers ₱200-600; free loading time 30 min/stop for motorbikes, then ₱60/hr.
- **Surge**: "High Demand Surcharge of up to 300% may apply during peak hours"; final fare depends on traffic, volume, partner availability, tolls.
- Regional variation: motorcycle base as low as ₱23 (Panay) to ₱55 (Cebu).

### 6.3 Delivery process
- Instant matching, real-time tracking from assignment to completion, photo POD, insured goods ("Goods Protection"), multi-stop routes, COD.
- Messaging emphasises "A Vehicle for Every Delivery" (motorcycle to 12-tonne truck), corporate solutions, stats (businesses served, orders/month, drivers, delivery success rate %), industry testimonials.

### 6.4 Why it matters for Doorbell
Same conditions as Malawi: motorbike-first, cash and mobile wallets, informal SMEs and social sellers, weak addressing, price-sensitive. Lalamove proves that a **public, itemised rate card (base + per-km + per-stop + named add-ons)** builds trust with small businesses, while corporates get wallets, monthly statements and custom pricing.

---

## 7. Lighter benchmarks

### 7.1 Evri (UK)
- Recipient: **1-hour window** as standard (official guide; one 3rd-party says 2-hour); "My places" for permanent safe place with photo + notes; nominate a preferred neighbour **and a neighbour to avoid**; divert to ParcelShop/Locker; safe-place **photo sent** to customer; up to 3 attempts on consecutive days then ParcelShop/depot. Source: [Evri divert](https://www.evri.com/divert-your-parcel); [Evri safe place](https://www.evri.com/guides/safe-place).
- Business: free self-serve frequent-sender tiers (0-39, 40-79, 80+ parcels/month); full Business Account by enquiry at ~150+/week. Source: [Evri small business shipping](https://www.evri.com/guides/small-business-shipping).

### 7.2 Royal Mail / Parcelforce
- Below ~20 parcels/week: **Click & Drop** or the app (self-serve online postage). 20+/week: business account with volume discounts, **credit account** with invoicing, full Tracked and Returns access; free collection if spend > £16,500/yr. Source: [Royal Mail business account](https://www.royalmail.com/yourbusinessaccount).
- Royal Mail Health runs Pharmacy2U's deliveries ([Royal Mail Health](https://royalmail.com/health/pharmacy2U)).

### 7.3 Gophr (UK same-day)
- Instant quote tool that "shows the best value vehicle for each delivery"; "from" prices: motorcycle **£7.85**, small van **£19**, large van **£26.50**; free account for occasional use, business account (account manager, invoicing, team accounts, volume discounts). Partner discount through Tide bank (10%). Source: [Gophr UK](https://uk.gophr.com/); [Gophr x Tide](https://uk.gophr.com/tide-business/).

### 7.4 GrabExpress (SE Asia)
- Instant (pickup within ~15 min, deliver within ~60 min) vs same-day (4-hour) tiers; SG same-day S$5.30 for 0-5 km (2021); upfront fixed fares; photo POD and live GPS; goods cover up to PHP 20,000 / MYR 6,000; bulk booking up to 150 deliveries (2022 guide). Source: [Mothership 2021](https://mothership.sg/2021/03/grabexpress-4-hour//amp); [Grab PH Express](https://grab.com/ph/express).

### 7.5 Rappi / 99 for business (LatAm)
Not researched in depth. Pattern is similar to Uber Direct/DoorDash Drive (white-label couriers for merchants' own channels). Lalamove is the more useful LatAm/Asia benchmark for Doorbell.

---

## 8. Pharmacy delivery practices

### 8.1 UK
- **Pharmacy2U** (largest UK online pharmacy): most items by **Royal Mail Tracked 48** (letterbox-friendly, safe place allowed); **refrigerated by Tracked 24**; **controlled drugs (e.g. strong painkillers) by a tracked and signed-for service**. Tracking reference sent at dispatch. Source: [Pharmacy2U track delivery](https://www.pharmacy2u.co.uk/prescriptions/track-your-prescription-delivery); [Pharmacy2U delivery](https://www.pharmacy2u.co.uk/prescriptions/delivery).
- **Independent pharmacies**: DPD 24-hour **PIN** service for high-value, refrigerated and controlled drugs ([Pontllanfraith](https://pontllanfraithpharmacy.co.uk/delivery)).
- **Regulation**: GPhC guidance for services at a distance requires pharmacies to assess the suitability and timescale of delivery methods, specifically for controlled drugs and refrigerated medicines ([PSNC briefing](https://cpe.org.uk/wp-content/uploads/2013/04/PSNC-Briefing-023.15-Providing-pharmacy-services-at-a-distance.pdf), 2015). For Schedule 2 CDs collected at the pharmacy, the pharmacist must establish whether the collector is the patient, representative or healthcare professional; best practice is to record the collector's details ([CPE CD factsheet 2026](https://cpe.org.uk/wp-content/uploads/2025/10/Dispensing-CDs-factsheet-April-26.pdf)). I didn't find a specific GPhC rule on drivers handing over CDs; pharmacies typically use signature + name capture + delivery SOP and audit log.
- Overseas model: Abu Dhabi DOH standard requires approval before delivering narcotics/psychotropics and an SOP for delivery ([DOH standard](https://www.doh.gov.ae/-/media/Feature/Resources/Standards/Delivery-of-Pharmacy-Medication-Standard_for-publication.ashx)).

### 8.2 US / AU (gig platforms doing Rx)
- **DoorDash Drive prescription programme**: tamper-evident, discreet packaging; only name/address/phone on outside, **no prescription info**; **electronic signature capture required**; if patient or authorised agent is not home, **Dasher is prompted to return to pharmacy**; refrigerated items at pharmacy discretion with cold packs; **Schedule I-V controlled drugs not eligible**; pharmacy collects all patient fees; max refund $2,000/delivery; monthly invoice. Source: [DoorDash Drive prescription FAQ](https://help.doordash.com/en-au/merchants/article/doordash-drive-prescription-delivery-ipc-faq).
- DoorDash Dasher guidelines (AU/NZ): verify identity or get signature as the app directs; accepted ID list (licence, passport, proof-of-age card); no ID = don't hand over, contact support; Dasher paid for both the delivery and the return. Source: [Dasher pharmacy guidelines AU](https://help.doordash.com/en-au/dashers/article/delivering-pharmacy-guidelines-dx-aus).
- **Uber Direct**: ID check (photo of government ID, min age) required for prescription medicines; failed ID -> automatic return trip.
- **HIPAA chain-of-custody practice** (vendor guidance, not law): log every handoff (who, when, where, package state); tamper-evident seals with barcode/QR linking package to order; unique package IDs rather than patient names on paperwork; recipient authentication at the door, re-verify on redelivery/address change; temperature loggers and hold times; couriers sign a Business Associate Agreement. Source: [Accountable HQ](https://www.accountablehq.com/post/hipaa-compliance-for-a-compounding-pharmacy-home-delivery-of-specialty-medications); [Dropoff](https://www.dropoff.com/blog/pharmaceutical-logistics-compliance/).

### 8.3 Zipline (Africa) - chain-of-custody messaging
- Health workers **order by phone, SMS, WhatsApp or online**; package packed in ~5 minutes; delivery typically within an hour (Rwanda average cited ~15-30 min); recipient notified **by WhatsApp** on arrival; every package barcoded/QR-coded so stakeholders see "full visibility of the chain of ownership". Operates in Rwanda, Ghana, Côte d'Ivoire, Nigeria, Kenya. Sources mostly 2018-2020. Source: [IEEE Spectrum](https://spectrum.ieee.org/zipline-expands-its-medical-delivery-drones-across-east-africa); [Berkeley IEOR](https://ieor.berkeley.edu/how-drones-are-transforming-healthcare-in-africa/).
- Lesson: WhatsApp ordering + WhatsApp arrival notifications + barcode at every handoff is credible in African health settings and is the language Malawian pharmacies and clinics will recognise.

---

## 9. Software layer (hosted checkout, tracking pages, dispatch)

| Tool | What it does | Price | Lesson for Doorbell |
|---|---|---|---|
| **Shopify Local Delivery** | Merchant sets delivery area by **radius (max 160 km) or postcode list**, up to 9 extra zones, **minimum order price**, delivery fee, and up to 3 **price-based rules** (e.g. $5 fee from $5, $3 from $10, free from $20) | Included | Doorbell's "checkout fee calculator" for sellers should support: zones, minimum order, tiered "free above X" rules. Source: [Shopify help](https://help.shopify.com/en/manual/fulfillment/setup/delivery-methods/local-delivery?r=ecm-bfs) |
| **Zapiet Pickup + Delivery** | Date and time-slot picker at checkout, zones, slot capacity limits, POS integration | $29.99-$499.99/mo, by locations and orders | Time-slot capacity is how merchants avoid overpromising. Source: [Zapiet pricing](https://zapiet.com/pricing) |
| **Onfleet** | Dispatch, driver app, routing, branded customer SMS/tracking, POD (photo, signature, barcode, age check) | Launch $619/mo (2,500 tasks), Scale $1,349 (5,000), Enterprise $3,099 (10,000+); SMS extra; 14-day trial | Billing is per completed task (pickup or drop). Source: [Levy Electric comparison](https://fleets.levyelectric.com/compare/onfleet-pricing) (3rd-party) |
| **Shipday** | Dispatch + driver app + customer tracking, integrates with DoorDash/Uber for overflow | Professional from $39/mo (750 orders) + $0.04/order; Branded Elite $119; Business Advanced $299 | Cheap entry tier with branded tracking. Source: [Shipday pricing](https://shipday.com/pricing) |
| **Tookan (Jungleworks)** | Dispatch, white-label apps, popular in emerging markets | ~1,000 tasks/mo from ~$59-$99; overage $0.09-$0.13/task | Pricing conflicts on official page. Source: [Tookan pricing](https://jungleworks.com/tookan/pricing-tookan) |
| **AfterShip** | Branded tracking page, notifications, **estimated delivery date widget on product and checkout pages**, product recommendations on tracking page | Essentials $11/mo (100 shipments); Premium ~$70+/mo (own domain, AI EDD) | Show the delivery promise *before* purchase. Source: [AfterShip Shopify app](https://apps.shopify.com/aftership) |
| **parcelLab** | Enterprise post-purchase: branded tracking, proactive delay emails, returns portal | Enterprise quote | Not researched in depth |
| **Bringg** | Orchestration: connect owned, 3PL and crowdsourced fleets; quote requests to carriers return rates/ETAs; rules like "preferred local carrier first, then fastest"; dynamic delivery slots on product/checkout/post-purchase; exception alerts | Enterprise | Doorbell could become a carrier *inside* orchestration tools later; meanwhile copy the "preferred carrier then fallback" dispatch rule. Source: [Bringg](https://go.bringg.com/last-mile-solution) |

---

## 10. Pricing presentation patterns (ranked by clarity)

1. **Lalamove-style itemised public rate card**: base fare + per-km bands + per-stop + named add-ons (COD, waiting, return, helper) + clear surge cap. Most trustworthy for SMEs; lets them calculate their own customer fee.
2. **Uber Direct AU rate card**: base + per-km + wait-time rule + return % in four bullets. Simple and complete.
3. **DoorDash API**: "flat $9.75 within 5 miles, +$0.75/mile to 15" - one number for most jobs, plus a single distance rule.
4. **Stuart "from £5.50" + 3 tiers by volume** (SMB PAYG / Mid-Market volume / Enterprise custom), instant quote in the dashboard before signup.
5. **DoorDash On-Demand range** ($6.99-$10.99) - less transparent, gated behind form.
6. **DPD / Amazon / Evri**: no public account price; quote by volume and parcel profile. Works for parcel networks with sales teams, not for a startup courier trying to win SMEs.

Common features of good presentations: price **ex tax with a clear note**, "no signup / no subscription / no minimum", a **"from" price in the hero**, named surcharges with a cap, a **return/failed delivery fee stated as a % of the original fee** (Uber 50%, DoorDash 60%, Lalamove +70% round trip), free cancellation window (Stuart: until 2 minutes after courier assigned), and wait-time grace period (Uber 10 min, Lalamove 30 min for motorbikes).

**How the fee reaches the end customer**: in every on-demand model the **merchant is billed** and decides whether to absorb, pass through or mark up the fee at checkout (Uber Direct Shopify app "absorb or pass on"; Shopify rules "free above X"). Pharmacies collect fees from patients themselves (DoorDash). Tips are passed 100% to the rider.

---

## 11. Landing page / messaging patterns

- **Hero** = outcome + who + proof of price: "Fast & Affordable Deliveries for Your Business ... prices from £5.50" (Stuart); "Deliver from your channels" (Uber); "Request delivery drivers ... without managing a fleet of drivers" (DoorDash).
- **How it works in 4-5 steps**: Sign up -> Create delivery (or connect your store) -> We dispatch a rider -> Track live -> Pay as you go / review analytics.
- **Recipient experience sells to the merchant**: DPD sells Predict to retailers as brand protection; DoorDash's "Give your customers visibility" section shows the tracking screen.
- **Trust stats**: courier count, % within 45 min, cancellation rate, cities, delivery success %.
- **Segment tiles**: restaurants / retail / grocery / pharmacy, each with its own proof-of-delivery and speed promise.
- **Tiered plans by volume**, with self-serve for small and "Talk to sales" for large.
- **Integration logo grid** (POS, Shopify, WooCommerce).
- **FAQ covering billing, cancellation, failed delivery**.

---

## 12. Most transferable lessons for a Malawi B2B delivery service

1. **Build a "Predict-lite" over WhatsApp/SMS.** Evening-before (for scheduled/inter-city) or at-dispatch (on-demand) message to the *recipient*, branded with the merchant's name: rider name + photo + phone, a 1-hour (scheduled) or 15-30 min (on-demand) window, live tracking link, and one-tap options: "deliver later today / tomorrow", "leave with [named person / guard / shop]", "collect from Doorbell point", "call me on arrival". Every option prevents a failed trip.
2. **Publish a Lalamove/Uber-style rate card in MWK.** Base fare + per-km bands within Lilongwe zones + per extra stop + named add-ons (COD handling %, waiting after 10 min, return trip at 50%, inter-city flat routes), "no signup, no minimum", free cancellation until rider assigned + 2 min. Show it on the landing page and give a quote widget before signup.
3. **Value-based proof of delivery, configurable per merchant.** Photo for everything; PIN (4-digit, sent to recipient) for high-value and Instagram COD orders; signature + recipient name + ID for pharmacy; barcode/QR scan at pickup and drop for chain of custody. Default failed delivery to "return to sender" with a stated fee.
4. **Self-serve in minutes, then upgrade.** Sign up with phone number -> verify via OTP -> top-up wallet with Airtel Money/TNM Mpamba (or card) -> first booking same day. Corporates and pharmacies upgrade to a "business account" (registration docs, monthly statement/invoice, multiple users, API/WhatsApp ordering). Copy Stuart's three tiers by volume.
5. **Recruit supply through a DSP-style fleet-partner programme.** Local entrepreneurs run 3-10 motorbikes under the Doorbell brand; Doorbell provides demand, app, routing, branded kit, training and possibly bike financing; pay = block fee + per-drop + weekly scorecard bonus (on-time, POD compliance, COD reconciliation, rating) minus chargebacks, settled weekly by mobile money.

Additional notes: give merchants a Shopify-style **checkout fee setting** (zones, minimum order, "free delivery above MWK X") and a shareable **branded tracking page**; for pharmacies, follow DoorDash's rules (discreet tamper-evident bag, no drug info on label, signature, return to pharmacy if patient absent, exclude controlled drugs at launch) and Zipline's WhatsApp + barcode chain-of-custody story.

Malawi-specific assumptions behind these lessons (not researched here): weak street addressing, heavy WhatsApp and mobile money use, COD common with social sellers, motorbike as main vehicle.
