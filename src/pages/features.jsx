import MainLayout from '@/layouts/MainLayout'
import {FeaturesHero} from "@/components/FeaturesHero";
import {Features} from "@/components/Features";

export default function Home() {
  return (
    <MainLayout>
      <FeaturesHero />
      <Features />
    </MainLayout>
  )
}
