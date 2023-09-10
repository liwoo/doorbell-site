import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";

const faqs = [
    {
        "question": "What types of products can be delivered through Doorbell delivery service?",
        "answer": "Our delivery service specializes in delivering restaurant orders, parcels, and grocery shopping."
    },
    {
        "question": "How long does it take for my order to be delivered?",
        "answer": "Delivery times may vary based on distance, traffic conditions, and order volume. However, we aim to deliver all orders within 30 minutes of receiving them. For example, if you make a KFC order, the order will depend on how long it takes KFC to process the order. However our riders will always give you an estimate."
    },
    {
        "question": "What is the coverage area of your delivery service?",
        "answer": "We currently provide delivery services within Lilongwe and Blantyre. Note that we do not deliver from city to city or district, but only within the specified locations named."
    },
    {
        "question": "What are the delivery fees for your service?",
        "answer": "Our delivery fees vary depending on the size, weight, and distance of the delivery. However, we offer competitive rates and always strive to provide the best value for our customers. We will always communicate beforehand the service charges to ensure you agree before we proceed with an order."
    },
    {
        "question": "Are there any restrictions on the size or weight of parcels that can be delivered?",
        "answer": "Yes, there are restrictions on the size and weight of parcels that we can deliver due to the limitations of our motorbikes. Please contact us to inquire about the specific size and weight restrictions."
    },
    {
        "question": "How do you ensure the safety and security of my delivered items?",
        "answer": "We take the safety and security of our customers' deliveries very seriously. All of our delivery personnel undergo extensive training to ensure that they handle packages with care and follow all safety protocols. We also provide tracking information and updates on the status of your delivery throughout the process."
    },
    {
        "question": "What happens if there is an issue with my delivery, such as a missing or damaged item?",
        "answer": "If there is an issue with your delivery, please contact us immediately, and we will do everything we can to resolve the issue as quickly as possible. We may offer a refund or re-delivery depending on the specific circumstances."
    },
    {
        "question": "What happens if I am not available to receive my delivery?",
        "answer": "If you are not available to receive your delivery, we will attempt to contact you to arrange another delivery time. If we are unable to reach you, we may leave the package with a trusted neighbour or return it to our office for later delivery. However, for restaurant and grocery orders, customers shall have to pay in every circumstance since they cannot be returned. Be sure of your availability before placing an order."
    },
    {
        "question": "What payment options do you accept for your delivery service?",
        "answer": "We accept various payment methods such as Airtel Money, Mpamba, cash on delivery, and bank transactions. For all payment methods apart from cash, customers shall be asked to provide proof by sending a transaction ID for reference."
    }
]

export default function Support() {
    return (
        <MainLayout title={"Support | Doorbell - Zonse Momo App"}>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-5">
                            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
                            <p className="mt-4 text-base leading-7 text-gray-600">
                                Can’t find the answer you’re looking for? Reach out to our{' '}
                                <Link href="mailto:support@doorbell.mw" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    customer support
                                </Link>{' '}
                                team.
                            </p>
                        </div>
                        <div className="mt-10 lg:col-span-7 lg:mt-0">
                            <dl className="space-y-10">
                                {faqs.map((faq) => (
                                    <div key={faq.question}>
                                        <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                                        <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div> 
        </MainLayout>
    )
}
