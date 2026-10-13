import { GalleryPlate, TeiFolio, SkillCategory } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1 — MÉMOIRE : Visualisations R issues des stages AEN, BPuN, LAT
// ─────────────────────────────────────────────────────────────────────────────

export const GALLERY_PLATES: GalleryPlate[] = [
  // ── AEN (Archives de l'État de Neuchâtel) ──────────────────────────────────
  {
    id: 'plate-aen-1',
    number: '01',
    category: 'AEN — Frise chronologique',
    title: 'Distribution temporelle des fonds photographiques (1850–2005)',
    filename: 'frise_chronologique_fonds.jpeg',
    tag: 'AEN • R / ggplot2',
    description: "Frise chronologique des fonds d'archives photographiques de l'AEN, couvrant la période 1850–2005. Visualisation produite sous R (ggplot2) à partir de l'inventaire numérique des collections.",
    meta: 'Source : AEN • Inventaire photographique • R / ggplot2',
    imageUrl: '/romainmargaron.io/assets/img/AEN/frise_chronologique_fonds.jpeg',
    zoomDetails: "Répartition par décennies des entrées de fonds, permettant d'identifier les pics d'acquisition institutionnelle.",
  },
  {
    id: 'plate-aen-2',
    number: '02',
    category: 'AEN — Circle Packing',
    title: 'Projection des fonds et de leur taille (Circle Packing)',
    filename: 'projection_circle_packing.jpeg',
    tag: 'AEN • R / packcircles',
    description: "Représentation par cercles proportionnels des volumes documentaires de chaque fonds photographique de l'AEN. Permet de visualiser d'un coup d'œil les collections dominantes.",
    meta: 'Source : AEN • R / packcircles • Volumétrie documentaire',
    imageUrl: '/romainmargaron.io/assets/img/AEN/projection_circle_packing.jpeg',
    zoomDetails: 'Chaque cercle représente un fonds; le diamètre est proportionnel au nombre de clichés inventoriés.',
  },
  {
    id: 'plate-aen-3',
    number: '03',
    category: 'AEN — Scatter Plot',
    title: 'Volume et diversité des fonds (Scatter Plot)',
    filename: 'scatter_plot_volume_diversite.jpeg',
    tag: 'AEN • R / ggplot2',
    description: "Nuage de points croisant le volume et la diversité typologique des fonds photographiques de l'AEN. Révèle les fonds denses et hétérogènes versus les collections spécialisées.",
    meta: 'Source : AEN • R / ggplot2 • Volume × Diversité',
    imageUrl: '/romainmargaron.io/assets/img/AEN/scatter_plot_volume_diversite.jpeg',
    zoomDetails: 'Axes : nombre total de clichés (x) × nombre de types de supports distincts (y).',
  },
  {
    id: 'plate-aen-4',
    number: '04',
    category: 'AEN — Distribution temporelle',
    title: 'Distribution des types de supports (1880–1995)',
    filename: 'distribution_dans_le_temps.jpeg',
    tag: 'AEN • R / ggplot2',
    description: "Évolution par décennie des types de supports photographiques dans les fonds de l'AEN entre 1880 et 1995. Médianes calculées par fenêtre de 10 ans.",
    meta: 'Source : AEN • R / ggplot2 • Médiane par décennie',
    imageUrl: '/romainmargaron.io/assets/img/AEN/distribution_dans_le_temps.jpeg',
    zoomDetails: 'Transitions technologiques visibles : pic nitrate 1900–1930, montée acétate 1950–1970, généralisation RC 1980.',
  },
  // ── BPuN (Bibliothèque publique et universitaire de Neuchâtel) ───────────────
  {
    id: 'plate-bpun-1',
    number: '05',
    category: 'BPuN — Cartographie SNG',
    title: 'Cartographie des fonds photographiques SNG',
    filename: 'cartographie_fonds_SNG.jpeg',
    tag: 'BPuN • R / sf + ggplot2',
    description: "Cartographie géoréférencée des fonds photographiques de la Société Neuchâteloise de Géographie (SNG) conservés à la BPuN, répartis par commune d'origine des clichés.",
    meta: 'Source : BPuN / SNG • R / sf + ggplot2 • Géoréférencement',
    imageUrl: '/romainmargaron.io/assets/img/BPuN/cartographie_fonds_SNG.jpeg',
    zoomDetails: "Chaque point représente un lieu de prise de vue identifié et géocodé depuis les métadonnées de l'inventaire.",
  },
  {
    id: 'plate-bpun-2',
    number: '06',
    category: 'BPuN — Frise chronologique A–G',
    title: 'Frise chronologique des fonds BPuN (A–G)',
    filename: 'frise_chronologique_A_G.jpeg',
    tag: 'BPuN • R / ggplot2',
    description: "Frise temporelle de la première moitié (A–G) des fonds photographiques de la BPuN. Visualise l'ancienneté et la durée de chaque fonds classé alphabétiquement.",
    meta: 'Source : BPuN • R / ggplot2 • Fonds A à G',
    imageUrl: '/romainmargaron.io/assets/img/BPuN/frise_chronologique_A_G.jpeg',
    zoomDetails: "Longueur de la barre proportionnelle à l'étendue temporelle du fonds; position = dates extrêmes.",
  },
  {
    id: 'plate-bpun-3',
    number: '07',
    category: 'BPuN — Frise chronologique H–Z',
    title: 'Frise chronologique des fonds BPuN (H–Z)',
    filename: 'frise_chronologique_H_Z.jpeg',
    tag: 'BPuN • R / ggplot2',
    description: "Frise temporelle de la seconde moitié (H–Z) des fonds photographiques de la BPuN. Complémentaire de la planche précédente pour une vue d'ensemble complète.",
    meta: 'Source : BPuN • R / ggplot2 • Fonds H à Z',
    imageUrl: '/romainmargaron.io/assets/img/BPuN/frise_chronologique_H_Z.jpeg',
    zoomDetails: 'Fonds Vouga et Wurflein parmi les plus anciens (1870–1890); fonds récents post-1980 en fin de liste.',
  },
  {
    id: 'plate-bpun-4',
    number: '08',
    category: 'BPuN — Projection par photographe',
    title: 'Projection des fonds SNG par photographe',
    filename: 'projection_fonds_par_photographe.jpeg',
    tag: 'BPuN • R / ggforce',
    description: "Projection des dossiers photographiques de la SNG regroupés par photographe identifié. Mesure la contribution individuelle à la constitution du fonds.",
    meta: 'Source : BPuN / SNG • R / ggforce • Par photographe',
    imageUrl: '/romainmargaron.io/assets/img/BPuN/projection_fonds_par_photographe.jpeg',
    zoomDetails: "Photographes anonymes regroupés sous label «Inconnu»; clusters par studio ou institution d'appartenance.",
  },
  // ── LAT (Laténium — Parc et musée d'archéologie de Neuchâtel) ───────────────
  {
    id: 'plate-lat-1',
    number: '09',
    category: 'LAT — Cartographie sites',
    title: 'Cartographie des sites archéologiques (Canton de Neuchâtel)',
    filename: 'cartographie_sites_fouilles.png',
    tag: 'LAT • R / sf + raster',
    description: "Interpolation raster des sites archéologiques recensés dans les collections du Laténium, géoréférencés sur le territoire cantonal neuchâtelois. Densité calculée par interpolation IDW.",
    meta: 'Source : LAT • R / sf + raster • Interpolation IDW',
    imageUrl: '/romainmargaron.io/assets/img/LAT/cartographie_sites_fouilles.png',
    zoomDetails: 'Zones rouges = forte densité de sites; fond MNT SRTM 30m. Projection LV95 (EPSG:2056).',
  },
  {
    id: 'plate-lat-2',
    number: '10',
    category: 'LAT — Dendrogramme',
    title: "Dendrogramme de la hiérarchie des numéros d'inventaire",
    filename: 'dendrogramme_numero_inventaire.png',
    tag: 'LAT • R / ggraph',
    description: "Structure hiérarchique des numéros d'identification des diapositives du Laténium sous forme d'arbre. Révèle la logique de classification interne de l'inventaire.",
    meta: 'Source : LAT • R / ggraph • Classification hiérarchique',
    imageUrl: '/romainmargaron.io/assets/img/LAT/dendrogramme_numero_inventaire.png',
    zoomDetails: "Nœuds colorés par préfixe de série (fouille, objet, site); profondeur = niveau de spécificité du numéro.",
  },
  {
    id: 'plate-lat-3',
    number: '11',
    category: 'LAT — Répartition diapositives',
    title: 'Répartition des diapositives par commune',
    filename: 'repartition_diapositives_commune.png',
    tag: 'LAT • R / ggplot2',
    description: "Répartition géographique des diapositives inventoriées au Laténium selon la commune d'origine des fouilles. Met en évidence les centres archéologiques majeurs du Canton de Neuchâtel.",
    meta: 'Source : LAT • R / ggplot2 • Par commune',
    imageUrl: '/romainmargaron.io/assets/img/LAT/repartition_diapositives_commune.png',
    zoomDetails: 'Hauteur de barre proportionnelle au nombre de diapositives; communes sans fouilles documentées omises.',
  },
  {
    id: 'plate-lat-4',
    number: '12',
    category: 'LAT — Treemap',
    title: 'Treemap de la hiérarchie spatiale du Laténium',
    filename: 'treemap_hierarchie_latenium.png',
    tag: 'LAT • R / treemapify',
    description: "Treemap représentant la hiérarchie spatiale des collections du Laténium. Surface proportionnelle au nombre de pièces inventoriées par département et sous-catégorie.",
    meta: 'Source : LAT • R / treemapify • Hiérarchie spatiale',
    imageUrl: '/romainmargaron.io/assets/img/LAT/treemap_hierarchie_latenium.png',
    zoomDetails: "Couleurs par département (Préhistoire, Âge du Bronze, La Tène); sous-rectangles = sous-catégories d'objets.",
  },
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
    imageUrl: '',
    caption: 'Page 183 — Procès-verbal de la commission administrative de l\'Asile de Bel-Air. Encodage TEI P5, Université de Genève, 2026.',
    annotationZone: {
      label: 'zone-p.183 : Séance de commission',
      top: '20%',
      left: '10%',
      width: '80%',
      height: '12%',
    },
    diplomaticContent: {
      pageBreak: '<pb n="183" facs="#ms-belair-f183r"/>',
      head: 'PROCÈS-VERBAL DE LA COMMISSION ADMINISTRATIVE — ASILE DE BEL-AIR',
      subhead: 'Archives de l\'État de Genève (AEG) / Archives centrales des HUG',
      dateSpan: 'Commencé le 9 juillet 1907 — Terminé le 9 mai 1916',
      entries: [],
      apparatNotes: `<!-- Encodage conforme TEI P5, schéma ODD Roma, validation Schematron ISO -->
<!-- Éditeur scientifique : Romain Margaron (UNIGE, 2026) -->
<!-- Licence : CC-BY 4.0 — https://creativecommons.org/licenses/by/4.0/ -->`,
    },
    normalizedContent: {
      title: 'Procès-verbaux de la commission Bel-Air (1907-1916) — p. 183',
      description: 'Transcription et encodage XML-TEI P5 des procès-verbaux de la commission administrative de l\'Asile de Bel-Air (Genève). Pages 183 à 185 éditées dans le cadre du cours « Bibliothèque numérique II — Éditions et corpus numériques » à l\'Université de Genève.',
      entries: [],
    },
    xmlSource: `<?xml version="1.0" encoding="UTF-8"?>
<?xml-model href="ODD_schema/Transcription_Bel_Air_1907-1916_p183-185.rng"
            type="application/xml"
            schematypens="http://relaxng.org/ns/structure/1.0"?>
<?xml-model href="ODD_schema/Transcription_Bel_Air_1907-1916_p183-185.rng"
            type="application/xml"
            schematypens="http://purl.oclc.org/dsdl/schematron"?>
<TEI xmlns="http://www.tei-c.org/ns/1.0">
   <teiHeader>
      <fileDesc>
         <titleStmt>
            <title>Procès - Verbal de la commission Bel-Air -
               Commencé le 9 juillet 1907. Terminé le 9 mai 1916.</title>
            <author>Divers secrétaires de l'Asile de Bel-Air</author>
         </titleStmt>
         <publicationStmt>
            <publisher>Romain Margaron</publisher>
            <authority>Université de Genève (UNIGE)</authority>
            <availability>
               <licence target="https://creativecommons.org/licenses/by/4.0/legalcode.txt">CC-BY</licence>
            </availability>
            <date>2026</date>
         </publicationStmt>
         <sourceDesc>
            <msDesc>
               <msIdentifier>
                  <repository>Les Archives d'État de Genève et
                     Les Archives centrales des Hôpitaux Universitaires de Genève</repository>
                  <idno>PV comm admin Bel-Air_1907-1916</idno>
               </msIdentifier>
               <physDesc>
                  <objectDesc><p>1 carnet</p></objectDesc>
               </physDesc>
               <history>
                  <origin>
                     <p>Procès-verbaux écrit entre <date>1907 à 1916</date>
                       à <placeName key="http://www.geonames.org/2660646">Genève</placeName></p>
                  </origin>
               </history>
            </msDesc>
         </sourceDesc>
      </fileDesc>
      <encodingDesc>
         <projectDesc>
            <p>Ce document a été encodé dans le cadre du cours de
               Bibliothèque numérique II - Éditions et corpus numériques
               à l'Université de Genève.</p>
         </projectDesc>
         <editorialDecl>
            <p>Orthographe et grammaire : Maintien de l'orthographe originale
               (y compris les variations et archaïsmes) sans modernisation.</p>
            <p>Date : Les dates sont encodées avec l'élément "date" et
               un attribut "when" pour indiquer la date au format ISO (AAAA-MM-JJ).</p>
            <p>Pages éditées en TEI : Seules les pages 183 à 185 ont été éditées.</p>
         </editorialDecl>
      </encodingDesc>
   </teiHeader>
   <text>
      <body>
         <pb n="183"/>
         <!-- Transcription complète disponible sur GitHub :
              https://github.com/mroylem/edition_tei_Bel-Air.io -->
      </body>
   </text>
</TEI>`,
  },
  '184': {
    id: '184',
    folioNumber: '184',
    label: 'p. 184',
    shelfmark: 'AEG / HUG — PV comm. admin. Bel-Air 1907-1916, fol. 184r',
    imageUrl: '',
    caption: 'Page 184 — Suite des procès-verbaux de la commission administrative. Encodage TEI P5, UNIGE, 2026.',
    annotationZone: {
      label: 'zone-p.184 : Délibérations',
      top: '15%',
      left: '10%',
      width: '80%',
      height: '14%',
    },
    diplomaticContent: {
      pageBreak: '<pb n="184" facs="#ms-belair-f184r"/>',
      head: 'COMMISSION ADMINISTRATIVE — ASILE DE BEL-AIR (SUITE)',
      subhead: 'Transcription diplomatique conforme TEI P5',
      dateSpan: '1907–1916',
      entries: [],
      apparatNotes: `<!-- Source XML complète : ${TEI_RAW_XML_URL} -->`,
    },
    normalizedContent: {
      title: 'Procès-verbaux de la commission Bel-Air (1907-1916) — p. 184',
      description: 'Suite de la transcription et de l\'encodage XML-TEI P5. Voir l\'édition complète en ligne sur GitHub Pages.',
      entries: [],
    },
    xmlSource: `<TEI xmlns="http://www.tei-c.org/ns/1.0">
   <text>
      <body>
         <pb n="184"/>
         <!-- Transcription complète disponible sur :
              https://github.com/mroylem/edition_tei_Bel-Air.io -->
      </body>
   </text>
</TEI>`,
  },
  '185': {
    id: '185',
    folioNumber: '185',
    label: 'p. 185',
    shelfmark: 'AEG / HUG — PV comm. admin. Bel-Air 1907-1916, fol. 185r',
    imageUrl: '',
    caption: 'Page 185 — Dernière page encodée. Clôture de la transcription TEI P5, UNIGE, 2026.',
    annotationZone: {
      label: 'zone-p.185 : Clôture',
      top: '60%',
      left: '20%',
      width: '65%',
      height: '18%',
    },
    diplomaticContent: {
      pageBreak: '<pb n="185" facs="#ms-belair-f185r"/>',
      head: 'COMMISSION ADMINISTRATIVE — ASILE DE BEL-AIR (FIN)',
      subhead: 'Transcription diplomatique — Dernière page encodée (p. 185)',
      dateSpan: '1907–1916',
      entries: [],
      apparatNotes: `<!-- Édition HTML : https://mroylem.github.io/edition_tei_Bel-Air.io/edition.html -->`,
    },
    normalizedContent: {
      title: 'Procès-verbaux de la commission Bel-Air (1907-1916) — p. 185',
      description: 'Dernière page encodée dans le cadre du projet d\'édition numérique. L\'édition HTML complète est consultable sur GitHub Pages.',
      entries: [],
    },
    xmlSource: `<TEI xmlns="http://www.tei-c.org/ns/1.0">
   <text>
      <body>
         <pb n="185"/>
         <!-- Édition complète : https://mroylem.github.io/edition_tei_Bel-Air.io/ -->
      </body>
   </text>
</TEI>`,
  },
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
