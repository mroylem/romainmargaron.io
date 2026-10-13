import React, { useState } from 'react';

interface MethodologyModalProps {
  isOpen: boolean;
  initialPhaseIndex: number;
  onClose: () => void;
}

// Each detail can be a string or a JSX element for inline code formatting
const PHASES: {
  phase: string;
  title: string;
  icon: string;
  lead: string;
  details: React.ReactNode[];
}[] = [
    {
      phase: 'PHASE 01',
      title: 'Collecte et Acquisition des données',
      icon: 'database',
      lead: "Plus de 240 000 archives photographiques recensées pour constituer le corpus d'étude. Deux approches complémentaires : inventaires réalisés aux AEN et au Laténium, couplés à un moissonnage numérique (web scraping) pour la BPuN.",
      details: [
        "Inventaire physique réalisé aux Archives de l'État de Neuchâtel (AEN) : dépouillement systématique des fonds photographiques, relevé des cotes et des métadonnées descriptives.",
        "Inventaire au Laténium (Parc et musée d'archéologie de Neuchâtel) : recensement des diapositives et des photographies documentant les sites archéologiques cantonaux.",
        <span key="rvest">Moissonnage numérique (web scraping) depuis le catalogue Flora de la Bibliothèque de Neuchâtel (BPuN) à l'aide du package <code className="font-mono bg-[#E2DACD] px-1 rounded text-[#5b070e]">rvest</code> sous R.</span>,
        "Constitution de trois jeux de données distincts, couvrant au total plus de 240 000 références documentaires à exploiter.",
      ],
    },
    {
      phase: 'PHASE 02',
      title: 'Curation et Normalisation (Data Cleaning)',
      icon: 'cleaning_services',
      lead: "Nettoyage des données sous R : harmonisation des typologies de supports avec stringr et géocodage spatial des communes historiques afin d'obtenir des jeux de données propres et utilisables.",
      details: [
        <span key="stringr">Harmonisation des typologies de supports photographiques (négatifs, diapositives, tirages) avec le package <code className="font-mono bg-[#E2DACD] px-1 rounded text-[#5b070e]">stringr</code> : standardisation des intitulés, correction des coquilles et unification des nomenclatures.</span>,
        <span key="geocoder">Géocodage spatial des communes historiques neuchâteloises avec appariement aux référentiels géographiques officiels (swisstopo) via <code className="font-mono bg-[#E2DACD] px-1 rounded text-[#5b070e]">tidygeocoder</code>.</span>,
        "Détection et suppression des doublons inter-inventaires par recoupement sur les identifiants de cote et les métadonnées descriptives.",
        "Exportation de trois tables normalisées (AEN, BPuN, LAT) au format CSV, prêtes pour l'étape de modélisation statistique.",
      ],
    },
    {
      phase: 'PHASE 03',
      title: 'Structuration et Modélisation statistique',
      icon: 'analytics',
      lead: "Agrégation et calcul des variables clés (volumes, dates médianes, indices de diversité matérielle, matrices spatiales par krigeage) à l'aide des packages dplyr, tidyr, sf et gstat.",
      details: [
        <span key="dplyr">Agrégation des volumes documentaires et calcul des dates médianes par fonds avec <code className="font-mono bg-[#E2DACD] px-1 rounded text-[#5b070e]">dplyr</code> et <code className="font-mono bg-[#E2DACD] px-1 rounded text-[#5b070e]">tidyr</code> : production des variables synthétiques nécessaires aux visualisations temporelles.</span>,
        <span key="diversite">Calcul des indices de diversité matérielle (richesse typologique, entropie de Shannon) pour chaque fonds, opérationnalisés sous <code className="font-mono bg-[#E2DACD] px-1 rounded text-[#5b070e]">dplyr</code>.</span>,
        <span key="spatial">Modélisation spatiale par krigeage des densités de sites archéologiques (LAT) : construction des matrices de variogrammes et interpolation IDW avec <code className="font-mono bg-[#E2DACD] px-1 rounded text-[#5b070e]">sf</code> et <code className="font-mono bg-[#E2DACD] px-1 rounded text-[#5b070e]">gstat</code>.</span>,
        "Structuration hiérarchique des numéros d'inventaire du Laténium pour la production du dendrogramme et du treemap.",
      ],
    },
    {
      phase: 'PHASE 04',
      title: 'Conception graphique & Restitution',
      icon: 'bar_chart',
      lead: "Génération des visualisations avec ggplot2 selon les principes d'excellence graphique d'Edward Tufte (data-ink ratio, minimalisme visuel). Les représentations servent à la fois l'aide à la décision interne et la médiation culturelle.",
      details: [
        <span key="ggplot2">Production de l'ensemble des visualisations sous <code className="font-mono bg-[#E2DACD] px-1 rounded text-[#5b070e]">ggplot2</code> : frises chronologiques, circle packings, scatter plots, cartographies, dendrogrammes, treemaps et diagrammes en barres.</span>,
        "Application systématique des principes d'Edward Tufte : maximisation du data-ink ratio, suppression des chartjunk, typographie sobre et lisible.",
        "Double destination des visualisations : instruments d'aide à la décision pour les équipes de conservation, et supports de médiation culturelle pour le public des institutions.",
        <span key="tufte" className="italic text-[#64748B]">TUFTE, Edward R. <em>The visual display of quantitative information.</em> Cheshire, Graphics press, Second edition, 2001. ISBN 978-0-9613921-4-7</span>,
      ],
    },
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
                Méthodologie
              </h3>
              <p className="text-xs text-[#64748B]">Les 4 étapes pour la création d'une datavisualisation</p>
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
              className={`py-3 px-2 text-center text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer border-b-2 ${activeIdx === idx
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
          <div className="flex items-start gap-3 border-b border-[#E2DACD] pb-3">
            <div>
              <span className="font-mono text-xs font-bold text-[#7A2021]">{current.phase}</span>
              <h4 className="font-serif text-2xl font-bold text-[#5b070e] mt-0.5">{current.title}</h4>
            </div>
          </div>

          <p className="text-sm font-medium text-[#334155] leading-relaxed bg-[#F4EFEB] p-3.5 rounded border border-[#E2DACD]">
            {current.lead}
          </p>

          <div className="space-y-3">
            <span className="text-xs uppercase font-bold text-[#4A2E12] tracking-wider">
              Opérations clés :
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
