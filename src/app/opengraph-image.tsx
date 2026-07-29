import { ImageResponse } from "next/og";

/**
 * Aperçu de partage. Le site source n'en avait aucun : LinkedIn et WhatsApp
 * affichaient une description générée automatiquement et tronquée.
 */
export const alt =
  "Groupe TK, promoteur, aménageur et constructeur dans le Grand Ouest depuis 1985";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05561B",
          padding: 72,
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 100 100">
            <rect width="100" height="100" fill="#188636" />
            <polygon points="58,13 82,41 68,41 68,88 48,88 48,41 34,41" fill="#fff" />
            <polygon
              points="47,46 43.4,73.6 36.7,66.9 17.3,86.3 6.7,75.7 26.1,56.3 19.4,49.6"
              fill="#fff"
            />
          </svg>
          <span style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
            GROUPE TK
          </span>
        </div>

        {/* Satori n'interprète pas <br /> : chaque ligne est un bloc flex distinct. */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 58, letterSpacing: -1.5 }}>
            Du terrain à la remise des clés,
          </div>
          <div style={{ display: "flex", fontSize: 58, letterSpacing: -1.5 }}>
            un seul groupe.
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a8e9c0", marginTop: 10 }}>
            Promoteur, aménageur et constructeur dans le Grand Ouest depuis 1985
          </div>
        </div>

        <div style={{ display: "flex", gap: 48, fontSize: 24, color: "#cfe0d5" }}>
          <span>40+ ans</span>
          <span>2 000+ logements</span>
          <span>15+ filiales</span>
          <span>La Chapelle-sur-Erdre</span>
        </div>
      </div>
    ),
    size
  );
}
