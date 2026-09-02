import { useState, useEffect } from "react";
import { NAV_LINKS, META } from "../data/content";

export default function NavBar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
      for (const id of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            setActive(id);
            break;
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-lg border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <a href="#about" className="font-mono font-bold text-lg text-accent tracking-tight">
          {"<M />"}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`font-sans text-xs uppercase tracking-[2px] font-medium transition-colors duration-200 ${
                active === link
                  ? "text-accent"
                  : "text-muted hover:text-gray-300"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-gray-300 transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-300 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-300 transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-ink/95 backdrop-blur-lg ${
          menuOpen ? "max-h-80 border-b border-border" : "max-h-0"
        }`}
      >
        <div className="section-container py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              className={`font-sans text-sm uppercase tracking-[2px] ${
                active === link ? "text-accent" : "text-muted"
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
