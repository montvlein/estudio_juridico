import { HeroSection } from "@components/sections/hero-section";
import { PracticeAreas } from "@components/sections/practice-areas";
import { WhyChooseUs } from "@components/sections/why-choose-us";
import { CTASection } from "@components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PracticeAreas />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
