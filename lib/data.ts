/**
 * Façade de données du site.
 *
 * Le contenu vit dans `lib/content.ts` (verbatims du site source). Ce module
 * est le SEUL point de passage : il applique la typographie française
 * (espaces insécables avant « ; : ! ? % », guillemets « », séparateurs de
 * milliers) à tout le contenu, une fois pour toutes. Les composants importent
 * depuis ici, jamais depuis `content.ts`.
 */

import { deepFr } from './typo'
import * as raw from './content'

export type { Pole, PoleSlug, Activite, Realisation, PolePage } from './content'
import type { Pole, PoleSlug } from './content'

export const POLES = deepFr(raw.POLES)
export const GROUPE = deepFr(raw.GROUPE)
export const CONTACT = deepFr(raw.CONTACT)
export const CHIFFRES = deepFr(raw.CHIFFRES)
export const FRISE = deepFr(raw.FRISE)
export const ENGAGEMENTS = deepFr(raw.ENGAGEMENTS)
export const FILIALES = deepFr(raw.FILIALES)
export const POLE_PAGES = deepFr(raw.POLE_PAGES)
export const NAV = deepFr(raw.NAV)
export const MOTIFS = deepFr(raw.MOTIFS)

export const POLE_BY_SLUG = Object.fromEntries(POLES.map((p) => [p.slug, p])) as Record<
  PoleSlug,
  Pole
>
