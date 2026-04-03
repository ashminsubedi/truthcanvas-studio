const navItems = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="absolute top-5 right-[8%] z-10 hidden md:block">
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-display text-xs uppercase text-sage tracking-wider border-b-2 border-foreground pb-0.5 hover:opacity-70 transition-opacity"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
