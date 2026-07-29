import Image from "next/image";
import { ArrowUpRight } from "../brand";

export default function Saz() {
  return (
    <section className="saz" aria-labelledby="saz-titre">
      <div className="saz-media">
        <Image
          src="/img/photos/saz-1.jpg"
          alt="Vue aérienne du Château Le Saz et de son parc, à quelques minutes de Nantes"
          width={2000}
          height={1116}
          sizes="100vw"
        />
      </div>
      <div className="shell saz-in">
        <div className="saz-card reveal">
          <p className="eyebrow">Événementiel</p>
          <h2 id="saz-titre" className="t-h2">
            Château Le Saz
          </h2>
          <p className="saz-texte">
            Cinq hectares de parc à quelques minutes de Nantes, acquis par le groupe en
            2019. Mariages, brunchs, fêtes de famille, séminaires, comités de direction,
            tournages et shootings photo&nbsp;: le château se privatise pour la journée
            comme pour le week-end.
          </p>
          <a
            className="btn btn--light"
            href="https://www.chateaulesaz.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visiter le site du château
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
