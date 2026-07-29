/**
 * Toutes les données de contenu du site.
 *
 * Sauf mention « DÉMO » explicite, chaque valeur provient du site source
 * groupetk.fr, de son site satellite tkpromotion.fr, ou de l'infographie
 * officielle « Le Groupe TK en chiffres » publiée sur /le-groupe/.
 */

export const contact = {
  societe: "Groupe TK",
  baseline: "Créateurs de solutions pour le bien-vivre",
  adresse: "6 rue Ampère",
  codePostal: "44240",
  ville: "La Chapelle-sur-Erdre",
  telAffiche: "02 40 37 78 01",
  telLien: "+33240377801",
  // Les mentions légales du site source affichent deux adresses contradictoires
  // (info@groupetk.com et info@groupetk.fr). Celle-ci est la principale.
  email: "info@groupetk.com",
  linkedin: "https://www.linkedin.com/company/groupe-tk/",
  facebook:
    "https://fr-fr.facebook.com/pages/category/Real-Estate-Developer/Groupe-TK-155095171967013/",
} as const;

/** Chiffres de l'infographie officielle « Le Groupe TK en chiffres » (V2). */
export const chiffres = [
  { valeur: 40, suffixe: "+", label: "ans d’expérience", detail: "depuis 1985" },
  { valeur: 2000, suffixe: "+", label: "logements construits", detail: "depuis la création" },
  { valeur: 15, suffixe: "+", label: "filiales", detail: "un groupe intégré" },
  { valeur: 30, suffixe: "+", label: "collaborateurs", detail: "à La Chapelle-sur-Erdre" },
] as const;

export const poles = [
  {
    slug: "immobilier",
    titre: "Immobilier et construction",
    accroche: "Agir pour l’habitat",
    texte:
      "Résidences privées, maisons individuelles, bureaux, aménagement foncier, réhabilitation. Notre expertise foncière et immobilière, ADN du groupe dès 1985, est particulièrement reconnue dans le Grand Ouest.",
    metiers: [
      "Promotion immobilière",
      "Aménagement foncier",
      "Maisons individuelles",
      "Conseil en immobilier",
      "Ingénierie du bâtiment",
    ],
    image: "/img/photos/honfleur-1.jpg",
    alt: "Perspective de La Villa Honfleuraise, résidence développée par le Groupe TK à Honfleur",
    lien: "https://www.tkpromotion.fr/",
    lienLabel: "Voir les programmes en vente",
  },
  {
    slug: "interim",
    titre: "Intérim",
    accroche: "Agir pour l’emploi",
    texte:
      "Présent sur le marché du travail temporaire depuis plus de vingt ans, Intérim TK est aux côtés des entreprises de Nantes et sa périphérie : identification des besoins, sourcing, présélection, recrutement, évaluation.",
    metiers: [
      "Bâtiment gros œuvre et second œuvre",
      "Grande distribution",
      "Automobile",
      "Entretien et nettoyage",
    ],
    image: "/img/photos/siege.jpg",
    alt: "Enseigne du Groupe TK sur la façade du siège, à La Chapelle-sur-Erdre",
    lien: "https://www.interimtk.fr/",
    lienLabel: "Découvrir Intérim TK",
  },
  {
    slug: "evenementiel",
    titre: "Événementiel",
    accroche: "Agir pour les moments de vie festifs",
    texte:
      "Château Le Saz propose des espaces de qualité sur près de cinq hectares, à quelques minutes de Nantes. Mariages, brunchs, soirées à thème, fêtes de famille, séminaires, comités de direction, tournages ou shootings photo.",
    metiers: ["Mariages et réceptions", "Séminaires d’entreprise", "Tournages et shootings"],
    image: "/img/photos/saz-reception.jpg",
    alt: "Façade du Château Le Saz, propriété du Groupe TK à La Chapelle-sur-Erdre",
    lien: "https://www.chateaulesaz.fr/",
    lienLabel: "Découvrir Château Le Saz",
  },
] as const;

/**
 * L'intégration verticale : l'argument le plus fort du groupe, jamais mis en
 * scène sur le site source. Chaque maillon correspond à une filiale réelle
 * listée sur /le-groupe/.
 */
export const chaine = [
  {
    n: "01",
    titre: "Le foncier",
    filiale: "TK Promotion",
    texte:
      "Nous choisissons les meilleurs emplacements et viabilisons les lots par nos soins, libres de constructeur. Nous accompagnons aussi les propriétaires de terrain à fort potentiel de division foncière.",
  },
  {
    n: "02",
    titre: "L’architecture",
    filiale: "Bi Cube",
    texte:
      "Notre cabinet d’architecture intégré agit tel un réel accélérateur de projets. Une réactivité particulièrement appréciée à l’occasion des dépôts de permis de construire.",
  },
  {
    n: "03",
    titre: "L’économie de la construction",
    filiale: "V Quantum",
    texte:
      "À la fois économiste du projet et assistant à maîtrise d’ouvrage, V Quantum optimise la conception et la réalisation de tout type de construction ou de rénovation.",
  },
  {
    n: "04",
    titre: "La promotion",
    filiale: "TK Promotion",
    texte:
      "Développement, faisabilité, montage du permis, suivi technique : nous développons des programmes de qualité au juste prix, en privilégiant le choix d’entreprises locales.",
  },
  {
    n: "05",
    titre: "La construction",
    filiale: "Les Maisons d’Eva",
    texte:
      "Nos constructions anticipent les futures réglementations : nos maisons passives, à l’efficience énergétique optimisée, satisfont les exigences de confort et d’économie sur le long terme.",
  },
  {
    n: "06",
    titre: "La commercialisation",
    filiale: "Immo TK",
    texte:
      "Immo TK commercialise l’ensemble des biens du groupe, terrains à bâtir, appartements et maisons, et vous accompagne de la présentation jusqu’à la signature de l’acte notarié.",
  },
  {
    n: "07",
    titre: "La gestion",
    filiale: "Groupe TK",
    texte:
      "Le groupe est propriétaire d’une douzaine de bâtiments tertiaires allant jusqu’à 10 000 m² de surface exploitable, et en assure la gestion locative pour les professionnels.",
  },
] as const;

/**
 * Opérations réelles. Les programmes photographiés ci-dessous sont ceux dont
 * l'association photo / opération est établie par le site source lui-même
 * (nom de fichier et lien de destination sur /promotion/ et /immobilier/).
 *
 * Les typologies (`type`) sont lues sur les perspectives et les noms de fichiers :
 * à confirmer avec le client avant mise en ligne.
 */
export const programmes = [
  {
    nom: "La Villa Honfleuraise",
    ville: "Honfleur",
    type: "Appartements",
    statut: "Livrée",
    image: "/img/photos/honfleur-2.jpg",
    alt: "Perspective de La Villa Honfleuraise à Honfleur : trois corps de bâtiment en brique et enduit clair",
  },
  {
    nom: "Résidence Avocette",
    ville: "Saint-Brévin-les-Pins",
    type: "Appartements et commerces",
    statut: "Livrée",
    image: "/img/photos/saint-brevin.jpg",
    alt: "Perspective de la Résidence Avocette à Saint-Brévin-les-Pins, avec commerces en rez-de-chaussée",
  },
  {
    nom: "Résidence Néo Terrefort",
    ville: "Saint-Gilles-Croix-de-Vie",
    type: "Appartements",
    statut: "Commercialisée",
    image: "/img/photos/saint-gilles.jpg",
    alt: "Perspective de la Résidence Néo Terrefort à Saint-Gilles-Croix-de-Vie",
  },
  {
    nom: "Résidence Rosa",
    ville: "Nantes",
    type: "Appartements et maisons de ville",
    statut: "Commercialisée",
    image: "/img/photos/nantes-appart.jpg",
    alt: "Vue axonométrique de la Résidence Rosa à Nantes",
  },
] as const;

/** Autres opérations citées par le groupe, sans visuel disponible. */
export const operations = [
  { nom: "Résidence La Rivière", ville: "Nantes", detail: "193 logements étudiants, livrée en 2016" },
  { nom: "Lotissement Bel Orient", ville: "Plédran (22)", detail: "110 lots, créé en 2000" },
  { nom: "Les Jardins de Ville", ville: "Aigrefeuille-sur-Maine", detail: "Succès commercial" },
  { nom: "Le Patio du Vignoble", ville: "Vallet", detail: "Résidence livrée" },
  { nom: "Résidence Iris", ville: "Saint-Herblain", detail: "Livraison en cours" },
  { nom: "Résidence de Musset", ville: "La Chapelle-sur-Erdre", detail: "Résidence livrée" },
  { nom: "La Villa Sainte Anne", ville: "Nantes", detail: "Résidence livrée" },
  { nom: "Le Clos Marin", ville: "Planguenoual", detail: "Résidence livrée" },
  { nom: "Auguste Pinguet", ville: "Angers", detail: "Résidence livrée" },
  { nom: "L’Escale", ville: "Abbaretz", detail: "22 terrains à bâtir et 5 maisons mitoyennes" },
] as const;

/** Frise reprise mot pour mot de la page /le-groupe/. */
export const reperes = [
  {
    annee: "1985",
    texte:
      "Prestanantes est présent sur le marché du travail temporaire à Nantes. La même année, le groupe livre son premier programme immobilier d’entreprise en région nantaise.",
  },
  { annee: "1993", texte: "Premier programme de promotion immobilière." },
  { annee: "1998", texte: "Premiers aménagements de lotissements à Vannes (56) et Saint-Brieuc (22)." },
  { annee: "2000", texte: "Création du lotissement Bel Orient à Plédran (22), comprenant 110 lots." },
  { annee: "2002", texte: "Les filiales se regroupent sous l’enseigne Groupe TK." },
  { annee: "2011", texte: "Prestanantes devient Intérim TK." },
  { annee: "2016", texte: "Livraison de la résidence La Rivière : 193 logements étudiants." },
  { annee: "2019", texte: "Acquisition du Château Le Saz." },
] as const;

export const filiales = [
  { nom: "TK Promotion", activite: "Promotion immobilière et aménagement foncier", logo: "/img/logos/tk-promotion.png", lien: "https://www.tkpromotion.fr/" },
  { nom: "Les Maisons d’Eva", activite: "Construction de maisons individuelles", logo: "/img/logos/maisons-eva.png", lien: "https://www.maisonseva.fr/" },
  { nom: "Intérim TK", activite: "Agence d’intérim", logo: "/img/logos/interim-tk.png", lien: "https://www.interimtk.fr/" },
  { nom: "Château Le Saz", activite: "Événementiel, réceptions, séminaires, mariages", logo: "/img/logos/chateau-le-saz.jpg", lien: "https://www.chateaulesaz.fr/" },
  { nom: "Immo TK", activite: "Agence immobilière", logo: "/img/logos/immo-tk.png", lien: null },
  { nom: "V Quantum", activite: "Économie de la construction et assistance à maîtrise d’ouvrage", logo: "/img/logos/v-quantum.jpg", lien: null },
  { nom: "Bi Cube", activite: "Architecture", logo: "/img/logos/bi-cube.png", lien: null },
] as const;

export const engagements = [
  {
    titre: "Efficacité",
    texte:
      "Notre organisation vous permet d’être en contact direct avec les décideurs. Simplicité et gain de temps à la clé.",
  },
  {
    titre: "Intégrité",
    texte:
      "Des produits de qualité au juste prix, en privilégiant le choix d’entreprises locales. Nous nous engageons sur le respect des prix et des délais.",
  },
  {
    titre: "Écoute",
    texte:
      "Il est toujours plus efficace d’atteindre un but si l’on se comprend. Un interlocuteur unique suit votre projet du premier rendez-vous à la livraison.",
  },
] as const;

/** Sujets du formulaire : le site source envoie tous les métiers dans la même boîte. */
export const sujets = [
  "Acheter un logement neuf",
  "Acheter un terrain à bâtir",
  "Faire construire ma maison",
  "Vendre ou diviser mon terrain",
  "Projet avec une collectivité",
  "Louer un local d’activité",
  "Recruter des intérimaires",
  "Privatiser le Château Le Saz",
  "Autre demande",
] as const;
