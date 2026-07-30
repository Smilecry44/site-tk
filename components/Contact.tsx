'use client'

import { useId, useState } from 'react'
import Fleche from './Fleche'
import { CONTACT, MOTIFS } from '@/lib/data'

type Erreurs = Partial<Record<'nom' | 'email' | 'motif' | 'message', string>>

/**
 * MAQUETTE : le formulaire valide côté client et affiche ses états, mais
 * n'envoie rien. Pour le brancher, remplir `envoyer()` ci-dessous : c'est le
 * seul point à modifier.
 *
 * Écarts assumés avec le formulaire du site source : « Raison sociale »
 * devient optionnel (il bloquait les particuliers) et un motif est demandé,
 * pour router la demande vers le bon pôle.
 */
export default function Contact() {
  const id = useId()
  const [erreurs, setErreurs] = useState<Erreurs>({})
  const [etat, setEtat] = useState<'repos' | 'envoi' | 'ok'>('repos')

  async function envoyer(donnees: FormData) {
    // TODO brancher ici l'envoi réel (route API, Resend, SMTP…).
    void donnees
    await new Promise((r) => setTimeout(r, 600))
  }

  async function auSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const donnees = new FormData(form)

    const prochaines: Erreurs = {}
    const nom = String(donnees.get('nom') ?? '').trim()
    const email = String(donnees.get('email') ?? '').trim()
    const motif = String(donnees.get('motif') ?? '')
    const message = String(donnees.get('message') ?? '').trim()

    if (nom.length < 2) prochaines.nom = 'Merci d’indiquer votre nom.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      prochaines.email = 'Cette adresse e-mail semble incomplète.'
    if (!motif) prochaines.motif = 'Choisissez l’objet de votre demande.'
    if (message.length < 10) prochaines.message = 'Quelques mots de plus nous aideront.'

    setErreurs(prochaines)

    if (Object.keys(prochaines).length > 0) {
      // Amener le focus sur le premier champ en défaut.
      const premier = Object.keys(prochaines)[0]
      form.querySelector<HTMLElement>(`[name="${premier}"]`)?.focus()
      return
    }

    setEtat('envoi')
    await envoyer(donnees)
    setEtat('ok')
    form.reset()
  }

  const champ = (nom: keyof Erreurs) => ({
    id: `${id}-${nom}`,
    name: nom,
    className: 'champ',
    'aria-invalid': erreurs[nom] ? (true as const) : undefined,
    'aria-describedby': erreurs[nom] ? `${id}-${nom}-err` : undefined,
  })

  const Erreur = ({ nom }: { nom: keyof Erreurs }) =>
    erreurs[nom] ? (
      <p id={`${id}-${nom}-err`} className="mt-2 text-sm text-[#8f1f19]">
        {erreurs[nom]}
      </p>
    ) : null

  return (
    <section id="contact" className="scroll-mt-24 bg-sand py-[var(--rythme)]">
      <div className="cadre">
        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-12">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start" data-reveal>
            <p className="surtitre">Contact</p>
            <h2 className="mt-6 text-h1">Parlons de votre projet</h2>
            <p className="mt-7 mesure text-ink/80">
              Un projet immobilier, un besoin en intérim, un événement à organiser&#160;? Une
              seule adresse, et nous vous orientons vers le bon interlocuteur.
            </p>

            <dl className="mt-10 grid gap-6 border-t border-line pt-8">
              <div>
                <dt className="etiquette">Téléphone</dt>
                <dd>
                  <a
                    href={CONTACT.telephoneHref}
                    className="text-lead font-medium hover:text-vert-fonce"
                  >
                    {CONTACT.telephone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="etiquette">E-mail</dt>
                <dd>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-lead font-medium hover:text-vert-fonce"
                  >
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="etiquette">Siège</dt>
                <dd className="text-lead">
                  {CONTACT.adresse}
                  <br />
                  {CONTACT.codePostal} {CONTACT.ville}
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7" data-reveal>
            {etat === 'ok' ? (
              <div
                role="status"
                className="border border-vert bg-paper p-[clamp(1.5rem,3vw,2.5rem)]"
              >
                <p className="font-display text-h3">Message bien reçu</p>
                <p className="mt-4 mesure text-ink/80">
                  Merci&#160;: nous revenons vers vous rapidement. Pour une demande urgente,
                  le {CONTACT.telephone} reste le plus direct.
                </p>
                <button
                  type="button"
                  onClick={() => setEtat('repos')}
                  className="lien mt-7 cursor-pointer"
                >
                  Écrire un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={auSubmit} noValidate className="grid gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor={`${id}-nom`} className="etiquette">
                      Nom et prénom
                    </label>
                    <input type="text" autoComplete="name" {...champ('nom')} />
                    <Erreur nom="nom" />
                  </div>
                  <div>
                    <label htmlFor={`${id}-societe`} className="etiquette">
                      Société <span className="normal-case">(optionnel)</span>
                    </label>
                    <input
                      type="text"
                      id={`${id}-societe`}
                      name="societe"
                      autoComplete="organization"
                      className="champ"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor={`${id}-email`} className="etiquette">
                      E-mail
                    </label>
                    <input type="email" autoComplete="email" {...champ('email')} />
                    <Erreur nom="email" />
                  </div>
                  <div>
                    <label htmlFor={`${id}-telephone`} className="etiquette">
                      Téléphone <span className="normal-case">(optionnel)</span>
                    </label>
                    <input
                      type="tel"
                      id={`${id}-telephone`}
                      name="telephone"
                      autoComplete="tel"
                      className="champ"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={`${id}-motif`} className="etiquette">
                    Objet de votre demande
                  </label>
                  <select defaultValue="" {...champ('motif')}>
                    <option value="" disabled>
                      Choisissez un objet
                    </option>
                    {MOTIFS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <Erreur nom="motif" />
                </div>

                <div>
                  <label htmlFor={`${id}-message`} className="etiquette">
                    Votre message
                  </label>
                  <textarea rows={5} {...champ('message')} />
                  <Erreur nom="message" />
                </div>

                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
                  <button type="submit" className="cta" disabled={etat === 'envoi'}>
                    {etat === 'envoi' ? 'Envoi…' : 'Contactez-nous'}
                    <Fleche />
                  </button>
                  <p className="max-w-xs text-sm text-muted">
                    Vos informations servent uniquement à traiter votre demande.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
