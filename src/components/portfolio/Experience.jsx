import { EXPERIENCE } from "../../data/portfolio";
import { Reveal } from "./Reveal";

export const Experience = () => {
  return (
    <section id="experience" data-testid="experience" className="relative py-24 sm:py-32 bg-[#e6d5c3]/40">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal>
          <span className="font-body text-xs uppercase tracking-[0.25em] text-[#4a3022]">Experience</span>
          <h2 className="mt-4 font-serif-display text-5xl sm:text-7xl leading-[0.9] tracking-tight text-[#0a0a0a]">
            Where I've <span className="italic text-[#4a3022]">worked</span>
          </h2>
        </Reveal>

        <div className="mt-16 space-y-0">
          {EXPERIENCE.map((e, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 border-t border-[#4a3022]/25 py-10"
            >
              <div className="lg:col-span-3">
                <span className="font-body text-sm tracking-wide text-[#4a3022]">{e.period}</span>
              </div>
              <div className="lg:col-span-9">
                <h3 className="font-serif-display text-3xl sm:text-4xl leading-tight text-[#0a0a0a]">{e.role}</h3>
                <p className="mt-1 font-body text-sm uppercase tracking-[0.12em] text-[#4a3022]">
                  {e.company} — {e.location}
                </p>
                <ul className="mt-5 space-y-3">
                  {e.points.map((pt, idx) => (
                    <li key={idx} className="flex gap-3 font-body text-base font-light leading-relaxed text-[#0a0a0a]/75">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#4a3022]" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-[#4a3022]/25" />
        </div>
      </div>
    </section>
  );
};
