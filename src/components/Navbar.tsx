import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#specializations", label: "Specializations" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "border-b border-border bg-bg/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="section flex items-center justify-between py-5">
        <a href="#top" className="font-serif-display text-xl text-ink">
          {profile.name}
        </a>
        <ul className="hidden gap-8 text-sm font-medium text-muted lg:flex">
          {links.map((l) => (
            <li key={l.href} className="group relative">
              <a href={l.href} className="transition-colors hover:text-primary">
                {l.label}
              </a>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary2 sm:inline-block"
          >
            Let's talk
          </motion.a>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1">
              <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }} className="h-px w-4 bg-ink" />
              <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="h-px w-4 bg-ink" />
              <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5 : 0 }} className="h-px w-4 bg-ink" />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-border bg-bg/95 text-sm text-muted lg:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setTimeout(() => setMenuOpen(false), 150)}
                  className="block px-6 py-3 transition-colors hover:bg-surface2 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
