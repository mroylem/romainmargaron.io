export interface GalleryPlate {
  id: string;
  number: string;
  category: string;
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
  caption: string;
  diplomaticContent: {
    pageBreak: string;
    head: string;
    subhead: string;
    dateSpan: string;
    entries: Array<{
      number: string;
      type: string;
      patientName: string;
      surname: string;
      forename: string;
      birthDate: string;
      regDate: string;
      authority: string;
      parentage?: string;
      marginNote?: string;
      clinicalNote?: string;
    }>;
    apparatNotes: string;
  };
  normalizedContent: {
    title: string;
    description: string;
    entries: Array<{
      actNumber: string;
      text: string;
    }>;
  };
  xmlSource: string;
  annotationZone: {
    label: string;
    top: string;
    left: string;
    width: string;
    height: string;
  };
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
