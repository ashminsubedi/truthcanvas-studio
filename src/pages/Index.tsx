import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedWork from "@/components/FeaturedWork";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedWork />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
