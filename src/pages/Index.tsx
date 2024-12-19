import { Hero } from "@/components/Hero";
import { LatestRelease } from "@/components/LatestRelease";
import { TourDates } from "@/components/TourDates";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-white">
      <Hero />
      <LatestRelease />
      <TourDates />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;