import React from 'react';

interface FooterProps {
  onOpenLegalModal: (topic: string) => void;
  onOpenTeiReader: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal, onOpenTeiReader }) => {
  return (
    <footer className="w-full bg-[#F4EFEB] py-12 border-t border-[#E2DACD] shadow-[0_-1px_6px_rgba(74,46,18,0.04)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1 */}
          <div className="flex flex-col gap-2">
            <span className="font-serif text-2xl text-[#5b070e] font-medium">
              Dossier Académique &amp; Recherche
            </span>
            <p className="text-[14px] text-[#64748B] leading-relaxed">
              Candidature et présentation des travaux en Humanités Numériques, philologie computationnelle et valorisation des fonds manuscrits.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-2 text-[12px] text-[#334155]">
              <span className="inline-flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[15px] text-[#C29B38]">school</span>
                UNINE (Université de Neuchâtel)
              </span>
              <span className="text-[#ddc0be]">•</span>
              <span className="inline-flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[15px] text-[#C29B38]">school</span>
                UNIGE (Université de Genève)
              </span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-2">
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-2">
            <span className="text-[13px] font-semibold text-[#171c23] uppercase tracking-wider">
              Correspondance &amp; Réseaux
            </span>
            <div className="flex flex-col gap-2 text-[14px] text-[#334155]">
              <a
                href="mailto:romain.margaron@gmail.com"
                className="inline-flex items-center gap-2 hover:text-[#5b070e] transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-[#7A2021]">mail</span>
                <span>romain.margaron@gmail.com</span>
              </a>
              <a
                href="https://github.com/mroylem"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#5b070e] transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-[#7A2021]">code</span>
                <span>GitHub / mroylem</span>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#5b070e] transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-[#7A2021]">public</span>
                <span>Profil Académique &amp; LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#E2DACD]/80">
          <span className="text-[13px] text-[#64748B] text-center sm:text-left">
            © Romain Margaron — Humanités Numériques &amp; Archives. Réalisé sous standards TEI et principes FAIR.
          </span>
          <div className="flex items-center gap-4 text-[12px] uppercase tracking-wider text-[#64748B]">
            <button
              onClick={() => onOpenLegalModal('mentions')}
              className="hover:text-[#171c23] transition-colors cursor-pointer"
            >
              Mentions Légales &amp; Recherche
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalModal('ethique')}
              className="hover:text-[#171c23] transition-colors cursor-pointer"
            >
              Éthique des Données
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
