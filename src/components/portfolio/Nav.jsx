import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE } from "../../data/portfolio";
import { scrollToId, scrollToTop } from "./scroll";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    scrollToId(href);
  };

  return (
    <motion.header
      data-testid="site-nav"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-500 ${
        scrolled ? "bg-[#fdfbf7]/80 backdrop-blur-xl border-b border-[#4a3022]/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 h-20 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={scrollToTop}
          className="font-serif-display text-2xl tracking-tight text-[#0a0a0a] leading-none"
        >
          N<span className="text-[#4a3022]">.</span>Hanani
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <button
              key={l.href}
              data-testid={`nav-${l.label.toLowerCase()}`}
              onClick={() => go(l.href)}
              className="link-underline font-body text-sm tracking-wide text-[#0a0a0a]/80 hover:text-[#0a0a0a]"
            >
              {l.label}
            </button>
          ))}
          <a
            data-testid="nav-resumee"
            href={PROFILE.resumee}
            download
            className="group relative overflow-hidden rounded-full border border-[#0a0a0a] px-6 py-2.5 text-sm tracking-wide text-[#0a0a0a] transition-colors duration-500 hover:text-[#fdfbf7]"
          >
            <span className="relative z-10">Resume</span>
            <span className="absolute inset-0 -translate-y-full bg-[#0a0a0a] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
          </a>
        </nav>

        <button
          data-testid="nav-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] w-8"
          aria-label="Toggle menu"
        >
          <span className={`h-[1.5px] bg-[#0a0a0a] transition-transform duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] bg-[#0a0a0a] transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-[1.5px] bg-[#0a0a0a] transition-transform duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="md:hidden overflow-hidden bg-[#fdfbf7]/95 backdrop-blur-xl border-b border-[#4a3022]/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {LINKS.map((l) => (
                <button
                  key={l.href}
                  data-testid={`mnav-${l.label.toLowerCase()}`}
                  onClick={() => go(l.href)}
                  className="text-left font-serif-display text-3xl text-[#0a0a0a]"
                >
                  {l.label}
                </button>
              ))}
              <a
                href={PROFILE.resumee}
                download
                className="mt-2 rounded-full bg-[#0a0a0a] px-6 py-3 text-center text-sm text-[#fdfbf7]"
              >
                Download Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
