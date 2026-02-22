import HeroSection from "../components/home/HeroSection";
import CredibilityStats from "../components/home/CredibilityStats";
import GalleryShowcase from "../components/home/GalleryShowcase";
import PhilosophySnippet from "../components/home/PhilosophySnippet";
import NavigationCards from "../components/home/NavigationCards";
import CTASection from "../components/home/CTASection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <CredibilityStats />
      <GalleryShowcase />
      <PhilosophySnippet />
      <NavigationCards />
      <CTASection />
    </>
  );
}

export default HomePage;
