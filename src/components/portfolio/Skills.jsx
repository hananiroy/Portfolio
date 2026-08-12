import { Award, BadgeCheck } from "lucide-react";
import { SKILLS, CERTS, AWARDS } from "../../data/portfolio";
import { Reveal } from "./Reveal";

export const Skills = () => {
  return (
    <section id="skills" data-testid="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal>
          <span className="font-body text-xs uppercase tracking-[0.25em] text-[#4a3022]">Capabilities</span>
          <h2 className="mt-4 font-serif-display text-5xl sm:text-7xl leading-[0.9] tracking-tight text-[#0a0a0a]">
            Toolkit & <span className="italic text-[#4a3022]">recognition</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Skills */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
              {Object.entries(SKILLS).map(([group, items], i) => (
                <Reveal key={group} delay={i * 0.06} className="border-t border-[#4a3022]/20 pt-4">
                  <h3 className="font-body text-xs uppercase tracking-[0.2em] text-[#4a3022]">{group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((it) => (
                      <span key={it} className="rounded-full border border-[#4a3022]/25 px-4 py-1.5 font-body text-sm text-[#0a0a0a]/80 transition-colors duration-300 hover:bg-[#0a0a0a] hover:text-[#fdfbf7]">
                        {it}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Certifications */}
            <Reveal className="mt-14">
              <h3 className="font-body text-xs uppercase tracking-[0.2em] text-[#4a3022]">Certifications</h3>
              <div className="mt-5 space-y-3">
                {CERTS.map((c) => (
                  <div key={c.name} className="flex items-start gap-3 border-b border-[#4a3022]/12 pb-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#4a3022]" />
                    <div>
                      <p className="font-body text-base text-[#0a0a0a]">{c.name}</p>
                      <p className="font-body text-xs uppercase tracking-[0.12em] text-[#4a3022]/70">{c.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Awards */}
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="rounded-2xl bg-[#0a0a0a] p-8 sm:p-10 text-[#fdfbf7]">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-[#d4bca9]" />
                <h3 className="font-body text-xs uppercase tracking-[0.2em] text-[#d4bca9]">Awards & Honours</h3>
              </div>
              <div className="mt-8 space-y-6">
                {AWARDS.map((a, i) => (
                  <div key={i} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <p className="font-serif-display text-2xl leading-tight">{a.result}</p>
                      <p className="font-body text-sm text-[#fdfbf7]/60">{a.title}</p>
                    </div>
                    <span className="font-body text-sm text-[#d4bca9]">{a.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
