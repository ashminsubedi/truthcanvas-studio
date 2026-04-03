const HeroSection = () => {
  return (
    <section
      className="h-screen flex items-center justify-center px-[8%] border-b-2 border-foreground bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://www.onlinekhabar.com/wp-content/uploads/2021/07/Sudarshan_Khatiwada.jpg')`,
      }}
    >
      <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.85] uppercase tracking-[-4px] text-primary-foreground animate-fade-up text-center">
        Sudarshan<br />Khatiwada
      </h1>
    </section>
  );
};

export default HeroSection;
