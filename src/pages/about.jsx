import MainLayout from "@/layouts/MainLayout";

export default function About() {
    const stats = [
        { label: "Kilometers Saved", value: "280k" },
        { label: "Total Deliveries Made", value: "93,180" },
        { label: "Customers Served", value: "6,563" },
        { label: "Revenue Collected", value: "$346k" },
    ]
    return (
        <MainLayout title={"About | Doorbell - Zonse Momo App"}>
            <div className="relative">
                <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                    <div
                        className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                        <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                            <img
                                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                                src="https://malawiplus.com/wp-content/uploads/2021/08/doorbell2.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="px-6 lg:contents">
                        <div
                            className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                            <p className="text-base font-semibold leading-7 text-indigo-600">About Doorbell</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Journey Towards a Digitally Inclusive Malawi!</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">Chisomo Kajamu is more than a business
                                leader. As a well-rounded individual with a passion for bodybuilding and risk-taking, he
                                leveraged his influence to bring Doorbell to life.</p>
                            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                                <figure className="mt-10 border-l border-indigo-600 pl-9">
                                    <blockquote className="font-semibold text-gray-900">
                                        <p>Since our inception in 2019, we&rsquo;ve been dedicated to simplifying daily routines.
                                            Whether it&rsquo;s delivering food, medications, or beverages, we meet approximately
                                            60-65% of all immediate needs through our prompt delivery service.</p>
                                    </blockquote> 
                                </figure>
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <span>Originally envisioned in Kenya, the concept of Doorbell found its home in Malawi. Here, Chisomo identified a gap in the market and used his technical expertise to address it.</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span>Starting with just four motorbikes, we&rsquo;ve expanded our fleet to 18. This growth has been fueled, in part, by the increasing demand for convenience in the wake of the Covid-19 pandemic.</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span>We have set our sights on becoming Malawi’s leading courier service. Stay tuned, as our ambitious expansion plans aim to generate over 1,000 new jobs in the near future.</span>
                                    </li>
                                </ul>
                                <p className="mt-8">While the digital infrastructure in Malawi poses certain challenges, we view this as an opportunity for growth. We remain optimistic and are committed to setting new industry benchmarks.</p>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">The Future and Beyond 🚀</h2>
                                <p className="mt-6">In the not-so-distant future, Doorbell is poised to become an inseparable part of your daily life, transcending the barriers of mere convenience to establish a new standard of service in Malawi</p>
                                <p className="mt-6">Here&rsquo;s what&rsquo;s cooking: we&rsquo;re not just planning to expand our fleet; we&rsquo;re talking about revolutionizing the whole game. Picture an ecosystem where you don’t just get your grub and gadgets delivered, but also essential services that reach your doorstep faster than you can say &rsquo;Doorbell.&rsquo; Our promise goes beyond rapid growth</p>
                                <p className="mt-6">We’re also looking at partnerships that can bring in cutting-edge tech to the delivery business, all to make your life not just easier, but better. So when you think about hitting that &rsquo;Order&rsquo; button, know that you&rsquo;re not just getting a delivery—you&rsquo;re becoming part of a movement that&rsquo;s about to reshape convenience, service, and employment in Malawi.</p>
                            </div>
                            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                                {stats.map((stat, statIdx) => (
                                    <div key={statIdx}>
                                        <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                                        <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
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