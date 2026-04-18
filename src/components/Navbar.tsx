import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import profileImg from "@/assets/profile.jpg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Articles", href: "/articles" },
  { label: "Portfolio", href: "/portfolio" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-[8%] pointer-events-none">
      <Link
        to="/"
        className="flex items-center gap-3 hover:opacity-70 transition-opacity pointer-events-auto"
      >
        <img
          src={profileImg}
          alt="Sudarshan Khatiwada"
          className="w-10 h-10 rounded-full object-cover border-2 border-foreground"
        />
        <span className="font-display text-xs uppercase tracking-wider hidden sm:inline">
          Sudarshan Khatiwada
        </span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8 pointer-events-auto">
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
        className="md:hidden z-50 bg-foreground text-background p-2 pointer-events-auto"
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden fixed top-14 right-[8%] z-40 bg-foreground text-background shadow-lg py-3 px-6 flex flex-col gap-1 pointer-events-auto transition-all duration-150 ease-out origin-top-right ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
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
    </nav>
  );
};

export default Navbar;
