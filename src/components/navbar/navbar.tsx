import ThemeButton from "../theme-button";
import Button from "@/ui/button";
import { IoCodeSlash } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import NavbarSections from "./navbar-sections";
import {formatText} from "@/lib/text";
import {NAVBAR_CONTENT} from "@/static/content/navbar.content";

export default function Navbar() {
  return (
    <header className="px-4 2xl:px-0 w-full h-16 flex items-center sticky top-0 z-50 border-b border-yellow-500/20 backdrop-blur-sm">
      <div className="w-full max-w-7xl h-full mx-auto flex items-center justify-between">
        <div className="flex  items-center  gap-2 text-white text-2xl font-bold">
          <IoCodeSlash className="text-yellow-500 w-7 h-7"/>
          <p>{formatText(NAVBAR_CONTENT.title)}</p>
        </div>
        <NavbarSections/>
        <div className="flex items-center gap-2">
          <ThemeButton/>
          <a
            href="curriculum.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black! hidden lg:flex"
          >
            <Button variant="FILL" className="flex items-center gap-2 px-3 py-2.5">
              <FiDownload className="w-4 h-4"/>
              Curriculum
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}