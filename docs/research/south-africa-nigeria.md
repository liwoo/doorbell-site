# B2B last-mile delivery-as-a-service: South Africa and Nigeria benchmark for Doorbell (Malawi)

Researched: 26 Oct 2026. Sources were fetched live where possible. Several sites (The Courier Guy, Pudo, Uber Direct dashboard) block automated fetching, so some numbers come from third-party pages; these are marked.

**Currency conversions are approximate and assumed:** R18 ≈ US$1, ₦1,500 ≈ US$1. Check current rates before quoting any of them.

**Confidence labels used below:**
- **[V]** verified on the provider's own page, fetched Oct 2026.
- **[3P]** third-party source.
- **[OLD]** source is from before 2024, or undated.
- **[UNV]** unverified or inferred.

---

## 0. Status check (does it still operate?)

| Player | Status (Oct 2026) | Note |
|---|---|---|
| **Picup** (SA) | Operating. | Majority-owned by **Karooooo (Cartrack)**, not Shoprite. Karooooo bought 70.1% for about R70m in Sept 2021 ([Engineering News](https://www.engineeringnews.co.za/article/cartrack-owner-acquires-701-of-picup-technologies-in-r70-million-deal-2021-09-14)). It now reports as "Karooooo Logistics", trading as Picup. FY2026 revenue was about R540m (+29%), with more than 8m deliveries ([Daily Investor](https://dailyinvestor.com/technology/134189/car-tracking-company-founded-by-a-south-african-billionaire-breaks-another-)) [3P]. Shoprite's delivery arm is **Pingo**, which is a separate company. |
| **Uber Direct SA** | Operating. | City pages are live, e.g. [Cape Town](https://www.uber.com/za/en/b/courier-services/cape-town-wc-za/) [V]. |
| **Bob Go** (SA) | Operating. | 6,000+ merchants and 3m+ parcels a year (own claim, [bobgo.co.za](https://www.bobgo.co.za/)) [V]. |
| **The Courier Guy / Pudo** (SA) | Operating. | pudo.co.za now redirects to thecourierguy.co.za/locker-courier-services. Pudo is TCG's locker brand. |
| **Pargo** (SA) | Operating. | 4,000+ points ([pargo.co.za](https://pargo.co.za/)) [V]. |
| **Paxi** (SA, PEP / Pepkor) | Operating. | 2,800+ points in PEP and Tekkie Town stores ([paxi.co.za](https://www.paxi.co.za/)) [V]. |
| **Shiplogic** (SA TMS) | Operating. | Software that couriers run on, e.g. Fastway ([shiplogic.com](https://www.shiplogic.com/)) [V]. |
| Dial-a-Delivery (SA) | Could not find any trace of it. | Dropped. |
| Mr D | Operating, but as a restaurant marketplace, not DaaS. | Not researched further. |
| **GIG Logistics (GIGL)** (NG) | Operating. | Spun out of the GIGM coach company (God is Good Motors) around 2012 ([TechCabal](https://techcabal.com/2018/11/16/gigm-is-nigerias-most-technologically-advanced-road-transport-company/)). Uses GIGM bus terminals, e.g. Jibowu, as service points (giglogistics.com location list) [V]. |
| **Kwik Delivery** (NG) | Site and FAQ are live: Lagos, Abuja, Ibadan. | No 2025–26 news found. Treat operating scale as **[UNV]**. |
| **Gokada** (NG) | Filed for Chapter 11 in Delaware, Jan 2025 ([Brandspur](https://brandspurng.com/2025/01/12/gokada-files-for-chapter-11-bankruptcy-protection-in-delaware/)). | Excluded. |
| **Chowdeck** (NG) | Operating. | More than 1m monthly orders ([TechCabal, Nov 2025](https://techcabal.com/2025/11/03/chowdeck-crosses-one-million-monthly-orders-in-nigeria/)). Runs the **Relay** DaaS product ([chowdeck.com/relay](https://chowdeck.com/relay)) [V]. |
| **Fez Delivery** (NG) | Operating ([fezdelivery.co](https://www.fezdelivery.co/)) [V]. | |
| **Sendbox** (NG) | Site live. | Aggregator for social sellers; delivery quality depends on the partner courier assigned ([brands.ng 2026 review](https://brands.ng/?p=2091)) [3P]. |
| **Topship** (NG) | Operating. | Mostly international export shipping, so less relevant. Not researched deeply. |
| **Glovo NG** | Operating. | MD change in Oct 2026 ([Brandspur](https://brandspurng.com/2026/10/07/glovo-nigeria-md-lamide-akinola-steps-down-after-three-years/)). Glovo exited Ghana in 2024. Mainly a marketplace; its DaaS offer in Nigeria was not verified. |

---

## 1. SOUTH AFRICA

### 1.1 Picup (Karooooo Logistics): on-demand and scheduled B2B, closest analogue to Doorbell

**Positioning.** Site meta text: "On demand and national delivery at the click of a button"; title "Picup – Delivery Simplified" [V, picup.co.za HTML]. Clients named in press include **Pick n Pay asap!**, **Dis-Chem** (pharmacy) and **bash** ([TopAuto](https://topauto.co.za/features/138245/how-much-pick-n-pay-asap-drivers-earn-in-south-africa/)) [3P]. Original SLA promise: "under 90 minutes or the full fare is credited" ([ITWeb](https://itweb.co.za/article/picup-promises-parcel-delivery-in-under-90-min/XGxwQD71ed67lPVo)) [OLD].

**Onboarding.**
- Self-registration on the web dashboard. The app says "Thank you for registering, please try and login after a few minutes", which suggests a short approval step.
- Payment choices in the app: saved card, or a post-paid account ("Please note that this Picup will be billed to your monthly account"). Prepaid "credits" are being retired ("We will no longer be supporting credits as a payment method").
- Source: strings in Picup's live web-app bundle, picup.co.za/main-es2015…js, fetched Oct 2026. [V, but the bundle is undated]

**Integrations** (from the same dashboard bundle):
- API key and webhooks ("Set Webhook URLS", "Send Test Webhooks")
- Bulk "Upload Deliveries"
- Business references per order
- **Third-party courier hand-off** ("Send to courier", "Courier Waybill Created"). Picup routes out-of-zone or national parcels to partner couriers, giving one dashboard for on-demand and national delivery.
- Reseller listing also mentions an e-commerce plugin, warehouse integration and multi-store auto-assignment ([SoftwareOne listing](https://platform.softwareone.com/product/picup-on-demand/PCP-9403-1127), [startuplist.africa](https://startuplist.africa/picup)) [3P].

**Pricing.**
- Model is **per-km, depending on vehicle type**: "Fixed delivery fee per kilometer… depends on the selected vehicle mode" (SoftwareOne) [3P]. The original launch model was a base rate plus per-km, with a peak-hour surcharge (07–09 and 16–19) [OLD].
- Vehicle classes seen in the app: motorbike (Bajaj Boxer fleet via a rent-to-own deal, [ZA Bikers](https://www.zabikers.co.za/?p=463704)), car, Small Van, Large Van.
- **No public rate card.**
- Surcharge found in the app: "Address related failed deliveries will incur additional charges."

**Delivery process.**
- Service windows: 30 min, 60 min or 3 hours, depending on radius (SoftwareOne) [3P]. Scheduled trips use delivery-window start and end times (e.g. 08:00–08:30).
- Electronic proof of delivery.
- Status notifications by email, SMS and WhatsApp. Customer-facing copy includes "Your parcels have been split between drivers. Please expect 2 drivers to arrive" and "Your delivery is being fulfilled by a Picup Legend."
- States tracked for failed collection, failed delivery, redelivery and return.
- Order merging ("AI-driven order merging").
- Hybrid fleet of in-house and third-party drivers.

**Lesson.** Picup's B2B moat is **the dashboard, not the riders**: bulk upload, API and webhooks, multi-store routing, a post-paid account, and overflow to partner couriers. It sells to pharmacies and grocers as white-label fulfilment.

---

### 1.2 Uber Direct (SA)

- **Onboarding.** Separate dashboard sign-up; not available to "individuals or solo entrepreneurs." SMBs use a web dashboard; enterprises use POS or e-commerce integrations or the API ([Uber Cape Town page](https://www.uber.com/za/en/b/courier-services/cape-town-wc-za/)) [V]. The 2020 launch promised businesses could "sign-up and immediately start offering delivery in a matter of days" ([BusinessTech](https://businesstech.co.za/news/mobile/388369/uber-launches-delivery-app-for-businesses-in-south-africa/)) [OLD].
- **Pricing.**
  - "No commission"; a per-delivery fee based on distance, speed and region, with volume or batching discounts on request [V].
  - Only published rand figures are from 2020 (Uber Direct Moto): R10 pickup and drop-off fee, R4.08/km, R18.75 minimum (about $0.55, $0.23/km, $1.04) ([Uber blog](https://www.uber.com/en-ZA/blog/uber-direct-moto-in-south-africa)) [OLD].
- **Delivery.**
  - Options: express within 2 hours, next-day, or scheduled up to 30 days ahead.
  - Branded SMS with ETA.
  - Typical radius about 10 miles; items under about 50 lb; certain medical items are excluded in Cape Town [V].
  - **White-label**: orders come from the business's own app or site and the customer sees the merchant's brand.
  - Partnership with Droppa for bakkie and truck loads ([ITWeb](https://www.itweb.co.za/article/uber-enables-on-demand-last-mile-deliveries-for-sa-businesses/KzQenqjV6kDqZd2r)) [3P].
- **Messaging pattern.** Uber's SEO landing pages are per town ("Courier services and same-day local delivery in Cape Town / Polokwane / KwaDukuza…"). Doorbell could copy this with "Delivery for businesses in Lilongwe / Blantyre / Mzuzu".

---

### 1.3 Bob Go (Bob Group, from Bob Shop): shipping aggregator

**Headline:** "Run your store, not your shipping". Sub-head: "Bob Go connects you to South Africa's top couriers so you can compare quotes, print waybills, and track parcels – all from one easy-to-use dashboard." [V]

**How it works (3 steps)** [V, [bobgo.co.za](https://www.bobgo.co.za/)]:
1. Sign up free.
2. Connect your store.
3. Ship and track: "Print waybills, schedule pickups, and monitor every parcel in real time."

**Onboarding.**
- Fully self-serve: "14-day free trial – no credit card required", plus "Book a demo".
- No contracts. The merchant needs no account with each courier: "all your courier charges are consolidated into one invoice" ([FAQ](https://www.bobgo.co.za/faqs)) [V].

**Integrations.**
- Shopify, Woo, Ecwid, Magento, Rekisa, Netcash Shop, Shopstar and others.
- API access.
- **Checkout rates**: live courier rates shown to the shopper at checkout, Starter plan and up ([Shopify listing](https://apps.shopify.com/bobgo)) [V].
- Couriers available: The Courier Guy, RAM, Internet Express, Pargo, Fastway, SkyNet, Citi-Sprint, MTE Xpress. Also its own locker network, **Bob Box**.

**Pricing** ([bobgo.co.za/pricing](https://bobgo.co.za/pricing)) [V]:

| Plan | Price (excl. VAT) | What it includes |
|---|---|---|
| Pay-as-you-go | R0/month | Standard courier rates |
| Starter | R249/mo (about $14) | Discounted rates, checkout rates, API, 3 sales channels |
| Advanced | R749/mo (about $42) | Zebra label printing, 5 channels |
| Premium | R1,999+/mo (about $111) | Packing control, 10 channels, 10 users |

- Subscription is billed on the 1st of the month, pro-rated.
- Shipping charges are always extra.
- Per-parcel prices are not published; you see live quotes inside the app.

**Insurance and liability** ([bobgo.co.za/insurance](https://bobgo.co.za/insurance)) [V]. A very useful reference table of free cover versus maximum insurable value per courier:

| Courier | Free cover | Max insurable |
|---|---|---|
| The Courier Guy | R1,000 | R30,000 |
| Fastway | R1,000 | R1,000 |
| Pargo | R1,000 | R1,000 |
| SkyNet | R1,000 | R50,000 |
| RAM | R1,250 | R5,000 |
| Citi-Sprint / Internet Express | R100, excludes hijacking | R10,000 |

- Claims pay the lower of declared value or cost price, never retail value.
- Notify within **48 hours**; documents within 5 business days.
- Credit takes about 12–18 weeks.
- Claims can be denied for poor packaging.

**Lesson.** The SA market accepts a **SaaS subscription layered on per-parcel fees**. Doorbell's equivalent would be a free pay-as-you-go tier plus a paid "Business" tier with lower per-drop rates, API and multi-user access.

---

### 1.4 The Courier Guy (TCG) and Pudo lockers

**Site access.** thecourierguy.co.za blocks bots (HTTP 403), so the figures below are mostly third-party.

**Service levels and published price points** ([WiseMove, updated Aug 2026](https://www.wisemove.co.za/post/the-courier-guy-services-and-prices-explained)) [3P]. WiseMove notes that "TCG no longer publishes its rates", so its door-to-door figures are 2024 numbers.

National, excl. VAT, 2024:

| Service | Price | Transit |
|---|---|---|
| Overnight | Minimum **R130 up to 2 kg** + R45–48 per extra kg | 1–2 business days |
| Economy Road 0–5 kg | **R90** (about $5) | 2–3 days |
| Economy Road 6–15 kg | R150 | 2–3 days |
| Economy Road 16–25 kg | R200, then R13.04/kg | 2–3 days |

- The Overnight minimum comes from TCG's 2023 prepaid rate sheet ([PDF](https://wp-admin.thecourierguy.co.za/wp-content/uploads/2023/08/Prepaid-One-Rate-National_1September2023_PIN.pdf), not downloadable for me). WiseMove shows "R30", which looks like a typo.

Local (same city), 2024:
- Same-Day Flyer R80, plus R70 per extra flyer.
- Overnight local R105 per box, plus R95 per extra box.
- Same-Day Express R755 minimum for 2 kg.

Cut-offs:
- Local same-day economy: book **before 10:00** for collection by 10:30 and delivery by 17:00.
- Local overnight: book before 14:00.
- National overnight: book **before 14:30** for collection at 15:00.

**Pudo locker pricing by size** (WiseMove; year not stated) [3P/UNV]:

| Size (max kg) | Locker→Locker | Locker→Door | Kiosk→Door |
|---|---|---|---|
| XS 60×17×8 cm (2 kg) | R49 (~$2.70) | R73 | R88 |
| S 60×41×8 (5 kg) | R59 | R84 | R101 |
| M 60×41×19 (10 kg) | R69 | R116 | R133 |
| L 60×41×41 (15 kg) | R89 | R166 | R202 |
| XL 60×41×69 (20 kg) | R119 (~$6.60) | R222 | R266 |

- A 2023 sponsored article said locker-to-locker started "from R50 up to 2 kg" and counter-to-locker from R65 including packaging and VAT, across about 170 kiosks ([BusinessTech](https://businesstech.co.za/news/industry-news/663321/pudo-the-best-way-to-send-parcels-simply-and-affordably-in-south-africa/)) [OLD].
- Pudo routes: locker↔locker, door→locker, locker→door.

**Onboarding and integrations.** Customer portal (portal.thecourierguy.co.za), prepaid accounts, plus WooCommerce, Shopify, a Standard API and a Locker API (WiseMove) [3P]. A WooCommerce plugin exists ([wordpress.org](https://wordpress.org/plugins/the-courier-guy)). Credit-account requirements could not be verified [UNV].

**Liability.** Free cover R1,000; maximum R30,000; cellphones and laptops excluded (via Bob Go's table above) [V via Bob Go].

**Lesson.** SA couriers price by **size-band products with clear names** (Flyer, XS–XL locker, Economy, Overnight) and **booking cut-off times**, not by opaque per-km quotes.

---

### 1.5 Paxi (PEP / Pepkor): store-to-store parcel bags. Best analogue for Malawi inter-city coach parcels

**Headline:** "Send it easy, Send it with PAXI" / "CONVENIENT – Reliable – AFFORDABLE" [V].

**How it works (4 steps)** ([paxi.co.za/paxi-for-you](https://www.paxi.co.za/paxi-for-you)) [V]:
1. Find a PAXI Point.
2. Buy a bag: "Choose the size and delivery time of your PAXI bag".
3. Provide information (yours and the receiver's).
4. Track via the website, SMS or the **WhatsApp channel**.

**The prepaid bag is the price.** There is no quote engine, no account and no weighing. Paxi says: "no apps, downloads or pre-paid money" (testimonial on the home page).

Prices from the Paxi-for-you page [V]:

| Product | Bag (max size / weight) | Speed | Price |
|---|---|---|---|
| Store-to-Store Standard | 45×37 cm, 5 kg | 7–9 business days | **R59.95** (~$3.30) |
| Store-to-Store Standard | 45×37 cm, 5 kg | 3–5 business days | R109.95 |
| Store-to-Store Large | 64×51 cm, 10 kg | 7–9 business days | R119.95* |
| Store-to-Store Large | 64×51 cm, 10 kg | 3–5 business days | R139.95 |
| Store-to-Home Standard | 5 kg | 3–5 business days | R119.95 |
| Store-to-Home Large | 10 kg | 3–5 business days | R149.95 |
| PAXI Express Standard (Gauteng / NW only) | 5 kg | Next business day if dropped before **15:00** | R89.95 |
| PAXI Express Large | 10 kg | Next business day | R109.95–R119.95* |

\*The business page lists Large 7–9 days at R109.95, which conflicts with R119.95 on the consumer page. PAXI Express Large is R109.95 in the FAQ and R119.95 in the table.

Paxi explains bag sizes in plain terms: "A standard size pillow would fit inside a standard PAXI Bag."

**Business features** ([paxi.co.za/business](https://www.paxi.co.za/about-paxi-for-business)) [V]:
- **PAXI Portal** to pre-register parcels online, then a "quick drop" at the store with a single scan. "PAXI charges no extra fees for registering your parcels online."
- Order bags online.
- **Tokens**: prepaid bulk send credits, with bulk-buy discounts on request.
- Checkout **widget / point-locator plugin**; a Shopify plugin is "coming soon".
- APIs.
- Collection from the business's own facility for larger shippers.
- Returns via a token number: "no manual waybills".

**Recipient and proof of delivery.**
- Sender shows ID and the receiver's cellphone number.
- Receiver collects with **ID plus a PIN sent by SMS or WhatsApp**. A friend can collect with ID and the shared PIN.
- Uncollected parcels go back to the origin store and the sender is notified by SMS. After a further **14 days** they are disposed of.

**Insurance.**
- Free cover up to **R500**.
- Optional vouchers: R10 buys cover to R2,500, R20 buys cover to R5,000. Claims go through **WhatsApp**.

**Restrictions.** Prohibited items include fragile goods, liquids, prescription medication, phones, tablets and laptops, perishables and cash.

**Lesson for Doorbell.**
- A **fixed-price "Doorbell bag/box" by size and speed** sold to Instagram sellers and SMEs is the simplest possible pricing to explain.
- Pair it with drop-off and collection at **partner shops or coach depots**, PIN pickup, and WhatsApp tracking.

---

### 1.6 Pargo: click-and-collect pickup-point network

**Headline:** "Shop Online. Collect Anywhere." Supporting claims [V, [pargo.co.za](https://pargo.co.za/)]:
- "4000+ Pargo Points nationwide", "1.25 days delivery nationwide avg."
- "Flat rates across the country… 100% delivery success rate on first attempt".
- "Easy integration in minutes with our Shopify or WooCommerce plugins; or opt for the Pargo API".
- Support "7 days a week".
- Social proof: 4.9/5 from 42,000 Google reviews.

**Data points on the page that help sell the model to merchants:**
- "37% of online shoppers use click-and-collect when available at checkout."
- "Click-and-collect shoppers checkout 3x more."
- "20% lower cost for nationwide deliveries."

**How it works (3 steps)** ([pargo.co.za/click-and-collect](https://pargo.co.za/click-and-collect/)) [V]:
1. Shop, then choose Pargo at checkout.
2. Select a Pargo point.
3. Collect. "You will receive a sms and email notification when your parcel arrives."

**Process** ([Pargo FAQ](https://pargo.co.za/faq/)) [V]:
- Parcels 0–15 kg; billed on actual or volumetric weight, whichever is higher.
- Delivery up to 3 business days, plus 2 for outlying areas.
- **Collection needs ID plus a unique Pargo Code.**
- Point holds the parcel **8 days**, then returns it to the sender. An order can stay open 30 days before drop-off.

**Pricing.**
- Flat national rates, but **not published**.
- Shopify app is "free to install" plus a "parcel delivery fee", billed via pay-as-you-go credit bundles ([Shopify app](https://apps.shopify.com/pargo)) [V, amounts not shown].
- Checkout display tiers: Basic shows the closest points; Advanced shows "up to 15 closest Pargo Points as separate delivery options."

**Insurance.** R1,000 free cover; maximum R1,000 (Bob Go table).

---

### 1.7 Shiplogic: the TMS behind SA couriers (build-vs-buy input)

Headline: "Streamlined software for courier companies". Used by Fastway and others; it offers a white-label customer portal, admin portal and driver app ([shiplogic.com](https://www.shiplogic.com/)) [V]. Features worth copying into Doorbell's own product spec:
- "Quote, book and bulk import shipments from a spreadsheet".
- "Top-ups, invoices, statements and address books": prepaid wallet and account billing side by side.
- "Shopify and WooCommerce plugins, API keys and webhooks".
- "Email, SMS and WhatsApp at every stage, and drivers ping recipients when they are close."
- **"One-time PINs, signatures and photos pinned to place and time"** as proof of delivery.
- Rate cards and zones drawn on a map ("Postal codes are dead"), which suits Malawi, where there are effectively no postcodes.
- Credit control and auto-invoicing.
- Pricing not public; "Live in weeks, not quarters"; 30-minute demo.

---

## 2. NIGERIA

### 2.1 GIG Logistics (GIGL): national courier built out of a coach company. Very relevant to Doorbell's inter-city coach-parcel segment

**Origin.** GIGL is the logistics spin-out of GIGM (God is Good Motors) intercity buses, and still uses bus terminals as service points, e.g. the "GIGM Terminal, 20 Ikorodu Express Road, Jibowu, Lagos" (giglogistics.com locations) [V].

**Headlines** ([giglogistics.com/e-commerce](https://giglogistics.com/e-commerce/)) [V]:
- "E-commerce Logistics Solutions Designed For Your Business Needs"
- "No Matter Your Business Model, We've Got You Covered"
- "Your shipment's true value matters! Declare it. Protect it."
- Home page: "Express delivery across Nigeria in 24–48 hours."

**Onboarding** ([merchant FAQ](https://giglogistics.com/mfaq/)) [V]:
- Sign up on the GIGGo app "as an e-commerce merchant or through the website".
- **"A registered company or business is not required"**, so individuals and Instagram sellers can join.
- **Prepaid wallet only** in the app ("no cash transactions"). Fund it by card, transfer and similar. CLASS merchants cannot pay over the counter.

**Merchant tiers.** Subscription plus discount, the model to copy [V]:

| | Basic | CLASS |
|---|---|---|
| Fee | Free | **₦4,500/month** (~$3) |
| Shipping discount | 2.5% | **20%** |
| Free insurance cap | ₦30,000 (~$20) | ₦100,000 (~$67) |
| COD charge | Not stated | **Zero** |
| Returns | — | Free shipment return |
| Pickup | — | Free bulk pickup for interstate |
| Support | Telegram support channel | Telegram support channel |

- Free doorstep delivery on both tiers.
- An earlier CLASS fee was ₦4,999 in 2021 ([TechPoint](https://techpoint.africa/2021/02/10/gig-logistics-class-plan/)).

**COD.**
- COD and Transfer-on-Delivery shipments are created in the app.
- Cash is collected at the door or at experience centres and remitted **"within 3-4 business days, free of charge"** [V].

**Integrations.** Shopify and WordPress/WooCommerce plugins, and an API [V].

**Process** [V]:
- Pickup requests assigned 06:00–18:00; after 18:00 they go to a next-day priority queue.
- Domestic delivery 2–3 business days; same-day in Lagos, Port Harcourt and Abuja.
- Reverse logistics (Lagos): 3 free delivery attempts, then charged by zone.

**Terms** ([giglogistics.com/terms](https://giglogistics.com/terms)) [3P summary of the official page]:
- Liability limited to the declared value on the waybill.
- Unclaimed shipments: **₦500/day demurrage after 3 working days**. An alternate page says ₦500/day over 10 kg and ₦200/day under 10 kg.
- Lien over goods for unpaid charges.
- Unidentifiable receivers: returned at the shipper's cost, or disposed of.

**Prices** [3P/UNV, [brands.ng 2026](https://brands.ng/blog/gig-logistics-price-list-2026-what-it-really-costs-to-ship-in-nigeria/)]:
- Lagos→Abuja 0–2 kg about ₦6,000–9,000 (~$4–6).
- Another brands.ng page says from ₦3,800 to a terminal and ₦4,500 to the home, so **home delivery costs about ₦700 more than terminal pickup**.
- There is an official shipping-price calculator; it was not extracted.

---

### 2.2 Kwik Delivery: B2B on-demand intra-city (Lagos, Abuja, Ibadan)

**Positioning.** "The marketplace for on-demand logistics services in Africa"; "Kwik is focused on B2B customers" ([kwik.delivery](https://kwik.delivery), [FAQ](https://kwik.delivery/faq/)) [V]. Note: the FAQ footer reads "© 2020", so content may be old.

**Onboarding.**
- Self-serve web and app sign-up for anyone. Businesses get "Contact us".
- Free e-commerce plugins ("about 5 minutes" to set up) for WooCommerce and Magento ([Brandspur 2021](https://brandspurng.com/2021/03/30/kwik-delivery-releases-new-plugin-for-magento-delivery-plugin-and-version-2-0-of-its-woocommerce-plugin-in-5-days/)), plus an open API.
- Payment by card, Paga wallet, or cash on pickup or delivery.

**Pricing** [V, FAQ]:
- "Kwik charges delivery fees by distance covered only and our delivery fees start from as low as **N400**" (~$0.27). Likely out of date; an observer in 2026 says quotes are dynamic with surge pricing ([brands.ng](https://brands.ng/blog/kwik-delivery-vs-gigl-which-is-cheaper-faster-in-lagos/)) [3P].
- Press reported an average 20% take rate ([TechCrunch](https://techcrunch.com/?p=2288748)) [OLD].

**COD.**
- Toggle "merchant/seller" mode to authorise cash collection. **Item value must be at least ₦5,000.**
- "We remit all funds to your account **within 24 hours**." [V, FAQ]

**Process** [V]:
- Commitments: within **2 hours** from pickup in Lagos; 1 hour in Abuja and Ibadan.
- Hours: Mon–Sat 08:00–17:00.
- Box limits: 25 kg max, 36×36×42 cm. The home page says 48×50×50 cm, an inconsistency.
- Insulated boxes; frozen food holds up to 4 hours.
- Scheduling up to a month ahead, including **recurring orders**.
- Vehicles from motorbike to 30-tonne trucks, with optional "loaders".
- Live tracking link once picked up.
- Insurance: goods-in-transit cover by **Allianz up to ₦500,000** (~$330).
- Failed (non-executed) deliveries are refunded.
- KwikShelf offers fulfilment.

---

### 2.3 Chowdeck Relay: restaurant-delivery app turned logistics-as-a-service (very relevant to Doorbell's ex-consumer pivot)

**Headline:** "Move packages easily with Relay" / "Send anything across town in minutes." Business section headline: "Send orders quickly" ([chowdeck.com/relay](https://chowdeck.com/relay)) [V].

**Onboarding and integrations.**
- Vendors already on Chowdeck "Create deliveries in a few clicks" from the existing **vendor dashboard**: "No technical setup needed".
- Developers get a "RESTful API with webhooks", "Automated delivery creation", "Custom tracking experiences" and a "**Sandbox environment for testing**" [V].
- **Pattern:** Chowdeck upsells logistics to restaurants that already sell through its marketplace. Doorbell can do the same with its existing restaurant and shop partners.

**Pricing.**
- "**Pay per delivery. No subscriptions, hidden fees, or minimum volumes.**"
- Fee is distance-based and shown before confirming ([help article, Jun 2026](https://help.chowdeck.com/en/articles/15581730-what-is-delivery-fee)).
- Launch promo: ₦500 off the first Relay (code USERELAY).
- No rate card published.

**Process.**
- Same-day across Lagos.
- Claims a "99.2% delivery success rate with real-time tracking your customers can follow."
- The flow tells users to insure the package (step 2 of 8).
- A third-party guide mentions a delivery PIN [3P].
- Scale claim: "from 10 deliveries a day to 10,000."

---

### 2.4 Fez Delivery: SME and corporate courier (Lagos plus nationwide)

**Tiers on the pricing page** ([fezdelivery.co/pricing](https://www.fezdelivery.co/pricing)) [V]:
- **SMEs**: "Talk to Sales", prioritised support, flexible pricing, insurance.
- **Corporate**: "**Signed SLA, Dashboard & API, Volume-based pricing**."

**Payment.** Wallet funded by card, bank, USSD or transfer, and "**we offer a post-paid plan for SMEs and Corporates**" [V].

**How it works** ([fezdelivery.co/sme](https://www.fezdelivery.co/sme)) [V]:
1. Sign up.
2. Create an order request.
3. Pay and track.
4. Get confirmation.

There is also an instant "Get a quote" form (pickup, drop-off, delivery type).

**Service levels** [V]: Lagos within 24 hours; South West 1–3 working days; rest of Nigeria 3–5 days.

**Fez Safe Lockers:** "For just **N699**, you can easily pick up your packages… from our smart lockers" (home page) [V]. An earlier article said ₦999 ([The Founder](https://thefounder.africa/fez-delivery-revolutionizes-logistics-with-fez-safe-lockers-in-nigeria)).

**Prices.**
- 0–5 kg was ₦2,500, with a planned rise to ₦3,075 (+23%) because of losses ([TechCabal](https://techcabal.com/ar/?p=143608)) [OLD/UNV date].
- Pricing is "based on distance and type of item".

**Vertical landing pages:** "Fez for Fintech / E-commerce / Pharma / Beauty". A good pattern for Doorbell's segments (restaurants, pharmacies, Instagram sellers, coaches).

---

### 2.5 Sendbox (aggregator, briefly)

- "Deliveries for e-commerce and social commerce sellers"; segments are spelled out as "Do you own your own physical store, e-commerce website or **you sell on Instagram**?" ([sendbox.co](https://sendbox.co/)) [V].
- Channels: app, web, WhatsApp, Facebook, Instagram, API ([TechCrunch 2021](https://techcrunch.com/?p=2219161)) [OLD].
- Offers escrow payments for social sellers ([brands.ng](https://brands.ng/?p=2091)) [3P].
- **Pain point:** quality varies by the courier assigned.
- No public rates.

### 2.6 Egypt (only clearly relevant item)

**Bosta** is a COD-heavy e-commerce courier. Its Shopify listing advertises **next-day COD transfers** ([Shopify](https://apps.shopify.com/bosta-shipping-app)) [3P]. A reported late-2025 move to 24-hour instant payouts is unverified. It shows that **COD payout speed is a headline selling point** in cash-heavy markets.

---

## 3. Cross-cutting patterns

### Onboarding spectrum
1. **Zero-account walk-in:** Paxi buy-a-bag, Pudo kiosk.
2. **Self-serve with prepaid wallet or card:** GIGL GIGGo wallet, Kwik, Chowdeck, Bob Go pay-as-you-go, Picup with card.
3. **Self-serve plus subscription tier:** Bob Go R249–R1,999/mo, GIGL CLASS ₦4,500/mo.
4. **Sales-led post-paid / monthly invoice:** Picup monthly account, Fez post-paid with signed SLA, Uber Direct enterprise, TCG credit accounts.

KYB is light at the bottom tiers: GIGL explicitly needs no registered company. Credit terms are reserved for sales-led accounts.

### Integration ladder
1. Dashboard
2. CSV / bulk upload (Picup, Shiplogic, Paxi Portal)
3. WooCommerce / Shopify plugin with **checkout rates or pickup-point picker** (Bob Go, Pargo, Paxi widget, TCG, GIGL, Kwik)
4. API with webhooks and a sandbox (Chowdeck, Picup, Uber, Shiplogic)
5. White-label tracking (Uber, Shiplogic, Bob Go paid plans)

WhatsApp is used for tracking and claims (Paxi, Shiplogic, Picup notifications) more than for booking.

### Pricing models
- **On-demand intra-city:** distance or per-km, varying by vehicle (Picup, Uber, Kwik, Chowdeck). Rates are rarely published. Kwik's "from ₦400" and Uber's old "R4.08/km" are the exceptions.
- **Parcel networks:** **size-band flat prices** (Paxi bags; Pudo XS–XL), optionally crossed with speed (Paxi 3–5 versus 7–9 days; TCG Economy versus Overnight).
- **Surcharges seen:**
  - Failed delivery due to a bad address (Picup)
  - Demurrage on uncollected parcels (GIGL ₦500/day after 3 days)
  - Peak hours (Picup, early)
  - Per extra kg or box (TCG)
  - Home delivery versus pickup-point premium (Paxi store-to-home is +R10 over the 3–5-day store-to-store bag and +R60 over the 7–9-day bag; GIGL home +₦700; Pudo locker-to-door +R24 to +R103)
- **COD:** free on paid tier (GIGL CLASS); minimum item value ₦5,000 (Kwik); remittance 24 hours (Kwik), next day (Bosta) or 3–4 business days (GIGL).
- **Insurance:**
  - Free baseline cover: R500 Paxi; R1,000 TCG, Pargo, Fastway; ₦30k–₦100k GIGL by tier; ₦500k Kwik via Allianz.
  - Cheap top-up: Paxi R10 for R2,500 cover.
  - Payout is at cost or declared value, never retail.
  - Short claim windows (48 hours).

### Delivery process norms
- **Cut-offs:** 10:00 for same-day local, 14:00–14:30 for overnight (TCG); 15:00 for next-day (Paxi Express); pickup requests 06:00–18:00 (GIGL); operating hours Mon–Sat 08:00–17:00 (Kwik).
- **Proof of delivery:** OTP/PIN plus ID for pickup points (Paxi, Pargo); PIN, signature or photo with geotag (Shiplogic); electronic POD (Picup).
- **Failed delivery:** return to sender after an 8-day hold (Pargo) or 14 days (Paxi); 3 free attempts then charged (GIGL reverse logistics); refund if not executed (Kwik).

### Landing-page structure observed
- **Hero:** outcome headline plus one-line explainer plus two CTAs ("Start free trial" / "Book a demo"; "Let's do business"; "Get a quote").
- **Proof bar:** numbers such as "6,000+ merchants · 3m+ parcels · 99.9% uptime" (Bob Go), "4000 points · 1.25 days avg · 4.9/5 from 42,000 reviews" (Pargo), "99.2% success rate" (Chowdeck).
- **How it works in 3–4 steps:** Bob Go (Sign up, Connect store, Ship & track); Pargo (Shop, Select point, Collect); Paxi (Find point, Buy bag, Provide info, Track); Fez (Sign up, Create order, Pay & track, Get confirmation).
- **Segment or vertical cards:** Bob Go (Online stores / Side hustlers / Small businesses / Individuals); Fez (Fintech / E-commerce / Pharma / Beauty); Sendbox (Offline, online and social sellers / Retailers / Marketplaces).
- **Pricing presentation:**
  - (a) Full **rate table by size and speed** with plain-language size cues: Paxi's "a standard pillow fits".
  - (b) **SaaS plan cards**: Bob Go (Free trial / Pay-as-you-go R0 / Paid R249–R1,999) and GIGL (Basic vs CLASS benefits).
  - (c) **"From X" plus a quote form**: Kwik "from ₦400", Fez "Get a quote", TCG "Quick Quote".
  - (d) "Talk to sales" tiers for corporates (Fez).
  - No one publishes a per-km on-demand rate card; it is always an in-app quote.
- **Insurance and claims** get their own section (Paxi, GIGL "Declare it. Protect it.").

---

## 4. Implications for Doorbell (Malawi)

1. **Publish a rate card with fixed sizes, not just a quote engine.**
   - Lilongwe intra-city: a "from MK X" headline plus 3–4 size bands (document/flyer, small, medium, large), with a calculator for distance zones.
   - Inter-city via coach partners: a Paxi-style fixed price per bag or box size and speed (e.g. "same-day coach" versus "next-day"), with drop-off and collection at depots or partner shops and pickup by PIN.
2. **Run two onboarding paths:**
   - Instant self-serve with a prepaid wallet topped up by Airtel Money or TNM Mpamba. No company registration needed, as GIGL does it.
   - A sales-led post-paid monthly invoice with an SLA for corporates, pharmacies and chains, as Picup and Fez do.
   - Optionally add a low-cost "Business" subscription that cuts per-drop rates and waives the COD fee, modelled on GIGL CLASS at ₦4,500/mo (about $3).
3. **Make COD / mobile-money collection and payout speed a headline promise:** e.g. "your customers' money in your Mpamba/Airtel wallet within 24 hours", as Kwik and Bosta do. Publish the COD fee, a minimum order value and the remittance timing.
4. **Standardise proof of delivery and failure rules, and publish them:**
   - OTP/PIN to the recipient, plus photo, plus a GPS pin.
   - WhatsApp status at each stage.
   - Define "failed attempt" and its fee, a free re-attempt count, a hold period at depot, and return-to-sender.
   - Free baseline cover (e.g. MK equivalent of about $20–50) with a cheap top-up voucher and a 48-hour claim window.
5. **Upsell existing app merchants (the Chowdeck Relay play).** Turn Doorbell's consumer-era restaurants and shops into DaaS customers through the dashboard they already use. Then add CSV upload, a WooCommerce plugin, and an API with webhooks for e-commerce.
6. **Consider buying a TMS** (Shiplogic-style white-label: map zones, PIN/photo POD, wallet plus invoicing, customer portal) rather than building every piece.

---

## 5. Open gaps (not verified)

- Picup published rates, and its onboarding KYB requirements.
- TCG current (2025–26) door-to-door rates and credit-account requirements.
- Current Pudo price list (the size table above is undated).
- Pargo per-parcel rate.
- Uber Direct SA 2025–26 rates.
- Kwik's current minimum fare, and whether ₦400 still applies.
- GIGL official domestic rates.
- Chowdeck Relay price per km.
- Fez current rates.
- GIGL's COD fee for Basic-tier merchants.
