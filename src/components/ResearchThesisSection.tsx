import React, { useState } from 'react';
import { GALLERY_PLATES } from '../data/portfolioData';
import { GalleryPlate } from '../types';

interface ResearchThesisSectionProps {
  onOpenLightbox: (plate: GalleryPlate) => void;
}

export const ResearchThesisSection: React.FC<ResearchThesisSectionProps> = ({
  onOpenLightbox
}) => {
  const [activePlate, setActivePlate] = useState<GalleryPlate>(GALLERY_PLATES[0]);

  return (
    <section
      id="memoire-de-recherche"
      className="w-full max-w-[1376px] mx-auto px-6 lg:px-12 py-14 lg:py-20 flex flex-col gap-12"
    >
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="text-[11px] px-2 py-0.5 rounded bg-[#C29B38]/20 text-[#4A2E12] font-semibold uppercase tracking-wider">
              Mémoire de Master
            </span>
            <div className="h-px bg-[#E2DACD] flex-1"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#5b070e] font-medium tracking-tight leading-tight">
            Valoriser les archives photographiques par la datavisualisation : potentiel d’un outil de médiation dans trois institutions patrimoniales neuchâteloises.
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <p className="text-[17px] text-[#64748B] leading-relaxed max-w-4xl">
            Ce projet de recherche étudie le potentiel de la datavisualisation appliquée à la gestion, la valorisation et la médiation des archives photographiques.
            Nous nous sommes interrogés sur la manière dont ces outils de visualisation de données peuvent devenir des instruments d’aide à la décision ou de médiation pour les archivistes.
            <br />Afin de répondre à cette question, un corpus de plus de 240 000 archives photographiques a été réuni et traité à l’aide du langage R.
          </p>
          <div className="shrink-0">
            <a
              href="https://github.com/mroylem/valorisation_fonds_photos_via_datavisualisation"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#7A2021] hover:bg-[#5b070e] text-white text-[13px] font-semibold uppercase tracking-wider py-3 px-5 rounded shadow transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              <span>Dépôt GitHub du Mémoire</span>
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Workstation Image & Scientific Stakes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Workstation Image */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div
            className="relative w-full h-[380px] sm:h-[420px] rounded overflow-hidden border border-[#E2DACD] shadow-xs group bg-[#F4EFEB]"
          >
            <img
              src="./assets/img/memoire.webp"
              alt="Environnement de recherche, manuscrit d'archives et poste de travail numérique"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E232A]/85 via-[#1E232A]/25 to-transparent flex flex-col justify-end text-white">
              <div className="bg-black/50 p-6">
                <span className="text-[12px] uppercase tracking-wider text-[#C29B38] font-semibold">
                  Extrait de la conclusion du mémoire de Master
                </span>
                <p className="font-serif text-xl sm:text-2xl font-medium mt-1">
                  « La datavisualisation est autant un outil de valorisation, de médiation que de communication pour les institutions patrimoniales. Elle offre une vue d'ensemble adaptée au besoin de ses usagers. »
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[#64748B] text-[13px] px-1">
            <span>Figure 1. Photographie prise lors de la réalisation de mon Mémoire de Master.</span>
          </div>
          <div className="flex flex-col gap-2.5 pt-2">
            <div className="flex items-start gap-2.5 text-[#1E232A] text-[14px]">
              <span className="material-symbols-outlined text-[#7A2021] text-[18px] shrink-0 mt-0.5">check_circle</span>
              <span>
                <strong>Corpus :</strong> Plus de 240 000 archives photographiques recensées au travers de 3 insitutions patrimoniales neuchâteloises
              </span>
            </div>
            <div className="flex items-start gap-2.5 text-[#1E232A] text-[14px]">
              <span className="material-symbols-outlined text-[#7A2021] text-[18px] shrink-0 mt-0.5">check_circle</span>
              <span>
                <strong>Insitutions patrimoniales neuchâteloises :</strong> Archives de l'État de Neuchâtel (AEN), Laténium (Musée d'archéologie), Bibliothèque publique de Neuchâtel (BPuN)
              </span>
            </div>
            <div className="flex items-start gap-2.5 text-[#1E232A] text-[14px]">
              <span className="material-symbols-outlined text-[#7A2021] text-[18px] shrink-0 mt-0.5">check_circle</span>
              <span>
                <strong>Création des datavisualisations :</strong> Le langage R a été utilisé.
              </span>
            </div>
          </div>
        </div>

        {/* Scientific Stakes Box */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#F4EFEB] p-6 lg:p-8 rounded border border-[#E2DACD] shadow-xs gap-5">
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl text-[#5b070e] font-semibold border-b border-[#E2DACD] pb-2">
              Résumé du projet
            </h3>
            <p className="text-[16px] text-[#334155] text-justify leading-relaxed">
              Ce projet a été réalisé à partir d’inventaires et de données moissonnées en ligne, au sein de trois institutions patrimoniales neuchâteloises. C’est ainsi qu’une quinzaine de visualisations de données, telles que des cartographies, des diagrammes de dispersion ou de cercles imbriqués, ont été générées afin d'être confrontées aux réalités du terrain.
            </p>
            <p className="text-[16px] text-[#334155] text-justify leading-relaxed">
              Les résultats de l’étude indiquent que, bien qu’elle ne puisse remplacer les instruments de recherche traditionnels, la datavisualisation constitue un outil de médiation et de communication particulièrement efficace. En outre, elle offre aux professionnels comme aux différents publics des vues d'ensemble inédites pour appréhender la complexité des fonds photographiques.
            </p>
          </div>
          <div className="p-3 bg-[#FAF8F5] rounded border border-[#E2DACD] flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-[#64748B] font-semibold">
              Direction de mémoire
            </span>
            <span className="text-[13px] font-semibold text-[#4A2E12]">
              Lionel Bartolini, archiviste cantonal aux Archives de l'État de Neuchâtel
            </span>
          </div>
        </div>
      </div>

      {/* 4-Step Methodology Protocol */}
      <div id="methodologie" className="flex flex-col gap-6 pt-4 scroll-mt-24">
        <div className="flex flex-col gap-1">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#5b070e] font-semibold">
            Méthodologie
          </h3>
          <h4 className="font-serif text-xl text-[#1E232A] font-semibold mt-3">
            Datavisualisation
          </h4>
          <p className="text-[16px] text-[#64748B] text-justify">
            La visualisation de données, également connue sous les noms de dataviz ou encore datavisualisation, regroupe un ensemble de méthodes de représentations graphiques plus ou moins complexes.
            Dans le contexte du développement massif des données et des moyens informatiques, elle permet de rendre compte de façon synthétique d’un ensemble de données, mais aussi d’accompagner l’utilisateur dans sa lecture afin qu’il s’approprie plus facilement les informations qu'il y trouve.
          </p>
          <h4 className="font-serif text-xl text-[#1E232A] font-semibold mt-3">
            Création
          </h4>
          <p className="text-[16px] text-[#64748B]">
            Les 4 étapes pour la création d'une datavisualisation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Phase 01 */}
          <div
            className="flex flex-col bg-[#F4EFEB] p-6 rounded border border-[#E2DACD] shadow-xs relative overflow-hidden group hover:border-[#C29B38] transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DACD]">
              <span className="font-mono text-sm font-bold text-[#7A2021]">PHASE 01</span>
              <span className="material-symbols-outlined text-[#7A2021] text-[24px]">database</span>
            </div>
            <h4 className="font-serif text-xl text-[#1E232A] font-semibold mt-3">
              Collecte et Acquisition des données
            </h4>
            <p className="text-[14px] text-[#334155] mt-2 leading-relaxed flex-1">
              Plus de 240 000 archives photographiques recensées pour constituer le corpus d'étude. Deux approches complémentaires : deux inventaires ont été réalisés aux Archives de l'État de Neuchâtel (AEN) et au Laténium, couplé à un moissonnage numérique (web scraping sous{' '}
              <code className="font-mono bg-[#E2DACD] px-1 rounded text-[#5b070e]">rvest</code>{' '}
              depuis Flora) pour la Bibliothèque de Neuchâtel (BPuN).
            </p>
          </div>

          {/* Phase 02 */}
          <div
            className="flex flex-col bg-[#F4EFEB] p-6 rounded border border-[#E2DACD] shadow-xs relative overflow-hidden group hover:border-[#C29B38] transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DACD]">
              <span className="font-mono text-sm font-bold text-[#7A2021]">PHASE 02</span>
              <span className="material-symbols-outlined text-[#7A2021] text-[24px]">cleaning_services</span>
            </div>
            <h4 className="font-serif text-xl text-[#1E232A] font-semibold mt-3">
              Curation et Normalisation (Data Cleaning)
            </h4>
            <p className="text-[14px] text-[#334155] mt-2 leading-relaxed flex-1">
              Nettoyage des données sous R : harmonisation des typologies de supports avec{' '}
              <code className="font-mono bg-[#E2DACD] px-1 rounded text-[#5b070e]">stringr</code>{' '}
              et géocodage spatial des communes historiques afin d'être en mesure d'obtenir des jeux de données propres et utilisables.
            </p>
          </div>

          {/* Phase 03 */}
          <div
            className="flex flex-col bg-[#F4EFEB] p-6 rounded border border-[#E2DACD] shadow-xs relative overflow-hidden group hover:border-[#C29B38] transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DACD]">
              <span className="font-mono text-sm font-bold text-[#7A2021]">PHASE 03</span>
              <span className="material-symbols-outlined text-[#7A2021] text-[24px]">analytics</span>
            </div>
            <h4 className="font-serif text-xl text-[#1E232A] font-semibold mt-3">
              Structuration et Modélisation statistique
            </h4>
            <p className="text-[14px] text-[#334155] mt-2 leading-relaxed flex-1">
              Agrégation et calcul des variables clés (volumes, dates médianes, indices de diversité matérielle, matrices spatiales par krigeage) à l'aide des packages{' '}
              <code className="font-mono bg-[#E2DACD] px-1 rounded text-[#5b070e]">dplyr</code>,{' '}
              <code className="font-mono bg-[#E2DACD] px-1 rounded text-[#5b070e]">tidyr</code>,{' '}
              <code className="font-mono bg-[#E2DACD] px-1 rounded text-[#5b070e]">sf</code>{' '}et{' '}
              <code className="font-mono bg-[#E2DACD] px-1 rounded text-[#5b070e]">gstat</code>.
            </p>
          </div>

          {/* Phase 04 */}
          <div
            className="flex flex-col bg-[#F4EFEB] p-6 rounded border border-[#E2DACD] shadow-xs relative overflow-hidden group hover:border-[#C29B38] transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DACD]">
              <span className="font-mono text-sm font-bold text-[#7A2021]">PHASE 04</span>
              <span className="material-symbols-outlined text-[#7A2021] text-[24px]">bar_chart</span>
            </div>
            <h4 className="font-serif text-xl text-[#1E232A] font-semibold mt-3">
              Conception graphique &amp; Restitution
            </h4>
            <p className="text-[14px] text-[#334155] mt-2 leading-relaxed flex-1">
              Génération des visualisations avec{' '}
              <code className="font-mono bg-[#E2DACD] px-1 rounded text-[#5b070e]">ggplot2</code>{' '}
              selon les principes d'excellence graphique d'Edward Tufte (data-ink ratio, minimalisme visuel). Les représentations sont conçues à la fois comme instruments d'aide à la décision interne et comme supports de médiation culturelle.
            </p>
            <p className="mt-3 pt-2 border-t border-[#E2DACD]/60 text-[11px] text-[#64748B] leading-relaxed italic">
              TUFTE, Edward R. <em>The visual display of quantitative information.</em> Cheshire, Graphics press, Second edition, 2001. ISBN 978-0-9613921-4-7
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Gallery */}
      <div className="flex flex-col gap-4 bg-[#F4EFEB] p-6 lg:p-8 rounded border border-[#E2DACD] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2DACD] pb-3">
          <div>
            <span className="text-[13px] uppercase tracking-wider text-[#7A2021] font-semibold">
              Visualisation de données
            </span>
            <h4 className="font-serif text-2xl text-[#1E232A] font-medium">
              Quelques datavisualisations issues du projet
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
        <div className="grid grid-cols-2 gap-3 pt-2">
          {GALLERY_PLATES.map((plate) => {
            const isActive = activePlate.id === plate.id;
            return (
              <button
                key={plate.id}
                onClick={() => setActivePlate(plate)}
                type="button"
                className={`text-left p-3.5 rounded bg-[#FAF8F5] transition-all flex flex-col gap-1.5 hover:bg-[#F4EFEB] cursor-pointer ${isActive
                  ? 'border-2 border-[#7A2021] shadow-xs'
                  : 'border border-[#E2DACD] opacity-85 hover:opacity-100'
                  }`}
              >
                <span
                  className={`text-[12px] font-semibold uppercase ${isActive ? 'text-[#7A2021]' : 'text-[#64748B]'
                    }`}
                >
                  {plate.number}. {plate.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
