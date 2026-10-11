"use client";

import {useEffect, useState} from "react";
import {onLocalLinkClick} from "@/lib/link";
import {NAVBAR_CONTENT} from "@/static/content/navbar.content";

export default function NavbarSections() {
  const [active, setActive] = useState(NAVBAR_CONTENT.links[0].to);

  useEffect(() => {
    // A section is "active" while it crosses the horizontal band around the middle of the screen
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          setActive(`#${entry.target.id}`);
        }
      });
    }, {rootMargin: "-45% 0px -50% 0px"});

    NAVBAR_CONTENT.links.forEach((link) => {
      const section = document.getElementById(link.to.replace("#", ""));
      if(section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ul
      className="hidden md:flex items-center gap-1 text-sm"
      onClick={onLocalLinkClick}
    >
      {
        NAVBAR_CONTENT.links.map((link) => (
          <li
            key={`section-${link.to}`}
          >
            <a
              href={`${link.to}`}
              className={`
                block px-4 py-1.5 rounded-full duration-300
                ${active === link.to
                  ? "bg-gradient-to-r from-yellow-300 to-orange-400 text-black font-medium"
                  : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"}`
              }
            >
              {link.text}
            </a>
          </li>
        ))
      }
    </ul>
  )
}
