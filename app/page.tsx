import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ChromeExtension from "@/components/ChromeExtension";
import Advocates from "@/components/Advocates";
import SelfCustodyWallets from "@/components/SelfCustodyWallets";
import Community from "@/components/Community";
import CTASection from "@/components/CTASection";
import Terms from "@/components/Terms";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <ChromeExtension />
      <Community />
      <CTASection />
      <Advocates />
      <SelfCustodyWallets />
      <Terms />
    </>
  );
}
