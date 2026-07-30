import type { Metadata } from 'next'
import PagePole from '@/components/PagePole'

export const metadata: Metadata = {
  title: 'Travail temporaire',
  description:
    'Intérim TK, votre partenaire de confiance pour le travail temporaire à Nantes et sa périphérie : bâtiment, grande distribution, automobile, entretien et nettoyage.',
  alternates: { canonical: '/interim' },
}

export default function Page() {
  return <PagePole slug="interim" />
}
