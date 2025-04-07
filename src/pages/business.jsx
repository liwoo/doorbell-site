import React from 'react'
import { useState, useEffect } from 'react'
import MainLayout from '@/layouts/MainLayout'
import clsx from 'clsx'
import { CheckIcon } from '@radix-ui/react-icons'
import OurClients from '@/components/OurClients'
import { Button } from '@/components/Button'
import Image from 'next/image'
import RequestConsultation from '@/components/RequestConsultation'
import Testimonies from '@/components/Testimonies'

export default function Business() {
  return (
    <MainLayout title="Premium Errand Services for Elite Organizations | Doorbell">
      <Hero />
      {/* <OurClients /> */}
      <Features />
      <Pricing />
      <Testimonials />
      {/* <Newsletter /> */}
      <RequestConsultation />
    </MainLayout>
  )
}

function Hero() {
  return (
    <section className="animate-gradient relative h-screen overflow-hidden bg-primary bg-gradient-to-br from-primary to-primary-dark py-16 text-center text-white sm:py-24">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-50">
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
      </div>
      <div className="relative z-[1] mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 sm:px-8">
        <h1 className="mb-6 text-3xl font-extrabold sm:text-5xl">
          Transform Your Business Operations with Premium Errand Services
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg sm:text-xl">
          Free up your team&apos;s valuable time and focus on what matters most:
          driving growth and innovation with our subscription-based errand
          service designed for elite organizations.
        </p>
        <div className="hero-cta flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Button
            href="#pricing"
            className="mx-2.5 hidden bg-secondary text-gray-800 lg:block"
          >
            View Pricing Plans
          </Button>
          <Button
            href="#get-in-touch"
            variant="outline"
            className="hidden lg:flex"
          >
            <span className="mx-2.5text-gray-100">Request Demo</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="relative mb-12 flex flex-col items-center justify-center text-center">
      <h2 className="relative mb-2 inline-block text-3xl font-bold text-primary-dark after:absolute after:-bottom-2.5 after:left-1/2 after:h-1 after:w-16 after:-translate-x-1/2 after:rounded-sm after:bg-secondary after:content-[''] sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="text-gray-medium mt-2">{subtitle}</p>}
    </div>
  )
}

function AdvantageOverview() {
  return (
    <section className="advantage-overview mb-16 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
      <div className="advantage-image relative h-72 w-full overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl md:h-96">
        <Image
          src="https://res.cloudinary.com/tiyeni/image/upload/v1724606681/Screenshot_2024-08-25_at_7.24.22_PM.png"
          alt="DoorBell Business Service"
          className="block h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          fill
        />
      </div>
      <div className="advantage-text">
        <h3 className="mb-6 text-2xl font-semibold text-primary-dark sm:text-3xl">
          Premium Errand Service Tailored for Businesses
        </h3>
        <p className="text-gray-medium mb-8 text-base leading-relaxed sm:text-lg">
          DoorBell for Business brings efficiency and reliability to your
          organization through our specialized errand service. Free up your
          team&apos;s time and focus on your core business activities.
        </p>
        <div className="stats-container mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <div className="stat-box flex-1 rounded-lg border-b-4 border-secondary bg-white p-4 text-center shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md sm:p-6">
            <div className="stat-number mb-1 text-3xl font-bold text-primary-dark sm:mb-2 sm:text-4xl">
              99.7
              <span className="text-accent-dark text-xl sm:text-2xl">%</span>
            </div>
            <div className="stat-label text-gray-medium text-sm sm:text-base">
              On-time delivery
            </div>
          </div>
          <div className="stat-box flex-1 rounded-lg border-b-4 border-secondary bg-white p-4 text-center shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md sm:p-6">
            <div className="stat-number mb-1 text-3xl font-bold text-primary-dark sm:mb-2 sm:text-4xl">
              100
              <span className="text-accent-dark text-xl sm:text-2xl">%</span>
            </div>
            <div className="stat-label text-gray-medium text-sm sm:text-base">
              Background-checked staff
            </div>
          </div>
          <div className="stat-box flex-1 rounded-lg border-b-4 border-secondary bg-white p-4 text-center shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md sm:p-6">
            <div className="stat-number mb-1 text-3xl font-bold text-primary-dark sm:mb-2 sm:text-4xl">
              24
              <span className="text-accent-dark text-base sm:text-xl">/7</span>
            </div>
            <div className="stat-label text-gray-medium text-sm sm:text-base">
              Support availability
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSteps() {
  const steps = [
    {
      number: 1,
      title: 'Register Your Business',
      description:
        'Sign up and set up your business profile with all necessary details and requirements.',
    },
    {
      number: 2,
      title: 'Submit Errand Requests',
      description:
        'Use our intuitive dashboard to submit errand requests with specific instructions.',
    },
    {
      number: 3,
      title: 'Track in Real-Time',
      description:
        'Monitor your errands in real-time with our advanced tracking system.',
    },
    {
      number: 4,
      title: 'Receive & Review',
      description:
        'Accept completed errands and provide feedback to help us continuously improve.',
    },
  ]

  return (
    <section className="my-16 h-fit">
      <SectionTitle title="How It Works - A Simple Four-Step Process"></SectionTitle>
      <div className="steps-container relative mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-6">
        {/* Horizontal connecting line */}
        <div className="absolute left-0 right-0 top-10 z-0 hidden h-[3px] bg-gradient-to-r from-primary-light to-accent md:block"></div>

        {steps.map((step, index) => (
          <div
            key={step.number}
            className="relative z-10 mb-8 flex flex-col items-center md:mb-0"
          >
            <div>
              <div
                className={`relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white text-3xl font-bold shadow-lg
                            ${
                              index % 2 === 0
                                ? 'bg-primary-dark text-white'
                                : 'text-text-dark bg-secondary'
                            }`}
              >
                {step.number}
              </div>
            </div>
            <div className="group h-full w-full rounded-lg bg-white p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md">
              <h4 className="mb-3 text-center text-2xl font-semibold text-primary-dark">
                {step.title}
              </h4>
              <p className="text-gray-medium flex min-h-[4rem] items-center justify-center text-center text-sm">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border-t-4 border-primary-dark bg-white p-8 text-center shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-3 hover:shadow-xl sm:p-10">
      <div className="to-accent-dark absolute left-0 top-0 h-[5px] w-full -translate-x-full transform bg-gradient-to-r from-accent transition-transform duration-500 ease-in-out group-hover:translate-x-0"></div>
      <div className="from-primary-icon-bg to-accent-icon-bg group-hover:from-accent-icon-bg group-hover:to-primary-icon-bg mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br shadow-md transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-gradient-to-br sm:h-20 sm:w-20">
        <i className="text-3xl text-primary">{icon}</i>
      </div>
      <h3 className="relative mb-4 pb-3 text-xl font-semibold text-primary-dark after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-10 after:-translate-x-1/2 after:bg-secondary after:content-[''] sm:text-2xl">
        {title}
      </h3>
      <p className="text-gray-medium">{description}</p>
    </div>
  )
}

function Features() {
  const featuresList = [
    {
      icon: '🏢',
      title: 'Exclusive Business Focus',
      description:
        'Unlike consumer errand services, our entire operation is designed specifically for corporate needs and professional environments.',
    },
    {
      icon: '✓',
      title: 'Guaranteed Reliability',
      description:
        '99.7% on-time completion rate with proactive communication at every step of the process.',
    },
    {
      icon: '🔒',
      title: 'Enterprise-Grade Security',
      description:
        'Full insurance coverage, background-checked specialists, and secure handling protocols for your peace of mind.',
    },
    {
      icon: '🔄',
      title: 'Seamless Integration',
      description:
        'Our service works alongside your existing operations without disruption or additional management overhead.',
    },
  ]

  return (
    <section
      id="features"
      className="from-gray-light bg-gradient-to-b to-white py-16 sm:py-20"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <SectionTitle
          title="The DoorBell Advantage"
          subtitle="Our business-focused approach sets us apart"
        />
        <AdvantageOverview />
        <ProcessSteps />
        <div className="feature-grid mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuresList.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingToggle({ isYearly, onToggle }) {
  return (
    <div className="pricing-toggle-container mb-12 flex justify-center">
      <div className="pricing-toggle relative z-[2] flex flex-col items-center rounded-full bg-white p-2 shadow-md sm:flex-row">
        <span
          className={`toggle-option relative cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out sm:px-6 sm:py-3 sm:text-base ${
            !isYearly
              ? 'bg-primary-dark text-white'
              : 'text-gray-medium hover:text-primary-dark'
          }`}
          onClick={() => onToggle(false)}
        >
          Monthly
        </span>
        <div className="relative mx-2 my-2 inline-block h-6 w-12 sm:my-0">
          <input
            type="checkbox"
            id="billing-toggle"
            checked={isYearly}
            onChange={(e) => onToggle(e.target.checked)}
            className="peer h-0 w-0 opacity-0"
          />
          <label
            htmlFor="billing-toggle"
            className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-full bg-gray-300 transition-all duration-300 ease-in-out before:absolute before:bottom-1 before:left-1 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 before:ease-in-out before:content-[''] peer-checked:bg-secondary peer-checked:before:translate-x-6 peer-focus:ring-2 peer-focus:ring-accent"
          ></label>
        </div>
        <span
          className={`toggle-option relative cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out sm:px-6 sm:py-3 sm:text-base ${
            isYearly
              ? 'bg-primary-dark text-white'
              : 'text-gray-medium hover:text-primary-dark'
          }`}
          onClick={() => onToggle(true)}
        >
          Yearly
        </span>
        <div
          className={`absolute -right-4 -top-2 rounded-full bg-secondary px-2 py-1 text-xs font-bold  shadow-sm`}
        >
          Save 15%
        </div>
      </div>
    </div>
  )
}

 function PlanCard({ plan, isYearly }) {
  const formatCurrency = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const monthlyPrice = plan.monthlyPrice
  const yearlyPrice = Math.round(plan.monthlyPrice * 12 * 0.85) // 15% discount
  const savings = plan.monthlyPrice * 12 - yearlyPrice

  return (
    <div
      className={`border-gray relative flex h-full w-full flex-col items-center overflow-hidden rounded-xl border bg-white p-6 transition-all duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-lg sm:p-8 lg:p-10
            ${
              plan.popular
                ? 'z-10 border-2 border-secondary shadow-md'
                : 'hover:border-primary-light'
            }
            after:transition-height after:absolute after:left-0 after:top-0 after:h-[5px] after:w-full after:duration-300 after:ease-in-out after:content-['']
            ${
              plan.popular
                ? 'after:to-accent-dark after:bg-gradient-to-r after:from-secondary'
                : 'after:bg-gradient-to-r after:from-primary-light after:to-primary'
            }
        `}
    >
      {plan.popular && (
        <div
          className={`absolute -top-2 right-5 z-10 rounded-bl-xl rounded-br-xl bg-secondary px-2 py-2 text-xs  font-bold shadow-sm`}
        >
          {' '}
          {/* Adjusted positioning, rounding, colors */}
          <p className="mt-1">Most Popular</p>
        </div>
      )}
      <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-primary-dark sm:text-2xl">
        {plan.icon} {plan.title}
      </h3>
      <p className="text-gray-medium mb-6 min-h-[60px] text-sm sm:mb-8">
        {plan.description}
      </p>

      <div
        className={`mb-6 flex w-fit justify-center rounded-lg p-4 text-center shadow-inner transition-all duration-300 ease-in-out sm:mb-8
          ${
            plan.popular
              ? 'bg-secondary'
              : 'bg-gradient-to-b from-gray-50 to-gray-100'
          }
          `}
      >
        <div className={`plan-price ${!isYearly ? 'block' : 'hidden'}`}>
          <span className="currency text-gray-text mb-1 block text-sm font-semibold">
            MWK
          </span>
          <span
            className={`amount text-3xl font-extrabold leading-none sm:text-4xl ${
              plan.popular ? 'text-text-dark' : 'text-primary-dark'
            }`}
          >
            {formatCurrency(monthlyPrice)}
          </span>
          <span className="period text-gray-period mt-1 block text-xs sm:text-sm">
            /month
          </span>
        </div>
        <div className={`plan-price ${isYearly ? 'block' : 'hidden'}`}>
          <span className="currency text-gray-text mb-1 block text-sm font-semibold">
            MWK
          </span>
          <span
            className={`amount text-3xl font-extrabold leading-none sm:text-4xl ${
              plan.popular ? 'text-text-dark' : 'text-primary-dark'
            }`}
          >
            {formatCurrency(yearlyPrice)}
          </span>
          <span className="period text-gray-period mt-1 block text-xs sm:text-sm">
            /year
          </span>
          <span
            className={`${
              plan.popular
                ? 'bg-primary-dark text-white' : 'bg-green-100 text-green-800'
            } mt-2 inline-block rounded-full  px-3 py-1 text-xs font-bold `}
          >
            Save MWK {formatCurrency(savings)}
          </span>
        </div>
      </div>

      <ul className="plan-features mb-8 min-h-[180px] flex-grow list-none pl-0 sm:mb-10">
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-3 sm:mb-4">
            <div className="flex items-start text-sm sm:text-base">
              <span className="bg-primary-icon-bg mr-3 mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-primary">
                ✓
              </span>
              <div className="flex flex-col">
                <p className="text-base font-medium">{feature.text}</p>
                {feature.note && (
                  <p className="text-sm text-gray-700">{feature.note}</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={`plan-button mt-auto block rounded-full px-6 py-3 text-center font-semibold no-underline shadow-md transition-all duration-300 ease-in-out
                ${
                  plan.popular
                    ? 'to-accent-dark text-text-dark bg-secondary hover:-translate-y-1 hover:shadow-lg'
                    : 'bg-primary-dark text-white hover:-translate-y-1 hover:shadow-lg'
                }`}
      >
        Buy plan
      </a>
    </div>
  )
}

function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      icon: '🛵',
      title: 'LIGHT TIER',
      description:
        'Entry-level solution for small businesses or occasional needs',
      monthlyPrice: 75000,
      features: [
        { text: 'Up to 60 errands monthly', note: 'max 3/day' },
        { text: 'Single-user access' },
        { text: 'Standard support', note: '24hr response' },
      ],
      popular: false,
    },
    {
      icon: '🚚',
      title: 'SILVER TIER',
      description:
        'Perfect for growing businesses with consistent errand needs',
      monthlyPrice: 150000,
      features: [
        { text: 'Up to 120 errands monthly', note: 'max 5/day' },
        { text: 'Multi-user access', note: '2 users' },
        { text: 'Business hours support', note: 'same-day response' },
      ],
      popular: false,
    },
    {
      icon: '⭐',
      title: 'GOLD TIER',
      description:
        'Ideal for medium to large businesses with regular errand requirements',
      monthlyPrice: 250000,
      features: [
        { text: 'Up to 200 errands monthly', note: 'priority' },
        { text: 'Multi-user access', note: '5 users' },
        { text: 'Priority support', note: '4hr response' },
        { text: 'Dedicated account manager' },
      ],
      popular: true,
    },
    {
      icon: '💎',
      title: 'PLATINUM TIER',
      description:
        'Our most comprehensive offering for businesses with frequent errand needs',
      monthlyPrice: 450000,
      features: [
        { text: 'Unlimited errands' },
        { text: 'Enterprise access' },
        { text: '24/7 premium support', note: 'immediate response' },
        { text: 'Custom API integration options' },
      ],
      popular: false,
    },
  ]

  return (
    <section
      id="pricing"
      className="pricing bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <SectionTitle
          title="Subscription Tiers Tailored to Your Needs"
          subtitle="Choose the plan that aligns with your organization's requirements"
        />
        <PricingToggle isYearly={isYearly} onToggle={setIsYearly} />
        <div className="plan-grid mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} isYearly={isYearly} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="testimonials bg-gray-light py-16 sm:py-20">
      <div className="container mx-auto max-w-4xl px-4 sm:px-8">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Success stories from businesses that have transformed their operations"
        />
        <div className="testimonial-container">
          <div className="testimonial-card relative mb-8 overflow-hidden rounded-lg bg-white p-8 shadow-md sm:p-10">
            <span
              className="absolute left-4 top-4 z-0 select-none font-serif text-6xl leading-none text-primary/10 sm:left-5 sm:top-5 sm:text-8xl"
              aria-hidden="true"
            >
              “
            </span>
            <p className="testimonial-text relative z-10 mb-6 pl-4 text-lg italic text-gray-700 sm:pl-6 sm:text-xl">
              DoorBell for Business has become an invaluable extension of our
              team. The service pays for itself in recovered productivity alone.
              Our staff can focus on strategic tasks while DoorBell handles all
              our errands efficiently.
            </p>
            <div className="client-info relative z-10 flex items-center pl-4 sm:pl-6">
              <Image
                width={100}
                height={100}
                className="mr-4 h-16 w-16 rounded-full object-cover lg:h-24 lg:w-24"
                src="/images/testimonies/hosanna.jpg"
                alt=""
              />
              <div>
                <div className="client-name text-base font-semibold text-primary-dark sm:text-lg">
                  Hosanna Mapira
                </div>
                <div className="client-position text-gray-medium text-sm sm:text-base">
                  Lilongwe, Malawi
                </div>
              </div>
            </div>
          </div>
          {/* Add more testimonials as needed */}
        </div>
      </div>
    </section>
  )
}

// Newsletter Section Component
function Newsletter() {
  return (
    <section className="newsletter bg-white py-12 sm:py-16">
      <div className="newsletter-container mx-auto max-w-2xl px-4 text-center sm:px-8">
        <h2 className="newsletter-title mb-4 text-2xl font-semibold text-primary-dark sm:text-3xl">
          Subscribe for Exclusive Offers
        </h2>
        <p className="newsletter-description text-gray-medium mb-6 sm:mb-8">
          Join our newsletter to receive special promotions, business efficiency
          tips, and early access to new features.
        </p>
        <form className="newsletter-form mx-auto flex max-w-lg flex-col gap-2 sm:flex-row sm:gap-3">
          <input
            type="email"
            className="newsletter-input border-gray flex-grow rounded-md border px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary-light"
            placeholder="Your business email"
            required
          />
          <button
            type="submit"
            className="newsletter-button cursor-pointer rounded-md bg-primary px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-primary-dark"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
