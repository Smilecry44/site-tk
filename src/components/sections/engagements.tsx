import { engagements } from "@/lib/data";

export default function Engagements() {
  return (
    <section className="section engagements" aria-labelledby="eng-titre">
      <div className="shell">
        <header className="sec-head reveal">
          <h2 id="eng-titre" className="t-h2">
            Un modèle d’entreprise engagée, au service de ses clients, de ses partenaires
            et des acteurs publics.
          </h2>
        </header>

        <div className="eng-grid" data-stagger>
          {engagements.map((e) => (
            <div key={e.titre} className="eng reveal">
              <hr className="rule" />
              <h3 className="eng-titre">{e.titre}</h3>
              <p className="eng-texte">{e.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
