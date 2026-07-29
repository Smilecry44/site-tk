import Image from "next/image";
import { ArrowUpRight } from "../brand";
import { operations, programmes } from "@/lib/data";

export default function Realisations() {
  return (
    <section id="realisations" className="section section--paper2 reals">
      <div className="shell">
        <header className="sec-head sec-head--split reveal">
          <div>
            <h2 className="t-h2">Ce que nous avons déjà bâti.</h2>
          </div>
          <p className="t-lead">
            Résidences, commerces, terrains à bâtir et logements étudiants, de Nantes à
            Honfleur. Chaque opération est portée par le groupe, du montage du permis
            jusqu’à la signature chez le notaire.
          </p>
        </header>

        <div className="reals-grid" data-stagger>
          {programmes.map((p) => (
            <article key={p.nom} className="real reveal">
              <div className="real-media">
                <Image
                  src={p.image}
                  alt={p.alt}
                  width={900}
                  height={620}
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 30vw"
                />
                <span className="real-badge">{p.statut}</span>
              </div>
              <h3 className="real-nom">{p.nom}</h3>
              <p className="real-meta">
                {p.ville} <span aria-hidden="true">·</span> {p.type}
              </p>
            </article>
          ))}
        </div>

        <div className="reals-more reveal">
          <h3 className="reals-more-h">Et aussi</h3>
          <ul className="reals-list">
            {operations.map((o) => (
              <li key={o.nom}>
                <span className="reals-list-nom">{o.nom}</span>
                <span className="reals-list-ville">{o.ville}</span>
                <span className="reals-list-detail">{o.detail}</span>
              </li>
            ))}
          </ul>
          <a
            className="arrow-link"
            href="https://www.tkpromotion.fr/programmes-immobiliers-neufs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir les programmes actuellement en vente
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
