import React, { useEffect, useRef } from 'react'
import Image from "next/image"
import { Container } from '@/components/Container'

// Sample logos - replace with actual logos
// These are placeholders from the existing feature images
const logos = [
  {
    name: 'Company 1',
    logo: '/images/3d/pay.png',
  },
  {
    name: 'Company 2',
    logo: '/images/3d/courier.png',
  },
  {
    name: 'Company 3',
    logo: '/images/3d/restaurant.png',
  },
  {
    name: 'Company 4',
    logo: '/images/3d/delivery.png',
  },
  {
    name: 'Company 5',
    logo: '/images/3d/mobile.png',
  },
  {
    name: 'Company 6',
    logo: '/images/3d/shop.png',
  },
]

function Logo({ name, logo }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center mx-8 w-40 h-20">
      <Image
        src={logo}
        alt={`${name} logo`}
        width={160}
        height={80}
        className="object-contain max-h-full max-w-full"
      />
    </div>
  )
}

function LogoScroll() {
  const scrollRef = useRef(null)
  
  useEffect(() => {
    // Auto-scrolling animation
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    
    let animationFrameId
    let startTime
    const totalDuration = 25000 // Time in ms to complete one full scroll cycle
    
    const scroll = (timestamp) => {
      if (!startTime) startTime = timestamp
      if (!scrollContainer) return
      
      const elapsed = timestamp - startTime
      const maxScroll = scrollContainer.scrollWidth / 2 // Only scroll through first set of logos
      
      // Calculate position with a smooth loop
      const progress = (elapsed % totalDuration) / totalDuration
      scrollContainer.scrollLeft = progress * maxScroll
      
      animationFrameId = requestAnimationFrame(scroll)
    }
    
    animationFrameId = requestAnimationFrame(scroll)
    
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])
  
  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient overlay on left */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
      
      {/* Scrolling container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide py-8 w-full"
      >
        <div className="flex">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <Logo key={`logo-first-${index}`} {...logo} />
          ))}
          
          {/* Duplicate set for seamless scrolling */}
          {logos.map((logo, index) => (
            <Logo key={`logo-second-${index}`} {...logo} />
          ))}
        </div>
      </div>
      
      {/* Gradient overlay on right */}
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
    </div>
  )
}

export function OurClients() {
  return (
    <section
      id="partners"
      aria-labelledby="partners-title"
      className="pb-8 pt-8 sm:pb-16 sm:pt-16"
    >
      <Container>
        <p
          id="partners-title"
          className="text-base font-semibold text-center tuppercase tracking-wide text-primary-dark"
        >
          CLIENTS WHO CHOOSE DOORBELL EVERYDAY
        </p>
        <LogoScroll />
      </Container>
    </section>
  )
}

export default OurClients;