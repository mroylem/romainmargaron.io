import React, { useState } from 'react';
import { TEI_FOLIOS } from '../data/portfolioData';

interface TeiEditionSectionProps {
  onOpenFullscreenFacsimile: (imgUrl: string, caption: string) => void;
}

export const TeiEditionSection: React.FC<TeiEditionSectionProps> = ({
  onOpenFullscreenFacsimile,
}) => {
  const [activeFolioKey, setActiveFolioKey] = useState<string>('183');
  const [viewMode, setViewMode] = useState<'diplomatic' | 'normalized' | 'source'>('diplomatic');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [highlightedEntry, setHighlightedEntry] = useState<string | null>(null);

  const activeFolio = TEI_FOLIOS[activeFolioKey] || TEI_FOLIOS['183'];

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleZoomReset = () => setZoomLevel(1);

  return (
    <section
      id="edition-tei-bel-air"
      className="w-full bg-[#F4EFEB]/60 border-t border-b border-[#E2DACD] py-14 lg:py-20 px-6 lg:px-12 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-2.5 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="text-[11px] px-2 py-0.5 rounded bg-[#C29B38]/20 text-[#4A2E12] font-semibold uppercase tracking-wider">
                Séminaire Bibliothèque numérique I et II - 2025-2026
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#5b070e] font-semibold tracking-tight leading-tight">
              Édition Numérique TEI — Procès-verbaux de la Commission Administrative de Bel-Air (1907-1916)
            </h2>
            <p className="text-[17px] text-[#334155] leading-relaxed">
              Ce projet a été réalisé dans le cadre des séminaires : Bibliothèque numérique I et II dispensés à l'Université de Genève (UNIGE).
              <br />Le document édité s'intitule : <em>« Procès - Verbaux de la commission Bel-Air - Commencé le 9 juillet 1907. Terminé le 9 mai 1916. »</em>. Suite à une transcription sur 12 pages via eScriptorium, l'échantillon des pages 183 à 185 a fait l'objet d'un encodage TEI.
            </p>
          </div>

          <div>
            <a
              href="https://mroylem.github.io/edition_tei_Bel-Air.io/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#7A2021] hover:bg-[#5b070e] text-white text-[13px] font-semibold uppercase tracking-wider py-3 px-5 mr-3 rounded shadow transition-all self-start lg:self-auto shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              <span>Site du Projet</span>
            </a>
            <a
              href="https://github.com/mroylem/edition_tei_Bel-Air.io"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#7A2021] hover:bg-[#5b070e] text-white text-[13px] font-semibold uppercase tracking-wider py-3 px-5 rounded shadow transition-all self-start lg:self-auto shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              <span>Dépôt GitHub du Projet</span>
            </a>
          </div>
        </div>

        {/* SYNOPTIC VIEW CONTAINER */}
        <div className="flex flex-col rounded border border-[#E2DACD] bg-[#FAF8F5] shadow-md overflow-hidden">
          {/* Side-by-Side Synoptic Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#E2DACD] min-h-[620px]">
            {/* Left Pane: High-Resolution Facsimile */}
            <div className="flex flex-col bg-[#F4EFEB]/50 p-4 lg:p-6 gap-3">
              <div className="flex items-center justify-between text-[#64748B] text-[13px]">
                <span className="inline-flex items-center gap-1.5 text-[12px] uppercase font-semibold text-[#4A2E12]">
                  <span className="material-symbols-outlined text-[16px]">image</span>
                  Fac-similé original — Registre des délibérations ({activeFolio.label})
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleZoomIn}
                    title="Zoomer (+)"
                    className="w-7 h-7 rounded border border-[#E2DACD] bg-[#FAF8F5] flex items-center justify-center hover:bg-[#F4EFEB] text-[#1E232A] cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">zoom_in</span>
                  </button>
                  <button
                    onClick={handleZoomOut}
                    title="Dézoomer (-)"
                    className="w-7 h-7 rounded border border-[#E2DACD] bg-[#FAF8F5] flex items-center justify-center hover:bg-[#F4EFEB] text-[#1E232A] cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">zoom_out</span>
                  </button>
                  <button
                    onClick={handleZoomReset}
                    title="Réinitialiser le zoom"
                    className="w-7 h-7 rounded border border-[#E2DACD] bg-[#FAF8F5] flex items-center justify-center hover:bg-[#F4EFEB] text-[#1E232A] cursor-pointer text-xs font-mono"
                  >
                    1:1
                  </button>
                  <button
                    onClick={() => onOpenFullscreenFacsimile(activeFolio.imageUrl, activeFolio.caption)}
                    title="Plein écran"
                    className="w-7 h-7 rounded border border-[#E2DACD] bg-[#FAF8F5] flex items-center justify-center hover:bg-[#F4EFEB] text-[#1E232A] cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">fullscreen</span>
                  </button>
                </div>
              </div>

              {/* Interactive Image Viewport */}
              <div className="relative w-full h-[520px] rounded border border-[#E2DACD] overflow-hidden bg-[#FAF8F5] shadow-inner flex items-center justify-center">
                <div
                  className="w-full h-full relative transition-transform duration-200 flex items-center justify-center"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <img
                    src={activeFolio.imageUrl}
                    alt={`Fac-similé du registre de Bel-Air ${activeFolio.label}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Shelfmark Tag */}
                <div className="absolute bottom-4 right-4 bg-[#F4EFEB]/95 backdrop-blur-md px-3 py-1.5 rounded border border-[#E2DACD] shadow text-[#1E232A] font-mono text-[12px]">
                  {activeFolio.shelfmark}
                </div>
              </div>

              <p className="text-[13px] text-[#64748B] italic">
                {activeFolio.caption}
              </p>
            </div>

            {/* Right Pane: TEI Transcription and Tagging */}
            <div className="flex flex-col bg-[#FAF8F5] p-4 lg:p-6 gap-3">
              <div
                className="w-full h-full relative"
              >
                <img
                  src={activeFolio.secondImageUrl}
                  alt={`Transcription du registre de Bel-Air ${activeFolio.label}`}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};
