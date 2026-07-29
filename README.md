# Groupe TK : refonte

Maquette fonctionnelle de la refonte de [groupetk.fr](https://www.groupetk.fr/).
Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de production
npx next start  # sert le build
```

Trois pages : `/` (accueil), `/le-groupe`, `/contact`.

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

1. **Le formulaire de contact n’envoie rien.** Il valide les champs puis affiche un
   message de confirmation. Il reste à le brancher (route handler, CRM, service tiers).
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
  qu’enrichir un rendu déjà complet, avec un filet de sécurité à 1,5 s.
  `prefers-reduced-motion` désactive tout, et `?static=1` fige la page pour les captures.
- **Typographie française.** Aucun tiret cadratin, apostrophes typographiques, espaces
  insécables avant les deux-points et dans les nombres.
- **Contrastes.** Corps et libellés vérifiés au niveau AA, y compris les surtitres verts
  sur fond vert profond, éclaircis pour cette raison.

## Vérifications effectuées

Build et lint sans erreur. Rendu contrôlé au navigateur (Edge headless) sur les trois
pages, en 1440 px et en 390 px réels, avec et sans animations, plus un test piloté du
menu mobile. Aucun débordement horizontal sur aucune des trois pages en 390 px.

## Suites possibles, non faites

Init git et premier commit, déploiement Vercel ou Netlify, branchement du formulaire,
pages métier détaillées (promotion, aménagement foncier, maisons individuelles, intérim,
événementiel), et bandeau de consentement avant tout rechargement d’un outil de mesure
d’audience, absent du site actuel alors que Google Analytics 4 y est actif.
