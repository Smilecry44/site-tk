import { CHIFFRES } from '@/lib/data'

/**
 * Les chiffres publiés par le Groupe. Sur le site source ils n'existaient
 * qu'à l'intérieur d'une image d'infographie, donc invisibles pour les
 * moteurs et les lecteurs d'écran : ils redeviennent ici du texte.
 */
export default function Chiffres() {
  return (
    <section className="sur-sombre bg-nuit py-[var(--rythme)] text-white">
      <div className="cadre">
        <p className="surtitre" data-reveal>
          En chiffres
        </p>

        <dl className="mt-12 grid gap-px border-t border-white/16 sm:grid-cols-2 lg:grid-cols-5">
          {CHIFFRES.map((c, i) => (
            <div
              key={c.libelle}
              className="border-b border-white/16 py-8 sm:pr-8 lg:border-b-0 lg:pt-10 lg:pb-2"
              data-reveal
              style={{ '--reveal-delai': `${i * 70}ms` } as React.CSSProperties}
            >
              <dt className="sr-only">{c.libelle}</dt>
              <dd>
                <span className="chiffre block text-[clamp(2.75rem,4.6vw,4.25rem)]">
                  {c.valeur}
                </span>
                <span className="mt-4 block text-[0.9375rem] font-semibold tracking-[0.01em] text-white">
                  {c.libelle}
                </span>
                <span className="mt-1.5 block max-w-[22ch] text-sm text-white/70">{c.detail}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
