import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Articles", href: "#articles" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 z-50">
      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8 py-5 pr-[8%]">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-display text-xs uppercase text-foreground tracking-wider border-b-2 border-foreground pb-0.5 hover:opacity-70 transition-opacity"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 right-4 z-50 bg-foreground text-background p-2"
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile dropdown — sleek, not full-screen */}
      {open && (
        <div className="md:hidden fixed top-14 right-4 z-40 bg-foreground text-background shadow-lg py-3 px-6 flex flex-col gap-1 animate-fade-up">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-sm uppercase tracking-wider py-2 hover:opacity-70 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
