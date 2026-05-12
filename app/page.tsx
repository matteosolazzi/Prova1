import LanguageToggle from "@/components/LanguageToggle";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import SelectedWins from "@/components/SelectedWins";
import HowIThink from "@/components/HowIThink";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import BeyondWork from "@/components/BeyondWork";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <LanguageToggle />
      <main className="mx-auto w-full px-6 md:px-8" style={{ maxWidth: "720px" }}>
        <Hero />
        <SectionDivider />
        <WhatIDo />
        <SectionDivider />
        <SelectedWins />
        <SectionDivider />
        <HowIThink />
        <SectionDivider />
        <CurrentlyExploring />
        <SectionDivider />
        <BeyondWork />
        <SectionDivider />
        <Footer />
      </main>
    </>
  );
}
