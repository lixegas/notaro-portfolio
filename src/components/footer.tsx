import {FiArrowUp} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="px-4 py-10 border-t border-neutral-200 dark:border-white/10">
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-neutral-500">
        <p>© Peppino Notaro, {new Date().getFullYear()}. Tutti i diritti riservati.</p>
        <a href="#home" className="group flex items-center gap-2 hover:text-yellow-500 duration-300">
          Torna su
          <FiArrowUp className="w-4 h-4 group-hover:-translate-y-1 duration-300"/>
        </a>
      </div>
    </footer>
  )
}
