import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SageSection from "@/components/SageSection";
import CareerTimeline from "@/components/CareerTimeline";
import InternationalSection from "@/components/InternationalSection";
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

const initiativeCards = [
  {
    title: "Digital Pioneer",
    description:
      "Led SajhaPost.com through Nepal's digital shift as Editor in Chief for 7 years. Founded Radio Bihani to amplify rural voices across Dhading.",
  },
  {
    title: "Published Researcher",
    description:
      "Author of \"Truth Trivialisation in Infodemic\" (IAMCR, 2022). Lead editor for two editions of the 'Community Radio' book.",
  },
  {
    title: "Media Rights Advocate",
    description:
      "Secretary of ACORAB Nepal, advocating for 360+ community radio stations. Active member of IAMCR, ICA, and East-West Centre alumni.",
  },
  {
    title: "Award-Winning Journalist",
    description:
      "Certificate of Appreciation from Aparajita Foundation (2025) for impactful reporting on survivors of sexual violence during armed conflict.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SageSection badge="Professional Journey" cards={currentRoles} />
      <CareerTimeline />
      <SageSection id="portfolio" badge="Key Initiatives" cards={initiativeCards} />
      <InternationalSection />
      <Footer />
    </div>
  );
};

export default Index;
