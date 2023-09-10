import Head from 'next/head'

import {CallToAction} from '@/components/CallToAction'
import {Hero} from '@/components/Hero'
import {Reviews} from '@/components/Reviews'
import {SecondaryFeatures} from '@/components/SecondaryFeatures'
import Contact from "@/components/Contact";
import Testimonies from "@/components/Testimonies";
import Download from "@/components/Download";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
    return (
        <MainLayout>
            <Hero/>
            <SecondaryFeatures/>
            <CallToAction/>
            <Reviews/>
            <Contact/>
            <Testimonies />
            <Download />
        </MainLayout>
    )
}
