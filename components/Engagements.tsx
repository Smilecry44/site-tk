import { ENGAGEMENTS } from '@/lib/data'

export default function Engagements() {
  const cite = ENGAGEMENTS.find((e) => e.verbatim)

  return (
    <section id="engagements" className="scroll-mt-24 bg-paper py-[var(--rythme)]">
      <div className="cadre">
        <div className="max-w-3xl" data-reveal>
          <p className="surtitre">Nos engagements</p>
          <h2 className="mt-6 text-h1">Trois manières de tenir parole</h2>
        </div>

        <dl className="mt-14 grid gap-x-14 gap-y-10 border-t border-line pt-12 md:grid-cols-3">
          {ENGAGEMENTS.map((e, i) => (
            <div
              key={e.titre}
              data-reveal
              style={{ '--reveal-delai': `${i * 80}ms` } as React.CSSProperties}
            >
              <dt className="font-display text-h3 tracking-[-0.015em]">
                {e.titre}
              </dt>
              <dd className="mt-4 mesure text-ink/80">{e.texte}</dd>
            </div>
          ))}
        </dl>

        {cite && (
          <figure
            className="sur-sombre mt-[clamp(3.5rem,6vw,6rem)] bg-nuit px-[clamp(1.5rem,4vw,4.5rem)] py-[clamp(2.75rem,5vw,4.5rem)] text-white"
            data-reveal
          >
            <blockquote className="font-display max-w-4xl text-h3 leading-[1.35] text-balance">
              <p>«&#160;{cite.verbatim}&#160;»</p>
            </blockquote>
            <figcaption className="mt-7 text-[0.6875rem] font-semibold tracking-[0.2em] text-white/65 uppercase">
              {cite.titre}
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  )
}
