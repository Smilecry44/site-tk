# Groupe TK : refonte

Maquette fonctionnelle de la refonte de [groupetk.fr](https://www.groupetk.fr/).
Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de production
npx next start  # sert le build
```

Trois pages : `/` (accueil), `/le-groupe`, `/contact`. Les entrées « Nos métiers »,
« Réalisations » et « Notre chaîne » du menu sont des ancres vers des sections de
l’accueil, pas des pages.

## Parti pris de design

Le site suit le **modernisme suisse** : grille de 12 colonnes, unité de base de 8 px,
filets plutôt que bordures, une seule couleur d’accent. C’est le registre des sites
d’architecture et de collectivités, et il vieillit mieux que les effets à la mode.

Deux familles sur un axe de contraste : **Newsreader** en titres, **Manrope** en texte.
Pas de troisième famille monospace : sur une marque qui n’est pas technique, le monospace
est un déguisement.

Le fond n’est pas un blanc cassé chaud : la bande crème est devenue le défaut générique
des interfaces générées. Le vert de marque porte environ un tiers de la surface au lieu
de se limiter aux boutons, et aucun surtitre en petites capitales ne coiffe les sections.

Trois recommandations d’outillage ont été écartées volontairement. Le **glassmorphisme**,
proposé comme style pour l’immobilier, est un effet daté qui coûte en performance et en
contraste, et ne dit rien d’un groupe familial de quarante ans. Une **palette teal et
bleu** aurait remplacé le vert `#188636` du logo, alors que l’identité est le seul actif
visuel que le client possède vraiment.

## Ce qui vient du site actuel

Tout le contenu factuel est repris de groupetk.fr, de son site satellite
tkpromotion.fr, ou de l’infographie officielle « Le Groupe TK en chiffres ».

- Les chiffres (40+ ans, 2 000+ logements, 15+ filiales, 30+ collaborateurs) sont ceux
  de l’infographie publiée sur `/le-groupe/`.
- La frise « depuis 1985 » est reprise mot pour mot.
- Les descriptions des sept métiers et des filiales reprennent les textes existants.
- Les quatorze opérations citées existent toutes : elles sont listées sur tkpromotion.fr.
- Les photos sont celles du site : perspectives des opérations, Château Le Saz, siège,
  réunion d’équipe. Aucune banque d’images.

## Contenu de démonstration, à valider avant mise en ligne

1. **Le formulaire de contact n’envoie rien.** Il valide les champs, affiche un état de
   chargement de 700 ms pour figurer l’aller-retour réseau, puis un message de
   confirmation. Il reste à le brancher (route handler, CRM, service tiers). La sélection
   de parcours de l’accueil le préremplit via `?sujet=`.
   Voir `src/components/contact-form.tsx`.
2. **Les mentions légales ne sont pas reprises.** Celles du site actuel sont caduques :
   elles publient le SIREN 480 259 902, radié depuis le 18/12/2020, alors que
   TK Promotion est aujourd’hui la SAS 528 257 199 ; le SIRET y est masqué par des
   astérisques ; deux téléphones et deux adresses e-mail se contredisent ; et l’article 1
   parle du site « cryotherapie-atlantis.com », copier-coller d’un autre dossier.
   Le pied de page porte la mention « Mentions légales à mettre à jour ».
3. **L’adresse e-mail affichée est `info@groupetk.com`**, celle des mentions légales.
   Le site en fait aussi apparaître une autre, `info@groupetk.fr`. À trancher.
4. **Les typologies des quatre opérations illustrées** (« Appartements »,
   « Appartements et commerces »…) sont lues sur les perspectives et les noms de
   fichiers. À confirmer.
5. **Les chiffres divergent entre les deux versions de l’infographie du groupe** : la V2
   affichée sur le site dit 15+ filiales, l’export bandeau dit 60 filiales et ajoute
   47+ recrutements par an. Ce sont les valeurs de la V2 qui sont reprises ici.
6. **Les phrases d’accroche sont nouvelles.** « Du terrain à la remise des clés »,
   « Une décision se prend dans le couloir, pas en trois semaines », « Sept métiers dans
   la même maison » sont des textes rédigés pour cette refonte, pas des citations.
7. **Aucun témoignage n’a été ajouté** : le site actuel n’en contient pas un seul, et il
   n’était pas question d’en inventer. C’est le premier contenu à collecter.
8. **Aucun badge de certification n’est affiché** : le site actuel n’en porte aucun, alors
   que quatre des activités du groupe sont réglementées (CCMI et garantie de livraison
   pour la construction de maisons, carte professionnelle et garantie financière pour
   l’agence immobilière, garantie financière et adhésion Prism’emploi pour l’intérim,
   garantie financière d’achèvement pour la promotion). À récupérer auprès du client :
   c’est à la fois une obligation d’affichage et le meilleur levier de réassurance.

## Points techniques

- **Logo revectorisé.** Le site actuel ne fournit que des PNG plafonnés à 250 px et aucun
  SVG. Le pictogramme a été redessiné (`src/components/brand.tsx`) pour être net à toutes
  les tailles, et sert aussi de favicon (`src/app/icon.svg`). Les logos des filiales
  restent en bitmap basse définition : à demander au client en vectoriel.
- **Images.** Les vraies photos sont dans `public/img/`. Aucune ne dépasse 2 560 px, la
  plupart plafonnent à 1 200 px : elles suffisent aux cadrages actuels mais un shooting
  serait nécessaire pour des héros pleine largeur en rétina. Toutes ont un texte
  alternatif, ce qui n’était le cas d’aucune image du site actuel.
- **Animations.** Le contenu est visible par défaut : les apparitions au scroll ne font
  qu’enrichir un rendu déjà complet, avec un filet de sécurité à 1,5 s réarmé à chaque
  navigation. Les grilles apparaissent en cascade, 60 ms entre deux cartes, plafonnées à
  360 ms pour que les dernières ne traînent pas. Durées courtes : 240 ms pour les
  micro-interactions, 450 ms au maximum pour une apparition.
  `prefers-reduced-motion` désactive tout, et `?static=1` fige la page pour les captures.
- **Aperçu de partage.** `src/app/opengraph-image.tsx` génère l’image affichée sur
  LinkedIn, WhatsApp et Slack. Le site source n’en avait aucune.
- **Cibles tactiles.** Tous les liens et boutons font au moins 44 px de haut sur mobile,
  vérifié automatiquement.
- **Typographie française.** Aucun tiret cadratin, apostrophes typographiques, espaces
  insécables avant les deux-points et dans les nombres.
- **Contrastes.** Vérifiés automatiquement sur les trois pages : chaque nœud de texte est
  mesuré contre son fond effectif, seuils 4,5:1 et 3:1. Zéro échec. Le texte posé sur la
  photo du château est exclu de la mesure et vérifié à l’œil.

## Vérifications effectuées

Build et lint sans erreur. Rendu contrôlé au navigateur (Edge headless) sur les trois
pages, en 1440 px et en 390 px réels, avec et sans animations. Quatre tests pilotés :
navigation sur cinq étapes sans bloc masqué, contrastes sur les trois pages, cibles
tactiles à 390 px, et test de recouvrement de la section Château Le Saz. Aucun
débordement horizontal sur aucune des trois pages en 390 px.

## Suites possibles, non faites

Init git et premier commit, déploiement Vercel ou Netlify, branchement du formulaire,
pages métier détaillées (promotion, aménagement foncier, maisons individuelles, intérim,
événementiel), et bandeau de consentement avant tout rechargement d’un outil de mesure
d’audience, absent du site actuel alors que Google Analytics 4 y est actif.
