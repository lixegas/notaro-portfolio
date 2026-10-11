import { Work, WORK_CONTENT } from "@/static/content/works.content";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "./section-heading";

// Bento rhythm on 3 columns: wide, narrow / narrow, wide
function isWide(i: number) {
  return i % 4 === 0 || i % 4 === 3;
}

export default function Projects() {
  return (
    <section className="px-4 py-20 sm:py-24 scroll-mt-16" id="works">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10">
        <SectionHeading title={WORK_CONTENT.title} subtitle={WORK_CONTENT.subtitle}/>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            WORK_CONTENT.works.map((work, i) => (
              <ProjectCard key={work.title} work={work} index={i} />
            ))
          }
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ work, index }: { work: Work, index: number }) {
  return (
    <article
      data-reveal
      style={{"--delay": `${(index % 3) * 120}ms`} as React.CSSProperties}
      className={`
        flex flex-col rounded-3xl overflow-hidden
        border border-neutral-200 bg-white dark:border-white/10 dark:bg-white/[0.03]
        ${isWide(index) ? "lg:col-span-2" : ""}`
      }
    >
      <div className="relative h-52 sm:h-60 overflow-hidden">
        <img
          alt={`Anteprima di ${work.title}`}
          className="w-full h-full object-cover"
          src={work.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 dark:from-[#0c0c0f] dark:via-[#0c0c0f]/30 to-transparent"/>

        <div className="absolute top-4 right-4 flex gap-2">
          {work.hrefTo && (
            <a
              href={work.hrefTo}
              aria-label={`Apri ${work.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/60 text-white backdrop-blur hover:bg-yellow-400 hover:text-black duration-300"
            >
              <FiArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {work.githubTo && (
            <a
              href={work.githubTo}
              aria-label={`Codice di ${work.title} su GitHub`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/60 text-white backdrop-blur hover:bg-yellow-400 hover:text-black duration-300"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6 pt-2 flex-1">
        <h3 className="font-display text-xl font-bold tracking-tight">
          {work.title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{work.description}</p>
        <div className="flex gap-2 flex-wrap mt-auto pt-2">
          {
            work.technologies.map((technology) => (
              <span
                className="px-3 py-1 rounded-full text-xs font-mono border border-amber-500/30 text-amber-700 bg-amber-400/10 dark:text-yellow-300 dark:border-yellow-400/20 dark:bg-yellow-400/5"
                key={`${work.title}-${technology}`}
              >
                {technology}
              </span>
            ))
          }
        </div>
      </div>
    </article>
  );
}
