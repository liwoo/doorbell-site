import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import clsx from 'clsx'
import Image from 'next/image';
import Head from 'next/head'
import { CheckIcon } from '@radix-ui/react-icons';
import OurClients from '@/components/OurClients';

const pricingTiers = [
  {
    name: 'LIGHT TIER',
    description:
      'Entry-level solution for small businesses or occasional needs',
    featured: false,
    button: {
      label: 'Buy plan',
      href: '/register',
    },
    features: [
      {
        text: 'Up to 60 errands monthly with daily flexibility',
        note: '(maximum 3 per day)',
      },
      {
        text: 'Single-user access with straightforward request management',
        note: '',
      },
      {
        text: 'Standard support package with 24-hour response time',
        note: '',
      },
    ],
  },
  {
    name: 'SILVER TIER',
    description: 'Perfect for growing businesses with consistent errand needs',
    featured: false,
    button: {
      label: 'Buy plan',
      href: '/register',
    },
    features: [
      {
        text: 'Up to 120 errands monthly with daily flexibility',
        note: '(maximum 5 per day)',
      },
      {
        text: 'Multi-user access for up to 2 team members',
        note: '',
      },
      {
        text: 'Business hours support with same-day response',
        note: '',
      },
    ],
  },
  {
    name: 'GOLD TIER',
    description:
      'Ideal for medium to large businesses with regular errand requirements',
    featured: false,
    button: {
      label: 'Buy plan',
      href: '/register',
    },
    features: [
      {
        text: 'Up to 200 errands monthly with daily flexibility',
        note: '(maximum 10 per day)',
      },
      {
        text: 'Multi-user access for up to 3 team members',
        note: '',
      },
      {
        text: 'Preferred scheduling and specialized request handling',
        note: '',
      },
      {
        text: 'Extended support hours with 3-hour response guarantee',
        note: '',
      },
    ],
  },
  {
    name: 'PLATINUM TIER',
    description:
      'Our most comprehensive offering for businesses with frequent errand needs',
    featured: true,
    button: {
      label: 'Buy plan',
      href: '/register',
    },
    features: [
      {
        text: 'Up to 250 errands monthly with daily flexibility',
        note: '(maximum 20 per day)',
      },
      {
        text: 'Multi-user access for up to 5 team members',
        note: '',
      },
      {
        text: 'Dedicated account manager and priority scheduling',
        note: '',
      },
      {
        text: '24/7 concierge support with 1-hour response guarantee',
        note: '',
      },
    ],
  },
]

function PricingTier({
  name,
  description,
  features,
  button,
  featured = false,
}) {
  return (
    <div
      className={clsx(
        'rounded-xl bg-white p-6 w-96',
        featured
          ? 'border-2 border-primary shadow-xl'
          : 'border border-gray-200'
      )}
    >
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <p className="mt-2 min-h-[50px] text-sm text-gray-600">{description}</p>

      <button
        className={clsx(
          'mt-6 w-full rounded-md px-4 py-2 text-center text-sm font-bold',
          featured
            ? 'bg-primary text-white hover:bg-blue-700'
            : 'text-primary hover:bg-blue-50 font-bold'
        )}
      >
        {button.label}
      </button>

      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex">
            <CheckIcon className="h-6 w-6 flex-none text-black" />
            <div className="ml-3">
              <p className="text-sm text-gray-600">{feature.text}</p>
              {feature.note && (
                <p className="text-xs text-gray-400">{feature.note}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Business() {
    
  return (
    <MainLayout title="Premium Errand Services for Elite Organizations | Doorbell">
      <Head>
        <meta
          name="description"
          content="Premium Errand Services for Elite Organizations"
        />
      </Head>
      <div className="relative">
        <div className="mx-auto max-w-5xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="px-6 lg:contents">
            <div className="mx-auto pb-24 pt-48">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                DOORBELL FOR BUSINESS
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Premium Errand Services for Elite Organizations
              </h1>
              <Image
                src="https://res.cloudinary.com/tiyeni/image/upload/v1724606681/Screenshot_2024-08-25_at_7.24.22_PM.png"
                alt="Doorbell Services Team"
                width={800}
                height={533}
                className="mt-10 w-full"
              />
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Welcome To A New Era Of Business Efficiency
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                At DoorBell for Business, we understand that your
                organization&apos;s most valuable resource is time. Our premium
                subscription-based errand service empowers high-performing
                businesses to delegate routine tasks and logistics, allowing
                your team to focus on what truly matters: driving growth and
                innovation.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                The Doorbell Advantage
              </h2>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span>
                      <strong>• Exclusive Business Focus:</strong> Unlike
                      consumer errand services, our entire operation is designed
                      specifically for corporate needs and professional
                      environments.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong>• Guaranteed Reliability:</strong> 99.7% on-time
                      completion rate with proactive communication at every
                      step.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong>• Enterprise-Grade Security:</strong> Full
                      insurance coverage, background-checked specialists, and
                      secure handling protocols.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong>• Seamless Integration:</strong> Our service works
                      alongside your existing operations without disruption or
                      additional management overhead.
                    </span>
                  </li>
                </ul>
              </div>
              <p className="mt-16 font-semibold leading-7 tracking-tight text-indigo-600">
                Subscription Tiers Tailored To Your Needs
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                Choose the plan that aligns with your organization&apos;s
                requirements:
              </h2>
              {/* Plans Section */}
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center"></div>

                <div className="mx-auto mt-12 grid justify-items-center gap-8 lg:grid-cols-2 xl:grid-cols-2">
                  {pricingTiers.map((tier) => (
                    <PricingTier key={tier.name} {...tier} />
                  ))}
                </div>
              </div>
              <p className="mt-10 text-base font-semibold leading-7 text-indigo-600">
                WHAT OUR CLIENTS SAY
              </p>
              <figure className="mt-4 border-l border-indigo-600 pl-9">
                <blockquote className="font-semibold text-gray-900">
                  <p>
                    DoorBell for Business has become an invaluable extension of
                    our team. The service pays for itself in recovered
                    productivity alone.
                  </p>
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
        <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TODO: Implement <OurClients />  */}
        </div>
      </div>

      {/* Welcome Section
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Welcome To A New Era Of Business Efficiency
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              At Doorbell, we understand that time is your most valuable asset.
              We&apos;ve created a specialized service designed to help your
              business achieve greater efficiency and productivity by
              outsourcing routine tasks and errands to our reliable team of
              professionals.
            </p>
          </div>
        </div>
      </div> */}

      {/* Advantages Section
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-primary-dark">
              The Doorbell Advantage
            </h2>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-dark text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Enhanced Business Agility
                  </p>
                </dt>
                <dd className="ml-16 mt-2 text-base text-gray-500">
                  Our on-demand services let you respond to emerging needs
                  quickly, so you can stay competitive in today&apos;s
                  fast-paced business environment.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-dark text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Cost Reduction
                  </p>
                </dt>
                <dd className="ml-16 mt-2 text-base text-gray-500">
                  Eliminate the need for full-time staff dedicated to errands
                  and routine tasks, while maintaining productivity and
                  operational efficiency.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-dark text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Enterprise-Grade Reliability
                  </p>
                </dt>
                <dd className="ml-16 mt-2 text-base text-gray-500">
                  Our dedicated team undergoes rigorous training to ensure your
                  business needs are handled with the utmost professionalism and
                  attention to detail.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-dark text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Seamless Integration
                  </p>
                </dt>
                <dd className="ml-16 mt-2 text-base text-gray-500">
                  Our services easily integrate with your existing operations
                  and software systems for a cohesive business workflow.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div> */}
    </MainLayout>
  )
}