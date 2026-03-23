import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhyLitestackSection } from "@/components/WhyLitestackSection";
import { WhatWeBuildSection } from "@/components/WhatWeBuildSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ResultsSection } from "@/components/ResultsSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <WhyLitestackSection />
        <WhatWeBuildSection />
        <ProcessSection />
        <ResultsSection />
        <FinalCtaSection />
      </main>
    </div>
  );
}