import MainLayout from '@/layouts/MainLayout'
import {FeaturesHero} from "@/components/FeaturesHero";
import {Features} from "@/components/Features";
import Email from '@/components/Email'

export default function Home() {
  return (
    <MainLayout>
      <FeaturesHero />
      <Features />
      <Email />
    </MainLayout>
  )
}
