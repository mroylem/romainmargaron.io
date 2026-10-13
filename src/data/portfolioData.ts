import { GalleryPlate, TeiFolio } from '../types';

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
    meta: 'Source : Inventaire des fonds photographiques - Les Archives de l\u0027État de Neuch\u00E2tel',
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
    meta: 'Source : Inventaire des fonds photographiques - Les Archives de l\u0027État de Neuch\u00E2tel',
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
    caption: 'Page 183 — Procès-verbal de la commission administrative de l\'Asile de Bel-Air. Encodage TEI, Université de Genève, 2026.',
  }
};
