import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Articles", href: "/articles" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-[8%]">
      <Link
        to="/"
        className="font-display text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
      >
        SK
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`font-display text-xs uppercase text-foreground tracking-wider border-b-2 pb-0.5 hover:opacity-70 transition-opacity ${
              location.pathname === item.href ? "border-foreground" : "border-transparent"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden z-50 bg-foreground text-background p-2"
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden fixed top-14 right-4 z-40 bg-foreground text-background shadow-lg py-3 px-6 flex flex-col gap-1 animate-fade-up">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-sm uppercase tracking-wider py-2 hover:opacity-70 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
