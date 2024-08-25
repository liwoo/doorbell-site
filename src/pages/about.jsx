import MainLayout from '@/layouts/MainLayout'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  const stats = [
    { label: 'Kilometers Saved', value: '280k' },
    { label: 'Total Deliveries Made', value: '100k+' },
    { label: 'Customers Served', value: '7,563' },
    { label: 'Revenue Collected', value: '$380k' },
  ]
  return (
    <MainLayout title={'About | Doorbell - Zatheka App'}>
      <div className="relative">
        <div className="mx-auto max-w-5xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="px-6 lg:contents">
            <div className="mx-auto pb-24 pt-48">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                About Doorbell
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Journey Towards a Digitally Inclusive Malawi!
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                In the bustling streets of Lilongwe, two visionary individuals
                embarked on a journey that would redefine convenience and
                transform the way people experience delivery services. In 2019,
                armed with a passion for innovation and just four motorbikes,
                they laid the foundation for what would become an industry
                trailblazer - Doorbell Services.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                <figure className="mt-10 border-l border-indigo-600 pl-9">
                  <blockquote className="font-semibold text-gray-900">
                    <p>
                      Since our inception in 2019, we&rsquo;ve been dedicated to
                      simplifying daily routines. Whether it&rsquo;s delivering
                      food, medications, or beverages, we meet approximately
                      60-65% of all immediate needs through our prompt delivery
                      service.
                    </p>
                  </blockquote>
                </figure>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span>
                      In the early days, Doorbell Services operated using
                      WhatsApp as their primary communication tool. This
                      seemingly simple app became the driving force behind the
                      company&rsquo;s initial success. Customers would send
                      their grocery lists, food orders, and courier requests via
                      WhatsApp, and Doorbell Services would spring into action
                      to fulfill them.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      As Doorbell Services gained traction, it quickly became
                      apparent that they were pioneers in their field. They were
                      not just delivering goods; they were delivering
                      convenience, trust, and peace of mind to their customers.
                      With every successful delivery, the team solidified their
                      reputation as industry trailblazers.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      The demand for Doorbell Services grew exponentially, and
                      the fleet of motorbikes soon expanded from the initial
                      four to a formidable team of fifteen. With each addition,
                      the company&rsquo;s reach and capacity to serve their
                      customers expanded, allowing them to meet the rising
                      expectations of their loyal clientele.
                    </span>
                  </li>
                </ul>
                <Image
                  src="https://res.cloudinary.com/tiyeni/image/upload/v1724606681/Screenshot_2024-08-25_at_7.24.22_PM.png"
                  alt="Doorbell Services Team"
                  width={800}
                  height={533}
                  className="mt-10 w-full"
                />
                <p className="my-4">
                  Joyce, one of our dedicated Marketing Specialists loves
                  improving our customers outcomes
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  A Transformative Partnership in 2022
                </h2>
                <p className="mt-6">
                  In 2022, Doorbell Services took a monumental leap forward by
                  welcoming a new partner into the fold. This partner, now our
                  Chief Technology Officer (CTO), joined forces with the
                  founders to bring a new level of innovation to the company.
                  Together, they embarked on an ambitious project that would
                  forever change the landscape of delivery services.
                </p>
                <p className="mt-6">
                  Under the guidance of this visionary CTO, Doorbell Services
                  has created the{' '}
                  <Link
                    className={'text-primary-dark underline'}
                    href={'/#download'}
                  >
                    Zatheka
                  </Link>
                  , the most comprehensive and advanced application in the
                  market today. This groundbreaking app is poised to
                  revolutionize the way customers access and experience our
                  services. With its user-friendly interface, advanced features,
                  and seamless integration, the Zatheka App is set to provide a
                  level of convenience and efficiency that was once
                  unimaginable.
                </p>
                <p className="mt-6">
                  As we stand today, Doorbell Services continues to redefine the
                  delivery industry. With an unwavering commitment to
                  excellence, innovation, and customer satisfaction, the company
                  has become synonymous with trust and reliability.
                </p>
                <figure className="mt-10 border-l border-indigo-600 pl-9">
                  <blockquote className="font-semibold text-gray-900">
                    <p>
                      Our journey is far from over. We remain dedicated to
                      pushing the boundaries, expanding our services, and
                      exploring new ways to make your lives easier. From our
                      humble beginnings to our present-day success, one thing
                      has never wavered: our passion for delivering excellence,
                      one doorstep at a time.
                    </p>
                  </blockquote>
                </figure>
                <p>
                  Join us on this remarkable journey, as Doorbell Services
                  continues to revolutionize the way you experience convenience
                  and reliability. Thank you for your trust, and we look forward
                  to serving you for many more years to come
                </p>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                {stats.map((stat, statIdx) => (
                  <div key={statIdx}>
                    <dt className="text-sm font-semibold leading-6 text-gray-600">
                      {stat.label}
                    </dt>
                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
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
