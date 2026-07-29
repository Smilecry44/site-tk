import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "../brand";
import { contact } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero">
      <div className="shell hero-in">
        <div className="hero-copy reveal">
          {/* Seule marque de contexte du site, en bas de casse : une ligne de
              texte, pas une étiquette répétée de section en section. */}
          <p className="kicker">Grand Ouest, depuis 1985</p>
          <h1 className="t-display">
            Du terrain à la remise des clés, un seul groupe.
          </h1>
          <p className="t-lead hero-lead">
            Promoteur, aménageur foncier et constructeur en Loire-Atlantique et dans le
            Grand Ouest. Sept métiers réunis dans la même maison depuis 1985&nbsp;: votre
            projet n’attend jamais après un prestataire.
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="btn btn--primary">
              Parler de votre projet
              <ArrowRight />
            </Link>
            <a href={`tel:${contact.telLien}`} className="btn btn--ghost">
              {contact.telAffiche}
            </a>
          </div>
          <p className="hero-reassure">
            Contact direct avec les décideurs, sans intermédiaire.
          </p>
        </div>

        <figure className="hero-media reveal">
          <div className="hero-frame">
            <Image
              src="/img/photos/honfleur-2.jpg"
              alt="Perspective de La Villa Honfleuraise à Honfleur, opération développée par le Groupe TK"
              width={1280}
              height={756}
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
          <figcaption>
            <strong>La Villa Honfleuraise</strong>
            <span>Honfleur</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
