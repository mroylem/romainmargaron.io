import { GalleryPlate, TeiFolio, SkillCategory } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
export const GALLERY_PLATES: GalleryPlate[] = [
  // ── AEN (Archives de l'État de Neuchâtel) ──────────────────────────────────
  {
    id: 'plate-aen-1',
    number: '01',
    category: 'AEN — Frise chronologique',
    title: 'Distribution temporelle des fonds photographiques (1850–2005)',
    subtitle: "Frise chronologique des fonds d'archives photographiques de l'AEN, couvrant la période 1850–2005. Visualisation produite sous R (ggplot2) à partir de l'inventaire numérique des collections.",
    filename: 'frise_chronologique_fonds.jpeg',
    tag: 'AEN',
    description: "description a compléter",
    meta: 'Source : AEN • Inventaire photographique • R / ggplot2',
    imageUrl: '/romainmargaron.io/assets/img/AEN/frise_chronologique_fonds.jpeg',
    zoomDetails: "Répartition par décennies des entrées de fonds, permettant d'identifier les pics d'acquisition institutionnelle.",
  },
  {
    id: 'plate-aen-2',
    number: '02',
    category: 'AEN — Distribution temporelle',
    title: 'Distribution des types de supports (1880–1995)',
    subtitle: 'Évolution par décennie des types de supports photographiques dans les fonds de l\'AEN entre 1880 et 1995. Médianes calculées par fenêtre de 10 ans.',
    filename: 'distribution_dans_le_temps.jpeg',
    tag: 'AEN',
    description: "description a compléter",
    meta: 'Source : AEN • R / ggplot2 • Médiane par décennie',
    imageUrl: '/romainmargaron.io/assets/img/AEN/distribution_dans_le_temps.jpeg',
    zoomDetails: 'Transitions technologiques visibles : pic nitrate 1900–1930, montée acétate 1950–1970, généralisation RC 1980.',
  },
  // ── BPuN (Bibliothèque publique et universitaire de Neuchâtel) ───────────────
  {
    id: 'plate-bpun-1',
    number: '03',
    category: 'BPuN — Cartographie SNG',
    title: 'Cartographie des fonds photographiques SNG',
    subtitle: "Cartographie géoréférencée des fonds photographiques de la Société Neuchâteloise de Géographie (SNG) conservés à la BPuN, répartis par commune d'origine des clichés.",
    filename: 'cartographie_fonds_SNG.jpeg',
    tag: 'BPuN',
    description: "description a compléter",
    meta: 'Source : BPuN / SNG • R / sf + ggplot2 • Géoréférencement',
    imageUrl: '/romainmargaron.io/assets/img/BPuN/cartographie_fonds_SNG.jpeg',
    zoomDetails: "Chaque point représente un lieu de prise de vue identifié et géocodé depuis les métadonnées de l'inventaire.",
  },
  {
    id: 'plate-bpun-2',
    number: '04',
    category: 'BPuN — Projection par photographe',
    title: 'Projection des fonds SNG par photographe',
    subtitle: "Projection des dossiers photographiques de la SNG regroupés par photographe identifié. Mesure la contribution individuelle à la constitution du fonds.",
    filename: 'projection_fonds_par_photographe.jpeg',
    tag: 'BPuN',
    description: "description a compléter",
    meta: 'Source : BPuN / SNG • R / ggforce • Par photographe',
    imageUrl: '/romainmargaron.io/assets/img/BPuN/projection_fonds_par_photographe.jpeg',
    zoomDetails: "Photographes anonymes regroupés sous label «Inconnu»; clusters par studio ou institution d'appartenance.",
  },
  // ── LAT (Laténium — Parc et musée d'archéologie de Neuchâtel) ──────────────
  {
    id: 'plate-lat-1',
    number: '05',
    category: 'LAT — Cartographie sites',
    title: 'Cartographie des sites archéologiques (Canton de Neuchâtel)',
    subtitle: "Interpolation raster des sites archéologiques recensés dans les collections du Laténium, géoréférencés sur le territoire cantonal neuchâtelois. Densité calculée par interpolation IDW.",
    filename: 'cartographie_sites_fouilles.png',
    tag: 'LAT',
    description: "description a compléter",
    meta: 'Source : LAT • R / sf + raster • Interpolation IDW',
    imageUrl: '/romainmargaron.io/assets/img/LAT/cartographie_sites_fouilles.png',
    zoomDetails: 'Zones rouges = forte densité de sites; fond MNT SRTM 30m. Projection LV95 (EPSG:2056).',
  },
  {
    id: 'plate-lat-2',
    number: '06',
    category: 'LAT — Répartition diapositives',
    title: 'Répartition des diapositives par commune',
    subtitle: "Répartition géographique des diapositives inventoriées au Laténium selon la commune d'origine des fouilles. Met en évidence les centres archéologiques majeurs du Canton de Neuchâtel.",
    filename: 'repartition_diapositives_commune.png',
    tag: 'LAT',
    description: "description a compléter",
    meta: 'Source : LAT • R / ggplot2 • Par commune',
    imageUrl: '/romainmargaron.io/assets/img/LAT/repartition_diapositives_commune.png',
    zoomDetails: 'Hauteur de barre proportionnelle au nombre de diapositives; communes sans fouilles documentées omises.',
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2 — ÉDITION TEI : Procès-verbaux de la commission Bel-Air (1907-1916)
// Source : https://github.com/mroylem/edition_tei_Bel-Air.io
// ─────────────────────────────────────────────────────────────────────────────

export const TEI_REPO_URL = 'https://github.com/mroylem/edition_tei_Bel-Air.io';
export const TEI_EDITION_URL = 'https://mroylem.github.io/edition_tei_Bel-Air.io/edition.html';
export const TEI_RAW_XML_URL = 'https://raw.githubusercontent.com/mroylem/edition_tei_Bel-Air.io/main/transcription_Bel-Air_1907-1916_p183-184.xml';

export const TEI_FOLIOS: Record<string, TeiFolio> = {
  '183': {
    id: '183',
    folioNumber: '183',
    label: 'p. 183',
    shelfmark: 'AEG / HUG — PV comm. admin. Bel-Air 1907-1916, fol. 183r',
    // No facsimile image available publicly — placeholder kept minimal
    imageUrl: './assets/img/TEI/page183.png',
    secondImageUrl: './assets/img/TEI/page183-results.png',
    caption: 'Page 183 — Procès-verbal de la commission administrative de l\'Asile de Bel-Air. Encodage TEI P5, Université de Genève, 2026.',
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3 — COMPÉTENCES TECHNIQUES
// ─────────────────────────────────────────────────────────────────────────────

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Édition & TEI',
    subtitle: 'XML-TEI P5, Schémas, ODD Roma',
    icon: 'terminal',
    skills: [
      {
        name: 'XML-TEI P5',
        level: 'Expertise',
        badge: 'Avancé',
        description: 'Balisage fin de documents manuscrits : apparat critique (<app>, <rdg>), marginalia, entités nommées et normalisation chronologique.',
      },
      {
        name: 'ODD Roma & Personnalisation',
        level: 'Production',
        badge: 'RNG / DTD',
        description: 'Écriture de schémas TEI sur mesure (« One Document Does it all »), exclusion de modules non pertinents et contraintes de sous-arborescences.',
      },
      {
        name: 'Schematron (Règles ISO)',
        level: 'Validation',
        badge: 'Validation',
        description: 'Règles assert/report pour forcer les attributs @when conformes ISO 8601 et la concordance des identifiants autorité.',
      },
      {
        name: 'XPath / XSLT',
        level: 'Transformation',
        badge: 'Transformation',
        description: 'Pipelines d\'extraction d\'index prosopographiques, génération HTML5 dynamique et conversion vers formats de diffusion.',
      },
    ],
  },
  {
    title: 'HTR & Paléographie',
    subtitle: 'Reconnaissance manuscrite et alignement',
    icon: 'document_scanner',
    skills: [
      {
        name: 'eScriptorium (Inria/EPHE)',
        level: 'Workflow',
        badge: 'Segmentation',
        description: 'Découpage polygonal des lignes de texte manuscrit, masquage des annotations et gestion des transcripteurs.',
      },
      {
        name: 'Kraken (Modèles Deep Learning)',
        level: 'Modélisation',
        badge: 'Entraînement',
        description: 'Entraînement de modèles de transcription neuronale (CER < 4.8%) adaptés aux cursives francophones du XXe siècle.',
      },
      {
        name: 'Transkribus',
        level: 'Collation',
        badge: 'Collation',
        description: 'Reconnaissance assistée, alignement texte-image et exportation au format PAGE-XML / ALTO.',
      },
      {
        name: 'Standard IIIF (Mirador/Cantaloupe)',
        level: 'Diffusion',
        badge: 'Diffusion HD',
        description: 'Création de manifestes IIIF Image & Presentation v3, interopérabilité des serveurs d\'images patrimoniales.',
      },
    ],
  },
  {
    title: 'Code & Analyse',
    subtitle: 'Traitement automatique et visualisation',
    icon: 'analytics',
    skills: [
      {
        name: 'Python (Spacy, Pandas, NLTK)',
        level: 'NLP',
        badge: 'NLP / Traitement',
        description: 'Reconnaissance d\'entités nommées biomédicales, extraction de matrices de cooccurrences et calculs lexicométriques.',
      },
      {
        name: 'R (ggplot2, sf, treemapify)',
        level: 'Visualisation',
        badge: 'DataViz',
        description: 'Production de visualisations scientifiques pour l\'analyse d\'inventaires d\'archives photographiques (AEN, BPuN, LAT).',
      },
      {
        name: 'Git / GitHub Pages',
        level: 'DevOps',
        badge: 'CI/CD & Version',
        description: 'Gestion de versions distribuée pour les sources XML, pipelines d\'intégration continue (GitHub Actions) pour la validation Schematron.',
      },
      {
        name: 'HTML5 / CSS / JS / React',
        level: 'Frontend',
        badge: 'Interfaces',
        description: 'Développement d\'interfaces synoptiques pour l\'édition critique, design responsive et typographie soignée.',
      },
    ],
  },
  {
    title: 'Éthique & Normes',
    subtitle: 'Science ouverte et déontologie',
    icon: 'policy',
    skills: [
      {
        name: 'Principes FAIR & Open Data',
        level: 'Norme',
        badge: 'Science Ouverte',
        description: 'Findable, Accessible, Interoperable, Reusable : dépôt pérenne avec identifiants persistants (DOI, Zenodo).',
      },
      {
        name: "Droit d'auteur & Archives médicales",
        level: 'Droit',
        badge: 'Déontologie',
        description: 'Respect des délais de communicabilité des dossiers médicaux asilaires et anonymisation éthique des données sensibles.',
      },
      {
        name: 'Métadonnées Dublin Core / CIDOC',
        level: 'Interopérabilité',
        badge: 'Interdépôt',
        description: 'Indexation standardisée des fonds d\'archives, mapping sémantique vers CIDOC-CRM pour les graphes de connaissances.',
      },
      {
        name: 'Gestion de projet (Agile / Sprint)',
        level: 'Méthodologie',
        badge: 'Gestion',
        description: 'Planification itérative de la chaîne de numérisation, gestion d\'équipe de transcripteurs et rétro-ingénierie documentaire.',
      },
    ],
  },
];

export const ODD_RULES_DOCUMENTATION = {
  title: 'Spécification ODD Roma — Projet Bel-Air (1907-1916)',
  schemaFile: 'Transcription_Bel_Air_1907-1916_p183-185.rng',
  validationEngine: 'Jing / Schematron ISO',
  repoUrl: 'https://github.com/mroylem/edition_tei_Bel-Air.io/tree/main/ODD_schema',
  modules: [
    { name: 'core', desc: 'Éléments textuels de base : p, head, date, persName, orgName, note, add, del.' },
    { name: 'header', desc: 'Métadonnées catalographiques : teiHeader, fileDesc, publicationStmt, sourceDesc.' },
    { name: 'transcr', desc: 'Transcription fac-similaire et apparat critique : pb, lb, fw, metamark, subst.' },
    { name: 'namesdates', desc: 'Entités nommées spécialisées : persName (attribut @role), placeName, orgName.' },
  ],
  constraints: [
    {
      rule: 'Attribut @when sur les balises <date>',
      desc: 'Chaque balise <date> de délibération doit obligatoirement comporter un attribut @when normalisé selon le standard ISO 8601 (YYYY-MM-DD).',
    },
    {
      rule: "Segmentation par <div> et xml:id",
      desc: "Chaque page est segmentée par une <div> avec un xml:id correspondant au numéro de page.",
    },
    {
      rule: 'Abréviations et signes de répétition',
      desc: 'Les abréviations (M^r, D^elle) sont conservées sous forme originale. Les signes de répétition sont transcrits par le mot attendu avec note explicative.',
    },
  ],
};
