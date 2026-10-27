# B2B last-mile delivery: East and Southern Africa (excluding South Africa)

Research for Doorbell (Lilongwe, Malawi), which is pivoting from a consumer delivery app to delivery-as-a-service for businesses. Compiled 26 Oct 2026.

**How to read this:**
- Every concrete number has a source URL next to it.
- **[UNVERIFIED]** means the figure comes from a third-party blog or directory, an app-store user review, or a search snippet I could not open in full.
- **[DATED]** means the source is from before 2024.
- USD conversions are rough. I used KES ~130/USD, which matches TechCabal's Nov 2025 conversion of KES 160 = $1.23. For Malawi I used MWK ~1,750/USD at the official rate. Parallel-market rates in Malawi are much weaker, so check them before quoting.

**The big caveat.** Almost none of the incumbent couriers in this region publish rate cards. G4S, Fargo, CTS, Speed, Swift and Smart Deliveries all work through "Get a quote", "call the branch" or "contact sales". Online data for Malawi players is especially thin. Doorbell should mystery-shop the Lilongwe competitors by phone or WhatsApp. The gap is also an opportunity: published, transparent pricing is a real way to stand out.

---

## 0. Status check of the candidate list

| Player | Country | Status (Oct 2026) | Notes |
|---|---|---|---|
| Sendy | Kenya | **Dead.** Went into administration in Sept 2023 | See §2 for why |
| Pick Up Mtaani | Kenya | **Operating, growing** | Agent-network model; the most transferable to Doorbell |
| Fargo Courier | Kenya / East and Central Africa | Operating | Sales-led; no public prices |
| G4S Courier | Kenya (also licensed in Malawi) | Operating | Sales-led; COD offered case by case |
| Jumia Logistics / "Jumia Delivery" | Kenya and others | Operating; public parcel service live in Kenya by Nov 2025 | Asset-light: 80%+ of 300+ pickup stations are run by partners |
| Glovo | Kenya, Uganda | Operating. **Uber is acquiring Delivery Hero (including Glovo Kenya)**, announced Jul 2026, expected to close H2 2027 | Has a Logistics-as-a-Service (LaaS) API for businesses |
| Bolt Send | Kenya (Sept 2025), Tanzania (Sept 2024) | Operating | Consumer and SME on-demand parcel in the Bolt app |
| Bolt Food | Kenya | Operating in Kenya. Exited Nigeria and South Africa in Dec 2023 | |
| Yango Delivery | Zambia (Lusaka, Copperbelt) | Operating | Courier and "Cargo" tariffs; Cargo Express for large items |
| SafeBoda | Uganda | Operating in Uganda. **Exited Kenya (paused Nov 2020) and Nigeria (Dec 2022)** | Launched a B2B portal in Mar 2026 |
| Lori Systems | Kenya, Nigeria, Uganda | Alive but distressed. Raised $2M at a $5M valuation in Apr 2025, down from a $120M peak | Freight, not last-mile; working-capital lesson |
| Amitruck | Kenya | Unclear. No news after its $4M seed in Feb 2022 | Freight; not researched further |
| Wasili | Kenya | **Not a delivery company.** It is a taxi-hailing app | Dropped |
| "Kwanji" | — | Nothing found under this name | Possibly confused with Jumia Logistics |
| Musanga Logistics | Zambia | Probably dead. CB Insights lists it as "Dead"; last solid news is old | Lusaka merchant delivery in 1–3 hours [UNVERIFIED status] |
| CTS Courier | Malawi | Operating; 30 branches | Market leader by branch count |
| Speed Courier | Malawi | Operating; MACRA "Domestic Commercial" licensee | Website blocked by a Cloudflare challenge; no data |
| Swift Courier | Malawi | Operating; expanding in 2025 | Promises next-day by 8 a.m. |
| Smart Deliveries | Malawi | Operating; 4 points | "MzaDigito" tracking |
| AXA / Sososo / Kwezy (coach parcels) | Malawi | Sososo and Kwezy are MACRA "Inter-City" licensees | No pricing online |
| DHL Express | Malawi, Kenya | Operating, international only | MACRA lists DHL under International |

---

## 1. Pick Up Mtaani (Kenya). The model to study most closely

**What it is:** Last-mile logistics for small online sellers (Instagram, TikTok, Jumia, own sites) built on a network of **neighbourhood shop agents** that act as parcel collection points, plus doorstep delivery, "errands" to bus couriers, and shelf rental in the CBD. It was founded in May 2020 by Ken Okiya and Robert Mwalugha, who started by delivering door to door on motorbikes themselves. [HapaKenya, Jul 2021, DATED](https://hapakenya.com/2021/07/21/how-pick-up-mtaani-is-thriving-in-the-kenyan-e-commerce-delivery-space/)

**Scale claims (company):**
- 25k+ small businesses, 100k+ shoppers, 1M+ packages, KES 500M+ GMV, 150+ collection points. [pickupmtaani.com](https://new.pickupmtaani.com/)
- The FAQ on the same site says "190+" agents. [site JS bundle, FAQ](https://new.pickupmtaani.com/)
- The Play Store listing claims "50,000+ sellers" and shows 50K+ downloads, updated 24 Jul 2026. [Google Play](https://play.google.com/store/apps/details?id=com.pum_vendor&hl=en&gl=ke)

### Onboarding
- **Self-serve vendor app** (Android and iOS) with M-Pesa payment of delivery fees. There is no sales call. [App Store](https://apps.apple.com/ke/app/pickup-mtaani/id6448919500)
- One account can hold an unlimited number of businesses. [App Store](https://apps.apple.com/ke/app/pickup-mtaani/id6448919500)
- **API** exists (REST; docs at api.pickupmtaani.com/api/v1/docs/), with this access process:
  - You must already have a registered business account.
  - You email support from the registered email address with your business name and phone.
  - "Integration handled by PickupMtaani's team" costs a **flat KES 20,000 (~$155)**.
  - No Shopify or WooCommerce plugin is mentioned.
  - [pickupmtaani.com/api](https://new.pickupmtaani.com/api)
- **Original no-tech flow (2021):**
  1. The seller offers "Pick Up Mtaani" at checkout.
  2. The buyer names their preferred agent in the order notes.
  3. The buyer pays, and the seller drops the parcel at a collection point.
  4. The buyer gets an **SMS with a unique code** and shows it to collect.
  - [HapaKenya](https://hapakenya.com/2021/07/21/how-pick-up-mtaani-is-thriving-in-the-kenyan-e-commerce-delivery-space/)

### Pricing
- **2021:** flat **KES 100** within Nairobi County (~$0.77); **KES 200–250** to other counties. [HapaKenya, DATED](https://hapakenya.com/2021/07/21/how-pick-up-mtaani-is-thriving-in-the-kenyan-e-commerce-delivery-space/)
- **Later press report:**
  - Agent-to-agent **Sh200**.
  - CBD-to-agent from **Sh100**.
  - Outer-town to outer-town (e.g. Ruaka to Kitengela) **Sh180**, next day.
  - [Standard, via search snippet; article paywalled, UNVERIFIED](https://www.standardmedia.co.ke/counties/article/2001398085/boda-bodas-inspired-our-business)
- **Current (2026):** "Nairobi delivery starts at just **KES 120**" (~$0.92). [Google Play listing](https://play.google.com/store/apps/details?id=com.pum_vendor&hl=en&gl=ke)
- **Third-party 2026 estimate:** agent-to-agent KES 100–200 within Nairobi; KES 200–400 to other major towns; 1–2 days. [MyDuka blog, Apr 2026, UNVERIFIED](https://myduka.link/blog/courier-services-kenya-comparison)
- **Storage / late fee:** packages older than **10 days** from dispatch accrue **KES 100/day**, payable before collection. [Terms](https://new.pickupmtaani.com/terms)
- **Wallet withdrawal fee:** users report a KES 29 charge. [App Store reviews, UNVERIFIED](https://apps.apple.com/ke/app/pickup-mtaani/id6448919500)
- **Payment channels:** agent deliveries are paid in the app or on the website; doorstep deliveries go to M-Pesa Till 5684653. [Terms](https://new.pickupmtaani.com/terms)
- **Rent-a-shelf:** "monthly fee per shelf or daily rate per package". No amounts are published. [FAQ](https://new.pickupmtaani.com/)

### COD / pay-on-delivery
- The site promises "Fast, Reliable, **Pay on Delivery**" and "instant withdrawals from your Pickup Mtaani **pochi** [wallet] when our delivery agent collects your payment". [pickupmtaani.com](https://new.pickupmtaani.com/)
- Remittance therefore goes to an **in-app wallet the seller withdraws instantly** (presumably to M-Pesa). A withdrawal fee is reported (see above).

### Delivery process (from the site FAQ)
**Two dispatch shifts a day from the CBD:** 10:00–15:00 and 15:00–19:00.

**Cut-offs when a seller drops at a "Mtaani" (neighbourhood) agent:**
- Dropped before 10 a.m.: picked up 10:00–15:00, delivered 15:00–19:00 the same day.
- Dropped after 2 p.m.: next-day delivery.
- Dropped 10 a.m.–4 p.m.: collected in the evening, delivered the next day 10:00–15:00.
- Dropped after 5 p.m.: delivered the next day 15:00–19:00.

**Collection window and returns:**
- The buyer has **3 days** to collect from the agent.
- After that the parcel goes back to the main office and the receiver is notified to collect within **7 days**.
- They are then re-notified with a further 3 days, and after that the parcel is disposed of.
- The terms say senders get 7 days to collect returns and that uncollected returns are disposed of after 30 days. [Terms](https://new.pickupmtaani.com/terms)

**Notifications and proof of collection:**
- SMS code for collection; "Uber-like delivery tracking and alerts for customers"; tracking by package code on the website.

**Liability:**
- Capped at **KSh 2,000 per claim (~$15)**.
- Claims must be made in writing within **10 days**.
- Fragile items travel at the sender's risk.
- Refund claims need **M-Pesa statements from both buyer and seller plus a screenshot of the product on the seller's Instagram/Facebook**.
- [Terms](https://new.pickupmtaani.com/terms), [FAQ](https://new.pickupmtaani.com/)

**Prohibited items:** money; food, flowers and groceries; electronics (phones, laptops, TVs); bulky items; pets. So the service is built around **small, non-perishable fashion, cosmetics and shoes parcels**. [FAQ](https://new.pickupmtaani.com/)

**Damage reporting:** must happen while the buyer is still at the agent, with photos sent via DM, WhatsApp or a call.

**Hours:** Mon–Fri 8:30–19:00, Sat 9:30–18:00, closed Sunday.

**"Errands":** Pick Up Mtaani drops parcels at the buyer's chosen **bus courier ("Easy Coach, 2NK", etc.)** for upcountry delivery. This is a direct analogue to AXA, Sososo and Kwezy coach parcels in Malawi. [FAQ](https://new.pickupmtaani.com/)

### Landing-page messaging
- "Manage All Your Deliveries Under One Roof"
- "Grow your Online Business all over Kenya with our Affordable Delivery Services"
- "Fast, Reliable, Pay on Delivery."
- "Uber-like delivery tracking and alerts"
- Play Store: "without the stress of unreliable riders or hidden courier fees"; "Avoid long queues, lost parcels, and cash mix-ups"
- Social proof built on volume stats (25k businesses, 1M packages)

### Why it wins, and its weaknesses
**Wins:**
- Very low price points made possible by consolidating to agents rather than going door to door.
- The neighbourhood shop is both pickup point and drop-off point.
- Positioned explicitly for **Instagram sellers**.
- COD wallet.
- Founder-led hustle.

**Weaknesses:**
- App Store rating **2.7/5 from 80 ratings**.
- Reviews cite app crashes, rude riders, delays, unclear status updates and "high fees". [App Store](https://apps.apple.com/ke/app/pickup-mtaani/id6448919500)
- Liability is very low and the claims process is burdensome.

**Lesson for Doorbell:** price and agent density win the volume, but the trust UX (status clarity, rider behaviour) is where Doorbell can beat them.

---

## 2. Sendy (Kenya). Failure case study

### What it offered (useful for copying)
**On-demand pricing by distance:**
- Motorbike **KSh 250 for the first 7 km + KSh 30/km** after. [HapaKenya 2019, DATED](https://hapakenya.com/2019/04/02/sendy-lowers-charges-by-80-in-a-bid-to-attract-and-retain-clients)
- Pickup or van KSh 1,500 for 5 km; 3-tonne truck KSh 4,500 for 20 km. [HapaKenya 2018, DATED](https://hapakenya.com/2018/08/14/delivery-service-sendy-reduces-its-prices-for-pickup-van-truck-deliveries)

**Batched "Standard" tier (2019):**
- Same-day, **flat KSh 250 anywhere in Nairobi**.
- The rider batches up to **3 packages per route**; delivery in roughly 2–4 hours.
- Aimed at businesses doing several deliveries a day.
- Sendy framed it as an 80% cost cut. [HapaKenya](https://hapakenya.com/2019/04/02/sendy-lowers-charges-by-80-in-a-bid-to-attract-and-retain-clients)
- This **express vs. batched standard** split is a strong, simple pricing architecture for Doorbell.

**Fulfilment (Nov 2021):**
- **13% of product selling price**, covering pickup, pick/pack/ship, **3 delivery attempts**, **60 days storage** and inventory tracking.
- Vendor financing was also on offer.
- At the time a normal Nairobi delivery cost Sh300–1,000.
- [TechTrends KE](https://techtrendske.co.ke/2021/11/18/sendy-targets-online-retailers-with-a-new-fulfillment-service/)

**Integrations (Nigeria, 2023):** orders came in via "e-commerce plugins, ERPs, or APIs". [TechCrunch, Feb 2023](https://techcrunch.com/2023/02/03/more-job-cuts-loom-as-sendy-changes-course-in-nigeria)

**Scale:** 5,000+ businesses signed up by 2018. [Business Daily, DATED](https://www.businessdailyafrica.com/bd/corporate/companies/sendy-signs-up-5-000-firms-for-delivery-service-2206006)

### Why it failed
**Funding dependency:**
- Disclosed raises totalled about $26.5M (Toyota Tsusho, Atlantica, Keppel; the 2020 Series B was $20M).
- It targeted a **$100M raise in 2022** and got only a fraction, from MOL PLUS.
- One major investor pulled out, leaving it without payroll money for months.
- [TechCrunch](https://techcrunch.com/2023/02/03/more-job-cuts-loom-as-sendy-changes-course-in-nigeria), [Techpoint](https://techpoint.africa/news/sendy-ceasing-operations-selling-assets)

**Missed growth targets:** in Oct 2022 the CEO told staff that GMV over the prior three months was **65%** of where it needed to be and revenue about **44%** of target. He also said contribution margins and take rates were "moving in the right direction". [search summary of TechCrunch/TechCabal/Techloy coverage](https://www.techloy.com/kenyan-logistics-startup-lays-off-20-percent-of-its-remaining-staff/)

**Too many products and markets:**
- On-demand marketplace, then a B2B-only pivot.
- Then **Sendy Supply** (an FMCG B2B marketplace), shut in Oct 2022.
- Then **Fulfilment**, plus a freight service and a ride-hailing unit.
- Then Nigeria, where it built an **asset-heavy** pickup, warehousing and last-mile operation, suspended in Feb 2023. [TechCrunch](https://techcrunch.com/2023/02/03/more-job-cuts-loom-as-sendy-changes-course-in-nigeria)

**Burn:** reportedly **up to ~$1M/month** at its worst. [Daba Finance / TechCabal via search, UNVERIFIED](https://dabafinance.com/en/news/kenyan-logistics-firm-sendy-enters-into-administration)

**COVID hit its core clients:** manufacturing and retail clients were hit hardest. [Daba Finance](https://dabafinance.com/en/news/kenyan-logistics-firm-sendy-enters-into-administration)

**Layoffs:** ~10% (≈30 people) in mid-2022, then 20% (54 of 270) in Oct 2022.

**End:** Aug 2023 "in the middle of an acquisition process" (Meshack Alloys). No buyer was found, and the company went into **administration on 27 Sept 2023** (Peter Kahi, PKF Consulting). [Daba Finance](https://dabafinance.com/en/news/kenyan-logistics-firm-sendy-enters-into-administration)

**Lessons:**
1. Do not build a VC-scale cost base on thin per-delivery margins.
2. Do not chase adjacent products (supply, freight, rides, fulfilment financing) before the core delivery unit is profitable.
3. Asset-heavy warehousing is a separate business with different capital needs.
4. Diversify customer segments: Sendy's manufacturing and retail clients collapsed together in COVID.

---

## 3. SafeBoda (Uganda). Rider network to B2B portal

**Status:**
- Operating in Uganda.
- Exited Kenya (paused Nov 2020, citing COVID and competition) and Nigeria (Dec 2022: "margins too thin" despite positive unit economics; refocus on profitable Uganda). [The EastAfrican](https://www.theeastafrican.co.ke/tea/business/safeboda-exits-nigeria-to-focus-on-profitable-uganda-4044060), [TechCabal](https://techcabal.com/2022/12/01/safeboda-bids-nigeria-farewell/)

**B2B launch:**
- "SafeBoda for Business" platform launched **26 Mar 2026**.
- Covers employee rides, deliveries, airtime/data purchase, real-time spend tracking, and half-day or full-day vehicle bookings.
- Company claims 200+ companies; the business page says "100+".
- The pivot was partly **forced by Kampala's restrictions on passenger boda bodas in the city centre**. Delivery is the regulatory-safe line of business. [AllAfrica](https://allafrica.com/stories/202603270254.html), [WeeTracker](https://weetracker.com/2026/03/30/safeboda-corporate-pivot-kampala-boda-boda-ban/)

**Onboarding:**
- "Create Business Account" and a B2B Client Portal, with a downloadable "SafeBoda Business Manual".
- Billing terms (prepaid vs. invoice) are not published.
- A SafeBoda Uganda blog post (Aug 2026) mentions a **system-to-system integration** that lets enterprises dispatch drivers without the app, plus insured multi-package trips. [search summary, UNVERIFIED](https://www.safeboda.com/safeboda-blog/from-feedback-to-innovation-how-safeboda-is-transforming-mobility-in-uganda)

**Portal features:**
- Dashboard of trips, transactions and staff.
- Price breakdown per trip.
- Add, suspend or delete staff.
- **Trip approval/rejection by an admin**.
- Emergency button and live location sharing.
- [SafeBoda for Business](https://safeboda.com/website-v2/sb-for-business)

**Delivery features:**
- **Multi-stop** in one trip.
- **Item-level tracking notifications**.
- **Up to 15 kg**.
- Insurance for selected products.
- Building, floor and receiver details passed to the rider.

**Pricing:** not published.
- Messaging stresses "**zero tolerance on negotiation**" (fixed upfront prices), which matters in boda markets where haggling is the norm.
- Historic consumer pricing was ~UGX 700/km + UGX 50/min, with a 15% commission. [Techpoint 2018, DATED](https://techpoint.africa/2018/08/16/safeboda-east-africa/)

**Trust messaging:**
- 1.2M+ users and 50M+ rides since 2015.
- 30,000+ trained riders.
- Mandatory background checks (logbook, next of kin, ID).
- Orange safety gear and helmets; traffic-rules training.

**Lesson for Doorbell:** rider vetting and uniforms are part of the product for corporate buyers. An admin portal with staff controls, approvals and spend visibility is what corporates pay for. Mind the regulatory risk on two-wheelers.

---

## 4. Jumia Logistics / Jumia Delivery (Kenya). Asset-light pickup network

**Model:**
- **300+ pickup stations, 80%+ owned and run by third-party logistics partners** (local entrepreneurs, corner shops and community hubs).
- Jumia provides the software and national routing. Partners handle storage, handover and last-mile routing on motorbikes.
- **60% of Kenyan deliveries now go to secondary towns and villages.**
- Rural delivery windows have dropped to **2–4 days**.
- [TechCabal, 18 Nov 2025](https://techcabal.com/2025/11/18/jumias-asset-light-network-kenya/)

**Public parcel service:** "Anyone can now send parcels across Kenya using Jumia's infrastructure", with real-time tracking and hundreds of pickup points, for **KES 160–1,600 ($1.23–12.34)**. [TechCabal](https://techcabal.com/2025/11/18/jumias-asset-light-network-kenya/)

**Earlier offers (2020):**
- Third-party B2B/B2C deliveries with next-day delivery to major cities, same-day in Nairobi, and **cash on delivery**.
- Drop-off at Jumia centres or collection from the client's location.
- [TechTrends KE](https://techtrendske.co.ke/jumia-opens-up-its-logistics-services-to-third-parties/)
- Average rural delivery cost was cited at ~$2.15. [ITWeb, undated, UNVERIFIED](https://itweb.africa/content/LPwQ57lbBP3qNgkj)

**Risk TechCabal flags:** the model pushes fuel-price and road risk onto thin-capital micro-entrepreneurs. Bulky items such as TVs stress it.

**Lesson for Doorbell:** you can recruit existing shops (pharmacies, phone shops, Airtel/TNM agents) as franchised pickup points instead of opening branches the way CTS does.

---

## 5. On-demand platforms: Glovo, Bolt Send, Yango

### Glovo (Kenya, Uganda)
**Scale:**
- Kenya: 12 towns, 6,000+ merchants, ~2,200 riders daily.
- KES 10bn investment plan to 2030; orders +40% in 2025.
- [The Star](https://www.the-star.co.ke/business/2026-05-09-glovo-to-invest-sh10-billion-in-kenya-by-2030), [Capital FM](https://capitalfm.africa/glovo-to-invest-sh10bn-in-kenya-by-2030/)
- Competition Authority of Kenya (CAK) market study shares: Glovo **33% of food delivery and 46% of grocery**, ahead of Uber Eats (21%) and Bolt Food (16%). [Techweez](https://techweez.com/2026/07/17/uber-buys-out-glovo-its-biggest-rival-in-kenyas-delivery-market/)

**Corporate events:**
- **Uber is acquiring Delivery Hero**, including Glovo Kenya (announced Jul 2026; the CAK must clear it; expected close H2 2027).
- Merchants are worried about commission leverage once there is one dominant platform.
- Jumia Food exited Kenya in Dec 2023. [Techweez](https://techweez.com/2026/07/17/uber-buys-out-glovo-its-biggest-rival-in-kenyas-delivery-market/)

**B2B / white-label:**
- Glovo runs a **Logistics-as-a-Service (LaaS) Partners API** in Kenya (Nairobi, Mombasa, Nakuru, Kisumu, Eldoret, Thika, Kiambu, Kitengela, Ngong, Rongai).
- Features: OAuth client credentials; `/v2/laas/quotes` for pricing; create parcel; tracking with courier position; cancel; webhooks (STATUS_UPDATE, POSITION_UPDATE).
- Prices are in KES; the rate card is not public.
- Source: a third-party Odoo connector listing. [Odoo Apps](https://apps.odoo.com/apps/modules/18.0/carrier_glovo_dispatch)

**Regulation:** Kenya's Communications Authority created a **"Courier Hailing Service Provider" licence** (effective 29 Jul [2026]) that applies to delivery platforms. [Techweez](https://techweez.com/2026/07/17/uber-buys-out-glovo-its-biggest-rival-in-kenyas-delivery-market/)

**Consumer subscriptions (context for restaurant clients):**
- Glovo Prime KSh 400/month.
- Bolt Plus KSh 280/month (free delivery up to KSh 200/order).
- Uber One KSh 280/month.
- [TechTrends KE, Oct 2026](https://techtrendske.co.ke/2026/10/19/bolt-plus-subscription-kenya/)

**Lesson:** restaurants dislike marketplace commissions. A flat-fee **"your customers, your brand, our riders"** offer is the counter-position Doorbell can take with Lilongwe restaurants.

### Bolt Send (Kenya Sept 2025; Tanzania Sept 2024)
- Parcel delivery inside the existing Bolt app.
- Price estimate based on **distance and demand** (surge); vetted drivers; real-time tracking.
- Kenya: Nairobi first, with Mombasa and Kakamega planned for phase 2; intercity "pending uptake".
- Positioned against Fargo and G4S, which serve corporates and cross-county logistics.
- Messaging: "making last-mile delivery as seamless as booking a ride"; "faster, more affordable, and fully trackable".
- Published prices, weight limits and proof of delivery not found.
- [Business Daily](https://www.businessdailyafrica.com/bd/corporate/companies/bolt-eyes-mombasa-kakamega-with-parcel-delivery-services-5203544), [HapaKenya](https://hapakenya.com/2025/09/23/bolt-launches-new-parcel-delivery-service-in-kenya/), [The Citizen TZ](https://www.thecitizen.co.tz/tanzania/business/bolt-diversifies-into-courier-delivery-services-in-tanzania-4747376)

### Yango Delivery (Zambia)
- Live in Lusaka; food delivery since 2023, extended to Ndola and Kitwe.
- **"Cargo" tariff** for businesses and individuals.
- **Cargo Express** for large items: mover's help, **10 free minutes of loading/unloading**, upfront pricing.
- Pays partner couriers with gamified awards based on deliveries, hours online and ratings.
- Yango for Business corporate accounts exist for rides in Zambia (departments, order history, invoices). A delivery-specific corporate contract flow was not found.
- No ZMW prices found.
- [Zambia Monitor Dec 2024](https://www.zambiamonitor.com/?p=54258), [Wikipedia: Yango Group](https://en.wikipedia.org/wiki/Yango_Group), [Yango Business ZM support](https://yandex.com/support/taxi-business-zm/en/start)

**Lesson:** a free-waiting-time allowance plus per-minute waiting charges is the standard way to price loading time. Copy it for restaurant and pharmacy pickups.

---

## 6. Traditional couriers in Kenya: G4S Courier and Fargo Courier

These are the closest analogues to CTS, Speed and Swift in Malawi.

### G4S Courier Kenya
**Onboarding:** sales-led ("get in touch with our sales team"). COD is "tailor made" per online seller rather than self-serve. [G4S insight, search summary](https://www.g4s.com/news-and-insights/insights/2021/05/05/how-g4s-became-the-largest-courier-company-in-kenya)

**Pricing:**
- Route-based rate table from Nairobi, inclusive of **16% VAT and fuel surcharge**: e.g. Embu KSh 420, Eldoret KSh 456, Diani KSh 797. [Kenya Times, Sept 2024, page blocked; figures from search snippet, UNVERIFIED](https://thekenyatimes.com/featured/g4s-parcel-delivery-rates-in-kenya/)
- 2026 estimates: Nairobi–Nairobi KSh 250–500; county–county KSh 400–800; next-day countrywide. [MyDuka, UNVERIFIED](https://myduka.link/blog/courier-services-kenya-comparison)

**History:** offline Jumia pickup points at G4S centres (2015), with cash or mobile-money payment at pickup. [ITWeb](https://itweb.africa/article/jumia-g4s-partner-to-deliver-online-purchases/JBwEr7nB5lo76Db2)

**Malawi:** G4S Courier holds a MACRA **Domestic Commercial** licence in Malawi. [MACRA](https://macra.mw/postal-courier-licensee/)

### Fargo Courier (Kenya; "East & Central Africa")
- Headline: "Providing transport and logistics solutions across East & Central Africa."
- Services: parcels and documents, freight, warehousing, insurance, an e-commerce "delivery and returns solution"; claims a fleet of 650 vehicles.
- Onboarding: "Customer Portal Login → Register Now" leads to a contact form; "Get Quote"; **no public prices**. [fargocourier.co.ke](https://www.fargocourier.co.ke/)
- 2026 blog estimates: county–county KSh 250–600; >5 kg KSh 500–1,200; doorstep add-on +KSh 150–300; next-day branch collection. [MyDuka, UNVERIFIED](https://myduka.link/blog/courier-services-kenya-comparison)
- Frost & Sullivan cited a 95% within-24-hour delivery success rate. [PR Newswire, DATED](https://www.prnewswire.co.uk/news-releases/frost--sullivan-commends-fargo-couriers-rise-to-prominence-in-the-east-african-courier-industry-582065521.html)

**Lesson:**
- Incumbents win corporates on branch networks, insurance and invoicing, and they lose SMEs on opacity.
- The "doorstep add-on" structure (branch-to-branch base plus a door-delivery surcharge) is the norm.
- A Lilongwe last-mile operator can be the **doorstep layer** for intercity couriers rather than competing with them.

---

## 7. Malawi landscape

### Regulation (important)
MACRA licenses courier operators under the Communications Act 2016. Current categories ([MACRA licensee list](https://macra.mw/postal-courier-licensee/)):

| Category | Scope | Current licensees |
|---|---|---|
| Domestic Commercial Courier | All districts | Ampex, G4S, Speed Courier |
| Domestic Inter-City Commercial Courier | Blantyre/Zomba/Lilongwe/Mzuzu | SOSOSO, Kwezy Bus Courier, Ankolo.com |
| **Domestic (District/One City/Intra-City) Commercial Licence** | One city | **"No licensed operators currently"** |
| International | Import/export | DHL, FedEx, Aramex (Glens), others |

**Enforcement and fees:**
- Operating without a licence breaches **Section 122**: fine of **K1 million** or 2 years in prison.
- Police said (2022) they planned roadblock checks.
- DHL Malawi said international couriers pay **1.5% of revenue + $15,000/yr** in licence fees. [Nation, May 2022, DATED](https://mwnation.com/courier-operators-hail-macras-move/)

**Digital compliance:** in 2026 MACRA is building a digital "Postal Regulatory Compliance System", and DHL is lobbying against illegal operators. [ITWeb, Jun 2026](https://itweb.africa/article/malawi-moves-to-digitise-courier-sector/KzQenvjyPpWqZd2r)

**Implication for Doorbell:**
- An intra-city courier licence is likely required for B2B parcel delivery.
- **No one appears to hold that licence**, which is a potential first-mover moat and a risk if Doorbell operates without one.
- Verify directly with MACRA.

### Informal competition
Speed Courier (2022): "many people now send parcels through bus and minibus operators and private vehicles". Lilongwe police get daily complaints about lost or delayed parcels. [Nation](https://mwnation.com/courier-operators-hail-macras-move/)

The real competitor for Instagram sellers is the **informal minibus/boda plus WhatsApp** combination, not CTS.

### Players
**CTS Courier**
- **30 branches nationwide**, the widest network.
- 5 new branches in May 2025: Lilongwe Gravity Mall, Chitipi, Bunda; Blantyre Ginnery Corner; Zomba 3 Miles. [Nation, May 2025](https://mwnation.com/cts-courier-expands-network-with-five-new-branches/)
- Planned digital system from 1 Apr 2025: mobile app, online booking and payment, real-time tracking, instant notifications. [Nation via search summary](https://mwnation.com/?p=382798)
- Described as Malawi's "top domestic logistics provider", with a focus on **same-day delivery** and "stable pricing". [Nation, Mar 2026](https://mwnation.com/cts-leads-malawis-courier-sector-after-strong-2025/)
- Won Best Local Courier at the BIM Awards 2025.
- No prices published.
- Note: CTS does not appear on MACRA's licensee page (that page may be stale). A "CTC Courier" was gazetted in 2021.

**Swift Courier Services**
- Branches: Malangalanga, Area 23 and Area 25 (Lilongwe); Blantyre (at Nando's); Zomba; Limbe.
- **Promise: next-day by 8 a.m.** MD Cephas Mulauzi: "if you send a parcel today, by 8 a.m. the next day, the recipient should have it."
- Positioning: "We're here to deliver both parcels and promises."
- Mulauzi says customers have **lost confidence in local couriers due to delays and mishandled parcels** (e.g. a Lilongwe→Blantyre parcel took over a week).
- WhatsApp 0893 581 872 is the main channel. [Nation, Jul 2025](https://mwnation.com/swift-courier-opens-new-branches-promises-fast-delivery/), [Nation, May 2025](https://mwnation.com/swift-courier-to-expands-footprint-with-new-branches-in-bt-ll/)

**Smart Deliveries**
- 4 service points (Blantyre CBD, Lilongwe, Mzuzu, Limbe as of Nov 2025).
- **"MzaDigito"** tracking: real-time updates from dispatch to collection.
- MD Dennis Bvalani: "customers don't have to guess where their parcels are or when they will arrive."
- Targets traders, small businesses and commuters. [AllAfrica, Nov 2025](https://allafrica.com/stories/202511250198.html)

**Speed Courier & Logistics**
- MACRA Domestic Commercial licensee; offices in Lilongwe and Blantyre.
- Website speedmw.com sits behind a Cloudflare challenge; no data obtained.

**Coach parcels (AXA, Sososo, Kwezy and others)**
- Sososo and Kwezy are MACRA inter-city licensees.
- **No pricing or process found online.** AXA does not appear in MACRA's list.

**Startups**
- **Spctrm Ltd** (Lilongwe): digital storefront, payments and a driver network for merchants. [VC4A](https://vc4a.com/ventures/spctrm-limited/)
- **Madyo** (Lilongwe food delivery, founded 2021; just over 100 app downloads by Mar 2026). [WeAreTech Africa](https://www.wearetech.africa/fr/fils/solutions/malawi-madyo-connecte-restaurants-et-consommateurs-via-son-app-mobile)
- **adsMalawi** (drop-shipping at a fixed nationwide delivery price). [Gust](https://gust.com/companies/adsmalawi)
- None appears to have meaningful scale. **No one is clearly running Pick Up Mtaani-style B2B last-mile in Lilongwe.**

**Market context:**
- Malawian sellers sell via Facebook, WhatsApp groups, Instagram and TikTok, but "most companies have limited capabilities for supporting online sales transactions".
- Rural roads are hard to use in the rainy season (Nov–Apr).
- [US Trade.gov Malawi CCG](https://www.trade.gov/country-commercial-guides/malawi-ecommerce)

**Recommended next step:** phone or WhatsApp mystery-shop CTS, Speed, Swift, Smart Deliveries, AXA and Sososo for:
- Lilongwe intra-city and LL→BT prices.
- Cut-off times.
- COD availability.
- Liability caps.
- Corporate account terms.

---

## 8. Other markets (thin coverage, low priority)

**Tanzania**
- Social commerce runs on Instagram/WhatsApp, mobile money and boda riders.
- Sellers hire riders per order and add the transport cost to the price. [The Citizen](https://thecitizen.co.tz/tanzania/business/how-online-shopping-is-driving-fast-growing-delivery-business-5555032), [The Chanzo](https://thechanzo.com/2026/09/04/instagram-mobile-money-and-a-boda-tanzanias-e-commerce-economy)
- A consultancy suggests 5 Dar zones from TZS 2,500–3,500 (centre) to TZS 10,000+ plus per-km beyond 20 km. [Kolonell, UNVERIFIED](https://kolonell.com/en/blog/delivery-zone-pricing-map-dar-es-salaam-2026)
- Bolt Send live in Dar since Sept 2024.

**Zambia**
- Yango (above).
- Musanga Logistics: matched merchants with independent cyclists, bikes and trucks for 1–3 hour Lusaka delivery; clients included Pepsi and Dangote; probably dead. [GSMA](https://www.gsma.com/mobilefordevelopment/innovation_fund_map/musanga-logistics/), [CB Insights](https://www.cbinsights.com/company/musanga-logistics)

**Zimbabwe, Mozambique, Rwanda:** no usable B2B last-mile pricing or process data found in this pass.

**Lori Systems (Kenya freight): the working-capital lesson**
- Valuation fell from $120M to $5M.
- The cash-flow strain came from **paying transporters upfront while customers paid late**.
- Now uses bank invoice financing at roughly 8–24% interest. [Daba Finance, Apr 2025](https://www.dabafinance.com/en/news/lori-systems-raises-2m-at-deep-discount-amid-logistics-pivot)
- Direct lesson for any postpaid corporate invoicing Doorbell offers: riders are paid daily, corporates pay in 30–60 days.

**COD benchmarks (weak sources):**
- A 2026 Kenyan guide says COD fees are typically **2–5% of order value**. [Smartbox, UNVERIFIED](https://smartboxcourier.com/how-much-does-courier-delivery-cost-in-kenya/)
- Another blog says 1–3%, with COD return rates of 15–30%. [Kolonell, UNVERIFIED](https://kolonell.com/en/blog/cash-on-delivery-vs-prepaid-ecommerce-kenya-2026)
- DHL reports that 72% of Kenyan online buyers prefer paying in cash on arrival. [DHL, from search snippet, page timed out, UNVERIFIED](https://www.dhl.com/discover/en-ke/e-commerce-advice/e-commerce-trends/the-trust-factor-powering-kenya-s-online-shopping-boom)

---

## 9. Comparison table

| Player | Onboarding | Pricing model + example | Delivery process highlights |
|---|---|---|---|
| **Pick Up Mtaani** (KE) | Self-serve vendor app; M-Pesa; API by email request (KES 20k integration fee) | Flat per-parcel, agent vs doorstep. Nairobi from **KES 120 (~$0.92)**; 2021: KES 100 Nairobi / 200–250 upcountry; storage KES 100/day after 10 days | Two dispatch shifts (10–15, 15–19); drop-off cut-offs; SMS code collection at 150–190 shop agents; 3-day collection window; COD into instant-withdraw wallet; liability cap KES 2,000; bus-courier "errands" |
| **Sendy** (KE, dead 2023) | App + business accounts, later API/plugins | Distance: **KES 250 first 7 km + 30/km**; batched Standard **KES 250 flat Nairobi same-day**; fulfilment 13% of selling price | Batch up to 3 packages; 2–4 h; 3 attempts and 60 days storage in fulfilment |
| **SafeBoda Business** (UG) | Self-serve business account + B2B portal; system integration for enterprises | Fixed upfront fares ("zero negotiation"); rates not public | Multi-stop; item-level tracking; ≤15 kg; insurance on selected items; admin trip approval; vetted, uniformed riders |
| **Jumia Delivery** (KE) | Public sender service plus B2B | **KES 160–1,600 ($1.23–12.34)** per parcel | 300+ pickup stations, 80% partner-run; rural 2–4 days; COD (2020 offer) |
| **Glovo LaaS** (KE) | Partner API credentials (sales-led) | Quote API, KES, distance-based; not public | Webhooks for status and courier GPS; 10 Kenyan cities |
| **Bolt Send** (KE/TZ) | Consumer Bolt app | Distance + demand (surge) | Real-time tracking; vetted drivers; Nairobi and Dar only |
| **Yango Delivery** (ZM) | App; corporate accounts for rides | Upfront tariff; Cargo Express includes **10 free min** loading | Courier and Cargo tiers; movers option |
| **G4S / Fargo** (KE) | Sales team / quote form | Route- and weight-based branch-to-branch, e.g. G4S Nbi→Embu **KSh 420 incl. VAT and fuel**; doorstep add-on | Next-day countrywide; branch networks; insurance; bespoke COD |
| **CTS / Swift / Smart** (MW) | Walk-in branch / WhatsApp; CTS app since 2025 | Not published | Swift next-day by 8 a.m.; CTS 30 branches, same-day focus; Smart's MzaDigito tracking |

---

## 10. Transferable lessons for a Lilongwe B2B delivery service

1. **Publish a simple flat rate card, and offer a cheaper batched tier.**
   - Every Malawi incumbent hides prices; Pick Up Mtaani and Sendy grew on headline flat prices (KES 100–250).
   - Copy Sendy's two tiers: *Express* (on-demand, priced by distance) and *Standard* (batched same-day at a flat Lilongwe price, booked by a cut-off).
   - Copy Pick Up Mtaani's shift-based cut-offs ("drop before 10 a.m. → delivered 3–7 p.m. today").

2. **Build an agent pickup-point network on existing shops instead of branches.**
   - Pick Up Mtaani (150–190 agents) and Jumia (80% of 300+ stations partner-run) show that corner shops, pharmacies and mobile-money agents can be the collection and drop-off layer.
   - It is cheaper than door to door and lets buyers collect on their own time.
   - Combine it with a 3-day collection window and SMS/WhatsApp collection codes.

3. **Make COD and the seller wallet the core product for Instagram/WhatsApp sellers.**
   - Collect via cash or Airtel Money/TNM Mpamba at the door.
   - Credit an in-app wallet the seller can withdraw instantly (Pick Up Mtaani's "pochi").
   - Charge a transparent COD fee (benchmarks suggest 1–5%).
   - Remit fast: speed of payout is the trust signal.
   - Plug into the coach-parcel network (AXA, Sososo, Kwezy) for upcountry "errands", the way Pick Up Mtaani uses Easy Coach and 2NK.

4. **Sell trust explicitly, because it is the market's pain point.**
   - Swift's MD says Malawians have "lost confidence" in couriers, police get daily lost-parcel complaints, and Pick Up Mtaani's weak app reviews come from unclear status updates and rude riders.
   - Win on proof of delivery (OTP/PIN plus photo), live tracking links sent to the recipient on WhatsApp/SMS, vetted and uniformed riders (SafeBoda), published liability caps, and a fast claims process.
   - Make claims less burdensome than Pick Up Mtaani's M-Pesa-statement requirement.

5. **Give corporates a portal, keep SMEs on prepaid, and get licensed.**
   - Corporates (pharmacies, corporates, restaurants) want SafeBoda-style admin controls: staff, approvals, spend visibility, multi-stop, monthly statements. Offer an API/WhatsApp booking for volume clients.
   - Keep SMEs on a **prepaid wallet**. Offer postpaid invoicing only to vetted accounts with short terms, to avoid Lori's working-capital trap (riders paid daily, clients paying late).
   - Secure the **MACRA intra-city courier licence** (no current holders) as a credibility and moat signal.

## 11. Failure lessons

- **Sendy:**
  - VC-sized burn (up to ~$1M/month) on thin delivery margins.
  - Constant product sprawl (marketplace → B2B → Supply → fulfilment → freight → rides).
  - Asset-heavy expansion into a new country (Nigeria).
  - Dependence on one big raise that did not come; GMV at 65% and revenue at 44% of target.
  - Administration in Sept 2023.
  - **Stay single-city, single-product until each delivery is contribution-positive.**
- **SafeBoda:**
  - Exited Kenya and Nigeria; Nigeria had positive unit economics but margins too thin to justify. It retreated to its one profitable market.
  - Regulation on boda bodas in Kampala forced its B2B pivot.
  - **Depth in one city beats breadth; watch two-wheeler regulation.**
- **Lori Systems:** the gap between paying transporters upfront and slow customer payments crushed working capital (valuation $120M → $5M). **Do not finance your customers' payment terms.**
- **Jumia Food** (exited Kenya Dec 2023) and **Bolt Food** (exited Nigeria and South Africa Dec 2023): food marketplaces are brutal. Delivery-as-a-service for restaurants' own channels is the safer niche.
- **Musanga** (Zambia): early Lusaka merchant-delivery traction (Pepsi, Dangote) did not translate into lasting business. The cause is not documented [UNVERIFIED].
