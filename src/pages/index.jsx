import Head from 'next/head'

import {CallToAction} from '@/components/CallToAction'
import {Faqs} from '@/components/Faqs'
import {Header} from '@/components/Header'
import {Hero} from '@/components/Hero'
import {Reviews} from '@/components/Reviews'
import {SecondaryFeatures} from '@/components/SecondaryFeatures'
import Contact from "@/components/Contact";
import Testimonies from "@/components/Testimonies";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Doorbell - the Zonse Momo App</title>
                <meta
                    name="description"
                    content="Doorbell is the easiest way to order food from your favorite restaurants, delivered right to your door."
                />
            </Head>
            <Header/>
            <main>
                <Hero/>
                <SecondaryFeatures/>
                <CallToAction/>
                <Reviews/>
                <Contact/>
                <Testimonies />
                <Download />
            </main>
            <Footer/>
        </>
    )
}
