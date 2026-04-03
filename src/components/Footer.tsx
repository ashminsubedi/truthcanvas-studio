const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
          © 2026 Sudarshan Khatiwada. All rights reserved.
        </p>
        <p className="font-body text-xs text-muted-foreground">
          Built with truth in mind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
