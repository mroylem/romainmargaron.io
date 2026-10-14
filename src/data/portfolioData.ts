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
    description: "description a compléter",
    meta: 'Type : Histogramme • Données : Inventaire des fonds photographiques - Les Archives de l\u0027État de Neuch\u00E2tel',
    imageUrl: '/romainmargaron.io/assets/img/AEN/distribution_dans_le_temps.jpeg',
    zoomDetails: '',
  },
  {
    id: 'plate-aen-2',
    number: '02',
    category: 'AEN - Diagramme en barres flottantes ',
    title: 'Répartition dans le temps des fonds photographiques ',
    subtitle: "Chaque segment représente l'intervalle de date couvert par un fonds.",
    filename: 'frise_chronologique_fonds.jpeg',
    tag: 'AEN',
    description: "description a compléter",
    meta: 'Type : Diagramme en barres flottantes • Données : Inventaire des fonds photographiques - Les Archives de l\u0027État de Neuch\u00E2tel',
    imageUrl: '/romainmargaron.io/assets/img/AEN/frise_chronologique_fonds.jpeg',
    zoomDetails: "",
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
    description: "description a compléter",
    meta: 'Type : Carte à symboles proportionnels • Données : Inventaire de la Diathèque - Laténium.',
    imageUrl: '/romainmargaron.io/assets/img/LAT/repartition_diapositives_commune.png',
    zoomDetails: '',
  },
  {
    id: 'plate-lat-2',
    number: '04',
    category: 'LAT - Représentation cartographique par interpolation',
    title: 'Concentration de l’activité archéologique dans le canton de Neuchâtel ',
    subtitle: "Les valeurs expriment le pourcentage du total de diapositives de la Diathèque par zone géographique. Période 1960-2005",
    filename: 'cartographie_sites_fouilles.png',
    tag: 'LAT',
    description: "description a compléter",
    meta: 'Type : Représentation cartographique par interpolation • Données : Inventaire de la Diathèque - Laténium • Méthode : Interpolation Spatiale (Krigeage).',
    imageUrl: '/romainmargaron.io/assets/img/LAT/cartographie_sites_fouilles.png',
    zoomDetails: '',
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
    description: "description a compléter",
    meta: 'Type : Cartographie • Données : Recensemenent des fonds contenant des objets photographiques • Base de donnée Flora • Bibliothèque de Neuchâtel',
    imageUrl: '/romainmargaron.io/assets/img/BPuN/cartographie_fonds_SNG.jpeg',
    zoomDetails: "",
  },
  {
    id: 'plate-bpun-2',
    number: '06',
    category: 'BPuN - Diagramme de cercles imbriqués (circle packing)',
    title: 'Projection des dossiers photographiques selon leur volume - Fonds SNG ',
    subtitle: "Chaque cercle représente le volume de photographies conservé dans un dossier.",
    filename: 'projection_fonds_par_photographe.jpeg',
    tag: 'BPuN',
    description: "description a compléter",
    meta: 'Type : Diagramme de cercles imbriqués (circle packing) • Données : Recensemenent des fonds contenant des objets photographiques • Base de donnée Flora • Bibliothèque de Neuchâtel',
    imageUrl: '/romainmargaron.io/assets/img/BPuN/projection_fonds_par_photographe.jpeg',
    zoomDetails: "",
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
