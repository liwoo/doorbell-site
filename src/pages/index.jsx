import MainLayout from '@/layouts/MainLayout'
import { Hero } from '@/components/landing/Hero'
import { ProofBar } from '@/components/landing/ProofBar'
import { Segments } from '@/components/landing/Segments'
import { Platform } from '@/components/landing/Platform'
import { DeliveryProcess } from '@/components/landing/DeliveryProcess'
import { Onboarding } from '@/components/landing/Onboarding'
import { Developers } from '@/components/landing/Developers'
import { Pricing } from '@/components/landing/Pricing'
import { Faqs } from '@/components/landing/Faqs'
import { GetStarted } from '@/components/landing/GetStarted'

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <ProofBar />
      <Segments />
      <DeliveryProcess />
      <Pricing />
      <Onboarding />
      <Platform />
      <Developers />
      <Faqs />
      <GetStarted />
    </MainLayout>
  )
}
