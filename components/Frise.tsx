import { FRISE, GROUPE } from '@/lib/data'

/**
 * La frise historique du site source, reprise intégralement. Elle y était
 * reléguée en bas de page en texte brut : c'est ici la preuve de durée, donc
 * elle devient une section à part entière.
 */
export default function Frise() {
  return (
    <section id="histoire" className="scroll-mt-24 bg-sand py-[var(--rythme)]">
      <div className="cadre">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
          <header className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start" data-reveal>
            <p className="surtitre">Notre histoire</p>
            <h2 className="mt-6 text-h1">
              Le Groupe TK à vos côtés depuis {GROUPE.fondation}
            </h2>
            <p className="mt-7 mesure text-ink/80">
              Deux métiers en {GROUPE.fondation}, le travail temporaire et l’immobilier
              d’entreprise. Puis, décennie après décennie, un groupe qui s’élargit sans
              quitter son territoire.
            </p>
          </header>

          <ol className="lg:col-span-7 lg:col-start-6">
            {FRISE.map((etape, i) => (
              <li
                key={etape.annee}
                className="frise-item"
                data-reveal
                style={{ '--reveal-delai': `${Math.min(i, 5) * 60}ms` } as React.CSSProperties}
              >
                <p className="chiffre text-[clamp(1.75rem,2.6vw,2.5rem)] text-vert-fonce">
                  {etape.annee}
                </p>
                <p className="mt-2.5 mesure text-ink/85">{etape.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
