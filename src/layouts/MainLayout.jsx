import Head from 'next/head'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

const image =
  'https://res.cloudinary.com/tiyeni/image/upload/v1678794284/Doorbell%20Landing.png'
const content =
  'Doorbell is delivery as a service for Malawian businesses. Restaurants, pharmacies, shops and couriers send through our portal, checkout links or API, and we hand over with PIN-verified proof of delivery.'
export default function MainLayout({
  title = 'Doorbell | Last-mile delivery for businesses in Malawi',
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <meta name="keywords" content="last-mile delivery, courier, delivery API, Lilongwe, Malawi, Doorbell" />
        <meta name="author" content="Zatheka" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="https://doorbell.mw" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={content} />
        <meta name="twitter:image" content={image} />
      </Head>
      <Header />
      <main>
        {children}
        <Analytics />
      </main>
      
      <Footer />
    </>
  )
}
