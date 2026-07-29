import Link from "next/link";
import { ArrowUpRight, TkMark } from "./brand";
import { contact, filiales } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="ftr">
      <div className="shell">
        <div className="ftr-top">
          <div className="ftr-brand">
            <TkMark className="tk-mark tk-mark--lg" title="Groupe TK" />
            <p className="ftr-baseline">{contact.baseline}</p>
            <p className="ftr-note">
              Promoteur, aménageur et constructeur dans le Grand Ouest depuis 1985.
            </p>
          </div>

          <div className="ftr-col">
            <h2 className="ftr-h">Le groupe</h2>
            <Link href="/le-groupe">Qui sommes-nous</Link>
            <Link href="/#chaine">Notre chaîne intégrée</Link>
            <Link href="/#realisations">Nos opérations</Link>
            <Link href="/le-groupe#reperes">Nos repères depuis 1985</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="ftr-col">
            <h2 className="ftr-h">Nos filiales</h2>
            {filiales.map((f) =>
              f.lien ? (
                <a key={f.nom} href={f.lien} target="_blank" rel="noopener noreferrer">
                  {f.nom}
                  <ArrowUpRight size={13} />
                </a>
              ) : (
                <span key={f.nom}>{f.nom}</span>
              )
            )}
          </div>

          <div className="ftr-col">
            <h2 className="ftr-h">Nous joindre</h2>
            <a href={`tel:${contact.telLien}`} className="ftr-tel">
              {contact.telAffiche}
            </a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <address>
              {contact.adresse}
              <br />
              {contact.codePostal} {contact.ville}
            </address>
            <div className="ftr-social">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
                <ArrowUpRight size={13} />
              </a>
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        <hr className="rule" />

        <div className="ftr-bottom">
          <p>© {new Date().getFullYear()} Groupe TK. Tous droits réservés.</p>
          <p className="ftr-legal">
            {/* DÉMO : les mentions légales du site source sont caduques (SIREN radié, */}
            {/* article renvoyant à un autre client de l'agence). À reprendre avec le client. */}
            Mentions légales à mettre à jour
          </p>
        </div>
      </div>
    </footer>
  );
}
