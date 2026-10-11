"use client";

import {useEffect, useState} from "react";
import {FiDownload, FiMenu, FiX} from "react-icons/fi";
import {onDirectLocalLinkClick} from "@/lib/link";
import {NAVBAR_CONTENT} from "@/static/content/navbar.content";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(!open) {
      return;
    }

    const onKeyDown = (ev: KeyboardEvent) => {
      if(ev.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        className="p-2.5 rounded-full dark:hover:bg-white/10 hover:bg-neutral-900/5 duration-300 cursor-pointer"
        aria-label={open ? "Chiudi il menu" : "Apri il menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <FiX className="w-5 h-5"/> : <FiMenu className="w-5 h-5"/>}
      </button>

      {/* Positioned against the navbar pill */}
      <nav
        className={`
          absolute inset-x-0 top-full mt-2 p-2 rounded-3xl origin-top duration-300
          border border-neutral-200 bg-white dark:border-white/10 dark:bg-neutral-900
          shadow-[0_20px_40px_-12px_rgb(0_0_0/0.5)]
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`
        }
        aria-hidden={!open}
      >
        <ul>
          {
            NAVBAR_CONTENT.links.map((link) => (
              <li key={`mobile-${link.to}`}>
                <a
                  href={link.to}
                  tabIndex={open ? 0 : -1}
                  onClick={(ev) => {
                    ev.preventDefault();
                    setOpen(false);
                    onDirectLocalLinkClick(link.to);
                  }}
                  className="block px-5 py-3.5 rounded-2xl text-center text-base font-medium hover:bg-yellow-400 hover:text-black duration-200"
                >
                  {link.text}
                </a>
              </li>
            ))
          }
        </ul>
        <div className="mt-2 pt-2 border-t border-neutral-200 dark:border-white/10">
          <a
            href="curriculum.pdf"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className={`
              w-full flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-medium text-black
              bg-gradient-to-r from-yellow-300 to-orange-400`
            }
          >
            <FiDownload className="w-4 h-4"/>
            Scarica il curriculum
          </a>
        </div>
      </nav>
    </div>
  );
}
