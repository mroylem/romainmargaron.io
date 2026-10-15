import React, { useState } from 'react';

// Replace public/assets/img/photo.jpg with your portrait (keep the name, or update the path).
const PHOTO_URL = './assets/img/photo.jpg';

interface HeroSectionProps {
}

export const HeroSection: React.FC<HeroSectionProps> = ({ }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = '/romainmargaron.io/CV_RM_2026.pdf';
    a.download = 'CV_Romain_Margaron_2026.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section
      id="a-propos-et-contact"
      className="relative w-full bg-[#F4EFEB] border-b border-[#E2DACD] py-10 lg:py-14 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start justify-between">
        {/* Photo column */}
        <div className="w-40 sm:w-44 shrink-0">
          <div className="w-full aspect-square rounded border border-[#E2DACD] bg-[#FAF8F5] shadow-md overflow-hidden">
            <img src={PHOTO_URL} alt="Romain Margaron" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Left column: Academic Identity & Bio */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Heading */}
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#5b070e] tracking-tight font-semibold">
              Romain Margaron
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-[#4A2E12] mt-1 font-normal italic">
              Archives et Humanités numériques - Master de l'Université de Neuchâtel
            </p>
          </div>

          {/* Abstract */}
          <p className="text-[17px] sm:text-[18px] text-[#334155] text-justify leading-relaxed">
            Après un Bachelor en histoire et plusieurs années d’expérience professionnelle dans la médiation culturelle et la gestion administrative,
            j’ai souhaité approfondir mes compétences en intégrant le <span className="font-semibold text-[#5b070e]">Master en Patrimoine régional et Humanités numériques</span> de l'Université de Neuchâtel.
            Cette formation m'a permis de développer une double qualification, en combinant les méthodes historiques et archivistiques avec les outils numériques.
            Elle couvre aussi bien l'inventaire et la gestion de fonds que le traitement et la valorisation de données sous <span className="font-semibold text-[#5b070e]">R</span>, la <span className="font-semibold text-[#5b070e]">transcription automatique (HTR)
            </span> ou l'édition en <span className="font-semibold text-[#5b070e]">XML-TEI</span>.
            <br />Je vous présente ci-dessous deux projets réalisés durant mes études : mon mémoire de Master et un projet de transcription et d'édition numérique.
          </p>
        </div>

        {/* Right column: Action Card / CV Download */}
        <div className="w-full lg:w-80 shrink-0 bg-[#FAF8F5] p-6 rounded border border-[#E2DACD] shadow-md flex flex-col gap-4">
          {/* Contact grid */}
          <div className="flex flex-col border-b border-[#E2DACD] pb-3">
            {/* Courriel */}
            <div className="flex items-center gap-2.5 py-1.5 text-[#1E232A] cursor-default relative group">
              <span className="material-symbols-outlined text-[#7A2021] text-[20px] shrink-0">mail</span>
              <div className="min-w-0 flex-1 flex flex-col">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">Courriel</span>
                <a
                  href="mailto:romain.margaron@gmail.com"
                  className="text-[14px] text-[#5b070e] hover:underline font-medium"
                >
                  romain.margaron@gmail.com
                </a>
              </div>
              <button
                onClick={() => handleCopy('romain.margaron@gmail.com', 'courriel')}
                title="Copier le courriel"
                className="absolute right-0 top-1 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-[#FAF8F5] hover:bg-[#F4EFEB] rounded text-[#64748B] hover:text-[#5b070e]"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {copiedField === 'courriel' ? 'check' : 'content_copy'}
                </span>
              </button>
            </div>

            {/* Téléphone */}
            <div className="flex items-center gap-2.5 py-1.5 text-[#1E232A] cursor-default relative group">
              <span className="material-symbols-outlined text-[#7A2021] text-[20px] shrink-0">call</span>
              <div className="min-w-0 flex-1 flex flex-col">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">Téléphone</span>
                <a
                  href="tel:+41781234567"
                  className="text-[14px] text-[#1E232A] hover:text-[#5b070e] font-medium"
                >
                  +41 78 123 45 67
                </a>
              </div>
              <button
                onClick={() => handleCopy('+41 78 123 45 67', 'tel')}
                title="Copier le numéro"
                className="absolute right-0 top-1 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-[#FAF8F5] hover:bg-[#F4EFEB] rounded text-[#64748B] hover:text-[#5b070e]"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {copiedField === 'tel' ? 'check' : 'content_copy'}
                </span>
              </button>
            </div>

            {/* Localisation */}
            <div className="flex items-center gap-2.5 py-1.5 text-[#1E232A] cursor-default">
              <span className="material-symbols-outlined text-[#C29B38] text-[20px] shrink-0">location_on</span>
              <div className="min-w-0 flex-1 flex flex-col">
                <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">Localisation</span>
                <span className="text-[14px] text-[#1E232A] font-medium">Echallens</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleDownload}
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
              href="https://www.linkedin.com/in/romain-margaron-1412b6140/"
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
