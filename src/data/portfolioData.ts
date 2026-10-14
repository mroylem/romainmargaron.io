import { GalleryPlate, TeiFolio } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
export const GALLERY_PLATES: GalleryPlate[] = [
  // ── AEN (Archives de l'État de Neuchâtel) ──────────────────────────────────
  {
    id: 'plate-aen-1',
    number: '01',
    category: 'AEN - Histogramme',
    title: 'Types de support dans les fonds photographiques (1880-1995)',
    subtitle: 'Point médian par fonds, regroupés par tranche décennales (10 ans). Chaque fonds est positionné sur sa date médiane de production, faute de dates précises pour chaque image.',
    filename: 'distribution_dans_le_temps.jpeg',
    tag: 'AEN',
    description: "Cet histogramme présente l'évolution des différents supports photographiques conservés aux Archives de l'État de Neuchâtel (AEN) entre 1880 et 1995, où chaque fonds inventorié est positionné selon sa date médiane de production par tranches de dix ans.",
    meta: 'Type : Histogramme • Données : Inventaire des fonds photographiques - Les Archives de l\u0027État de Neuch\u00E2tel',
    imageUrl: '/romainmargaron.io/assets/img/AEN/distribution_dans_le_temps.jpeg',
    zoomDetails: `Deux périodes ressortent nettement : une forte concentration de tirages positifs sur papier entre 1920 et 1929, 
                    suivie d’un pic important entre 1950 et 1959 lié à l’apparition massive du négatif souple. Tout en reflétant l’histoire des versements et des dons reçus par l'institution, 
                    cette visualisation offre une vue synthétique des tendances générales et de la diversité matérielle des fonds pour cibler une décennie précise.`,
  },
  {
    id: 'plate-aen-2',
    number: '02',
    category: 'AEN - Diagramme en barres flottantes ',
    title: 'Répartition dans le temps des fonds photographiques ',
    subtitle: "Chaque segment représente l'intervalle de date couvert par un fonds.",
    filename: 'frise_chronologique_fonds.jpeg',
    tag: 'AEN',
    description: "Ce diagramme en barres flottantes illustre l’amplitude temporelle des fonds photographiques des Archives de l’État de Neuchâtel entre 1850 et 2005, où chaque segment correspond à l’intervalle défini par les dates extrêmes d’un fonds.",
    meta: 'Type : Diagramme en barres flottantes • Données : Inventaire des fonds photographiques - Les Archives de l\u0027État de Neuch\u00E2tel',
    imageUrl: '/romainmargaron.io/assets/img/AEN/frise_chronologique_fonds.jpeg',
    zoomDetails: `Afin de préserver la lisibilité du graphique, seuls les ensembles comptant plus de dix objets ont été retenus, représentant 42 des 48 fonds inventoriés. La visualisation de donnée met ainsi en contraste des durées de vie très disparates, 
                  allant d’ensembles très resserrés comme le fonds Georges Émile Guillaume (1905-1906) à de vastes couvertures chronologiques tel le Département de police (1850-1996). 
                  Véritable instrument de repérage et de médiation, cet outil permet à un chercheur d'identifier immédiatement les fonds pertinents actifs sur une période ciblée.`,
  },

  // ── LAT (Laténium — Parc et musée d'archéologie de Neuchâtel) ──────────────
  {
    id: 'plate-lat-1',
    number: '05',
    category: 'LAT - Carte à symboles proportionnels',
    title: 'Répartition des diapositives par communes ',
    subtitle: "Sites de fouilles archéologiques dans le Canton de Neuchâtel - Période 1960-2005",
    filename: 'repartition_diapositives_commune.png',
    tag: 'LAT',
    description: "Cette carte à symboles proportionnels replace les archives photographiques du Laténium dans leur réalité géographique en localisant les communes neuchâteloises fouillées entre 1960 et 2005.",
    meta: 'Type : Carte à symboles proportionnels • Données : Inventaire de la Diathèque - Laténium.',
    imageUrl: '/romainmargaron.io/assets/img/LAT/repartition_diapositives_commune.png',
    zoomDetails: `La taille et la couleur des cercles y traduisent le volume de diapositives associées à chaque localité. La visualisation met en évidence une très forte concentration de fouilles le long du littoral
                  (notamment à Bevaix, Cortaillod, Hauterive ou Saint-Blaise), témoignant directement de l'archéologie préventive liée au chantier de l'autoroute A5, tandis que le haut du canton apparaît nettement moins documenté.
                  Outil de gestion et de communication interne, cette cartographie offre un état des lieux synthétique des campagnes menées et ouvre la voie à des analyses comparatives dans le temps.`,
  },
  {
    id: 'plate-lat-2',
    number: '04',
    category: 'LAT - Représentation cartographique par interpolation',
    title: 'Concentration de l’activité archéologique dans le canton de Neuchâtel ',
    subtitle: "Les valeurs expriment le pourcentage du total de diapositives de la Diathèque par zone géographique. Période 1960-2005",
    filename: 'cartographie_sites_fouilles.png',
    tag: 'LAT',
    description: "Cette carte d’interpolation spatiale (réalisée par krigeage) lisse les données du Laténium pour transformer les points de fouille en zones de densité continues, indépendamment des frontières communales.",
    meta: 'Type : Représentation cartographique par interpolation • Données : Inventaire de la Diathèque - Laténium • Méthode : Interpolation Spatiale (Krigeage).',
    imageUrl: '/romainmargaron.io/assets/img/LAT/cartographie_sites_fouilles.png',
    zoomDetails: `En opposant zones « chaudes » et zones « froides », elle révèle de façon macroscopique les grandes dynamiques territoriales de la collection, dominées par le couloir littoral des chantiers de l’autoroute A5. 
                  Moins axée sur le détail quantitatif que la carte à symboles proportionnels, cette représentation fait le choix d’un minimalisme visuel fort, 
                  ce qui en fait un support de médiation et de communication idéal pour donner à voir l'étendue globale des recherches archéologiques neuchâteloises entre 1960 et 2005.`,
  },

  // ── BPuN (Bibliothèque publique et universitaire de Neuchâtel) ───────────────
  {
    id: 'plate-bpun-1',
    number: '05',
    category: 'BPuN - Cartographie SNG',
    title: 'Répartition géographique des dossiers photographiques - Fonds SNG (1869 - 1931)',
    subtitle: "Chaque pays mentionné est coloré selon son volume de photographies. Les points rouges marquent leur position et les badges indiquent le nombre exact d'images concernées.",
    filename: 'cartographie_fonds_SNG.jpeg',
    tag: 'BPuN',
    description: "Issue du fonds de la Société neuchâteloise de géographie (SNG) conservé à la Bibliothèque publique et universitaire de Neuchâtel (BPuN), cette carte du monde illustre la portée internationale des collections photographiques en rattachant les ensembles historiques aux frontières actuelles.",
    meta: 'Type : Cartographie • Données : Recensemenent des fonds contenant des objets photographiques • Base de donnée Flora • Bibliothèque de Neuchâtel',
    imageUrl: '/romainmargaron.io/assets/img/BPuN/cartographie_fonds_SNG.jpeg',
    zoomDetails: `La gradation des teintes de bleu et les étiquettes chiffrées traduisent le volume d'images par pays, mettant en lumière de vastes ensembles documentaires en Europe, en Amérique du Sud, en Asie ainsi qu'en Amérique du Nord. 
                  Si elle témoigne de l'activité des photographes sur presque tous les continents, la carte révèle aussi un biais de traitement : la sous-représentation apparente de l'Afrique centrale découle de notices trop imprécises 
                  dans la base Flora (intitulées simplement « Afrique » ou « Lacs »), qui n'ont pu être géoréférencées bien que des documents existent.`,
  },
  {
    id: 'plate-bpun-2',
    number: '06',
    category: 'BPuN - Diagramme de cercles imbriqués (circle packing)',
    title: 'Projection des dossiers photographiques selon leur volume - Fonds SNG ',
    subtitle: "Chaque cercle représente le volume de photographies conservé dans un dossier.",
    filename: 'projection_fonds_par_photographe.jpeg',
    tag: 'BPuN',
    description: "Ce diagramme en cercles imbriqués illustre la répartition volumétrique des dossiers photographiques au sein du fonds de la Société neuchâteloise de géographie (SNG)",
    meta: 'Type : Diagramme de cercles imbriqués (circle packing) • Données : Recensemenent des fonds contenant des objets photographiques • Base de donnée Flora • Bibliothèque de Neuchâtel',
    imageUrl: '/romainmargaron.io/assets/img/BPuN/projection_fonds_par_photographe.jpeg',
    zoomDetails: `La taille des cercles est proportionnelle au nombre d'images recensées, tandis que la couleur distingue trois catégories de volume pour chaque photographe ou regroupement thématique, à l'image des dossiers « Afrique » ou « Lacs, paysages lacustres ».
                  La datavisualisation met en évidence trois producteurs, à savoir James Jackson, Henri Moser et le Prince Roland Bonaparte, concentrent à eux seuls une large part des volumes de la collection.`,
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
    shelfmark: 'Exemple de transcription et d\'édition',
    imageUrl: './assets/img/TEI/page183.png',
    secondImageUrl: './assets/img/TEI/page183-results.png',
    caption: 'Page 183 — Procès-verbal de la commission administrative de l\'Asile de Bel-Air. Encodage TEI, Université de Genève, 2026.',
  }
};
