import type { Metadata } from 'next'
import PagePole from '@/components/PagePole'

export const metadata: Metadata = {
  title: 'Événementiel & Réceptions',
  description:
    'Château Le Saz, créateur d’instants de vie uniques. Mariages, séminaires, comités de direction, tournages : un décor d’exception sur près de 5 hectares, à quelques minutes de Nantes.',
  alternates: { canonical: '/evenementiel' },
}

export default function Page() {
  return <PagePole slug="evenementiel" />
}
