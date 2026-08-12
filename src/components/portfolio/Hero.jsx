import { motion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, FileDown } from "lucide-react";
import { PROFILE } from "../../data/portfolio";
import { EASE } from "./anim";
import { scrollToId } from "./scroll";

const HERO_IMG = "/port.jpg";
const Line = ({ children, i }) => (
  <span className="block overflow-hidden">
    <span className="line-up" style={{ animationDelay: `${0.15 + i * 0.14}s` }}>
      {children}
    </span>
  </span>
);

export const Hero = () => {
  return (
    <section data-testid="hero" className="relative min-h-screen w-full overflow-hidden pt-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        {/* overline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center justify-between border-b border-[#4a3022]/15 pb-5"
        >
          <span className="font-body text-xs uppercase tracking-[0.25em] text-[#4a3022]">
            Portfolio — {PROFILE.location}
          </span>
          <span className="hidden sm:block font-body text-xs uppercase tracking-[0.25em] text-[#4a3022]">
            © 2026
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 pt-10 lg:pt-16">
          {/* Headline */}
          <div className="lg:col-span-8 relative z-10">
            <h1 className="font-serif-display font-medium leading-[0.86] tracking-[-0.03em] text-[#0a0a0a] text-[17vw] sm:text-[15vw] lg:text-[10.5vw]">
              <Line i={0}>Nurizzah</Line>
              <Line i={1}>
                <span className="italic text-[#4a3022]">Hanani</span>
              </Line>
            </h1>

            <div className="mt-8 max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.9, ease: EASE }}
                className="font-body text-base sm:text-lg font-light leading-relaxed text-[#0a0a0a]/75"
              >
                {PROFILE.tagline}
              </motion.p>
            </div>

            {/* roles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-7 flex flex-wrap gap-x-3 gap-y-2"
            >
              {PROFILE.roles.map((r, idx) => (
                <span key={r} className="font-body text-xs uppercase tracking-[0.15em] text-[#4a3022]">
                  {r}
                  {idx < PROFILE.roles.length - 1 && <span className="ml-3 text-[#d4bca9]">/</span>}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Framed warm image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.1, ease: EASE }}
            className="lg:col-span-4 relative"
          >
            <div className="group relative mx-auto h-[46vh] lg:h-[62vh] w-full max-w-[320px] overflow-hidden rounded-t-[999px] border border-[#4a3022]/20">
              <img
                src={HERO_IMG}
                alt="Warm editorial texture"
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a3022]/15 to-transparent" />
            </div>
            <div className="mt-4 flex items-center justify-between px-2">
              <span className="font-body text-[11px] uppercase tracking-[0.2em] text-[#4a3022]">
                Open to roles
              </span>
              <ArrowDownRight className="h-4 w-4 text-[#4a3022]" />
            </div>
          </motion.div>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: EASE }}
          className="mt-12 flex flex-col gap-6 border-t border-[#4a3022]/15 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap gap-3">
            <button
              data-testid="hero-view-projects"
              onClick={() => scrollToId("#work")}
              className="group relative overflow-hidden rounded-full bg-[#0a0a0a] px-7 py-3.5 font-body text-sm tracking-wide text-[#fdfbf7]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Projects <ArrowDownRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-[#4a3022] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" />
            </button>

            <a
              data-testid="hero-download-resume"
              href={PROFILE.resume}
              download
              className="group flex items-center gap-2 rounded-full border border-[#0a0a0a]/25 px-7 py-3.5 font-body text-sm tracking-wide text-[#0a0a0a] transition-colors duration-300 hover:border-[#0a0a0a]"
            >
              <FileDown className="h-4 w-4" /> Download Resume
            </a>
            <button
              data-testid="hero-contact"
              onClick={() => scrollToId("#contact")}
              className="link-underline font-body text-sm tracking-wide text-[#0a0a0a]"
            >
              Contact Me
            </button>
          </div>

          <div className="flex items-center gap-5">
            <a data-testid="hero-linkedin" href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-[#4a3022] transition-transform duration-300 hover:-translate-y-1">
              <Linkedin className="h-5 w-5" />
            </a>
            <a data-testid="hero-github" href={PROFILE.github} target="_blank" rel="noreferrer" className="text-[#4a3022] transition-transform duration-300 hover:-translate-y-1">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
