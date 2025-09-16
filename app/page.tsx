// app/page.tsx
import Hero from "@/components/Hero";
import SocialProof from "@/components/home/SocialProof";
import ProofDeck from "@/components/home/ProofDeck";
import Sprint from "@/components/home/Sprint";
import LeadMagnet from "@/components/home/LeadMagnet";
import Outcomes from "@/components/Outcomes";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <SocialProof />
      <ProofDeck />
      <Sprint />
      <Outcomes />
      <Process />
      <LeadMagnet />
      <FAQ />
    </main>
  );
}
