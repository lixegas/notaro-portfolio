import {RIBBON_TECHNOLOGIES} from "@/static/content/tech-ribbon.content";

const INNER = RIBBON_TECHNOLOGIES.slice(0, 6);
const OUTER = RIBBON_TECHNOLOGIES.slice(6, 16);

function Ring({items, radius, duration, reverse}: {items: typeof RIBBON_TECHNOLOGIES, radius: number, duration: number, reverse?: boolean}) {
  return (
    <div
      className={`absolute inset-0 orbit ${reverse ? "orbit-reverse" : ""}`}
      style={{"--orbit-duration": `${duration}s`} as React.CSSProperties}
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-neutral-300 dark:border-white/10"
        style={{width: `${radius * 2}%`, height: `${radius * 2}%`}}
      />
      {items.map((tech, i) => {
        const angle = (i / items.length) * 2 * Math.PI;
        return (
          <div
            key={tech.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${50 + radius * Math.cos(angle)}%`,
              top: `${50 + radius * Math.sin(angle)}%`,
            }}
          >
            <div className="orbit-item" style={{"--orbit-duration": `${duration}s`} as React.CSSProperties}>
              <div
                title={tech.name}
                className={`
                  w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-lg sm:rounded-xl flex items-center justify-center
                  bg-white border border-neutral-200 shadow-md sm:shadow-lg
                  dark:bg-neutral-900/90 dark:border-white/10 dark:shadow-black/50
                  hover:scale-125 hover:border-yellow-400 duration-300`
                }
              >
                <tech.icon className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700 dark:text-neutral-200"/>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Orbit() {
  return (
    <div className="relative w-full max-w-[270px] sm:max-w-[360px] lg:max-w-[440px] aspect-square">
      {/* Glow behind the logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full bg-yellow-400/30 dark:bg-yellow-400/20 blur-3xl"/>

      <Ring items={INNER} radius={30} duration={36}/>
      <Ring items={OUTER} radius={47} duration={60} reverse/>

      {/* Logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[38%] aspect-square">
        <div className="absolute -inset-1 rounded-full conic-ring"/>
        <div className="absolute inset-0 rounded-full bg-white/80 dark:bg-neutral-950/80 border border-neutral-200 dark:border-white/10 backdrop-blur-md flex items-center justify-center">
          <div
            role="img"
            aria-label="Logo di Peppino Notaro"
            className="logo-mark w-[45%] h-[70%]"
            style={{maskImage: "url(images/logo-mask.png)", WebkitMaskImage: "url(images/logo-mask.png)"}}
          />
        </div>
      </div>
    </div>
  );
}
