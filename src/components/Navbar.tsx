import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { useHideOnScroll } from "@/hooks/useHideOnScroll";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/articles", label: "Articles" },
  { to: "/portfolio", label: "Portfolio" },
];

const Navbar = () => {
  const visible = useHideOnScroll();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-[8%] pointer-events-none transition-transform duration-300 ease-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
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

        <div className="hidden md:flex items-center gap-8 pointer-events-auto">
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`font-display text-xs uppercase tracking-wider transition-opacity hover:opacity-70 ${
                  active ? "border-b-2 border-foreground pb-1" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden pointer-events-auto p-2"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col md:hidden">
          <div className="flex items-center justify-between py-4 px-[8%]">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <img
                src={profileImg}
                alt="Sudarshan Khatiwada"
                className="w-10 h-10 rounded-full object-cover border-2 border-foreground"
              />
              <span className="font-display text-xs uppercase tracking-wider">
                Sudarshan Khatiwada
              </span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl uppercase tracking-wider hover:opacity-70 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
