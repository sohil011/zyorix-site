import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Outcomes from "@/components/Outcomes";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <SocialProof />
      <Outcomes />
      <Process />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
