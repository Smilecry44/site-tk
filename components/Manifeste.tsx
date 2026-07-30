import Image from 'next/image'
import { GROUPE } from '@/lib/data'

export default function Manifeste() {
  return (
    <section id="groupe" className="scroll-mt-24 bg-paper py-[var(--rythme)]">
      <div className="cadre">
        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-12">
          {/* Colonne sticky : la hauteur vient de la photo d'en face, le
              titre l'accompagne au lieu de laisser un blanc mort. */}
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start" data-reveal>
            <p className="surtitre">Le groupe</p>
            <h2 className="mt-6 text-h1">{GROUPE.solidite}</h2>
            <p className="mt-8 max-w-md text-lead text-ink/85">{GROUPE.resume}</p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7" data-reveal style={{ '--reveal-delai': '90ms' } as React.CSSProperties}>
            <div className="photo aspect-[4/3]">
              <Image
                src="/img/groupe-reunion.jpg"
                alt="Réunion de l’équipe du Groupe TK dans les bureaux de La Chapelle-sur-Erdre, devant les affiches des programmes en cours"
                width={800}
                height={600}
                sizes="(max-width: 64rem) 100vw, 46vw"
              />
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <p className="mesure text-ink/80">{GROUPE.familial}</p>
              <p className="mesure text-ink/80">{GROUPE.multidimensionnel}</p>
            </div>
          </div>
        </div>

        {/* Signature de marque, posée comme une exergue de magazine. */}
        <figure className="mt-[clamp(4rem,7vw,7rem)] border-t border-line pt-12" data-reveal>
          <blockquote className="font-display max-w-4xl text-h2 leading-[1.14] tracking-[-0.018em] text-balance">
            <p>«&#160;{GROUPE.signature}&#160;»</p>
          </blockquote>
          <figcaption className="mt-6 text-[0.6875rem] font-semibold tracking-[0.2em] text-muted uppercase">
            Signature du Groupe TK, depuis {GROUPE.fondation}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
