import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SageSection from "@/components/SageSection";
import Footer from "@/components/Footer";

const currentRoles = [
  {
    title: "Associate Editor",
    description:
      "Onlinekhabar.com — Directing editorial operations and opinion for Nepal's most-visited digital news platform with a global team of 100+ staff.",
    tag: "Kathmandu",
  },
  {
    title: "Media Educator",
    description:
      "Shepherd College — Teaching the next generation of journalists in News Reporting, New Media, and Online Journalism.",
    tag: "BMT & MMT Programs",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SageSection badge="Professional Journey" cards={currentRoles} />
      <Footer />
    </div>
  );
};

export default Index;
