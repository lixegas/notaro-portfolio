import {RIBBON_TECHNOLOGIES} from "@/static/content/tech-ribbon.content";



export default function TechRibbon() {
  return (
    <div className="bg-yellow-500 h-24 w-screen absolute left-0 -top-9 -rotate-2 overflow-hidden">
      <div className="flex items-center h-full animate-scroll hover:[animation-play-state:paused]">
        {[...RIBBON_TECHNOLOGIES, ...RIBBON_TECHNOLOGIES].map((Tech, i) => (
          <Tech key={i} className="w-16 h-16 mx-16 text-black shrink-0" />
        ))}
      </div>
    </div>

  )
}