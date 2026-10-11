import {RIBBON_TECHNOLOGIES} from "@/static/content/tech-ribbon.content";

// Two copies side by side: the strip is sized to its content (w-max) and moves by -50%, i.e. exactly one copy
const LOOP = [...RIBBON_TECHNOLOGIES, ...RIBBON_TECHNOLOGIES];

export default function TechRibbon() {
  return (
    <section aria-label="Tecnologie" className="relative h-48 sm:h-56 flex items-center overflow-hidden">
      {/* Back ribbon: names, outlined, opposite direction */}
      <div className="absolute inset-x-[-5%] rotate-3 bg-neutral-900 dark:bg-neutral-900 border-y border-white/10 py-3">
        <div className="flex w-max marquee marquee-reverse" style={{"--marquee-duration": "50s"} as React.CSSProperties}>
          {LOOP.map((tech, i) => (
            <span key={i} className="font-display text-lg font-bold uppercase tracking-wider text-white/40 px-6 flex items-center gap-6">
              {tech.name}
              <span className="text-yellow-400">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Front ribbon: icons on yellow */}
      <div className="absolute inset-x-[-5%] -rotate-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 py-3 shadow-[0_20px_60px_-15px_rgb(250_204_21/0.5)]">
        <div className="flex w-max marquee hover:[animation-play-state:paused]" style={{"--marquee-duration": "40s"} as React.CSSProperties}>
          {LOOP.map((tech, i) => (
            <span key={i} className="flex items-center gap-2.5 px-7 text-black">
              <tech.icon className="w-6 h-6 shrink-0"/>
              <span className="font-display text-base font-bold">{tech.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
