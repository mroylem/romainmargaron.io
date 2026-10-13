import React, { useState } from 'react';

interface HeroSectionProps {
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section
      id="a-propos-et-contact"
      className="relative w-full bg-[#F4EFEB] border-b border-[#E2DACD] py-10 lg:py-14 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start justify-between">
        {/* Left column: Academic Identity & Bio */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start bg-[#FAF8F5] px-3 py-1 rounded border border-[#E2DACD] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#7A2021] animate-pulse"></span>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#7A2021]">
              Dossier de Candidature Académique • 2025
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#5b070e] tracking-tight font-semibold">
              Romain Margaron
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-[#4A2E12] mt-1 font-normal italic">
              Étudiant-chercheur en Humanités Numériques &amp; Valorisation du Patrimoine
            </p>
          </div>

          {/* Abstract */}
          <p className="text-[17px] sm:text-[18px] text-[#334155] max-w-3xl leading-relaxed">
            Profil alliant rigueur historienne, traitement automatique et paléographique de documents d'archives manuscrits (
            <span className="font-semibold text-[#5b070e]">HTR / eScriptorium / Kraken</span>) et encodage sémantique structuré (
            <span className="font-semibold text-[#5b070e]">TEI XML, standards du Consortium TEI, ODD Roma</span>). Spécialisé dans la critique textuelle outillée et l'exploitation de corpus institutionnels suisses et régionaux.
          </p>

          {/* Contact grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {/* Courriel */}
            <div className="flex items-center gap-2.5 p-3 rounded bg-[#FAF8F5] border border-[#E2DACD]/80 text-[#1E232A] shadow-xs hover:border-[#7A2021] transition-colors relative group">
              <span className="material-symbols-outlined text-[#7A2021] text-[20px] shrink-0">mail</span>
              <div className="min-w-0 flex-1 flex flex-col">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">Courriel</span>
                <a
                  href="mailto:romain.margaron@unine.ch"
                  className="text-[14px] text-[#5b070e] hover:underline truncate font-medium"
                >
                  romain.margaron@unine.ch
                </a>
              </div>
              <button
                onClick={() => handleCopy('romain.margaron@unine.ch', 'courriel')}
                title="Copier le courriel"
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-[#F4EFEB] rounded text-[#64748B] hover:text-[#5b070e]"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {copiedField === 'courriel' ? 'check' : 'content_copy'}
                </span>
              </button>
            </div>

            {/* Téléphone */}
            <div className="flex items-center gap-2.5 p-3 rounded bg-[#FAF8F5] border border-[#E2DACD]/80 text-[#1E232A] shadow-xs hover:border-[#7A2021] transition-colors relative group">
              <span className="material-symbols-outlined text-[#7A2021] text-[20px] shrink-0">call</span>
              <div className="min-w-0 flex-1 flex flex-col">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">Téléphone</span>
                <a
                  href="tel:+41781234567"
                  className="text-[14px] text-[#1E232A] hover:text-[#5b070e] truncate font-medium"
                >
                  +41 78 123 45 67
                </a>
              </div>
              <button
                onClick={() => handleCopy('+41 78 123 45 67', 'tel')}
                title="Copier le numéro"
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-[#F4EFEB] rounded text-[#64748B] hover:text-[#5b070e]"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {copiedField === 'tel' ? 'check' : 'content_copy'}
                </span>
              </button>
            </div>

            {/* Localisation */}
            <div className="flex items-center gap-2.5 p-3 rounded bg-[#FAF8F5] border border-[#E2DACD]/80 text-[#1E232A] shadow-xs hover:border-[#C29B38] transition-colors">
              <span className="material-symbols-outlined text-[#C29B38] text-[20px] shrink-0">location_on</span>
              <div className="min-w-0 flex flex-col">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">Localisation</span>
                <span className="text-[14px] text-[#1E232A] font-medium">Neuchâtel / Genève, CH</span>
              </div>
            </div>

            {/* Dépôt Code */}
            <div className="flex items-center gap-2.5 p-3 rounded bg-[#FAF8F5] border border-[#E2DACD]/80 text-[#1E232A] shadow-xs hover:border-[#7A2021] transition-colors">
              <span className="material-symbols-outlined text-[#7A2021] text-[20px] shrink-0">terminal</span>
              <div className="min-w-0 flex flex-col">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">Dépôt Code</span>
                <a
                  href="https://github.com/mroylem"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[14px] text-[#5b070e] hover:underline truncate font-medium"
                >
                  github.com/mroylem
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Action Card / CV Download */}
        <div className="w-full lg:w-80 shrink-0 bg-[#FAF8F5] p-6 rounded border border-[#E2DACD] shadow-md flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-[#E2DACD] pb-3">
            <span className="text-[13px] uppercase tracking-wider text-[#4A2E12] font-semibold">
              Dossier PDF
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-[#C29B38]/15 text-[#4A2E12] font-medium">
              Version mise à jour 2025
            </span>
          </div>

          <p className="text-[14px] text-[#64748B] leading-relaxed">
            Curriculum vitæ académique synthétisant cursus (UNINE / UNIGE), publications, maîtrises logicielles et corpus transcrits.
          </p>

          <button
            onClick={onOpenCvModal}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#7A2021] hover:bg-[#5b070e] text-white text-[13px] uppercase tracking-wider font-semibold py-3 px-4 rounded transition-all shadow hover:shadow-md cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">download</span>
            <span>Télécharger mon CV (PDF)</span>
          </button>

          <div className="flex items-center justify-center gap-4 pt-1 text-[14px] text-[#64748B]">
            <a
              href="https://github.com/mroylem"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#5b070e] transition-colors inline-flex items-center gap-1 font-medium"
            >
              <span className="material-symbols-outlined text-[16px]">code</span> GitHub
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#5b070e] transition-colors inline-flex items-center gap-1 font-medium"
            >
              <span className="material-symbols-outlined text-[16px]">badge</span> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
