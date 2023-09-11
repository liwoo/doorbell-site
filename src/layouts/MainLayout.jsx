import Head from "next/head";
import {Header} from "@/components/Header";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';

const image = "https://res.cloudinary.com/tiyeni/image/upload/v1678794284/Doorbell%20Landing.png";
const content = "Doorbell is the easiest way to order food from your favorite restaurants, delivered right to your door."
export default function MainLayout({title = "Doorbell - the Zonse Momo App", children}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={content}
                />
                <meta name="keywords" content="food, restaurant, delivery, Doorbell" />
                <meta name="author" content="Zonse Momo" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Doorbell - the Zonse Momo App" />
                <meta
                    property="og:description"
                    content={content}
                />
                <meta property="og:image" content={image} />
                <meta property="og:url" content="https://twitter.com/doorbellmw/status/1425719601946574855?s=48&t=7kfHpIhupJ6gLUhLGS_W9Q" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Doorbell - the Zonse Momo App" />
                <meta
                    name="twitter:description"
                    content={content}
                />
                <meta name="twitter:image" content={image} />
            </Head>
            <Header/>
            <main>
                {children}
                <Analytics />
            </main>
            <Email />
            <Footer/>
        </>
    )
}