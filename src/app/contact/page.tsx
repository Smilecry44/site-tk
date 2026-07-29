import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "@/components/brand";
import ContactForm from "@/components/contact-form";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Écrivez au Groupe TK ou appelez le 02 40 37 78 01. Promotion, terrains à bâtir, maisons individuelles, locaux d’activité, intérim et privatisation du Château Le Saz.",
};

export default function Contact() {
  return (
    <section className="section contact-page">
      <div className="shell contact-in">
        <div className="contact-aside">
          <div className="reveal">
            <p className="eyebrow">Contact</p>
            <h1 className="t-h2 contact-titre">Dites-nous ce que vous cherchez.</h1>
            <p className="t-lead contact-lead">
              Une question sur un programme, un terrain à vendre, un besoin de
              main-d’œuvre, une date à réserver au château&nbsp;: choisissez le sujet, votre
              message arrive chez la bonne personne.
            </p>
          </div>

          <div className="contact-coords reveal">
            <div>
              <h2 className="contact-h">Par téléphone</h2>
              <a href={`tel:${contact.telLien}`} className="contact-tel">
                {contact.telAffiche}
              </a>
            </div>
            <div>
              <h2 className="contact-h">Par e-mail</h2>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div>
              <h2 className="contact-h">Nous rendre visite</h2>
              <address>
                Groupe TK
                <br />
                {contact.adresse}
                <br />
                <span className="nowrap">
                  {contact.codePostal} {contact.ville}
                </span>
              </address>
            </div>
            <div>
              <h2 className="contact-h">Nous suivre</h2>
              <div className="contact-social">
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  <ArrowUpRight size={13} />
                </a>
                <a href={contact.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

          <figure className="contact-photo reveal">
            <Image
              src="/img/photos/siege-2.jpg"
              alt="Le bâtiment du Groupe TK à La Chapelle-sur-Erdre"
              width={800}
              height={600}
              sizes="(max-width: 980px) 100vw, 38vw"
            />
          </figure>
        </div>

        <div className="contact-form-wrap reveal">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
