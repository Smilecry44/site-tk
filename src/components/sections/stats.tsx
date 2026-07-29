import { chiffres } from "@/lib/data";

export default function Stats() {
  return (
    <section className="section section--tight stats" aria-label="Le Groupe TK en chiffres">
      <div className="shell">
        <dl className="stats-grid">
          {chiffres.map((c) => (
            <div key={c.label} className="stat reveal">
              <dt className="sr-only">{c.label}</dt>
              <dd>
                <span className="stat-num">
                  <span data-count={c.valeur}>{c.valeur.toLocaleString("fr-FR")}</span>
                  {c.suffixe}
                </span>
                <span className="stat-label">{c.label}</span>
                <span className="stat-detail">{c.detail}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
