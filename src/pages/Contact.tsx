import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionBadge } from "@/components/SageSection";

const Contact = () => {
  const ref = useScrollReveal();

  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <section ref={ref} className="py-24 px-[8%]">
        <SectionBadge>Get In Touch</SectionBadge>
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-8">Connect</h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
            For collaborations, speaking engagements, media inquiries, or academic partnerships — reach out via email or connect on LinkedIn.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:forsukha@gmail.com"
              className="font-display text-sm uppercase tracking-wider border-b-2 border-foreground pb-0.5 hover:opacity-70 transition-opacity"
            >
              forsukha@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/sudarshan-khatiwada-73413a73/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm uppercase tracking-wider border-b-2 border-foreground pb-0.5 hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
