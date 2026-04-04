import Navbar from "@/components/Navbar";
import CareerTimeline from "@/components/CareerTimeline";
import InternationalSection from "@/components/InternationalSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <CareerTimeline />
      <InternationalSection />
      <Footer />
    </div>
  );
};

export default About;
