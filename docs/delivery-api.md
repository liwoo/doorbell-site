# Doorbell Delivery API: data model (v1 draft)

_Status: design draft for early access, 27 Oct 2026. The landing page's developer section shows these exact field names, so if you change a field here, change it in `src/components/landing/Developers.jsx` too._

The same model sits behind all three ways of booking:
- **API:** your system calls these endpoints directly.
- **Doorbell Checkout:** your site creates a *checkout session*. The customer fills in the drop-off and service, and the delivery is created for you.
- **Business Portal / spreadsheet upload:** the form fields and spreadsheet columns use the same field names, in dot notation (see the [end of this doc](#spreadsheet-upload-same-model-no-code)).

## Conventions
| Rule | Value |
|---|---|
| Base URL | `https://api.doorbell.mw/v1` |
| Auth | `Authorization: Bearer sk_test_…` (sandbox) / `sk_live_…` |
| Format | JSON, `snake_case` |
| Money | Integer Malawi kwacha, fields end in `_mwk` (e.g. `price_mwk: 1800`) |
| Time | ISO 8601 with offset, Malawi time (`2026-10-27T14:12:00+02:00`) |
| Coordinates | WGS84 decimal degrees: `lat`, `lng` |
| Phones | E.164 (`+265991234567`) |
| IDs | Prefixed: `loc_`, `qt_`, `dlv_`, `cs_`, `evt_`, `po_`. Zones use readable codes (`LL-A47`) |
| Retries | Send an `Idempotency-Key` header on every `POST` |

---

## The units

### 1. Zone: where we deliver, and the price area
```json
{
  "zone_id": "LL-A47",
  "city": "lilongwe",
  "name": "Area 47",
  "services": ["express", "standard"],
  "standard_price_mwk": 1800,
  "boundary": { "type": "Polygon", "coordinates": [[[33.77, -13.96], "…"]] }
}
```
- `GET /v1/zones` lists every active zone. `GET /v1/zones/resolve?lat=&lng=` returns the zone for a point, or `outside_coverage`.
- Zones are how Standard stays one flat price and how Express distance is measured.

### 2. Location: a saved pickup point (your shop, warehouse, courier branch)
```json
{
  "location_id": "loc_kaya_area3",
  "name": "Kaya Pharmacy, Area 3",
  "lat": -13.9897, "lng": 33.7680,
  "address_text": "Plot 3/112, Area 3",
  "landmark": "Opposite the Area 3 market",
  "contact": { "name": "Grace Phiri", "phone": "+265881234567" },
  "zone_id": "LL-A03",
  "hours": { "mon_sat": "08:00-18:00" }
}
```

### 3. Recipient: the person we hand over to
```json
{ "name": "Chikondi Banda", "phone": "+265991234567", "whatsapp": true, "language": "en" }
```
- `language` is `en` or `ny` (Chichewa) and sets the language of the customer's messages.

### 4. Drop-off: where the door is
```json
{
  "lat": -13.9626, "lng": 33.7741,
  "address_text": "Area 47/3",
  "landmark": "Blue gate behind the school",
  "instructions": "Call on arrival",
  "zone_id": "LL-A47"
}
```
- `lat`/`lng` are optional. If they're missing, the delivery starts as `awaiting_location`, and the first WhatsApp asks the customer to share their pin. `zone_id` is filled in once we have coordinates.

### 5. Parcel
```json
{
  "size": "S",
  "weight_kg": 1.2,
  "category": "medicine",
  "declared_value_mwk": 45000,
  "description": "Order #1042",
  "seal": true
}
```
- `size` is one of `S` (fits a shoebox, ≤ 2 kg), `M` (≤ 5 kg), `L` (≤ 10 kg) or `XL` (> 10 kg; large-item extra applies).
- `category` is one of `general`, `food`, `medicine`, `documents`, `electronics`, `fragile`.

### 6. Service and window: how fast
```json
{ "service": "standard", "ready_at": "2026-10-27T11:00:00+02:00" }
```
- `service` is `express` (dispatched now) or `standard` (same-day run if booked by the 11:00 cut-off, otherwise next working day by 13:00).
- The quote returns the `window` we commit to: `{ "start": "…14:00…", "end": "…18:00…" }`.

### 7. Handover: what proof the rider must capture
```json
{
  "pin": true,
  "photo": true,
  "signature": false,
  "id_check": { "required": false, "min_age": null },
  "allow_alternate_recipient": true
}
```
- Defaults: `pin` and `photo` are on. Use `id_check` for prescriptions, cards and contracts.
- `allow_alternate_recipient` lets the customer name someone else by replying to the WhatsApp. That person then gets the PIN.

### 8. Collection: cash or mobile money taken at the door
```json
{ "amount_mwk": 45000, "methods": ["cash", "airtel_money", "tnm_mpamba"] }
```
- The response adds `fee_mwk` (2%, minimum 300). Collected money is paid out the next working day (see Payouts).

### 9. Notifications: how we talk to your customer, in your name
```json
{ "channel": "whatsapp", "fallback": "sms", "sender_name": "Kaya Pharmacy" }
```

### 10. Quote: price and window before you commit
`POST /v1/quotes`
```json
{
  "pickup": { "location_id": "loc_kaya_area3" },
  "dropoff": { "lat": -13.9626, "lng": 33.7741 },
  "service": "standard",
  "parcels": [{ "size": "S" }],
  "collection": { "amount_mwk": 45000 }
}
```
→ `200`
```json
{
  "quote_id": "qt_8f2c",
  "zone_id": "LL-A47",
  "service": "standard",
  "window": { "start": "2026-10-27T14:00:00+02:00", "end": "2026-10-27T18:00:00+02:00" },
  "price": { "delivery_mwk": 1800, "extras_mwk": 0, "collection_fee_mwk": 900, "total_mwk": 2700 },
  "expires_at": "2026-10-27T09:57:00+02:00"
}
```
- Quotes last 15 minutes.
- After the cut-off, a Standard quote returns the next-day window instead of an error.

### 11. Delivery: the booking
`POST /v1/deliveries`
```json
{
  "quote_id": "qt_8f2c",
  "reference": "1042",
  "recipient": { "name": "Chikondi Banda", "phone": "+265991234567" },
  "dropoff": { "lat": -13.9626, "lng": 33.7741, "landmark": "Blue gate behind the school" },
  "parcels": [{ "size": "S", "category": "medicine", "declared_value_mwk": 45000 }],
  "handover": { "pin": true, "photo": true },
  "collection": { "amount_mwk": 45000, "methods": ["cash", "airtel_money", "tnm_mpamba"] },
  "notifications": { "channel": "whatsapp", "sender_name": "Kaya Pharmacy" }
}
```
→ `201`
```json
{
  "delivery_id": "dlv_204817",
  "reference": "1042",
  "status": "booked",
  "tracking_url": "https://doorbell.mw/t/204817",
  "window": { "start": "…14:00…", "end": "…18:00…" },
  "price": { "total_mwk": 2700 }
}
```
- You can skip `quote_id` and send `pickup` + `service` instead; we quote and book in one call.
- Other endpoints:
  - `GET /v1/deliveries/{id}`
  - `GET /v1/deliveries?reference=1042`
  - `POST /v1/deliveries/{id}/cancel` (free until a rider is assigned)
  - `POST /v1/deliveries/batch`: up to 500 deliveries; this is the API version of the spreadsheet upload, for couriers' daily arrivals.

**Statuses**
```
booked → awaiting_location → rider_assigned → picked_up → out_for_delivery → delivered
                                                                └→ attempt_failed → out_for_delivery (free re-attempt)
                                                                                  └→ held (3 days) → returning → returned
booked / rider_assigned → cancelled
```

**Proof (on `delivered`)**
```json
"proof": {
  "pin_matched": true,
  "photo_url": "https://files.doorbell.mw/pod/204817.jpg",
  "lat": -13.9626, "lng": 33.7741,
  "delivered_at": "2026-10-27T14:12:00+02:00",
  "received_by": "Chikondi Banda",
  "seal": "A-44871"
}
```

### 12. Checkout session: Doorbell takes over your website's delivery step
`POST /v1/checkout/sessions` (call this from your server when the customer picks "Deliver to my door")
```json
{
  "pickup": { "location_id": "loc_kaya_area3" },
  "reference": "1042",
  "order_value_mwk": 45000,
  "delivery_paid_by": "customer",
  "services": ["standard", "express"],
  "recipient": { "name": "Chikondi Banda", "phone": "+265991234567" },
  "success_url": "https://kayapharmacy.mw/orders/1042?delivery={DELIVERY_ID}",
  "cancel_url": "https://kayapharmacy.mw/checkout"
}
```
→ `{ "checkout_session_id": "cs_31ab", "url": "https://checkout.doorbell.mw/s/cs_31ab", "expires_at": "…" }`

1. Redirect the customer to `url`.
2. On the page they drop a pin, pick a speed or slot, and pay the delivery fee if `delivery_paid_by` is `customer` (Airtel Money, TNM Mpamba, card).
3. We create the delivery, send them to `success_url`, and fire `checkout.completed` with the `delivery_id`.

The Instagram/WhatsApp **link** is the same session, created in the portal instead of by API.

### 13. Event: webhooks
```json
{
  "event_id": "evt_9a1d",
  "type": "delivery.delivered",
  "created_at": "2026-10-27T14:12:03+02:00",
  "data": { "delivery_id": "dlv_204817", "reference": "1042", "status": "delivered", "proof": { "…": "…" } }
}
```
- **Signature:** `Doorbell-Signature: t=<unix>,v1=<hex HMAC-SHA256 of "t.body">`. Retried with backoff for 24 hours.
- **Event types:**
  - `delivery.booked`
  - `delivery.location_confirmed`
  - `delivery.rider_assigned`
  - `delivery.picked_up`
  - `delivery.out_for_delivery`
  - `delivery.rescheduled` (customer changed the time)
  - `delivery.recipient_changed`
  - `delivery.delivered`
  - `delivery.attempt_failed`
  - `delivery.returned`
  - `delivery.cancelled`
  - `collection.collected`
  - `payout.sent`
  - `checkout.completed`

### 14. Payout: money we collected for you
```json
{
  "payout_id": "po_77e1",
  "amount_mwk": 44100,
  "fees_mwk": 900,
  "method": "airtel_money",
  "deliveries": ["dlv_204817"],
  "sent_at": "2026-10-28T10:00:00+02:00"
}
```

---

## Errors
```json
{ "error": { "type": "invalid_request", "code": "outside_coverage", "message": "Drop-off is outside our delivery zones.", "param": "dropoff" } }
```
| Code | Meaning |
|---|---|
| `outside_coverage` | No zone covers the pickup or drop-off |
| `quote_expired` | Quote is older than 15 minutes; get a new one |
| `invalid_phone` | Phone isn't a valid Malawi mobile number in E.164 |
| `service_unavailable` | Service not offered in this zone or at this time |
| `insufficient_balance` | Pay-as-you-go balance can't cover the price |
| `not_cancellable` | Rider already collected the parcel |

## Spreadsheet upload: same model, no code
Column headers match the API fields in dot notation:

`reference, recipient.name, recipient.phone, dropoff.address_text, dropoff.landmark, dropoff.lat, dropoff.lng, service, parcel.size, parcel.category, parcel.declared_value_mwk, collection.amount_mwk, handover.id_check`

- Only `recipient.name`, `recipient.phone` and `dropoff.address_text` are required.
- Rows without coordinates go to `awaiting_location`, and we ask the customer for their pin by WhatsApp.
- For couriers, `reference` is your waybill number.
