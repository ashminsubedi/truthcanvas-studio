import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-[8%] relative border-b-2 border-foreground overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        {/* Left: text */}
        <div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.85] uppercase tracking-[-3px] text-foreground">
            Sudarshan<br />Khatiwada
          </h1>
          <p className="font-body text-lg md:text-xl font-light text-muted-foreground mt-8 max-w-md leading-relaxed">
            Journalist, Media Educator &amp; Community Broadcaster based in Kathmandu.
          </p>
          <a
            href="/about"
            className="inline-block mt-6 font-display text-xs uppercase tracking-wider border-b-2 border-foreground pb-0.5 hover:opacity-70 transition-opacity"
          >
            More About Sudarshan
          </a>
        </div>

        {/* Right: photo with polaroid frame */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="bg-foreground/10 w-72 h-80 md:w-80 md:h-96 absolute -right-3 -bottom-3 rotate-3" />
            <img
              src={profileImg}
              alt="Sudarshan Khatiwada"
              width={320}
              height={400}
              className="relative z-10 w-72 h-80 md:w-80 md:h-96 object-cover border-2 border-foreground"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
