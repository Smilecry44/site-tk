"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "./brand";
import { sujets } from "@/lib/data";

/**
 * DÉMO : ce formulaire n'est branché sur aucun service d'envoi. Il valide les
 * champs côté navigateur puis affiche un message de confirmation, le temps que
 * l'endpoint réel (route handler, CRM ou service tiers) soit choisi.
 */
export default function ContactForm() {
  const [envoye, setEnvoye] = useState(false);
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);

  /**
   * La sélection de parcours de l'accueil arrive avec `?sujet=`. On applique la
   * valeur après le montage plutôt qu'au rendu : le HTML est prégénéré et une
   * valeur issue de l'URL provoquerait une divergence d'hydratation.
   */
  useEffect(() => {
    const voulu = new URLSearchParams(window.location.search).get("sujet");
    if (!voulu || !selectRef.current) return;
    if ((sujets as readonly string[]).includes(voulu)) {
      selectRef.current.value = voulu;
    }
  }, []);

  if (envoye) {
    return (
      <div className="form-ok" role="status">
        <h2 className="t-h3">Message enregistré.</h2>
        <p>
          Ceci est une maquette&nbsp;: aucun message n’a réellement été envoyé. Sur le site
          en production, votre demande arriverait directement dans la boîte du responsable
          du pôle concerné.
        </p>
        <button type="button" className="btn btn--ghost" onClick={() => setEnvoye(false)}>
          Revenir au formulaire
        </button>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        // Le délai simule l'aller-retour réseau, pour que l'état de chargement
        // du bouton soit visible tel qu'il le sera une fois le formulaire branché.
        setEnvoiEnCours(true);
        window.setTimeout(() => {
          setEnvoiEnCours(false);
          setEnvoye(true);
        }, 700);
      }}
    >
      <div className="field field--full">
        <label htmlFor="sujet">Votre demande concerne</label>
        <select id="sujet" name="sujet" ref={selectRef} defaultValue={sujets[0]} required>
          {sujets.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="prenom">Prénom</label>
        <input id="prenom" name="prenom" type="text" autoComplete="given-name" required />
      </div>

      <div className="field">
        <label htmlFor="nom">Nom</label>
        <input id="nom" name="nom" type="text" autoComplete="family-name" required />
      </div>

      <div className="field">
        <label htmlFor="email">Adresse e-mail</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="field">
        <label htmlFor="tel">Téléphone</label>
        <input id="tel" name="tel" type="tel" autoComplete="tel" />
      </div>

      <div className="field field--full">
        <label htmlFor="societe">
          Société <span className="field-opt">facultatif</span>
        </label>
        <input id="societe" name="societe" type="text" autoComplete="organization" />
      </div>

      <div className="field field--full">
        <label htmlFor="message">Votre projet en quelques lignes</label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      <div className="field field--full consent">
        <label htmlFor="rgpd">
          <input id="rgpd" name="rgpd" type="checkbox" required />
          <span>
            J’accepte que ces informations soient utilisées pour me recontacter au sujet de
            ma demande. Elles ne seront ni cédées ni revendues.
          </span>
        </label>
      </div>

      <div className="field field--full">
        <button type="submit" className="btn btn--primary" disabled={envoiEnCours}>
          {envoiEnCours ? "Envoi en cours" : "Envoyer ma demande"}
          {envoiEnCours ? <span className="spinner" aria-hidden="true" /> : <ArrowRight />}
        </button>
        <p className="sr-only" role="status">
          {envoiEnCours ? "Envoi de votre demande en cours" : ""}
        </p>
      </div>
    </form>
  );
}
