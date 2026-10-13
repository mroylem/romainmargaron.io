import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenCvModal: () => void;
  onOpenContactModal: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCvModal, onOpenContactModal }) => {
  const [currentSection, setCurrentSection] = useState<string>('a-propos-et-contact');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        { id: 'a-propos-et-contact', offset: 0 },
        { id: 'memoire-de-recherche', el: document.getElementById('memoire-de-recherche') },
        { id: 'edition-tei-bel-air', el: document.getElementById('edition-tei-bel-air') },
        { id: 'methodologie', el: document.getElementById('methodologie') },
        { id: 'competences', el: document.getElementById('competences') }
      ];

      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.el && sec.el.offsetTop <= scrollPos) {
          setCurrentSection(sec.id);
          break;
        } else if (i === 0 && (!sec.el || window.scrollY < 200)) {
          setCurrentSection('a-propos-et-contact');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'a-propos-et-contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentSection('a-propos-et-contact');
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      const top = elem.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
      setCurrentSection(id);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F4EFEB]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(74,46,18,0.08)] py-3'
          : 'bg-[#F4EFEB]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(74,46,18,0.06)] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Name */}
        <button
          onClick={() => scrollToSection('a-propos-et-contact')}
          className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none"
        >
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl text-[#5b070e] font-semibold leading-none group-hover:text-[#7A2021] transition-colors">
              Romain Margaron
            </span>
            <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-widest mt-1">
              Humanités Numériques &amp; Archives
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-3 text-[13px] font-semibold tracking-wider uppercase">
          <button
            onClick={() => scrollToSection('a-propos-et-contact')}
            className={`transition-all px-3 py-1.5 rounded text-[13px] font-semibold tracking-wider uppercase cursor-pointer ${
              currentSection === 'a-propos-et-contact'
                ? 'bg-[#7A2021] text-white shadow-xs'
                : 'text-[#564240] hover:text-[#171c23] hover:bg-[#FAF8F5]'
            }`}
          >
            À propos &amp; Contact
          </button>
          <button
            onClick={() => scrollToSection('memoire-de-recherche')}
            className={`transition-all px-3 py-1.5 rounded text-[13px] font-semibold tracking-wider uppercase cursor-pointer ${
              currentSection === 'memoire-de-recherche'
                ? 'bg-[#7A2021] text-white shadow-xs'
                : 'text-[#564240] hover:text-[#171c23] hover:bg-[#FAF8F5]'
            }`}
          >
            Mémoire de Recherche
          </button>
          <button
            onClick={() => scrollToSection('edition-tei-bel-air')}
            className={`transition-all px-3 py-1.5 rounded text-[13px] font-semibold tracking-wider uppercase cursor-pointer ${
              currentSection === 'edition-tei-bel-air'
                ? 'bg-[#7A2021] text-white shadow-xs'
                : 'text-[#564240] hover:text-[#171c23] hover:bg-[#FAF8F5]'
            }`}
          >
            Édition TEI Bel-Air
          </button>
          <button
            onClick={() => scrollToSection('methodologie')}
            className={`transition-all px-3 py-1.5 rounded text-[13px] font-semibold tracking-wider uppercase cursor-pointer ${
              currentSection === 'methodologie'
                ? 'bg-[#7A2021] text-white shadow-xs'
                : 'text-[#564240] hover:text-[#171c23] hover:bg-[#FAF8F5]'
            }`}
          >
            Méthodologie
          </button>
          <button
            onClick={() => scrollToSection('competences')}
            className={`transition-all px-3 py-1.5 rounded text-[13px] font-semibold tracking-wider uppercase cursor-pointer ${
              currentSection === 'competences'
                ? 'bg-[#7A2021] text-white shadow-xs'
                : 'text-[#564240] hover:text-[#171c23] hover:bg-[#FAF8F5]'
            }`}
          >
            Compétences
          </button>
        </nav>

        {/* Action Button & Avatar */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCvModal}
            className="hidden sm:inline-flex items-center gap-2 bg-[#7A2021] hover:bg-[#5b070e] text-white text-[13px] font-semibold uppercase tracking-wider px-4 py-2.5 rounded transition-all shadow-[0_1px_4px_rgba(74,46,18,0.12)] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Télécharger le CV (PDF)</span>
          </button>

          <button
            onClick={onOpenContactModal}
            title="Dossier de candidature & Profil"
            className="w-9 h-9 rounded-full bg-[#5b070e] hover:bg-[#7A2021] text-white flex items-center justify-center shrink-0 cursor-pointer shadow-sm transition-transform active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded flex items-center justify-center text-[#5b070e] hover:bg-[#FAF8F5] cursor-pointer"
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F4EFEB] border-b border-[#E2DACD] px-6 py-4 flex flex-col gap-2 shadow-lg animate-fadeIn">
          <button
            onClick={() => scrollToSection('a-propos-et-contact')}
            className="text-left py-2 px-3 rounded font-medium text-[#564240] hover:bg-[#FAF8F5]"
          >
            À propos &amp; Contact
          </button>
          <button
            onClick={() => scrollToSection('memoire-de-recherche')}
            className="text-left py-2 px-3 rounded font-medium text-[#564240] hover:bg-[#FAF8F5]"
          >
            Mémoire de Recherche
          </button>
          <button
            onClick={() => scrollToSection('edition-tei-bel-air')}
            className="text-left py-2 px-3 rounded font-medium text-[#564240] hover:bg-[#FAF8F5]"
          >
            Édition TEI Bel-Air
          </button>
          <button
            onClick={() => scrollToSection('methodologie')}
            className="text-left py-2 px-3 rounded font-medium text-[#564240] hover:bg-[#FAF8F5]"
          >
            Méthodologie
          </button>
          <button
            onClick={() => scrollToSection('competences')}
            className="text-left py-2 px-3 rounded font-medium text-[#564240] hover:bg-[#FAF8F5]"
          >
            Compétences
          </button>
          <div className="pt-2 border-t border-[#E2DACD] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#7A2021] text-white text-[13px] font-semibold uppercase tracking-wider py-2.5 px-4 rounded"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Télécharger le CV (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
