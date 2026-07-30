import Image from 'next/image'
import Fleche from './Fleche'
import { FILIALES, CONTACT, GROUPE, POLE_BY_SLUG } from '@/lib/data'

/**
 * Ancrage territorial et périmètre du groupe. Les filiales sont présentées
 * en liste typographique plutôt qu'en grille de logos : les logotypes
 * disponibles sur le site source sont des JPG de 250 px à fond blanc incrusté,
 * inutilisables proprement.
 */
export default function Ancrage() {
  return (
    <section id="territoire" className="scroll-mt-24 bg-paper pb-[var(--rythme)]">
      <div className="cadre">
        <div className="grid items-end gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-6" data-reveal>
            <div className="photo aspect-[4/3]">
              <Image
                src="/img/groupe-siege.jpg"
                alt={`Enseigne Groupe TK sur la façade du siège, ${CONTACT.adresse} à ${CONTACT.ville}`}
                width={1200}
                height={900}
                sizes="(max-width: 64rem) 100vw, 46vw"
              />
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8" data-reveal>
            <p className="surtitre">Ancrage</p>
            <h2 className="mt-6 text-h2">
              Un groupe du {GROUPE.territoire}, installé à {CONTACT.ville}
            </h2>
            <p className="mt-6 mesure text-ink/80">
              Le siège n’a pas bougé : {CONTACT.adresse}, aux portes de Nantes. C’est de là
              que les trois pôles se coordonnent, et c’est là que se décident les projets
              menés en {GROUPE.departement} et dans le {GROUPE.territoire}.
            </p>
            <address className="mt-8 border-t border-line pt-7 text-lead not-italic">
              {CONTACT.adresse}
              <br />
              {CONTACT.codePostal} {CONTACT.ville}
            </address>
          </div>
        </div>

        {/* Périmètre : les filiales nommées par le Groupe. */}
        <div className="mt-[clamp(4rem,7vw,7rem)]">
          <div className="flex flex-wrap items-baseline justify-between gap-4" data-reveal>
            <h3 className="text-h3">Les filiales du Groupe</h3>
            <p className="text-[0.6875rem] font-semibold tracking-[0.16em] text-muted uppercase">
              Une marque, plusieurs savoir-faire
            </p>
          </div>

          <ul className="mt-9 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {FILIALES.map((f, i) => {
              const pole = POLE_BY_SLUG[f.pole]
              const contenu = (cliquable: boolean) => (
                <>
                  <span className="flex items-baseline justify-between gap-3">
                    <span
                      className={`font-display text-[1.1875rem] tracking-[-0.01em] ${
                        cliquable
                          ? 'transition-colors duration-200 group-hover:text-vert-fonce'
                          : ''
                      }`}
                    >
                      {f.nom}
                    </span>
                    {f.site && (
                      <Fleche className="mt-1 shrink-0 text-vert-fonce transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                    )}
                  </span>
                  <span className="mt-2.5 block text-sm text-ink/75">{f.activite}</span>
                  <span className="mt-4 block text-[0.625rem] font-semibold tracking-[0.18em] text-muted uppercase">
                    {pole.nom}
                  </span>
                </>
              )

              return (
                <li
                  key={f.nom + f.activite}
                  className="border-t border-line"
                  data-reveal
                  style={{ '--reveal-delai': `${Math.min(i, 5) * 55}ms` } as React.CSSProperties}
                >
                  {f.site ? (
                    /* Fond sable qui déborde du bloc (-mx/px) : l'aire
                       cliquable devient évidente au survol comme au focus. */
                    <a
                      href={f.site}
                      target="_blank"
                      rel="noreferrer"
                      className="group -mx-4 block px-4 py-7 transition-colors duration-200 hover:bg-sand focus-visible:bg-sand"
                    >
                      {contenu(true)}
                      <span className="sr-only"> (nouvelle fenêtre)</span>
                    </a>
                  ) : (
                    <span className="block py-7">{contenu(false)}</span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
