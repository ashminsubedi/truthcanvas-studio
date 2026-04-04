import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-24 px-[8%]">
      <h2 className="font-display text-4xl md:text-5xl mb-8 uppercase">Connect</h2>
      <div className="flex flex-wrap gap-5 mb-8">
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
      <div className="flex flex-wrap gap-6 mb-12 border-t border-background/20 pt-8">
        <Link to="/" className="font-display text-xs uppercase tracking-wider text-background/70 hover:text-background transition-colors">Home</Link>
        <Link to="/about" className="font-display text-xs uppercase tracking-wider text-background/70 hover:text-background transition-colors">About</Link>
        <Link to="/articles" className="font-display text-xs uppercase tracking-wider text-background/70 hover:text-background transition-colors">Articles</Link>
        <Link to="/portfolio" className="font-display text-xs uppercase tracking-wider text-background/70 hover:text-background transition-colors">Portfolio</Link>
        <Link to="/contact" className="font-display text-xs uppercase tracking-wider text-background/70 hover:text-background transition-colors">Contact</Link>
      </div>
      <p className="opacity-50 font-body text-sm">
        © 2026 Sudarshan Khatiwada
      </p>
    </footer>
  );
};

export default Footer;
