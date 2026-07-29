"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Logo } from "./brand";
import { contact } from "@/lib/data";

const nav = [
  { href: "/le-groupe", label: "Le groupe" },
  { href: "/#metiers", label: "Nos métiers" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#chaine", label: "Notre chaîne" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);

  // Refermer le panneau quand la route change, y compris en navigation arrière.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`hdr${scrolled ? " is-scrolled" : ""}`}>
      <div className="shell hdr-in">
        <Link href="/" className="hdr-logo" aria-label="Groupe TK, retour à l’accueil">
          <Logo />
        </Link>

        <nav className="hdr-nav" aria-label="Navigation principale">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hdr-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hdr-actions">
          <a href={`tel:${contact.telLien}`} className="hdr-tel">
            {contact.telAffiche}
          </a>
          <Link href="/contact" className="btn btn--primary hdr-cta">
            Parler de votre projet
            <ArrowRight />
          </Link>
          <button
            type="button"
            className="hdr-burger"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
            <span className={`burger-bars${open ? " is-open" : ""}`} aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      <div id="menu-mobile" className={`hdr-panel${open ? " is-open" : ""}`} hidden={!open}>
        <nav aria-label="Navigation mobile">
          <Link href="/" onClick={() => setOpen(false)}>
            Accueil
          </Link>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
        <div className="hdr-panel-foot">
          <a href={`tel:${contact.telLien}`} className="btn btn--primary">
            Appeler le {contact.telAffiche}
          </a>
          <p>
            {contact.adresse}, {contact.codePostal} {contact.ville}
          </p>
        </div>
      </div>
    </header>
  );
}
