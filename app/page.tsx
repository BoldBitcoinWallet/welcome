import Hero from "@/components/Hero";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Community from "@/components/Community";
import CTASection from "@/components/CTASection";
import Terms from "@/components/Terms";

export default function Home() {
  return (
    <>
      <Hero />
      <ScreenshotGallery />
      <HowItWorks />
      <Features />
      <Community />
      <CTASection />
      <Terms />
    </>
  );
}
