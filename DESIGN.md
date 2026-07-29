# Direction artistique

## Identité conservée

Le vert `#188636` du logo et le vert profond `#05561B` sont repris tels quels : ce sont
les deux seules couleurs de marque réellement utilisées par le site source. Le bleu
résiduel `#1e73be` (valeur par défaut jamais surchargée de GeneratePress) est abandonné.
Le pictogramme du logo, deux flèches montantes, est revectorisé en SVG et sert aussi de
favicon.

## Stratégie de couleur : engagée

La couleur de marque porte les grandes surfaces, elle ne se limite pas aux boutons. Les
sections de contenu sombres, l’appel à l’action et le pied de page sont en vert, ce qui
place la marque sur environ un tiers de la page au lieu de cinq pour cent.

| Token | Hex | Rôle | Contraste |
|---|---|---|---|
| `--ink` | `#0C1710` | Encre sur fond clair | 16,5:1 sur `--bg` |
| `--forest-deep` | `#063A14` | Fond des sections de contenu sombres, pied de page | blanc à 12,9:1 |
| `--forest` | `#05561B` | Fond de l’appel à l’action, petit texte vert sur clair | 7,9:1 sur `--bg` |
| `--green` | `#188636` | Aplats et boutons uniquement | blanc à 4,7:1 |
| `--mint` | `#A8E9C0` | Liens et accents sur les fonds verts | 9,3:1 sur `--forest-deep` |
| `--bg` | `#F1F4F0` | Fond de page | |
| `--bg-2` | `#E6EBE4` | Fond de section alterné | |
| `--muted` | `#55635B` | Texte secondaire sur clair | 5,6:1 |
| `--muted-dark` | `#BCCFC3` | Texte secondaire sur vert | 5,4:1 sur `--forest` |

`#188636` ne fait que **4,2:1 sur le fond clair** : il est donc interdit pour le petit
texte, où `--forest` prend le relais. Il reste parfait en aplat, où il porte du blanc.

Le fond n’est pas un blanc cassé chaud. La bande crème et sable est devenue le défaut
générique des interfaces générées, et un token nommé `--paper` en est le symptôme. La
teinte du fond est prise **sur la teinte de la marque**, pas vers le chaud par réflexe.

## Typographie

Deux familles sur un axe de contraste.

- **Newsreader** (serif éditorial, variable) : titres, chiffres clés, citations.
- **Manrope** (grotesque humaniste, variable) : texte courant, navigation, boutons,
  libellés.

Échelle fluide en `clamp()`, display plafonné à 4,6 rem, `text-wrap: balance` sur les
titres.

Il n’y a **pas de troisième famille monospace**. Un monospace sur une marque qui n’est
pas technique est un déguisement : le Groupe TK construit des logements et loue un
château pour des mariages, il n’édite pas de logiciel.

## Rythme des sections

**Aucun surtitre en petites capitales espacées.** C’est le marqueur d’interface générée
le plus répandu, et il était présent sur quatorze sections. Le rythme vient désormais de
l’échelle typographique et des changements de fond. Ce que le surtitre disait est reversé
dans le titre ou le chapô.

Une seule marque de contexte subsiste sur le site, en bas de casse et sans interlettrage :
« Grand Ouest, depuis 1985 » dans le hero. C’est une ligne de texte, pas une étiquette.

**La numérotation est réservée aux vraies séquences.** La chaîne intégrée est numérotée
01 à 07 parce que l’ordre porte une information : le foncier précède l’architecture, qui
précède la construction. Les six portes d’entrée de la sélection de parcours ne sont pas
numérotées : ce sont des publics parallèles, les numéroter ne serait que décoratif.

## Motifs

- **Filet de section** : une règle fine `--stone`, sans étiquette au-dessus.
- **Photo pleine largeur** : les perspectives d’opérations sont montrées grand. Là où le
  site source pose un aplat de couleur, on pose une photo.
- **Chiffres en serif** : les nombres sont composés en Newsreader, gros, alignés sur une
  ligne de base commune.
- **Grille modulaire** : les filets naissent du fond (`gap: 1px` sur un conteneur teinté),
  pas de bordures dessinées carte par carte.

## Motion

Apparitions de 450 ms maximum, déplacement de 14 px, cascade de 60 ms entre les cartes
d’une même grille, plafonnée à 360 ms. Le contenu est visible par défaut : l’animation
n’est qu’un enrichissement, jamais une condition d’affichage.

## Interdits

Pas de tiret cadratin dans le texte visible. Pas de surtitre répété de section en section.
Pas de numérotation décorative. Pas de monospace décoratif. Pas de verre dépoli. Pas de
fond crème. Pas de photo de banque d’images : seules les perspectives d’opérations
réelles, le château, le siège et la réunion d’équipe sont utilisés. Pas de témoignage
inventé : le site source n’en contient aucun.
