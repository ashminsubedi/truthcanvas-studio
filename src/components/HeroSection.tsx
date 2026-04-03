import heroImg from "@/assets/hero-journalism.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Investigative journalism desk"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4 animate-fade-up">
            Investigative Journalist
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-foreground mb-6 animate-fade-up [animation-delay:200ms] opacity-0">
            Uncovering the stories<br />
            <span className="italic text-primary">that matter.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-cream-dim max-w-xl mb-8 animate-fade-up [animation-delay:400ms] opacity-0">
            Award-winning investigative reporting on corruption, injustice, and 
            the systems that shape our world.
          </p>
          <div className="flex gap-4 animate-fade-up [animation-delay:600ms] opacity-0">
            <a
              href="#work"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider hover:brightness-110 transition-all"
            >
              Read My Work
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 border border-foreground/30 text-foreground font-body font-semibold text-sm uppercase tracking-wider hover:bg-foreground/10 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
