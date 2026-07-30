/**
 * Typographie française : espaces insécables et guillemets.
 *
 * Appliqué automatiquement à tout le contenu de `lib/data.ts` (via `deepFr`)
 * et disponible pour les textes écrits directement dans les composants.
 * Objectif : ne jamais dépendre d'un caractère invisible tapé à la main.
 */

const NBSP = ' '

export function fr(input: string): string {
  return (
    input
      // Espace insécable avant la ponctuation haute, les unités et le guillemet fermant.
      .replace(/ +([;:!?%»])/g, `${NBSP}$1`)
      .replace(/ +(€|m²|ha)\b/g, `${NBSP}$1`)
      // Espace insécable après le guillemet ouvrant.
      .replace(/« +/g, `«${NBSP}`)
      // Séparateur de milliers insécable : « 2 000 », « 10 000 ».
      .replace(/(\d) (?=\d{3}(?!\d))/g, `$1${NBSP}`)
  )
}

/** Numéro de téléphone : insécable de bout en bout pour éviter toute césure. */
export function tel(input: string): string {
  return input.replace(/ /g, NBSP)
}

/** Applique `fr()` à toutes les chaînes d'une structure de données, récursivement. */
export function deepFr<T>(value: T): T {
  if (typeof value === 'string') return fr(value) as unknown as T
  if (Array.isArray(value)) return value.map(deepFr) as unknown as T
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(value)) out[k] = deepFr(v)
    return out as T
  }
  return value
}
