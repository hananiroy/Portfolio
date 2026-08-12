import { ABOUT } from "../../data/portfolio";
import { Reveal } from "./Reveal";

const ABOUT_IMG = "/portt.jpg";
export const About = () => {
  return (
    <section id="about" data-testid="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal className="flex items-baseline gap-4">
          <span className="font-body text-xs uppercase tracking-[0.25em] text-[#4a3022]">About</span>
          <span className="h-px flex-1 bg-[#4a3022]/20" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pt-14">
          {/* Big intro statement */}
          <div className="lg:col-span-7">
            <Reveal as="p" className="font-serif-display text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-[#0a0a0a]">
              {ABOUT.intro}
            </Reveal>

            <div className="mt-14 space-y-12">
              {ABOUT.chapters.map((c, i) => (
                <Reveal
                  key={c.no}
                  delay={i * 0.08}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 border-t border-[#4a3022]/15 pt-6"
                >
                  <div className="sm:col-span-3">
                    <span className="font-serif-display text-2xl text-[#d4bca9]">{c.no}</span>
                    <h3 className="mt-1 font-body text-sm uppercase tracking-[0.15em] text-[#4a3022]">
                      {c.title}
                    </h3>
                  </div>
                  <p className="sm:col-span-9 font-body text-base sm:text-lg font-light leading-relaxed text-[#0a0a0a]/75">
                    {c.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sticky editorial image */}
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28" delay={0.1}>
              <div className="relative overflow-hidden rounded-b-[999px] border border-[#4a3022]/20">
                <img src={ABOUT_IMG} alt="Editorial detail" className="h-[52vh] w-full object-cover transition-transform duration-700 ease-out hover:scale-105" />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-body text-xs uppercase tracking-[0.2em] text-[#4a3022]">UiTM — Netcentric Computing</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
