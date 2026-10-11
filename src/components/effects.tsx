"use client";

import {useEffect} from "react";

/**
 * Page-wide visual effects, mounted once so every section can stay a server component:
 * - [data-reveal] elements fade in when scrolled into view
 * - [data-pointer] elements get --mx / --my CSS variables with the pointer position relative to them
 */
export default function Effects() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {rootMargin: "0px 0px -10% 0px"});

    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));

    let frame = 0;
    const onPointerMove = (ev: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.querySelectorAll<HTMLElement>("[data-pointer]").forEach((el) => {
          const rect = el.getBoundingClientRect();
          el.style.setProperty("--mx", `${ev.clientX - rect.left}px`);
          el.style.setProperty("--my", `${ev.clientY - rect.top}px`);
        });
      });
    };

    window.addEventListener("pointermove", onPointerMove, {passive: true});

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return null;
}
