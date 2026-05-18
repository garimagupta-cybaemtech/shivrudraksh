import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const yOffset = -80; // offset to account for fixed header
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, "#home")}
          className="group flex flex-col leading-none"
        >
          <span className="font-display text-xl md:text-2xl text-white tracking-wide">
            Shiv <span className="text-gradient-gold">Rudraksh</span>
          </span>
          <span className="mt-0.5 text-[0.6rem] tracking-[0.4em] uppercase text-white/60">
            Resort · Varanasi
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleScroll(e, l.href)}
              className="relative text-[0.78rem] uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "#contact")}
          className="hidden lg:inline-flex items-center px-6 py-3 text-[0.72rem] uppercase tracking-[0.25em] font-medium bg-gold text-charcoal hover:bg-transparent hover:text-gold border border-gold transition-all duration-500"
        >
          Book Now
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-nav border-t border-white/10 mt-3">
          <div className="flex flex-col gap-1 px-6 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleScroll(e, l.href)}
                className="py-3 text-sm uppercase tracking-[0.2em] text-white/85"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="mt-3 inline-flex justify-center px-6 py-3 text-xs uppercase tracking-[0.25em] bg-gold text-charcoal"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
