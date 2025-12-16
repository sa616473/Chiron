import { HeroSection } from "@/components/hero-section"
import { VisionSection } from "@/components/vision-section"
import { MissionSection } from "@/components/mission-section"
import { PrinciplesSection } from "@/components/principles-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TherapistsSection } from "@/components/therapists-section"
import { TaglineCarousel } from "@/components/tagline-carousel"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VisionSection />
      <MissionSection />
      <PrinciplesSection />
      <HowItWorksSection />
      <TherapistsSection />
      <TaglineCarousel />
      <CtaSection />
      <Footer />
    </main>
  )
}
