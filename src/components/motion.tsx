"use client";

import { useEffect } from "react";

/**
 * Enrichit un contenu déjà visible : les blocs `.reveal` sont rendus normalement
 * par le serveur, et ne deviennent animables qu'une fois ce composant monté.
 * Un filet de sécurité force l'état visible au bout de 1,5 s (onglet caché,
 * capture headless, IntersectionObserver indisponible).
 *
 * `?static=1` désactive tout : utilisé pour les captures d'écran.
 */
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const isStatic = new URLSearchParams(window.location.search).has("static");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const counters = Array.from(
      document.querySelectorAll<HTMLElement>("[data-count]")
    );

    if (isStatic || reduced) {
      return;
    }

    root.dataset.anim = "on";

    const blocks = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const showAll = () => blocks.forEach((el) => el.classList.add("is-in"));

    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
      );
      blocks.forEach((el) => observer?.observe(el));
    } else {
      showAll();
    }

    const safety = window.setTimeout(showAll, 1500);

    // Compteurs : la valeur finale est déjà dans le DOM, on ne fait que la rejouer.
    const runCounter = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target)) return;
      const final = el.textContent ?? "";
      const start = performance.now();
      const duration = 1100;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        if (p < 1) {
          el.textContent = Math.round(target * eased).toLocaleString("fr-FR");
          requestAnimationFrame(tick);
        } else {
          el.textContent = final;
        }
      };
      requestAnimationFrame(tick);
    };

    let counterObserver: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window && counters.length) {
      counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runCounter(entry.target as HTMLElement);
              counterObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((el) => counterObserver?.observe(el));
    }

    return () => {
      window.clearTimeout(safety);
      observer?.disconnect();
      counterObserver?.disconnect();
    };
  }, []);

  return null;
}
