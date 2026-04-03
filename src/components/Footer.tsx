const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-24 px-[8%]">
      <h2 className="font-display text-5xl mb-8">Connect</h2>
      <div className="flex gap-5">
        <a
          href="mailto:forsukha@gmail.com"
          className="font-body text-lg font-bold text-background border-b-2 border-background hover:opacity-70 transition-opacity"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/sudarshan-khatiwada-73413a73/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-lg font-bold text-background border-b-2 border-background hover:opacity-70 transition-opacity"
        >
          LinkedIn
        </a>
      </div>
      <p className="mt-12 opacity-50 font-body text-sm">
        © 2026 Sudarshan Khatiwada
      </p>
    </footer>
  );
};

export default Footer;
