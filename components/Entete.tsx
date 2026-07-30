'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Marque from './Marque'
import Fleche from './Fleche'
import { NAV, CONTACT } from '@/lib/data'

export default function Entete() {
  const [ouvert, setOuvert] = useState(false)
  const chemin = usePathname()

  // Refermer le menu à chaque navigation.
  useEffect(() => setOuvert(false), [chemin])

  // Menu ouvert : on bloque le défilement du fond et on écoute Échap.
  useEffect(() => {
    if (!ouvert) return
    const precedent = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const auClavier = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOuvert(false)
    }
    window.addEventListener('keydown', auClavier)
    return () => {
      document.body.style.overflow = precedent
      window.removeEventListener('keydown', auClavier)
    }
  }, [ouvert])

  return (
    <header className="entete" data-ouvert={ouvert ? 'oui' : undefined}>
      <div className="cadre flex items-center justify-between gap-6 py-4 lg:py-5">
        <Link
          href="/"
          className="shrink-0 transition-opacity hover:opacity-80"
          aria-label="Groupe TK, retour à l’accueil"
        >
          <Marque taille={38} />
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => {
              const actif = chemin === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={actif ? 'page' : undefined}
                    className="entete-lien text-[0.8125rem] font-semibold tracking-[0.13em] uppercase"
                  >
                    {item.libelle}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT.telephoneHref}
            className="entete-lien hidden text-[0.8125rem] font-semibold tracking-[0.08em] xl:block"
          >
            {CONTACT.telephone}
          </a>
          <Link href="/#contact" className="cta hidden min-h-0 px-6 py-3.5 sm:inline-flex">
            Contactez-nous
          </Link>

          <button
            type="button"
            onClick={() => setOuvert((v) => !v)}
            aria-expanded={ouvert}
            aria-controls="menu-mobile"
            className="entete-burger lg:hidden"
          >
            <span className="sr-only">{ouvert ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
            {/* Deux classes distinctes : le span sr-only fausserait un
                ciblage par :first-of-type / :last-of-type. */}
            <span aria-hidden="true" className="entete-burger-trait entete-burger-trait-a" />
            <span aria-hidden="true" className="entete-burger-trait entete-burger-trait-b" />
          </button>
        </div>
      </div>

      {/* Panneau mobile. Rendu conditionnel : rien dans le DOM au repos. */}
      {ouvert && (
        <div id="menu-mobile" className="entete-panneau lg:hidden">
          <nav aria-label="Navigation principale mobile">
            <ul>
              {NAV.map((item, i) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOuvert(false)}>
                    <span className="entete-panneau-index">{`0${i + 1}`}</span>
                    {item.libelle}
                    <Fleche className="ml-auto" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto grid gap-5 pt-10">
            <Link href="/#contact" onClick={() => setOuvert(false)} className="cta justify-center">
              Contactez-nous
              <Fleche />
            </Link>
            <div className="grid gap-1 text-sm">
              <a href={CONTACT.telephoneHref} className="font-semibold">
                {CONTACT.telephone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="text-white/70">
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
