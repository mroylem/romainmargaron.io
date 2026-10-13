import React, { useState } from 'react';
import { TEI_FOLIOS } from '../data/portfolioData';

interface TeiEditionSectionProps {
  onOpenTeiReaderModal: () => void;
  onOpenFullscreenFacsimile: (imgUrl: string, caption: string) => void;
}

export const TeiEditionSection: React.FC<TeiEditionSectionProps> = ({
  onOpenTeiReaderModal,
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

  const handleCopyXml = () => {
    navigator.clipboard.writeText(activeFolio.xmlSource);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

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
              <span className="font-mono text-sm text-[#7A2021] font-bold tracking-wider">
                [PROJET MAJEUR 02]
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-[#C29B38]/20 text-[#4A2E12] font-semibold uppercase tracking-wider">
                Séminaires UNIGE &amp; Master UNINE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#5b070e] font-semibold tracking-tight leading-tight">
              Édition Numérique TEI — Procès-verbaux de la Commission Administrative de Bel-Air (1907-1916)
            </h2>
            <p className="text-[17px] text-[#334155] leading-relaxed">
              Le document édité s'intitule : <em>« Procès - Verbaux de la commission Bel-Air - Commencé le 9 juillet 1907. Terminé le 9 mai 1916. »</em>. Suite à une transcription sur 12 pages via eScriptorium au semestre antérieur, l'échantillon des pages 183 à 185 a fait l'objet d'un encodage critique TEI P5 rigoureux.
            </p>
          </div>

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

        {/* SYNOPTIC VIEW CONTAINER */}
        <div className="flex flex-col rounded border border-[#E2DACD] bg-[#FAF8F5] shadow-md overflow-hidden">
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between p-4 bg-[#F4EFEB] border-b border-[#E2DACD] gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-serif text-xl sm:text-2xl text-[#5b070e] font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-[#7A2021]">menu_book</span>
                Visualisation Synoptique Côte à Côte
              </span>

              {/* Folio switcher */}
              <div className="flex items-center gap-1 bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#E2DACD]">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase mr-1">Folio actif :</span>
                {(['183', '184', '185'] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFolioKey(f)}
                    className={`px-2.5 py-0.5 rounded font-mono text-[13px] transition-all cursor-pointer ${
                      activeFolioKey === f
                        ? 'text-[#5b070e] font-bold bg-[#5b070e]/15 shadow-xs'
                        : 'text-[#64748B] hover:text-[#1E232A]'
                    }`}
                  >
                    p. {f}
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded border border-[#E2DACD] text-[#334155] text-[13px]">
              <button
                onClick={() => setViewMode('diplomatic')}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  viewMode === 'diplomatic'
                    ? 'bg-[#5b070e] text-white font-semibold shadow-xs'
                    : 'text-[#334155] hover:bg-[#F4EFEB]'
                }`}
              >
                Vue Diplomatique
              </button>
              <button
                onClick={() => setViewMode('normalized')}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  viewMode === 'normalized'
                    ? 'bg-[#5b070e] text-white font-semibold shadow-xs'
                    : 'text-[#334155] hover:bg-[#F4EFEB]'
                }`}
              >
                Vue Normalisée
              </button>
              <button
                onClick={() => setViewMode('source')}
                className={`px-3 py-1.5 rounded font-mono text-[12px] transition-all cursor-pointer ${
                  viewMode === 'source'
                    ? 'bg-[#5b070e] text-white font-semibold shadow-xs'
                    : 'text-[#334155] hover:bg-[#F4EFEB]'
                }`}
              >
                Code TEI-XML source
              </button>
            </div>
          </div>

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

                  {/* Paleographic Bounding Box Overlay */}
                  <div
                    style={{
                      top: activeFolio.annotationZone.top,
                      left: activeFolio.annotationZone.left,
                      width: activeFolio.annotationZone.width,
                      height: activeFolio.annotationZone.height,
                    }}
                    className={`absolute border rounded pointer-events-none transition-all flex items-center px-3 ${
                      highlightedEntry
                        ? 'bg-[#C29B38]/35 border-[#C29B38] ring-2 ring-[#7A2021]/40'
                        : 'bg-[#C29B38]/20 border-[#C29B38]'
                    }`}
                  >
                    <span className="font-mono text-[11px] bg-[#C29B38] text-[#1E232A] font-bold px-1.5 py-0.5 rounded shadow">
                      {activeFolio.annotationZone.label}
                    </span>
                  </div>
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
              <div className="flex items-center justify-between text-[#64748B] text-[13px]">
                <span className="inline-flex items-center gap-1.5 text-[12px] uppercase font-semibold text-[#7A2021]">
                  <span className="material-symbols-outlined text-[16px]">code</span>
                  Transcription critique &amp; Encodage TEI P5
                </span>
                <span className="font-mono text-[12px] text-[#4A2E12] font-semibold bg-[#4A2E12]/10 px-2 py-0.5 rounded">
                  valid: tei_all.rng
                </span>
              </div>

              {/* Pane Content Switcher */}
              <div className="w-full h-[520px] rounded border border-[#E2DACD] bg-[#F4EFEB] p-5 overflow-y-auto leading-relaxed shadow-inner">
                {/* 1. Mode Diplomatique */}
                {viewMode === 'diplomatic' && (
                  <div className="flex flex-col gap-4 text-[#1E232A]">
                    <div className="font-mono text-xs text-[#7A2021] bg-[#5b070e]/5 p-2 rounded border border-[#5b070e]/20 flex items-center justify-between">
                      <span>{activeFolio.diplomaticContent.pageBreak}</span>
                      <span className="text-[11px] text-[#64748B]">Balisage structurel</span>
                    </div>

                    <div className="border-b border-[#E2DACD] pb-3">
                      <span className="text-[11px] uppercase tracking-wider text-[#C29B38] font-bold">
                        &lt;head&gt; En-tête officiel&lt;/head&gt;
                      </span>
                      <p className="font-serif text-xl sm:text-2xl font-semibold text-[#5b070e] mt-1">
                        {activeFolio.diplomaticContent.head}
                      </p>
                      <p className="text-[14px] italic text-[#334155]">
                        {activeFolio.diplomaticContent.subhead}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <p className="font-semibold text-[#4A2E12] text-sm">
                        Du{' '}
                        <span
                          className="bg-[#C29B38]/25 px-1.5 py-0.5 rounded border border-[#C29B38]/50 cursor-help"
                          title='TEI: <date when="1915-01-12" to="1915-01-15">'
                        >
                          {activeFolio.diplomaticContent.dateSpan}
                        </span>
                      </p>

                      {/* Entries loop */}
                      {activeFolio.diplomaticContent.entries.map((entry, idx) => (
                        <div
                          key={idx}
                          onMouseEnter={() => setHighlightedEntry(entry.number)}
                          onMouseLeave={() => setHighlightedEntry(null)}
                          className={`p-3.5 bg-[#FAF8F5] rounded border transition-all relative flex flex-col gap-1.5 ${
                            highlightedEntry === entry.number
                              ? 'border-[#7A2021] shadow-xs ring-1 ring-[#7A2021]/30'
                              : 'border-[#E2DACD] hover:border-[#7A2021]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[13px] font-bold text-[#7A2021]">
                              {entry.number}
                            </span>
                            <span className="text-[11px] px-1.5 py-0.5 rounded bg-[#7A2021]/10 text-[#7A2021] font-mono">
                              &lt;entry type="{entry.type}"&gt;
                            </span>
                          </div>

                          <p className="mt-1 text-[15px]">
                            —{' '}
                            <span
                              className="bg-[#5b070e]/10 text-[#5b070e] font-semibold px-1.5 py-0.5 rounded cursor-help"
                              title={`TEI: <persName role='patient'><surname>${entry.surname}</surname>, <forename>${entry.forename}</forename></persName>`}
                            >
                              {entry.patientName}
                            </span>
                            . Né(e) le {entry.birthDate}. Enregistré le {entry.regDate}{' '}
                            <span className="text-[#64748B] italic">&lt;add place="above"&gt;croix&lt;/add&gt;</span>. Enregistré sous l'autorité de la{' '}
                            <span
                              className="bg-[#C29B38]/20 text-[#4A2E12] font-semibold px-1.5 py-0.5 rounded cursor-help"
                              title="TEI: <orgName>Commission administrative</orgName>"
                            >
                              {entry.authority}
                            </span>
                            .
                          </p>

                          {entry.parentage && (
                            <p className="text-[13px] text-[#334155]">
                              Fils de{' '}
                              <span className="bg-[#5b070e]/10 text-[#5b070e] px-1 py-0.2 rounded font-medium">
                                {entry.parentage}
                              </span>
                              .
                            </p>
                          )}

                          {entry.clinicalNote && (
                            <p className="text-[13px] text-[#334155] italic bg-[#FAF8F5]/50 p-1.5 rounded">
                              {entry.clinicalNote}
                            </p>
                          )}

                          {entry.marginNote && (
                            <div className="text-[13px] text-[#7A2021] italic border-l-2 border-[#7A2021] pl-2 mt-1">
                              Signé en marge : <span className="font-semibold">{entry.marginNote}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Critical Apparatus Note */}
                    <div className="mt-3 pt-3 border-t border-[#E2DACD] text-sm text-[#334155] flex flex-col gap-1.5">
                      <span className="text-[11px] uppercase font-bold text-[#C29B38] tracking-wider">
                        Apparat critique &amp; Gloses :
                      </span>
                      <pre className="font-mono text-[12px] bg-[#FAF8F5] p-2.5 rounded border border-[#E2DACD] text-[#1E232A] whitespace-pre-wrap">
                        {activeFolio.diplomaticContent.apparatNotes}
                      </pre>
                    </div>
                  </div>
                )}

                {/* 2. Mode Normalisé */}
                {viewMode === 'normalized' && (
                  <div className="flex flex-col gap-4 text-[#1E232A]">
                    <div className="bg-[#FAF8F5] p-3 rounded border border-[#E2DACD] text-[13px] text-[#64748B]">
                      <em>{activeFolio.normalizedContent.description}</em>
                    </div>
                    <h4 className="font-serif text-2xl text-[#5b070e] font-semibold">
                      {activeFolio.normalizedContent.title}
                    </h4>
                    <div className="flex flex-col gap-3 text-[15px] leading-relaxed">
                      {activeFolio.normalizedContent.entries.map((norm, idx) => (
                        <div key={idx} className="p-3 bg-[#FAF8F5] rounded border border-[#E2DACD]">
                          <strong>{norm.actNumber}</strong> {norm.text}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Mode Code Source XML */}
                {viewMode === 'source' && (
                  <div className="flex flex-col gap-2 font-mono text-[13px]">
                    <div className="flex items-center justify-between pb-1">
                      <span className="text-xs text-[#64748B]">Balisage XML-TEI P5 validé</span>
                      <button
                        onClick={handleCopyXml}
                        className="inline-flex items-center gap-1 text-xs bg-[#FAF8F5] border border-[#E2DACD] px-2.5 py-1 rounded text-[#7A2021] hover:bg-white cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          {copiedCode ? 'check' : 'content_copy'}
                        </span>
                        <span>{copiedCode ? 'Copié !' : 'Copier XML'}</span>
                      </button>
                    </div>
                    <pre className="bg-[#1E232A] text-[#FAF8F5] p-4 rounded overflow-x-auto leading-relaxed text-[12px] sm:text-[13px]">
                      <code>{activeFolio.xmlSource}</code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Interactive Legend */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-[#334155] text-[12px]">
                <span className="text-[#64748B] uppercase font-semibold">Légende TEI :</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5b070e]"></span> &lt;persName&gt;
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C29B38]"></span> &lt;date&gt;
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4A2E12]"></span> &lt;orgName&gt;
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7A2021]"></span> &lt;pb&gt; / &lt;lb&gt;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
