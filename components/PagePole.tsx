import Image from 'next/image'
import Link from 'next/link'
import Fleche from './Fleche'
import Contact from './Contact'
import { POLES, POLE_PAGES, POLE_BY_SLUG, type PoleSlug } from '@/lib/data'

/**
 * Gabarit commun aux trois pages pôles : bandeau photo, chapô, activités en
 * rangs éditoriaux alternés, respiration citée, réalisations, puis passerelle
 * vers les deux autres pôles et le bloc contact.
 */
export default function PagePole({ slug }: { slug: PoleSlug }) {
  const pole = POLE_BY_SLUG[slug]
  const page = POLE_PAGES[slug]
  const autres = POLES.filter((p) => p.slug !== slug)

  return (
    <>
      {/* --- Bandeau ------------------------------------------------ */}
      <section className="sur-sombre relative flex min-h-[78svh] items-end overflow-hidden bg-nuit text-white">
        <div className="absolute inset-0">
          <Image
            src={page.banniere}
            alt={page.banniereAlt}
            fill
            priority
            quality={84}
            sizes="100vw"
            className="object-cover"
            style={{ filter: 'saturate(0.9) brightness(0.78)' }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgb(6 26 13 / 0.92) 0%, rgb(6 26 13 / 0.5) 42%, rgb(6 26 13 / 0.28) 100%)',
            }}
          />
        </div>

        <div className="cadre relative pt-[calc(7rem+env(safe-area-inset-top))] pb-[clamp(2.75rem,5vw,4.5rem)]">
          <nav aria-label="Fil d’Ariane">
            <ol className="flex flex-wrap items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.16em] text-white/65 uppercase">
              <li>
                <Link href="/" className="hover:text-white">
                  Groupe TK
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                {pole.nom}
              </li>
            </ol>
          </nav>

          <p className="mt-8 flex items-baseline gap-3 text-[0.6875rem] font-semibold tracking-[0.2em] text-white/70 uppercase">
            <span>{pole.index}</span>
            <span aria-hidden="true" className="h-px w-8 self-center bg-white/40" />
            <span>{pole.verbe}</span>
          </p>

          <h1 className="mt-5 max-w-4xl text-display" style={{ lineHeight: 0.98 }}>
            {pole.nomLong}
          </h1>

          <p className="mt-7 max-w-2xl text-lead text-white/85">{pole.intro}</p>

          <p className="mt-9 inline-flex items-baseline gap-4 border-t border-white/25 pt-6">
            <span className="chiffre text-[clamp(2rem,3.4vw,3rem)]">{page.exergue.valeur}</span>
            <span className="max-w-[16ch] text-sm text-white/70">{page.exergue.libelle}</span>
          </p>
        </div>
      </section>

      {/* --- Chapô -------------------------------------------------- */}
      <section className="bg-paper py-[var(--rythme)]">
        <div className="cadre">
          <div className="grid gap-x-16 gap-y-8 lg:grid-cols-12">
            <p className="surtitre lg:col-span-3 lg:pt-3" data-reveal>
              {pole.accroche}
            </p>
            <div className="lg:col-span-8 lg:col-start-5" data-reveal>
              <p className="font-display text-h2 leading-[1.16] tracking-[-0.018em] text-balance">
                {page.chapo}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Activités ---------------------------------------------- */}
      <section className="bg-paper pb-[var(--rythme)]">
        <div className="cadre">
          <h2 className="surtitre" data-reveal>
            Nos activités
          </h2>

          <div className="mt-12 flex flex-col gap-[clamp(3rem,5.5vw,5.5rem)]">
            {page.activites.map((a, i) => {
              const inverse = i % 2 === 1
              return (
                <article
                  key={a.titre}
                  className="grid items-center gap-x-14 gap-y-8 border-t border-line pt-10 lg:grid-cols-12 lg:pt-12"
                  data-reveal
                >
                  <div
                    className={`lg:col-span-5 ${inverse ? 'lg:col-start-8 lg:row-start-1' : ''}`}
                  >
                    {a.filiale && (
                      <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-vert-fonce uppercase">
                        {a.filiale}
                      </p>
                    )}
                    <h3 className="mt-4 text-h2">{a.titre}</h3>
                    <p className="mt-5 mesure text-lead text-ink/85">{a.texte}</p>

                    {a.points && (
                      <ul className="mt-7 flex flex-wrap gap-x-3 gap-y-2.5 border-t border-line pt-6">
                        {a.points.map((p) => (
                          <li
                            key={p}
                            className="border border-line px-2.5 py-1.5 text-[0.6875rem] font-semibold tracking-[0.1em] text-ink/80 uppercase"
                          >
                            {p}
                          </li>
                        ))}
                      </ul>
                    )}

                    {a.lien && (
                      <a
                        href={a.lien.href}
                        target="_blank"
                        rel="noreferrer"
                        className="lien mt-8 inline-flex"
                      >
                        {a.lien.libelle}
                        <Fleche />
                        <span className="sr-only"> (nouvelle fenêtre)</span>
                      </a>
                    )}
                  </div>

                  {a.image && (
                    <div
                      className={`lg:col-span-6 ${inverse ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-7'}`}
                    >
                      <div className="photo aspect-[4/3]">
                        <Image
                          src={a.image}
                          alt={a.imageAlt ?? ''}
                          width={1000}
                          height={750}
                          sizes="(max-width: 64rem) 100vw, 46vw"
                          quality={82}
                        />
                      </div>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- Respiration citée -------------------------------------- */}
      {page.respiration && (
        <section className="sur-sombre relative overflow-hidden bg-nuit text-white">
          <div className="absolute inset-0">
            <Image
              src={page.respiration.image}
              alt={page.respiration.imageAlt}
              fill
              quality={82}
              sizes="100vw"
              className="object-cover"
              style={{ filter: 'saturate(0.85) brightness(0.55)' }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgb(6 26 13 / 0.86), rgb(6 26 13 / 0.42))' }}
            />
          </div>

          <div className="cadre relative py-[clamp(4.5rem,9vw,9rem)]">
            <figure data-reveal>
              <blockquote className="font-display max-w-3xl text-h2 leading-[1.18] tracking-[-0.018em] text-balance">
                <p>«&#160;{page.respiration.citation}&#160;»</p>
              </blockquote>
              <figcaption className="mt-7 text-[0.6875rem] font-semibold tracking-[0.2em] text-white/65 uppercase">
                {page.respiration.source}
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* --- Réalisations ------------------------------------------- */}
      {page.realisations && page.realisations.length > 0 && (
        <section className="bg-paper py-[var(--rythme)]">
          <div className="cadre">
            <h2 className="surtitre" data-reveal>
              {page.realisationsTitre}
            </h2>

            {/* Deux réalisations : deux grandes vignettes paysage. Au-delà :
                grille serrée en portrait. */}
            <ul
              className={`mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 ${
                page.realisations.length > 2 ? 'lg:grid-cols-4' : ''
              }`}
            >
              {page.realisations.map((r, i) => (
                <li
                  key={r.nom}
                  data-reveal
                  style={{ '--reveal-delai': `${Math.min(i, 4) * 70}ms` } as React.CSSProperties}
                >
                  <div
                    className={`photo ${page.realisations!.length > 2 ? 'aspect-[4/5]' : 'aspect-[3/2]'}`}
                  >
                    <Image
                      src={r.image}
                      alt={r.imageAlt}
                      width={800}
                      height={1000}
                      sizes="(max-width: 40rem) 100vw, (max-width: 64rem) 50vw, 23vw"
                      quality={80}
                    />
                  </div>
                  <p className="font-display mt-5 text-[1.1875rem] tracking-[-0.01em]">{r.nom}</p>
                  <p className="mt-1.5 text-sm text-muted">{r.lieu}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* --- Passerelle vers les autres pôles ----------------------- */}
      <section className="bg-paper pb-[var(--rythme)]">
        <div className="cadre">
          <h2 className="surtitre" data-reveal>
            Les autres univers du Groupe
          </h2>

          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {autres.map((autre) => (
              <li key={autre.slug} data-reveal>
                <Link
                  href={`/${autre.slug}`}
                  className="sur-sombre group relative block min-h-[19rem] overflow-hidden text-white"
                >
                  <span className="absolute inset-0">
                    <Image
                      src={autre.image}
                      alt=""
                      fill
                      quality={78}
                      sizes="(max-width: 48rem) 100vw, 46vw"
                      className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      style={{ filter: 'saturate(0.88) brightness(0.7)' }}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to top, rgb(6 26 13 / 0.88) 0%, rgb(6 26 13 / 0.3) 65%)',
                      }}
                    />
                  </span>

                  <span className="relative flex h-full min-h-[19rem] flex-col justify-end p-[clamp(1.5rem,2.6vw,2.5rem)]">
                    <span className="flex items-baseline gap-3 text-[0.6875rem] font-semibold tracking-[0.2em] text-white/70 uppercase">
                      <span>{autre.index}</span>
                      <span aria-hidden="true" className="h-px w-6 self-center bg-white/40" />
                      <span>{autre.verbe}</span>
                    </span>
                    <span className="font-display mt-3 text-[clamp(1.6rem,2.6vw,2.25rem)] leading-[1.08] tracking-[-0.02em]">
                      {autre.nomLong}
                    </span>
                    <span className="lien mt-6 inline-flex self-start">
                      Découvrir
                      <Fleche />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  )
}
