import { useId, useState } from 'react'

import { AppScreen } from '@/components/AppScreen'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import CityPills from '@/components/Cities'
import { Bag, Chinese, Motorbike } from '@/components/HomeIcons'
import Link from 'next/link'

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function AppDemo() {
  const [toOrder, setToOrder] = useState('')
  const services = [
    { name: 'Food', icon: <Chinese /> },
    { name: 'Groceries', icon: <Bag /> },
    { name: 'Courier', icon: <Motorbike /> },
  ]
  return (
    <AppScreen>
      <AppScreen.Body>
        <h3 className="bg-secondary p-3 text-center underline">
          Our Response to Cyclone Freddy
        </h3>
        <h4 className="mx-4 mt-6 text-sm">Hi Takondwa</h4>
        <h4 className="mx-4">
          {toOrder === ''
            ? 'What would you like to order?'
            : `Would you like ${toOrder}?`}
        </h4>
        <section className="mt-6 flex border-t border-gray-300">
          {services.map((svc) => (
            <div
              onMouseOver={() => setToOrder(svc.name)}
              key={svc.name}
              className="w-1/3 cursor-pointer py-4 hover:bg-gray-100 [&:nth-child(2)]:border-l [&:nth-child(2)]:border-r"
            >
              <div className="mx-auto w-2/3">{svc.icon}</div>
              <h5 className="text-center text-sm">{svc.name}</h5>
            </div>
          ))}
        </section>
        <section className="bg-gray-200 p-4">
          <img src="/images/db-discount.png" alt="advert" />
        </section>
      </AppScreen.Body>
    </AppScreen>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden bg-primary py-20 sm:py-32 lg:pb-16 xl:pb-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1654 1261"
        className="absolute top-0"
      >
        <path
          fill="#C2CEFF"
          d="M1520.21-21.475c-6.69 65.46-13.64 131.659-50.31 188.1-36.66 56.441-106.69 102.893-213.7 115.027-132.42 15.002-298.351-23.569-443.812-26.265-233.352-4.356-356.903 99.795-462.588 198.073-105.685 98.279-212.521 196.132-366.543 268.313-97.136 45.528-248.955 70.488-399.919 18.384-123.12-42.555-206.399-125.282-230.013-197.318-23.614-72.036-21.939-147.831 27.702-197.424 335.997-335.7-55.121-616.845-70.015-817.314-8.86-119.767 97.619-215.045 216.936-215.878 312.419-2.215 416.9 158.76 825.304-105.711C774.136-1066.06 1555.9-495.511 1516.35-36.173l3.86 14.698Z"
          opacity=".25"
        />
      </svg>
      <Container>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-12">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-100 lg:text-5xl">
              Welcome to the
              <br /> Zonse Momo App
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 527 36"
              className="w-1/2"
            >
              <path
                stroke="#FFE45C"
                strokeLinecap="round"
                strokeWidth="14"
                d="M7 28.882c4.957-5.25 6.882-7.088 10.033-9.445 3.827-2.861 7.923-5.93 15.903-4.11 10.77 4.43 12.145 11.805 14.836 12.333 3.895.579 8.133.368 12.061.222 4.624-.375 5.874-3.875 9.126-7.89 3.748-4.735 6.498-12.235 17.718-12.11 10.904 0 14.905 8.5 21.186 13.333 4.094 4.792 10.449 6.08 15.797 5.667 7.921-.611 14.402-9.26 21.186-12.945 3.92-2.129 8.724-3.02 10.62 2.056 2.739 7.33 6.495 10.889 14.302 10.889 4.503 0 8.844-.69 13.129-2.222 4.874-1.745 8.077-5.92 12.541-7.778 4.674-1.946 14.783-4.173 19.479-.778 3.929 2.84 6.146 5.778 11.1 5.778 6.771 0 11.056-3.798 17.344-4.89 8.488-1.472 27.255 15.283 31.433 1.445 2.94-9.737 13.561 1.114 18.251 3 4.908 1.974 10.369-1.607 14.623-3.777 5.29-2.7 7.282-1.211 12.434.666 11.799 4.3 23.451-1.2 35.382 2.111 6.624 1.84 11.461-2.266 17.718-2.555 4.072-.189 8.199 0 12.275 0 4.099 0 9.541-3.479 13.288-1.334 5.322 3.048 5.555 8.373 13.235 5.278 5.147-2.074 9.82-2.944 15.263-2.944 5.014 0 8.669-1.449 13.501-2.222 4.25-.681 8.372-.94 12.702-.778 4.925.183 9.286 3 14.249 3 17.766 0 35.029 1.461 51.285-7"
              />
            </svg>
            <p className="mt-6 text-lg text-gray-100">
              {/* Get your Food, Groceries and Courier Delivered. We are available
              for <strong>Public Beta</strong> on{' '}
              <Link
                className={'underline'}
                href={'https://support.google.com/android/answer/7680439?hl=en'}
              >
                Android Version 7
              </Link>{' '}
              and{' '}
              <Link
                href={'https://support.apple.com/en-us/HT201685'}
                className={'underline'}
              >
                iOS Version 13.0
              </Link>{' '}
              and above. */}
              Starting from <strong>August 26, 2024</strong>, Doorbell&apos;s App
              will be available for download on both Android and iOS devices.
              Our Beta Testing Program is currently oversubscribed. Please keep
              checking with us for more details.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              {/* <AppStoreLink
                link={'https://testflight.apple.com/join/UyPQsCc6'}
                alt
              />
              <AppStoreLink
                link={
                  'https://play.google.com/apps/testing/com.doorbell.mw.app'
                }
              /> */}
              <AppStoreLink
                whatsapp
                link={
                  'https://wa.me/265999889000?text=I%20want%20to%20join%20the%20Doorbell%20App%20Beta%20Program'
                }
              />
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppDemo />
              </PhoneFrame>
            </div>
          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-gray-100 lg:text-left">
              *Available in the following Cities
            </p>
            <CityPills />
          </div>
        </div>
      </Container>
    </div>
  )
}
