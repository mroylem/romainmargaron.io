import React, { useState } from 'react';
import { GALLERY_PLATES } from '../data/portfolioData';
import { GalleryPlate } from '../types';

interface ResearchThesisSectionProps {
  onOpenLightbox: (plate: GalleryPlate) => void;
  onOpenMethodologyModal: (phaseIndex: number) => void;
}

export const ResearchThesisSection: React.FC<ResearchThesisSectionProps> = ({
  onOpenLightbox,
  onOpenMethodologyModal,
}) => {
  const [activePlate, setActivePlate] = useState<GalleryPlate>(GALLERY_PLATES[0]);

  return (
    <section
      id="memoire-de-recherche"
      className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-20 flex flex-col gap-12"
    >
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-[#7A2021] font-bold tracking-wider">
            [PROJET MAJEUR 01]
          </span>
          <div className="h-px bg-[#E2DACD] flex-1"></div>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#5b070e] font-medium tracking-tight leading-tight">
          Mémoire de Recherche : Analyse et Traitement Numérique des Archives Hospitalières et Administratives
        </h2>
        <p className="text-[17px] text-[#64748B] max-w-3xl leading-relaxed">
          Modélisation épistémologique et instrumentation computationnelle d'un registre asilaire du début du XXᵉ siècle.
        </p>
      </div>

      {/* Main Grid: Workstation Image & Scientific Stakes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Workstation Image */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div
            onClick={() =>
              onOpenLightbox({
                id: 'workstation',
                number: '00',
                category: 'Laboratoire',
                title: "Poste d'investigation philologique & chaîne HTR",
                filename: 'lab-workstation-unine.jpg',
                tag: 'Environnement de Recherche',
                description: "Environnement matériel et logiciel de confrontation paléographique. Double écran pour l'alignement HTR sur eScriptorium, moniteur de seuillage colorimétrique et consultation du registre papier original.",
                meta: 'Laboratoire d’histoire et humanités numériques (UNINE/UNIGE)',
                imageUrl:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuCJS-592JtGNa1fXCGe3ELaVJeuKl4Y3WjF7GSuGrnbdiL5kSVfrKuOU7Zf9VvH3NUWjJ6on9NepJxaxrNBU9cXYnA8szs57rdc35ch4POy40xoqaTbS3YTZx4b3KbU-0yvrILbefbizlg4NCrV51j2N81O6HKt55xA97aOYvCvo2-yTpm4eWb5tGRbqAO95OxYpEMYRgRqW9jIsxS24Z5-WngIgoJrM5lOTAa0Y-tpe61L15vAZ3ynmw',
              })
            }
            className="relative w-full h-[380px] sm:h-[420px] rounded overflow-hidden border border-[#E2DACD] shadow-xs group bg-[#F4EFEB] cursor-pointer"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJS-592JtGNa1fXCGe3ELaVJeuKl4Y3WjF7GSuGrnbdiL5kSVfrKuOU7Zf9VvH3NUWjJ6on9NepJxaxrNBU9cXYnA8szs57rdc35ch4POy40xoqaTbS3YTZx4b3KbU-0yvrILbefbizlg4NCrV51j2N81O6HKt55xA97aOYvCvo2-yTpm4eWb5tGRbqAO95OxYpEMYRgRqW9jIsxS24Z5-WngIgoJrM5lOTAa0Y-tpe61L15vAZ3ynmw"
              alt="Environnement de recherche, manuscrit d'archives et poste de travail numérique"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E232A]/85 via-[#1E232A]/25 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-[12px] uppercase tracking-wider text-[#C29B38] font-semibold">
                Poste d'investigation philologique
              </span>
              <p className="font-serif text-xl sm:text-2xl font-medium mt-1">
                Collation critique, confrontation paléographique et modèles HTR
              </p>
            </div>
            <div className="absolute top-3 right-3 bg-[#1E232A]/70 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-[18px]">zoom_in</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[#64748B] text-[13px] px-1">
            <span>Figure 1.1 — Corpus asilaire et chaîne de traitement informatisée (UNINE/UNIGE).</span>
            <span className="font-mono text-[12px] text-[#7A2021] font-medium">Fonds Bel-Air (1907-1916)</span>
          </div>
        </div>

        {/* Scientific Stakes Box */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#F4EFEB] p-6 lg:p-8 rounded border border-[#E2DACD] shadow-xs gap-5">
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl text-[#5b070e] font-semibold border-b border-[#E2DACD] pb-2">
              Problématique &amp; Apports Scientifiques
            </h3>
            <p className="text-[16px] text-[#334155] leading-relaxed">
              Ce travail interroge l'opacité et la sémantisation des délibérations de la Commission Administrative asilaire. Comment passer d'un manuscrit cursif complexe, marqué par des typologies hétérogènes (biffures, cachets d'état civil, ajouts marginaux), à un corpus FAIR interrogeable ?
            </p>
            <div className="flex flex-col gap-2.5 pt-2">
              <div className="flex items-start gap-2.5 text-[#1E232A] text-[14px]">
                <span className="material-symbols-outlined text-[#7A2021] text-[18px] shrink-0 mt-0.5">check_circle</span>
                <span>
                  <strong>Corpus :</strong> Registres manuscrits in-folio (1907-1916), plus de 450 séances colligées.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-[#1E232A] text-[14px]">
                <span className="material-symbols-outlined text-[#7A2021] text-[18px] shrink-0 mt-0.5">check_circle</span>
                <span>
                  <strong>Hypothèse :</strong> L'alignement HTR-TEI lève les biais de transcription manuelle et objective l'évolution sociologique des internements.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-[#1E232A] text-[14px]">
                <span className="material-symbols-outlined text-[#7A2021] text-[18px] shrink-0 mt-0.5">check_circle</span>
                <span>
                  <strong>Histoire institutionnelle :</strong> Cartographie des réseaux médicaux et administratifs genevois du tournant du siècle.
                </span>
              </div>
            </div>
          </div>
          <div className="p-3 bg-[#FAF8F5] rounded border border-[#E2DACD] flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-[#64748B] font-semibold">
              Direction de recherche
            </span>
            <span className="text-[13px] font-semibold text-[#4A2E12]">
              Professeurs récurrents UNIGE / UNINE
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Gallery */}
      <div className="flex flex-col gap-4 bg-[#F4EFEB] p-6 lg:p-8 rounded border border-[#E2DACD] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2DACD] pb-3">
          <div>
            <span className="text-[13px] uppercase tracking-wider text-[#7A2021] font-semibold">
              Dossier Iconographique &amp; Visualisations
            </span>
            <h4 className="font-serif text-2xl text-[#1E232A] font-medium">
              Sélection de planches d'analyse documentaire
            </h4>
          </div>
          <span className="text-[12px] text-[#64748B]">Cliquer sur une vignette pour afficher l'aperçu agrandi</span>
        </div>

        {/* Large Preview */}
        <div className="relative w-full rounded overflow-hidden border border-[#E2DACD] bg-[#FAF8F5] p-5 sm:p-6">
          <div className="w-full flex flex-col md:flex-row items-center gap-6">
            <div
              onClick={() => onOpenLightbox(activePlate)}
              className="w-full md:w-1/2 h-64 sm:h-80 rounded overflow-hidden relative cursor-pointer group border border-[#E2DACD]/80 bg-[#F4EFEB]"
            >
              <img
                src={activePlate.imageUrl}
                alt={activePlate.title}
                className="w-full h-full object-cover rounded transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 text-[#1E232A] px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-1 shadow">
                  <span className="material-symbols-outlined text-[16px]">zoom_in</span> Agrandir
                </span>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center gap-3">
              <span className="text-[11px] uppercase tracking-widest px-2.5 py-1 rounded bg-[#5b070e]/10 text-[#5b070e] font-semibold w-fit">
                {activePlate.tag}
              </span>
              <h5 className="font-serif text-2xl sm:text-3xl text-[#5b070e] font-semibold">
                {activePlate.title}
              </h5>
              <p className="text-[15px] sm:text-[16px] text-[#334155] leading-relaxed">
                {activePlate.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-[#64748B] font-mono text-[13px] pt-2 border-t border-[#E2DACD]/60">
                <span>{activePlate.meta}</span>
                <button
                  onClick={() => onOpenLightbox(activePlate)}
                  className="text-[#7A2021] hover:underline font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">open_in_full</span> Plein écran
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          {GALLERY_PLATES.map((plate) => {
            const isActive = activePlate.id === plate.id;
            return (
              <button
                key={plate.id}
                onClick={() => setActivePlate(plate)}
                type="button"
                className={`text-left p-3.5 rounded bg-[#FAF8F5] transition-all flex flex-col gap-1.5 hover:bg-[#F4EFEB] cursor-pointer ${
                  isActive
                    ? 'border-2 border-[#7A2021] shadow-xs'
                    : 'border border-[#E2DACD] opacity-85 hover:opacity-100'
                }`}
              >
                <span
                  className={`text-[12px] font-semibold uppercase ${
                    isActive ? 'text-[#7A2021]' : 'text-[#64748B]'
                  }`}
                >
                  {plate.number}. {plate.category}
                </span>
                <span className="text-[14px] text-[#1E232A] font-medium truncate">
                  {plate.title}
                </span>
                <span className="font-mono text-[11px] text-[#64748B] truncate">
                  {plate.filename}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4-Step Methodology Protocol */}
      <div id="methodologie" className="flex flex-col gap-6 pt-4 scroll-mt-24">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] uppercase tracking-wider text-[#7A2021] font-semibold">
            Chaîne opératoire rigoureuse
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#5b070e] font-semibold">
            Protocole Méthodologique en 4 Étapes
          </h3>
          <p className="text-[16px] text-[#64748B] max-w-3xl">
            De la conservation matérielle à l'exploitation computationnelle, conformité aux principes FAIR et aux standards TEI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Phase 01 */}
          <div
            onClick={() => onOpenMethodologyModal(0)}
            className="flex flex-col bg-[#F4EFEB] p-6 rounded border border-[#E2DACD] shadow-xs relative overflow-hidden group hover:border-[#C29B38] transition-all cursor-pointer hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DACD]">
              <span className="font-mono text-sm font-bold text-[#7A2021]">PHASE 01</span>
              <span className="material-symbols-outlined text-[#7A2021] text-[24px]">photo_camera</span>
            </div>
            <h4 className="font-serif text-xl text-[#1E232A] font-semibold mt-3">
              Numérisation &amp; Prétraitement
            </h4>
            <p className="text-[14px] text-[#334155] mt-2 leading-relaxed">
              Captures haute résolution (format TIFF 600 DPI non compressé), calibration colorimétrique, binarisation adaptative sous Python (OpenCV) et redressement géométrique des feuillets.
            </p>
            <div className="mt-4 pt-3 border-t border-[#E2DACD]/60 flex items-center justify-between text-[#64748B] text-[12px]">
              <span>IIIF Image API</span>
              <span className="font-mono">TIFF uncompressed</span>
            </div>
          </div>

          {/* Phase 02 */}
          <div
            onClick={() => onOpenMethodologyModal(1)}
            className="flex flex-col bg-[#F4EFEB] p-6 rounded border border-[#E2DACD] shadow-xs relative overflow-hidden group hover:border-[#C29B38] transition-all cursor-pointer hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DACD]">
              <span className="font-mono text-sm font-bold text-[#7A2021]">PHASE 02</span>
              <span className="material-symbols-outlined text-[#7A2021] text-[24px]">neurology</span>
            </div>
            <h4 className="font-serif text-xl text-[#1E232A] font-semibold mt-3">
              HTR &amp; Alignement Textuel
            </h4>
            <p className="text-[14px] text-[#334155] mt-2 leading-relaxed">
              Segmentation automatique des lignes et masquage polygonal via la plateforme <strong>eScriptorium</strong>. Entraînement de modèles spécialisés <strong>Kraken</strong> (CER &lt; 4.8%) et réalignement verba-ad-verbum.
            </p>
            <div className="mt-4 pt-3 border-t border-[#E2DACD]/60 flex items-center justify-between text-[#64748B] text-[12px]">
              <span>Kraken engine</span>
              <span className="font-mono">CER 4.8%</span>
            </div>
          </div>

          {/* Phase 03 */}
          <div
            onClick={() => onOpenMethodologyModal(2)}
            className="flex flex-col bg-[#F4EFEB] p-6 rounded border border-[#E2DACD] shadow-xs relative overflow-hidden group hover:border-[#C29B38] transition-all cursor-pointer hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DACD]">
              <span className="font-mono text-sm font-bold text-[#7A2021]">PHASE 03</span>
              <span className="material-symbols-outlined text-[#7A2021] text-[24px]">data_object</span>
            </div>
            <h4 className="font-serif text-xl text-[#1E232A] font-semibold mt-3">
              Normalisation NER &amp; Indexation
            </h4>
            <p className="text-[14px] text-[#334155] mt-2 leading-relaxed">
              Reconnaissance automatique et manuelle des entités nommées (anthroponymes, toponymes, pathologies). Encodage balisé en TEI XML, validation Schematron stricte et réconciliation VIAF/GND.
            </p>
            <div className="mt-4 pt-3 border-t border-[#E2DACD]/60 flex items-center justify-between text-[#64748B] text-[12px]">
              <span>TEI P5 / ODD</span>
              <span className="font-mono">Schematron ISO</span>
            </div>
          </div>

          {/* Phase 04 */}
          <div
            onClick={() => onOpenMethodologyModal(3)}
            className="flex flex-col bg-[#F4EFEB] p-6 rounded border border-[#E2DACD] shadow-xs relative overflow-hidden group hover:border-[#C29B38] transition-all cursor-pointer hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DACD]">
              <span className="font-mono text-sm font-bold text-[#7A2021]">PHASE 04</span>
              <span className="material-symbols-outlined text-[#7A2021] text-[24px]">share</span>
            </div>
            <h4 className="font-serif text-xl text-[#1E232A] font-semibold mt-3">
              Analyse Quantitative &amp; Open Science
            </h4>
            <p className="text-[14px] text-[#334155] mt-2 leading-relaxed">
              Exploitation textométrique, sérialisation spatio-temporelle des délibérations, dépôt institutionnel pérenne sur GitHub, Zenodo et publication web conforme aux principes FAIR.
            </p>
            <div className="mt-4 pt-3 border-t border-[#E2DACD]/60 flex items-center justify-between text-[#64748B] text-[12px]">
              <span>FAIR Data</span>
              <span className="font-mono">CC-BY 4.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
