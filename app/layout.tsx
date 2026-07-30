import type { Metadata, Viewport } from 'next'
import { Newsreader, Archivo } from 'next/font/google'
import './globals.css'
import Entete from '@/components/Entete'
import Pied from '@/components/Pied'
import Effets from '@/components/Effets'
import { GROUPE } from '@/lib/data'

/**
 * Deux familles sur un axe de contraste :
 * Newsreader, serif éditoriale à taille optique variable, pour la voix
 * (titres, chiffres, citations) ; Archivo, grotesque rationnelle, pour la
 * structure (navigation, étiquettes, corps). Les deux remplacent le couple
 * Mulish / Roboto du site source.
 */
const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-newsreader',
  style: ['normal', 'italic'],
})

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.groupetk.fr'),
  title: {
    default: `${GROUPE.nom} · Immobilier, intérim et événementiel depuis ${GROUPE.fondation}`,
    template: `%s · ${GROUPE.nom}`,
  },
  description:
    'Groupe familial du Grand Ouest depuis 1985. Trois pôles réunis sous une seule marque : immobilier et construction, travail temporaire, événementiel. Siège à La Chapelle-sur-Erdre.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: GROUPE.nom,
    title: `${GROUPE.nom} · ${GROUPE.signature}`,
    description:
      'Un groupe, trois univers : immobilier et construction, travail temporaire, événementiel. Acteur du Grand Ouest depuis 1985.',
  },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = {
  themeColor: '#0a2e16',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${newsreader.variable} ${archivo.variable}`}>
      <body>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-vert focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Aller au contenu
        </a>
        <Effets />
        <Entete />
        <main id="contenu">{children}</main>
        <Pied />
      </body>
    </html>
  )
}
