import Hero from "@/components/Hero";
import EventManchette from "@/components/EventManchette";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ChromeExtension from "@/components/ChromeExtension";
import VerifiedPayments from "@/components/VerifiedPayments";
import Advocates from "@/components/Advocates";
import SelfCustodyWallets from "@/components/SelfCustodyWallets";
import Community from "@/components/Community";
import CTASection from "@/components/CTASection";
import Terms from "@/components/Terms";

export default function Home() {
  return (
    <>
      <EventManchette />
      <Hero />
      <Features />
      <HowItWorks />
      <ChromeExtension />
      <VerifiedPayments />
      <Community />
      <CTASection />
      <Advocates />
      <SelfCustodyWallets />
      <Terms />
    </>
  );
}
