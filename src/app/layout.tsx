import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Motion from "@/components/motion";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.groupetk.fr"),
  title: {
    default: "Groupe TK : promoteur, aménageur et constructeur dans le Grand Ouest",
    template: "%s | Groupe TK",
  },
  description:
    "Depuis 1985, le Groupe TK conçoit, construit et commercialise des logements, des terrains à bâtir et des locaux d’activité en Loire-Atlantique et dans le Grand Ouest. Un seul interlocuteur, du foncier à la livraison.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Groupe TK",
    title: "Groupe TK : promoteur, aménageur et constructeur dans le Grand Ouest",
    description:
      "Du foncier à la remise des clés, sept métiers réunis dans un même groupe familial nantais depuis 1985.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${manrope.variable} ${newsreader.variable}`}>
      <body>
        <a href="#contenu" className="skip">
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
        <Motion />
      </body>
    </html>
  );
}
