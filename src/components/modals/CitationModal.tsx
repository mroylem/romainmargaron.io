import React, { useState } from 'react';

interface CitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CitationModal: React.FC<CitationModalProps> = ({ isOpen, onClose }) => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  if (!isOpen) return null;

  const cffContent = `cff-version: 1.2.0
message: "Si vous réutilisez cette édition numérique ou ces données, merci de citer le travail comme suit :"
authors:
  - family-names: Margaron
    given-names: Romain
    affiliation: "Université de Neuchâtel & Université de Genève"
title: "Édition critique et traitement computationnel des Procès-verbaux de la Commission Administrative de Bel-Air (1907-1916)"
version: 1.0.0
date-released: 2025-06-15
repository-code: "https://github.com/mroylem/edition_tei_Bel-Air.io"
license: CC-BY-4.0
keywords:
  - "Humanités numériques"
  - "TEI P5"
  - "HTR Kraken"
  - "eScriptorium"
  - "Archives asilaires"`;

  const bibtexContent = `@misc{margaron2025belair,
  author = {Margaron, Romain},
  title = {Édition critique et traitement computationnel des Procès-verbaux de la Commission Administrative de Bel-Air (1907-1916)},
  year = {2025},
  publisher = {Université de Neuchâtel et Université de Genève},
  howpublished = {\\url{https://github.com/mroylem/edition_tei_Bel-Air.io}},
  note = {Encodage TEI P5, protocoles HTR eScriptorium / Kraken}
}`;

  const apaContent = `Margaron, R. (2025). Édition critique et traitement computationnel des Procès-verbaux de la Commission Administrative de Bel-Air (1907-1916) [Corpus numérique TEI P5]. Université de Neuchâtel & Université de Genève. https://github.com/mroylem/edition_tei_Bel-Air.io`;

  const copyToClipboard = (text: string, format: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const handleDownloadCff = () => {
    const blob = new Blob([cffContent], { type: 'text/yaml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CITATION.cff';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-[#FAF8F5] border border-[#E2DACD] rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 bg-[#F4EFEB] border-b border-[#E2DACD]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#C29B38] text-[24px]">format_quote</span>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#5b070e] font-semibold">
                Citation FAIR &amp; Métadonnées
              </h3>
              <p className="text-xs text-[#64748B]">Normes de citation pour la recherche et l'Open Science</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded hover:bg-[#FAF8F5] text-[#64748B] hover:text-[#1E232A] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-5 text-[#1E232A]">
          {/* APA Format */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase font-bold text-[#7A2021]">Format APA (7ᵉ éd.)</span>
              <button
                onClick={() => copyToClipboard(apaContent, 'apa')}
                className="text-xs text-[#5b070e] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {copiedFormat === 'apa' ? 'check' : 'content_copy'}
                </span>
                <span>{copiedFormat === 'apa' ? 'Copié !' : 'Copier'}</span>
              </button>
            </div>
            <p className="text-xs bg-[#F4EFEB] p-3 rounded border border-[#E2DACD] leading-relaxed text-[#334155]">
              {apaContent}
            </p>
          </div>

          {/* CITATION.cff */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase font-bold text-[#7A2021]">Format Standard CITATION.cff</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadCff}
                  className="text-xs text-[#4A2E12] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span className="material-symbols-outlined text-[14px]">download</span>
                  <span>Télécharger .cff</span>
                </button>
                <button
                  onClick={() => copyToClipboard(cffContent, 'cff')}
                  className="text-xs text-[#5b070e] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copiedFormat === 'cff' ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedFormat === 'cff' ? 'Copié !' : 'Copier'}</span>
                </button>
              </div>
            </div>
            <pre className="font-mono text-xs bg-[#1E232A] text-[#FAF8F5] p-3.5 rounded overflow-x-auto leading-relaxed">
              <code>{cffContent}</code>
            </pre>
          </div>

          {/* BibTeX */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase font-bold text-[#7A2021]">Format BibTeX</span>
              <button
                onClick={() => copyToClipboard(bibtexContent, 'bibtex')}
                className="text-xs text-[#5b070e] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {copiedFormat === 'bibtex' ? 'check' : 'content_copy'}
                </span>
                <span>{copiedFormat === 'bibtex' ? 'Copié !' : 'Copier'}</span>
              </button>
            </div>
            <pre className="font-mono text-xs bg-[#F4EFEB] border border-[#E2DACD] text-[#1E232A] p-3.5 rounded overflow-x-auto leading-relaxed">
              <code>{bibtexContent}</code>
            </pre>
          </div>
        </div>

        <div className="p-4 bg-[#F4EFEB] border-t border-[#E2DACD] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-[#7A2021] text-white text-xs font-semibold uppercase cursor-pointer hover:bg-[#5b070e]"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
