import { Work, WORK_CONTENT } from "@/static/content/works.content";
import TechRibbon from "./tech-ribbon";
import { FaGithub, FaLink } from "react-icons/fa";
import { formatText } from "@/lib/text";

export default function Projects() {
  return (
    <div className="px-4 2xl:px-0 flex items-center justify-center w-full dark:bg-neutral-950 duration-200 pt-28 pb-14 relative" id="works">
      <TechRibbon />
      <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-7">
        <div className="w-full">
          <p className="text-3xl font-bold">{formatText(WORK_CONTENT.title)}</p>
          <p className="font-extralight">{formatText(WORK_CONTENT.subtitle)}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
          {
            WORK_CONTENT.works.map((work) => (
              <ProjectCard key={work.title} work={work} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ work }: { work: Work }) {
  return (
    <div className="flex flex-col w-full">
      <div className="rounded-t-md overflow-hidden h-64 group relative duration-200">
        <div className={`
          absolute opacity-0 group-hover:opacity-100 w-full h-full z-20 
          bg-neutral-900/40 backdrop-blur-xs duration-200 flex items-center justify-center gap-4`
        }>
          {work.hrefTo && (
            <a
              href={work.hrefTo}
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 duration-200 p-2 rounded-full cursor-pointer"
            >
              <FaLink className="text-white w-6 h-6" />
            </a>
          )}
          {work.githubTo && (
            <a
              href={work.githubTo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 duration-200 p-2 rounded-full cursor-pointer"
            >
              <FaGithub className="text-white w-6 h-6" />
            </a>
          )}
        </div>
        <img
          alt={`Image for ${work.title}`}
          className="rounded-t-md w-full h-full object-cover"
          src={work.image}
        />
      </div>
      <div className="space-y-3 dark:bg-neutral-900 bg-neutral-100 rounded-b-md p-4 duration-200">
        <p className="font-bold text-lg">{work.title}</p>
        <p className="text-neutral-700! dark:text-neutral-300! text-sm">{work.description}</p>
        <div className="flex gap-2 flex-wrap">
          {
            work.technologies.map((technology) => (
              <div
                className="px-2 py-1 text-yellow-400 bg-yellow-200/30 rounded-full text-sm"
                key={`${work.title}-${technology}`}
              >
                {technology}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
