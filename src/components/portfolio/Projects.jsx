import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { PROJECTS, PROFILE } from "../../data/portfolio";
import { Reveal } from "./Reveal";

const ProjectRow = ({ p, index }) => {
  const flip = index % 2 === 1;

  return (
    <Reveal
      as="article"
      data-testid={`project-${p.id}`}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-[#4a3022]/15 py-16 lg:py-24 group relative"
    >
      {/* Image */}
      <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
        <div className="relative overflow-hidden">
          <div className="relative h-[42vh] sm:h-[56vh] overflow-hidden bg-[#e6d5c3]">
            <img
              src={p.image}
              alt={p.name}
              className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#4a3022]/5 mix-blend-multiply" />
          </div>
          <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2">
            <span className="rounded-full bg-[#fdfbf7]/90 px-3 py-1 font-body text-[11px] uppercase tracking-[0.15em] text-[#4a3022] backdrop-blur">
              {p.year}
            </span>
          </div>
        </div>
      </div>

      {/* Detail */}
      <div className={`lg:col-span-6 flex flex-col justify-center ${flip ? "lg:order-1" : ""}`}>
        <span className="font-body text-xs uppercase tracking-[0.2em] text-[#4a3022]">
          {String(index + 1).padStart(2, "0")} — {p.kind}
        </span>
        <h3 className="mt-3 font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-[#0a0a0a]">
          {p.name}
        </h3>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <span className="font-body text-[11px] uppercase tracking-[0.2em] text-[#d4bca9]">Problem</span>
            <p className="mt-2 font-body text-sm font-light leading-relaxed text-[#0a0a0a]/75">{p.problem}</p>
          </div>
          <div>
            <span className="font-body text-[11px] uppercase tracking-[0.2em] text-[#d4bca9]">Solution</span>
            <p className="mt-2 font-body text-sm font-light leading-relaxed text-[#0a0a0a]/75">{p.solution}</p>
          </div>
        </div>

        <div className="mt-6">
          <span className="font-body text-[11px] uppercase tracking-[0.2em] text-[#d4bca9]">My Contribution</span>
          <p className="mt-2 font-body text-sm font-light leading-relaxed text-[#0a0a0a]/75">{p.contribution}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.features.map((f) => (
            <span key={f} className="rounded-full border border-[#4a3022]/25 px-3 py-1 font-body text-[11px] tracking-wide text-[#4a3022]">
              {f}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {p.tech.map((t) => (
            <span key={t} className="font-body text-xs text-[#0a0a0a]/60">
              {t}
              <span className="ml-2 text-[#d4bca9]">•</span>
            </span>
          ))}
        </div>

      </div>
    </Reveal>
  );
};

export const Projects = () => {
  return (
    <section id="work" data-testid="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-body text-xs uppercase tracking-[0.25em] text-[#4a3022]">Selected Work</span>
            <h2 className="mt-4 font-serif-display text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-[#0a0a0a]">
              Featured <span className="italic text-[#4a3022]">Projects</span>
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm font-light leading-relaxed text-[#0a0a0a]/70">
            A selection of things I've designed, built and shipped — across web, mobile, IoT and networking.
            <ArrowUpRight className="ml-1 inline h-4 w-4 text-[#4a3022]" />
          </p>
        </Reveal>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 mt-6">
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.id} p={p} index={i} />
        ))}
      </div>
    </section>
  );
};
