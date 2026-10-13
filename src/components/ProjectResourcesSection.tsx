import React from 'react';

interface ProjectResourcesSectionProps {
  onOpenTeiReader: () => void;
  onOpenOddDoc: () => void;
  onOpenCommentary: () => void;
  onOpenCitation: () => void;
  onOpenTreeModal: () => void;
  onOpenDownloadZip: () => void;
  onOpenTranscription12p: () => void;
}

export const ProjectResourcesSection: React.FC<ProjectResourcesSectionProps> = ({
  onOpenTeiReader,
  onOpenOddDoc,
  onOpenCommentary,
  onOpenCitation,
  onOpenTreeModal,
  onOpenDownloadZip,
  onOpenTranscription12p,
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="text-[13px] uppercase tracking-wider text-[#7A2021] font-semibold">
          Accès aux résultats et aux ressources
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl text-[#5b070e] font-semibold">
          Documentation, Schémas ODD &amp; Dépôts du Projet Bel-Air
        </h3>
        <p className="text-[16px] text-[#64748B]">
          Ensemble des livrables scientifiques, des spécifications d'encodage et des fichiers sources téléchargeables.
        </p>
      </div>

      {/* 3 Main Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Consulter l'Édition TEI */}
        <div className="flex flex-col justify-between p-6 rounded bg-[#FAF8F5] border border-[#E2DACD] shadow-xs hover:border-[#7A2021] hover:shadow-md transition-all group">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="material-symbols-outlined text-[#7A2021] text-[28px]">visibility</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-[#F4EFEB] text-[#4A2E12] font-semibold uppercase tracking-wider">
                En ligne
              </span>
            </div>
            <h4 className="font-serif text-2xl text-[#5b070e] font-semibold group-hover:text-[#7A2021] transition-colors">
              Consulter l'Édition TEI
            </h4>
            <p className="text-[14px] text-[#64748B] leading-relaxed">
              Visualisation côte à côte complète (Fac-similés &amp; Transcription) des pages 183 à 185 du corpus Bel-Air.
            </p>
          </div>
          <button
            onClick={onOpenTeiReader}
            className="mt-5 pt-3 border-t border-[#E2DACD]/70 inline-flex items-center gap-2 text-[13px] uppercase tracking-wider text-[#5b070e] font-semibold hover:underline cursor-pointer text-left"
          >
            <span>Ouvrir le lecteur synoptique</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>

        {/* Card 2: Documentation ODD */}
        <div className="flex flex-col justify-between p-6 rounded bg-[#FAF8F5] border border-[#E2DACD] shadow-xs hover:border-[#7A2021] hover:shadow-md transition-all group">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="material-symbols-outlined text-[#7A2021] text-[28px]">description</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-[#F4EFEB] text-[#4A2E12] font-semibold uppercase tracking-wider">
                ODD Roma
              </span>
            </div>
            <h4 className="font-serif text-2xl text-[#5b070e] font-semibold group-hover:text-[#7A2021] transition-colors">
              Documentation ODD
            </h4>
            <p className="text-[14px] text-[#64748B] leading-relaxed">
              Spécifications formelles du schéma XML, personnalisation One Document Does it all et règles d'encodage contraintes.
            </p>
          </div>
          <button
            onClick={onOpenOddDoc}
            className="mt-5 pt-3 border-t border-[#E2DACD]/70 inline-flex items-center gap-2 text-[13px] uppercase tracking-wider text-[#5b070e] font-semibold hover:underline cursor-pointer text-left"
          >
            <span>Voir la documentation ODD</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>

        {/* Card 3: Commentaire sur l'Édition Numérique */}
        <div className="flex flex-col justify-between p-6 rounded bg-[#FAF8F5] border border-[#E2DACD] shadow-xs hover:border-[#7A2021] hover:shadow-md transition-all group">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="material-symbols-outlined text-[#7A2021] text-[28px]">history_edu</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-[#F4EFEB] text-[#4A2E12] font-semibold uppercase tracking-wider">
                Philologie
              </span>
            </div>
            <h4 className="font-serif text-2xl text-[#5b070e] font-semibold group-hover:text-[#7A2021] transition-colors">
              Commentaire sur l'Édition Numérique
            </h4>
            <p className="text-[14px] text-[#64748B] leading-relaxed">
              Analyse réflexive des choix d'encodage, des compromis diplomatiques et des partis-pris de mise en page computationnelle.
            </p>
          </div>
          <button
            onClick={onOpenCommentary}
            className="mt-5 pt-3 border-t border-[#E2DACD]/70 inline-flex items-center gap-2 text-[13px] uppercase tracking-wider text-[#5b070e] font-semibold hover:underline cursor-pointer text-left"
          >
            <span>Lire le commentaire critique</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </div>

      {/* 4 Complementary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Dépôt GitHub */}
        <div className="p-4 rounded bg-[#F4EFEB] border border-[#E2DACD] flex flex-col justify-between gap-3 shadow-xs hover:border-[#7A2021] transition-all">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-[#7A2021] uppercase font-semibold">Dépôt GitHub</span>
            <h5 className="text-[15px] font-semibold text-[#1E232A]">Code &amp; Corpus de l'édition</h5>
            <p className="text-[13px] text-[#64748B]">Accéder aux répertoires Git hébergés sous licence libre.</p>
          </div>
          <a
            href="https://github.com/mroylem/edition_tei_Bel-Air.io"
            target="_blank"
            rel="noreferrer"
            className="text-[12px] text-[#5b070e] uppercase font-bold hover:underline inline-flex items-center gap-1"
          >
            github.com/mroylem <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </a>
        </div>

        {/* Arborescence TEI */}
        <div className="p-4 rounded bg-[#F4EFEB] border border-[#E2DACD] flex flex-col justify-between gap-3 shadow-xs hover:border-[#7A2021] transition-all">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-[#7A2021] uppercase font-semibold">Arborescence TEI</span>
            <h5 className="text-[15px] font-semibold text-[#1E232A]">Fichiers XML Pages 183-185</h5>
            <p className="text-[13px] text-[#64748B]">Fichiers TEI master, schémas RelaxNG et fragments annotés.</p>
          </div>
          <button
            onClick={onOpenTreeModal}
            className="text-[12px] text-[#5b070e] uppercase font-bold hover:underline inline-flex items-center gap-1 cursor-pointer text-left"
          >
            Parcourir l'arborescence <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
        </div>

        {/* Citation FAIR */}
        <div className="p-4 rounded bg-[#F4EFEB] border border-[#E2DACD] flex flex-col justify-between gap-3 shadow-xs hover:border-[#C29B38] transition-all">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-[#C29B38] uppercase font-semibold">Citation FAIR</span>
            <h5 className="text-[15px] font-semibold text-[#1E232A]">Fichier CITATION.cff</h5>
            <p className="text-[13px] text-[#64748B]">Normes de citation académique et métadonnées d'attribution.</p>
          </div>
          <button
            onClick={onOpenCitation}
            className="text-[12px] text-[#4A2E12] uppercase font-bold hover:underline inline-flex items-center gap-1 cursor-pointer text-left"
          >
            Consulter CITATION.cff <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </button>
        </div>

        {/* Téléchargement Direct */}
        <div className="p-4 rounded bg-[#F4EFEB] border border-[#E2DACD] flex flex-col justify-between gap-3 shadow-xs hover:border-[#7A2021] transition-all">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-[#7A2021] uppercase font-semibold">Téléchargement Direct</span>
            <h5 className="text-[15px] font-semibold text-[#1E232A]">Archive Complète .zip</h5>
            <p className="text-[13px] text-[#64748B]">Obtenir l'intégralité du projet, des transcriptions et des images.</p>
          </div>
          <button
            onClick={onOpenDownloadZip}
            className="text-[12px] text-[#5b070e] uppercase font-bold hover:underline inline-flex items-center gap-1 cursor-pointer text-left"
          >
            Télécharger l'archive .zip <span className="material-symbols-outlined text-[14px]">download</span>
          </button>
        </div>
      </div>

      {/* Preliminary phase banner */}
      <div className="p-5 rounded bg-[#FAF8F5] border border-[#E2DACD] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-[#C29B38]/15 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[#C29B38] text-[22px]">history</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg text-[#5b070e] font-semibold">
              Première partie du projet : Transcription continue des 12 pages
            </span>
            <span className="text-[13px] text-[#64748B]">
              Travaux préliminaires réalisés sous eScriptorium avec commentaires de transcription détaillés.
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="https://github.com/mroylem/transcription_Bel-Air"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded border border-[#7A2021] text-[#7A2021] hover:bg-[#7A2021]/5 text-[12px] uppercase font-semibold transition-colors"
          >
            Dépôt Transcription
          </a>
          <button
            onClick={onOpenTranscription12p}
            className="px-4 py-2 rounded bg-[#7A2021] hover:bg-[#5b070e] text-white text-[12px] uppercase font-semibold transition-colors shadow-xs cursor-pointer"
          >
            Commentaires (.md)
          </button>
        </div>
      </div>
    </section>
  );
};
