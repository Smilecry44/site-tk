import Link from 'next/link'
import Marque from './Marque'
import { POLES, CONTACT, GROUPE, FILIALES } from '@/lib/data'

export default function Pied() {
  const annee = 2026
  const satellites = FILIALES.filter((f) => f.site)

  return (
    <footer className="sur-sombre bg-nuit pt-[clamp(3.5rem,6vw,5.5rem)] pb-10 text-white">
      <div className="cadre">
        <div className="grid gap-x-14 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Marque taille={44} />
            <p className="font-display mt-7 max-w-xs text-[1.375rem] leading-[1.25] text-white/90">
              «&#160;{GROUPE.signature}&#160;»
            </p>
            <p className="mt-6 text-sm text-white/60">
              Groupe familial du {GROUPE.territoire} depuis {GROUPE.fondation}.
            </p>
          </div>

          <nav className="lg:col-span-3" aria-labelledby="pied-poles">
            <h2
              id="pied-poles"
              className="text-[0.6875rem] font-semibold tracking-[0.2em] text-white/50 uppercase"
            >
              Nos métiers
            </h2>
            <ul className="mt-6 grid gap-3.5">
              {POLES.map((pole) => (
                <li key={pole.slug}>
                  <Link href={`/${pole.slug}`} className="text-white/85 hover:text-white">
                    {pole.nomLong}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#histoire" className="text-white/85 hover:text-white">
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link href="/#engagements" className="text-white/85 hover:text-white">
                  Nos engagements
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-labelledby="pied-filiales">
            <h2
              id="pied-filiales"
              className="text-[0.6875rem] font-semibold tracking-[0.2em] text-white/50 uppercase"
            >
              Nos marques
            </h2>
            <ul className="mt-6 grid gap-3.5">
              {satellites.map((f) => (
                <li key={f.nom}>
                  <a
                    href={f.site!}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/85 hover:text-white"
                  >
                    {f.nom}
                    <span className="sr-only"> (nouvelle fenêtre)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-[0.6875rem] font-semibold tracking-[0.2em] text-white/50 uppercase">
              Contact
            </h2>
            <address className="mt-6 grid gap-3.5 not-italic">
              <a href={CONTACT.telephoneHref} className="font-medium text-white hover:opacity-80">
                {CONTACT.telephone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-white/85 hover:text-white"
              >
                {CONTACT.email}
              </a>
              <span className="text-white/70">
                {CONTACT.adresse}
                <br />
                {CONTACT.codePostal} {CONTACT.ville}
              </span>
            </address>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="lien mt-7 inline-flex"
            >
              LinkedIn
              <span className="sr-only"> (nouvelle fenêtre)</span>
            </a>
          </div>
        </div>

        <div className="mt-[clamp(3rem,5vw,4.5rem)] flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-white/16 pt-8 text-sm text-white/55">
          <p>
            © {annee} {GROUPE.nom}. Tous droits réservés.
          </p>
          <p>
            {CONTACT.codePostal} {CONTACT.ville}, {GROUPE.departement}
          </p>
        </div>
      </div>
    </footer>
  )
}
