import { Mail, Twitter, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's work<br />
            <span className="italic">together.</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-10">
            Available for freelance assignments, speaking engagements, and collaborative 
            investigations. Secure communications welcome.
          </p>

          <a
            href="mailto:jordan@example.com"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider hover:brightness-110 transition-all mb-12"
          >
            <Mail size={18} />
            jordan@example.com
          </a>

          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
