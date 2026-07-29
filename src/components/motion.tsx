"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Enrichit un contenu déjà visible : les blocs `.reveal` sont rendus normalement
 * par le serveur, et ne deviennent animables qu'une fois ce composant monté.
 *
 * Le composant vit dans le layout racine, donc il ne se démonte jamais : l'effet
 * est rejoué à chaque changement de route, sans quoi les blocs de la nouvelle
 * page resteraient masqués par la règle `html[data-anim="on"] .reveal`. Un
 * MutationObserver rattrape en plus tout bloc inséré après coup.
 *
 * Deux filets de sécurité : `data-anim` n'est posé qu'après avoir armé
 * l'observateur, et un délai de 1,5 s force l'état visible (onglet caché,
 * capture headless, IntersectionObserver indisponible).
 *
 * `?static=1` désactive tout : utilisé pour les captures d'écran.
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const isStatic = new URLSearchParams(window.location.search).has("static");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const show = (el: Element) => el.classList.add("is-in");

    if (isStatic || reduced) {
      // Aucune animation : on s'assure que rien ne reste masqué.
      delete root.dataset.anim;
      document.querySelectorAll(".reveal").forEach(show);
      return;
    }

    const supportsObserver = "IntersectionObserver" in window;

    const observer = supportsObserver
      ? new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                show(entry.target);
                obs.unobserve(entry.target);
              }
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
        )
      : null;

    const counterObserver = supportsObserver
      ? new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                runCounter(entry.target as HTMLElement);
                obs.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.5 }
        )
      : null;

    // Les compteurs : la valeur finale est déjà dans le DOM, on ne fait que la rejouer.
    function runCounter(el: HTMLElement) {
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target)) return;
      const final = el.textContent ?? "";
      const start = performance.now();
      const duration = 1100;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        if (p < 1) {
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toLocaleString("fr-FR");
          requestAnimationFrame(tick);
        } else {
          el.textContent = final;
        }
      };
      requestAnimationFrame(tick);
    }

    /**
     * Grilles en cascade : c'est le conteneur qui est observé, pas chaque carte.
     * Sans cela le décalage se cumulerait avec l'entrée en champ de chaque
     * élément et les dernières cartes arriveraient bien après les autres.
     */
    const groupObserver = supportsObserver
      ? new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.querySelectorAll(".reveal").forEach(show);
                obs.unobserve(entry.target);
              }
            });
          },
          { rootMargin: "0px 0px -6% 0px", threshold: 0.04 }
        )
      : null;

    /** Prend en charge les blocs pas encore vus, à l'arrivée comme après coup. */
    const scan = () => {
      document
        .querySelectorAll<HTMLElement>("[data-stagger]:not([data-stagger-ready])")
        .forEach((group) => {
          group.dataset.staggerReady = "1";
          group.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
            el.style.setProperty("--i", String(i));
          });
          if (groupObserver) groupObserver.observe(group);
          else group.querySelectorAll(".reveal").forEach(show);
        });

      // Les blocs isolés, hors grille en cascade, sont observés un par un.
      const blocks = Array.from(
        document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)")
      ).filter((el) => !el.closest("[data-stagger]"));
      if (observer) {
        blocks.forEach((el) => observer.observe(el));
      } else {
        blocks.forEach(show);
      }
      if (counterObserver) {
        document
          .querySelectorAll<HTMLElement>("[data-count]:not([data-counted])")
          .forEach((el) => {
            el.dataset.counted = "1";
            counterObserver.observe(el);
          });
      }
    };

    scan();
    root.dataset.anim = "on";

    // Rattrape tout `.reveal` inséré après le premier passage.
    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });

    // Filet : au-delà de 1,5 s, plus rien ne doit rester masqué.
    const safety = window.setTimeout(() => {
      document.querySelectorAll(".reveal").forEach(show);
    }, 1500);

    return () => {
      window.clearTimeout(safety);
      mutations.disconnect();
      observer?.disconnect();
      groupObserver?.disconnect();
      counterObserver?.disconnect();
    };
  }, [pathname]);

  return null;
}
