import ThemeButton from "../theme-button";
import { FiDownload } from "react-icons/fi";
import NavbarSections from "./navbar-sections";

export default function Navbar() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 intro" style={{"--delay": "600ms"} as React.CSSProperties}>
      <div className={`
        mx-auto max-w-7xl h-14 pl-5 pr-2 flex justify-between md:grid md:grid-cols-[1fr_auto_1fr] items-center rounded-full
        border border-neutral-200/80 bg-white/70 dark:border-white/10 dark:bg-neutral-900/60
        backdrop-blur-xl shadow-[0_8px_30px_-12px_rgb(0_0_0/0.25)]`
      }>
        <a href="#home" aria-label="Torna all'inizio" className="justify-self-start hover:scale-110 duration-300">
          {/* Same gradient-tinted logo as the hero (relative mask URL keeps the basePath) */}
          <span
            className="logo-mark block w-6 h-9"
            style={{maskImage: "url(images/logo-mask.png)", WebkitMaskImage: "url(images/logo-mask.png)"}}
          />
        </a>
        <NavbarSections/>
        <div className="flex items-center justify-end gap-1">
          <ThemeButton/>
          <a
            href="curriculum.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Scarica il curriculum"
            className={`
              flex items-center gap-2 rounded-full px-3 sm:px-4 py-2 text-sm font-medium text-black
              bg-gradient-to-r from-yellow-300 to-orange-400 hover:brightness-110 duration-300`
            }
          >
            <FiDownload className="w-4 h-4"/>
            <span className="hidden sm:inline md:hidden lg:inline">Curriculum</span>
          </a>
        </div>
      </div>
    </header>
  );
}
