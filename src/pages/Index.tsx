import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SageSection from "@/components/SageSection";
import Footer from "@/components/Footer";

const journeyCards = [
  {
    title: "Associate Editor",
    description:
      "Onlinekhabar.com — Directing editorial operations and opinion for a global newsroom of 100+ staff.",
    tag: "Kathmandu",
  },
  {
    title: "Media Educator",
    description:
      "Shepherd College — Teaching the next generation of journalists in News Reporting and Media Technology.",
    tag: "BMT & MMT Programs",
  },
];

const initiativeCards = [
  {
    title: "Digital Pioneer",
    description:
      "Led Sajhapost.com through Nepal's digital shift and founded Radio Bihani to amplify rural voices.",
  },
  {
    title: "Published Researcher",
    description:
      'Author of "Truth Trivialisation in Infodemic" (IAMCR, 2022) and lead editor for \'Community Radio\'.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SageSection badge="Professional Journey" cards={journeyCards} />
      <SageSection badge="Key Initiatives" cards={initiativeCards} />
      <Footer />
    </div>
  );
};

export default Index;
