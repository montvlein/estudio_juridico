import { HeroSection } from "@components/sections/hero-section";
import { PracticeAreas } from "./client/components/sections/practice-areas";
import { WhyChooseUs } from "./client/components/sections/why-choose-us";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PracticeAreas />
      <WhyChooseUs />
    </>
  );
}
