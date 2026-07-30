import type { Metadata } from 'next'
import PagePole from '@/components/PagePole'

export const metadata: Metadata = {
  title: 'Immobilier & Construction',
  description:
    'Promotion, aménagement foncier, maisons individuelles, conseil et ingénierie du bâtiment. Notre expertise foncière et immobilière, ADN du Groupe dès 1985, reconnue dans le Grand Ouest.',
  alternates: { canonical: '/immobilier' },
}

export default function Page() {
  return <PagePole slug="immobilier" />
}
