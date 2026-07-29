import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/brand";
import Stats from "@/components/sections/stats";
import { contact, filiales, reperes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Le groupe",
  description:
    "Groupe familial nantais fondé en 1985, le Groupe TK réunit quinze filiales autour de l’immobilier, du travail temporaire et de l’événementiel, à La Chapelle-sur-Erdre.",
};

export default function LeGroupe() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-in">
          <div className="reveal">
            <h1 className="t-h2 page-hero-titre">
              Un groupe familial nantais, bâtisseur depuis 1985.
            </h1>
            <p className="t-lead page-hero-lead">
              Tout commence à Nantes en 1985, avec une agence de travail temporaire et un
              premier programme immobilier d’entreprise. Quarante ans plus tard, le groupe
              réunit une quinzaine de filiales autour d’un même métier&nbsp;: rendre un
              lieu habitable, du terrain nu jusqu’aux clés.
            </p>
            <div className="page-hero-cta">
              <Link href="/contact" className="btn btn--primary">
                Nous rencontrer
                <ArrowRight />
              </Link>
            </div>
          </div>
          <figure className="page-hero-media reveal">
            <Image
              src="/img/photos/siege-3.jpg"
              alt="Le siège du Groupe TK, 6 rue Ampère à La Chapelle-sur-Erdre"
              width={1200}
              height={900}
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
            />
            <figcaption>Le siège du groupe, 6 rue Ampère à La Chapelle-sur-Erdre.</figcaption>
          </figure>
        </div>
      </section>

      <Stats />

      <section className="section groupe-recit">
        <div className="shell groupe-recit-in">
          <div className="reveal">
            <p className="kicker">Solidité et esprit de conquête</p>
            <h2 className="t-h2">
              Nous maîtrisons l’ensemble de la chaîne immobilière, de la conception à la
              promotion.
            </h2>
          </div>
          <div className="groupe-recit-texte reveal">
            <p>
              Le groupe achète le foncier, dessine, chiffre, construit, vend et gère. Cette
              intégration n’est pas un argument de plaquette&nbsp;: elle décide de la
              rapidité d’un dépôt de permis, de la maîtrise d’un coût de construction et de
              la capacité à tenir un délai annoncé.
            </p>
            <p>
              Elle a aussi une conséquence simple pour ceux qui travaillent avec nous.
              Notre organisation vous permet d’être en contact direct avec les décideurs.
              Simplicité et gain de temps à la clé.
            </p>
            <p>
              Nous développons des programmes de qualité au juste prix, en privilégiant le
              choix d’entreprises locales, sur un territoire que nous connaissons&nbsp;: de la
              Loire-Atlantique à la Vendée, du Morbihan aux Côtes-d’Armor, jusqu’au
              Maine-et-Loire et à la Normandie.
            </p>
          </div>
        </div>
      </section>

      <section id="reperes" className="section section--dark reperes">
        <div className="shell">
          <header className="sec-head reveal">
            <h2 className="t-h2">Le Groupe TK à vos côtés depuis 1985.</h2>
          </header>
          <ol className="frise" data-stagger>
            {reperes.map((r) => (
              <li key={r.annee} className="frise-item reveal">
                <span className="frise-annee">{r.annee}</span>
                <p className="frise-texte">{r.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--alt filiales">
        <div className="shell">
          <header className="sec-head--split sec-head reveal">
            <div>
              <h2 className="t-h2">Un métier, une équipe, une société.</h2>
            </div>
            <p className="t-lead">
              Chaque maillon de la chaîne a sa propre structure et ses propres spécialistes.
              Ils travaillent tous dans le même bâtiment, à La Chapelle-sur-Erdre.
            </p>
          </header>

          <ul className="filiales-grid" data-stagger>
            {filiales.map((f) => (
              <li key={f.nom} className="filiale reveal">
                <div className="filiale-logo">
                  <Image src={f.logo} alt="" width={250} height={200} sizes="220px" />
                </div>
                <div>
                  <h3 className="filiale-nom">{f.nom}</h3>
                  <p className="filiale-activite">{f.activite}</p>
                  {f.lien && (
                    <a
                      className="arrow-link filiale-lien"
                      href={f.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le site
                      <ArrowUpRight />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--forest cta">
        <div className="shell cta-in">
          <div className="reveal">
            <h2 className="t-h2">Nos équipes sont réunies sous un même toit.</h2>
            <p className="t-lead cta-lead">
              {contact.adresse}, {contact.codePostal} {contact.ville}. Au nord de Nantes,
              sortie porte de La Chapelle.
            </p>
          </div>
          <div className="cta-actions reveal">
            <Link href="/contact" className="btn btn--light">
              Prendre rendez-vous
              <ArrowRight />
            </Link>
            <a href={`tel:${contact.telLien}`} className="cta-tel">
              <span>ou appelez le</span>
              <strong>{contact.telAffiche}</strong>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
