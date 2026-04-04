import Navbar from "@/components/Navbar";
import SageSection from "@/components/SageSection";
import Footer from "@/components/Footer";

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

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <SageSection badge="Key Initiatives" cards={initiativeCards} />
      <Footer />
    </div>
  );
};

export default Portfolio;
