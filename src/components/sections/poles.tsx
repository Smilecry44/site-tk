import Image from "next/image";
import { ArrowUpRight } from "../brand";
import { poles } from "@/lib/data";

export default function Poles() {
  return (
    <section id="metiers" className="section poles">
      <div className="shell">
        <header className="sec-head reveal">
          <p className="eyebrow">Nos métiers</p>
          <h2 className="t-h2">Trois pôles, une même manière de travailler.</h2>
        </header>
      </div>

      <div className="shell poles-list" data-stagger>
        {poles.map((pole, i) => (
          <article key={pole.slug} className={`pole reveal${i % 2 ? " pole--flip" : ""}`}>
            <div className="pole-media">
              <Image
                src={pole.image}
                alt={pole.alt}
                width={1000}
                height={700}
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>
            <div className="pole-copy">
              <p className="pole-accroche">{pole.accroche}</p>
              <h3 className="t-h3">{pole.titre}</h3>
              <p className="pole-texte">{pole.texte}</p>
              <ul className="pole-metiers">
                {pole.metiers.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <a
                className="arrow-link"
                href={pole.lien}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pole.lienLabel}
                <ArrowUpRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
