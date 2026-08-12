import Marquee from "react-fast-marquee";

const WORDS = ["Software Development", "Cybersecurity", "Networking", "AI", "IoT", "Problem Solving"];

export const EditorialMarquee = () => {
  return (
    <div data-testid="marquee" className="border-y border-[#4a3022]/15 py-6 sm:py-10">
      <Marquee speed={38} gradient={false} autoFill>
        {WORDS.map((w, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8">
            <span className="font-serif-display italic text-outline text-5xl sm:text-7xl lg:text-8xl leading-none">
              {w}
            </span>
            <span className="text-[#d4bca9] text-4xl">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};
