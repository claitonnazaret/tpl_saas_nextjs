import Examples from '@/components/home-page/examples'
import Features from '@/components/home-page/features'
import Hero from '@/components/home-page/hero'
import HowItWorks from '@/components/home-page/how-it-works'
import Navbar from '@/components/home-page/navbar'
import Pricing from '@/components/home-page/pricing'
import { ScrollToTop } from '@/components/home-page/scroll-to-top'

export default function HomePage() {
  return (
    <main className="bg-grid-white/[0.02] relative min-h-screen bg-black/[0.96] antialiased">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Examples />
        <Pricing />
        <ScrollToTop />
      </div>
    </main>
  )
}
