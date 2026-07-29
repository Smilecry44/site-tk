import Image from "next/image";
import { chaine } from "@/lib/data";

export default function Chaine() {
  return (
    <section id="chaine" className="section section--dark chaine">
      <div className="shell">
        <div className="chaine-head reveal">
          <div>
            <h2 className="t-h2">
              Sept métiers dans la même maison. <em>Un seul interlocuteur.</em>
            </h2>
          </div>
          <p className="t-lead">
            La plupart des opérateurs sous-traitent la moitié de la chaîne. Chez nous, le
            foncier, l’architecture, l’économie de la construction, la promotion, la
            construction, la commercialisation et la gestion sont sept filiales du même
            groupe. Une décision se prend dans le couloir, pas en trois semaines.
          </p>
        </div>

        <ol className="chaine-list" data-stagger>
          {chaine.map((etape) => (
            <li key={etape.n} className="chaine-item reveal">
              <span className="chaine-n">{etape.n}</span>
              <div className="chaine-body">
                <h3 className="chaine-titre">{etape.titre}</h3>
                <p className="chaine-filiale">{etape.filiale}</p>
                <p className="chaine-texte">{etape.texte}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="chaine-photo reveal">
          <Image
            src="/img/photos/equipe-reunion.jpg"
            alt="Réunion de l’équipe immobilière du Groupe TK dans les bureaux de La Chapelle-sur-Erdre"
            width={800}
            height={600}
            sizes="(max-width: 900px) 100vw, 60vw"
          />
          <figcaption>
            Réunion de l’équipe immobilière, siège du groupe à La Chapelle-sur-Erdre.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
