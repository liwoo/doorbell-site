import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from "next/image";
import clsx from 'clsx'
import { useInView } from 'framer-motion'
import { Container } from '@/components/Container'

const features = [
  {
    body: 'Doorbell makes it easy to pay for your order. We accept all major credit cards and debit cards.',
    image: '/images/3d/pay.png',
    variant: 'secondary'
  },
  {
    body: 'Errands is Doorbell’s on-demand delivery service. Get anything delivered in under an hour.',
    image: '/images/3d/courier.png',
    variant: 'primary'
  },
  {
    body: 'Plan your meals, with our estimated prep time, so that you never miss your snack time.',
    image: '/images/features/plan-meals.png',
    variant: 'primary'
  },
  {
    body: 'Find and order food from your favourite restaurants, delivered right to your door.',
    image: '/images/3d/restaurant.png',
    variant: 'alternative'
  },
  {
    body: 'Errands Allow you to plan out your delivery, make stops and fulfil each task in the order you want. get specific with line items too.',
    image: '/images/features/errands.png',
    variant: 'secondary'
  },
  {
    body: 'Schedule your delivery for a time that works best for you. We’ll make sure your order is delivered right to your door.',
    image: '/images/3d/delivery.png',
    variant: 'secondary'
  },
  {
    body: 'Discount codes, make things way more interesting, find and share them to make the doorbell experience special.',
    image: '/images/features/discounts.png',
    variant: 'primary'
  },
  {
    body: 'Your cart is your way to of expressing yourself, pick and choose as you please we understand convenience.',
    image: '/images/features/your-cart.png',
    variant: 'primary'
  },
  {
    body: 'Track your delivery in realtime. We’ll let you know when your order is on its way and when it’s been delivered.',
    image: '/images/3d/mobile.png',
    variant: 'primary'
  },
  {
    body: 'Groceries right at your finger tips. Shop from your favourite stores, from the comfort of your home.',
    image: '/images/3d/shop.png',
    variant: 'alternative'
  },
]

const variantStyles = {
  primary: 'bg-white',
  secondary: 'bg-primary text-white',
  alternative: 'bg-primary-light text-white',
}

function Feature({
  title,
  body,
  image,
  variant = 'primary',
  className,
  ...props
}) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl p-6 opacity-0 shadow-md shadow-gray-900/5 w-80',
        variantStyles[variant],
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <div className="flex flex-col items-center py-5">
        <blockquote className="w-2/3">
          {/*<p*/}
          {/*  className={clsx(*/}
          {/*    'mt-4 text-lg font-semibold leading-6',*/}
          {/*     variant === 'secondary' || variant === 'alternative' ? 'text-white' : 'text-gray-900'*/}
          {/*  )}*/}
          {/*>*/}
          {/*  {title}*/}
          {/*</p>*/}
          <p
            className={clsx(
              'mb-3 leading-7 font-semibold text-2xl',
              variant === 'secondary' || variant === 'alternative' ? 'text-white/90' : 'text-gray-600'
            )}
          >
            {body}
          </p>
        </blockquote>
        <Image
          src={image}
          alt={title}
          width={540}
          height={360}
          quality={25}
          className="w-48 h-48 object-contain"
        />
      </div>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function FeatureColumn({
  className,
  features,
  featureClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {features.concat(features).map((feature, featureIndex) => (
        <Feature
          key={featureIndex}
          aria-hidden={featureIndex >= features.length}
          className={featureClassName(featureIndex % features.length)}
          {...feature}
        />
      ))}
    </div>
  )
}

function FeatureGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.9 })
  let columns = splitArray(features, 2)
  columns = [columns[0], columns[1]]

  return (
      <div
          ref={containerRef}
          className="relative mt-8 overflow-hidden "
      >
        {isInView && (
            <div className="grid h-[49rem] max-h-[150vh] grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:mt-10 justify-items-center gap-0 px-48">
              <FeatureColumn
                  features={columns[0]}
                  featureClassName={(featureIndex) =>
                      clsx(
                          featureIndex >= columns[0].length + columns[1].length &&
                          'md:hidden',
                          featureIndex >= columns[0].length && 'lg:hidden'
                      )
                  }
                  msPerPixel={10}
              />
              <FeatureColumn
                  features={columns[1]}
                  className="hidden md:block"
                  featureClassName={(featureIndex) =>
                      featureIndex >= columns[1].length && 'lg:hidden'
                  }
                  msPerPixel={15}
              />
            </div>
        )}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
      </div>
  )
}

export function Features() {
  return (
      <section
          id="features"
          aria-labelledby="features-title"
          className="pt-12 pb-16 sm:pt-32 sm:pb-24"
      >
        <Container>
          <FeatureGrid />
        </Container>
      </section>
  )
}

export default Features;