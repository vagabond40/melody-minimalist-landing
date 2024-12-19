import { Hero } from "@/components/Hero";
import { LatestRelease } from "@/components/LatestRelease";
import { TourDates } from "@/components/TourDates";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <main className="bg-charcoal min-h-screen text-white">
      <Navigation />
      <Hero />
      <LatestRelease />
      <TourDates />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;