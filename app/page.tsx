import Hero from "@/components/Hero";
import WhyClubFede from "@/components/WhyClubFede";
import FeaturedCollection from "@/components/FeaturedCollection";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import BeadStrand from "@/components/ui/BeadStrand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyClubFede />
      <FeaturedCollection />
      <BeadStrand className="bg-white" />
      <HowItWorks />
      <Gallery />
      <Reviews />
      <FAQ />
    </>
  );
}
