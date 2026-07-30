import Image from 'next/image'

/**
 * Signature de marque : la tuile du logo (recadrée depuis le logo d'origine,
 * donc lisible sur fond clair comme sur photo sombre) et le nom composé en
 * Archivo, qui prend la couleur du contexte.
 */
export default function Marque({
  taille = 40,
  avecNom = true,
}: {
  taille?: number
  avecNom?: boolean
}) {
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/img/logo-tk-tuile.png"
        /* Le nom est déjà en texte à côté : l'image reste décorative. */
        alt={avecNom ? '' : 'Groupe TK'}
        width={taille}
        height={Math.round((taille * 837) / 932)}
        priority
        className="block"
        style={{ width: taille, height: 'auto' }}
      />
      {avecNom && (
        <span className="text-[0.9375rem] leading-none font-semibold tracking-[0.19em] uppercase">
          Groupe TK
        </span>
      )}
    </span>
  )
}
