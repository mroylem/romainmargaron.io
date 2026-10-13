import React, { useState } from 'react';

interface FileTreeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FileTreeModal: React.FC<FileTreeModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<string>('ms-belair-p183.xml');

  if (!isOpen) return null;

  const fileDetails: Record<string, { desc: string; size: string; status: string }> = {
    'tei_belair_odd.xml': {
      desc: 'Spécification ODD Roma contenant les contraintes TEI P5, la sélection des modules et les règles de validation.',
      size: '14.2 KB',
      status: 'Validé ODD Roma 2025'
    },
    'tei_belair.rng': {
      desc: 'Schéma RelaxNG compilé à partir du fichier ODD pour la validation syntaxique en temps réel sous IDE (Oxygen/VS Code).',
      size: '28.5 KB',
      status: 'Compilé (Jing)'
    },
    'tei_belair.sch': {
      desc: 'Fichier Schematron ISO contenant les assertions sur les attributs temporels @when et la conformité prosopographique.',
      size: '8.1 KB',
      status: 'Validé ISO Schematron'
    },
    'ms-belair-p183.xml': {
      desc: 'Fichier TEI XML master de la page 183 : actes d’état civil 48 et 49, apparat critique, métadonnées catalographiques.',
      size: '12.4 KB',
      status: '100% Validé TEI P5'
    },
    'ms-belair-p184.xml': {
      desc: 'Fichier TEI XML master de la page 184 : délibérations de la séance du 16 janvier 1915 et subsides asilaires.',
      size: '11.8 KB',
      status: '100% Validé TEI P5'
    },
    'ms-belair-p185.xml': {
      desc: 'Fichier TEI XML master de la page 185 : clôture de quinzaine, sorties cliniques et signatures des commissaires.',
      size: '10.9 KB',
      status: '100% Validé TEI P5'
    },
    'CITATION.cff': {
      desc: 'Métadonnées de citation au format Citation File Format 1.2.0 pour référencement GitHub et dépôts Zenodo.',
      size: '1.2 KB',
      status: 'Format Standard CFF'
    },
    'commentaire_edition_numerique.md': {
      desc: 'Mémoire philologique d’accompagnement détaillant les partis pris de transcription et la modélisation informatique.',
      size: '18.7 KB',
      status: 'Markdown Scientifique'
    }
  };

  const currentFile = fileDetails[selectedFile] || fileDetails['ms-belair-p183.xml'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-[#FAF8F5] border border-[#E2DACD] rounded-lg max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-[#F4EFEB] border-b border-[#E2DACD]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#7A2021] text-[24px]">folder_open</span>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#5b070e] font-semibold">
                Arborescence du Projet TEI
              </h3>
              <p className="text-xs text-[#64748B]">Transcription_Bel_Air_1907-1916_p183-185/</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded hover:bg-[#FAF8F5] text-[#64748B] hover:text-[#1E232A] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-5 text-[#1E232A]">
          {/* File Tree */}
          <div className="bg-[#F4EFEB] p-4 rounded border border-[#E2DACD] font-mono text-xs space-y-2">
            <div className="font-bold text-[#5b070e] flex items-center gap-1.5 pb-2 border-b border-[#E2DACD]">
              <span className="material-symbols-outlined text-[16px]">folder</span>
              <span>Transcription_Bel_Air_p183-185/</span>
            </div>

            {/* Folder schemas */}
            <div className="pl-3 space-y-1">
              <div className="font-semibold text-[#4A2E12] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">folder</span> schemas/
              </div>
              {['tei_belair_odd.xml', 'tei_belair.rng', 'tei_belair.sch'].map((file) => (
                <button
                  key={file}
                  onClick={() => setSelectedFile(file)}
                  className={`block w-full text-left pl-4 py-1 rounded transition-colors cursor-pointer ${
                    selectedFile === file
                      ? 'bg-[#7A2021] text-white font-bold'
                      : 'hover:bg-[#FAF8F5] text-[#334155]'
                  }`}
                >
                  📄 {file}
                </button>
              ))}
            </div>

            {/* Folder transcriptions */}
            <div className="pl-3 space-y-1 pt-1">
              <div className="font-semibold text-[#4A2E12] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">folder</span> transcriptions/
              </div>
              {['ms-belair-p183.xml', 'ms-belair-p184.xml', 'ms-belair-p185.xml'].map((file) => (
                <button
                  key={file}
                  onClick={() => setSelectedFile(file)}
                  className={`block w-full text-left pl-4 py-1 rounded transition-colors cursor-pointer ${
                    selectedFile === file
                      ? 'bg-[#7A2021] text-white font-bold'
                      : 'hover:bg-[#FAF8F5] text-[#334155]'
                  }`}
                >
                  📄 {file}
                </button>
              ))}
            </div>

            {/* Documentation files */}
            <div className="pl-3 space-y-1 pt-1">
              <div className="font-semibold text-[#4A2E12] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">folder</span> documentation/
              </div>
              {['CITATION.cff', 'commentaire_edition_numerique.md'].map((file) => (
                <button
                  key={file}
                  onClick={() => setSelectedFile(file)}
                  className={`block w-full text-left pl-4 py-1 rounded transition-colors cursor-pointer ${
                    selectedFile === file
                      ? 'bg-[#7A2021] text-white font-bold'
                      : 'hover:bg-[#FAF8F5] text-[#334155]'
                  }`}
                >
                  📄 {file}
                </button>
              ))}
            </div>
          </div>

          {/* Inspector Panel for selected file */}
          <div className="p-4 bg-[#FAF8F5] rounded border border-[#E2DACD] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="border-b border-[#E2DACD] pb-2">
                <span className="text-[11px] uppercase font-bold text-[#7A2021]">Fichier sélectionné</span>
                <h4 className="font-mono text-sm font-bold text-[#5b070e] mt-0.5">{selectedFile}</h4>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-[#4A2E12]">Rôle &amp; Contenu :</span>
                  <p className="text-[#334155] mt-1 leading-relaxed">{currentFile.desc}</p>
                </div>
                <div className="flex justify-between py-1 border-t border-[#E2DACD]/60">
                  <span className="text-[#64748B]">Taille estimée :</span>
                  <span className="font-mono font-semibold">{currentFile.size}</span>
                </div>
                <div className="flex justify-between py-1 border-t border-[#E2DACD]/60">
                  <span className="text-[#64748B]">Statut de conformité :</span>
                  <span className="text-[#7A2021] font-semibold">{currentFile.status}</span>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/mroylem/edition_tei_Bel-Air.io/tree/main/Transcription_Bel_Air_1907-1916_p183-185"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-[#7A2021] hover:bg-[#5b070e] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              <span>Voir sur GitHub</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F4EFEB] border-t border-[#E2DACD] flex justify-end">
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
