import { GalleryPlate, TeiFolio, SkillCategory } from '../types';

export const GALLERY_PLATES: GalleryPlate[] = [
  {
    id: 'plate-1',
    number: '01',
    category: 'Titre Registre',
    title: 'Page de titre du registre 1907',
    filename: 'ms-belair-f001.tif',
    tag: 'Planche 01 • Registre',
    description: "Vue frontispice manuscrite annotée par le greffier de la commission. Traces de foliotation manuelle et encres ferro-galliques nécessitant un seuillage colorimétrique poussé sous Kraken.",
    meta: 'Résolution : 600 DPI • Espace : RGB/RAW',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrW0dNcjB_jODph88SnmNG5wbQQqV08oJWPU9aHSCat7x5EByw5iwt42vUxeylktXdrYQ1_w16zM6xIgHh31LphZTW5V6aFfRtzLUUhKbZwBS1xpS4qjIsPiZUHavGZh0DspZ1uA0fTLuqP2o5XJr5p28WOdyyvNMl96vJ6SFA1TgSlbSpKRzLBPmRWs8M3ESe9-sdjUNw1nnYBPNGJ42l3KhdRQ5dzltR8rBYPZaLPzPKElNsTiR5Lw',
    zoomDetails: 'Encadrement à l’encre noire, initiales rubriquées et cachet asilaire d’enregistrement préfectoral.'
  },
  {
    id: 'plate-2',
    number: '02',
    category: 'Marginalia',
    title: 'Annotations marginales & cachets',
    filename: 'ms-belair-p183-marg.tif',
    tag: 'Planche 02 • Paléographie',
    description: "Rapprochement des apostilles marginales et des tampons administratifs officiels 'Officier de l’État Civil'. Détection des zones hors flux de lecture via polygones eScriptorium.",
    meta: 'Segmentation polygonale • 42 lignes extraites',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrW0dNcjB_jODph88SnmNG5wbQQqV08oJWPU9aHSCat7x5EByw5iwt42vUxeylktXdrYQ1_w16zM6xIgHh31LphZTW5V6aFfRtzLUUhKbZwBS1xpS4qjIsPiZUHavGZh0DspZ1uA0fTLuqP2o5XJr5p28WOdyyvNMl96vJ6SFA1TgSlbSpKRzLBPmRWs8M3ESe9-sdjUNw1nnYBPNGJ42l3KhdRQ5dzltR8rBYPZaLPzPKElNsTiR5Lw',
    zoomDetails: 'Mention marginale autographe de l’officier A. Mercier avec paraphe notarié.'
  },
  {
    id: 'plate-3',
    number: '03',
    category: 'Lexicométrie',
    title: 'Nuage sémantique des délibérations',
    filename: 'nlp-belair-clusters.svg',
    tag: 'Planche 03 • Lexicométrie',
    description: "Cartographie des cooccurrences lexico-sémantiques révélant les motifs majeurs : 'admission', 'secours', 'internement d’office', 'diagnostic psychiatrique'.",
    meta: 'Matrice TF-IDF • 1 840 tokens analysés',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJS-592JtGNa1fXCGe3ELaVJeuKl4Y3WjF7GSuGrnbdiL5kSVfrKuOU7Zf9VvH3NUWjJ6on9NepJxaxrNBU9cXYnA8szs57rdc35ch4POy40xoqaTbS3YTZx4b3KbU-0yvrILbefbizlg4NCrV51j2N81O6HKt55xA97aOYvCvo2-yTpm4eWb5tGRbqAO95OxYpEMYRgRqW9jIsxS24Z5-WngIgoJrM5lOTAa0Y-tpe61L15vAZ3ynmw',
    zoomDetails: 'Fréquences lemmatisées (spaCy fr_core_news_lg) avec pondération par date de séance.'
  },
  {
    id: 'plate-4',
    number: '04',
    category: 'Données',
    title: 'Schéma de la base relationnelle & Ontologie CIDOC-CRM',
    filename: 'db-belair-erd.png',
    tag: 'Planche 04 • Modélisation',
    description: "Modèle entité-association pour l'indexation prosopographique des commissaires, des médecins aliénistes et des personnes admises.",
    meta: 'Format SQL / GraphDB Neo4j',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJS-592JtGNa1fXCGe3ELaVJeuKl4Y3WjF7GSuGrnbdiL5kSVfrKuOU7Zf9VvH3NUWjJ6on9NepJxaxrNBU9cXYnA8szs57rdc35ch4POy40xoqaTbS3YTZx4b3KbU-0yvrILbefbizlg4NCrV51j2N81O6HKt55xA97aOYvCvo2-yTpm4eWb5tGRbqAO95OxYpEMYRgRqW9jIsxS24Z5-WngIgoJrM5lOTAa0Y-tpe61L15vAZ3ynmw',
    zoomDetails: 'Classes E21 Person, E5 Event (Admission, Transfert, Décharge) et E53 Place.'
  }
];

export const TEI_FOLIOS: Record<string, TeiFolio> = {
  '183': {
    id: '183',
    folioNumber: '183',
    label: 'p. 183',
    shelfmark: 'Cote : CH-AEG-Bel-Air-1907-1916 / Fol. 183r',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrW0dNcjB_jODph88SnmNG5wbQQqV08oJWPU9aHSCat7x5EByw5iwt42vUxeylktXdrYQ1_w16zM6xIgHh31LphZTW5V6aFfRtzLUUhKbZwBS1xpS4qjIsPiZUHavGZh0DspZ1uA0fTLuqP2o5XJr5p28WOdyyvNMl96vJ6SFA1TgSlbSpKRzLBPmRWs8M3ESe9-sdjUNw1nnYBPNGJ42l3KhdRQ5dzltR8rBYPZaLPzPKElNsTiR5Lw',
    caption: 'Écriture cursive en encre noire et sanguine. Mention marginale rouge : « L’Officier de l’État Civil : A. Mercier ».',
    annotationZone: {
      label: 'zone-l.48 : Dubois Jean Pierre',
      top: '28%',
      left: '18%',
      width: '74%',
      height: '11%'
    },
    diplomaticContent: {
      pageBreak: '<pb n="183" facs="#ms-belair-f183r"/>',
      head: "REGISTRE DES ACTES D'ÉTAT CIVIL — ANNÉE 1915",
      subhead: "Commune de Saint-Émilion (Gironde) / Hôpital-Asile de Bel-Air",
      dateSpan: "12 au 15 Janvier 1915",
      entries: [
        {
          number: '№ 48',
          type: 'admission',
          patientName: 'Dubois, Jean Pierre',
          surname: 'Dubois',
          forename: 'Jean Pierre',
          birthDate: 'treize Janvier mil neuf cent quinze',
          regDate: 'quatorze',
          authority: 'Commission administrative',
          parentage: 'Marie Louise Moreau',
          marginNote: "L'Officier de l'État Civil : A. Mercier"
        },
        {
          number: '№ 49',
          type: 'deliberation',
          patientName: 'Henriette Lefèvre',
          surname: 'Lefèvre',
          forename: 'Henriette',
          birthDate: 'treize Janvier mil neuf cent quinze',
          regDate: 'quatorze courant',
          authority: 'Commission administrative',
          clinicalNote: "Examen clinique et ordonnance de transfert au pavillon d'isolement."
        }
      ],
      apparatNotes: `<app>\n  <lem>mil neuf cent quinze</lem>\n  <rdg wit="#ms-draft">1915 [chiffres arabes]</rdg>\n</app>`
    },
    normalizedContent: {
      title: 'Actes administratifs des 12-15 janvier 1915',
      description: 'Texte modernisé : ponctuation régularisée, abréviations résolues sous balise <expan>, syntaxe adaptée aux règles éditoriales contemporaines.',
      entries: [
        {
          actNumber: 'Acte 48.',
          text: "Jean-Pierre Dubois, né le 13 janvier 1915. Enregistré le 14 janvier 1915 sous la responsabilité de la Commission administrative de Bel-Air. Enfant de Marie-Louise Moreau. Certifié conforme par l'officier de l'état civil A. Mercier."
        },
        {
          actNumber: 'Acte 49.',
          text: "Henriette Lefèvre, née le 13 janvier 1915. Enregistrement validé le 14 janvier 1915. Décision de prise en charge et collation au registre matricule hospitalier."
        }
      ]
    },
    xmlSource: `<TEI xmlns="http://www.tei-c.org/ns/1.0">
  <teiHeader>
    <fileDesc>
      <titleStmt>
        <title>Procès-verbaux de la commission Bel-Air (1907-1916)</title>
        <author>Commission administrative de Bel-Air</author>
        <respStmt>
          <resp>Transcription et encodage TEI</resp>
          <name>Romain Margaron</name>
        </respStmt>
      </titleStmt>
      <publicationStmt>
        <publisher>Université de Neuchâtel &amp; Université de Genève</publisher>
        <date when="2025">2025</date>
        <availability><licence target="https://creativecommons.org/licenses/by/4.0/"/></availability>
      </publicationStmt>
    </fileDesc>
  </teiHeader>
  <text>
    <body>
      <pb n="183" facs="#ms-belair-f183r"/>
      <div type="deliberation" n="1915-01-14">
        <head>REGISTRE DES ACTES D'ÉTAT CIVIL — ANNÉE 1915</head>
        <p>№ 48 — <persName key="dubois-jp" role="patient"><surname>Dubois</surname>, <forename>Jean Pierre</forename></persName>. Né le <date when="1915-01-13">treize Janvier mil neuf cent quinze</date>. Enregistré le quatorze <add place="above">croix</add>. Enregistré sous l'autorité de la <orgName ref="#comm-admin">Commission administrative</orgName>.</p>
        <p>Fils de <persName role="mother">Marie Louise Moreau</persName>.</p>
        <note place="margin" resp="#mercier-a">L'Officier de l'État Civil : A. Mercier</note>
        <p>№ 49 — <persName role="patient"><surname>Lefèvre</surname>, <forename>Henriette</forename></persName>. Née le <date when="1915-01-13">treize Janvier mil neuf cent quinze</date>. Enregistré le quatorze courant. Examen clinique et ordonnance de transfert au pavillon d'isolement.</p>
      </div>
    </body>
  </text>
</TEI>`
  },
  '184': {
    id: '184',
    folioNumber: '184',
    label: 'p. 184',
    shelfmark: 'Cote : CH-AEG-Bel-Air-1907-1916 / Fol. 184r',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrW0dNcjB_jODph88SnmNG5wbQQqV08oJWPU9aHSCat7x5EByw5iwt42vUxeylktXdrYQ1_w16zM6xIgHh31LphZTW5V6aFfRtzLUUhKbZwBS1xpS4qjIsPiZUHavGZh0DspZ1uA0fTLuqP2o5XJr5p28WOdyyvNMl96vJ6SFA1TgSlbSpKRzLBPmRWs8M3ESe9-sdjUNw1nnYBPNGJ42l3KhdRQ5dzltR8rBYPZaLPzPKElNsTiR5Lw',
    caption: 'Feuillet 184r : Délibérations financières et admission sous mandat de justice. Écriture posée du secrétaire de séance.',
    annotationZone: {
      label: 'zone-l.50 : Délibération budgétaire & subsides',
      top: '20%',
      left: '15%',
      width: '78%',
      height: '14%'
    },
    diplomaticContent: {
      pageBreak: '<pb n="184" facs="#ms-belair-f184r"/>',
      head: "COMMISSION ADMINISTRATIVE — SÉANCE DU 16 JANVIER 1915",
      subhead: "Procès-verbal de la répartition des subsides et admissions de plein droit",
      dateSpan: "16 au 18 Janvier 1915",
      entries: [
        {
          number: '№ 50',
          type: 'finance',
          patientName: 'Veuve Perrin née Chantal',
          surname: 'Perrin',
          forename: 'Chantal',
          birthDate: 'vingt-huit Mars mil huit cent soixante',
          regDate: 'seize Janvier',
          authority: 'Commission administrative',
          clinicalNote: "Allocation mensuelle de 45 francs au titre du secours d'hospice."
        },
        {
          number: '№ 51',
          type: 'transfer',
          patientName: 'Giraud, Alexandre',
          surname: 'Giraud',
          forename: 'Alexandre',
          birthDate: 'quatre Novembre mil huit cent quatre-vingt-cinq',
          regDate: 'dix-sept Janvier',
          authority: 'Préfecture de la Gironde',
          marginNote: 'Visé : Dr. Ladame, médecin adjoint'
        }
      ],
      apparatNotes: `<app>\n  <lem>allocation mensuelle</lem>\n  <rdg wit="#ms-copy">pension trimestrielle</rdg>\n</app>`
    },
    normalizedContent: {
      title: 'Délibérations financières et régularisations des 16-18 janvier 1915',
      description: 'Folio 184 : Gestion des dépenses d’internement et des subsides communaux accordés aux familles démunies.',
      entries: [
        {
          actNumber: 'Acte 50.',
          text: "Veuve Chantal Perrin, née le 28 mars 1860. Attribution d'une allocation mensuelle de 45 francs suisses/français au titre du secours d'hospice de Bel-Air."
        },
        {
          actNumber: 'Acte 51.',
          text: "Alexandre Giraud, né le 4 novembre 1885. Décision de maintien sous surveillance clinique avec visa du Dr Ladame."
        }
      ]
    },
    xmlSource: `<TEI xmlns="http://www.tei-c.org/ns/1.0">
  <text>
    <body>
      <pb n="184" facs="#ms-belair-f184r"/>
      <div type="deliberation" n="1915-01-16">
        <head>COMMISSION ADMINISTRATIVE — SÉANCE DU 16 JANVIER 1915</head>
        <p>№ 50 — <persName role="beneficiary">Veuve Perrin née Chantal</persName>. Allocation mensuelle de <measure type="currency" quantity="45" unit="CHF">45 francs</measure> au titre du secours d'hospice.</p>
        <p>№ 51 — <persName role="patient"><surname>Giraud</surname>, <forename>Alexandre</forename></persName>. Né le <date when="1885-11-04">4 Novembre 1885</date>. Enregistré le <date when="1915-01-17">17 Janvier</date>.</p>
        <note place="margin" resp="#dr-ladame">Visé : Dr. Ladame, médecin adjoint</note>
      </div>
    </body>
  </text>
</TEI>`
  },
  '185': {
    id: '185',
    folioNumber: '185',
    label: 'p. 185',
    shelfmark: 'Cote : CH-AEG-Bel-Air-1907-1916 / Fol. 185r',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrW0dNcjB_jODph88SnmNG5wbQQqV08oJWPU9aHSCat7x5EByw5iwt42vUxeylktXdrYQ1_w16zM6xIgHh31LphZTW5V6aFfRtzLUUhKbZwBS1xpS4qjIsPiZUHavGZh0DspZ1uA0fTLuqP2o5XJr5p28WOdyyvNMl96vJ6SFA1TgSlbSpKRzLBPmRWs8M3ESe9-sdjUNw1nnYBPNGJ42l3KhdRQ5dzltR8rBYPZaLPzPKElNsTiR5Lw',
    caption: 'Feuillet 185r : Clôture de quinzaine, paraphes des commissaires et tableau récapitulatif des entrées et sorties.',
    annotationZone: {
      label: 'zone-l.52 : Signatures des commissaires délégués',
      top: '62%',
      left: '25%',
      width: '65%',
      height: '18%'
    },
    diplomaticContent: {
      pageBreak: '<pb n="185" facs="#ms-belair-f185r"/>',
      head: "CLÔTURE DE LA QUINZAINE — ÉTAT DES SORTIES ET MUTATIONS",
      subhead: "Procès-verbal d'inspection contradictoire par les délégués cantonaux",
      dateSpan: "19 au 20 Janvier 1915",
      entries: [
        {
          number: '№ 52',
          type: 'discharge',
          patientName: 'Borel, Charles Édouard',
          surname: 'Borel',
          forename: 'Charles Édouard',
          birthDate: 'neuf Septembre mil huit cent soixante-douze',
          regDate: 'dix-neuf Janvier',
          authority: 'Commission administrative',
          clinicalNote: 'Sortie définitive sur avis médical motivé constatant la guérison clinique.'
        }
      ],
      apparatNotes: `<app>\n  <lem>guérison clinique</lem>\n  <rdg wit="#ms-draft">rétablissement notoire</rdg>\n</app>`
    },
    normalizedContent: {
      title: 'Clôture de la quinzaine et sorties du 19-20 janvier 1915',
      description: 'Folio 185 : Récapitulation bimensuelle des effectifs hospitaliers et visas officiels de sortie.',
      entries: [
        {
          actNumber: 'Acte 52.',
          text: "Charles Édouard Borel, né le 9 septembre 1872. Autorisation formelle de sortie définitive le 19 janvier 1915, validée à l'unanimité des commissaires présents."
        }
      ]
    },
    xmlSource: `<TEI xmlns="http://www.tei-c.org/ns/1.0">
  <text>
    <body>
      <pb n="185" facs="#ms-belair-f185r"/>
      <div type="deliberation" n="1915-01-19">
        <head>CLÔTURE DE LA QUINZAINE — ÉTAT DES SORTIES ET MUTATIONS</head>
        <p>№ 52 — <persName role="patient"><surname>Borel</surname>, <forename>Charles Édouard</forename></persName>. Né le <date when="1872-09-09">9 Septembre 1872</date>. Décharge et sortie autorisée le <date when="1915-01-19">19 Janvier 1915</date>.</p>
        <closer>
          <signed>Les Membres de la Commission : E. Martin, L. Dupraz, Dr. P. Reverdin</signed>
        </closer>
      </div>
    </body>
  </text>
</TEI>`
  }
};

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
        description: 'Balisage fin de documents manuscrits : apparat critique (<app>, <rdg>), marginalia, entités nommées et normalisation chronologique.'
      },
      {
        name: 'ODD Roma & Personnalisation',
        level: 'Production',
        badge: 'RNG / DTD',
        description: 'Écriture de schémas TEI sur mesure (« One Document Does it all »), exclusion de modules non pertinents et contraintes de sous-arborescences.'
      },
      {
        name: 'Schematron (Règles ISO)',
        level: 'Validation',
        badge: 'Validation',
        description: 'Règles assert/report pour forcer les attributs @when conformes ISO 8601 et la concordance des identifiants autorité.'
      },
      {
        name: 'XPath / XSLT',
        level: 'Transformation',
        badge: 'Transformation',
        description: 'Pipelines d’extraction d’index prosopographiques, génération HTML5 dynamique et conversion vers formats de diffusion.'
      }
    ]
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
        description: 'Découpage polygonal des lignes de texte manuscrit, masquage des annotations et gestion des transcripteurs.'
      },
      {
        name: 'Kraken (Modèles Deep Learning)',
        level: 'Modélisation',
        badge: 'Entraînement',
        description: 'Entraînement de modèles de transcription neuronale (CER < 4.8%) adaptés aux cursives francophones du XXᵉ siècle.'
      },
      {
        name: 'Transkribus',
        level: 'Collation',
        badge: 'Collation',
        description: 'Reconnaissance assistée, alignement texte-image et exportation au format PAGE-XML / ALTO.'
      },
      {
        name: 'Standard IIIF (Mirador/Cantaloupe)',
        level: 'Diffusion',
        badge: 'Diffusion HD',
        description: 'Création de manifestes IIIF Image & Presentation v3, interopérabilité des serveurs d’images patrimoniales.'
      }
    ]
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
        description: 'Reconnaissance d’entités nommées biomédicales, extraction de matrices de cooccurrences et calculs lexicométriques.'
      },
      {
        name: 'Git / GitHub Pages',
        level: 'DevOps',
        badge: 'CI/CD & Version',
        description: 'Gestion de versions distribuée pour les sources XML, pipelines d’intégration continue (GitHub Actions) pour la validation Schematron.'
      },
      {
        name: 'HTML5, Modern CSS, JS',
        level: 'Frontend',
        badge: 'Interfaces',
        description: 'Développement d’interfaces synoptiques pour l’édition critique, design responsive et typographie soignée.'
      },
      {
        name: 'Bases relationnelles (SQL / SQLite)',
        level: 'Modélisation',
        badge: 'Modélisation',
        description: 'Schémas relationnels de prosopographie historique, tables de concordances et requêtage relationnel.'
      }
    ]
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
        description: 'Findable, Accessible, Interoperable, Reusable : dépôt pérenne avec identifiants persistants (DOI, Zenodo).'
      },
      {
        name: "Droit d'auteur & Archives médicales",
        level: 'Droit',
        badge: 'Déontologie',
        description: 'Respect des délais de communicabilité des dossiers médicaux asilaires et anonymisation éthique des données sensibles.'
      },
      {
        name: 'Métadonnées Dublin Core / CIDOC',
        level: 'Interopérabilité',
        badge: 'Interdépôt',
        description: 'Indexation standardisée des fonds d’archives, mapping sémantique vers CIDOC-CRM pour les graphes de connaissances.'
      },
      {
        name: 'Gestion de projet (Agile / Sprint)',
        level: 'Méthodologie',
        badge: 'Gestion',
        description: 'Planification itérative de la chaîne de numérisation, gestion d’équipe de transcripteurs et rétro-ingénierie documentaire.'
      }
    ]
  }
];

export const ODD_RULES_DOCUMENTATION = {
  title: "Spécification ODD Roma — Projet Bel-Air (1907-1916)",
  schemaFile: "tei_belair_odd.xml",
  validationEngine: "Jing / Schematron ISO",
  modules: [
    { name: "core", desc: "Éléments textuels de base : p, head, date, persName, orgName, note, add, del." },
    { name: "header", desc: "Métadonnées catalographiques : teiHeader, fileDesc, publicationStmt, sourceDesc." },
    { name: "transcr", desc: "Transcription fac-similaire et apparat critique : pb, lb, fw, metamark, subst." },
    { name: "namesdates", desc: "Entités nommées spécialisées : persName (attribut @role), placeName, orgName." }
  ],
  constraints: [
    {
      rule: "Attribut @when sur les balises <date>",
      desc: "Chaque balise <date> de délibération doit obligatoirement comporter un attribut @when normalisé selon le standard ISO 8601 (YYYY-MM-DD)."
    },
    {
      rule: "Typologie des entrées <div type='deliberation'>",
      desc: "Chaque séance est enclose dans une division typée avec un identifiant unique @xml:id suivant le format 'delib-YYYY-MM-DD-N'."
    },
    {
      rule: "Règles d'apparat critique <app>",
      desc: "Tout lemme contesté ou abréviation cursivée doit comporter un <lem> diplomatique et un <rdg> normalisé avec attribut @wit."
    }
  ]
};
