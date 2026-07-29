import Link from "next/link";
import { ArrowRight } from "../brand";
import { contact } from "@/lib/data";

export default function Cta() {
  return (
    <section className="section section--forest cta" aria-labelledby="cta-titre">
      <div className="shell cta-in">
        <div className="reveal">
          <p className="eyebrow">Parlons-en</p>
          <h2 id="cta-titre" className="t-h2">
            Un terrain, un projet, un besoin de main-d’œuvre&nbsp;?
          </h2>
          <p className="t-lead cta-lead">
            Dites-nous en deux lignes ce que vous cherchez. Vous serez mis en relation
            avec la personne qui décide, pas avec un standard.
          </p>
        </div>
        <div className="cta-actions reveal">
          <Link href="/contact" className="btn btn--light">
            Décrire mon projet
            <ArrowRight />
          </Link>
          <a href={`tel:${contact.telLien}`} className="cta-tel">
            <span>ou appelez le</span>
            <strong>{contact.telAffiche}</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
