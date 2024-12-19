import { Hero } from "@/components/Hero";
import { LatestRelease } from "@/components/LatestRelease";
import { TourDates } from "@/components/TourDates";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { YouTubeSection } from "@/components/YouTubeSection";
import { Profile } from "@/components/Profile";
import { PastPerformances } from "@/components/PastPerformances";

const Index = () => {
  return (
    <main className="bg-charcoal min-h-screen text-white">
      <Navigation />
      <Hero />
      <Profile />
      <LatestRelease />
      <YouTubeSection />
      <TourDates />
      <PastPerformances />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;