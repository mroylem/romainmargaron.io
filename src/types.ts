export interface GalleryPlate {
  id: string;
  number: string;
  category: string;
  subtitle: string;
  title: string;
  filename: string;
  tag: string;
  description: string;
  meta: string;
  imageUrl: string;
  zoomDetails?: string;
}

export interface TeiFolio {
  id: string;
  folioNumber: string;
  label: string;
  shelfmark: string;
  imageUrl: string;
  secondImageUrl: string;
  caption: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  subtitle: string;
  skills: Array<{
    name: string;
    level: string;
    badge: string;
    description: string;
  }>;
}
