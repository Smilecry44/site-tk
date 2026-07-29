import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "../brand";
import { parcours } from "@/lib/data";

export default function Parcours() {
  return (
    <section id="parcours" className="section parcours" aria-labelledby="parcours-titre">
      <div className="shell">
        <header className="sec-head--split sec-head reveal">
          <div>
            <p className="eyebrow">Par où commencer</p>
            <h2 id="parcours-titre" className="t-h2">
              Vous êtes ici pour quoi&nbsp;?
            </h2>
          </div>
          <p className="t-lead">
            Sept métiers, cela fait beaucoup de portes d’entrée. Dites-nous laquelle est la
            vôtre, vous arriverez directement chez la bonne équipe.
          </p>
        </header>

        <ul className="parcours-grid" data-stagger>
          {parcours.map((p) => {
            const contenu = (
              <>
                <span className="parcours-n label-mono">{p.n}</span>
                <span className="parcours-titre">{p.titre}</span>
                <span className="parcours-detail">{p.detail}</span>
                <span
                  className={`parcours-fleche${p.externe ? " parcours-fleche--diag" : ""}`}
                  aria-hidden="true"
                >
                  {p.externe ? <ArrowUpRight size={18} /> : <ArrowRight size={18} />}
                </span>
              </>
            );

            return (
              <li key={p.n} className="reveal">
                {p.externe ? (
                  <a
                    className="parcours-carte"
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contenu}
                  </a>
                ) : (
                  <Link className="parcours-carte" href={p.href}>
                    {contenu}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
