import { Link } from "react-router-dom";
import profileImg from "@/assets/profile.jpg";
import { useHideOnScroll } from "@/hooks/useHideOnScroll";

const Navbar = () => {
  const visible = useHideOnScroll();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center py-4 px-[8%] pointer-events-none transition-transform duration-300 ease-out ${
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
    </nav>
  );
};

export default Navbar;
