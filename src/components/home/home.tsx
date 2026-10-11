import {formatText} from "@/lib/text";
import {HOME_CONTENT} from "@/static/content/home.content";
import HomeButtons from "./home-buttons";
import Orbit from "./orbit";
import RotatingWords from "./rotating-words";
import {CONTACT_CONTENT} from "@/static/content/contact.content";

function delay(ms: number) {
  return {"--delay": `${ms}ms`} as React.CSSProperties;
}

export default function Home() {
  return (
    <section className="relative isolate min-h-svh flex items-center overflow-hidden px-4 pt-28 pb-16" id="home" data-pointer>
      {/* Background, faded out at the bottom so it blends into the next section instead of being cut */}
      <div className="absolute inset-0 -z-10 pointer-events-none [mask-image:linear-gradient(to_bottom,#000_55%,transparent)]">
        <div className="aurora w-[40rem] h-[40rem] bg-yellow-400 -top-48 -left-40"/>
        <div className="aurora w-[34rem] h-[34rem] bg-orange-500 top-1/3 -right-40" style={{animationDelay: "-6s"}}/>
        <div className="aurora w-[28rem] h-[28rem] bg-amber-300 -bottom-40 left-1/3" style={{animationDelay: "-12s"}}/>
        <div className="absolute inset-0 bg-grid"/>
        <div className="absolute inset-0 pointer-glow"/>
      </div>

      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-6 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="font-display font-bold tracking-tighter leading-[0.9]">
            <span className="intro block text-xl sm:text-2xl font-medium tracking-tight text-neutral-500 mb-2" style={delay(100)}>
              {HOME_CONTENT.greeting}
            </span>
            <span className="intro block text-5xl sm:text-6xl xl:text-7xl" style={delay(200)}>
              {formatText(HOME_CONTENT.name)}
            </span>
          </h1>

          <p className="intro font-display text-xl sm:text-2xl font-medium min-h-[1.3em]" style={delay(350)}>
            {HOME_CONTENT.rolesPrefix} <RotatingWords words={HOME_CONTENT.roles}/>
          </p>

          <p className="intro text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0" style={delay(450)}>
            {formatText(HOME_CONTENT.description)}
          </p>

          <div className="intro" style={delay(550)}>
            <HomeButtons/>
          </div>

          <div className="intro flex gap-2 justify-center lg:justify-start" style={delay(650)}>
            {
              CONTACT_CONTENT.contacts.map((contact) => (
                <a
                  href={contact.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`contact-${contact.to}`}
                  aria-label={contact.content}
                  className={`
                    p-2.5 rounded-full border border-neutral-200 dark:border-white/10
                    text-neutral-500 hover:text-black hover:border-yellow-400 hover:bg-yellow-400
                    dark:hover:text-black duration-300 hover:-translate-y-1`
                  }
                >
                  <contact.icon className="w-[18px] h-[18px]"/>
                </a>
              ))
            }
          </div>
        </div>

        <div className="intro flex justify-center lg:justify-end" style={delay(300)}>
          <Orbit/>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#works"
        aria-label="Scorri ai lavori"
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-neutral-300 dark:border-white/20 justify-center pt-2"
      >
        <span className="w-1 h-2 rounded-full bg-yellow-400 animate-bounce"/>
      </a>
    </section>
  )
}
