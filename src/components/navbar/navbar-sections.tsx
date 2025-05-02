"use client";

import {onLocalLinkClick} from "@/lib/link";
import {NAVBAR_CONTENT} from "@/static/content/navbar.content";

export default function NavbarSections() {
  return (
    <ul 
      className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-4"
      onClick={onLocalLinkClick}
    >
      {
        NAVBAR_CONTENT.links.map((link) => (
          <li 
            key={`section-${link.to}`}
          >
            <a
              href={`${link.to}`}
              className="text-white font-light hover:text-yellow-500! hover:underline duration-200" 
            >
              {link.text}
            </a>
          </li>
        ))
      }
    </ul>
  )
}

