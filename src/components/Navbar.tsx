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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl uppercase tracking-wider hover:opacity-70 transition-opacity"
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
