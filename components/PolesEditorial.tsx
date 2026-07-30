import Image from 'next/image'
import Link from 'next/link'
import Fleche from './Fleche'
import { POLES } from '@/lib/data'

/**
 * Les trois pôles en rangs éditoriaux alternés, après le triptyque : le héros
 * donne l'intuition, cette section donne le contenu. Photos différentes de
 * celles du héros pour éviter la redite, et toutes réellement du Groupe.
 */
const PHOTOS: Record<string, { src: string; alt: string }> = {
  immobilier: {
    src: '/img/immo-aerienne.jpg',
    alt: 'Vue aérienne d’une résidence livrée par le Groupe TK, avec sa piscine et son parc, en lisière de forêt',
  },
  interim: {
    src: '/img/interim-poste.jpg',
    alt: 'Collaboratrice en poste en caisse, secteur de la grande distribution',
  },
  evenementiel: {
    src: '/img/event-mariages.jpg',
    alt: 'Cocktail de réception devant la façade du Château Le Saz',
  },
}

export default function PolesEditorial() {
  return (
    <section id="poles" className="scroll-mt-24 bg-paper py-[var(--rythme)]">
      <div className="cadre">
        <div className="max-w-3xl" data-reveal>
          <p className="surtitre">Nos métiers</p>
          <h2 className="mt-6 text-h1">
            Trois métiers, une même exigence
          </h2>
        </div>

        <div className="mt-[clamp(3.5rem,6vw,6rem)] flex flex-col gap-[clamp(3.5rem,6vw,6.5rem)]">
          {POLES.map((pole, i) => {
            const photo = PHOTOS[pole.slug]
            const inverse = i % 2 === 1
            return (
              <article
                key={pole.slug}
                className="grid items-center gap-x-14 gap-y-8 border-t border-line pt-10 lg:grid-cols-12 lg:pt-14"
                data-reveal
              >
                <div
                  className={`lg:col-span-5 ${inverse ? 'lg:col-start-8 lg:row-start-1' : ''}`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-[0.6875rem] font-semibold tracking-[0.2em] text-vert-fonce">
                      {pole.index}
                    </span>
                    <span aria-hidden="true" className="h-px w-8 self-center bg-line" />
                    <span className="text-[0.6875rem] font-semibold tracking-[0.16em] text-muted uppercase">
                      {pole.verbe}
                    </span>
                  </div>

                  <h3 className="mt-5 text-h2">{pole.nomLong}</h3>
                  <p className="mt-5 mesure text-lead text-ink/85">{pole.intro}</p>

                  <ul className="mt-7 grid gap-y-2.5 border-t border-line pt-6">
                    {pole.cles.map((cle) => (
                      <li
                        key={cle}
                        className="flex items-start gap-3 text-[0.9375rem] text-ink/80"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.6em] block h-1 w-1 shrink-0 bg-vert"
                        />
                        {cle}
                      </li>
                    ))}
                  </ul>

                  <Link href={`/${pole.slug}`} className="lien mt-8 inline-flex">
                    Découvrir le pôle {pole.nom}
                    <Fleche />
                  </Link>
                </div>

                {/* Photo non cliquable : le lien texte suffit, et un second
                    lien vers la même cible ne ferait que bavarder au lecteur
                    d'écran. L'alternative textuelle reste donc lisible. */}
                <div
                  className={`lg:col-span-6 ${inverse ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-7'}`}
                >
                  <div className="photo aspect-[4/3]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={1000}
                      height={750}
                      sizes="(max-width: 64rem) 100vw, 46vw"
                      quality={82}
                    />
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
