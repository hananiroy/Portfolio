import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { PROFILE } from "../../data/portfolio";
import { Reveal } from "./Reveal";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <footer id="contact" data-testid="contact" className="relative bg-[#0a0a0a] text-[#fdfbf7]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-24 sm:py-32">
        <Reveal as="span" className="block font-body text-xs uppercase tracking-[0.25em] text-[#d4bca9]">
          Get in touch
        </Reveal>

        <Reveal className="mt-8">
          <h2 className="font-serif-display leading-[0.9] tracking-tight text-[9vw] sm:text-[6vw]">
            Let's build <span className="italic text-[#d4bca9]">something great.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-12 flex flex-wrap items-center gap-4" delay={0.05}>
          <a
            data-testid="contact-email"
            href={`mailto:${PROFILE.email}`}
            className="group font-serif-display text-3xl sm:text-5xl lg:text-6xl italic tracking-tight text-[#fdfbf7]"
          >
            <span className="link-underline">{PROFILE.email}</span>
            <ArrowUpRight className="ml-2 inline h-7 w-7 text-[#d4bca9] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <button
            data-testid="contact-copy-email"
            onClick={copy}
            className="flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 font-body text-xs uppercase tracking-[0.15em] text-[#fdfbf7]/80 transition-colors duration-300 hover:border-white"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </Reveal>

        <Reveal className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-10">
          <div>
            <span className="font-body text-[11px] uppercase tracking-[0.2em] text-[#d4bca9]">Socials</span>
            <div className="mt-4 flex flex-col gap-2">
              <a data-testid="contact-linkedin" href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="link-underline w-fit font-body text-lg text-[#fdfbf7]">LinkedIn</a>
              <a data-testid="contact-github" href={PROFILE.github} target="_blank" rel="noreferrer" className="link-underline w-fit font-body text-lg text-[#fdfbf7]">GitHub</a>
            </div>
          </div>
          <div>
            <span className="font-body text-[11px] uppercase tracking-[0.2em] text-[#d4bca9]">Location</span>
            <div className="mt-4 flex flex-col gap-2">
              <span className="font-body text-lg text-[#fdfbf7]/85">{PROFILE.location}</span>
            </div>
          </div>
          <div>
            <span className="font-body text-[11px] uppercase tracking-[0.2em] text-[#d4bca9]">Resume</span>
            <div className="mt-4">
              <a
                data-testid="contact-resume"
                href={PROFILE.resume}
                download
                className="link-underline w-fit font-body text-lg text-[#fdfbf7]"
              >
                Download PDF
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-8">
          <span className="font-serif-display text-2xl">Nurizzah Hanani Roslan</span>
          <span className="font-body text-xs uppercase tracking-[0.2em] text-[#fdfbf7]/50">
            © 2026 — Designed & built with hope 
          </span>
        </div>
      </div>
    </footer>
  );
};
