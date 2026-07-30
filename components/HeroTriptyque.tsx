'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Fleche from './Fleche'
import { POLES, GROUPE } from '@/lib/data'

/**
 * Le moment signature : « un groupe, trois univers ».
 *
 * Trois panneaux photo plein écran. Au survol ou au focus clavier, le panneau
 * visé s'élargit et livre son détail, les deux autres se resserrent et
 * s'assombrissent. Sur mobile, où le survol n'existe pas, les panneaux
 * s'empilent et restent lisibles d'emblée : chacun est un lien vers son pôle,
 * donc l'action principale ne dépend jamais du survol.
 *
 * `?pole=<slug>` pré-ouvre un panneau (utile pour les captures et pour
 * pointer un pôle depuis un lien).
 */
export default function HeroTriptyque() {
  const [actif, setActif] = useState<number | null>(null)

  useEffect(() => {
    const demande = new URLSearchParams(window.location.search).get('pole')
    if (!demande) return
    const i = POLES.findIndex((p) => p.slug === demande)
    if (i >= 0) setActif(i)
  }, [])

  return (
    <section
      className="tript"
      aria-labelledby="titre-accueil"
      data-actif={actif !== null ? 'oui' : undefined}
      onMouseLeave={() => setActif(null)}
    >
      <div className="tript-enonce">
        <div className="lg:max-w-4xl">
          <p className="surtitre text-[#a9c9b3]">
            Depuis {GROUPE.fondation} · {GROUPE.ville}
          </p>
          <h1
            id="titre-accueil"
            className="mt-5 text-display lg:mt-7"
            style={{ lineHeight: 0.96 }}
          >
            Un groupe,
            <br />
            <em className="font-normal italic">trois univers</em>
          </h1>
          <p className="mt-6 max-w-xl text-lead text-white/78 lg:mx-auto lg:mt-8 lg:text-center">
            {GROUPE.signature}
          </p>
          <p
            aria-hidden="true"
            className="mt-8 hidden text-[0.6875rem] font-semibold tracking-[0.2em] text-white/55 uppercase lg:block"
          >
            Survolez un univers
          </p>
        </div>
      </div>

      {POLES.map((pole, i) => (
        <Link
          key={pole.slug}
          href={`/${pole.slug}`}
          className="tript-panneau sur-sombre"
          data-etat={actif === null ? 'repos' : actif === i ? 'actif' : 'attenue'}
          onMouseEnter={() => setActif(i)}
          onFocus={() => setActif(i)}
          onBlur={() => setActif(null)}
        >
          <span className="tript-media">
            <Image
              src={pole.image}
              alt={pole.imageAlt}
              fill
              /* Les trois panneaux sont dans le premier écran en desktop. */
              priority
              quality={82}
              sizes="(max-width: 60rem) 100vw, 55vw"
            />
          </span>
          <span className="tript-voile" aria-hidden="true" />

          <span className="tript-contenu">
            <span className="flex items-baseline gap-3 text-[0.6875rem] font-semibold tracking-[0.2em] text-white/70 uppercase">
              <span>{pole.index}</span>
              <span aria-hidden="true" className="tript-verbe h-px w-6 self-center bg-white/40" />
              <span className="tript-verbe">{pole.verbe}</span>
            </span>

            {/* La taille vit dans globals.css (.tript-titre) et non en
                utilitaire : l'état atténué doit pouvoir la réduire, et un
                utilitaire Tailwind gagnerait contre la couche components. */}
            <h2 className="tript-titre mt-4 text-white">{pole.nom}</h2>

            <span className="tript-detail">
              <span className="block">
                <span className="mt-4 block max-w-md text-[1.0625rem] text-white/85">
                  {pole.accroche}
                </span>

                <span className="mt-5 flex flex-wrap gap-x-4 gap-y-2 lg:max-w-lg">
                  {pole.cles.map((cle) => (
                    <span
                      key={cle}
                      className="border border-white/25 px-2.5 py-1.5 text-[0.6875rem] font-semibold tracking-[0.1em] text-white/90 uppercase"
                    >
                      {cle}
                    </span>
                  ))}
                </span>

                <span className="mt-7 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t border-white/20 pt-5">
                  <span className="lien">
                    Découvrir le pôle
                    <Fleche />
                  </span>
                  <span className="text-right text-[0.6875rem] font-semibold tracking-[0.14em] text-white/60 uppercase">
                    {pole.repere}
                  </span>
                </span>
              </span>
            </span>
          </span>
        </Link>
      ))}
    </section>
  )
}
