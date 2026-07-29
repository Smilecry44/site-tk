# Direction artistique

## Identité conservée

Le vert `#188636` du logo et le vert profond `#05561B` sont repris tels quels : ce sont
les deux seules couleurs de marque réellement utilisées par le site source. Le bleu
résiduel `#1e73be` (valeur par défaut jamais surchargée de GeneratePress) est abandonné.
Le pictogramme du logo, deux flèches montantes, devient le motif directeur : il est
revectorisé en SVG et se retrouve dans les puces, les liens et les séparateurs.

## Palette

| Token | Hex | Rôle |
|---|---|---|
| `--ink` | `#0C1710` | Encre, titres, fond des sections sombres |
| `--forest` | `#05561B` | Vert profond de marque, aplats, survols |
| `--green` | `#188636` | Vert de marque, boutons, accents (4,7:1 sur blanc) |
| `--green-bright` | `#4FD07C` | Accent sur fond sombre uniquement |
| `--paper` | `#F5F4EF` | Fond de page, blanc cassé chaud |
| `--surface` | `#FFFFFF` | Cartes, formulaires |
| `--stone` | `#DFDDD4` | Filets, bordures |
| `--muted` | `#57635C` | Texte secondaire sur clair (5,3:1) |
| `--muted-dark` | `#A9BCAF` | Texte secondaire sur sombre (7,4:1) |

Le blanc cassé chaud éloigne du gris hôpital du site actuel sans coûter en contraste.
Les sections sombres alternent avec les sections claires pour rythmer la page.

## Typographie

Deux familles sur un axe de contraste, aucune n'appartient aux défauts IA.

- **Newsreader** (serif éditorial, variable) : titres, chiffres clés, citations. Le
  registre patrimonial convient à un groupe de 1985 qui possède un château.
- **Manrope** (grotesque humaniste, variable) : texte courant, navigation, boutons,
  surtitres en capitales espacées.

Échelle fluide en `clamp()`, display plafonné à 5,5 rem, `text-wrap: balance` sur les
titres. Mulish et Roboto, les polices actuelles, sont abandonnées : sans caractère et
chargées via Elementor.

## Motifs

- **Filet de section** : une règle fine `--stone` et un surtitre en capitales espacées.
- **Flèche TK** : la flèche diagonale du logo sert de puce et d'icône de lien.
- **Photo pleine largeur** : les perspectives d'opérations sont montrées grand, jamais en
  vignette carrée. Là où le site source pose un aplat de couleur, on pose une photo.
- **Chiffres en serif** : les nombres sont composés en Newsreader, gros, alignés sur une
  ligne de base commune.

## Interdits

Pas de tiret cadratin dans le texte visible. Pas de grille de cartes identiques à icône.
Pas de carrousel autoplay. Pas de photo de banque d'images : seules les perspectives
d'opérations réelles, le château, le siège et l'infographie du groupe sont utilisées.
Pas de témoignage inventé : le site source n'en contient aucun.
