/**
 * Marque Groupe TK revectorisée.
 *
 * Le site source ne fournissait que des PNG plafonnés à 250 px et aucun SVG :
 * le pictogramme (deux flèches montantes dans un carré vert) a été redessiné ici
 * pour un rendu net à toutes les tailles.
 */

export function TkMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <rect width="100" height="100" rx="6" fill="var(--green)" />
      <polygon points="58,13 82,41 68,41 68,88 48,88 48,41 34,41" fill="#fff" />
      <polygon
        points="47,46 43.4,73.6 36.7,66.9 17.3,86.3 6.7,75.7 26.1,56.3 19.4,49.6"
        fill="#fff"
      />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.7rem",
        lineHeight: 1,
      }}
    >
      <TkMark className="tk-mark" title="Groupe TK" />
      {!compact && (
        <span
          style={{
            fontWeight: 800,
            fontSize: "1.05rem",
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}
        >
          GROUPE&nbsp;TK
        </span>
      )}
    </span>
  );
}

/** Flèche montante vers la droite : reprise du pictogramme, sert de puce et d’icône de lien. */
export function ArrowUpRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4.5 11.5L11.5 4.5M11.5 4.5H5.75M11.5 4.5V10.25"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2.5 8h11M9.5 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
