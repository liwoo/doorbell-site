import MainLayout from '@/layouts/MainLayout'
import Image from 'next/image'
import Link from 'next/link'

export default function PressRelease() {
  const appScreenshots = [
    {
      src: 'https://res.cloudinary.com/tiyeni/image/upload/v1724608524/Second_ScreenShot.png',
      alt: 'Doorbell Zatheka App Screenshot 1',
    },
    {
      src: 'https://res.cloudinary.com/tiyeni/image/upload/v1724608525/First_ScreenShot.png',
      alt: 'Doorbell Zatheka App Screenshot 2',
    },
    {
      src: 'https://res.cloudinary.com/tiyeni/image/upload/v1724608525/Third_ScreenShot.png',
      alt: 'Doorbell Zatheka App Screenshot 3',
    },
  ]

  return (
    <MainLayout title={'App Launch Press Release | Doorbell - Zatheka App'}>
      <div className="relative">
        <div className="mx-auto max-w-5xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="px-6 lg:contents">
            <div className="mx-auto pb-24 pt-48">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Press Release
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Doorbell Services Launches First-of-Its-Kind Delivery Mobile
                Application in Malawi
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                (Lilongwe, Malawi) 25 August 2024 – Doorbell Services is excited
                to announce the launch of the Doorbell Zatheka App on August 26,
                2024. This groundbreaking app marks a new era in delivery
                services in Malawi, offering a seamless experience that connects
                customers with a diverse range of restaurants and shops.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                <p>
                  Doorbell was founded in 2019 with a mission to address a clear
                  gap in the market by the founders, Chisomo Kajamu (Chief
                  Executive Officer) and Theophilus Pepple (Chief Operating
                  Officer). What started with just four bikes, WhatsApp orders,
                  and a small team of six employees has grown into a leading
                  force in the delivery industry, now boasting an app-based
                  service with a fleet of 16 bikes and a team of 32+ dedicated
                  staff members. Doorbell Services has completed over 100,000
                  orders to date.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Key Features of the Doorbell Zatheka App
                </h2>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span>
                      <strong>Wide Variety of Options:</strong> Explore more
                      than 50 restaurants and shops, providing a wide array of
                      dining and shopping options.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong>Dynamic Delivery Fees:</strong> Calculated based
                      on the distance from the restaurant or shop to your
                      location.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong>Pickup Feature:</strong> Choose to pick up your
                      completed order from a specific location if you prefer.
                    </span>
                  </li>
                </ul>

                <figure className="mt-10 border-l border-indigo-600 pl-9">
                  <blockquote className="font-semibold text-gray-900">
                    <p>
                      &quot;All the features that people in other major cities
                      in the world are accustomed to when it comes to food and
                      grocery deliveries are now coming to Malawians at their
                      fingertips. We boast the widest range of food choices,
                      from local dishes at Bwandilo to breakfast, coffee, and
                      more.&quot;
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex gap-x-4">
                    <div className="text-sm leading-6">
                      <strong className="font-semibold text-gray-900">
                        Chisomo Kajamu
                      </strong>{' '}
                      – Chief Executive Officer
                    </div>
                  </figcaption>
                </figure>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Launch Promotion
                </h2>
                <p className="mt-6">
                  In celebration of the launch, Doorbell Services will offer
                  free delivery for every user&apos;s first order - up to the
                  7th of September. Use discount code{' '}
                  <strong>ZATHEKA100</strong> at checkout to redeem this offer.
                  This promotion is our way of welcoming new users and
                  demonstrating the app&apos;s convenience.
                </p>
                <p className="mt-6">
                  To get started, users only need an active Malawian phone
                  number to log in.
                </p>
                <p className="mt-6">
                  Whether it&apos;s connecting customers to local businesses or
                  enhancing digital accessibility, Doorbell continues to lead
                  the way in innovation and growth.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
                  {appScreenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg"
                    >
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={300}
                        height={400}
                        className="object-cover object-center"
                      />
                    </div>
                  ))}
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Contact Information
                </h2>
                <p className="mt-6">
                  For more information, please contact Doorbell Services:
                </p>
                <p className="mt-2">
                  Email:{' '}
                  <a
                    href="mailto:info@doorbell.mw"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    support@doorbell.mw
                  </a>
                  <br />
                  Phone: +265 990 167 497
                  <br />
                  Website:{' '}
                  <Link
                    href="/"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    www.doorbell.mw
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
