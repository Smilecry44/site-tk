'use client'

import { useEffect } from 'react'

/**
 * Effets globaux, montés une seule fois.
 *
 * 1. État de défilement, posé sur <html> pour que l'en-tête change d'habit
 *    en CSS sans second écouteur.
 * 2. Reveals au scroll. Le contenu est visible par défaut : on n'active le
 *    système que si le JS tourne, que l'onglet est visible et que
 *    l'utilisateur n'a pas demandé moins d'animations. Un filet vérifie à
 *    2,5 s que l'observateur s'est bien déclenché au moins une fois ; sinon
 *    il désarme tout (cas du rendu headless ou d'un onglet en arrière-plan,
 *    où l'IntersectionObserver peut ne jamais émettre).
 */
export default function Effets() {
  useEffect(() => {
    const racine = document.documentElement
    const statique = new URLSearchParams(window.location.search).has('static')

    /* --- En-tête ------------------------------------------------ */
    let planifie = false
    const appliquer = () => {
      planifie = false
      racine.dataset.defile = window.scrollY > 24 ? 'oui' : 'non'
    }
    const auScroll = () => {
      if (!planifie) {
        planifie = true
        requestAnimationFrame(appliquer)
      }
    }
    appliquer()
    window.addEventListener('scroll', auScroll, { passive: true })

    /* --- Reveals ------------------------------------------------ */
    let observateur: IntersectionObserver | undefined
    let filet: number | undefined

    const moinsDAnimation = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cibles = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const activable =
      !statique &&
      !moinsDAnimation &&
      cibles.length > 0 &&
      document.visibilityState === 'visible' &&
      'IntersectionObserver' in window

    if (activable) {
      racine.classList.add('reveal-actif')

      observateur = new IntersectionObserver(
        (entrees, obs) => {
          for (const entree of entrees) {
            if (!entree.isIntersecting) continue
            ;(entree.target as HTMLElement).dataset.vu = 'oui'
            obs.unobserve(entree.target)
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
      )

      cibles.forEach((cible) => observateur!.observe(cible))

      filet = window.setTimeout(() => {
        const rienDeVu = !document.querySelector('[data-reveal][data-vu]')
        if (rienDeVu || document.visibilityState !== 'visible') {
          racine.classList.remove('reveal-actif')
          observateur?.disconnect()
        }
      }, 2500)
    }

    return () => {
      window.removeEventListener('scroll', auScroll)
      observateur?.disconnect()
      if (filet) clearTimeout(filet)
    }
  }, [])

  return null
}
