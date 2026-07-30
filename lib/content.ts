import { tel } from './typo'

/**
 * Contenu brut du site. À consommer via `lib/data.ts`, qui applique la passe
 * de typographie française (espaces insécables, guillemets) sur l'ensemble.
 *
 * Sauf mention « RÉDIGÉ », tous les textes sont des verbatims relevés sur
 * groupetk.fr et ses sites de filiales (tkpromotion.fr, maisonseva.fr,
 * interimtk.fr, chateaulesaz.fr). Les blocs marqués « RÉDIGÉ » sont des
 * textes de liaison écrits pour la maquette : à faire valider.
 */

export type PoleSlug = 'immobilier' | 'interim' | 'evenementiel'

export type Pole = {
  slug: PoleSlug
  /** Numéro d'ordre affiché (01, 02, 03). */
  index: string
  /** Libellé court, pour la navigation et le triptyque. */
  nom: string
  /** Libellé long, pour les titres de page. */
  nomLong: string
  /** Verbe d'action repris des slides du site actuel. */
  verbe: string
  /** Accroche éditoriale courte, en une ligne. */
  accroche: string
  /** Paragraphe de présentation (verbatim du site). */
  intro: string
  /** Mots-clés d'activité, affichés en liste sous le titre du panneau. */
  cles: string[]
  /** Photo plein cadre du panneau de héros. */
  image: string
  imageAlt: string
  /** Repère chiffré ou temporel affiché sous le panneau. */
  repere: string
}

export const POLES: Pole[] = [
  {
    slug: 'immobilier',
    index: '01',
    nom: 'Immobilier',
    nomLong: 'Immobilier & Construction',
    verbe: 'Agir pour l’habitat',
    accroche: 'Bâtisseur d’espaces de vie',
    intro:
      'Immobilier neuf, réhabilitation, commercialisation… Notre expertise foncière et immobilière, ADN du Groupe dès 1985, est particulièrement reconnue dans le Grand Ouest.',
    cles: [
      'Promotion',
      'Aménagement foncier',
      'Maisons individuelles',
      'Conseil en immobilier',
      'Ingénierie du bâtiment',
    ],
    image: '/img/immo-hero.jpg',
    imageAlt:
      'Maison individuelle contemporaine à ossature bois et enduit blanc, avec terrasse et piscine, réalisée par Les Maisons d’Eva',
    repere: '2 000+ logements construits',
  },
  {
    slug: 'interim',
    index: '02',
    nom: 'Intérim',
    nomLong: 'Travail temporaire',
    verbe: 'Agir pour l’emploi',
    accroche: 'Votre partenaire de confiance',
    intro:
      'Votre partenaire de confiance, spécialiste du travail temporaire à Nantes et sa périphérie.',
    cles: [
      'Bâtiment gros œuvre et second œuvre',
      'Grande distribution',
      'Automobile',
      'Entretien et nettoyage',
    ],
    image: '/img/interim-travail.jpg',
    imageAlt:
      'Collaboratrice en poste derrière un comptoir de magasin, secteur de la grande distribution',
    repere: '250+ personnes par mois vers l’emploi',
  },
  {
    slug: 'evenementiel',
    index: '03',
    nom: 'Événementiel',
    nomLong: 'Événementiel & Réceptions',
    verbe: 'Agir pour les moments de vie festifs',
    accroche: 'Créateur d’instants de vie uniques',
    intro:
      'Vous recherchez un site élégant pour vos événements d’entreprises ou privés : Château Le Saz propose des espaces de qualité sur près de 5 hectares.',
    cles: ['Mariages', 'Séminaires', 'Comités de direction', 'Tournages et shootings'],
    image: '/img/event-saz-nuit.jpg',
    imageAlt:
      'Vue aérienne du Château Le Saz et de son parc boisé à La Chapelle-sur-Erdre, à la tombée du jour',
    repere: 'Près de 5 hectares de parc',
  },
]

/* ------------------------------------------------------------------ */
/* Identité                                                            */
/* ------------------------------------------------------------------ */

export const GROUPE = {
  nom: 'Groupe TK',
  signature: 'Créateur de solutions pour le bien-vivre',
  fondation: '1985',
  // Verbatim du site : « 40 ans après sa création ».
  anciennete: '40 ans d’expérience',
  ville: 'La Chapelle-sur-Erdre',
  departement: 'Loire-Atlantique',
  territoire: 'Grand Ouest',
  // Verbatim de la page d'accueil.
  resume:
    'Construire, promouvoir, rénover, recruter, fêter… Le Groupe TK réunit plusieurs compétences pour favoriser le bien-vivre au cœur des territoires qu’il investit.',
  // Verbatim de la page « Qui sommes-nous ? ».
  familial:
    'Le Groupe s’est bâti tant sur des valeurs familiales que sur un esprit entrepreneurial.',
  // Verbatim de la page « Qui sommes-nous ? ».
  multidimensionnel:
    'C’est cette offre multidimensionnelle et la complémentarité de ses savoir-faire qui en font, 40 ans après sa création, un groupe à la fois solide et en pleine évolution.',
  solidite: 'Solidité et esprit de conquête',
}

export const CONTACT = {
  adresse: '6 rue Ampère',
  codePostal: '44240',
  ville: 'La Chapelle-sur-Erdre',
  telephone: tel('02 40 37 78 01'),
  telephoneHref: 'tel:+33240377801',
  email: 'info@groupetk.fr',
  linkedin: 'https://www.linkedin.com/company/groupe-tk/',
}

/* ------------------------------------------------------------------ */
/* Preuves                                                             */
/* ------------------------------------------------------------------ */

/** Chiffres publiés par le Groupe (compteurs de l'accueil + infographie « Le Groupe TK en chiffres »). */
export const CHIFFRES = [
  { valeur: '1985', libelle: 'Année de création', detail: 'Intérim et immobilier d’entreprise' },
  { valeur: '2 000+', libelle: 'Logements construits', detail: 'Depuis la création du Groupe' },
  { valeur: '250+', libelle: 'Personnes vers l’emploi', detail: 'Accompagnées chaque mois' },
  { valeur: '15+', libelle: 'Filiales', detail: 'Réunies sous une seule marque' },
  { valeur: '30+', libelle: 'Collaborateurs', detail: 'Au service des trois pôles' },
]

/** Frise historique de la page « Qui sommes-nous ? », reprise intégralement. */
export const FRISE = [
  {
    annee: '1985',
    texte:
      'Prestanantes est présent sur le marché du travail temporaire à Nantes. La même année, le Groupe livre son 1er programme immobilier d’entreprise en région nantaise.',
  },
  { annee: '1993', texte: '1er programme de promotion immobilière.' },
  { annee: '1998', texte: 'Lotissements à Vannes et Saint-Brieuc.' },
  { annee: '2000', texte: 'Lotissement Bel Orient à Plédran : 110 lots.' },
  { annee: '2002', texte: 'Regroupement des activités sous l’enseigne Groupe TK.' },
  { annee: '2011', texte: 'Prestanantes devient Intérim TK.' },
  { annee: '2016', texte: 'Livraison de la résidence La Rivière : 193 logements étudiants.' },
  { annee: '2019', texte: 'Acquisition du Château Le Saz.' },
]

/**
 * Engagements de la page « Nos engagements ».
 * Les trois intitulés sont ceux du site. Seul « À l’écoute » dispose d’un
 * verbatim publié (repris dans la citation) ; les textes courts des trois
 * cartes sont RÉDIGÉS pour la maquette, à faire valider.
 */
export const ENGAGEMENTS: { titre: string; texte: string; verbatim?: string }[] = [
  {
    titre: 'Efficacité',
    // RÉDIGÉ : à remplacer par le texte de la page « Nos engagements ».
    texte:
      'Un interlocuteur unique, des décisions prises vite et des équipes qui se parlent d’un métier à l’autre.',
  },
  {
    titre: 'Intégrité',
    // RÉDIGÉ : à remplacer par le texte de la page « Nos engagements ».
    texte:
      'Des engagements tenus dans la durée, sur des projets qui se comptent en années plutôt qu’en mois.',
  },
  {
    titre: 'À l’écoute',
    // RÉDIGÉ (le verbatim complet vit dans la citation ci-dessous).
    texte:
      'Privilégier l’écoute et l’échange, pour chaque projet : on n’atteint bien un but que si l’on se comprend.',
    verbatim:
      'Ce que nous croyons : il est toujours plus efficace d’atteindre un but si l’on se comprend. C’est pourquoi nous privilégions l’écoute et l’échange pour chacun de nos projets.',
  },
]

/** Filiales nommées sur la page « Qui sommes-nous ? ». */
export const FILIALES = [
  {
    nom: 'TK Promotion',
    activite: 'Promotion immobilière et aménagement foncier',
    pole: 'immobilier' as PoleSlug,
    site: 'https://www.tkpromotion.fr/',
  },
  {
    nom: 'V Quantum',
    activite: 'Économie de la construction et assistance à maîtrise d’ouvrage',
    pole: 'immobilier' as PoleSlug,
    site: null,
  },
  { nom: 'Bi-Cube', activite: 'Architecture', pole: 'immobilier' as PoleSlug, site: null },
  {
    nom: 'Les Maisons d’Eva',
    activite: 'Construction de maisons individuelles',
    pole: 'immobilier' as PoleSlug,
    site: 'https://www.maisonseva.fr/',
  },
  {
    nom: 'Immo TK',
    activite: 'Agence immobilière',
    pole: 'immobilier' as PoleSlug,
    site: null,
  },
  {
    nom: 'Groupe TK',
    activite: 'Gestion locative pour les professionnels',
    pole: 'immobilier' as PoleSlug,
    site: null,
  },
  {
    nom: 'Intérim TK',
    activite: 'Agence d’intérim',
    pole: 'interim' as PoleSlug,
    site: 'https://www.interimtk.fr/',
  },
  {
    nom: 'Château Le Saz',
    activite: 'Événementiel, réceptions, séminaires, mariages',
    pole: 'evenementiel' as PoleSlug,
    site: 'https://www.chateaulesaz.fr/',
  },
]

/* ------------------------------------------------------------------ */
/* Pages pôles                                                         */
/* ------------------------------------------------------------------ */

export type Activite = {
  titre: string
  filiale?: string
  texte: string
  points?: string[]
  image?: string
  imageAlt?: string
  lien?: { libelle: string; href: string }
}

export type Realisation = {
  nom: string
  lieu: string
  image: string
  imageAlt: string
}

export type PolePage = {
  /** Photo de bandeau, différente de celle du triptyque pour éviter la redite. */
  banniere: string
  banniereAlt: string
  /** Chapô éditorial (verbatim). */
  chapo: string
  /** Chiffre ou fait mis en exergue. */
  exergue: { valeur: string; libelle: string }
  activites: Activite[]
  realisationsTitre?: string
  realisations?: Realisation[]
  /** Bloc photo + citation, en respiration au milieu de la page. */
  respiration?: { image: string; imageAlt: string; citation: string; source: string }
}

export const POLE_PAGES: Record<PoleSlug, PolePage> = {
  immobilier: {
    banniere: '/img/immo-aerienne.jpg',
    banniereAlt:
      'Vue aérienne d’une résidence livrée par le Groupe TK, avec sa piscine et son parc, en lisière de forêt',
    chapo:
      'Notre expertise historique : l’immobilier. Le groupe TK conçoit et commercialise des projets immobiliers résidentiels et tertiaires depuis près d’un demi-siècle.',
    exergue: { valeur: '2 000+', libelle: 'logements construits depuis la création' },
    activites: [
      {
        titre: 'Promotion',
        filiale: 'TK Promotion',
        texte:
          'Interlocuteur privilégié pour tous ceux qui souhaitent acquérir un bien à haut potentiel, nous sélectionnons des emplacements de choix.',
        points: ['Habitat', 'Commerces et bureaux', 'Résidences gérées'],
        image: '/img/immo-habitat.jpg',
        imageAlt: 'Immeuble d’habitation livré par TK Promotion',
        lien: {
          libelle: 'Voir les programmes',
          href: 'https://www.tkpromotion.fr/',
        },
      },
      {
        titre: 'Aménagement foncier',
        filiale: 'TK Promotion',
        texte:
          'Le groupe TK commercialise des terrains à bâtir et aménage les lots dans les agglomérations du Grand Ouest. TK Promotion, filiale spécifique du Groupe, aménage les lotissements depuis plus de 30 ans.',
        points: ['Clé en main', 'Aménagement adapté', 'Création de valeur'],
        image: '/img/immo-foncier.jpg',
        imageAlt: 'Terrain viabilisé prêt à bâtir en périphérie nantaise',
        lien: {
          libelle: 'Voir les terrains disponibles',
          href: 'https://www.tkpromotion.fr/programmes-immobiliers-neufs',
        },
      },
      {
        titre: 'Maisons individuelles',
        filiale: 'Les Maisons d’Eva',
        texte:
          'Nous confier la construction de votre maison individuelle, c’est l’assurance d’avoir un projet sur mesure avec un interlocuteur unique. Un constructeur de maison individuelle en Loire-Atlantique, aux normes RE 2020.',
        points: ['Sur mesure', 'Norme RE 2020', 'Maisons passives'],
        image: '/img/immo-maisons.jpg',
        imageAlt: 'Maison individuelle construite par Les Maisons d’Eva',
        lien: { libelle: 'Découvrir Les Maisons d’Eva', href: 'https://www.maisonseva.fr/' },
      },
      {
        titre: 'Conseil en immobilier',
        filiale: 'Immo TK',
        texte:
          'Le Groupe TK est propriétaire d’une douzaine de bâtiments tertiaires à usage commercial ou industriel, allant jusqu’à 10 000 m² de surface exploitable.',
        image: '/img/immo-conseil.jpg',
        imageAlt: 'Bâtiment tertiaire du patrimoine immobilier du Groupe TK',
      },
      {
        titre: 'Ingénierie du bâtiment',
        filiale: 'Bi-Cube et V Quantum',
        texte:
          'Un cabinet d’architecture intégré et une expertise en économie de la construction et assistance à maîtrise d’ouvrage, au service de tous les projets du Groupe.',
        points: ['Architecture', 'Économie de la construction', 'Assistance à maîtrise d’ouvrage'],
        image: '/img/immo-bicube.jpg',
        imageAlt: 'Plans et maquette au sein du cabinet d’architecture Bi-Cube',
      },
    ],
    realisationsTitre: 'Quelques réalisations',
    realisations: [
      {
        nom: 'Résidence Avocette',
        lieu: 'Saint-Brevin-les-Pins',
        image: '/img/immo-avocette.jpg',
        imageAlt: 'Résidence Avocette à Saint-Brevin-les-Pins',
      },
      {
        nom: 'Résidence Néo Terrefort',
        lieu: 'Saint-Gilles-Croix-de-Vie',
        image: '/img/immo-neoterrefort.jpg',
        imageAlt: 'Résidence Néo Terrefort à Saint-Gilles-Croix-de-Vie',
      },
      {
        nom: 'Résidence Rosa',
        lieu: 'Nantes',
        image: '/img/immo-rosa.jpg',
        imageAlt: 'Résidence Rosa à Nantes',
      },
      {
        nom: 'Programme de Honfleur',
        lieu: 'Honfleur',
        image: '/img/immo-honfleur.jpg',
        imageAlt: 'Programme immobilier du Groupe TK à Honfleur',
      },
    ],
    respiration: {
      image: '/img/immo-ilot.jpg',
      imageAlt: 'Plan masse d’un îlot de programme immobilier en cours de développement',
      citation: 'Nous choisissons les meilleurs emplacements, offrant un fort potentiel de plus-value aux futurs acquéreurs.',
      source: 'Aménagement foncier',
    },
  },

  interim: {
    banniere: '/img/interim-poste.jpg',
    banniereAlt: 'Collaboratrice en poste en caisse, secteur de la grande distribution',
    chapo:
      'Depuis 20 ans avec vous dans votre recherche d’intérim. Intérim TK, une équipe impliquée, au service de la réussite de vos projets de recrutement d’intérimaires.',
    exergue: { valeur: '250+', libelle: 'personnes accompagnées vers l’emploi chaque mois' },
    activites: [
      {
        titre: 'Un recrutement mené de bout en bout',
        filiale: 'Intérim TK',
        texte:
          'Identification des besoins, élaboration des fiches de poste, sourcing, présélection, recrutement, évaluation… Une équipe impliquée, au service de la réussite de vos projets de recrutement d’intérimaires.',
        points: [
          'Identification des besoins',
          'Élaboration des fiches de poste',
          'Sourcing et présélection',
          'Recrutement et évaluation',
        ],
        image: '/img/groupe-reunion.jpg',
        imageAlt:
          'Réunion de l’équipe du Groupe TK dans les bureaux de La Chapelle-sur-Erdre, devant les affiches des programmes en cours',
        lien: { libelle: 'Découvrir Intérim TK', href: 'https://www.interimtk.fr/' },
      },
    ],
    respiration: {
      image: '/img/groupe-siege.jpg',
      imageAlt:
        'Enseigne Groupe TK sur la façade du siège, 6 rue Ampère à La Chapelle-sur-Erdre',
      citation:
        'Votre partenaire de confiance, spécialiste du travail temporaire à Nantes et sa périphérie.',
      source: 'Intérim TK',
    },
  },

  evenementiel: {
    banniere: '/img/event-hero.jpg',
    banniereAlt:
      'Vue aérienne du Château Le Saz, de sa cour et de son parc arboré de près de 5 hectares',
    chapo:
      'Mariages, brunchs, soirées à thème, fêtes de famille, séminaires, comités de direction, tournages ou shootings photo… À quelques minutes de Nantes, Château Le Saz offre un décor d’exception pour tous les événements privés ou d’entreprise.',
    exergue: { valeur: '5 ha', libelle: 'de parc, à quelques minutes de Nantes' },
    activites: [
      {
        titre: 'Mariages et fêtes de famille',
        filiale: 'Château Le Saz',
        texte:
          'Un décor d’exception pour les grands moments : mariages, brunchs, soirées à thème et fêtes de famille, dans un parc de près de 5 hectares.',
        points: ['Mariages', 'Brunchs', 'Soirées à thème', 'Fêtes de famille'],
        image: '/img/event-mariages.jpg',
        imageAlt: 'Cocktail de réception devant la façade du Château Le Saz',
      },
      {
        titre: 'Séminaires et comités de direction',
        filiale: 'Château Le Saz',
        texte:
          'Des espaces de qualité pour les événements d’entreprise, séminaires et comités de direction, à quelques minutes de Nantes.',
        points: ['Séminaires', 'Comités de direction', 'Espaces de réception'],
        image: '/img/event-seminaires.jpg',
        imageAlt: 'Salle de séminaire aménagée au Château Le Saz',
      },
      {
        titre: 'Tournages et shootings photo',
        filiale: 'Château Le Saz',
        texte:
          'Le château, ses intérieurs et son parc accueillent tournages et shootings photo dans un cadre patrimonial préservé.',
        points: ['Tournages', 'Shootings photo', 'Hébergement sur place'],
        image: '/img/event-chambre.jpg',
        imageAlt: 'Chambre du Château Le Saz',
        lien: {
          libelle: 'Télécharger la plaquette',
          href: 'https://www.groupetk.fr/wp-content/uploads/2022/03/LESAZ-plaquette-v4.pdf',
        },
      },
    ],
    realisationsTitre: 'Le domaine',
    realisations: [
      {
        nom: 'Le château',
        lieu: 'La Chapelle-sur-Erdre',
        image: '/img/event-chateau.jpg',
        imageAlt: 'Façade du Château Le Saz',
      },
      {
        nom: 'Le parc',
        lieu: 'Près de 5 hectares',
        image: '/img/event-reception.jpg',
        imageAlt: 'La façade du Château Le Saz et sa pelouse, côté parc',
      },
    ],
    respiration: {
      image: '/img/event-saz-nuit.jpg',
      imageAlt: 'Le Château Le Saz et son parc vus du ciel à la tombée du jour',
      citation: 'Château Le Saz, créateur d’instants de vie uniques.',
      source: 'Événementiel',
    },
  },
}

/* ------------------------------------------------------------------ */

export const NAV = [
  { libelle: 'Le groupe', href: '/#groupe' },
  { libelle: 'Immobilier', href: '/immobilier' },
  { libelle: 'Intérim', href: '/interim' },
  { libelle: 'Événementiel', href: '/evenementiel' },
]

/** Motifs de contact, pour router la demande vers le bon pôle. */
export const MOTIFS = [
  'Un projet immobilier',
  'Un besoin en intérim',
  'Un événement',
  'Une candidature',
  'Autre demande',
]
