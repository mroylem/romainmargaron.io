import React, { useState } from 'react';
import { TEI_FOLIOS } from '../../data/portfolioData';

interface TeiReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeiReaderModal: React.FC<TeiReaderModalProps> = ({ isOpen, onClose }) => {
  const [activeFolioKey, setActiveFolioKey] = useState<string>('183');
  const [viewMode, setViewMode] = useState<'diplomatic' | 'normalized' | 'source'>('diplomatic');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const currentFolio = TEI_FOLIOS[activeFolioKey] || TEI_FOLIOS['183'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/75 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-[#FAF8F5] border border-[#E2DACD] rounded-lg w-full max-w-6xl h-[94vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between p-4 bg-[#F4EFEB] border-b border-[#E2DACD] gap-3">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#7A2021] text-[26px]">menu_book</span>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#5b070e] font-semibold leading-tight">
                Lecteur Synoptique — Édition Bel-Air (1907-1916)
              </h3>
              <p className="text-xs text-[#64748B]">
                Édition critique en vis-à-vis : Fac-similés &amp; Encodage TEI P5
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Folio switchers */}
            <div className="flex items-center gap-1 bg-[#FAF8F5] px-2 py-1 rounded border border-[#E2DACD]">
              <span className="text-[11px] uppercase font-semibold text-[#64748B] mr-1">Folio :</span>
              {(['183', '184', '185'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveFolioKey(key)}
                  className={`px-2.5 py-0.5 rounded font-mono text-xs cursor-pointer transition-colors ${
                    activeFolioKey === key
                      ? 'bg-[#5b070e] text-white font-bold'
                      : 'text-[#334155] hover:bg-[#F4EFEB]'
                  }`}
                >
                  p. {key}
                </button>
              ))}
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded hover:bg-[#FAF8F5] text-[#64748B] hover:text-[#1E232A] flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between p-3 bg-[#FAF8F5] border-b border-[#E2DACD] gap-3">
          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 text-xs">
            <button
              onClick={() => setViewMode('diplomatic')}
              className={`px-3 py-1.5 rounded uppercase font-semibold cursor-pointer ${
                viewMode === 'diplomatic'
                  ? 'bg-[#7A2021] text-white'
                  : 'bg-[#F4EFEB] text-[#334155] hover:bg-[#FAF8F5]'
              }`}
            >
              Vue Diplomatique
            </button>
            <button
              onClick={() => setViewMode('normalized')}
              className={`px-3 py-1.5 rounded uppercase font-semibold cursor-pointer ${
                viewMode === 'normalized'
                  ? 'bg-[#7A2021] text-white'
                  : 'bg-[#F4EFEB] text-[#334155] hover:bg-[#FAF8F5]'
              }`}
            >
              Vue Normalisée
            </button>
            <button
              onClick={() => setViewMode('source')}
              className={`px-3 py-1.5 rounded uppercase font-semibold font-mono cursor-pointer ${
                viewMode === 'source'
                  ? 'bg-[#7A2021] text-white'
                  : 'bg-[#F4EFEB] text-[#334155] hover:bg-[#FAF8F5]'
              }`}
            >
              Code XML
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[16px] text-[#64748B]">
              search
            </span>
            <input
              type="text"
              placeholder="Rechercher un terme ou patronyme..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1 rounded text-xs border border-[#E2DACD] bg-[#F4EFEB] focus:outline-none focus:border-[#7A2021] w-48 sm:w-64"
            />
          </div>
        </div>

        {/* Synoptic 2 Columns Split */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E2DACD] overflow-hidden">
          {/* Left Column: Facsimile */}
          <div className="h-full flex flex-col bg-[#F4EFEB]/40 p-4 overflow-y-auto">
            <div className="flex items-center justify-between pb-2 text-xs text-[#64748B]">
              <span className="font-semibold text-[#4A2E12]">Fac-similé haute définition</span>
              <span className="font-mono">{currentFolio.shelfmark}</span>
            </div>
            <div className="flex-1 rounded border border-[#E2DACD] bg-[#FAF8F5] overflow-hidden flex items-center justify-center p-2 relative">
              <img
                src={currentFolio.imageUrl}
                alt={currentFolio.label}
                className="max-h-full object-contain rounded shadow-xs"
              />
            </div>
            <p className="text-xs text-[#64748B] italic mt-2">{currentFolio.caption}</p>
          </div>

          {/* Right Column: Transcription & Apparatus */}
          <div className="h-full flex flex-col bg-[#FAF8F5] p-5 overflow-y-auto">
            {viewMode === 'diplomatic' && (
              <div className="flex flex-col gap-4 text-sm text-[#1E232A]">
                <div className="font-mono text-xs text-[#7A2021] bg-[#5b070e]/5 p-2 rounded border border-[#5b070e]/20">
                  {currentFolio.diplomaticContent.pageBreak}
                </div>
                <div className="border-b border-[#E2DACD] pb-3">
                  <h4 className="font-serif text-xl font-bold text-[#5b070e]">
                    {currentFolio.diplomaticContent.head}
                  </h4>
                  <p className="text-xs italic text-[#4A2E12]">
                    {currentFolio.diplomaticContent.subhead}
                  </p>
                </div>

                <div className="space-y-3">
                  {currentFolio.diplomaticContent.entries
                    .filter((e) =>
                      searchQuery
                        ? e.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.number.toLowerCase().includes(searchQuery.toLowerCase())
                        : true
                    )
                    .map((entry, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#F4EFEB] rounded border border-[#E2DACD] flex flex-col gap-1.5"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-mono font-bold text-xs text-[#7A2021]">
                            {entry.number}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#7A2021]/10 text-[#7A2021] font-mono">
                            type="{entry.type}"
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed">
                          — <strong className="text-[#5b070e]">{entry.patientName}</strong>. Né(e) le{' '}
                          {entry.birthDate}. Enregistré le {entry.regDate}. Sous l'autorité de la{' '}
                          <span className="font-semibold text-[#4A2E12]">{entry.authority}</span>.
                        </p>
                        {entry.clinicalNote && (
                          <p className="text-[11px] text-[#64748B] italic">{entry.clinicalNote}</p>
                        )}
                        {entry.marginNote && (
                          <p className="text-[11px] text-[#7A2021] border-l-2 border-[#7A2021] pl-2">
                            {entry.marginNote}
                          </p>
                        )}
                      </div>
                    ))}
                </div>

                <div className="mt-4 pt-3 border-t border-[#E2DACD]">
                  <span className="text-[11px] uppercase font-bold text-[#C29B38]">
                    Apparat critique :
                  </span>
                  <pre className="font-mono text-xs bg-[#F4EFEB] p-2.5 rounded border border-[#E2DACD] mt-1 whitespace-pre-wrap">
                    {currentFolio.diplomaticContent.apparatNotes}
                  </pre>
                </div>
              </div>
            )}

            {viewMode === 'normalized' && (
              <div className="space-y-3 text-sm text-[#1E232A]">
                <div className="p-3 bg-[#F4EFEB] rounded border border-[#E2DACD] text-xs text-[#64748B]">
                  {currentFolio.normalizedContent.description}
                </div>
                <h4 className="font-serif text-xl font-bold text-[#5b070e]">
                  {currentFolio.normalizedContent.title}
                </h4>
                {currentFolio.normalizedContent.entries.map((norm, idx) => (
                  <div key={idx} className="p-3 bg-[#F4EFEB] rounded border border-[#E2DACD] text-xs">
                    <strong>{norm.actNumber}</strong> {norm.text}
                  </div>
                ))}
              </div>
            )}

            {viewMode === 'source' && (
              <div className="h-full flex flex-col font-mono text-xs">
                <pre className="bg-[#1E232A] text-[#FAF8F5] p-4 rounded overflow-auto h-full leading-relaxed">
                  <code>{currentFolio.xmlSource}</code>
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#F4EFEB] border-t border-[#E2DACD] flex items-center justify-between text-xs text-[#64748B]">
          <span>Projet Bel-Air • Encodage conforme TEI P5 Consortium</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#7A2021] text-white font-semibold uppercase text-xs cursor-pointer hover:bg-[#5b070e]"
          >
            Fermer le lecteur
          </button>
        </div>
      </div>
    </div>
  );
};
