import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";

export default function DiscountConditions() {
    return (
        <MainLayout title={"Discount Conditions | Doorbell - Zatheka App"}>
            <div className="bg-white px-6 py-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <p className="text-base font-semibold leading-7 text-indigo-600">Understanding Our Discount System</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Discount Conditions</h1>
                    <p className="mt-6 text-xl leading-8">
                        At Doorbell, we offer various types of discounts to enhance your shopping experience. This page explains how our discount system works, including the conditions for applying discounts and how they are calculated.
                    </p>

                    <div className="mt-10 max-w-2xl">
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Types of Discounts</h2>
                        <p className="mt-6">
                            We offer three main types of discounts:
                        </p>
                        <ul className="mt-4 gap-y-4 flex flex-col ml-8 list-disc">
                            <li>Total Order Discounts</li>
                            <li>Delivery Fee Discounts</li>
                            <li>Cart Discounts</li>
                        </ul>
                    </div>

                    <div className="mt-10 max-w-2xl">
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">General Discount Conditions</h2>
                        <p className="mt-6">
                            All discounts are subject to the following conditions:
                        </p>
                        <ul className="mt-4 gap-y-4 flex flex-col ml-8 list-disc">
                            <li><strong>Time Validity:</strong> Each discount has a specific time period during which it is valid.</li>
                            <li><strong>Customer Qualification:</strong> Discounts may be created for all customers or a subset of customers based on their phone numbers.</li>
                            <li><strong>Repetitions:</strong> A discount may be valid for a specific number of times for a given customer within the time period.</li>
                            <li><strong>Discount Code:</strong> Each discount has a unique code consisting of 8 or fewer letters/numbers (e.g., &quot;SAVE20&quot; &quot;NEWYR23&quot;, &quot;50OFF&quot;).</li>
                        </ul>
                    </div>

                    <div className="mt-10 max-w-2xl">
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Total Order Discounts</h2>
                        <p className="mt-6">
                            Total Order Discounts are applied to your entire order when all items in your cart qualify for the discount. These discounts can be based on products, shops, or categories.
                        </p>
                        <p className="mt-4">
                            <strong>Additional Condition:</strong> All products in the cart must qualify for the discount.
                        </p>
                        <p className="mt-4">
                            If all conditions are met, we reduce either a flat fee or a percentage of the total order (cart total + delivery fee).
                        </p>
                        <p className="mt-4">
                            <strong>Example:</strong>
                        </p>
                        <p className="mt-2">
                            Cart Total: MWK 100,000<br />
                            Delivery Fee: MWK 10,000<br />
                            Total Order: MWK 110,000<br />
                            Discount Code: &quot;TOTAL10&quot;<br />
                            Discount: 10% off total order<br />
                            Final Total: MWK 99,000 (MWK 110,000 - 10% = MWK 99,000)
                        </p>
                    </div>

                    <div className="mt-10 max-w-2xl">
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Delivery Fee Discounts</h2>
                        <p className="mt-6">
                            Delivery Fee Discounts are applied to the delivery fee when at least one item in your cart qualifies for the discount.
                        </p>
                        <p className="mt-4">
                            <strong>Additional Condition:</strong> At least one item in the cart must qualify for the discount.
                        </p>
                        <p className="mt-4">
                            We reduce the delivery fee by either a flat fee or a percentage.
                        </p>
                        <p className="mt-4">
                            <strong>Example:</strong>
                        </p>
                        <p className="mt-2">
                            Cart Total: MWK 100,000<br />
                            Original Delivery Fee: MWK 10,000<br />
                            Discount Code: &quot;SHIP50&quot;<br />
                            Discount: 50% off delivery fee<br />
                            Final Total: MWK 105,000 (MWK 100,000 + MWK 5,000 discounted delivery fee)
                        </p>
                    </div>

                    <div className="mt-10 max-w-2xl">
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Cart Discounts</h2>
                        <p className="mt-6">
                            Cart Discounts are applied to qualifying items in your cart when at least one item qualifies for the discount.
                        </p>
                        <p className="mt-4">
                            <strong>Additional Condition:</strong> At least one item in the cart must qualify for the discount.
                        </p>
                        <p className="mt-4">
                            We reduce the total of qualifying items by either a flat fee or a percentage. The discount is not calculated against non-qualifying items.
                        </p>
                        <p className="mt-4">
                            <strong>Example:</strong>
                        </p>
                        <p className="mt-2">
                            Qualifying Item 1: MWK 50,000<br />
                            Qualifying Item 2: MWK 30,000<br />
                            Non-Qualifying Item: MWK 20,000<br />
                            Discount Code: &quot;SAVE20&quot;<br />
                            Discount: 20% off qualifying items<br />
                            Discounted Total: MWK 84,000 ((MWK 50,000 + MWK 30,000) - 20% = MWK 64,000 for qualifying items + MWK 20,000 for non-qualifying item)
                        </p>
                    </div>

                    <div className="mt-10 max-w-2xl">
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Multiple Discount Codes</h2>
                        <p className="mt-6">
                            If items in your cart qualify for multiple discount codes, we will only apply the rules of the discount code provided by you during checkout. This ensures clarity and prevents unintended stacking of discounts.
                        </p>
                    </div>

                    <div className="mt-10 max-w-2xl">
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Discount Revocation</h2>
                        <p className="mt-6">
                            A discount may be revoked if:
                        </p>
                        <ul className="mt-2 gap-y-2 flex flex-col ml-8 list-disc">
                            <li>The discount period has expired</li>
                            <li>The discount code has reached its usage limit for the customer</li>
                            <li>The items in your cart no longer qualify for the discount</li>
                            <li>Your account no longer meets the discount criteria</li>
                        </ul>
                        <p className="mt-4">
                            If a discount is revoked, your order will be recalculated based on the standard pricing without the discount applied.
                        </p>
                    </div>

                    <div className="mt-10 max-w-2xl">
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Questions?</h2>
                        <p className="mt-6">
                            If you have any questions about our discount system or need clarification on a specific discount, please don&apos;t hesitate to contact us.
                        </p>
                        <ul className="mt-4 gap-y-4 flex flex-col ml-8 list-disc">
                            <li>Via Email: <Link href={"mailto:support@doorbell.mw"}>support@doorbell.mw</Link></li>
                            <li>Via Phone: <Link href={"tel:+265999889000"}>+265 (0) 999 889 000</Link></li>
                            <li>Via our <Link className={"underline text-primary-dark"} href={"/#contact"}>Contact Form</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
