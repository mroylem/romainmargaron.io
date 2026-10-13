import React, { useState } from 'react';

interface MethodologyModalProps {
  isOpen: boolean;
  initialPhaseIndex: number;
  onClose: () => void;
}

const PHASES = [
  {
    phase: 'PHASE 01',
    title: 'Numérisation & Prétraitement',
    icon: 'photo_camera',
    techTag: 'IIIF Image API • TIFF uncompressed',
    lead: 'Captures haute résolution (format TIFF 600 DPI non compressé), calibration colorimétrique, binarisation adaptative sous Python (OpenCV) et redressement géométrique des feuillets.',
    details: [
      'Numérisation réalisée sur scanner à plat professionnel pour préserver la reliure du registre in-folio.',
      'Calibration colorimétrique avec mire ColorChecker pour compenser l’altération des encres ferro-galliques séculaires.',
      'Pipeline de redressement géométrique automatique (détection des bords sous OpenCV) et correction d’inclinaison.',
      'Exportation vers le standard IIIF Image API v3 pour affichage fluide sans perte d’information spectrale.'
    ]
  },
  {
    phase: 'PHASE 02',
    title: 'HTR & Alignement Textuel',
    icon: 'neurology',
    techTag: 'Kraken engine • CER 4.8%',
    lead: 'Segmentation automatique des lignes et masquage polygonal via la plateforme eScriptorium. Entraînement de modèles spécialisés Kraken (CER < 4.8%) et réalignement verba-ad-verbum.',
    details: [
      'Importation des feuillets dans eScriptorium (développé par Inria/EPHE) pour la segmentation manuelle et assistée.',
      'Génération de masques polygonaux pour isoler les gloses marginales et les cachets administratifs hors du flux textuel principal.',
      'Entraînement de modèles neuronaux convolutionnels-récurrents (CRNN) sous Kraken avec validation croisée.',
      'Post-correction assistée par dictionnaire historique français du début du XXᵉ siècle.'
    ]
  },
  {
    phase: 'PHASE 03',
    title: 'Normalisation NER & Indexation',
    icon: 'data_object',
    techTag: 'TEI P5 / ODD • Schematron ISO',
    lead: 'Reconnaissance automatique et manuelle des entités nommées (anthroponymes, toponymes, pathologies). Encodage balisé en TEI XML, validation Schematron stricte et réconciliation VIAF/GND.',
    details: [
      'Application d’un modèle spaCy fine-tuné sur les sources archivistiques asilaires pour la détection préliminaire des entités.',
      'Encodage sémantique systématique sous balises TEI <persName>, <orgName>, <placeName> avec rôles contextuels.',
      'Définition d’une spécification ODD Roma propre au corpus Bel-Air (suppression des modules non nécessaires).',
      'Écriture de règles Schematron pour vérifier la concordance des dates et la présence d’identifiants pérennes.'
    ]
  },
  {
    phase: 'PHASE 04',
    title: 'Analyse Quantitative & Open Science',
    icon: 'share',
    techTag: 'FAIR Data • CC-BY 4.0',
    lead: 'Exploitation textométrique, sérialisation spatio-temporelle des délibérations, dépôt institutionnel pérenne sur GitHub, Zenodo et publication web conforme aux principes FAIR.',
    details: [
      'Analyses lexicométriques et factorielles des correspondances (AFC) pour détecter les évolutions du vocabulaire asilaire.',
      'Structuration d’une base relationnelle et graphe de connaissances CIDOC-CRM pour les trajectoires de patients.',
      'Publication du corpus complet sous licence libre Creative Commons CC-BY 4.0 avec DOI attribué.',
      'Garantie du respect des délais légaux de communicabilité des archives médicales et des recommandations éthiques suisses.'
    ]
  }
];

export const MethodologyModal: React.FC<MethodologyModalProps> = ({
  isOpen,
  initialPhaseIndex,
  onClose,
}) => {
  const [activeIdx, setActiveIdx] = useState(initialPhaseIndex);

  if (!isOpen) return null;

  const current = PHASES[activeIdx] || PHASES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-[#FAF8F5] border border-[#E2DACD] rounded-lg max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-[#F4EFEB] border-b border-[#E2DACD]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#7A2021] text-[24px]">architecture</span>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#5b070e] font-semibold">
                Protocole Méthodologique Détaillé
              </h3>
              <p className="text-xs text-[#64748B]">Chaîne de traitement numérique de bout en bout</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded hover:bg-[#FAF8F5] text-[#64748B] hover:text-[#1E232A] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Phase Tabs */}
        <div className="grid grid-cols-4 border-b border-[#E2DACD] bg-[#F4EFEB]/50">
          {PHASES.map((p, idx) => (
            <button
              key={p.phase}
              onClick={() => setActiveIdx(idx)}
              className={`py-3 px-2 text-center text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer border-b-2 ${
                activeIdx === idx
                  ? 'border-[#7A2021] text-[#7A2021] bg-[#FAF8F5]'
                  : 'border-transparent text-[#64748B] hover:text-[#1E232A]'
              }`}
            >
              {p.phase}
            </button>
          ))}
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-[#1E232A]">
          <div className="flex items-start justify-between gap-3 border-b border-[#E2DACD] pb-3">
            <div>
              <span className="font-mono text-xs font-bold text-[#7A2021]">{current.phase}</span>
              <h4 className="font-serif text-2xl font-bold text-[#5b070e] mt-0.5">{current.title}</h4>
            </div>
            <span className="text-xs font-mono px-2 py-1 rounded bg-[#C29B38]/20 text-[#4A2E12] font-semibold shrink-0">
              {current.techTag}
            </span>
          </div>

          <p className="text-sm font-medium text-[#334155] leading-relaxed bg-[#F4EFEB] p-3.5 rounded border border-[#E2DACD]">
            {current.lead}
          </p>

          <div className="space-y-3">
            <span className="text-xs uppercase font-bold text-[#4A2E12] tracking-wider">
              Opérations techniques clés :
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#334155]">
              {current.details.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#7A2021] text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F4EFEB] border-t border-[#E2DACD] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveIdx((prev) => Math.max(prev - 1, 0))}
              disabled={activeIdx === 0}
              className="px-3 py-1.5 rounded border border-[#E2DACD] text-xs font-semibold uppercase disabled:opacity-30 cursor-pointer"
            >
              Précédent
            </button>
            <button
              onClick={() => setActiveIdx((prev) => Math.min(prev + 1, PHASES.length - 1))}
              disabled={activeIdx === PHASES.length - 1}
              className="px-3 py-1.5 rounded border border-[#E2DACD] text-xs font-semibold uppercase disabled:opacity-30 cursor-pointer"
            >
              Suivant
            </button>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#7A2021] text-white text-xs font-semibold uppercase cursor-pointer hover:bg-[#5b070e]"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
