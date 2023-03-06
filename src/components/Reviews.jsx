import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from "next/image";
import clsx from 'clsx'
import {
  useInView,
} from 'framer-motion'

import { Container } from '@/components/Container'
import Title from "@/components/Title";

const reviews = [
  {
    title: 'Find your favorite restaurant',
    body: 'Doorbell is the easiest way to order food from your favorite restaurants, delivered right to your door.',
    image: '/images/3d/restaurant.png',
  },
  {
    title: 'Shop groceries, retail and much more',
    body: 'From groceries to retail, Doorbell has you covered. Shop from your favorite stores and get your items delivered right to your door.',
    image: '/images/3d/shop.png',
  },
  {
    title: 'Oh, did we mention Courier?',
    body: 'Courier is Doorbell’s on-demand delivery service. Get anything delivered in under an hour. From groceries to retail, Doorbell has you covered. Shop from your favorite stores and get your items delivered right to your door.',
    image: '/images/3d/courier.png',
  },
  {
    title: 'Schedule your delivery',
    body: 'Schedule your delivery for a time that works best for you. We’ll make sure your order is delivered right to your door.',
    image: '/images/3d/delivery.png',
  },
  {
    title: 'Track your delivery in real time',
    body: 'Track your delivery in real time. We’ll let you know when your order is on its way and when it’s been delivered.',
    image: '/images/3d/mobile.png',
  },
  {
    title: 'Pay for your order easily and securely',
    body: 'Doorbell makes it easy to pay for your order. We accept all major credit cards and debit cards.',
    image: '/images/3d/pay.png',
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, image, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in flex rounded-3xl bg-white p-6 opacity-0 shadow-md gap-x-4 shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <div className="w-1/3">
        <Image src={image} alt={title} width={1080} height={720} quality={25} />
      </div>
      <blockquote className="text-gray-900 w-2/3">
        <p className="mt-4 text-lg font-semibold leading-6">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
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

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
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
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
        id="reviews"
        aria-labelledby="reviews-title"
        className="pt-12 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <Title title="Why Choose Us" center={true} />
        <ReviewGrid/>
      </Container>
    </section>
  )
}
